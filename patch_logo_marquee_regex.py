import re
with open('assets/core/index.js', 'r') as f:
    text = f.read()

pattern = r"\(0,x\.jsx\)\(`div`,{style:{display:`flex`,gap:48,alignItems:`center`,width:`max-content`,animation:`logoMarquee 25s linear infinite`},children:\[\.\.\.r,\.\.\.r,\.\.\.r\]\.map\(\(e,t\)=>\(0,x\.jsx\)\(`img`,{src:e\.src,alt:\"\",style:{width:e\.w\*\.7,height:e\.h\*\.7,objectFit:`contain`,filter:`grayscale\(1\)`,flexShrink:0}},t\)\)}\),\(0,x\.jsx\)\(`style`,{children:`\n              @keyframes logoMarquee \{\n                0%   \{ transform: translateX\(0\); \}\n                100% \{ transform: translateX\(calc\(-33\.333% - 16px\)\); \}\n              \}\n            `}\)"

new_logo = """(0,x.jsxs)(`div`,{style:{display:`flex`,gap:48,alignItems:`center`,width:`max-content`},children:[(0,x.jsx)(`div`,{style:{display:`flex`,gap:48,alignItems:`center`,animation:`logoMarquee 25s linear infinite`},children:r.map((e,t)=>(0,x.jsx)(`img`,{src:e.src,alt:"",style:{width:e.w*.7,height:e.h*.7,objectFit:`contain`,filter:`grayscale(1)`,flexShrink:0}},t))}),(0,x.jsx)(`div`,{'aria-hidden':"true",style:{display:`flex`,gap:48,alignItems:`center`,animation:`logoMarquee 25s linear infinite`},children:r.map((e,t)=>(0,x.jsx)(`img`,{src:e.src,alt:"",style:{width:e.w*.7,height:e.h*.7,objectFit:`contain`,filter:`grayscale(1)`,flexShrink:0}},t))}),(0,x.jsx)(`div`,{'aria-hidden':"true",style:{display:`flex`,gap:48,alignItems:`center`,animation:`logoMarquee 25s linear infinite`},children:r.map((e,t)=>(0,x.jsx)(`img`,{src:e.src,alt:"",style:{width:e.w*.7,height:e.h*.7,objectFit:`contain`,filter:`grayscale(1)`,flexShrink:0}},t))}),(0,x.jsx)(`div`,{'aria-hidden':"true",style:{display:`flex`,gap:48,alignItems:`center`,animation:`logoMarquee 25s linear infinite`},children:r.map((e,t)=>(0,x.jsx)(`img`,{src:e.src,alt:"",style:{width:e.w*.7,height:e.h*.7,objectFit:`contain`,filter:`grayscale(1)`,flexShrink:0}},t))})]}),(0,x.jsx)(`style`,{children:`\n              @keyframes logoMarquee {\n                0%   { transform: translateX(0); }\n                100% { transform: translateX(calc(-100% - 48px)); }\n              }\n            `})"""

text, count = re.subn(pattern, new_logo, text)

with open('assets/core/index.js', 'w') as f:
    f.write(text)

print(f"Patched {count} occurrences of logo marquee.")
