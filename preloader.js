/**
 * NIUSN landing preloader — ported from Downloads/preloader/Preloader.html (vanilla only).
 * Continuous ping‑pong fill (linear ramps — steady pace, no ease slowdown at peaks);
 * load gate → sweep to 100%, brief hold, dismiss.
 */
(function () {
  const root = document.getElementById("niusn-preloader");
  if (!root) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const MIN_MS = reducedMotion ? 320 : 1400;
  const MAX_WAIT_MS = 16000;
  const FINISH_MS = reducedMotion ? 400 : 900;
  const HOLD_AT_100_MS = reducedMotion ? 220 : 480;

  /* Ping‑pong half‑cycles — no hold at 0%/100% so motion never stalls mid‑loop */
  const UP_MS = reducedMotion ? 1400 : 3000;
  const DOWN_MS = reducedMotion ? 900 : 2000;
  const LOOP_TOTAL = UP_MS + DOWN_MS;

  const fill = root.querySelector(".niusn-preloader__fill");
  const rider = root.querySelector(".niusn-preloader__rider");
  const shadow = root.querySelector(".niusn-preloader__bunny-shadow");
  const bar = root.querySelector(".niusn-preloader__bar");
  const pctEl = root.querySelector(".niusn-preloader__pct");
  const composition = root.querySelector(".niusn-preloader__composition");
  const stage = root.querySelector(".niusn-preloader__stage");

  if (!fill || !rider || !shadow || !bar || !pctEl || !composition || !stage) return;

  let loopStart = performance.now();
  let rafId = 0;

  /** @type {'loop' | 'finishing' | 'holding'} */
  let phase = "loop";
  let gateReady = false;
  let finishStart = 0;
  let finishFrom = 0;
  let holdStart = 0;

  /** Ping‑pong p ∈ [0,1] — linear half‑cycles so velocity stays constant (no ease stall at ends). */
  function pingPongP(now) {
    const e = (now - loopStart) % LOOP_TOTAL;
    if (e < UP_MS) return e / UP_MS;
    return 1 - (e - UP_MS) / DOWN_MS;
  }

  let floaterTimer = null;
  function spawnFloater() {
    if (reducedMotion || gateReady) return;
    const el = document.createElement("div");
    el.className = "niusn-preloader__floater";
    const size = 26 + Math.random() * 28;
    el.style.left = 8 + Math.random() * 84 + "%";
    el.style.top = 65 + Math.random() * 18 + "%";
    el.style.setProperty("--fl-r", Math.random() * 16 - 8 + "deg");
    const dur = 6 + Math.random() * 4;
    el.style.animation = `niusn-preloader-drift ${dur}s linear forwards`;
    el.style.opacity = "0";
    el.innerHTML =
      '<img src="assets/preloader/bunny.webp?v=1" alt="" width="' +
      Math.round(size) +
      '" height="' +
      Math.round(size) +
      '" style="opacity:0.5;filter:saturate(0.8) brightness(1.05) drop-shadow(0 2px 6px rgba(236,90,133,0.18));" />';
    stage.appendChild(el);
    window.setTimeout(function () {
      el.remove();
    }, dur * 1000 + 100);
  }

  function stopFloaters() {
    if (floaterTimer != null) {
      window.clearInterval(floaterTimer);
      floaterTimer = null;
    }
  }

  let dismissed = false;
  function dismiss() {
    if (dismissed) return;
    dismissed = true;
    stopFloaters();
    if (rafId) cancelAnimationFrame(rafId);

    root.classList.add("niusn-preloader--exit");
    root.setAttribute("aria-hidden", "true");
    root.setAttribute("aria-busy", "false");

    document.documentElement.classList.remove("niusn-preloader-is-active");
    document.documentElement.classList.add("is-loaded");

    function cleanup() {
      root.remove();
      window.dispatchEvent(new CustomEvent("niusn:preloader-done"));
    }

    root.addEventListener(
      "transitionend",
      function (e) {
        if (e.propertyName === "opacity") cleanup();
      },
      { once: true }
    );
    window.setTimeout(cleanup, 650);
  }

  function metricsForFrame() {
    const barRect = bar.getBoundingClientRect();
    const compRect = composition.getBoundingClientRect();
    const innerInset = 7;
    const usable = Math.max(0, barRect.width - innerInset * 2);
    return {
      xAt: function (p) {
        return barRect.left - compRect.left + innerInset + p * usable;
      },
    };
  }

  function pctLabel(p) {
    const v = Math.round(Math.min(1, Math.max(0, p)) * 100);
    return Math.min(100, v);
  }

  function paintProgress(p, m) {
    const clamped = Math.min(1, Math.max(0, p));
    root.style.setProperty("--niusn-preloader-p", clamped.toFixed(4));
    const x = m.xAt(clamped);
    rider.style.left = x + "px";
    shadow.style.left = x + "px";
    const pct = pctLabel(clamped);
    pctEl.textContent = pct + "%";
    root.setAttribute("aria-valuenow", String(pct));
  }

  function frame(now) {
    if (dismissed) return;

    const m = metricsForFrame();
    let p = 0;

    if (phase === "holding") {
      paintProgress(1, m);
      if (now - holdStart >= HOLD_AT_100_MS) {
        dismiss();
        return;
      }
    } else if (phase === "finishing") {
      const t = Math.min(1, (now - finishStart) / FINISH_MS);
      p = finishFrom + (1 - finishFrom) * t;

      if (t >= 1) {
        phase = "holding";
        holdStart = now;
        composition.classList.add("is-done");
        paintProgress(1, m);
      } else {
        paintProgress(p, m);
      }
    } else {
      p = pingPongP(now);
      if (gateReady) {
        phase = "finishing";
        finishStart = now;
        finishFrom = p;
      }
      paintProgress(p, m);
    }

    rafId = requestAnimationFrame(frame);
  }

  rafId = requestAnimationFrame(frame);

  if (!reducedMotion) {
    floaterTimer = window.setInterval(spawnFloater, 1100);
    for (let i = 0; i < 3; i++) window.setTimeout(spawnFloater, i * 700);
  }

  function waitMin() {
    return new Promise(function (r) {
      window.setTimeout(r, MIN_MS);
    });
  }

  function waitLoad() {
    return new Promise(function (resolve) {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", resolve, { once: true });
    });
  }

  Promise.race([
    Promise.all([waitLoad(), waitMin()]),
    new Promise(function (r) {
      window.setTimeout(r, MAX_WAIT_MS);
    }),
  ]).then(function () {
    gateReady = true;
    stopFloaters();
  });
})();
