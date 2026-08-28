import re

with open("assets/core/index.js", "r") as f:
    text = f.read()

start = text.find("children:i?(0,x.jsxs)(`div`,{style:{position:`relative`,display:`flex`,alignItems:`center`")
end = text.find(":(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,background:`#F0F0F0`,borderRadius:55", start)

new_nav = """children:i?(0,x.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,background:`#F0F0F0`,borderRadius:S?28:32,padding:S?`16px 14px 16px 18px`:`0 14px 0 18px`,gap:0,height:S?278:52,width:`min(350px, calc(100vw - 32px))`,boxShadow:`0 8px 32px rgba(0,0,0,0.12)`,willChange:`transform`,transition:`height 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.45s cubic-bezier(0.16, 1, 0.3, 1), padding 0.45s cubic-bezier(0.16, 1, 0.3, 1)`,overflow:`hidden`,boxSizing:`border-box`},children:[
(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,width:`100%`,height:S?36:52,flexShrink:0,transition:`height 0.45s cubic-bezier(0.16, 1, 0.3, 1)`},children:[
u?(0,x.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,padding:`0 4px`},children:Array.from({length:G}).map((e,t)=>(0,x.jsx)(`div`,{style:{height:7,flexShrink:0,width:p===t?24:7,borderRadius:4,background:p===t?B:`${B}40`,transition:`width 0.45s cubic-bezier(0.4,0,0.2,1), background 0.3s ease`}},t))}):(0,x.jsx)(`div`,{onClick:()=>window.scrollTo({top:0,behavior:`smooth`}),style:{display:`flex`,alignItems:`center`,flexShrink:0,cursor:`pointer`},children:(0,x.jsx)(`img`,{src:D,alt:`UMANO`,style:{height:28,width:`auto`,objectFit:`contain`}})}),
(0,x.jsxs)(`button`,{"aria-label":S?`Close menu`:`Open menu`,onClick:()=>C(!S),style:{background:`#000`,color:`#fff`,border:`none`,borderRadius:20,width:36,height:36,padding:0,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,transition:`transform 0.2s ease`},children:[S?(0,x.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,x.jsx)(`path`,{d:`M4 4L12 12M12 4L4 12`,stroke:`#fff`,strokeWidth:`2`,strokeLinecap:`round`})}):(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`3px`,alignItems:`center`},children:[(0,x.jsx)(`span`,{style:{display:`block`,width:14,height:2,background:`#fff`,borderRadius:1}}),(0,x.jsx)(`span`,{style:{display:`block`,width:14,height:2,background:`#fff`,borderRadius:1}}),(0,x.jsx)(`span`,{style:{display:`block`,width:14,height:2,background:`#fff`,borderRadius:1}})]})]})
]}),
(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10,width:`100%`,opacity:S?1:0,transform:S?`translateY(0)`:`translateY(-10px)`,transition:`opacity 0.35s ease ${S?'0.15s':'0s'}, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${S?'0.1s':'0s'}`,pointerEvents:S?`auto`:`none`,marginTop:20},children:[
(0,x.jsx)(`nav`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[{label:`How it works`,section:`how-it-works`},{label:`Categories`,section:`clientstories`},{label:`About Us`,section:`about-us`}].map(e=>(0,x.jsxs)(`a`,{href:`#${e.section}`,onClick:t=>{t.preventDefault();C(!1);let n=document.querySelector(`[data-section="${e.section}"], #${e.section}`);if(n){if(window.__lenis){window.__lenis.scrollTo(n,{offset:-80})}else{window.scrollTo({top:n.getBoundingClientRect().top+window.pageYOffset-80,behavior:`smooth`})}}},style:{fontFamily:F,fontWeight:700,fontSize:18,color:`#121212`,textDecoration:`none`,padding:`10px 14px`,borderRadius:12,background:`rgba(0,0,0,0.04)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,transition:`background 0.2s ease`},children:[(0,x.jsx)(`span`,{children:e.label}),(0,x.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,style:{opacity:.4},children:(0,x.jsx)(`path`,{d:`M6 12L10 8L6 4`,stroke:`#121212`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})]},e.label))}),
(0,x.jsx)(`a`,{href:`#contact-form`,onClick:e=>{e.preventDefault();C(!1);let t=document.getElementById("contact-form");if(t){if(window.__lenis){window.__lenis.scrollTo(t,{offset:-80})}else{window.scrollTo({top:t.getBoundingClientRect().top+window.pageYOffset-80,behavior:"smooth"})}}},style:{display:`block`,width:`100%`,background:R,borderRadius:14,padding:`12px 18px`,fontFamily:L,fontWeight:600,fontSize:16,color:`#fff`,textAlign:`center`,textDecoration:`none`,boxSizing:`border-box`,marginTop:4},children:`Call Us`})
]})
]})"""

text = text[:start] + new_nav + text[end:]
with open("assets/core/index.js", "w") as f:
    f.write(text)
print("Mobile nav replaced!")
