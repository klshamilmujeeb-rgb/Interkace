import re

with open("assets/core/index.js", "r") as f:
    text = f.read()

# Remove marginBottom from the Domain Pill
domain_style_old = """              background: "#f3f4f6",
              borderRadius: "16px",
              padding: "4px 14px",
              fontSize: "11px",
              color: "#4b5563",
              fontFamily: "\\"Teko\\", Ubuntu, system-ui, sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontWeight: 500,
              marginBottom: "8px",
              zIndex: 5"""

domain_style_new = """              background: "#f3f4f6",
              borderRadius: "16px",
              padding: "4px 14px",
              fontSize: "11px",
              color: "#4b5563",
              fontFamily: "\\"Teko\\", Ubuntu, system-ui, sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontWeight: 500,
              margin: "12px auto 0 auto",
              zIndex: 5"""

text = text.replace(domain_style_old, domain_style_new)

# Change Title margin to auto 0
title_style_old = """              fontSize: "clamp(18px, 4.8vw, 22px)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: "1.15",
              letterSpacing: "-0.5px",
              margin: "0 auto 6px auto",
              textAlign: "center",
              zIndex: 5,
              position: "relative",
              fontFamily: "\\"Teko\\", Ubuntu, system-ui, sans-serif",
              width: "100%",
              maxWidth: "100%",
              padding: "0 16px\""""

title_style_new = """              fontSize: "clamp(20px, 5.2vw, 24px)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: "1.15",
              letterSpacing: "-0.5px",
              margin: "auto 0",
              textAlign: "center",
              zIndex: 5,
              position: "relative",
              fontFamily: "\\"Teko\\", Ubuntu, system-ui, sans-serif",
              width: "100%",
              maxWidth: "100%",
              padding: "0 16px\""""

text = text.replace(title_style_old, title_style_new)

# Insert the dummy spacer right before the crowd
crowd_section = """          /* Contained animated crowd - smaller scale & contained inside phone screen */
          (0, x.jsx)("div", {"""

spacer_and_crowd = """          /* Dummy Spacer to push content up exactly the height of the crowd */
          (0, x.jsx)("div", { style: { height: "55%", flexShrink: 0, width: "100%" } }),
          /* Contained animated crowd - smaller scale & contained inside phone screen */
          (0, x.jsx)("div", {"""

# Since we might match the desktop mockup too if we are not careful, 
# let's only replace it once or isolate renderPhoneMockup
start_phone_mockup = text.find("function renderPhoneMockup()")
if start_phone_mockup != -1:
    end_phone_mockup = text.find("function renderDesktopBrowserMockup()", start_phone_mockup)
    phone_mockup_text = text[start_phone_mockup:end_phone_mockup]
    phone_mockup_text = phone_mockup_text.replace(crowd_section, spacer_and_crowd)
    text = text[:start_phone_mockup] + phone_mockup_text + text[end_phone_mockup:]

with open("assets/core/index.js", "w") as f:
    f.write(text)

print("Phone mockup patched successfully!")
