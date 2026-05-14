import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { FLOORPLAN } from "./data/floorplan.js";
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakColor,
  TweakToggle,
  TweakButton,
} from "./tweaks-panel.jsx";

// HKCC 2026 — Interactive wayfinding map for Niusn booth #3E-D29
const DEST = FLOORPLAN.DESTINATION_ID;
const DEST_BOOTH = FLOORPLAN.booths.find(b => b.id === DEST);

const boothCenter = (b) => ({ x: b.x + b.w/2, y: b.y + b.h/2 });

// Route: bottom-left entrance → travel right/up into hall 3E → arrive at dest
// Path starts ABOVE the entrance pill top and travels along an aisle well clear
// of both the ENTRANCE and EXIT pills so the guide line never overlaps them.
function buildRoutePath(from, to) {
  const destCx = to.x + to.w/2;
  const destCy = to.y + to.h/2;
  // Pills center at y=770, spanning y=744 to y=796 (height 52).
  // Start path at y=740 (4px above pill top) and run horizontal aisle at y=720
  // to guarantee clearance over the EXIT pill at x≈210.
  const startY = 740;
  const aisleY = 720;
  const r = 10;
  return `M ${from.x} ${startY}
          L ${from.x} ${aisleY + r}
          Q ${from.x} ${aisleY} ${from.x + r} ${aisleY}
          L ${destCx - r} ${aisleY}
          Q ${destCx} ${aisleY} ${destCx} ${aisleY - r}
          L ${destCx} ${destCy + to.h/2 + 6}`;
}

