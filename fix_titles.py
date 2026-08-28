import re

with open("assets/core/index.js", "r") as f:
    text = f.read()

# Fix hero title
# Old: 
#              fontSize: isMobile ? "clamp(30px, 7.5vw, 38px)" : "80px",
#              lineHeight: isMobile ? "1.12" : "86px",
# ...
#              margin: 0,
# We want to add:
#              textAlign: "center",
#              width: "100%",
# And change fontSize: isMobile ? "clamp(32px, 8vw, 42px)" : "80px",

old_hero_title = 'fontSize: isMobile ? "clamp(30px, 7.5vw, 38px)" : "80px",'
new_hero_title = 'textAlign: "center", width: "100%", fontSize: isMobile ? "clamp(32px, 8.5vw, 42px)" : "80px",'

if old_hero_title in text:
    text = text.replace(old_hero_title, new_hero_title)
else:
    print("Could not find hero title font size")

# Fix mockup title for phone mockup
#              fontSize: "clamp(18px, 4.8vw, 22px)",
#              fontWeight: 800,
#              color: "#111827",
#              lineHeight: "1.15",
#              letterSpacing: "-0.5px",
#              margin: "0 0 6px 0",
#              textAlign: "center",
#              zIndex: 5,
#              position: "relative",
#              fontFamily: "\"Teko\", Ubuntu, system-ui, sans-serif",
#              maxWidth: "240px",
#              padding: "0 8px"

old_mockup_margin = 'margin: "0 0 6px 0",'
new_mockup_margin = 'margin: "0 auto 6px auto",'

# there might be multiple occurrences of margin: "0 0 6px 0", so we will use regex to find the one inside renderPhoneMockup
start_phone_mockup = text.find("function renderPhoneMockup()")
if start_phone_mockup != -1:
    end_phone_mockup = text.find("function renderDesktopMockup()", start_phone_mockup)
    phone_mockup_text = text[start_phone_mockup:end_phone_mockup]
    phone_mockup_text = phone_mockup_text.replace(old_mockup_margin, new_mockup_margin)
    text = text[:start_phone_mockup] + phone_mockup_text + text[end_phone_mockup:]
else:
    print("Could not find renderPhoneMockup")


with open("assets/core/index.js", "w") as f:
    f.write(text)

print("Titles fixed!")
