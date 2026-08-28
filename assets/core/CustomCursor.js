import{r as e}from"./rolldown-runtime.js";import{i as t,t as n}from"./vendor-react.js";var r=e(t(),1),i=n(),a=`#7088a6`,o=`#7088a6`;function lerp_fn(e,t,n){return(1-n)*e+n*t}function c(e,t,n,r,i){let a=[];for(let o=0;o<8;o++){let s=o/8*Math.PI*2-Math.PI/2,c=i?Math.sin(r/55+o*1.2)*4+Math.cos(r/40+o*2.1)*3:Math.sin(r/90+o*1.1)*1.2;a.push([e+Math.cos(s)*(n+c),t+Math.sin(s)*(n+c)])}return a}function l(e,t){let n=t.length;e.beginPath();for(let r=0;r<n;r++){let i=t[(r-1+n)%n],a=t[r],o=t[(r+1)%n],s=t[(r+2)%n],c=a[0]+(o[0]-i[0])/6,l=a[1]+(o[1]-i[1])/6,u=o[0]-(s[0]-a[0])/6,d=o[1]-(s[1]-a[1])/6;r===0&&e.moveTo(a[0],a[1]),e.bezierCurveTo(c,l,u,d,o[0],o[1])}e.closePath()}function u(){let e=(0,r.useRef)(null),t=(0,r.useRef)(null),[n,u]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=`ontouchstart`in window||navigator.maxTouchPoints>0,t=window.matchMedia(`(pointer: coarse)`).matches,n=window.matchMedia(`(hover: none)`).matches;!e&&!t&&!n&&u(!0)},[]),(0,r.useEffect)(()=>{if(!n)return;let r=e.current,i=t.current;if(!r||!i)return;let u=r.getContext(`2d`),d=0,f=0,p=-200,m=-200,h=-200,g=-200,_=!0,v=1,y=14,b=a,x=!1,S=!1,C=0,w=0,T=!1,E=()=>{r.width=window.innerWidth,r.height=window.innerHeight};E(),window.addEventListener(`resize`,E);let D=document.createElement(`style`);D.textContent=`*, *::before, *::after, html, body, button, a, input, textarea, select, [role="button"], iframe, #webbi-root * { cursor: none !important; } [data-cursor-dot], [data-cursor-dot] * { cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Ccircle cx='6' cy='6' r='5' fill='%230a0d12'/%3E%3C/svg%3E") 6 6, pointer !important; } [data-cursor-hide], [data-cursor-hide] * { cursor: none !important; }`,document.head.appendChild(D);let mouseMoveTicking = false;
let O = e => {
  p = e.clientX;
  m = e.clientY;
  if (_) { h = p; g = m; _ = !1; v = .18; }
  if (mouseMoveTicking) return;
  mouseMoveTicking = true;
  requestAnimationFrame(() => {
    mouseMoveTicking = false;
    b = `#7088a6`;
    let s = document.elementFromPoint(p, m);
    let c = s?.closest(`[data-cursor-dot]`), l = s?.closest(`[data-cursor-hide]`);
    T = !!(c || l);
    let u = (s?.closest(`[data-cursor-stick]`))?.querySelector(`[data-cursor-anchor]`),
        d = s?.closest(`[data-cursor-target]`),
        f = s?.closest(`[data-cursor-no-stick]`),
        y = !c && !f ? u || d || s?.closest(`a, button`) : null;
    if (y) {
      let rect = y.getBoundingClientRect();
      C = rect.left + rect.width / 2;
      w = rect.top + rect.height / 2;
      x = !0;
      S = !0;
      v = .1;
    } else {
      x = !1;
      S = !1;
      v = .18;
    }
  });
};
document.addEventListener(`mousemove`, O, { capture: !0, passive: true });
    let msgHandler = (evt) => {
      if (evt.data && evt.data.type === "CURSOR_MOVE") {
        p = evt.data.clientX;
        m = evt.data.clientY;
        if (_) { h = p; g = m; _ = !1; v = 0.18; }
        b = "#7088a6";
        T = !1;
        if (evt.data.isHover) {
          x = !0;
          S = !0;
          v = 0.12;
          C = p;
          w = m;
        } else {
          x = !1;
          S = !1;
          v = 0.18;
        }
      }
    };
    window.addEventListener("message", msgHandler);let k=()=>{f++,u.clearRect(0,0,r.width,r.height),i.style.transform=`translate(${p-4}px, ${m-4}px)`,i.style.background=b;let e=T;i.style.opacity=e||S?`0`:`1`,r.style.opacity=e?`0`:`1`,i.style.transition=e?`none`:`background 0.2s ease, opacity 0.15s ease`,r.style.transition=e?`none`:``;let t=x?C:p,n=x?w:m;h=lerp_fn(h,t,v),g=lerp_fn(g,n,v),y=lerp_fn(y,x?36:14,.08),l(u,c(h,g,y,f,x&&y>26)),S?(u.fillStyle=b,u.globalAlpha=.12,u.fill(),u.strokeStyle=b,u.lineWidth=1.5,u.globalAlpha=.55,u.stroke()):(u.strokeStyle=b,u.lineWidth=1.5,u.globalAlpha=.5,u.stroke()),u.globalAlpha=1,d=requestAnimationFrame(k)};return d=requestAnimationFrame(k),()=>{cancelAnimationFrame(d),window.removeEventListener(`resize`,E),document.removeEventListener(`mousemove`,O),window.removeEventListener(`message`,msgHandler),document.head.removeChild(D)}},[n]),n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`div`,{ref:t,style:{position:`fixed`,top:0,left:0,width:8,height:8,borderRadius:`50%`,background:a,pointerEvents:`none`,zIndex:99999999,willChange:`transform`,transition:`background 0.2s ease, opacity 0.15s ease`}}),(0,i.jsx)(`canvas`,{ref:e,style:{position:`fixed`,top:0,left:0,width:`100%`,height:`100%`,pointerEvents:`none`,zIndex:99999998}})]}):null}export{u as default};