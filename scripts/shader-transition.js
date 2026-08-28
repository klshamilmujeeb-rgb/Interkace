/**
 * Interkace Studio - Orange Curve Morph Preloader & SVG Page Transition
 * Features:
 * 1. Initial Page Load: Refined Multilingual Greetings (English, Malayalam, Hindi, Arabic, Tamil, Japanese, French, etc.)
 *    - Dot removed
 *    - Smaller, refined typography (clamp 26px - 40px)
 *    - Language subtitles (German, Hindi, etc.) removed
 *    - Vibrant Studio Orange (#ea580c) background
 * 2. Page Transitions: Pure smooth Orange SVG Curve Morph curtain (No text during transitions)
 */
(function() {
  if (typeof window === 'undefined') return;

  var greetings = [
    "Hello",
    "നമസ്കാരം",
    "नमस्ते",
    "مرحبا",
    "வணக்கம்",
    "నమస్కారం",
    "こんにちは",
    "Bonjour",
    "Hola",
    "Ciao",
    "Hallo",
    "Interkace Studio"
  ];

  var overlay, svg, path, contentWrapper, wordEl;
  var isAnimating = false;

  // Insert styles immediately
  var style = document.createElement('style');
  style.id = 'morph-transition-styles';
  style.textContent = `
    #morph-transition-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99999999;
      pointer-events: none;
      display: none;
      overflow: hidden;
    }

    #morph-transition-overlay.active {
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
    }

    #morph-svg-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100vh + 600px);
      pointer-events: none;
      will-change: transform;
    }

    #morph-svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    #morph-path {
      fill: #ea580c; /* Studio Vibrant Orange */
    }

    #preloader-content {
      position: relative;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-family: 'Urbanist', 'Inter', -apple-system, sans-serif;
      text-align: center;
      transition: opacity 0.3s ease, transform 0.3s ease;
      user-select: none;
    }

    .preloader-heading-box {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #preloader-word {
      font-size: clamp(26px, 3.8vw, 40px);
      font-weight: 700;
      letter-spacing: -0.015em;
      color: #ffffff;
      margin: 0;
      line-height: 1.1;
      text-align: center;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    }
  `;
  (document.head || document.documentElement).appendChild(style);

  function createOverlay() {
    if (overlay) return;

    overlay = document.createElement('div');
    overlay.id = 'morph-transition-overlay';

    overlay.innerHTML = `
      <div id="morph-svg-container">
        <svg id="morph-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path id="morph-path" d="M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z"></path>
        </svg>
      </div>
      <div id="preloader-content">
        <div class="preloader-heading-box">
          <h1 id="preloader-word">Hello</h1>
        </div>
      </div>
    `;

    (document.body || document.documentElement).appendChild(overlay);
    svg = document.getElementById('morph-svg');
    path = document.getElementById('morph-path');
    contentWrapper = document.getElementById('preloader-content');
    wordEl = document.getElementById('preloader-word');
  }

  // Smooth easing helper
  function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  /**
   * Play SVG Curve Morph Exit Animation
   * Morphs bottom edge with parabolic curve while sliding upward
   */
  function playMorphExit(onComplete) {
    if (!overlay) createOverlay();
    overlay.classList.add('active');
    if (contentWrapper) {
      contentWrapper.style.opacity = '0';
      contentWrapper.style.transform = 'translateY(-20px)';
    }

    var svgContainer = document.getElementById('morph-svg-container');
    var duration = 900; // ms
    var start = performance.now();

    function step(now) {
      var elapsed = now - start;
      var t = Math.min(1, elapsed / duration);
      var ease = easeInOutCubic(t);

      // translateY from 0% to -100%
      var translateY = -ease * 100;
      svgContainer.style.transform = 'translateY(' + translateY + '%)';

      // Morph path curve depth
      var curve = Math.sin(t * Math.PI) * 45;
      var curveY = 100 - curve;
      var d = 'M 0 0 L 100 0 L 100 100 Q 50 ' + curveY.toFixed(2) + ' 0 100 Z';
      path.setAttribute('d', d);

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        overlay.classList.remove('active');
        path.setAttribute('d', 'M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z');
        svgContainer.style.transform = 'translateY(0%)';
        isAnimating = false;
        if (typeof onComplete === 'function') onComplete();
      }
    }

    requestAnimationFrame(step);
  }

  /**
   * Play SVG Curve Morph Enter (for Page Transitions)
   * Pure Orange Curtain sliding up from bottom (no text effect)
   */
  function playMorphEnter(onMidpoint) {
    if (!overlay) createOverlay();
    overlay.classList.add('active');
    if (contentWrapper) {
      contentWrapper.style.display = 'none'; // Strictly no text during page transitions
    }

    var svgContainer = document.getElementById('morph-svg-container');
    var duration = 600; // ms
    var start = performance.now();

    function step(now) {
      var elapsed = now - start;
      var t = Math.min(1, elapsed / duration);
      var ease = easeInOutCubic(t);

      // translateY from 100% to 0%
      var translateY = (1 - ease) * 100;
      svgContainer.style.transform = 'translateY(' + translateY + '%)';

      // Top curve morph
      var curve = Math.sin(t * Math.PI) * 45;
      var topCurveY = -curve;
      var d = 'M 0 ' + topCurveY.toFixed(2) + ' Q 50 ' + (topCurveY - 20).toFixed(2) + ' 100 ' + topCurveY.toFixed(2) + ' L 100 100 L 0 100 Z';
      path.setAttribute('d', d);

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        path.setAttribute('d', 'M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z');
        svgContainer.style.transform = 'translateY(0%)';
        if (typeof onMidpoint === 'function') onMidpoint();
      }
    }

    requestAnimationFrame(step);
  }

  /**
   * Public Page Transition API
   */
  window.playShaderTransition = function(onMidpoint, options) {
    playMorphEnter(function() {
      if (typeof onMidpoint === 'function') onMidpoint();
      if (!options || !options.navigating) {
        setTimeout(function() {
          playMorphExit();
        }, 80);
      }
    });
  };

  window.playMorphTransition = window.playShaderTransition;

  /**
   * Run Multilingual Preloader on Initial Website Open
   */
  function runPreloader() {
    createOverlay();
    overlay.classList.add('active');
    contentWrapper.style.display = 'flex';
    contentWrapper.style.opacity = '1';
    contentWrapper.style.transform = 'translateY(0)';

    var index = 0;

    function showNextWord() {
      if (index >= greetings.length) {
        // Finished greetings loop -> Morph Exit
        setTimeout(function() {
          playMorphExit(function() {
            sessionStorage.setItem('site_preloader_shown', 'true');
          });
        }, 160);
        return;
      }

      wordEl.textContent = greetings[index];

      // Quick refined pace
      var delay = (index === 0) ? 260 : (index === greetings.length - 1 ? 340 : 130);
      index++;
      setTimeout(showNextWord, delay);
    }

    showNextWord();
  }

  /**
   * Intercept Links for Morph Page Transitions (No text during transitions)
   */
  function setupLinkInterception() {
    document.addEventListener('click', function(e) {
      var target = e.target.closest('a');
      if (!target) return;
      var href = target.getAttribute('href');
      if (!href) return;

      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;
      if (target.target === '_blank') return;

      var url;
      try {
        url = new URL(href, window.location.href);
      } catch (err) {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;

      e.preventDefault();
      sessionStorage.setItem('morph_transition_active', '1');

      playMorphEnter(function() {
        window.location.href = href;
      });
    }, true);
  }

  // Check on Load
  function checkLoad() {
    createOverlay();
    var isTransition = sessionStorage.getItem('morph_transition_active');
    var preloaderShown = sessionStorage.getItem('site_preloader_shown');

    if (isTransition) {
      sessionStorage.removeItem('morph_transition_active');
      contentWrapper.style.display = 'none'; // strictly no text for page transitions
      playMorphExit();
    } else if (!preloaderShown) {
      runPreloader();
    } else {
      // If refreshed or direct visit: Run clean preloader
      runPreloader();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setupLinkInterception();
      checkLoad();
    });
  } else {
    setupLinkInterception();
    checkLoad();
  }
})();
