import re
with open('assets/core/index.js', 'r') as f:
    text = f.read()

old_logo = """(0,x.jsx)(`div`,{style:{display:`flex`,gap:48,alignItems:`center`,width:`max-content`,animation:`logoMarquee 25s linear infinite`},children:[...r,...r,...r].map((e,t)=>(0,x.jsx)(`img`,{src:e.src,alt:"",style:{width:e.w*.7,height:e.h*.7,objectFit:`contain`,filter:`grayscale(1)`,flexShrink:0}},t))}),(0,x.jsx)(`style`,{children:`              @keyframes logoMarquee {                0%   { transform: translateX(0); }                100% { transform: translateX(calc(-33.333% - 16px)); }              }            `})"""

new_logo = """(0,x.jsxs)(`div`,{style:{display:`flex`,gap:48,alignItems:`center`,width:`max-content`},children:[(0,x.jsx)(`div`,{style:{display:`flex`,gap:48,alignItems:`center`,animation:`logoMarquee 25s linear infinite`},children:r.map((e,t)=>(0,x.jsx)(`img`,{src:e.src,alt:"",style:{width:e.w*.7,height:e.h*.7,objectFit:`contain`,filter:`grayscale(1)`,flexShrink:0}},t))}),(0,x.jsx)(`div`,{'aria-hidden':"true",style:{display:`flex`,gap:48,alignItems:`center`,animation:`logoMarquee 25s linear infinite`},children:r.map((e,t)=>(0,x.jsx)(`img`,{src:e.src,alt:"",style:{width:e.w*.7,height:e.h*.7,objectFit:`contain`,filter:`grayscale(1)`,flexShrink:0}},t))}),(0,x.jsx)(`div`,{'aria-hidden':"true",style:{display:`flex`,gap:48,alignItems:`center`,animation:`logoMarquee 25s linear infinite`},children:r.map((e,t)=>(0,x.jsx)(`img`,{src:e.src,alt:"",style:{width:e.w*.7,height:e.h*.7,objectFit:`contain`,filter:`grayscale(1)`,flexShrink:0}},t))}),(0,x.jsx)(`div`,{'aria-hidden':"true",style:{display:`flex`,gap:48,alignItems:`center`,animation:`logoMarquee 25s linear infinite`},children:r.map((e,t)=>(0,x.jsx)(`img`,{src:e.src,alt:"",style:{width:e.w*.7,height:e.h*.7,objectFit:`contain`,filter:`grayscale(1)`,flexShrink:0}},t))})]}),(0,x.jsx)(`style`,{children:`              @keyframes logoMarquee {                0%   { transform: translateX(0); }                100% { transform: translateX(calc(-100% - 48px)); }              }            `})"""

if old_logo in text:
    text = text.replace(old_logo, new_logo)
    with open('assets/core/index.js', 'w') as f:
        f.write(text)
    print("Patched logo marquee successfully!")
else:
    print("Logo marquee not found!")
