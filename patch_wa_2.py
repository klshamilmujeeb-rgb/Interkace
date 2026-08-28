import re

with open("scripts/whatsapp-eye-button.js", "r") as f:
    text = f.read()

# Replace the scroll logic with a MutationObserver to ensure we catch React rendering,
# and use window.innerHeight to trigger when scrolled past the first viewport.
# We will use window.scrollY > window.innerHeight * 0.75 as the trigger for mobile.

new_logic = """
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
"""

# The existing scroll_logic string to replace:
old_logic = """    // Scroll trigger for mobile
    function checkScroll() {
      if (window.innerWidth <= 600) {
        var hero = document.getElementById('hero-section');
        if (hero) {
          var rect = hero.getBoundingClientRect();
          if (rect.bottom < window.innerHeight / 2) {
            btn.classList.add('is-visible');
          } else {
            btn.classList.remove('is-visible');
          }
        } else {
          if (window.scrollY > 300) {
            btn.classList.add('is-visible');
          } else {
            btn.classList.remove('is-visible');
          }
        }
      } else {
        btn.classList.add('is-visible'); // Always visible on desktop if we were toggling it
      }
    }
    
    window.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });
    checkScroll(); // Initial check"""

text = text.replace(old_logic, new_logic)

# Make sure CSS media query targets 768px as well to be safe
text = text.replace("@media (max-width: 600px)", "@media (max-width: 768px)")

# Ensure opacity: 0 and pointer-events: none is strongly enforced!
css_injection = """
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
"""

old_css = """      .antimetal-wa-btn {
        bottom: 18px;
        right: 18px;
        height: 42px;
        width: 164px;
        border-radius: 13px;
        opacity: 0;
        pointer-events: none;
        transform: translateY(20px);
        transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .antimetal-wa-btn.is-visible {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
      }"""

if old_css in text:
    text = text.replace(old_css, css_injection)
else:
    print("WARNING: CSS not found to replace")

with open("scripts/whatsapp-eye-button.js", "w") as f:
    f.write(text)

print("Patched whatsapp button script!")
