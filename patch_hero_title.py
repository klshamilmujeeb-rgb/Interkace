import re

with open("assets/core/index.js", "r") as f:
    text = f.read()

# Make it a bit more prominent since Teko is condensed
old_hero_title = 'textAlign: "center", width: "100%", fontSize: isMobile ? "clamp(32px, 8.5vw, 42px)" : "80px",'
new_hero_title = 'textAlign: "center", width: "100%", fontSize: isMobile ? "clamp(42px, 11vw, 54px)" : "80px",'

if old_hero_title in text:
    text = text.replace(old_hero_title, new_hero_title)
else:
    print("Could not find hero title font size")

with open("assets/core/index.js", "w") as f:
    f.write(text)

print("Hero title patched!")
