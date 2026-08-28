import re

with open("scripts/whatsapp-eye-button.js", "r") as f:
    text = f.read()

# Add hidden by default logic on mobile
style_injection_str = """
    @media (max-width: 600px) {
      .antimetal-wa-btn {
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
      }
"""

text = text.replace("    @media (max-width: 600px) {\n      .antimetal-wa-btn {\n        bottom: 18px;\n        right: 18px;\n        height: 42px;\n        width: 164px;\n        border-radius: 13px;\n      }", style_injection_str)

scroll_logic = """
    window.addEventListener('mousemove', updatePupils, { passive: true });

    // Scroll trigger for mobile
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
    checkScroll(); // Initial check
"""

text = text.replace("window.addEventListener('mousemove', updatePupils, { passive: true });", scroll_logic)

with open("scripts/whatsapp-eye-button.js", "w") as f:
    f.write(text)
