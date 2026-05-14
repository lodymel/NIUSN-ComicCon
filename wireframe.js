(function () {
  const siteHeader = document.querySelector(".site-header");
  function syncHeaderScrolled() {
    if (!siteHeader) return;
    const y = window.scrollY || document.documentElement.scrollTop;
    siteHeader.classList.toggle("is-scrolled", y > 24);
  }

  /** Real header height → mobile full-screen nav `top` / `min-height` (wrap, safe area, font load). */
  function syncHeaderOffsetVar() {
    if (!siteHeader) return;
    const h = siteHeader.getBoundingClientRect().height;
    if (h > 0) {
      document.documentElement.style.setProperty("--header-h", `${Math.round(h * 100) / 100}px`);
    }
  }

  syncHeaderScrolled();
  syncHeaderOffsetVar();
  window.addEventListener("scroll", syncHeaderScrolled, { passive: true });
  window.addEventListener("resize", syncHeaderOffsetVar, { passive: true });
  if ("ResizeObserver" in window && siteHeader) {
    new ResizeObserver(() => syncHeaderOffsetVar()).observe(siteHeader);
  }

  const heroSection = document.getElementById("top");
  let heroEventParallaxRaf = 0;
  function syncHeroEventParallax() {
    if (!heroSection) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      heroSection.style.removeProperty("--hero-event-y");
      return;
    }
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    const drift = Math.min(18, Math.round(y * 0.038 * 100) / 100);
    heroSection.style.setProperty("--hero-event-y", `${drift}px`);
  }
  function scheduleHeroEventParallax() {
    if (!heroSection) return;
    if (heroEventParallaxRaf) return;
    heroEventParallaxRaf = requestAnimationFrame(() => {
      heroEventParallaxRaf = 0;
      syncHeroEventParallax();
    });
  }
  if (heroSection && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("scroll", scheduleHeroEventParallax, { passive: true });
    window.addEventListener("resize", scheduleHeroEventParallax, { passive: true });
    scheduleHeroEventParallax();
  }

  const heroCompanyVideo =
    document.getElementById("hero-trailer") || document.getElementById("hero-company-video");
  const soundToggle = document.getElementById("sound-toggle");
  const ambientAudio = document.getElementById("niusn-ambient-audio");
  if (ambientAudio) {
    ambientAudio.volume = 0.5;
  }

  function readSoundPref() {
    try {
      return localStorage.getItem("niusn-sound") === "1";
    } catch (_) {
      return false;
    }
  }

  let soundOn = readSoundPref();

  function soundStateLabelText() {
    const L = document.documentElement.lang || "en";
    const api = window.NIUSN_I18N;
    if (api && typeof api.t === "function") return api.t(L, soundOn ? "sound.on" : "sound.off");
    return soundOn ? "ON" : "OFF";
  }

  function syncSoundToggleUi() {
    if (!soundToggle) return;
    soundToggle.setAttribute("aria-pressed", soundOn ? "true" : "false");
    soundToggle.classList.toggle("is-sound-on", soundOn);
    const stateEl = soundToggle.querySelector("[data-sound-state-label]");
    if (stateEl) stateEl.textContent = soundStateLabelText();
  }

  function applySoundToMedia() {
    if (heroCompanyVideo) {
      heroCompanyVideo.muted = !soundOn;
      if (soundOn) heroCompanyVideo.removeAttribute("muted");
      else heroCompanyVideo.setAttribute("muted", "");
    }
    if (ambientAudio) {
      if (soundOn) {
        const p = ambientAudio.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } else {
        ambientAudio.pause();
      }
    }
  }

  function setSoundGlobal(on) {
    soundOn = !!on;
    try {
      localStorage.setItem("niusn-sound", soundOn ? "1" : "0");
    } catch (_) {}
    applySoundToMedia();
    syncSoundToggleUi();
  }

  if (soundToggle) {
    soundToggle.addEventListener("click", () => setSoundGlobal(!soundOn));
    document.addEventListener("niusn:lang", () => syncSoundToggleUi());
  }

  if (heroCompanyVideo) {
    heroCompanyVideo.defaultMuted = true;
    heroCompanyVideo.loop = true;
    const prm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prm.matches) {
      heroCompanyVideo.removeAttribute("autoplay");
      heroCompanyVideo.pause();
    } else {
      applySoundToMedia();
      const tryPlay = () => {
        applySoundToMedia();
        const p = heroCompanyVideo.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      };
      tryPlay();
      heroCompanyVideo.addEventListener("pause", () => {
        if (document.visibilityState !== "visible") return;
        if (heroCompanyVideo.ended) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        tryPlay();
      });
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          tryPlay();
        }
      });
    }
  }

  syncSoundToggleUi();
  applySoundToMedia();

  const nav = document.getElementById("site-nav");
  const headerInner = document.querySelector(".header-inner");
  const toggle = document.querySelector(".nav-toggle");
  const triggers = document.querySelectorAll(".nav-item.has-dropdown .nav-trigger");
  const mqMobileNavLock = window.matchMedia("(max-width: 768px)");
  let mobileNavScrollY = 0;

  function clearMobileNavScrollLock() {
    document.documentElement.classList.remove("mobile-nav-locked");
    document.documentElement.style.removeProperty("--mobile-nav-lock-pad");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("left");
    document.body.style.removeProperty("right");
    document.body.style.removeProperty("width");
  }

  function setMobileNavScrollLocked(locked) {
    if (!mqMobileNavLock.matches) {
      clearMobileNavScrollLock();
      return;
    }
    if (locked) {
      mobileNavScrollY = window.scrollY || document.documentElement.scrollTop || 0;
      /* Measure while the bar is still visible — hiding overflow removes it and widens the layout (logo shift). */
      const scrollbarW = Math.max(0, window.innerWidth - document.documentElement.clientWidth);
      document.documentElement.style.setProperty("--mobile-nav-lock-pad", scrollbarW > 0 ? `${scrollbarW}px` : "0px");
      document.documentElement.classList.add("mobile-nav-locked");
      document.body.style.position = "fixed";
      document.body.style.top = `-${mobileNavScrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      clearMobileNavScrollLock();
      window.scrollTo(0, mobileNavScrollY);
    }
  }

  function onMobileNavLockViewportChange() {
    if (!mqMobileNavLock.matches) {
      clearMobileNavScrollLock();
      window.scrollTo(0, mobileNavScrollY);
    }
  }
  if (typeof mqMobileNavLock.addEventListener === "function") {
    mqMobileNavLock.addEventListener("change", onMobileNavLockViewportChange);
  } else if (typeof mqMobileNavLock.addListener === "function") {
    mqMobileNavLock.addListener(onMobileNavLockViewportChange);
  }

  function closeAllDropdowns() {
    document.querySelectorAll(".nav-item.is-open").forEach((el) => {
      el.classList.remove("is-open");
      const btn = el.querySelector(".nav-trigger");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  }

  function closeMobileNav() {
    const wasOpen = nav && nav.classList.contains("is-open");
    if (nav) nav.classList.remove("is-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    closeAllDropdowns();
    if (wasOpen) setMobileNavScrollLocked(false);
  }

  document.addEventListener("niusn:close-mobile-nav", closeMobileNav);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (!open) closeAllDropdowns();
      if (mqMobileNavLock.matches) {
        setMobileNavScrollLocked(open);
      }
      requestAnimationFrame(() => {
        syncHeaderOffsetVar();
        if (open) {
          requestAnimationFrame(updateNavSpyLine);
        }
      });
    });
  }

  const SPY_SECTION_IDS = ["top", "booth-info", "what-we-do", "contact"];

  /** After in-nav # click, keep underline on target until scroll catches up (avoids lag vs smooth scroll). */
  let navIntentSectionId = null;
  let navIntentClearTimer = 0;

  function setNavSpyIntent(sectionId) {
    if (!SPY_SECTION_IDS.includes(sectionId)) return;
    navIntentSectionId = sectionId;
    if (navIntentClearTimer) clearTimeout(navIntentClearTimer);
    navIntentClearTimer = setTimeout(() => {
      navIntentClearTimer = 0;
      navIntentSectionId = null;
    }, 2200);
    spyRaf = 0;
    updateNavSpyLine();
  }

  function computeActiveSpySection() {
    const header = document.querySelector(".site-header");
    const offset = (header ? header.getBoundingClientRect().height : 56) + 16;
    const y = (window.scrollY || document.documentElement.scrollTop || 0) + offset;
    let active = "top";
    for (const id of SPY_SECTION_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.offsetTop <= y) active = id;
    }
    return active;
  }

  function navLinkSelectorForSectionSpy(sectionId) {
    const map = {
      top: 'a[href="#top"]',
      "booth-info": 'a[href="#booth-info"]',
      "what-we-do": 'a[href="#what-we-do"]',
      contact: 'a[href="#contact"]',
    };
    return map[sectionId] || null;
  }

  function spyMarkerTarget(navEl, sectionId) {
    if (!navEl) return null;
    const sel = navLinkSelectorForSectionSpy(sectionId);
    return sel ? navEl.querySelector(sel) : null;
  }

  /** Gap below `#site-nav`; active line sits on scrim bottom edge */
  function navLineFlushBottomPx() {
    if (!headerInner || !nav) return 0;
    const innerRect = headerInner.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    return Math.max(0, Math.round((innerRect.bottom - navRect.bottom) * 100) / 100);
  }

  function sectionIdForNavLine() {
    if (navIntentSectionId && SPY_SECTION_IDS.includes(navIntentSectionId)) {
      const scrolledTo = computeActiveSpySection();
      if (scrolledTo === navIntentSectionId) {
        navIntentSectionId = null;
        if (navIntentClearTimer) {
          clearTimeout(navIntentClearTimer);
          navIntentClearTimer = 0;
        }
      } else {
        return navIntentSectionId;
      }
    }
    return computeActiveSpySection();
  }

  function updateNavSpyLine() {
    if (!nav) return;
    const line = nav.querySelector(".nav-active-line");
    if (!line) return;

    const mqMobile = window.matchMedia("(max-width: 768px)");

    if (mqMobile.matches && !nav.classList.contains("is-open")) {
      nav.classList.remove("nav-has-active-line");
      line.style.opacity = "0";
      line.style.visibility = "hidden";
      nav.querySelectorAll(".nav-link, .nav-cta").forEach((el) => {
        el.classList.remove("is-active");
      });
      return;
    }

    const sectionId = sectionIdForNavLine();
    const target = spyMarkerTarget(nav, sectionId);
    nav.querySelectorAll(".nav-link, .nav-cta").forEach((el) => {
      el.classList.remove("is-active");
    });

    if (!target) {
      nav.classList.remove("nav-has-active-line");
      line.style.opacity = "0";
      line.style.visibility = "";
      return;
    }

    target.classList.add("is-active");

    /* Mobile sheet: no underline rail — positioning never aligned cleanly; keep glow-only `.is-active`. */
    if (mqMobile.matches) {
      nav.classList.remove("nav-has-active-line");
      line.style.opacity = "0";
      line.style.visibility = "hidden";
      return;
    }

    line.style.visibility = "";
    const navRect = nav.getBoundingClientRect();
    const mRect = target.getBoundingClientRect();

    const left = mRect.left - navRect.left + nav.scrollLeft;
    const width = Math.max(20, mRect.width);

    line.style.left = `${left}px`;
    line.style.width = `${width}px`;
    line.style.removeProperty("opacity");

    line.style.top = "auto";
    const flush = navLineFlushBottomPx();
    line.style.bottom = flush > 0 ? `${-flush}px` : "0";

    nav.classList.add("nav-has-active-line");
  }

  let spyRaf = 0;
  function scheduleNavSpyUpdate() {
    if (spyRaf) return;
    spyRaf = requestAnimationFrame(() => {
      spyRaf = 0;
      updateNavSpyLine();
    });
  }

  window.addEventListener("scroll", scheduleNavSpyUpdate, { passive: true });
  window.addEventListener("resize", scheduleNavSpyUpdate);
  window.visualViewport?.addEventListener("resize", scheduleNavSpyUpdate);
  window.addEventListener("hashchange", () => {
    const h = (location.hash || "").replace(/^#/, "");
    if (h && SPY_SECTION_IDS.includes(h)) setNavSpyIntent(h);
    else {
      spyRaf = 0;
      updateNavSpyLine();
    }
  });
  window.addEventListener("niusn:lang", scheduleNavSpyUpdate);
  nav?.addEventListener("scroll", scheduleNavSpyUpdate, { passive: true });

  scheduleNavSpyUpdate();

  nav?.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", () => {
      const href = a.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const id = href.slice(1);
        if (SPY_SECTION_IDS.includes(id)) setNavSpyIntent(id);
      }
      closeMobileNav();
      requestAnimationFrame(() => {
        syncHeaderOffsetVar();
      });
    });
  });

  document.querySelector('a.logo[href="#top"]')?.addEventListener("click", () => {
    setNavSpyIntent("top");
  });

  triggers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".nav-item");
      const willOpen = !item.classList.contains("is-open");
      closeAllDropdowns();
      if (willOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-item.has-dropdown")) closeAllDropdowns();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMobileNav();
    }
  });

  const dialog = document.getElementById("booth-dialog");
  const openers = document.querySelectorAll(".js-open-booth");

  function openBoothMap() {
    if (dialog && typeof dialog.showModal === "function") {
      dialog.showModal();
      closeMobileNav();
    }
  }

  openers.forEach((btn) => {
    btn.addEventListener("click", openBoothMap);
  });

  if (dialog) {
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });
    dialog.querySelector(".dialog-close")?.addEventListener("click", () => {
      if (dialog.open) dialog.close();
    });
  }

  const wwdCopy = document.querySelector("#what-we-do .wwd-copy");
  const wwdRevealSentinel = document.querySelector(".wwd-description-wrapper");

  /** 8bit-style per-line stagger — delays on .wwd-line (--wwd-td) for the slide-up mask. */
  function setWwdLineDelays() {
    if (!wwdCopy) return;
    const step = 0.072;
    const pLines = wwdCopy.querySelectorAll(".wwd-display--primary .wwd-line");
    const sLines = wwdCopy.querySelectorAll(".wwd-display--secondary .wwd-line");
    pLines.forEach((line, i) => {
      line.style.setProperty("--wwd-td", `${(0.04 + i * step).toFixed(3)}s`);
    });
    const sStart = 0.04 + pLines.length * step + 0.055;
    sLines.forEach((line, i) => {
      line.style.setProperty("--wwd-td", `${(sStart + i * step).toFixed(3)}s`);
    });
  }

  setWwdLineDelays();
  window.addEventListener("niusn:lang", setWwdLineDelays, { passive: true });
  const contactHeadlines = document.getElementById("contact-title");
  const contactNaya = document.querySelector(".contact-naya");
  const reduceMotionReveal = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let revealLastScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
  let revealScrollDirection = "down";
  function trackRevealScrollDirection() {
    const y = window.pageYOffset || document.documentElement.scrollTop || 0;
    if (y < revealLastScrollY - 2) revealScrollDirection = "up";
    else if (y > revealLastScrollY + 2) revealScrollDirection = "down";
    revealLastScrollY = y;
  }

  if (!reduceMotionReveal && "IntersectionObserver" in window && (wwdCopy || contactNaya)) {
    window.addEventListener("scroll", trackRevealScrollDirection, { passive: true });
  }

  if (wwdCopy) {
    if (reduceMotionReveal || !("IntersectionObserver" in window)) {
      wwdCopy.classList.add("is-revealed", "wwd-copy--was-in-view");
    } else {
      const ioWwd = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry) return;
          if (entry.isIntersecting) {
            wwdCopy.classList.add("wwd-copy--was-in-view", "is-revealed");
            wwdCopy.classList.toggle("wwd-scroll-up-in", revealScrollDirection === "up");
            wwdCopy.removeAttribute("data-wwd-exit");
          } else {
            wwdCopy.setAttribute("data-wwd-exit", revealScrollDirection === "up" ? "up" : "down");
            wwdCopy.classList.remove("is-revealed", "wwd-scroll-up-in");
          }
        },
        { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.18 }
      );
      const target = wwdRevealSentinel || wwdCopy;
      ioWwd.observe(target);
    }
  }

  if (contactNaya) {
    if (reduceMotionReveal || !("IntersectionObserver" in window)) {
      contactNaya.classList.add("is-revealed");
      if (contactHeadlines) {
        contactHeadlines.classList.add("is-revealed", "wwd-copy--was-in-view");
      }
    } else {
      /* Single viewport observer drives WWD-style in/out for tags, copy, form, headlines */
      const ioContactReveal = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry) return;
          if (entry.isIntersecting) {
            contactNaya.classList.add("is-revealed");
            if (contactHeadlines && contactHeadlines.classList.contains("wwd-copy--contact-headlines")) {
              contactHeadlines.classList.add("wwd-copy--was-in-view", "is-revealed");
              contactHeadlines.classList.toggle("wwd-scroll-up-in", revealScrollDirection === "up");
              contactHeadlines.removeAttribute("data-wwd-exit");
            }
          } else {
            contactNaya.classList.remove("is-revealed");
            if (contactHeadlines && contactHeadlines.classList.contains("wwd-copy--contact-headlines")) {
              contactHeadlines.setAttribute("data-wwd-exit", revealScrollDirection === "up" ? "up" : "down");
              contactHeadlines.classList.remove("is-revealed", "wwd-scroll-up-in");
            }
          }
        },
        { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.18 }
      );
      ioContactReveal.observe(contactNaya);
    }
  }

  const contactFormNaya = document.querySelector(".contact-form.contact-form--naya");
  const contactSubmitNaya = contactFormNaya?.querySelector(".contact-submit-naya");

  function syncContactSubmitNayaEnabled() {
    if (!contactFormNaya || !contactSubmitNaya) return;
    contactSubmitNaya.disabled = !contactFormNaya.checkValidity();
  }

  if (contactFormNaya && contactSubmitNaya) {
    contactFormNaya.addEventListener("input", syncContactSubmitNayaEnabled);
    contactFormNaya.addEventListener("change", syncContactSubmitNayaEnabled);
    window.addEventListener("niusn:lang", syncContactSubmitNayaEnabled);
    syncContactSubmitNayaEnabled();

    contactFormNaya.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!contactFormNaya.checkValidity() || contactSubmitNaya.disabled) return;
      /* Static site: replace this handler if you add Formspree/API */
      contactFormNaya.reset();
      syncContactSubmitNayaEnabled();
    });
  }

  const scrollTopBtn = document.getElementById("scroll-to-top");
  if (scrollTopBtn) {
    const rootEl = document.documentElement;
    let fabHideTimer = null;

    function setScrollTopProgress() {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const y = window.scrollY || doc.scrollTop || 0;
      const p = maxScroll <= 0 ? 0 : Math.min(1, Math.max(0, y / maxScroll));
      scrollTopBtn.style.setProperty("--scroll-p", String(Math.round(p * 10000) / 100));
    }

    function syncScrollTopFab() {
      const loaded = rootEl.classList.contains("is-loaded");
      const y = window.scrollY || document.documentElement.scrollTop;
      const show = loaded && y > 420;

      setScrollTopProgress();

      if (show) {
        if (fabHideTimer) {
          window.clearTimeout(fabHideTimer);
          fabHideTimer = null;
        }
        scrollTopBtn.removeAttribute("hidden");
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => scrollTopBtn.classList.add("is-visible"));
        });
      } else {
        scrollTopBtn.classList.remove("is-visible");
        if (scrollTopBtn.hasAttribute("hidden")) return;
        if (fabHideTimer) window.clearTimeout(fabHideTimer);
        fabHideTimer = window.setTimeout(() => {
          fabHideTimer = null;
          scrollTopBtn.setAttribute("hidden", "");
        }, 700);
      }
    }

    window.addEventListener("scroll", syncScrollTopFab, { passive: true });
    window.addEventListener("resize", syncScrollTopFab, { passive: true });
    window.addEventListener("niusn:lang", syncScrollTopFab);
    const moFab = new MutationObserver(syncScrollTopFab);
    moFab.observe(rootEl, { attributes: true, attributeFilter: ["class"] });

    scrollTopBtn.addEventListener("click", () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });

    syncScrollTopFab();
  }

  const scheduleTabsRoot = document.querySelector("[data-schedule-tabs]");
  if (scheduleTabsRoot) {
    const tablist = scheduleTabsRoot.querySelector('[role="tablist"]');
    const line = tablist?.querySelector(".schedule-tabs__active-line");
    const tabs = tablist ? [...tablist.querySelectorAll('[role="tab"]')] : [];
    if (tabs.length) {
      const panels = tabs
        .map((t) => document.getElementById(t.getAttribute("aria-controls") || ""))
        .filter((el) => el instanceof HTMLElement);

      function focusTab(index) {
        const t = tabs[index];
        if (t) t.focus();
      }

      function updateScheduleTabLine() {
        if (!tablist || !line) return;
        const active = tabs.find((t) => t.classList.contains("is-active")) || tabs[0];
        if (!active) return;
        const w = Math.max(16, active.offsetWidth);
        const left = active.offsetLeft;
        line.style.left = `${left}px`;
        line.style.width = `${w}px`;
        tablist.classList.add("schedule-tabs__list--has-line");
      }

      function scheduleTabLineUpdate() {
        requestAnimationFrame(updateScheduleTabLine);
      }

      function select(index) {
        const n = tabs.length;
        if (!n) return;
        const i = ((index % n) + n) % n;
        tabs.forEach((tab, j) => {
          const on = j === i;
          tab.classList.toggle("is-active", on);
          tab.setAttribute("aria-selected", on ? "true" : "false");
          tab.tabIndex = on ? 0 : -1;
        });
        panels.forEach((p, j) => {
          if (j === i) p.removeAttribute("hidden");
          else p.setAttribute("hidden", "");
        });
        scheduleTabLineUpdate();
        requestAnimationFrame(scheduleTabLineUpdate);
      }

      window.addEventListener("resize", scheduleTabLineUpdate, { passive: true });
      window.visualViewport?.addEventListener("resize", scheduleTabLineUpdate);
      document.addEventListener("niusn:lang", scheduleTabLineUpdate);
      if ("ResizeObserver" in window && tablist) {
        new ResizeObserver(scheduleTabLineUpdate).observe(tablist);
      }

      tabs.forEach((tab, i) => {
        tab.addEventListener("click", () => select(i));
        tab.addEventListener("keydown", (e) => {
          const k = e.key;
          if (k === "ArrowRight" || k === "ArrowDown") {
            e.preventDefault();
            const next = (i + 1) % tabs.length;
            select(next);
            focusTab(next);
          } else if (k === "ArrowLeft" || k === "ArrowUp") {
            e.preventDefault();
            const prev = (i - 1 + tabs.length) % tabs.length;
            select(prev);
            focusTab(prev);
          } else if (k === "Home") {
            e.preventDefault();
            select(0);
            focusTab(0);
          } else if (k === "End") {
            e.preventDefault();
            const last = tabs.length - 1;
            select(last);
            focusTab(last);
          }
        });
      });

      if (document.fonts && typeof document.fonts.ready !== "undefined") {
        document.fonts.ready.then(() => scheduleTabLineUpdate());
      }
      scheduleTabLineUpdate();
    }
  }
})();
