import re

with open("assets/core/index.js", "r") as f:
    text = f.read()

start = text.find("function CrowdCanvas({")
end = text.find("function renderPhoneMockup()")

new_crowd = """function CrowdCanvas({ src = "/assets/hero/hero-crowd-peeps.png", scale = 1 }) {
  return (0, x.jsxs)("div", {
    style: { position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none" },
    children: [
      (0, x.jsx)("style", { children: `
        @keyframes panCrowd {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-25%); }
        }
      ` }),
      (0, x.jsx)("div", {
        style: {
          display: "flex",
          width: "max-content",
          height: "100%",
          animation: "panCrowd 20s linear infinite"
        },
        children: [
          (0, x.jsx)("img", { src, style: { height: "100%", width: "auto", objectFit: "cover" } }),
          (0, x.jsx)("img", { src, style: { height: "100%", width: "auto", objectFit: "cover" } }),
          (0, x.jsx)("img", { src, style: { height: "100%", width: "auto", objectFit: "cover" } }),
          (0, x.jsx)("img", { src, style: { height: "100%", width: "auto", objectFit: "cover" } })
        ]
      })
    ]
  });
}
"""

text = text[:start] + new_crowd + text[end:]
with open("assets/core/index.js", "w") as f:
    f.write(text)