// ───────── Map SVG ─────────
function MapSVG({ focused, onFocusDone, accent, showAllLabels }) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const [pathLen, setPathLen] = useState(0);
  const [routeDrawn, setRouteDrawn] = useState(false);
  const [aspect, setAspect] = useState(1000 / 800);

  const destCenter = boothCenter(DEST_BOOTH);
  const routeD = useMemo(() => buildRoutePath(FLOORPLAN.ENTRANCE, DEST_BOOTH), []);

  useEffect(() => {
    if (pathRef.current) setPathLen(pathRef.current.getTotalLength());
  }, []);

  useEffect(() => {
    const el = svgRef.current?.parentElement;
    if (!el) return;
    const ro = new ResizeObserver(entries => {
      for (const e of entries) {
        const { width, height } = e.contentRect;
        if (width > 0 && height > 0) setAspect(width / height);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const fitViewBox = useCallback(() => {
    // Grow viewBox to match container aspect so "meet" doesn't letterbox
    // and nothing gets clipped. World content sits roughly inside 60..960 / 80..700.
    const contentW = 1000, contentH = 800;
    const contentAspect = contentW / contentH;
    let w = contentW, h = contentH;
    if (aspect >= contentAspect) {
      // wider than content — expand width symmetrically
      w = contentH * aspect;
    } else {
      h = contentW / aspect;
    }
    return { x: (contentW - w) / 2, y: (contentH - h) / 2, w, h };
  }, [aspect]);

  const [vb, setVb] = useState({ x: 0, y: 0, w: 1000, h: 800 });

  useEffect(() => {
    if (!focused) setVb(fitViewBox());
  }, [aspect, focused, fitViewBox]);

  useEffect(() => {
    if (!focused) return;
    setRouteDrawn(false);
    // Zoom to a view that includes BOTH the entrance (bottom-left) and the
    // destination booth, so the route reads as a complete journey. World is
    // 1000x800, entrance at (95, 770), dest at ~(682, 278). We frame a box
    // from (40, 80) → (950, 790) and let aspect grow the shorter axis.
    // Frame includes HALL labels (y≈60) and entrance/exit pills (y≈770–800)
    const bx = 30, by = 50, bw = 930, bh = 760;
    const boxAspect = bw / bh;
    let vbW, vbH;
    if (aspect >= boxAspect) { vbH = bh; vbW = bh * aspect; }
    else { vbW = bw; vbH = bw / aspect; }
    const targetVb = {
      x: bx + bw / 2 - vbW / 2,
      y: by + bh / 2 - vbH / 2,
      w: vbW,
      h: vbH,
    };
    const startVb = fitViewBox();
    const dur = 1400;
    const t0 = performance.now();
    let raf;
    const step = now => {
      const p = Math.min(1, (now - t0) / dur);
      const e = p < 0.5 ? 4*p*p*p : 1 - Math.pow(-2*p+2, 3)/2;
      setVb({
        x: startVb.x + (targetVb.x - startVb.x) * e,
        y: startVb.y + (targetVb.y - startVb.y) * e,
        w: startVb.w + (targetVb.w - startVb.w) * e,
        h: startVb.h + (targetVb.h - startVb.h) * e,
      });
      if (p < 1) raf = requestAnimationFrame(step);
      else { setRouteDrawn(true); }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [focused]);

  const resetView = useCallback(() => {
    setRouteDrawn(false);
    if (onFocusDone) onFocusDone();
    const startVb = { ...vb };
    const targetVb = fitViewBox();
    const dur = 900;
    const t0 = performance.now();
    let raf;
    const step = now => {
      const p = Math.min(1, (now - t0) / dur);
      const e = p < 0.5 ? 4*p*p*p : 1 - Math.pow(-2*p+2, 3)/2;
      setVb({
        x: startVb.x + (targetVb.x - startVb.x) * e,
        y: startVb.y + (targetVb.y - startVb.y) * e,
        w: startVb.w + (targetVb.w - startVb.w) * e,
        h: startVb.h + (targetVb.h - startVb.h) * e,
      });
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  }, [vb, fitViewBox]);

  useEffect(() => { window.__resetMapView = resetView; }, [resetView]);

  // Hall color assignment
  const hallFill = (hallId) => {
    const map = {
      "3C": "#FBE4EB",
      "3D": "#F5E08C",
      "3E": "#FCE2D4",
    };
    return map[hallId] || "#FBE4EB";
  };

  return (
    <svg
      ref={svgRef}
      viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
      preserveAspectRatio="xMidYMid meet"
      className="map-svg"
      aria-label={`HKCC 2026 exhibition map — Niusn booth ${DEST}`}
    >
      <defs>
        <linearGradient id="destGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4C8D2" />
          <stop offset="100%" stopColor="#D94A6B" />
        </linearGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="bigGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="14" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E89BAD" strokeWidth="0.3" opacity="0.18" />
        </pattern>
      </defs>

      {/* Halls — label pills positioned ABOVE each hall so they don't overlap booths */}
      {FLOORPLAN.HALLS.map(h => (
        <g key={h.id}>
          <rect x={h.x} y={h.y} width={h.w} height={h.h} rx="8" fill="url(#grid)" />
          <rect x={h.x + h.w/2 - 48} y={h.y - 30} width={96} height={22} rx="11"
                fill="rgba(58, 42, 48, 0.92)"
                stroke="rgba(232, 155, 173, 0.55)" strokeWidth="0.6"
                opacity={focused ? 0.4 : 1}
                style={{ transition: "opacity .8s ease" }} />
          <text
            x={h.x + h.w/2} y={h.y - 15}
            fill="#FFF6F4"
            fontFamily="'Space Grotesk', sans-serif"
            fontSize="11.5"
            fontWeight="700"
            letterSpacing="0.2em"
            textAnchor="middle"
            opacity={focused ? 0.4 : 1}
            style={{ transition: "opacity .8s ease" }}
          >{h.label.toUpperCase()}</text>
        </g>
      ))}

      {/* Main stage — brand purple */}
      {(() => {
        const s = FLOORPLAN.MAIN_STAGE;
        return (
          <g opacity={focused ? 0.35 : 1} style={{ transition: "opacity .8s ease" }}>
            <rect x={s.x} y={s.y} width={s.w} height={s.h} rx="4"
                  fill="#F4C8D2"
                  stroke="#E89BAD" strokeWidth="0.8" />
            <text x={s.x + s.w/2} y={s.y + s.h/2 - 2}
                  textAnchor="middle" fill="#3A2A30"
                  fontFamily="'Space Grotesk', sans-serif" fontWeight="600" fontSize="11">
              {s.label}
            </text>
            <text x={s.x + s.w/2} y={s.y + s.h/2 + 12}
                  textAnchor="middle" fill="#5C5560"
                  fontFamily="Inter" fontSize="8.5">
              {s.seats}
            </text>
          </g>
        );
      })()}

      {/* Booths (all non-destination) */}
      {FLOORPLAN.booths.map(b => {
        if (b.id === DEST) return null;
        return (
          <g key={b.id}>
            <rect
              x={b.x} y={b.y} width={b.w} height={b.h} rx="1.5"
              fill="#FBE4EB"
              stroke="#E89BAD"
              strokeWidth="0.5"
              opacity={focused ? 0.45 : 0.95}
              style={{ transition: "opacity .8s ease" }}
            />
            {showAllLabels && (() => {
              const shortId = b.id.split('-')[1]; // e.g. "H31", "D29"
              const numOnly = shortId.replace(/^[A-Z]/, ''); // e.g. "31", "29"
              // For narrow booths (<22 wide), show just the number
              const label = b.w < 22 ? numOnly : shortId;
              const fontSize = b.w < 22
                ? Math.min(6.5, Math.max(5, b.w / 2.4))
                : Math.min(6.5, Math.max(5, b.w / 5.5));
              const tooSmall = b.h < 8 || b.w < 10;
              if (tooSmall) return null;
              return (
                <text
                  x={b.x + b.w/2} y={b.y + b.h/2 + fontSize * 0.35}
                  fill="#5C5560"
                  fontSize={fontSize}
                  textAnchor="middle"
                  fontFamily="'JetBrains Mono', ui-monospace, monospace"
                  fontWeight="500"
                  opacity={focused ? 0.3 : 0.85}
                  style={{ transition: "opacity .8s ease", pointerEvents: "none" }}
                >
                  {label}
                </text>
              );
            })()}
          </g>
        );
      })}

      {/* Route path */}
      <path
        ref={pathRef}
        d={routeD}
        fill="none"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={pathLen || 1}
        strokeDashoffset={routeDrawn ? 0 : pathLen || 1}
        style={{
          transition: routeDrawn ? "stroke-dashoffset 1.8s cubic-bezier(.65,0,.35,1)" : "none",
          filter: "drop-shadow(0 0 6px rgba(232, 155, 173, 0.75))",
        }}
        opacity={focused ? 1 : 0}
      />
      <path
        d={routeD}
        fill="none"
        stroke="#FFF6F4"
        strokeWidth="1"
        strokeDasharray="2 6"
        opacity={focused && routeDrawn ? 0.75 : 0}
        style={{ transition: "opacity .6s ease .4s" }}
      >
        {focused && routeDrawn && (
          <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.2s" repeatCount="indefinite" />
        )}
      </path>

      {/* Entrance + Exit markers — matching PDF source (simple up-arrow icons) */}
      {/* Icons are stacked ABOVE text for at-a-glance readability */}
      <g opacity={focused ? 0.55 : 1} style={{ transition: "opacity .8s ease" }}>
        {/* ENTRANCE — filled pill, primary accent */}
        <g transform={`translate(${FLOORPLAN.ENTRANCE.x}, ${FLOORPLAN.ENTRANCE.y})`}>
          <rect x="-36" y="-26" width="72" height="52" rx="8"
                fill="#E89BAD"
                stroke="#D94A6B" strokeWidth="1.1" />
          {/* Simple up-arrow matching PDF icon style */}
          <g transform="translate(0, -11)">
            <path d="M 0 7 L 0 -7 M -5.5 -1.5 L 0 -7 L 5.5 -1.5"
                  stroke="#FFF6F4" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
          <text x="0" y="14" fill="#FFF6F4"
                fontFamily="'Space Grotesk', sans-serif"
                fontWeight="700" fontSize="8.5"
                letterSpacing="0.22em" textAnchor="middle">
            ENTRANCE
          </text>
        </g>
        {/* EXIT — outlined pill, muted accent */}
        <g transform={`translate(${FLOORPLAN.EXIT.x}, ${FLOORPLAN.EXIT.y})`}>
          <rect x="-28" y="-26" width="56" height="52" rx="8"
                fill="#FFFBF2"
                stroke="#5C5560" strokeWidth="1.1" />
          {/* Down-arrow: exit direction */}
          <g transform="translate(0, -11)">
            <path d="M 0 -7 L 0 7 M -5.5 1.5 L 0 7 L 5.5 1.5"
                  stroke="#3A2A30" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
          <text x="0" y="14" fill="#3A2A30"
                fontFamily="'Space Grotesk', sans-serif"
                fontWeight="700" fontSize="9"
                letterSpacing="0.24em" textAnchor="middle">
            EXIT
          </text>
        </g>
      </g>

      {/* Destination booth — brand symbol + NIUSN wordmark */}
      <g>
        {[0,1,2].map(i => (
          <circle key={i} cx={destCenter.x} cy={destCenter.y} r="20" fill="none"
                  stroke="#D94A6B" strokeWidth="1.5" opacity="0">
            <animate attributeName="r" from="16" to="62" dur="2.6s" begin={`${i*0.87}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.85;0" dur="2.6s" begin={`${i*0.87}s`} repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="2.2;0.3" dur="2.6s" begin={`${i*0.87}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <circle cx={destCenter.x} cy={destCenter.y} r="48"
                fill="#E89BAD" opacity="0.30" filter="url(#bigGlow)" />
        <rect
          x={DEST_BOOTH.x} y={DEST_BOOTH.y}
          width={DEST_BOOTH.w} height={DEST_BOOTH.h}
          rx="2"
          fill="url(#destGrad)"
          stroke="#D94A6B"
          strokeWidth="1"
          filter="url(#softGlow)"
        />
        {/* Brand symbol (stylized N-mark) centered in booth */}
        <g transform={`translate(${destCenter.x}, ${destCenter.y - 1.4})`}>
          <path d="M -2.6 2 L -2.6 -2.6 L 2.6 2 L 2.6 -2.6"
                stroke="white" strokeWidth="0.9" fill="none"
                strokeLinecap="round" strokeLinejoin="round" />
        </g>
        {/* NIUSN wordmark label — only shown on focus, offset to the right to avoid overlap */}
        {focused && (
          <g transform={`translate(${DEST_BOOTH.x + DEST_BOOTH.w + 22}, ${destCenter.y})`}
             style={{ transition: "opacity .6s ease" }}>
            <rect x="-2" y="-6" width="38" height="12" rx="2.5"
                  fill="rgba(58, 42, 48, 0.95)"
                  stroke="rgba(232, 155, 173, 0.75)" strokeWidth="0.4" />
            <text x="17" y="2.4" textAnchor="middle" fill="white"
                  fontFamily="'Space Grotesk', sans-serif"
                  fontWeight="700" fontSize="6.4"
                  letterSpacing="0.12em">NIUSN</text>
            <path d="M -1 0 L -5 0" stroke="rgba(232, 155, 173, 0.75)" strokeWidth="0.6" />
          </g>
        )}
        {/* Floating pin above booth — removed per request */}
      </g>
    </svg>
  );
}

function InfoCard({ onFocus, focusing }) {
  return (
    <div className="info">
      <div className="info-top">
        <div className="brandrow">
          <div className="logo-mark" aria-hidden>
            <svg width="24" height="24" viewBox="0 0 22 22">
              <defs>
                <linearGradient id="lm" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#F4C8D2" />
                  <stop offset="100%" stopColor="#D94A6B" />
                </linearGradient>
              </defs>
              <rect width="22" height="22" rx="6" fill="url(#lm)" />
              <path d="M 6 15 L 6 7 L 16 15 L 16 7" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="brand">NIUSN</div>
            <div className="brand-sub">AI-Powered Animation Studio</div>
          </div>
        </div>
        <span className="live-pill">
          <span className="live-dot" />
          Live
        </span>
      </div>

      <div className="headline">
        <div className="eyebrow">Find us at</div>
        <div className="booth-id">
          <span className="hash">#</span>3E<span className="sep">-</span>D29
        </div>
        <div className="venue">Hong Kong Comic Con 2026 · HKCEC · Hall 3E</div>
      </div>

      <div className="meta-grid">
        <div className="meta-item">
          <div className="meta-label">Dates</div>
          <div className="meta-value">29–31 May 2026</div>
        </div>
        <div className="meta-item">
          <div className="meta-label">Hall</div>
          <div className="meta-value">3E · Row D</div>
        </div>
        <div className="meta-item full">
          <div className="meta-label">Opening hours</div>
          <div className="hours-list">
            <div className="hours-row"><span>Fri</span><span>10:00 – 20:00</span></div>
            <div className="hours-row"><span>Sat</span><span>10:00 – 20:00</span></div>
            <div className="hours-row"><span>Sun</span><span>10:00 – 19:00</span></div>
          </div>
          <div className="hours-foot">Last entry 30 min before close</div>
        </div>
      </div>

      <button className="focus-btn" onClick={onFocus} disabled={focusing}>
        <span>{focusing ? "SHOWING THE WAY…" : "SHOW ME THE WAY"}</span>
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
          <path d="M 3 7 L 11 7 M 7 3 L 11 7 L 7 11" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button className="reset-btn" onClick={() => window.__resetMapView && window.__resetMapView()}>
        See full floorplan
      </button>

      <div className="legend">
        <div className="legend-row">
          <span className="legend-sw dest" /><span>Niusn booth</span>
        </div>
        <div className="legend-row">
          <span className="legend-sw other" /><span>Other exhibitors</span>
        </div>
        <div className="legend-row">
          <span className="legend-sw entrance" /><span>Main entrance</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  // Default: full floorplan; route zoom is triggered by the landing page
  // (postMessage when #booth-info scrolls into view) or by "SHOW ME THE WAY".
  const [focusing, setFocusing] = useState(false);
  const autoFromParentDoneRef = useRef(false);

  const triggerFocus = useCallback(() => {
    setFocusing(false);
    setTimeout(() => setFocusing(true), 60);
  }, []);

  // Parent document (landing) scrolls the iframe into view → run once.
  useEffect(() => {
    function ack() {
      try {
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: "niusn-map:auto-focus-ack" }, window.location.origin);
        }
      } catch (e) { /* cross-origin / disabled */ }
    }
    function onMsg(e) {
      if (!e.data || e.data.type !== "niusn-map:auto-focus-route") return;
      if (e.origin !== window.location.origin) return;
      if (window.parent !== window && e.source !== window.parent) return;
      if (autoFromParentDoneRef.current) {
        ack();
        return;
      }
      autoFromParentDoneRef.current = true;
      triggerFocus();
      ack();
    }
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [triggerFocus]);

  const accent = t.accent || "#E89BAD";

  return (
    <div className="app">
      <div className="bg-aurora" aria-hidden />
      <InfoCard onFocus={triggerFocus} focusing={focusing} />
      <div className="map-wrap">
        <div className="map-chrome">
          <div className="chip">HKCEC · 3F · Halls 3C / 3D / 3E</div>
        </div>
        <MapSVG
          focused={focusing}
          onFocusDone={() => setFocusing(false)}
          accent={accent}
          showAllLabels={t.showLabels !== false}
        />
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Map" />
        <TweakColor label="Accent" value={t.accent} onChange={v => setTweak("accent", v)} />
        <TweakToggle label="Show all booth numbers" value={t.showLabels !== false} onChange={v => setTweak("showLabels", v)} />
        <TweakSection label="Actions" />
        <TweakButton label="Replay focus animation" onClick={triggerFocus} />
      </TweaksPanel>
    </div>
  );
}
