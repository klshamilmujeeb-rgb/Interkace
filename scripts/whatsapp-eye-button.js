/**
 * Interkace Floating WhatsApp Interactive Button
 * Features:
 * - Default/Static State: Crisp white official WhatsApp icon inside green pill + "WhatsApp Us" label
 * - Hover State: Expands smoothly, switches WhatsApp icon to Interactive Tracking Eyes + animated chevron dots + white "WhatsApp Us" text
 * - Perfectly sized (170px desktop / 164px mobile) so text never clips or overflows with generous breathing room
 */
(function() {
  if (typeof window === 'undefined') return;

  var whatsappNumber = '917994340614';
  var defaultMessage = encodeURIComponent('Hi Interkace Studio, I would like to build a modern website for my business.');
  var whatsappUrl = 'https://wa.me/' + whatsappNumber + '?text=' + defaultMessage;

  var style = document.createElement('style');
  style.innerHTML = `
    @keyframes bdDotPulse {
      0%, 100% { opacity: 0.25; transform: scale(0.85); }
      50% { opacity: 1; transform: scale(1.15); }
    }

    .bd-dot {
      animation: bdDotPulse 1.4s ease-in-out infinite;
      transform-origin: center;
    }

    /* Floating Pill Container */
    .antimetal-wa-btn {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 999999;
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      height: 54px;
      width: 200px;
      border-radius: 16px;
      background: #ffffff;
      box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.08);
      cursor: pointer;
      text-decoration: none;
      user-select: none;
      -webkit-user-select: none;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
      box-sizing: border-box;
      padding: 0;
      overflow: hidden;
    }

    .antimetal-wa-btn:hover {
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 14px 36px -4px rgba(37, 211, 102, 0.35), 0 0 0 1px rgba(37, 211, 102, 0.2), 0 4px 12px rgba(0, 0, 0, 0.12);
    }

    .antimetal-wa-btn:active {
      transform: translateY(0) scale(0.98);
    }

    /* Static Label on the right */
    .antimetal-wa-label {
      position: absolute;
      right: 14px;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      font-size: 15.5px;
      font-weight: 700;
      font-weight: 700;
      letter-spacing: -0.01em;
      color: #0f172a;
      transition: opacity 0.2s ease;
      z-index: 5;
      pointer-events: none;
      white-space: nowrap;
    }

    .antimetal-wa-btn:hover .antimetal-wa-label {
      opacity: 0;
    }

    /* Expanding Green Capsule on the left */
    .antimetal-wa-slider {
      position: absolute;
      left: 4px;
      top: 4px;
      bottom: 4px;
      width: 44px;
      border-radius: 12px;
      background: linear-gradient(180deg, #25D366 0%, #1db854 100%);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -2px 4px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(37, 211, 102, 0.3);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0;
      padding: 0;
      overflow: hidden;
      transition: width 0.28s cubic-bezier(0.65, 0, 0.35, 1), gap 0.28s ease, padding 0.28s ease;
      z-index: 10;
    }

    .antimetal-wa-btn:hover .antimetal-wa-slider {
      width: calc(100% - 8px);
      gap: 6px;
      padding: 0 12px 0 8px;
    }

    /* WhatsApp Icon (Visible in Static State) */
    .antimetal-wa-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      flex-shrink: 0;
      transition: opacity 0.2s ease;
    }

    .antimetal-wa-icon svg {
      width: 24px;
      height: 24px;
      display: block;
      fill: #ffffff;
    }

    .antimetal-wa-btn:hover .antimetal-wa-icon {
      display: none;
    }

    /* Interactive Eye Sockets (Visible in Hover State) */
    .antimetal-wa-eyes {
      display: none;
      align-items: center;
      gap: 2.5px;
      flex-shrink: 0;
      z-index: 12;
    }

    .antimetal-wa-btn:hover .antimetal-wa-eyes {
      display: flex;
    }

    .antimetal-wa-socket {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: #ffffff;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.15);
      flex-shrink: 0;
    }

    .antimetal-wa-pupil {
      width: 5.5px;
      height: 5.5px;
      border-radius: 50%;
      background-color: #0f172a;
      position: absolute;
      will-change: transform;
      transition: transform 0.05s ease-out;
    }

    .antimetal-wa-blinking {
      transform: scaleY(0.1) !important;
    }

    /* Double Chevron dots */
    .antimetal-wa-chevrons {
      display: none;
      align-items: center;
      gap: 3px;
      flex-shrink: 0;
    }

    .antimetal-wa-btn:hover .antimetal-wa-chevrons {
      display: flex;
    }

    .antimetal-wa-chevron-svg {
      width: 10px;
      height: 12px;
      flex-shrink: 0;
      overflow: visible;
    }

    /* Hover white label */
    .antimetal-wa-hover-text {
      display: none;
      font-size: 15.5px;
      font-weight: 700;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.01em;
      white-space: nowrap;
      margin-left: 2px;
      flex-shrink: 0;
    }

    .antimetal-wa-btn:hover .antimetal-wa-hover-text {
      display: inline-block;
    }


    @media (max-width: 768px) {

      .antimetal-wa-btn {
        bottom: 18px !important;
        right: 18px !important;
        height: 42px !important;
        width: 164px !important;
        border-radius: 13px !important;
        opacity: 0 !important;
        pointer-events: none !important;
        transform: translateY(20px) !important;
        transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }
      .antimetal-wa-btn.is-visible {
        opacity: 1 !important;
        pointer-events: auto !important;
        transform: translateY(0) !important;
      }


      .antimetal-wa-slider {
        height: 34px;
        width: 34px;
      }
      .antimetal-wa-icon {
        width: 34px;
        height: 34px;
      }
      .antimetal-wa-label {
        font-size: 13px;
        right: 12px;
      }
      .antimetal-wa-hover-text {
        font-size: 13px;
      }
    }
  `;
  document.head.appendChild(style);

  function createButton() {
    var oldBtn = document.getElementById('interkace-eye-whatsapp-btn') || document.getElementById('antimetal-wa-btn');
    if (oldBtn) oldBtn.remove();

    var btn = document.createElement('a');
    btn.id = 'antimetal-wa-btn';
    btn.className = 'antimetal-wa-btn';
    btn.href = whatsappUrl;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.setAttribute('aria-label', 'Chat on WhatsApp');

    // Official WhatsApp Icon SVG (White)
    var waIconSvg = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.988-1.393A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm4.707 13.293c-.22.617-1.12 1.13-1.577 1.196-.445.064-1.018.091-2.955-.71-2.148-.888-3.541-3.07-3.648-3.21-.107-.14-.876-1.166-.876-2.225 0-1.06.554-1.58.75-1.796.198-.216.434-.27.579-.27.145 0 .29 0 .42.008.136.008.318-.052.497.378.18.43.614 1.496.668 1.604.054.108.09.234.018.378-.072.144-.108.234-.216.36-.108.126-.228.28-.326.376-.108.107-.22.224-.095.438.125.215.556.918 1.193 1.485.82.73 1.512.956 1.727 1.063.215.108.341.09.467-.054.126-.144.538-.628.682-.843.144-.215.289-.18.487-.107.198.072 1.25.59 1.466.698.216.108.36.162.414.252.054.09.054.52-.166 1.137Z" fill="white"/>
      </svg>
    `;

    // Chevron SVG Dots
    var chevronSvg = `
      <svg width="10" height="12" viewBox="0 0 14 16" aria-hidden="true" focusable="false" class="antimetal-wa-chevron-svg">
        <g fill="#ffffff">
          <circle cx="2" cy="2" r="1.1" class="bd-dot" style="animation-delay: 0s"></circle>
          <circle cx="5" cy="5" r="1.1" class="bd-dot" style="animation-delay: 0.05s"></circle>
          <circle cx="8" cy="8" r="1.1" class="bd-dot" style="animation-delay: 0.1s"></circle>
          <circle cx="5" cy="11" r="1.1" class="bd-dot" style="animation-delay: 0.15s"></circle>
          <circle cx="2" cy="14" r="1.1" class="bd-dot" style="animation-delay: 0.2s"></circle>
          <circle cx="6" cy="2" r="1.1" class="bd-dot" style="animation-delay: 0.05s"></circle>
          <circle cx="9" cy="5" r="1.1" class="bd-dot" style="animation-delay: 0.1s"></circle>
          <circle cx="12" cy="8" r="1.1" class="bd-dot" style="animation-delay: 0.15s"></circle>
          <circle cx="9" cy="11" r="1.1" class="bd-dot" style="animation-delay: 0.2s"></circle>
          <circle cx="6" cy="14" r="1.1" class="bd-dot" style="animation-delay: 0.25s"></circle>
        </g>
      </svg>
    `;

    btn.innerHTML = `
      <div class="antimetal-wa-slider" id="antimetal-wa-slider">
        <div class="antimetal-wa-icon" id="antimetal-wa-icon">
          ${waIconSvg}
        </div>
        <div class="antimetal-wa-eyes" id="antimetal-eyes-box">
          <div class="antimetal-wa-socket" id="wa-eye-left">
            <div class="antimetal-wa-pupil" id="wa-pupil-left"></div>
          </div>
          <div class="antimetal-wa-socket" id="wa-eye-right">
            <div class="antimetal-wa-pupil" id="wa-pupil-right"></div>
          </div>
        </div>
        <div class="antimetal-wa-chevrons">
          ${chevronSvg}
        </div>
        <span class="antimetal-wa-hover-text">WhatsApp Us</span>
      </div>
      <span class="antimetal-wa-label">WhatsApp Us</span>
    `;

    document.body.appendChild(btn);

    var eyeLeft = document.getElementById('wa-eye-left');
    var eyeRight = document.getElementById('wa-eye-right');
    var pupilLeft = document.getElementById('wa-pupil-left');
    var pupilRight = document.getElementById('wa-pupil-right');
    var eyeContainer = document.getElementById('antimetal-eyes-box');

    // Blink Loop
    function triggerBlink() {
      if (!eyeLeft || !eyeRight) return;
      eyeLeft.classList.add('antimetal-wa-blinking');
      eyeRight.classList.add('antimetal-wa-blinking');
      setTimeout(function() {
        eyeLeft.classList.remove('antimetal-wa-blinking');
        eyeRight.classList.remove('antimetal-wa-blinking');
      }, 180);
    }

    setInterval(triggerBlink, 3400);

    // Interactive Pupil Tracking
    var maxRange = 3.6;

    function updatePupils(e) {
      if (!eyeContainer || !pupilLeft || !pupilRight) return;
      var rect = eyeContainer.getBoundingClientRect();
      var centerX = rect.left + rect.width / 2;
      var centerY = rect.top + rect.height / 2;

      var mouseX = e.clientX - centerX;
      var mouseY = e.clientY - centerY;

      var leftOffset = -4;
      var rightOffset = 4;

      function calcEyePos(offset) {
        var relX = mouseX - offset;
        var relY = mouseY;
        var dist = Math.sqrt(relX * relX + relY * relY);
        if (dist === 0) return { x: 0, y: 0 };
        var clamped = Math.min(dist, maxRange);
        var angle = Math.atan2(relY, relX);
        return {
          x: Math.cos(angle) * clamped,
          y: Math.sin(angle) * clamped
        };
      }

      var posL = calcEyePos(leftOffset);
      var posR = calcEyePos(rightOffset);

      pupilLeft.style.transform = 'translate(' + posL.x.toFixed(2) + 'px, ' + posL.y.toFixed(2) + 'px)';
      pupilRight.style.transform = 'translate(' + posR.x.toFixed(2) + 'px, ' + posR.y.toFixed(2) + 'px)';
    }

    
    window.addEventListener('mousemove', updatePupils, { passive: true });


    // Scroll trigger for mobile
    function checkScroll() {
      if (window.innerWidth <= 768) {
        var hero = document.getElementById('hero-section');
        var threshold = window.innerHeight * 0.7; // default threshold
        if (hero) {
          threshold = hero.offsetHeight * 0.8;
        }
        
        if (window.scrollY > threshold) {
          btn.classList.add('is-visible');
        } else {
          btn.classList.remove('is-visible');
        }
      } else {
        btn.classList.add('is-visible'); // Always visible on desktop
      }
    }
    
    window.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });
    
    // Also use a setInterval for the first 3 seconds to catch React mount
    var checkCount = 0;
    var mountCheck = setInterval(function() {
      checkScroll();
      checkCount++;
      if (checkCount > 10) clearInterval(mountCheck);
    }, 300);
    
    checkScroll(); // Initial check


  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createButton);
  } else {
    createButton();
  }
})();
