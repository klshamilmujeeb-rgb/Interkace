var E = () => null;
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/core/CustomCursor.js","assets/core/rolldown-runtime.js","assets/core/vendor-react.js","assets/core/vendor-lenis.js","assets/IntroAnimation-DvAKon4R.js","assets/AcademyPage-CnXZ2XvD.js","assets/AlpinDashboard-DbPa-Ucg.js","assets/AlpinClients-DezW7nlz.js","assets/AlpinClientDetail-DMszYulb.js","assets/AlpinOperationModal-Ci-SXlBf.js","assets/AlpinMandats-Cpq3mW7m.js","assets/AlpinMandatDetail-BX1hFjkb.js","assets/AlpinMessages-DlaKpSe6.js","assets/AlpinSettings-dI0DDc1h.js","assets/AlpinNotifPanel-DUP9H55Z.js","assets/Backoffice-TReBpWxW.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime.js";import{i as t,n,r,t as i}from"./vendor-react.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var a=n(),o=e(t(),1),s=r(),c=()=>!1,l=`umano_analytics`,u=1e4;function d(e,t,n){try{let r=f();r.push({type:e,label:t,timestamp:Date.now(),path:n}),r.length>u&&r.splice(0,r.length-u),localStorage.setItem(l,JSON.stringify(r))}catch{}}function f(){try{let e=localStorage.getItem(l);return e?JSON.parse(e):[]}catch{return[]}}async function p(){return v()}async function m(e,t=14){let n=new Date,r=new Date(n);return r.setDate(r.getDate()-t),b(e,t)}async function h(e,t=10){return y(e,t)}async function g(e=50){return f().slice(-e).reverse()}async function _(){localStorage.removeItem(l)}function v(){let e={};for(let t of f())e[t.type]=(e[t.type]||0)+1;return e}function y(e,limit){let n={};for(let item of f())item.type===e&&(n[item.label]=(n[item.label]||0)+1);return Object.entries(n).map(([k,v])=>({label:k,count:v})).sort((a,b)=>b.count-a.count).slice(0,limit)}function b(e,t){let n=new Date,r=f().filter(t=>t.type===e),i=[];for(let e=t-1;e>=0;e--){let t=new Date(n);t.setDate(t.getDate()-e);let a=t.toISOString().slice(0,10),o=new Date(a).getTime(),s=o+864e5;i.push({date:t.toLocaleDateString(`en-US`,{month:`short`,day:`numeric`}),count:r.filter(e=>e.timestamp>=o&&e.timestamp<s).length})}return i}var x=i(),S=`modulepreload`,C=function(e){return`/`+e},w={},T=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),a=i?.nonce||i?.getAttribute("nonce");function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))}r=o(t.map(t=>{if(t=C(t,n),t in w)return;w[t]=!0;let r=t.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel==="stylesheet"))return}else if(document.querySelector('link[href="'+t+'"]'+i))return;let s=document.createElement("link");if(s.rel=r?"stylesheet":"modulepreload",r||(s.as="script",s.crossOrigin=""),s.href=t,a&&s.setAttribute("nonce",a),document.head.appendChild(s),r)return new Promise((e,n)=>{s.addEventListener("load",e),s.addEventListener("error",()=>n(new Error("Unable to preload CSS for "+t)))})}))}return r},E=(0,o.lazy)(()=>T(()=>import(`./CustomCursor.js`),__vite__mapDeps([0,1,2]))),D=`/assets/brand/interkace-script-logo.png`,O=`/assets/hero/hero-phone-mockup.webp`,k=`/assets/brand/interkace-icon.png`,A=`/assets/hero/status-cellular.svg`,j=`/assets/hero/status-wifi.svg`,M=`/assets/hero/status-battery.svg`,ee=``,N=``,te=``,ne=``,P=``,re=`/assets/hero/icon-interface.svg`,ie=``,ae=`/assets/hero/logo-badge.svg`,oe=`/notif.mp4`,F=`"Teko", sans-serif`,I=`"Ubuntu", sans-serif`,L=`"Ubuntu", sans-serif`,R=`#ff692e`,z=`#ff4405`,B=`#181d27`,V=`#0a0d12`,H=`#535862`,U=`#e9eaeb`;function se(e=.12){let t=(0,o.useRef)(null),[n,r]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let n=t.current;if(!n)return;let i=new IntersectionObserver(([e])=>{e.isIntersecting&&(r(!0),i.disconnect())},{threshold:e});i.observe(n);return()=>i.disconnect()},[e]);return{ref:t,visible:n}}var ce=e=>({opacity:e?1:0,transform:e?`translateY(0)`:`translateY(32px)`,transition:`opacity 0.65s ease, transform 0.65s ease`});function W(){let[e,t]=(0,o.useState)(()=>window.innerWidth<=768);return(0,o.useEffect)(()=>{let e=()=>t(window.innerWidth<=768);return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),e}var worksNav=[`Design Studio`,`Interface`],le=[`Design Studio`,`All Works`],ue=[`How it works`,`Categories`,`About Us`],G=5;/* ==========================================================================
   SECTION: NAVIGATION (Desktop Dynamic Nav + Mobile Drawer)
   ========================================================================== */
function de({externalMounted:e,aboveOverlay:t,onAcademy:n,onStudio:onStudioFn,exiting:r,currentView:currentView='landing',onBookCall:onBookCallFn,onNavigateSection:onNavigateSectionFn}={}){let i=W(),[a,s]=(0,o.useState)(!0),[c,l]=(0,o.useState)(!1),[u,f]=(0,o.useState)(!1),[p,m]=(0,o.useState)(0),[h,g]=(0,o.useState)(!1),[_,v]=(0,o.useState)(!1),[y,b]=(0,o.useState)(''),[S,C]=(0,o.useState)(!1),w=(0,o.useRef)(0),T=(0,o.useRef)(!0),E=(0,o.useRef)(!1),O=(0,o.useRef)(0),k=(0,o.useRef)(null),A=(0,o.useRef)(0);(0,o.useEffect)(()=>{requestAnimationFrame(()=>v(!0))},[]);(0,o.useEffect)(()=>{if(currentView!=='landing')return;let e=()=>{let e=window.scrollY,t=document.getElementById(`hero-section`),n=e<=(t?t.offsetHeight:window.innerHeight),r=document.getElementById(`how-it-works`),i=!1;if(r){let e=r.getBoundingClientRect(),t=Math.max(0,-e.top),n=(r.offsetHeight-window.innerHeight)*4/5;if(i=t>0&&t<n,i){let e=Math.min(1,t/n),r=Math.min(G-1,Math.floor(e*G));r!==O.current&&(O.current=r,m(r))}}i!==E.current&&(E.current=i,s(!1),A.current=Date.now()+1100,k.current&&clearTimeout(k.current),k.current=setTimeout(()=>{f(i),s(!0)},500)),i||(T.current&&!n?(s(!1),A.current=Date.now()+1100,k.current&&clearTimeout(k.current),k.current=setTimeout(()=>{l(!0),f(!1),s(!0)},500)):!T.current&&n&&(s(!1),A.current=Date.now()+1100,k.current&&clearTimeout(k.current),k.current=setTimeout(()=>{l(!1),f(!1),s(!0)},500))),T.current=n,w.current=e;let a=[`how-it-works`,`clientstories`,`about-us`,`faq`],o='';for(let e of a){let t=document.querySelector(`[data-section="${e}"], #${e}`);if(t){let n=t.getBoundingClientRect();n.top<=window.innerHeight*.4&&n.bottom>window.innerHeight*.3&&(o=e)}}if(o===`how-it-works`){let e=document.getElementById(`how-it-works`);if(e){let t=(e.offsetHeight-window.innerHeight)*4/5;Math.max(0,-e.getBoundingClientRect().top)>t&&(o=`clientstories`)}}b(o)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e),k.current&&clearTimeout(k.current)}},[currentView]);let isWorks=currentView==='academy',j=isWorks?!0:(a||h),M=isWorks?worksNav:(c?ue:le);return(0,x.jsxs)(`div`,{"data-main-nav":!0,style:{position:`fixed`,top:12,left:0,right:0,zIndex:t?1e5:100,display:`flex`,justifyContent:`center`,pointerEvents:`none`,opacity:r?0:e??_?1:0,transform:r?`translateY(-200%)`:e??_?`translateY(0)`:`translateY(-200%)`,transition:`opacity 0.5s ease, transform 0.5s cubic-bezier(0.4,0,0.6,1)`},children:[(0,x.jsx)(`header`,{style:{pointerEvents:`auto`,position:`relative`},onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:i?(0,x.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,background:`#F0F0F0`,borderRadius:S?28:32,padding:S?`16px 14px 16px 18px`:`0 14px 0 18px`,gap:0,height:S?330:52,width:`min(350px, calc(100vw - 32px))`,boxShadow:`0 8px 32px rgba(0,0,0,0.12)`,willChange:`transform`,transition:`height 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.45s cubic-bezier(0.16, 1, 0.3, 1), padding 0.45s cubic-bezier(0.16, 1, 0.3, 1)`,overflow:`hidden`,boxSizing:`border-box`},children:[
(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,width:`100%`,height:S?36:52,flexShrink:0,transition:`height 0.45s cubic-bezier(0.16, 1, 0.3, 1)`},children:[
(!isWorks&&u)?(0,x.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,padding:`0 4px`},children:Array.from({length:G}).map((e,t)=>(0,x.jsx)(`div`,{style:{height:7,flexShrink:0,width:p===t?24:7,borderRadius:4,background:p===t?B:`${B}40`,transition:`width 0.45s cubic-bezier(0.4,0,0.2,1), background 0.3s ease`}},t))}):(0,x.jsx)(`div`,{onClick:()=>{if(isWorks){onStudioFn?onStudioFn():window.scrollTo({top:0,behavior:`smooth`})}else{window.scrollTo({top:0,behavior:`smooth`})}},style:{display:`flex`,alignItems:`center`,flexShrink:0,cursor:`pointer`},children:(0,x.jsx)(`img`,{src:D,alt:`UMANO`,style:{height:28,width:`auto`,objectFit:`contain`}})}),
(0,x.jsxs)(`button`,{"aria-label":S?`Close menu`:`Open menu`,onClick:()=>C(!S),style:{background:`#000`,color:`#fff`,border:`none`,borderRadius:20,width:36,height:36,padding:0,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,transition:`transform 0.2s ease`},children:[S?(0,x.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,x.jsx)(`path`,{d:`M4 4L12 12M12 4L4 12`,stroke:`#fff`,strokeWidth:`2`,strokeLinecap:`round`})}):(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`3px`,alignItems:`center`},children:[(0,x.jsx)(`span`,{style:{display:`block`,width:14,height:2,background:`#fff`,borderRadius:1}}),(0,x.jsx)(`span`,{style:{display:`block`,width:14,height:2,background:`#fff`,borderRadius:1}}),(0,x.jsx)(`span`,{style:{display:`block`,width:14,height:2,background:`#fff`,borderRadius:1}})]})]})
]}),
(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10,width:`100%`,opacity:S?1:0,transform:S?`translateY(0)`:`translateY(-10px)`,transition:`opacity 0.35s ease ${S?'0.15s':'0s'}, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${S?'0.1s':'0s'}`,pointerEvents:S?`auto`:`none`,marginTop:20},children:[
(0,x.jsx)(`nav`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:(isWorks?[{label:`Design Studio`,isStudio:!0},{label:`Interface`,isAllWorks:!0,active:!0}]:[{label:`Design Studio`,isStudio:!0,active:!0},{label:`All Works`,isAllWorks:!0},{label:`How it works`,section:`how-it-works`},{label:`Categories`,section:`clientstories`},{label:`About Us`,section:`about-us`}]).map(e=>{let isActive=isWorks?e.isAllWorks:(!c&&e.isStudio);return(0,x.jsxs)(`a`,{href:`#`,onClick:t=>{t.preventDefault();C(!1);if(e.isStudio){if(isWorks){onStudioFn?onStudioFn():null}else{window.scrollTo({top:0,behavior:`smooth`})}return}if(e.isAllWorks){if(!isWorks){n?.()}return}if(isWorks){onNavigateSectionFn?onNavigateSectionFn(e.section):(onStudioFn?onStudioFn(e.section):null);return}let targetEl=document.querySelector(`[data-section="${e.section}"], #${e.section}`);if(targetEl){if(window.__lenis){window.__lenis.scrollTo(targetEl,{offset:-80})}else{window.scrollTo({top:targetEl.getBoundingClientRect().top+window.pageYOffset-80,behavior:`smooth`})}}},style:{fontFamily:F,fontWeight:700,fontSize:18,color:isActive?R:`#121212`,textDecoration:`none`,padding:`10px 14px`,borderRadius:12,background:isActive?`rgba(255,105,46,0.08)`:`rgba(0,0,0,0.04)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,transition:`all 0.2s ease`},children:[(0,x.jsx)(`span`,{children:e.label}),(0,x.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,style:{opacity:isActive?1:.4},children:(0,x.jsx)(`path`,{d:`M6 12L10 8L6 4`,stroke:isActive?R:`#121212`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})]},e.label)})}),
(0,x.jsx)(`a`,{href:`#contact-form`,onClick:e=>{e.preventDefault();C(!1);if(isWorks){onBookCallFn?onBookCallFn():(onStudioFn?onStudioFn(`contact-form`):null);return}let t=document.getElementById("contact-form");if(t){if(window.__lenis){window.__lenis.scrollTo(t,{offset:-80})}else{window.scrollTo({top:t.getBoundingClientRect().top+window.pageYOffset-80,behavior:"smooth"})}}},style:{display:`block`,width:`100%`,background:R,borderRadius:14,padding:`12px 18px`,fontFamily:L,fontWeight:600,fontSize:16,color:`#fff`,textAlign:`center`,textDecoration:`none`,boxSizing:`border-box`,marginTop:4},children:`Book a call`})
]})
]}):(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,background:`#F0F0F0`,borderRadius:55,padding:`0 21px`,gap:24,height:81,boxShadow:`none`,whiteSpace:`nowrap`,willChange:`transform`},children:[(0,x.jsx)(`div`,{onClick:()=>{if(isWorks){onStudioFn?onStudioFn():window.scrollTo({top:0,behavior:`smooth`})}else{window.scrollTo({top:0,behavior:`smooth`})}},style:{display:`flex`,alignItems:`center`,padding:`4px 8px`,flexShrink:0,cursor:`pointer`},children:(0,x.jsx)(`img`,{src:D,alt:`UMANO`,style:{height:32,width:`auto`}})}),(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:j?`1fr`:`0fr`,transition:`grid-template-columns 0.45s cubic-bezier(0.4,0,0.2,1)`,overflow:`hidden`},children:(0,x.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,minWidth:0,opacity:j?1:0,transition:j?`opacity 0.3s ease`:`none`},children:(!isWorks&&u)?(0,x.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:7,padding:`0 10px`},children:Array.from({length:G}).map((e,t)=>(0,x.jsx)(`div`,{style:{height:8,flexShrink:0,width:p===t?28:8,borderRadius:4,background:p===t?B:`${B}40`,transition:`width 0.45s cubic-bezier(0.4,0,0.2,1), background 0.3s ease`}},t))}):(0,x.jsx)(`nav`,{style:{display:`flex`,alignItems:`center`,gap:2},children:M.map(e=>{let t={"How it works":`how-it-works`,"Categories":`clientstories`,"About Us":`about-us`}[e]||null,isActive=isWorks?(e===`Interface`||e===`All Works`):(!c&&e===`Design Studio`||c&&!!t&&y===t);return(0,x.jsx)(`a`,{href:t?`#${t}`:`#`,onClick:r=>{if(r.preventDefault(),e===`All Works`||e===`Interface`){if(!isWorks)n?.();return}if(e===`Design Studio`){if(isWorks){if(onStudioFn)onStudioFn()}else{window.scrollTo({top:0,behavior:`smooth`})}return}if(e===`Categories`){let e=document.querySelector(`[data-section="clientstories"]`);e&&window.scrollTo({top:e.offsetTop,behavior:`smooth`});return}if(t){let e=document.getElementById(t);e&&window.scrollTo({top:e.offsetTop,behavior:`smooth`})}},style:{fontFamily:L,fontWeight:isActive?800:600,fontSize:18,color:isActive?R:B,textDecoration:`none`,padding:`8px 16px`,fontWeight:isActive?800:700,borderRadius:8,flexShrink:0,transition:`color 0.2s ease`,cursor:`pointer`},children:e},e)})})})}),(0,x.jsx)(`a`,{href:`#contact-form`,onClick:(e)=>{e.preventDefault();d(`cta_click`,`Call Us, nav`);if(isWorks){onBookCallFn?onBookCallFn():(onStudioFn?onStudioFn(`contact-form`):null);return}let el=document.getElementById("contact-form");if(el){if(window.__lenis){window.__lenis.scrollTo(el,{offset:-90})}else{window.scrollTo({top:el.getBoundingClientRect().top+window.pageYOffset-90,behavior:"smooth"})}}},style:{fontFamily:L,fontWeight:600,fontSize:18,background:(!isWorks&&c)?R:`#000`,color:`#fff`,border:`none`,borderRadius:43,padding:`12px 24px`,cursor:`pointer`,flexShrink:0,marginLeft:4,textDecoration:`none`},children:`Book a call`})]})})]})}var fe=[`Mobile App`,`SaaS`,`Website`,`Software`,`Landing Pages`,`Brand`,`Product`,`Flows`];
function CrowdCanvas({ src = "/assets/hero/hero-crowd-peeps.png", rows = 15, cols = 7, scale = 1 }) {  const canvasRef = (0, o.useRef)(null);  (0, o.useEffect)(() => {    const canvas = canvasRef.current;    if (!canvas) return;    const ctx = canvas.getContext("2d");    if (!ctx) return;    const gsap = window.gsap;    if (!gsap) return;    const config = { src, rows, cols };    const randomRange = (min, max) => min + Math.random() * (max - min);    const randomIndex = (array) => (randomRange(0, array.length) | 0);    const removeFromArray = (array, i) => array.splice(i, 1)[0];    const removeItemFromArray = (array, item) => removeFromArray(array, array.indexOf(item));    const removeRandomFromArray = (array) => removeFromArray(array, randomIndex(array));    const getRandomFromArray = (array) => array[randomIndex(array) | 0];    const resetPeep = ({ stage, peep }) => {      const direction = Math.random() > 0.5 ? 1 : -1;      const offsetY = (40 - 140 * (gsap.parseEase ? gsap.parseEase("power2.in")(Math.random()) : Math.random())) * scale;      const startY = stage.height - peep.height + offsetY;      let startX, endX;      if (direction === 1) {        startX = -peep.width;        endX = stage.width;        peep.scaleX = 1;      } else {        startX = stage.width + peep.width;        endX = 0;        peep.scaleX = -1;      }      peep.x = startX;      peep.y = startY;      peep.anchorY = startY;      return { startX, startY, endX };    };    const normalWalk = ({ peep, props }) => {      const { startX, startY, endX } = props;      const xDuration = 10;      const yDuration = 0.25;      const tl = gsap.timeline();      tl.timeScale(randomRange(0.5, 1.5));      tl.to(peep, { duration: xDuration, x: endX, ease: "none" }, 0);      tl.to(peep, { duration: yDuration, repeat: Math.floor(xDuration / yDuration), yoyo: true, y: startY - 10 * scale }, 0);      return tl;    };    const walks = [normalWalk];    const createPeep = ({ image, rect }) => {      const peep = {        image, rect: [], width: 0, height: 0, drawArgs: [], x: 0, y: 0, anchorY: 0, scaleX: 1, walk: null,        setRect: (r) => {          peep.rect = r;          peep.width = r[2] * scale;          peep.height = r[3] * scale;          peep.drawArgs = [peep.image, ...r, 0, 0, peep.width, peep.height];        },        render: (c) => {          if (!peep.image || !peep.image.complete || !peep.image.naturalWidth || !peep.image.naturalHeight) return;          try {            c.save();            c.translate(peep.x, peep.y);            c.scale(peep.scaleX, 1);            c.drawImage(peep.image, peep.rect[0], peep.rect[1], peep.rect[2], peep.rect[3], 0, 0, peep.width, peep.height);            c.restore();          } catch (_) {}        },      };      peep.setRect(rect);      return peep;    };    const img = document.createElement("img");    const stage = { width: 0, height: 0 };    const allPeeps = [];    const availablePeeps = [];    const crowd = [];    const createPeeps = () => {      const { rows, cols } = config;      const { naturalWidth: width, naturalHeight: height } = img;      if (!width || !height) return;      const total = rows * cols;      const rectWidth = width / rows;      const rectHeight = height / cols;      for (let i = 0; i < total; i++) {        allPeeps.push(createPeep({ image: img, rect: [(i % rows) * rectWidth, ((i / rows) | 0) * rectHeight, rectWidth, rectHeight] }));      }    };    const addPeepToCrowd = () => {      if (!availablePeeps.length) return null;      const peep = removeRandomFromArray(availablePeeps);      const walk = getRandomFromArray(walks)({ peep, props: resetPeep({ peep, stage }) }).eventCallback("onComplete", () => {        removePeepFromCrowd(peep);        addPeepToCrowd();      });      peep.walk = walk;      crowd.push(peep);      crowd.sort((a, b) => a.anchorY - b.anchorY);      return peep;    };    const initCrowd = () => {      while (availablePeeps.length) {        const p = addPeepToCrowd();        if (p && p.walk) p.walk.progress(Math.random());      }    };    const removePeepFromCrowd = (peep) => {      removeItemFromArray(crowd, peep);      availablePeeps.push(peep);    };    const render = () => {      if (!canvas) return;      ctx.clearRect(0, 0, canvas.width, canvas.height);      ctx.save();      const dpr = window.devicePixelRatio || 1;      ctx.scale(dpr, dpr);      crowd.forEach((peep) => peep.render(ctx));      ctx.restore();    };    const resize = () => {      if (!canvas) return;      stage.width = canvas.clientWidth;      stage.height = canvas.clientHeight;      const dpr = window.devicePixelRatio || 1;      canvas.width = stage.width * dpr;      canvas.height = stage.height * dpr;      crowd.forEach((peep) => { if (peep.walk) peep.walk.kill(); });      crowd.length = 0;      availablePeeps.length = 0;      availablePeeps.push(...allPeeps);      initCrowd();    };    let initialized = false;    const init = () => {      if (initialized || !img.complete || !img.naturalWidth || !img.naturalHeight) return;      initialized = true;      createPeeps();      resize();      if (gsap && gsap.ticker) gsap.ticker.add(render);    };    img.onload = init;    img.onerror = () => {};    img.src = config.src;    if (img.complete && img.naturalWidth > 0) {      init();    }    const handleResize = () => resize();    window.addEventListener("resize", handleResize);    return () => {      window.removeEventListener("resize", handleResize);      if (gsap && gsap.ticker) gsap.ticker.remove(render);      crowd.forEach((peep) => { if (peep.walk) peep.walk.kill(); });    };  }, []);  return (0, x.jsx)("canvas", {    ref: canvasRef,    style: { position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }  });}
function renderPhoneMockup() {
  return (0, x.jsxs)("div", {
    className: "hero-phone-mockup",
    style: {
      position: "relative",
      width: "min(320px, calc(100vw - 32px))",
      height: "clamp(350px, 48vh, 415px)",
      background: "linear-gradient(165deg, #2c303b 0%, #151821 50%, #0d0f14 100%)",
      borderRadius: "48px 48px 0 0",
      padding: "7px 7px 0 7px",
      border: "1.5px solid rgba(255, 255, 255, 0.32)",
      borderBottom: "none",
      boxShadow: "0 30px 80px -10px rgba(0, 0, 0, 0.75), inset 0 1px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 4px rgba(0, 0, 0, 0.5)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      boxSizing: "border-box",
      margin: "0 auto",
      alignSelf: "flex-end"
    },
    children: [
      /* Inner Screen */
      (0, x.jsxs)("div", {
        style: {
          flex: 1,
          width: "100%",
          background: "#ffffff",
          borderRadius: "41px 41px 0 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          overflow: "hidden",
          position: "relative",
          paddingTop: "46px",
          boxSizing: "border-box"
        },
        children: [
          /* Top Status Bar (Time, Dynamic Island, Icons) */
          (0, x.jsxs)("div", {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
              zIndex: 20,
              pointerEvents: "none"
            },
            children: [
              /* Time */
              (0, x.jsx)("span", {
                style: {
                  fontSize: "12px",
                  fontWeight: 700,
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Ubuntu', 'Ubuntu', sans-serif",
                  color: "#000000",
                  letterSpacing: "-0.2px"
                },
                children: "9:41"
              }),
              /* Dynamic Island */
              (0, x.jsxs)("div", {
                style: {
                  position: "absolute",
                  top: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "98px",
                  height: "26px",
                  background: "#000000",
                  borderRadius: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 10px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.4)"
                },
                children: [
                  /* Camera Lens Dot with subtle optical blue/purple reflection */
                  (0, x.jsx)("div", {
                    style: {
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      background: "radial-gradient(circle at 35% 35%, #1a2238 0%, #080c14 70%, #000000 100%)",
                      border: "1px solid #141924",
                      boxShadow: "inset 0 0 2px rgba(60, 130, 246, 0.5)"
                    }
                  }),
                  /* Sensor Pill Dot */
                  (0, x.jsx)("div", {
                    style: {
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#0b0c10"
                    }
                  })
                ]
              }),
              /* Status Icons: Cellular, Wifi, Battery */
              (0, x.jsxs)("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "#000000"
                },
                children: [
                  (0, x.jsx)("svg", {
                    width: "14",
                    height: "10",
                    viewBox: "0 0 17 11",
                    fill: "#000000",
                    children: (0, x.jsx)("path", { d: "M1 8.5h2v2H1zm4-2.5h2v4.5H5zm4-2.5h2v7H9zm4-3.5h2v10.5h-2z" })
                  }),
                  (0, x.jsx)("svg", {
                    width: "13",
                    height: "10",
                    viewBox: "0 0 16 12",
                    fill: "#000000",
                    children: (0, x.jsx)("path", { d: "M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-4.2-3a5.9 5.9 0 018.4 0l1.4-1.4a7.9 7.9 0 00-11.2 0l1.4 1.4zm-2.8-2.8a9.9 9.9 0 0114 0l1.4-1.4a11.9 11.9 0 00-16.8 0l1.4 1.4z" })
                  }),
                  (0, x.jsxs)("div", {
                    style: {
                      width: "20px",
                      height: "10px",
                      border: "1.5px solid #000000",
                      borderRadius: "3px",
                      padding: "1px",
                      display: "flex",
                      alignItems: "center",
                      position: "relative"
                    },
                    children: [
                      (0, x.jsx)("div", {
                        style: {
                          width: "80%",
                          height: "100%",
                          background: "#000000",
                          borderRadius: "1px"
                        }
                      }),
                      (0, x.jsx)("div", {
                        style: {
                          width: "1.5px",
                          height: "4px",
                          background: "#000000",
                          borderRadius: "0 1px 1px 0",
                          position: "absolute",
                          right: "-3.5px",
                          top: "2px"
                        }
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          /* Browser Address Pill */
          (0, x.jsxs)("div", {
            style: {
              background: "#f3f4f6",
              borderRadius: "16px",
              padding: "4px 14px",
              fontSize: "11px",
              color: "#4b5563",
              fontFamily: "\"Teko\", Ubuntu, system-ui, sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontWeight: 500,
              margin: "12px auto 0 auto",
              zIndex: 5
            },
            children: [
              (0, x.jsx)("span", { style: { opacity: 0.6, fontSize: "10px" }, children: "🔒" }),
              "interkacestudio.com"
            ]
          }),
          /* Title inside phone */
          (0, x.jsx)("h2", {
            style: {
              fontSize: "clamp(20px, 5.2vw, 24px)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: "1.15",
              letterSpacing: "-0.5px",
              margin: "auto 0",
              textAlign: "center",
              zIndex: 5,
              position: "relative",
              fontFamily: "\"Teko\", Ubuntu, system-ui, sans-serif",
              width: "100%",
              maxWidth: "100%",
              padding: "0 16px"
            },
            children: "A website with personality."
          }),
          /* Dummy Spacer to push content up exactly the height of the crowd */
          (0, x.jsx)("div", { style: { height: "55%", flexShrink: 0, width: "100%" } }),
          /* Contained animated crowd - smaller scale & contained inside phone screen */
          (0, x.jsx)("div", {
            style: { position: "absolute", bottom: 0, left: 0, width: "100%", height: "55%", overflow: "hidden" },
            children: (0, x.jsx)(CrowdCanvas, { src: "/assets/hero/hero-crowd-peeps.png", rows: 15, cols: 7, scale: 0.28 })
          }),
          /* Home Indicator Bar */
          (0, x.jsx)("div", {
            style: {
              position: "absolute",
              bottom: "7px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "4px",
              background: "#000000",
              borderRadius: "10px",
              zIndex: 10,
              opacity: 0.85
            }
          })
        ]
      })
    ]
  });
}

function renderDesktopBrowserMockup() {
  return (0, x.jsxs)("div", {
    className: "hero-desktop-mockup",
    style: {
      position: "relative",
      width: "var(--mockup-width, min(680px, calc(100vw - 48px)))",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0 auto",
      alignSelf: "flex-end"
    },
    children: [
      (0, x.jsxs)("div", {
        style: {
          position: "relative",
          width: "100%",
          height: "var(--mockup-height, 380px)",
          background: "#020B38",
          borderRadius: "16px 16px 8px 8px",
          padding: "8px 8px 10px 8px",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 25px 60px -12px rgba(0,0,0,0.55)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxSizing: "border-box"
        },
        children: [
          (0, x.jsx)("div", {
            style: {
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "12px",
              background: "#00062a",
              borderRadius: "0 0 8px 8px",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: (0, x.jsx)("div", {
              style: {
                width: 5,
                height: 5,
                background: "#0066ff",
                borderRadius: "50%",
                boxShadow: "0 0 3px #0066ff"
              }
            })
          }),
          (0, x.jsxs)("div", {
            style: {
              height: "32px",
              background: "#ffffff",
              borderBottom: "1px solid #e5e7eb",
              borderRadius: "10px 10px 0 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 14px",
              zIndex: 2,
              flexShrink: 0
            },
            children: [
              (0, x.jsxs)("div", {
                style: { display: "flex", gap: "6px", alignItems: "center" },
                children: [
                  (0, x.jsx)("div", { style: { width: 9, height: 9, borderRadius: "50%", background: "#ff5f56" } }),
                  (0, x.jsx)("div", { style: { width: 9, height: 9, borderRadius: "50%", background: "#ffbd2e" } }),
                  (0, x.jsx)("div", { style: { width: 9, height: 9, borderRadius: "50%", background: "#27c93f" } })
                ]
              }),
              (0, x.jsxs)("div", {
                style: {
                  background: "#f3f4f6",
                  borderRadius: "6px",
                  padding: "3px 12px",
                  fontSize: "11px",
                  color: "#6b7280",
                  fontFamily: "\"Ubuntu\", system-ui, -apple-system, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontWeight: 500
                },
                children: [
                  (0, x.jsx)("span", { style: { opacity: 0.6 }, children: "🔒" }),
                  "yourwebsite.com"
                ]
              }),
              (0, x.jsx)("div", { style: { width: 44 } })
            ]
          }),
          (0, x.jsxs)("div", {
            style: {
              flex: 1,
              background: "#ffffff",
              borderRadius: "0 0 8px 8px",
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              justifyContent: "stretch",
              overflow: "hidden",
              position: "relative",
              fontFamily: "\"Ubuntu\", system-ui, -apple-system, sans-serif"
            },
            children: [
              (0, x.jsx)("h2", {
                className: "mockup-title-desktop",
                style: {
                  fontSize: "var(--mockup-title-size, 18px)",
                  fontWeight: 400,
                  color: "#1f2937",
                  lineHeight: "1.4",
                  letterSpacing: "normal",
                  margin: 0,
                  textAlign: "center",
                  zIndex: 5,
                  position: "absolute",
                  top: "var(--mockup-title-top, 28px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontFamily: "\"Ubuntu\", sans-serif",
                  maxWidth: "420px",
                  padding: "0 16px",
                  display: "block",
                  width: "100%"
                },
                children: "A website with personality."
              }),
              (0, x.jsx)("div", {
                style: {
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "var(--crowd-width, 100%)",
                  height: "100%",
                  overflow: "hidden",
                  pointerEvents: "none"
                },
                children: (0, x.jsx)(CrowdCanvas, { src: "/assets/hero/hero-crowd-peeps.png", rows: 15, cols: 7, scale: 0.65 })
              })
            ]
          })
        ]
      }),
      (0, x.jsxs)("div", {
        style: {
          width: "var(--mockup-stand-width, 420px)",
          maxWidth: "92%",
          height: "14px",
          background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
          borderRadius: "0 0 14px 14px",
          boxShadow: "0 10px 24px rgba(0,0,0,0.5)",
          position: "relative"
        },
        children: [
          (0, x.jsx)("div", {
            style: {
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "56px",
              height: "3.5px",
              background: "#334155",
              borderRadius: "0 0 4px 4px"
            }
          })
        ]
      })
    ]
  });
}

/* ==========================================================================
   SECTION: HERO (Phone Mockup + Crowd Peeps + Status Bar)
   ========================================================================== */
function pe({ navReady: e, aboveOverlay: t } = {}) {
  let isMobile = W(),
    [r, i] = (0, o.useState)(0),
    [a, s] = (0, o.useState)(!0),
    c = (0, o.useRef)(null),
    [l, u] = (0, o.useState)(void 0),
    d = (0, o.useRef)(null),
    f = (0, o.useRef)(null),
    p = (0, o.useRef)(!1),
    m = (0, o.useRef)(!1);
  (0, o.useLayoutEffect)(() => {
    m.current = false;
    if (f.current) {
      f.current.style.transition = "none";
    }
  }, [t]);
  (0, o.useEffect)(() => {
    m.current = false;
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("scroll"));
    }
  }, [t]);
  (0, o.useEffect)(() => {
    c.current && u(c.current.offsetWidth);
  }, [r]);
  (0, o.useEffect)(() => {
    let e = setInterval(() => {
      s(!1);
      setTimeout(() => {
        i((e) => (e + 1) % fe.length);
        s(!0);
      }, 250);
    }, 1500);
    return () => clearInterval(e);
  }, []);
  (0, o.useEffect)(() => {
    let heroEl = d.current;
    let mockupEl = f.current;
    if (!heroEl || !mockupEl) return;
    let wrapperEl = heroEl.parentElement;
    let updateParallax = () => {
      let scrollY = window.scrollY || window.pageYOffset || 0;
      let isMob = window.innerWidth <= 768;
      let threshold = isMob ? 220 : 340;
      let rawProgress = Math.max(0, Math.min(1, scrollY / threshold));
      let progress = rawProgress * (2 - rawProgress);

      // Smoothly scale container down to ~98.5% width symmetrically
      let scalePercent = 100 - progress * (isMob ? 2.0 : 1.5);
      heroEl.style.width = `${scalePercent.toFixed(3)}%`;
      heroEl.style.maxWidth = "100%";
      heroEl.style.marginLeft = "auto";
      heroEl.style.marginRight = "auto";

      // Dynamically round corners as it scales down
      let topRadius = (progress * (isMob ? 16 : 24)).toFixed(1);
      let bottomRadius = (progress * (isMob ? 24 : 36)).toFixed(1);
      heroEl.style.borderRadius = `${topRadius}px ${topRadius}px ${bottomRadius}px ${bottomRadius}px`;
      heroEl.style.boxShadow = progress > 0.01 ? `0 ${(progress * 20).toFixed(1)}px ${(progress * 48).toFixed(1)}px rgba(2, 11, 56, ${(progress * 0.22).toFixed(3)})` : "none";

      if (wrapperEl) {
        let padY = (progress * (isMob ? 8 : 14)).toFixed(1);
        wrapperEl.style.paddingTop = `${padY}px`;
        wrapperEl.style.paddingBottom = `${padY}px`;
      }

      if (m.current) return;
      let tilt = isMob ? 0 : Math.min(4, scrollY * 0.012);
      let translateY = isMob ? Math.min(12, scrollY * 0.04) : Math.min(40, scrollY * 0.1);
      mockupEl.style.transformOrigin = "50% 100%";
      mockupEl.style.transform = `perspective(1100px) rotateX(${tilt}deg) translateY(${translateY}px)`;
    };
    window.addEventListener("resize", updateParallax, { passive: true });
    window.addEventListener("scroll", updateParallax, { passive: true });
    updateParallax();
    return () => {
      window.removeEventListener("resize", updateParallax);
      window.removeEventListener("scroll", updateParallax);
    };
  }, []);
  return (0, x.jsx)("div", {
    id: "hero-wrapper",
    style: {
      background: "#fffbce",
      width: "100%",
      position: "relative",
      overflow: "visible"
    },
    children: (0, x.jsxs)("section", {
      ref: d,
      id: "hero-section",
      style: {
        position: "relative",
        zIndex: 2,
        background: "#051880",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        minHeight: isMobile ? "100dvh" : "100vh",
        height: "auto",
        paddingTop: isMobile ? "max(140px, 15vh)" : "130px",
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        boxSizing: "border-box",
        margin: "0 auto",
        willChange: "width, border-radius, box-shadow"
      },
    children: [
      (0, x.jsx)("style", {
        children: `
          .hero-phone-mockup { display: flex !important; }
          .hero-desktop-mockup {
            display: none !important;
            --mockup-width: min(580px, calc(100vw - 48px));
            --mockup-height: 330px;
            --mockup-stand-width: 360px;
            --crowd-width: 100%;
            --mockup-title-size: 16px;
            --mockup-title-top: 24px;
          }
          @media (min-width: 769px) {
            .hero-phone-mockup { display: none !important; }
            .hero-desktop-mockup { display: flex !important; }
          }
          @media (min-width: 1025px) {
            .hero-desktop-mockup {
              --mockup-width: min(680px, calc(100vw - 64px));
              --mockup-height: 380px;
              --mockup-stand-width: 420px;
              --crowd-width: 100%;
              --mockup-title-size: 18px;
              --mockup-title-top: 28px;
            }
          }
        `
      }),
      (0, x.jsxs)("div", {
        style: {
          textAlign: "center",
          padding: isMobile ? "12px 16px 0" : "28px 32px 0",
          maxWidth: isMobile ? 440 : 960,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box"
        },
        children: [
          (0, x.jsxs)("h1", {
            style: {
              fontFamily: F,
              fontWeight: 700,
              textAlign: "center",
              width: "100%",
              fontSize: isMobile ? "clamp(42px, 11vw, 54px)" : "80px",
              lineHeight: isMobile ? "1.12" : "86px",
              letterSpacing: isMobile ? "-0.72px" : "-1.44px",
              color: "#ffffff",
              margin: 0,
              WebkitFontSmoothing: "antialiased",
              fontFeatureSettings: `"calt" 0, "liga" 0, "dlig" 0, "clig" 0`
            },
            children: ["Need a website,", (0, x.jsx)("br", {}), "like this?"]
          }),
          (0, x.jsxs)("p", {
            style: {
              fontFamily: I,
              fontWeight: 600,
              fontSize: isMobile ? 15 : 22,
              lineHeight: isMobile ? "22px" : "30px",
              letterSpacing: "-0.24px",
              color: "#ffffff",
              margin: isMobile ? "12px auto 0" : "16px auto 0",
              textAlign: "center",
              width: "100%",
              maxWidth: 880,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0 6px"
            },
            children: [
              (0, x.jsx)("span", { children: "We turn your " }),
              (0, x.jsx)("span", {
                style: {
                  display: "inline-block",
                  width: l,
                  transition: "width 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  verticalAlign: "bottom",
                  overflow: "hidden"
                },
                children: (0, x.jsx)("strong", {
                  ref: c,
                  style: {
                    fontFamily: I,
                    fontWeight: 700,
                    display: "inline-block",
                    opacity: a ? 1 : 0,
                    transform: a ? "translateY(0)" : "translateY(6px)",
                    transition: "opacity 0.25s ease, transform 0.3s ease",
                    whiteSpace: "nowrap",
                    color: "#ffffff"
                  },
                  children: fe[r]
                })
              }),
              " into an experience people love."
            ]
          })
        ]
      }),
      (0, x.jsx)("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          width: "100%",
          overflow: "hidden",
          flexShrink: 0,
          marginTop: "auto",
          marginBottom: 0,
          paddingBottom: 0
        },
        children: (0, x.jsx)("div", {
          ref: f,
          style: {
            position: "relative",
            flexShrink: 0,
            transformOrigin: "50% 100%",
            willChange: "transform",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            width: "100%",
            marginBottom: 0
          },
          children: isMobile ? renderPhoneMockup() : renderDesktopBrowserMockup()
        })
      })
    ]
  })
});
}

function me(){let e=W(),{ref:t,visible:n}=se(),r=[{src:ee,w:124,h:69},{src:N,w:124,h:37},{src:te,w:158,h:105},{src:ne,w:163,h:92},{src:P,w:156,h:69}];return(0,x.jsx)(`section`,{style:{background:`#fffbce`,display:`flex`,justifyContent:`center`,padding:e?`72px 0`:`96px 0`,overflow:`hidden`},children:(0,x.jsxs)(`div`,{ref:t,style:{...ce(n),display:`flex`,flexDirection:`column`,gap:32,alignItems:`center`,maxWidth:1280,width:`100%`},children:[(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:500,fontSize:16,color:H,lineHeight:`24px`,textAlign:`center`,margin:0,padding:e?`0 16px`:`0 32px`},children:`Our designers have been part of these teams.`}),e?(0,x.jsxs)(`div`,{style:{width:`100%`,overflow:`hidden`},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,gap:48,alignItems:`center`,width:`max-content`},children:[(0,x.jsx)(`div`,{style:{display:`flex`,gap:48,alignItems:`center`,animation:`logoMarquee 25s linear infinite`},children:r.map((e,t)=>(0,x.jsx)(`img`,{src:e.src,alt:"",style:{width:e.w*.7,height:e.h*.7,objectFit:`contain`,filter:`grayscale(1)`,flexShrink:0}},t))}),(0,x.jsx)(`div`,{'aria-hidden':"true",style:{display:`flex`,gap:48,alignItems:`center`,animation:`logoMarquee 25s linear infinite`},children:r.map((e,t)=>(0,x.jsx)(`img`,{src:e.src,alt:"",style:{width:e.w*.7,height:e.h*.7,objectFit:`contain`,filter:`grayscale(1)`,flexShrink:0}},t))}),(0,x.jsx)(`div`,{'aria-hidden':"true",style:{display:`flex`,gap:48,alignItems:`center`,animation:`logoMarquee 25s linear infinite`},children:r.map((e,t)=>(0,x.jsx)(`img`,{src:e.src,alt:"",style:{width:e.w*.7,height:e.h*.7,objectFit:`contain`,filter:`grayscale(1)`,flexShrink:0}},t))}),(0,x.jsx)(`div`,{'aria-hidden':"true",style:{display:`flex`,gap:48,alignItems:`center`,animation:`logoMarquee 25s linear infinite`},children:r.map((e,t)=>(0,x.jsx)(`img`,{src:e.src,alt:"",style:{width:e.w*.7,height:e.h*.7,objectFit:`contain`,filter:`grayscale(1)`,flexShrink:0}},t))})]}),(0,x.jsx)(`style`,{children:`
              @keyframes logoMarquee {
                0%   { transform: translateX(0); }
                100% { transform: translateX(calc(-100% - 48px)); }
              }
            `})]}):(0,x.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:113,alignItems:`center`,justifyContent:`center`,width:`100%`,padding:`0 32px`},children:r.map((e,t)=>(0,x.jsx)(`img`,{src:e.src,alt:"",style:{width:e.w,height:e.h,objectFit:`contain`,filter:`grayscale(1)`}},t))})]})})}var K=[`Finding`,`a`,`product`,`designer`,`takes`,`months.`,`Starting`,`with`,`UMANO`,`takes`,`minutes.`,`Unlimited`,`requests.`,`Fixed`,`monthly`,`price.`,`No`,`commitment.`];/* ==========================================================================
   SECTION: CLIENT LOGOS MARQUEE
   ========================================================================== */
function he(){let e=W(),t=(0,o.useRef)(null),[n,r]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=()=>{let e=t.current;if(!e)return;let n=e.getBoundingClientRect(),i=e.offsetHeight-window.innerHeight;r(Math.max(0,Math.min(1,-n.top/i)))};return window.addEventListener(`scroll`,e,{passive:!0}),e(),()=>window.removeEventListener(`scroll`,e)},[]),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(`div`,{ref:t,style:{position:`relative`,height:`250vh`,background:`#fffbce`},children:(0,x.jsx)(`div`,{style:{position:`sticky`,top:0,height:`100vh`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`#fffbce`},children:(0,x.jsx)(`div`,{style:{padding:e?`0 24px`:`0 112px`,width:`100%`,maxWidth:1440},children:(0,x.jsx)(`p`,{style:{fontFamily:F,fontWeight:700,fontSize:e?24:36,lineHeight:e?`34px`:`44px`,margin:0,letterSpacing:`-0.72px`,maxWidth:e?`100%`:695},children:K.map((e,t)=>{let r=t/K.length,i=(t+1)/K.length,a=Math.max(0,Math.min(1,(n-r*.85)/(i-r+.04)));return(0,x.jsxs)(`span`,{style:{color:a>=1?V:a<=0?`#d8d29b`:`color-mix(in srgb, ${V} ${Math.round(a*100)}%, #d8d29b)`,transition:`color 0.15s ease`},children:[e,` `]},t)})})})})})})}var q=[{title:`Your designer, from day one`,desc:`A senior product designer fully dedicated to your company. Working like a founding designer, without the hiring process.`,img:`https://res.cloudinary.com/djxl84yj7/image/upload/v1787995266/Dachshund_Clube_jncest.gif`,icon:`/assets/hero/icon-interface.svg`},{title:`Unlimited design requests`,desc:`Submit as many tasks as you need. No per-task billing, no cap, no waiting list. Just continuous output.`,img:`https://res.cloudinary.com/djxl84yj7/image/upload/v1787995399/download_wk0neo.gif`,icon:`/assets/process/process-icon-requests.svg`},{title:`Delivered in 4 days or less`,desc:`Every task is delivered within 4 days. Your roadmap keeps moving, your product keeps shipping.`,img:`https://res.cloudinary.com/djxl84yj7/image/upload/v1787995402/Rebecca_Mock_ihup80.gif`,icon:`/assets/process/process-icon-delivery.svg`},{title:`Embedded in your workflow`,desc:`Slack, Jira, Notion, Figma, Linear. We plug into whatever you use and work like part of your team.`,img:`https://res.cloudinary.com/djxl84yj7/image/upload/v1787995587/PRINSOMNIA_illustration__Photo_eka9ag.gif`,icon:`/assets/process/process-icon-embedded.svg`},{title:`Flexible and predictable`,desc:`Scale up, pause, or cancel anytime. Transparent monthly pricing with no surprises or hidden fees.`,icon:`/assets/process/process-icon-pause.svg`}],ge=33,_e=Array.from({length:5},(e,t)=>Array.from({length:5},(e,n)=>({r:t,c:n}))).flat(),ve=new Set([`0-1`,`0-2`,`1-0`,`1-4`,`2-1`,`3-0`,`3-3`,`4-0`,`4-4`]),ye=200;function be({w:e,h:t}){let[n,r]=(0,o.useState)(0);(0,o.useEffect)(()=>{let e=setInterval(()=>{r(e=>e>=_e.length?e:e+1)},ye);return()=>clearInterval(e)},[]),(0,o.useEffect)(()=>{if(n<_e.length)return;let e=setTimeout(()=>r(0),1800);return()=>clearTimeout(e)},[n]);let i=e*.13,a=t*.13,s=(e-i*2)/4,c=(t-a*2)/4,l=Math.round(e*.016),u=Math.round(e*.072);return(0,x.jsx)(`svg`,{width:e,height:t,style:{position:`absolute`,inset:0},children:Array.from({length:5},(e,t)=>Array.from({length:5},(e,r)=>{let o=`${t}-${r}`,d=t*5+r<n,f=ve.has(o),p=i+r*s,m=a+t*c;return(0,x.jsxs)(`g`,{children:[!f&&(0,x.jsx)(`circle`,{cx:p,cy:m,r:l,fill:d?`#ff692e`:`#C8BFB0`,style:{transition:`fill 0.15s ease`}}),f&&!d&&(0,x.jsx)(`circle`,{cx:p,cy:m,r:l,fill:`#C8BFB0`}),f&&d&&(0,x.jsxs)(`g`,{transform:`translate(${p-u*.5}, ${m-u*.59}) scale(${u/221})`,style:{opacity:1,transition:`opacity 0.3s ease`},children:[(0,x.jsx)(`path`,{d:`M104.014 260.23C46.6953 260.23 0.229736 213.764 0.229736 156.446L0.229736 104.554C57.5479 104.554 104.014 151.02 104.014 208.338V260.23Z`,fill:`#ff692e`}),(0,x.jsx)(`path`,{d:`M116.987 260.23V4.78771C116.987 2.56894 118.785 0.770275 121.004 0.770275C176.103 0.770275 220.77 45.4372 220.77 100.537V169.958C220.77 219.814 180.354 260.23 130.499 260.23H116.987Z`,fill:`#ff692e`})]})]},o)}))})}var xe=Array.from({length:12},(e,t)=>`/assets/tools/tool-${t}.png`);function Se(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+r-a,n),e.arcTo(t+r,n,t+r,n+a,a),e.lineTo(t+r,n+i-a),e.arcTo(t+r,n+i,t+r-a,n+i,a),e.lineTo(t+a,n+i),e.arcTo(t,n+i,t,n+i-a,a),e.lineTo(t,n+a),e.arcTo(t,n,t+a,n,a),e.closePath()}function Ce({velocityRef:e,w:t,h:n}){let r=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let i=r.current;if(!i)return;let a=i.getContext(`2d`);if(!a)return;let o=Math.min(window.devicePixelRatio,2);i.width=Math.round(t*o),i.height=Math.round(n*o),a.scale(o,o);let s=Math.round(t*.165),c=s*.24,l=s*.13,u=.42,d=xe.map(e=>{let t=new Image;return t.onerror=()=>{},t.src=e,t}),f=Math.floor(t/(s+8)),p=d.map((e,n)=>({img:e,x:s/2+8+n%f*((t-s-16)/Math.max(f-1,1)),y:-s*1.4-Math.floor(n/f)*(s+6),vx:(Math.random()-.5)*1.5,vy:.5+Math.random()*1.5})),m=0,h=()=>{a.clearRect(0,0,t,n);let r=e.current??0;p.forEach(e=>{e.vy+=.28,e.vx-=r*.1,e.vx*=.94,e.vy*=.988,e.x+=e.vx,e.y+=e.vy;let i=s/2;e.x-i<0&&(e.x=i,e.vx=Math.abs(e.vx)*u),e.x+i>t&&(e.x=t-i,e.vx=-Math.abs(e.vx)*u),e.y-i<0&&(e.y=i,e.vy=Math.abs(e.vy)*u),e.y+i>n&&(e.y=n-i,e.vy=-Math.abs(e.vy)*u)});for(let e=0;e<p.length;e++)for(let t=e+1;t<p.length;t++){let n=p[e],r=p[t],i=r.x-n.x,a=r.y-n.y,o=Math.sqrt(i*i+a*a);if(o<s&&o>.001){let e=i/o,t=a/o,c=s-o;n.x-=e*c/2,n.y-=t*c/2,r.x+=e*c/2,r.y+=t*c/2;let l=(r.vx-n.vx)*e+(r.vy-n.vy)*t;if(l<0){let i=l*(1+u)/2;n.vx+=i*e,n.vy+=i*t,r.vx-=i*e,r.vy-=i*t}}}p.forEach(e=>{let t=e.x-s/2,n=e.y-s/2;Se(a,t,n,s,s,c),a.fillStyle=`#fff`,a.fill();if(e.img&&e.img.complete&&e.img.naturalWidth>0&&e.img.naturalHeight>0){try{a.save(),Se(a,t,n,s,s,c),a.clip(),a.drawImage(e.img,t+l,n+l,s-l*2,s-l*2),a.restore()}catch(_){}}}),m=requestAnimationFrame(h)};return m=requestAnimationFrame(h),()=>cancelAnimationFrame(m)},[t,n,e]),(0,x.jsx)(`canvas`,{ref:r,style:{position:`absolute`,inset:0,width:t,height:n}})}function we({title:e,desc:t,imgH:n,video:r,img:i,cardW:a,overlay:o,pricingCta:s,bgColor:c,children:l,videoRef:u,imgRef:d,bgRef:f,icon:p}){let m=W(),h=Math.round(n/694*37),g=()=>{let e=document.querySelector(`[data-section="pricing"]`);e&&window.scrollTo({top:e.offsetTop,behavior:`smooth`})};return(0,x.jsxs)(`div`,{"data-cursor":`card`,"data-cursor-radius":h,onClick:g,style:{display:`flex`,flexDirection:`column`,gap:20,width:a,flexShrink:0},children:[(0,x.jsxs)(`div`,{ref:f,style:{position:`relative`,borderRadius:h,height:n,overflow:`hidden`,flexShrink:0,background:c??`#0a0d12`},children:[r&&(0,x.jsx)(`video`,{ref:u,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{position:`absolute`,inset:0,width:`100%`,height:`100%`,objectFit:`cover`,transform:`scale(1.15)`,transition:`transform 1.8s cubic-bezier(.165,.84,.44,1)`},children:(0,x.jsx)(`source`,{src:r})}),i&&(0,x.jsx)(`img`,{ref:d,src:i,alt:"",style:{position:`absolute`,inset:0,width:`100%`,height:`100%`,objectFit:`cover`}}),o&&!l&&(0,x.jsx)(`div`,{style:{position:`absolute`,inset:0,pointerEvents:`none`,background:`rgba(0,0,0,0.2)`}}),l]}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,maxWidth:437},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,gap:9,alignItems:`center`},children:[(0,x.jsx)(`img`,{src:p||re,alt:"",style:{width:20,height:20,objectFit:`contain`,flexShrink:0}}),(0,x.jsx)(`span`,{style:{fontFamily:I,fontWeight:700,fontSize:m?15:20,color:`#140906`,letterSpacing:`-0.2px`,lineHeight:`normal`},children:e})]}),(0,x.jsx)(`p`,{style:{fontFamily:I,fontWeight:500,fontSize:m?13:18,color:`#140906`,letterSpacing:`-0.18px`,lineHeight:`1.4`,margin:0},children:t})]})]})}function Te({w:e,h:t,zoomProgRef:n,velocityRef:r,logoSvgRef:i}){
  let a = (0, o.useRef)(null),
      s = (0, o.useRef)(null),
      c = (0, o.useRef)(null),
      l = i || c,
      u = (0, o.useRef)(0),
      d = Math.min(e, t) * 0.42,
      f = Math.min(e, t) * 0.65;

  (0, o.useEffect)(() => {
    let i = 0,
        o = () => {
          let c = 1 - (1 - (n.current ?? 0)) ** 2,
              l = r.current ?? 0;
          u.current = Math.max(-18, Math.min(18, u.current * 0.92 + l * 0.12));
          let d = u.current;
          a.current && (a.current.style.transform = `translate(${-c * e * 0.55 + d * 1.2}px, ${-c * t * 0.35 + d * 0.4}px)`);
          s.current && (s.current.style.transform = `translate(${c * e * 0.55 - d * 0.8}px, ${c * t * 0.35 - d * 0.3}px)`);
          i = requestAnimationFrame(o);
        };
    i = requestAnimationFrame(o);
    return () => cancelAnimationFrame(i);
  }, [e, t, d, n, r]);

  return (0, x.jsxs)("div", {
    style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" },
    children: [
      (0, x.jsx)("img", {
        ref: l,
        src: "/assets/brand/interkace-icon.png",
        alt: "Interkace Logo",
        style: {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: `${d}px`,
          height: "auto",
          aspectRatio: "1214 / 1295",
          objectFit: "contain",
          willChange: "transform",
          userSelect: "none",
          pointerEvents: "none",
          filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.25))"
        }
      }),
      (0, x.jsx)("img", {
        ref: a,
        src: "/assets/process/process-cloud-left.webp",
        alt: "",
        style: { position: "absolute", width: f, height: "auto", top: "8%", left: "-5%", pointerEvents: "none", willChange: "transform" }
      }),
      (0, x.jsx)("img", {
        ref: s,
        src: "/assets/process/process-cloud-right.webp",
        alt: "",
        style: { position: "absolute", width: f, height: "auto", bottom: "8%", right: "-5%", pointerEvents: "none", willChange: "transform" }
      })
    ]
  });
}
function Ee(){
  let e = W(),
      t = (0, o.useRef)(null),
      stickyRef = (0, o.useRef)(null),
      n = (0, o.useRef)(null),
      r = (0, o.useRef)(null),
      i = (0, o.useRef)(null),
      a = (0, o.useRef)([]),
      s = (0, o.useRef)([]),
      c = (0, o.useRef)([]),
      l = (0, o.useRef)(q.map(() => !1)),
      u = (0, o.useRef)(0),
      d = (0, o.useRef)(null),
      f = (0, o.useRef)(null),
      p = (0, o.useRef)(0),
      m = (0, o.useRef)(0),
      h = (0, o.useRef)(null),
      [g, _] = (0, o.useState)(() => window.innerWidth),
      [v, y] = (0, o.useState)(() => window.innerHeight),
      b = e ? Math.min(320, g - 32) : 487,
      S = e ? 20 : 80,
      C = Math.max(240, Math.min(694, v - 112 - 260)),
      w = e ? Math.round(b * 1.35) : C;

  (0, o.useEffect)(() => {
    let e = 0.8,
        i = 0,
        o = 0,
        g = 0,
        v = () => {
          let _ = t.current,
              y = n.current,
              b = r.current;
          if (!_ || !y) {
            g = requestAnimationFrame(v);
            return;
          }
          let x = window.innerWidth,
              S = window.innerHeight,
              C = _.getBoundingClientRect(),
              w = _.offsetHeight - S,
              T = (w * 4) / 5,
              E = w / 5,
              D = Math.max(0, -C.top),
              O = D - o;
          o = D;
          p.current = O;
          D <= T ? (i = Math.max(-28, Math.min(28, i * e + O * 0.3))) : (i *= e);

          let k = x <= 768,
              A = k ? Math.min(320, x - 32) : 487,
              j = k ? 20 : 80,
              M = j + A / 2,
              ee = j + (q.length - 1) * (A + ge) + A / 2,
              N = x / 2 - M,
              te = x / 2 - ee,
              ne = N + Math.min(1, D / T) * (te - N);
          y.style.transform = `translateX(${ne}px)`;
          a.current.forEach((e, t) => {
            e && (e.style.transform = `translateX(${i * (t + 1)}px)`);
          });

          let P = performance.now();
          s.current.forEach((e, t) => {
            if (!(!e || l.current[t]) && e.getBoundingClientRect().left < x * 0.75) {
              if (P < u.current) return;
              l.current[t] = !0;
              u.current = P + 350;
              e.style.opacity = `1`;
              e.style.transform = `translateY(0px) skewY(0deg)`;
              let n = c.current[t];
              n && (n.style.transform = `scale(1)`);
            }
          });

          let initialRadius = Math.round((w / 694) * 37) || 32;

          if (b) {
            let e = Math.max(240, Math.min(694, S - 112 - 260)),
                tCard = k ? Math.round((e / 487) * A) : e;

            if (D > T) {
              let nProg = Math.max(0, Math.min(1, (D - T) / E));
              m.current = nProg;
              let rEase = 1 - (1 - nProg) ** 3;
              let maxScale = Math.max(x / A, S / Math.max(1, tCard)) * 1.08;
              let currentScale = 1 + (maxScale - 1) * rEase;
              b.style.transform = `scale(${currentScale})`;

              let originY = S / 2;
              let cardVisual = f.current;
              if (cardVisual && b) {
                let rRect = b.getBoundingClientRect();
                let cRect = cardVisual.getBoundingClientRect();
                if (b.__scale) {
                  originY = (cRect.top - rRect.top) / b.__scale + (cRect.height / (2 * b.__scale));
                } else {
                  originY = (cRect.top - rRect.top) + (cRect.height / 2);
                }
              }
              b.__scale = currentScale;
              b.style.transformOrigin = `${x / 2}px ${originY}px`;

              let a = d.current;
              if (a) {
                let eW = A * maxScale,
                    nH = tCard * maxScale;
                a.style.inset = "";
                a.style.width = `${eW}px`;
                a.style.height = `${nH}px`;
                a.style.left = `${(A - eW) / 2}px`;
                a.style.top = `${(tCard - nH) / 2}px`;
              }

              let oSvg = h.current;
              if (oSvg) {
                let eIcon = Math.min(A, tCard) * 0.44;
                oSvg.style.width = `${eIcon}px`;
                oSvg.style.height = "auto";
                oSvg.style.aspectRatio = "1214 / 1295";
                oSvg.style.transform = `translate(-50%, -50%)`;
                let nOver = D - w,
                    rFade = Math.max(0, Math.min(1, (nOver - S * 0.2) / (S * 0.6)));
                oSvg.style.opacity = `${1 - rFade}`;
              }

              let sCard = f.current;
              if (sCard) {
                let bgProg = 1 - (1 - Math.max(0, (nProg - 0.4) / 0.6)) ** 3;
                sCard.style.background = `color-mix(in srgb, #0a0d12 ${Math.round(bgProg * 100)}%, #0a0d12)`;
                let currentRadius = Math.max(0, (1 - rEase) * initialRadius);
                sCard.style.borderRadius = `${currentRadius}px`;
              }

              let stickyEl = stickyRef.current;
              if (stickyEl) {
                stickyEl.style.backgroundColor = `color-mix(in srgb, #0a0d12 ${Math.round(rEase * 100)}%, #fffbce)`;
              }

              let sectionWrapper = t.current;
              if (sectionWrapper) {
                if (nProg > 0.6) {
                  sectionWrapper.style.backgroundColor = "#0a0d12";
                } else {
                  sectionWrapper.style.backgroundColor = "#fffbce";
                }
              }
            } else {
              m.current = 0;
              b.style.transform = "scale(1)";
              b.__scale = 1;
              let sCard = f.current;
              if (sCard) {
                sCard.style.borderRadius = `${initialRadius}px`;
                sCard.style.background = "#0a0d12";
              }
              let stickyEl = stickyRef.current;
              if (stickyEl) {
                stickyEl.style.backgroundColor = "#fffbce";
              }
              let sectionWrapper = t.current;
              if (sectionWrapper) {
                sectionWrapper.style.backgroundColor = "#fffbce";
              }
              let a = d.current;
              if (a) {
                a.style.inset = "0px";
                a.style.width = "100%";
                a.style.height = "100%";
                a.style.left = "";
                a.style.top = "";
              }
              let oSvg = h.current;
              if (oSvg) {
                oSvg.style.opacity = "1";
              }
            }
          }
          g = requestAnimationFrame(v);
        };

    g = requestAnimationFrame(v);
    let bResize = () => {
      _(window.innerWidth);
      y(window.innerHeight);
    };
    window.addEventListener(`resize`, bResize, { passive: !0 });

    let xTouch = 0,
        sTouch = 0,
        cScroll = 0,
        wTouch = `unknown`,
        tTouch = e => {
          let n = t.current;
          if (!n) return;
          let r = n.getBoundingClientRect(),
              i = ((n.offsetHeight - window.innerHeight) * 4) / 5,
              a = Math.max(0, -r.top);
          if (a <= 0 || a >= i) return;
          xTouch = e.touches[0].clientX;
          sTouch = e.touches[0].clientY;
          cScroll = window.scrollY;
          wTouch = `unknown`;
        },
        eTouch = e => {
          let n = t.current;
          if (!n) return;
          let r = e.touches[0].clientX - xTouch,
              i = e.touches[0].clientY - sTouch;
          if (wTouch === `unknown` && (Math.abs(r) > 10 || Math.abs(i) > 10)) {
            wTouch = Math.abs(r) > Math.abs(i) ? `horizontal` : `vertical`;
          }
          if (wTouch !== `horizontal`) return;
          e.cancelable && e.preventDefault();
          let a = (((n.offsetHeight - window.innerHeight) * 4) / 5 / Math.max(1, q.length - 1)) / (window.innerWidth * 0.7);
          window.scrollTo({ top: cScroll - r * a });
        },
        dElem = t.current;

    dElem?.addEventListener(`touchstart`, tTouch, { passive: !0 });
    dElem?.addEventListener(`touchmove`, eTouch, { passive: !1 });

    return () => {
      cancelAnimationFrame(g);
      window.removeEventListener(`resize`, bResize);
      dElem?.removeEventListener(`touchstart`, tTouch);
      dElem?.removeEventListener(`touchmove`, eTouch);
    };
  }, []);

  return (0, x.jsx)(`div`, {
    id: `how-it-works`,
    ref: t,
    style: { position: `relative`, height: `500vh`, background: `#fffbce` },
    children: (0, x.jsx)(`div`, {
      ref: stickyRef,
      style: {
        position: `sticky`,
        top: 0,
        height: `100vh`,
        overflow: `hidden`,
        display: `flex`,
        flexDirection: `column`,
        background: `#fffbce`
      },
      children: (0, x.jsx)(`div`, {
        ref: r,
        style: { display: `flex`, flexDirection: `column`, height: `100%` },
        children: (0, x.jsx)(`div`, {
          ref: i,
          style: {
            flex: 1,
            overflow: `hidden`,
            display: `flex`,
            alignItems: `center`,
            perspective: `1400px`,
            perspectiveOrigin: `50% 50%`
          },
          children: (0, x.jsx)(`div`, {
            ref: n,
            style: {
              display: `flex`,
              gap: ge,
              paddingLeft: S,
              paddingRight: S,
              willChange: `transform`
            },
            children: q.map((e, t) =>
              (0, x.jsx)(
                `div`,
                {
                  ref: el => {
                    a.current[t] = el;
                  },
                  style: { flexShrink: 0 },
                  children: (0, x.jsx)(`div`, {
                    ref: el => {
                      s.current[t] = el;
                    },
                    style: {
                      opacity: 0,
                      transform: `translateY(80px) skewY(3deg)`,
                      transition: `opacity 0.6s ease, transform 1.2s cubic-bezier(.165,.84,.44,1)`,
                      willChange: `transform, opacity`
                    },
                    children: (0, x.jsx)(we, {
                      title: e.title,
                      desc: e.desc,
                      imgH: w,
                      video: e.video,
                      img: e.img,
                      icon: e.icon,
                      cardW: b,
                      overlay: !e.img && !e.video,
                      pricingCta: e.pricingCta,
                      bgColor: `#0a0d12`,
                      children: t === q.length - 1 ? (0, x.jsx)(Te, { w: b, h: w, zoomProgRef: m, velocityRef: p, logoSvgRef: h }) : void 0,
                      videoRef: el => {
                        c.current[t] = el;
                      },
                      imgRef: t === q.length - 1 ? d : void 0,
                      bgRef: t === q.length - 1 ? f : void 0
                    })
                  })
                },
                t
              )
            )
          })
        })
      })
    })
  });
}
var De=[{icon:`/assets/process/process-icon-requests.svg`,sub:`Unlimited design requests`,mission:`Defined mission scope`},{icon:`/assets/process/process-icon-content.svg`,sub:`1 dedicated senior designer`,mission:`1 dedicated senior designer`},{icon:`/assets/process/process-icon-delivery.svg`,sub:`Deliveries within 4 days`,mission:`Continuous delivery`},{icon:`/assets/process/process-icon-meeting.svg`,sub:`Weekly call`,mission:`Daily calls`},{icon:`/assets/process/process-icon-budget.svg`,sub:`Monthly subscription`,mission:`Defined period`,missionIcon:`/assets/process/process-icon-period.svg`},{icon:`/assets/process/process-icon-pause.svg`,sub:`Pause or cancel anytime`,mission:`Full design ownership`,missionIcon:`/assets/process/process-icon-ownership.svg`}];function Oe({title:e,price:t,description:n,features:r=[],visual:i}){let a=W(),[s,c]=(0,o.useState)(!1),[l,u]=(0,o.useState)(!1),d=(0,o.useRef)(null);(0,o.useEffect)(()=>{if(!a||!d.current)return;let e=new IntersectionObserver(([e])=>u(e.isIntersecting),{threshold:.5});return e.observe(d.current),()=>e.disconnect()},[a]);let f=a?l:s;return(0,x.jsxs)(`a`,{ref:d,href:`#contact-form`,onClick:(e)=>{e.preventDefault();let el=document.getElementById("contact-form");if(el){if(window.__lenis){window.__lenis.scrollTo(el,{offset:-90})}else{window.scrollTo({top:el.getBoundingClientRect().top+window.pageYOffset-90,behavior:"smooth"})}}},"data-cursor-dot":!0,onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),style:{background:`#fff`,borderRadius:24,overflow:`hidden`,display:`flex`,flexDirection:`column`,textDecoration:`none`,color:`inherit`,cursor:`pointer`},children:[(0,x.jsx)(`div`,{style:{filter:f?`none`:`grayscale(1)`,transition:`filter 0.4s ease`},children:i}),(0,x.jsxs)(`div`,{style:{padding:a?`24px 20px 32px`:`32px 32px 32px`,display:`flex`,flexDirection:`column`,gap:20,flex:1},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,flexWrap:`wrap`,gap:8},children:[(0,x.jsx)(`h3`,{style:{fontFamily:F,fontWeight:700,fontSize:a?24:30,lineHeight:`1.2`,color:V,margin:0},children:e}),(0,x.jsx)(`span`,{style:{fontFamily:F,fontWeight:700,fontSize:a?20:26,color:f?R:V,letterSpacing:`-0.3px`,transition:`color 0.4s ease`},children:t})]}),(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:400,fontSize:15,color:`#535862`,lineHeight:`24px`,margin:0},children:n}),(0,x.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:14},children:r.map((e,t)=>(0,x.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`,color:`#535862`},children:[(0,x.jsx)(`img`,{src:e.icon,alt:"",style:{width:20,height:20,objectFit:`contain`,flexShrink:0}}),(0,x.jsx)(`span`,{style:{fontFamily:L,fontWeight:400,fontSize:14,color:V,lineHeight:`20px`},children:e.label})]},t))}),(0,x.jsx)(`div`,{style:{width:`100%`,background:f?R:V,borderRadius:12,padding:`14px 24px`,fontFamily:L,fontWeight:600,fontSize:16,color:`#fff`,textAlign:`center`,marginTop:`auto`,transition:`background 0.4s ease`},children:`Call Us`})]})]})}


function AuthenticFolderCard({ cardData, index, isMobile }) {
  const containerRef = (0, o.useRef)(null);
  const coverRef = (0, o.useRef)(null);
  const paperRef = (0, o.useRef)(null);
  const [isOpen, setIsOpen] = (0, o.useState)(false);
  const isAnimatingRef = (0, o.useRef)(false);
  const isHoveredRef = (0, o.useRef)(false);
  const tlRef = (0, o.useRef)(null);

  (0, o.useEffect)(() => {
    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, []);

  const getGsap = () => {
    return (typeof window !== 'undefined' && window.gsap) ? window.gsap : (typeof gsap !== 'undefined' ? gsap : null);
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    if (isOpen || isAnimatingRef.current) return;
    const g = getGsap();
    if (g && coverRef.current && paperRef.current) {
      g.to(coverRef.current, { rotateY: -43, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
      g.to(paperRef.current, { x: 35, rotation: 6, duration: 0.4, ease: 'back.out(1.2)', overwrite: 'auto' });
    }
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    if (isOpen || isAnimatingRef.current) return;
    const g = getGsap();
    if (g && coverRef.current && paperRef.current) {
      g.to(coverRef.current, { rotateY: 0, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
      g.to(paperRef.current, { x: 0, rotation: 0, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
    }
  };

  const handleClick = () => {
    const g = getGsap();
    if (!g || !coverRef.current || !paperRef.current) return;
    if (isAnimatingRef.current) return;
    if (tlRef.current) {
      tlRef.current.kill();
    }

    if (!isOpen) {
      // Exact original Open sequence:
      // 1. Flap opens (-43deg) while card slides out to the right (x: 310, rotate: 0)
      // 2. Flap closes (0deg) while card elevates z-index (zIndex: 10)
      // 3. Card glides back over closed folder, flips 180deg with -7deg tilt & layered drop shadow
      isAnimatingRef.current = true;
      const tl = g.timeline({
        onComplete: () => {
          isAnimatingRef.current = false;
          setIsOpen(true);
        }
      });
      tlRef.current = tl;

      // 1. Cover opens smoothly
      tl.to(coverRef.current, {
        rotateY: -43,
        duration: 0.35,
        ease: 'power2.out'
      }, 0);

      // 2. Paper card pulls cleanly out to the right
      tl.to(paperRef.current, {
        x: 310,
        rotation: 0,
        scale: 1.08,
        duration: 0.5,
        ease: 'power2.inOut'
      }, 0);

      // 3. Elevate zIndex while the card is completely clear on the right
      tl.set(paperRef.current, { zIndex: 10 }, 0.48);

      // 4. Cover flap closes smoothly
      tl.to(coverRef.current, {
        rotateY: 0,
        duration: 0.4,
        ease: 'power2.inOut'
      }, 0.45);

      // 5. Paper card glides back over the closed folder, flips 180deg with -7deg tilt & layered shadow
      tl.to(paperRef.current, {
        x: 8,
        rotateY: 180,
        rotation: -7,
        boxShadow: '0px -0.77px 0.46px -0.75px rgba(0, 0, 0, 0.18), 0px -2.1px 1.26px -1.5px rgba(0, 0, 0, 0.18), 0px -4.6px 2.76px -2.25px rgba(0, 0, 0, 0.17), 0px -10.23px 6.14px -3px rgba(0, 0, 0, 0.14), 0px -26px 15.6px -3.75px rgba(0, 0, 0, 0.06)',
        duration: 0.58,
        ease: 'back.out(1.15)'
      }, 0.5);
    } else {
      // Exact original Close sequence:
      // 1. Card flips in-place on top of the folder (rotateY: 0, rotation: -7, x: 8)
      // 2. Flap opens (-43deg) and card glides out to the right (x: 310, rotation: 0, boxShadow: none)
      // 3. Lower z-index (zIndex: 1) and card glides back inside the sleeve
      // 4. Flap closes securely over the card
      isAnimatingRef.current = true;
      const tl = g.timeline({
        onComplete: () => {
          isAnimatingRef.current = false;
          setIsOpen(false);
        }
      });
      tlRef.current = tl;

      // 1. Paper card flips in-place on top of the folder back to front face (0deg)
      tl.to(paperRef.current, {
        rotateY: 0,
        rotation: -7,
        x: 8,
        duration: 0.35,
        ease: 'power2.inOut'
      }, 0);

      // 2. Cover flap opens to receive the paper
      tl.to(coverRef.current, {
        rotateY: -43,
        duration: 0.35,
        ease: 'power2.out'
      }, 0.35);

      // 3. Paper card glides out to the right
      tl.to(paperRef.current, {
        x: 310,
        rotation: 0,
        scale: 1.08,
        boxShadow: 'none',
        duration: 0.45,
        ease: 'power2.inOut'
      }, 0.35);

      // 4. Lower zIndex behind the open cover flap while clear on the right
      tl.set(paperRef.current, { zIndex: 1 }, 0.78);

      // 5. Paper card glides smoothly back into the sleeve
      tl.to(paperRef.current, {
        x: isHoveredRef.current ? 35 : 0,
        rotation: isHoveredRef.current ? 6 : 0,
        scale: 1,
        duration: 0.45,
        ease: 'power2.out'
      }, 0.8);

      // 6. Cover flap closes securely
      tl.to(coverRef.current, {
        rotateY: isHoveredRef.current ? -43 : 0,
        duration: 0.38,
        ease: 'power2.inOut'
      }, 1.05);
    }
  };

  return (0, x.jsxs)('div', {
    ref: containerRef,
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: {
      position: 'relative',
      width: '318px',
      height: '398px',
      cursor: 'pointer',
      userSelect: 'none',
      overflow: 'visible',
      transform: isMobile ? 'scale(0.88)' : 'scale(1)',
      transformOrigin: '50% 50%'
    },
    children: [
      /* Back of folder */
      (0, x.jsx)('div', {
        style: {
          position: 'absolute',
          width: '317px',
          height: '397px',
          left: 'calc(50% - 158.5px)',
          top: 'calc(50% - 198.5px)',
          backgroundColor: index === 0 ? '#C34811' : index === 1 ? '#001588' : '#d9d1ca',
          borderRadius: '20px',
          zIndex: 0
        }
      }),
      /* Inner Writing Card */
      (0, x.jsxs)('div', {
        ref: paperRef,
        style: {
          position: 'absolute',
          width: '267px',
          height: '333px',
          left: 'calc(50% - 133.5px)',
          top: 'calc(50% - 166.5px)',
          borderRadius: '20px',
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d',
          transformPerspective: 1200,
          transformOrigin: '50% 50%',
          zIndex: 1,
          pointerEvents: 'none',
          willChange: 'transform, box-shadow'
        },
        children: [
          /* Back of Message (Visible when flipped 180deg) */
          (0, x.jsxs)('div', {
            style: {
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: 'inherit',
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              overflow: 'hidden'
            },
            children: [
              /* Text paragraph on back */
              (0, x.jsxs)('div', {
                style: {
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: '84%',
                  transform: 'translate(-50%, -50%)',
                  fontFamily: '"Geist", sans-serif',
                  fontSize: '12px',
                  lineHeight: '1.5',
                  color: 'rgb(20, 20, 20)',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                },
                children: [
                  (0, x.jsx)('p', { style: { margin: '0 0 10px' }, children: 'This document is classified and intended solely for authorized personnel.' }),
                  (0, x.jsx)('p', { style: { margin: '0 0 10px' }, children: 'Access without proper clearance is strictly prohibited and may lead to serious consequences.' }),
                  (0, x.jsx)('p', { style: { margin: '0 0 10px' }, children: 'By continuing, you acknowledge that you understand the sensitivity of the material and agree to handle it responsibly.' }),
                  (0, x.jsx)('p', { style: { margin: '0', fontWeight: '500' }, children: '…' }),
                  (0, x.jsx)('p', { style: { margin: '10px 0 0' }, children: "You really don't follow instructions, do you?" })
                ]
              }),
              /* Sticker GIF */
              (0, x.jsx)('div', {
                style: {
                  position: 'absolute',
                  bottom: '78px',
                  right: '35px',
                  width: '60px',
                  height: '60px',
                  backgroundImage: 'url("/assets/folder-cards/sticker.gif"), url("https://framerusercontent.com/images/blqn41GFzRaYAkfhHyI0zi4yc.gif?width=200&height=200")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }
              })
            ]
          }),
          /* Front of Message (Visible when closed / rotateY 0deg) */
          (0, x.jsx)('div', {
            style: {
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: 'inherit',
              transform: 'rotateY(0deg)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              overflow: 'hidden'
            },
            children: (0, x.jsx)('div', {
              style: {
                position: 'absolute',
                top: '84px',
                right: '-26px',
                transform: 'rotate(90deg)',
                fontFamily: '"Geist Mono", monospace',
                fontSize: '14px',
                color: 'rgb(20, 20, 20)',
                whiteSpace: 'pre',
                letterSpacing: '1px'
              },
              children: 'DO NOT OPEN'
            })
          })
        ]
      }),
      /* Front Cover Flap */
      (0, x.jsxs)('div', {
        ref: coverRef,
        style: {
          position: 'absolute',
          width: '317px',
          height: '397px',
          left: 'calc(50% - 158.5px)',
          top: 'calc(50% - 198.5px)',
          backgroundColor: index === 0 ? '#C34811' : index === 1 ? '#001588' : '#d9d1ca',
          borderRadius: '20px',
          boxShadow: index === 2 ? 'inset 0px 3px 2px 0px rgba(255, 255, 255, 0.5)' : 'inset 0px 3px 2px 0px rgba(255, 255, 255, 0.2)',
          transformOrigin: '0% 50%',
          transformPerspective: 1200,
          zIndex: 2,
          pointerEvents: 'none',
          willChange: 'transform'
        },
        children: [
          /* Interkace Logo PNG */
          (0, x.jsx)('div', {
            style: {
              position: 'absolute',
              top: '28px',
              left: '22px',
              width: '32px',
              height: 'auto',
              display: 'flex',
              alignItems: 'center'
            },
            children: (0, x.jsx)('img', {
              src: '/assets/brand/interkace-icon.png',
              alt: 'Interkace Logo',
              style: {
                width: '32px',
                height: 'auto',
                aspectRatio: '1214 / 1295',
                objectFit: 'contain',
                display: 'block'
              }
            })
          }),
          /* Cover Text */
          (0, x.jsxs)('div', {
            style: {
              position: 'absolute',
              left: '22px',
              bottom: '31px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px'
            },
            children: [
              (0, x.jsx)('div', {
                style: {
                  fontFamily: '"Geist Mono", monospace',
                  fontSize: '15px',
                  fontWeight: '700',
                  color: index === 2 ? '#140906' : 'rgb(255, 255, 255)',
                  letterSpacing: '0.5px',
                  whiteSpace: 'pre'
                },
                children: cardData?.coverTitle || 'CONFIDENTIAL FILES'
              }),
              (0, x.jsx)('div', {
                style: {
                  fontFamily: '"Geist", sans-serif',
                  fontSize: '14px',
                  color: index === 2 ? 'rgba(20, 9, 6, 0.75)' : 'rgba(255, 255, 255, 0.8)',
                  whiteSpace: 'pre'
                },
                children: cardData?.coverSubtitle || 'Internal use only'
              })
            ]
          })
        ]
      })
    ]
  });
}
/* ==========================================================================
   SECTION: UI FOLDER CARDS (3D Classified File Extraction)
   ========================================================================== */
function FolderCardsSection() {
  let isMobile = W();
  let cardsData = [
    {
      id: 'files',
      coverTitle: 'CONFIDENTIAL FILES',
      coverSubtitle: 'Internal use only'
    },
    {
      id: 'strategy',
      coverTitle: 'CONFIDENTIAL FILES',
      coverSubtitle: 'Internal use only'
    },
    {
      id: 'system',
      coverTitle: 'CONFIDENTIAL FILES',
      coverSubtitle: 'Internal use only'
    }
  ];

  return (0, x.jsx)('section', {
    id: 'folder-cards',
    'data-section': 'folder-cards',
    style: {
      width: '100%',
      background: V,
      overflow: 'visible',
      margin: 0,
      padding: isMobile ? '40px 16px 56px' : '64px 24px 88px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box'
    },
    children: (0, x.jsx)('div', {
      style: {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isMobile ? '48px' : '40px',
        width: '100%',
        maxWidth: '1180px',
        margin: '0 auto',
        boxSizing: 'border-box',
        overflow: 'visible'
      },
      children: cardsData.map((card, idx) => (
        (0, x.jsx)(AuthenticFolderCard, {
          key: card.id + idx,
          cardData: card,
          index: idx,
          isMobile: isMobile
        })
      ))
    })
  });
}

/* ==========================================================================
   SECTION: ABOUT US (Team & Philosophy)
   ========================================================================== */
function AboutUsSection() {
  let isMobile = W();
  return (0, x.jsx)('section', {
    id: 'about-us',
    'data-section': 'about-us',
    style: {
      width: '100%',
      background: V,
      overflow: 'hidden',
      margin: 0,
      padding: isMobile ? '24px 0 40px' : '32px 0 56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    children: (0, x.jsx)('iframe', {
      src: '/assets/about-us/index.html',
      title: 'About Us',
      scrolling: 'no',
      style: {
        width: '100%',
        maxWidth: 1200,
        height: isMobile ? 900 : 880,
        border: 'none',
        background: 'transparent',
        display: 'block'
      }
    })
  });
}

var Ae = [
  { q: "How much does it cost?", a: "Please reach out to us — we'll be happy to discuss it with you and find the right plan for your needs." },
  { q: "We already have a design team. Can you still help?", a: "Absolutely. We integrate into your existing workflow and tools. Jira, Notion, Figma, Slack, Linear. Think of us as an extension of your team, not a replacement." },
  { q: "Who will be my designer?", a: "A dedicated senior product designer with experience shipping products at startups and scale-ups. They own your project end to end. No handoffs, no junior rotations." },
  { q: "What can you design?", a: "Everything a founding designer would handle. Mobile apps, SaaS products, websites, landing pages, design systems, dashboards, and more. UX research, UI design, prototyping, all the way to developer handoff." },
  { q: "How fast can you start?", a: "Most engagements kick off within a few days. Book a call, tell us what you need, and we'll match you with the right designer." }
];


/* ==========================================================================
   SECTION: CONTACT FORM (Sprint Booking & Consultation)
   ========================================================================== */
function ContactFormSection() {
  let isMobile = W();
  let [step, setStep] = (0, o.useState)(1);
  let [isAnimating, setIsAnimating] = (0, o.useState)(false);
  let [isSubmitting, setIsSubmitting] = (0, o.useState)(false);
  let [isSubmitted, setIsSubmitted] = (0, o.useState)(false);

  let [formData, setFormData] = (0, o.useState)({
    fullName: "",
    email: "",
    phone: "",
    brandName: "",
    service: "Website",
    description: "",
    budget: "₹25,000 – ₹50,000",
    timeline: "Within 2-3 weeks",
    notes: ""
  });

  let [errors, setErrors] = (0, o.useState)({});

  const services = [
    "Website",
    "Landing Page",
    "E-commerce Website",
    "Portfolio",
    "Website Redesign",
    "Other"
  ];

  const budgets = [
    "₹10,000 – ₹25,000",
    "₹25,000 – ₹50,000",
    "₹50,000 – ₹1,00,000",
    "₹1,00,000+"
  ];

  const timelines = [
    "ASAP (10-Day Sprint)",
    "Within 2-3 weeks",
    "1 Month",
    "Flexible"
  ];

  const handleChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateStep1 = () => {
    let errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full Name is required";
    if (!formData.email.trim() || !formData.email.includes("@") || !formData.email.includes(".")) {
      errs.email = "Valid Email Address is required";
    }
    if (!formData.phone.trim()) errs.phone = "Phone / WhatsApp Number is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    let errs = {};
    if (!formData.description.trim() || formData.description.trim().length < 5) {
      errs.description = "Please briefly describe your project (at least 5 characters)";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setStep(prev => prev + 1);
      setIsAnimating(false);
    }, 200);
  };

  const handleBack = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep(prev => prev - 1);
      setIsAnimating(false);
    }, 200);
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        d("contact_form_submit", formData.service, "/contact-form");
      } catch (err) {}
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      brandName: "",
      service: "Website",
      description: "",
      budget: "₹25,000 – ₹50,000",
      timeline: "Within 2-3 weeks",
      notes: ""
    });
    setErrors({});
    setStep(1);
    setIsSubmitted(false);
  };

  const inputStyle = (hasError) => ({
    width: "100%",
    background: "#0a0d12",
    border: hasError ? "1px solid #ff4405" : "1px solid rgba(255, 255, 255, 0.14)",
    borderRadius: "12px",
    padding: "12px 16px",
    color: "#ffffff",
    fontFamily: L,
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease"
  });

  return (0, x.jsx)("section", {
    id: "contact-form",
    "data-section": "contact-form",
    style: {
      width: "100%",
      background: V,
      padding: isMobile ? "56px 16px 64px" : "96px 32px 112px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box"
    },
    children: (0, x.jsxs)("div", {
      style: {
        width: "100%",
        maxWidth: 680,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [
        (0, x.jsx)("p", {
          style: {
            fontFamily: I,
            fontWeight: 700,
            fontSize: 13,
            color: R,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            margin: "0 0 10px",
            textAlign: "center"
          },
          children: "GET IN TOUCH"
        }),
        (0, x.jsx)("h2", {
          style: {
            fontFamily: F,
            fontWeight: 700,
            fontSize: isMobile ? 36 : "clamp(38px, 4vw, 52px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            margin: "0 0 10px",
            textAlign: "center"
          },
          children: "Start Your Project"
        }),
        (0, x.jsx)("p", {
          style: {
            fontFamily: L,
            fontWeight: 400,
            fontSize: 15,
            color: "#98a2b3",
            margin: "0 0 36px",
            textAlign: "center",
            maxWidth: 480
          },
          children: "Fill in the details below and we will get back to you within 24 hours."
        }),

        (0, x.jsx)("div", {
          style: {
            width: "100%",
            background: "#181d27",
            borderRadius: 24,
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: isMobile ? "28px 20px" : "40px 44px",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.5)",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden"
          },
          children: isSubmitted ? (0, x.jsxs)("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "32px 16px"
            },
            children: [
              (0, x.jsx)("div", {
                style: {
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(255, 105, 46, 0.15)",
                  border: "1px solid #ff692e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20
                },
                children: (0, x.jsxs)("svg", {
                  width: "32",
                  height: "32",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: R,
                  strokeWidth: "3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [
                    (0, x.jsx)("polyline", { points: "20 6 9 17 4 12" })
                  ]
                })
              }),
              (0, x.jsx)("h3", {
                style: {
                  fontFamily: F,
                  fontWeight: 700,
                  fontSize: 32,
                  color: "#ffffff",
                  margin: "0 0 10px"
                },
                children: "Request Received!"
              }),
              (0, x.jsx)("p", {
                style: {
                  fontFamily: L,
                  fontWeight: 400,
                  fontSize: 15,
                  color: "rgba(255, 255, 255, 0.75)",
                  lineHeight: "22px",
                  margin: "0 0 24px",
                  maxWidth: 420
                },
                children: `Thank you, ${formData.fullName}! We've received your request for ${formData.service} (${formData.budget}). Our team will reach out to ${formData.email} or WhatsApp (${formData.phone}) within 24 hours.`
              }),
              (0, x.jsx)("button", {
                onClick: resetForm,
                style: {
                  background: R,
                  borderRadius: 43,
                  padding: "12px 28px",
                  fontFamily: L,
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#ffffff",
                  border: "none",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, background 0.2s ease"
                },
                children: "Submit Another Request"
              })
            ]
          }) : (0, x.jsxs)(x.Fragment, {
            children: [
              /* Progress Tracker 01 — 02 — 03 */
              (0, x.jsxs)("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 16
                },
                children: [
                  (0, x.jsxs)("div", {
                    style: { display: "flex", alignItems: "center", gap: 8 },
                    children: [
                      (0, x.jsx)("span", {
                        style: {
                          fontFamily: F,
                          fontWeight: 700,
                          fontSize: 20,
                          color: step === 1 ? "#ffffff" : step > 1 ? R : "rgba(255, 255, 255, 0.4)",
                          background: step === 1 ? R : step > 1 ? "rgba(255, 105, 46, 0.15)" : "rgba(255, 255, 255, 0.06)",
                          padding: "2px 10px",
                          borderRadius: 12,
                          transition: "all 0.3s ease"
                        },
                        children: "01"
                      }),
                      !isMobile && (0, x.jsx)("span", {
                        style: {
                          fontFamily: L,
                          fontWeight: step === 1 ? 600 : 400,
                          fontSize: 13,
                          color: step === 1 ? "#ffffff" : "rgba(255, 255, 255, 0.5)"
                        },
                        children: "About You"
                      })
                    ]
                  }),

                  (0, x.jsx)("span", { style: { color: "rgba(255,255,255,0.2)", fontSize: 14 }, children: "—" }),

                  (0, x.jsxs)("div", {
                    style: { display: "flex", alignItems: "center", gap: 8 },
                    children: [
                      (0, x.jsx)("span", {
                        style: {
                          fontFamily: F,
                          fontWeight: 700,
                          fontSize: 20,
                          color: step === 2 ? "#ffffff" : step > 2 ? R : "rgba(255, 255, 255, 0.4)",
                          background: step === 2 ? R : step > 2 ? "rgba(255, 105, 46, 0.15)" : "rgba(255, 255, 255, 0.06)",
                          padding: "2px 10px",
                          borderRadius: 12,
                          transition: "all 0.3s ease"
                        },
                        children: "02"
                      }),
                      !isMobile && (0, x.jsx)("span", {
                        style: {
                          fontFamily: L,
                          fontWeight: step === 2 ? 600 : 400,
                          fontSize: 13,
                          color: step === 2 ? "#ffffff" : "rgba(255, 255, 255, 0.5)"
                        },
                        children: "Your Project"
                      })
                    ]
                  }),

                  (0, x.jsx)("span", { style: { color: "rgba(255,255,255,0.2)", fontSize: 14 }, children: "—" }),

                  (0, x.jsxs)("div", {
                    style: { display: "flex", alignItems: "center", gap: 8 },
                    children: [
                      (0, x.jsx)("span", {
                        style: {
                          fontFamily: F,
                          fontWeight: 700,
                          fontSize: 20,
                          color: step === 3 ? "#ffffff" : "rgba(255, 255, 255, 0.4)",
                          background: step === 3 ? R : "rgba(255, 255, 255, 0.06)",
                          padding: "2px 10px",
                          borderRadius: 12,
                          transition: "all 0.3s ease"
                        },
                        children: "03"
                      }),
                      !isMobile && (0, x.jsx)("span", {
                        style: {
                          fontFamily: L,
                          fontWeight: step === 3 ? 600 : 400,
                          fontSize: 13,
                          color: step === 3 ? "#ffffff" : "rgba(255, 255, 255, 0.5)"
                        },
                        children: "Let's Start"
                      })
                    ]
                  })
                ]
              }),

              (0, x.jsx)("div", {
                style: {
                  height: 3,
                  width: "100%",
                  background: "rgba(255, 255, 255, 0.08)",
                  borderRadius: 2,
                  marginBottom: 28,
                  overflow: "hidden"
                },
                children: (0, x.jsx)("div", {
                  style: {
                    height: "100%",
                    width: step === 1 ? "33.3%" : step === 2 ? "66.6%" : "100%",
                    background: R,
                    transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  }
                })
              }),

              (0, x.jsx)("div", {
                style: {
                  opacity: isAnimating ? 0 : 1,
                  transform: isAnimating ? "translateY(8px)" : "translateY(0)",
                  transition: "opacity 0.2s ease, transform 0.2s ease"
                },
                children: step === 1 ? (0, x.jsxs)("div", {
                  style: { display: "flex", flexDirection: "column", gap: 18 },
                  children: [
                    (0, x.jsx)("h3", {
                      style: { fontFamily: F, fontWeight: 700, fontSize: 26, color: "#ffffff", margin: "0 0 4px" },
                      children: "Step 01 — About You"
                    }),

                    (0, x.jsxs)("div", {
                      style: { display: "flex", flexDirection: "column", gap: 6 },
                      children: [
                        (0, x.jsxs)("label", {
                          style: { fontFamily: L, fontWeight: 500, fontSize: 13, color: "rgba(255, 255, 255, 0.85)" },
                          children: ["Full Name ", (0, x.jsx)("span", { style: { color: R }, children: "*" })]
                        }),
                        (0, x.jsx)("input", {
                          type: "text",
                          placeholder: "e.g. Rahul Sharma",
                          value: formData.fullName,
                          onChange: (e) => handleChange("fullName", e.target.value),
                          style: inputStyle(!!errors.fullName)
                        }),
                        errors.fullName && (0, x.jsx)("span", {
                          style: { fontFamily: L, fontSize: 12, color: "#ff4405" },
                          children: errors.fullName
                        })
                      ]
                    }),

                    (0, x.jsxs)("div", {
                      style: { display: "flex", flexDirection: "column", gap: 6 },
                      children: [
                        (0, x.jsxs)("label", {
                          style: { fontFamily: L, fontWeight: 500, fontSize: 13, color: "rgba(255, 255, 255, 0.85)" },
                          children: ["Email Address ", (0, x.jsx)("span", { style: { color: R }, children: "*" })]
                        }),
                        (0, x.jsx)("input", {
                          type: "email",
                          placeholder: "rahul@company.com",
                          value: formData.email,
                          onChange: (e) => handleChange("email", e.target.value),
                          style: inputStyle(!!errors.email)
                        }),
                        errors.email && (0, x.jsx)("span", {
                          style: { fontFamily: L, fontSize: 12, color: "#ff4405" },
                          children: errors.email
                        })
                      ]
                    }),

                    (0, x.jsxs)("div", {
                      style: { display: "flex", flexDirection: "column", gap: 6 },
                      children: [
                        (0, x.jsxs)("label", {
                          style: { fontFamily: L, fontWeight: 500, fontSize: 13, color: "rgba(255, 255, 255, 0.85)" },
                          children: ["Phone / WhatsApp Number ", (0, x.jsx)("span", { style: { color: R }, children: "*" })]
                        }),
                        (0, x.jsx)("input", {
                          type: "tel",
                          placeholder: "+91 98765 43210",
                          value: formData.phone,
                          onChange: (e) => handleChange("phone", e.target.value),
                          style: inputStyle(!!errors.phone)
                        }),
                        errors.phone && (0, x.jsx)("span", {
                          style: { fontFamily: L, fontSize: 12, color: "#ff4405" },
                          children: errors.phone
                        })
                      ]
                    }),

                    (0, x.jsxs)("div", {
                      style: { display: "flex", flexDirection: "column", gap: 6 },
                      children: [
                        (0, x.jsx)("label", {
                          style: { fontFamily: L, fontWeight: 500, fontSize: 13, color: "rgba(255, 255, 255, 0.85)" },
                          children: "Business / Brand Name"
                        }),
                        (0, x.jsx)("input", {
                          type: "text",
                          placeholder: "e.g. Acme Innovations",
                          value: formData.brandName,
                          onChange: (e) => handleChange("brandName", e.target.value),
                          style: inputStyle(false)
                        })
                      ]
                    }),

                    (0, x.jsxs)("div", {
                      style: { display: "flex", justifyContent: "flex-end", marginTop: 12 },
                      children: [
                        (0, x.jsxs)("button", {
                          type: "button",
                          onClick: handleNext,
                          style: {
                            background: R,
                            borderRadius: 43,
                            padding: "14px 32px",
                            fontFamily: L,
                            fontWeight: 600,
                            fontSize: 16,
                            color: "#ffffff",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            transition: "transform 0.2s ease, background 0.2s ease"
                          },
                          children: [
                            "Next",
                            (0, x.jsx)("span", { style: { fontSize: 18 }, children: "→" })
                          ]
                        })
                      ]
                    })
                  ]
                }) : step === 2 ? (0, x.jsxs)("div", {
                  style: { display: "flex", flexDirection: "column", gap: 20 },
                  children: [
                    (0, x.jsx)("h3", {
                      style: { fontFamily: F, fontWeight: 700, fontSize: 26, color: "#ffffff", margin: "0 0 4px" },
                      children: "Step 02 — Your Project"
                    }),

                    (0, x.jsxs)("div", {
                      style: { display: "flex", flexDirection: "column", gap: 8 },
                      children: [
                        (0, x.jsxs)("label", {
                          style: { fontFamily: L, fontWeight: 500, fontSize: 13, color: "rgba(255, 255, 255, 0.85)" },
                          children: ["What do you need? ", (0, x.jsx)("span", { style: { color: R }, children: "*" })]
                        }),
                        (0, x.jsx)("div", {
                          style: {
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr",
                            gap: 10
                          },
                          children: services.map(srv => {
                            const isSelected = formData.service === srv;
                            return (0, x.jsx)("button", {
                              type: "button",
                              onClick: () => handleChange("service", srv),
                              style: {
                                background: isSelected ? "rgba(255, 105, 46, 0.18)" : "rgba(255, 255, 255, 0.04)",
                                border: isSelected ? "1.5px solid #ff692e" : "1px solid rgba(255, 255, 255, 0.1)",
                                borderRadius: 12,
                                padding: "12px 14px",
                                fontFamily: L,
                                fontWeight: isSelected ? 600 : 400,
                                fontSize: 13,
                                color: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.8)",
                                cursor: "pointer",
                                textAlign: "center",
                                transition: "all 0.2s ease",
                                transform: isSelected ? "scale(1.02)" : "scale(1)"
                              },
                              children: srv
                            }, srv);
                          })
                        })
                      ]
                    }),

                    (0, x.jsxs)("div", {
                      style: { display: "flex", flexDirection: "column", gap: 6 },
                      children: [
                        (0, x.jsxs)("label", {
                          style: { fontFamily: L, fontWeight: 500, fontSize: 13, color: "rgba(255, 255, 255, 0.85)" },
                          children: ["Tell us briefly about your project ", (0, x.jsx)("span", { style: { color: R }, children: "*" })]
                        }),
                        (0, x.jsx)("textarea", {
                          rows: 3,
                          placeholder: "Briefly describe your goals, features, or vision...",
                          value: formData.description,
                          onChange: (e) => handleChange("description", e.target.value),
                          style: { ...inputStyle(!!errors.description), resize: "vertical" }
                        }),
                        errors.description && (0, x.jsx)("span", {
                          style: { fontFamily: L, fontSize: 12, color: "#ff4405" },
                          children: errors.description
                        })
                      ]
                    }),

                    (0, x.jsxs)("div", {
                      style: { display: "flex", flexDirection: "column", gap: 8 },
                      children: [
                        (0, x.jsxs)("label", {
                          style: { fontFamily: L, fontWeight: 500, fontSize: 13, color: "rgba(255, 255, 255, 0.85)" },
                          children: ["Budget Range (INR ₹) ", (0, x.jsx)("span", { style: { color: R }, children: "*" })]
                        }),
                        (0, x.jsx)("div", {
                          style: {
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr",
                            gap: 10
                          },
                          children: budgets.map(bgt => {
                            const isSelected = formData.budget === bgt;
                            return (0, x.jsx)("button", {
                              type: "button",
                              onClick: () => handleChange("budget", bgt),
                              style: {
                                background: isSelected ? "rgba(255, 105, 46, 0.18)" : "rgba(255, 255, 255, 0.04)",
                                border: isSelected ? "1.5px solid #ff692e" : "1px solid rgba(255, 255, 255, 0.1)",
                                borderRadius: 12,
                                padding: "12px 14px",
                                fontFamily: L,
                                fontWeight: isSelected ? 600 : 400,
                                fontSize: 13,
                                color: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.8)",
                                cursor: "pointer",
                                textAlign: "center",
                                transition: "all 0.2s ease",
                                transform: isSelected ? "scale(1.02)" : "scale(1)"
                              },
                              children: bgt
                            }, bgt);
                          })
                        })
                      ]
                    }),

                    (0, x.jsxs)("div", {
                      style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 },
                      children: [
                        (0, x.jsxs)("button", {
                          type: "button",
                          onClick: handleBack,
                          style: {
                            background: "transparent",
                            borderRadius: 43,
                            padding: "12px 24px",
                            fontFamily: L,
                            fontWeight: 600,
                            fontSize: 15,
                            color: "rgba(255, 255, 255, 0.75)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            transition: "color 0.2s ease, border-color 0.2s ease"
                          },
                          children: [
                            (0, x.jsx)("span", { style: { fontSize: 16 }, children: "←" }),
                            "Back"
                          ]
                        }),
                        (0, x.jsxs)("button", {
                          type: "button",
                          onClick: handleNext,
                          style: {
                            background: R,
                            borderRadius: 43,
                            padding: "14px 32px",
                            fontFamily: L,
                            fontWeight: 600,
                            fontSize: 16,
                            color: "#ffffff",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            transition: "transform 0.2s ease, background 0.2s ease"
                          },
                          children: [
                            "Next",
                            (0, x.jsx)("span", { style: { fontSize: 18 }, children: "→" })
                          ]
                        })
                      ]
                    })
                  ]
                }) : (0, x.jsxs)("div", {
                  style: { display: "flex", flexDirection: "column", gap: 20 },
                  children: [
                    (0, x.jsx)("h3", {
                      style: { fontFamily: F, fontWeight: 700, fontSize: 26, color: "#ffffff", margin: "0 0 4px" },
                      children: "Step 03 — Let's Start"
                    }),

                    (0, x.jsxs)("div", {
                      style: { display: "flex", flexDirection: "column", gap: 8 },
                      children: [
                        (0, x.jsx)("label", {
                          style: { fontFamily: L, fontWeight: 500, fontSize: 13, color: "rgba(255, 255, 255, 0.85)" },
                          children: "Preferred Timeline / Launch Date"
                        }),
                        (0, x.jsx)("div", {
                          style: {
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr",
                            gap: 10
                          },
                          children: timelines.map(tml => {
                            const isSelected = formData.timeline === tml;
                            return (0, x.jsx)("button", {
                              type: "button",
                              onClick: () => handleChange("timeline", tml),
                              style: {
                                background: isSelected ? "rgba(255, 105, 46, 0.18)" : "rgba(255, 255, 255, 0.04)",
                                border: isSelected ? "1.5px solid #ff692e" : "1px solid rgba(255, 255, 255, 0.1)",
                                borderRadius: 12,
                                padding: "12px 14px",
                                fontFamily: L,
                                fontWeight: isSelected ? 600 : 400,
                                fontSize: 13,
                                color: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.8)",
                                cursor: "pointer",
                                textAlign: "center",
                                transition: "all 0.2s ease",
                                transform: isSelected ? "scale(1.02)" : "scale(1)"
                              },
                              children: tml
                            }, tml);
                          })
                        })
                      ]
                    }),

                    (0, x.jsxs)("div", {
                      style: { display: "flex", flexDirection: "column", gap: 6 },
                      children: [
                        (0, x.jsx)("label", {
                          style: { fontFamily: L, fontWeight: 500, fontSize: 13, color: "rgba(255, 255, 255, 0.85)" },
                          children: "Anything else we should know?"
                        }),
                        (0, x.jsx)("input", {
                          type: "text",
                          placeholder: "e.g. Existing brand assets, reference links...",
                          value: formData.notes,
                          onChange: (e) => handleChange("notes", e.target.value),
                          style: inputStyle(false)
                        })
                      ]
                    }),

                    (0, x.jsxs)("div", {
                      style: {
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: 14,
                        padding: "16px 20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 8
                      },
                      children: [
                        (0, x.jsx)("p", {
                          style: { fontFamily: F, fontWeight: 700, fontSize: 18, color: R, margin: 0 },
                          children: "Project Summary"
                        }),
                        (0, x.jsxs)("div", {
                          style: { display: "flex", flexWrap: "wrap", gap: "12px 20px", fontSize: 13, color: "rgba(255, 255, 255, 0.8)", fontFamily: L },
                          children: [
                            (0, x.jsxs)("span", { children: [(0, x.jsx)("strong", { style: { color: "#fff" }, children: "Contact: " }), formData.fullName, " (", formData.email, ")"] }),
                            (0, x.jsxs)("span", { children: [(0, x.jsx)("strong", { style: { color: "#fff" }, children: "Phone: " }), formData.phone] }),
                            formData.brandName && (0, x.jsxs)("span", { children: [(0, x.jsx)("strong", { style: { color: "#fff" }, children: "Brand: " }), formData.brandName] }),
                            (0, x.jsxs)("span", { children: [(0, x.jsx)("strong", { style: { color: "#fff" }, children: "Need: " }), formData.service] }),
                            (0, x.jsxs)("span", { children: [(0, x.jsx)("strong", { style: { color: "#fff" }, children: "Budget: " }), formData.budget] })
                          ]
                        })
                      ]
                    }),

                    (0, x.jsxs)("div", {
                      style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 },
                      children: [
                        (0, x.jsxs)("button", {
                          type: "button",
                          onClick: handleBack,
                          style: {
                            background: "transparent",
                            borderRadius: 43,
                            padding: "12px 24px",
                            fontFamily: L,
                            fontWeight: 600,
                            fontSize: 15,
                            color: "rgba(255, 255, 255, 0.75)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            transition: "color 0.2s ease, border-color 0.2s ease"
                          },
                          children: [
                            (0, x.jsx)("span", { style: { fontSize: 16 }, children: "←" }),
                            "Back"
                          ]
                        }),
                        (0, x.jsxs)("button", {
                          type: "button",
                          onClick: handleSubmit,
                          disabled: isSubmitting,
                          style: {
                            background: R,
                            borderRadius: 43,
                            padding: "14px 36px",
                            fontFamily: L,
                            fontWeight: 600,
                            fontSize: 16,
                            color: "#ffffff",
                            border: "none",
                            cursor: isSubmitting ? "wait" : "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            opacity: isSubmitting ? 0.7 : 1,
                            transition: "transform 0.2s ease, background 0.2s ease"
                          },
                          children: [
                            isSubmitting ? "Sending..." : "Finish",
                            (0, x.jsx)("span", { style: { fontSize: 18 }, children: "→" })
                          ]
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          })
        })
      ]
    })
  });
}


/* ==========================================================================
   SECTION: CATEGORIES CAROUSEL (Fluid 3D Work Categories)
   ========================================================================== */
function ke() {
  let e = W();
  let [openIdx, setOpenIdx] = (0, o.useState)(null);

  return (0, x.jsx)('section', {
    id: 'faq',
    'data-section': 'faq',
    style: { background: V, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: e ? '64px 16px' : '96px 32px' },
    children: (0, x.jsxs)('div', {
      style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32, width: '100%', maxWidth: 860 },
      children: [
        (0, x.jsx)('h2', {
          style: { fontFamily: F, fontWeight: 700, fontSize: e ? 36 : 'clamp(36px, 4vw, 56px)', lineHeight: 1.1, color: '#fff', margin: '0 0 16px', textAlign: 'center' },
          children: 'Frequently asked questions'
        }),
        (0, x.jsx)('div', {
          style: { display: 'flex', flexDirection: 'column', gap: 16, width: '100%', marginTop: 16 },
          children: Ae.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (0, x.jsxs)('div', {
              onClick: () => setOpenIdx(isOpen ? null : idx),
              style: { background: '#181d27', borderRadius: 16, padding: '24px 28px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.3s ease' },
              children: [
                (0, x.jsxs)('div', {
                  style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 },
                  children: [
                    (0, x.jsx)('h3', { style: { fontFamily: L, fontWeight: 600, fontSize: 18, color: '#fff', margin: 0 }, children: item.q }),
                    (0, x.jsx)('span', { style: { fontSize: 22, color: R, fontWeight: 300, transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }, children: '+' })
                  ]
                }),
                isOpen && (0, x.jsx)('p', { style: { fontFamily: L, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: '24px', margin: '16px 0 0' }, children: item.a })
              ]
            }, idx);
          })
        })
      ]
    })
  });
}

function je({tickets:e}){let[t,n]=(0,o.useState)(0),[r,i]=(0,o.useState)(0),[a,s]=(0,o.useState)(!1),[c,l]=(0,o.useState)(null),u=(0,o.useRef)(0),d=(0,o.useRef)(0),f=(0,o.useRef)(null),p=e.length,m=()=>{l('left'),setTimeout(()=>{n(e=>(e+1)%p),l(null),i(0)},300)},h=()=>{l('right'),setTimeout(()=>{n(e=>(e-1+p)%p),l(null),i(0)},300)},g=e=>{u.current=e.touches[0].clientX,d.current=e.touches[0].clientY,f.current=null,s(!0)},_=e=>{if(!a)return;let t=e.touches[0].clientX-u.current,n=e.touches[0].clientY-d.current;f.current||(f.current=Math.abs(t)>Math.abs(n)?'h':'v'),f.current==='h'&&(e.preventDefault(),i(t))},v=()=>{if(s(!1),f.current==='h'){if(r<-80){m();return}if(r>80){h();return}}i(0),f.current=null},y=[-3,2,-1.5],b=(t+1)%p;return(0,x.jsxs)('div',{style:{padding:'20px 0 16px'},children:[(0,x.jsxs)('div',{style:{position:'relative',width:'100%',maxWidth:300,margin:'0 auto',height:360,touchAction:'pan-y'},onTouchStart:g,onTouchMove:_,onTouchEnd:v,children:[(0,x.jsx)('div',{style:{position:'absolute',inset:0,background:'#f2f3f5',borderRadius:20,padding:10,transform:`rotate(${y[b%y.length]}deg) scale(0.95)`,opacity:.6},children:(0,x.jsx)('div',{style:{background:V,borderRadius:14,padding:'28px 22px',height:'100%',boxSizing:'border-box',display:'flex',flexDirection:'column',gap:12},children:(0,x.jsx)('p',{style:{fontFamily:F,fontWeight:700,fontSize:18,lineHeight:1.2,color:'#fff',margin:0},children:e[b].title})})}),(0,x.jsx)('div',{style:{position:'absolute',inset:0,background:'#f2f3f5',borderRadius:20,padding:10,transform:c?`translateX(${c==='left'?'-120%':'120%'}) rotate(${c==='left'?-15:15}deg)`:`translateX(${r}px) rotate(${r*.05}deg)`,transition:a?'none':'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',zIndex:2},children:(0,x.jsxs)('div',{style:{background:V,borderRadius:14,padding:'28px 22px',height:'100%',boxSizing:'border-box',display:'flex',flexDirection:'column',gap:12},children:[(0,x.jsx)('p',{style:{fontFamily:F,fontWeight:700,fontSize:18,lineHeight:1.2,color:'#fff',margin:0},children:e[t].title}),(0,x.jsx)('p',{style:{fontFamily:L,fontWeight:400,fontSize:13,lineHeight:'20px',color:'rgba(255,255,255,0.7)',margin:0},children:e[t].request})]})})]}),(0,x.jsxs)('div',{style:{display:'flex',alignItems:'center',justifyContent:'center',gap:20,marginTop:20},children:[(0,x.jsx)('button',{"aria-label":'Previous',onClick:h,style:{width:40,height:40,borderRadius:'50%',border:`1px solid ${U}`,background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'},children:(0,x.jsxs)('svg',{width:'16',height:'16',viewBox:'0 0 24 24',fill:'none',stroke:V,strokeWidth:'2.5',strokeLinecap:'round',strokeLinejoin:'round',children:[(0,x.jsx)('path',{d:'M19 12H5'}),(0,x.jsx)('polyline',{points:'12 19 5 12 12 5'})]})}),(0,x.jsx)('div',{style:{display:'flex',gap:8},children:e.map((e,n)=>(0,x.jsx)('div',{style:{width:n===t?20:8,height:8,borderRadius:4,background:n===t?R:'#d5d7da',transition:'all 0.3s ease'}},n))}),(0,x.jsx)('button',{"aria-label":'Next',onClick:m,style:{width:40,height:40,borderRadius:'50%',border:`1px solid ${U}`,background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'},children:(0,x.jsxs)('svg',{width:'16',height:'16',viewBox:'0 0 24 24',fill:'none',stroke:V,strokeWidth:'2.5',strokeLinecap:'round',strokeLinejoin:'round',children:[(0,x.jsx)('path',{d:'M5 12h14'}),(0,x.jsx)('polyline',{points:'12 5 19 12 12 19'})]})})]}),(0,x.jsx)('p',{style:{fontFamily:L,fontWeight:500,fontSize:12,color:H,textAlign:'center',margin:'12px 0 0',opacity:.6},children:'Swipe to see more'})]})}
function Me({t:e,fromRect:t,onClose:n,skipEnter:r}){let[i,a]=(0,o.useState)(r?`fadein`:`enter`),[s,c]=(0,o.useState)(0),l=(0,o.useRef)(null),u=(0,o.useRef)(null),[f,p]=(0,o.useState)(!1),m=W(),h=e.useCase,g=m?0:32;(0,o.useEffect)(()=>{d(`use_case_read`,h.collab),document.body.style.overflow=`hidden`;let e=document.querySelector(`[data-main-nav]`);e&&(e.style.visibility=`hidden`,e.style.pointerEvents=`none`),requestAnimationFrame(()=>{requestAnimationFrame(()=>a(`open`))});let t=e=>{e.key===`Escape`&&_()};return window.addEventListener(`keydown`,t),()=>{document.body.style.overflow=``,e&&(e.style.visibility=``,e.style.pointerEvents=``),window.removeEventListener(`keydown`,t)}},[]),(0,o.useEffect)(()=>{let e=u.current,t=l.current;if(!e||!t)return;let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(p(!0),n.disconnect())},{root:t,threshold:.2});return n.observe(e),()=>n.disconnect()},[i]),(0,o.useEffect)(()=>{if(i!==`open`&&i!==`fadein`)return;let e=l.current;if(!e)return;let t=e.querySelectorAll(`[data-parallax-gallery]`),n=e.querySelectorAll(`[data-parallax-card]`);if(t.length===0&&n.length===0)return;let r=()=>{let e=window.innerHeight;t.forEach(t=>{let n=t.parentElement;if(!n)return;let r=n.getBoundingClientRect(),i=(e-r.top)/(e+r.height),a=(Math.max(0,Math.min(1,i))-.5)*-40;t.style.transform=`scale(1.08) translateY(${a}px)`}),n.forEach(t=>{let n=t.parentElement;if(!n)return;let r=n.getBoundingClientRect(),i=(e-r.top)/(e+r.height),a=(Math.max(0,Math.min(1,i))-.5)*80,o=t.getAttribute(`data-card-rotation`)||`0`;t.style.transform=`translateY(${a}px) rotate(${o}deg)`})};return e.addEventListener(`scroll`,r,{passive:!0}),r(),()=>e.removeEventListener(`scroll`,r)},[i]);let _=()=>{a(`exit`),setTimeout(n,400)},v=h.sections.map(e=>e.heading),y=e=>{l.current?.querySelector(`#uc-${e}`)?.scrollIntoView({behavior:`smooth`})},b=t??new DOMRect(window.innerWidth/2-140,window.innerHeight/2-185,280,370),S=i===`open`||i===`fadein`,C=i===`exit`,w=i===`fadein`,T=S||C?g:b.top,E=S||C?g:b.left,D=S||C?window.innerWidth-g*2:b.width,O=S||C?window.innerHeight-g*2:b.height;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`div`,{onClick:_,style:{position:`fixed`,inset:0,zIndex:10001,background:`rgba(10, 13, 18, 0.5)`,backdropFilter:S?`blur(12px)`:`blur(0px)`,WebkitBackdropFilter:S?`blur(12px)`:`blur(0px)`,opacity:C?0:S?1:0,transition:C?`opacity 0.35s ease`:`opacity 0.4s ease, backdrop-filter 0.5s ease`}}),(0,x.jsxs)(`div`,{style:{position:`fixed`,zIndex:10002,top:T,left:E,width:D,height:O,borderRadius:m?0:24,overflow:`hidden`,background:`#f2f3f5`,isolation:`isolate`,boxShadow:`0 32px 80px rgba(0,0,0,0.25)`,opacity:C?0:1,transform:C?`scale(0.97)`:`scale(1)`,transition:C?`all 0.35s cubic-bezier(0.4, 0, 0.6, 1)`:`opacity 0.4s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)`},children:[(0,x.jsxs)(`div`,{ref:l,"data-lenis-prevent":!0,onScroll:()=>{l.current&&c(l.current.scrollTop)},style:{width:`100%`,height:`100%`,overflowY:S?`auto`:`hidden`,overflowX:`hidden`},children:[(0,x.jsxs)(`div`,{style:{position:`relative`,width:`100%`,height:`50vh`,minHeight:320,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,overflow:`hidden`},children:[(0,x.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{position:`absolute`,inset:`-20% 0`,width:`100%`,height:`140%`,objectFit:`cover`,transform:`translateY(${s*.3}px)`,willChange:`transform`},children:(0,x.jsx)(`source`,{src:e.video})}),(0,x.jsx)(`div`,{style:{position:`absolute`,inset:`-20% 0`,width:`100%`,height:`140%`,background:`rgba(10,13,18,0.85)`,transform:`translateY(${s*.3}px)`,willChange:`transform`}}),(0,x.jsx)(`div`,{style:{position:`absolute`,inset:0,zIndex:1,display:`flex`,flexDirection:`column`,justifyContent:`center`,padding:m?`48px 20px`:`64px 48px`,transform:`translateY(${s*-.15}px)`,willChange:`transform`},children:(0,x.jsx)(`h1`,{style:{fontFamily:F,fontWeight:700,fontSize:m?28:`clamp(28px, 4vw, 56px)`,lineHeight:1.05,letterSpacing:`-0.02em`,color:`#fff`,margin:0,textAlign:`left`,maxWidth:700},children:h.title})})]}),(0,x.jsxs)(`div`,{style:{padding:m?`24px 20px 0`:`32px 32px 0`,opacity:S&&!w?1:0,transform:S&&!w?`translateY(0)`:`translateY(24px)`,transition:`opacity 0.5s ease 0.5s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s`},children:[(0,x.jsxs)(`div`,{style:{maxWidth:1100,margin:`0 auto`,padding:m?`24px 0 48px`:`32px 0 80px`,display:`flex`,gap:64},children:[!m&&(0,x.jsxs)(`aside`,{style:{position:`sticky`,top:32,alignSelf:`flex-start`,width:240,flexShrink:0,display:`flex`,flexDirection:`column`,gap:0},children:[(0,x.jsxs)(`div`,{style:{borderBottom:`1px solid ${U}`,paddingBottom:24,marginBottom:24},children:[(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:700,fontSize:14,color:R,margin:`0 0 16px`},children:`Table of contents`}),(0,x.jsx)(`div`,{"data-cursor-no-stick":!0,style:{display:`flex`,flexDirection:`column`,gap:8},children:v.map((e,t)=>(0,x.jsx)(`a`,{href:`#uc-${t}`,style:{fontFamily:L,fontWeight:500,fontSize:15,color:V,textDecoration:`none`,lineHeight:`24px`,transition:`color 0.2s ease`},onMouseEnter:e=>{e.currentTarget.style.color=R},onMouseLeave:e=>{e.currentTarget.style.color=V},onClick:e=>{e.preventDefault(),y(t)},children:e},t))})]}),(0,x.jsxs)(`div`,{style:{borderBottom:`1px solid ${U}`,paddingBottom:24,marginBottom:24},children:[(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:700,fontSize:14,color:R,margin:`0 0 16px`},children:`Table of contents`}),(0,x.jsx)(`div`,{"data-cursor-no-stick":!0,style:{display:`flex`,flexDirection:`column`,gap:8},children:v.map((e,t)=>(0,x.jsx)(`a`,{href:`#uc-${t}`,style:{fontFamily:L,fontWeight:500,fontSize:15,color:V,textDecoration:`none`,lineHeight:`24px`,transition:`color 0.2s ease`},onMouseEnter:e=>{e.currentTarget.style.color=R},onMouseLeave:e=>{e.currentTarget.style.color=V},onClick:e=>{e.preventDefault(),y(t)},children:e},t))})]}),(0,x.jsxs)(`div`,{style:{borderBottom:`1px solid ${U}`,paddingBottom:24,marginBottom:24},children:[(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:700,fontSize:14,color:R,margin:`0 0 16px`},children:`Designers`}),(0,x.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:14},children:h.designers.map((e,t)=>(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,x.jsx)(`div`,{style:{width:40,height:40,borderRadius:`50%`,background:`linear-gradient(135deg, #e8d5c4, #c4a882)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:14,fontWeight:700,color:`#fff`,overflow:`hidden`},children:(0,x.jsx)(`img`,{src:e.avatar||ie,alt:``,style:{width:`100%`,height:`100%`,objectFit:`cover`}})}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:600,fontSize:14,color:V,margin:0},children:e.name}),(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:400,fontSize:12,color:H,margin:`1px 0 0`},children:e.role})]})]},t))})]}),(0,x.jsxs)(`div`,{style:{marginBottom:24},children:[(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:600,fontSize:14,color:R,margin:`0 0 12px`},children:`Do you need design?`}),(0,x.jsx)(`a`,{href:`#contact-form`,onClick:(e)=>{e.preventDefault();_();let el=document.getElementById("contact-form");if(el){setTimeout(()=>{if(window.__lenis){window.__lenis.scrollTo(el,{offset:-90})}else{window.scrollTo({top:el.getBoundingClientRect().top+window.pageYOffset-90,behavior:"smooth"})}},400)}},style:{background:R,borderRadius:12,padding:`14px 0`,fontFamily:L,fontWeight:600,fontSize:14,color:`#fff`,textDecoration:`none`,textAlign:`center`,display:`block`,cursor:`pointer`},children:`Call Us`})]})]}),(0,x.jsxs)(`article`,{style:{flex:1,minWidth:0},children:[h.sections.map((t,n)=>(0,x.jsxs)(o.Fragment,{children:[(0,x.jsxs)(`div`,{id:`uc-${n}`,style:{marginBottom:48},children:[(0,x.jsx)(`h2`,{style:{fontFamily:F,fontWeight:700,fontSize:28,lineHeight:1.2,letterSpacing:`-0.3px`,color:V,margin:`0 0 16px`},children:t.heading}),(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:400,fontSize:16,lineHeight:`28px`,color:H,margin:0},children:t.body})]}),n===2&&h.gallery&&h.gallery.length>0&&(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:40,marginBottom:48},children:[h.gallery.map((e,t)=>{let n=h.tickets?.[t];return(0,x.jsxs)(`div`,{style:{position:`relative`},children:[(0,x.jsx)(`div`,{style:{borderRadius:14,overflow:`hidden`,background:`#f2f3f5`},children:(0,x.jsx)(`img`,{src:e.src,alt:e.caption,loading:`lazy`,"data-parallax-gallery":!0,style:{width:`100%`,height:`auto`,display:`block`,willChange:`transform`,transform:`scale(1.08)`}})}),n&&!m&&(()=>{let e=t%2==0,r=[3,-2.5,2],i=r[t%r.length];return(0,x.jsx)(`div`,{"data-parallax-card":!0,"data-card-rotation":i,style:{position:`absolute`,bottom:-32,...e?{right:-20}:{left:-20},width:280,background:`#f2f3f5`,borderRadius:20,padding:8,willChange:`transform`,transform:`rotate(${i}deg)`,zIndex:2,boxShadow:`0 20px 60px rgba(0,0,0,0.18), 0 40px 100px rgba(0,0,0,0.12)`},children:(0,x.jsxs)(`div`,{style:{background:V,borderRadius:14,padding:`28px 22px`,display:`flex`,flexDirection:`column`,gap:12,minHeight:260},children:[(0,x.jsx)(`p`,{style:{fontFamily:F,fontWeight:700,fontSize:18,lineHeight:1.2,color:`#fff`,margin:0},children:n.title}),(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:400,fontSize:13,lineHeight:`20px`,color:`rgba(255,255,255,0.7)`,margin:0},children:n.request})]})})})()]},t)}),m&&h.tickets&&h.tickets.length>0&&(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`p`,{style:{fontFamily:L,fontWeight:500,fontSize:16,color:V,margin:`0 0 20px`,lineHeight:`24px`},children:[`More than `,(0,x.jsxs)(`strong`,{style:{fontWeight:700},children:[e.tasks,`+ tickets`]}),` delivered, here are a few examples.`]}),(0,x.jsx)(je,{tickets:h.tickets})]})]})]},n)),e.quote&&(0,x.jsxs)(`blockquote`,{style:{borderLeft:`3px solid ${R}`,padding:`16px 0 16px 24px`,margin:`32px 0`},children:[(0,x.jsxs)(`p`,{style:{fontFamily:F,fontStyle:`italic`,fontWeight:500,fontSize:20,lineHeight:1.5,color:V,margin:0},children:[`“`,e.quote,`”`]}),(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:600,fontSize:14,color:V,margin:`12px 0 0`},children:e.name}),(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:400,fontSize:13,color:H,margin:`2px 0 0`},children:e.role})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,gap:24,padding:`32px 0`,borderTop:`1px solid ${U}`,borderBottom:`1px solid ${U}`,margin:`32px 0`},children:[[{value:`${e.months} months`,label:`Collaboration`},{value:`${e.tasks} tasks`,label:`Delivered`}].map((e,t)=>(0,x.jsxs)(`div`,{style:{flex:1},children:[(0,x.jsx)(`p`,{style:{fontFamily:I,fontWeight:900,fontSize:24,color:V,margin:0},children:e.value}),(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:400,fontSize:13,color:H,margin:`4px 0 0`},children:e.label})]},t)),(0,x.jsxs)(`div`,{style:{flex:2},children:[(0,x.jsx)(`p`,{style:{fontFamily:I,fontWeight:900,fontSize:24,color:R,margin:0},children:`Impact`}),(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:400,fontSize:13,color:H,margin:`4px 0 0`},children:e.impact})]})]})]})]}),m&&(0,x.jsxs)(`div`,{style:{padding:`0 0 32px`,borderTop:`1px solid ${U}`,marginTop:8,paddingTop:24},children:[(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:700,fontSize:14,color:R,margin:`0 0 16px`},children:`Designers`}),(0,x.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:14},children:h.designers.map((e,t)=>(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,x.jsx)(`div`,{style:{width:40,height:40,borderRadius:`50%`,background:`linear-gradient(135deg, #e8d5c4, #c4a882)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:14,fontWeight:700,color:`#fff`,overflow:`hidden`},children:(0,x.jsx)(`img`,{src:e.avatar||ie,alt:``,style:{width:`100%`,height:`100%`,objectFit:`cover`}})}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:600,fontSize:14,color:V,margin:0},children:e.name}),(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:400,fontSize:12,color:H,margin:`1px 0 0`},children:e.role})]})]},t))})]})]}),(0,x.jsx)(`div`,{ref:u,style:{padding:`32px`},children:(0,x.jsxs)(`div`,{style:{background:`#fff`,borderRadius:24,padding:`64px 32px 0`,display:`flex`,flexDirection:`column`,alignItems:`center`,textAlign:`center`,overflow:`hidden`},children:[(0,x.jsx)(`div`,{style:{overflow:`hidden`,paddingBottom:`0.15em`,marginBottom:`-0.15em`},children:(0,x.jsx)(`p`,{style:{fontFamily:I,fontWeight:700,fontSize:13,color:R,textTransform:`uppercase`,letterSpacing:`0.1em`,margin:`0 0 16px`,transform:f?`translateY(0)`:`translateY(110%)`,transition:`transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)`,transitionDelay:`0ms`},children:`Ready to start?`})}),(0,x.jsx)(`div`,{style:{overflow:`hidden`,paddingBottom:`0.15em`,marginBottom:`-0.15em`},children:(0,x.jsxs)(`h2`,{style:{fontFamily:F,fontWeight:700,fontSize:`clamp(32px, 5vw, 56px)`,lineHeight:1.05,letterSpacing:`-0.02em`,color:V,margin:`0 0 24px`,maxWidth:600,transform:f?`translateY(0)`:`translateY(110%)`,transition:`transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)`,transitionDelay:`200ms`},children:[`Get your first designs delivered on `,(()=>{let e=new Date,t=0;for(;t<3;)e.setDate(e.getDate()+1),e.getDay()!==0&&e.getDay()!==6&&t++;return e.toLocaleDateString(`en-US`,{month:`long`,day:`numeric`})})(),`.`]})}),(0,x.jsx)(`div`,{style:{overflow:`hidden`,paddingBottom:`0.15em`,marginBottom:`-0.15em`},children:(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:400,fontSize:17,color:H,margin:`0 0 36px`,maxWidth:440,lineHeight:`26px`,transform:f?`translateY(0)`:`translateY(110%)`,transition:`transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)`,transitionDelay:`400ms`},children:`No hiring. No onboarding. Just senior design, delivered fast.`})}),(0,x.jsx)(`div`,{style:{overflow:`hidden`,paddingBottom:`0.15em`,marginBottom:`-0.15em`},children:(0,x.jsx)(`a`,{href:`#contact-form`,onClick:(e)=>{e.preventDefault();_();let el=document.getElementById("contact-form");if(el){setTimeout(()=>{if(window.__lenis){window.__lenis.scrollTo(el,{offset:-90})}else{window.scrollTo({top:el.getBoundingClientRect().top+window.pageYOffset-90,behavior:"smooth"})}},400)}},style:{background:R,borderRadius:43,padding:`18px 40px`,fontFamily:L,fontWeight:600,fontSize:17,color:`#fff`,textDecoration:`none`,display:`inline-block`,marginBottom:48,transform:f?`translateY(0)`:`translateY(110%)`,transition:`transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)`,transitionDelay:`600ms`,cursor:`pointer`},children:`Call Us`})})]})})]}),(0,x.jsx)(`button`,{"aria-label":`Close`,onClick:_,style:{position:`absolute`,top:20,right:20,zIndex:3,width:44,height:44,borderRadius:`50%`,background:`rgba(255,255,255,0.85)`,backdropFilter:`blur(12px)`,WebkitBackdropFilter:`blur(12px)`,border:`1px solid rgba(255,255,255,0.3)`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 2px 12px rgba(0,0,0,0.1)`,opacity:S&&!w?1:0,transform:S&&!w?`scale(1)`:`scale(0.8)`,transition:`opacity 0.4s ease 0.7s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.7s`},children:(0,x.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:V,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,x.jsx)(`path`,{d:`M18 6L6 18`}),(0,x.jsx)(`path`,{d:`M6 6l12 12`})]})})]})]})}var Ne=[{x:18,y:22,rot:-12,from:`left`,at:0},{x:62,y:20,rot:10,from:`right`,at:.3},{x:38,y:42,rot:2,from:`left`,at:.6}];function Pe({t:e,layout:t,progress:n,index:r,onOpenUseCase:i}){let[a,s]=(0,o.useState)(!1),c=(0,o.useRef)(null),l=Math.max(0,Math.min(1,(n-t.at)/.18)),u=1-(1-l)**3,d=t.x+(1-u)*(t.from===`left`?-15:15),f=120+(t.y-120)*u,p=25+(t.rot-25)*u,m=Math.min(1,l*3);return(0,x.jsxs)(`div`,{ref:c,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onClick:()=>{let e=c.current?.getBoundingClientRect();i(e??new DOMRect(0,0,280,370))},style:{position:`absolute`,left:`${d}%`,top:`${f}%`,width:280,height:370,borderRadius:16,boxShadow:`0 16px 48px rgba(0,0,0,0.4)`,transform:`rotate(${a?0:p}deg) scale(${a?1.06:1})`,opacity:m,zIndex:a?20:10+r,transition:a?`transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), z-index 0s`:`transform 0.4s ease`,cursor:`pointer`},children:[(0,x.jsxs)(`div`,{style:{width:`100%`,height:`100%`,borderRadius:16,overflow:`hidden`,background:`#1c2230`,position:`relative`},children:[(0,x.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{width:`100%`,height:`100%`,objectFit:`cover`},children:(0,x.jsx)(`source`,{src:e.video})}),(0,x.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`rgba(10,13,18,0.9)`,display:`flex`,flexDirection:`column`,justifyContent:`space-between`,padding:`24px 24px 16px`,opacity:a?1:0,transition:`opacity 0.3s ease`,pointerEvents:`none`},children:(0,x.jsxs)(`div`,{children:[e.logo&&(0,x.jsx)(`img`,{src:e.logo,alt:``,style:{height:e.logoHeight||24,width:`auto`,marginBottom:12,display:`block`,objectFit:`contain`}}),(0,x.jsx)(`p`,{style:{fontFamily:F,fontWeight:700,fontSize:14,color:`#fff`,lineHeight:`21px`,margin:0},children:e.useCase.title})]})}),(0,x.jsxs)(`div`,{style:{position:`absolute`,bottom:16,left:16,right:16,background:R,borderRadius:12,padding:`12px 0`,fontFamily:L,fontWeight:600,fontSize:13,color:`#fff`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:6,pointerEvents:`none`},children:[`Read use case`,(0,x.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#fff`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,x.jsx)(`path`,{d:`M5 12h14`}),(0,x.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})]})]}),[{label:`Months`,value:`${e.months}`,rot:-5,delay:0},{label:`Tasks delivered`,value:`${e.tasks}`,rot:3,delay:1},{label:`Impact`,value:e.impact,rot:-2,delay:2}].map((e,t)=>(0,x.jsx)(`div`,{style:{position:`absolute`,right:-180,top:t*90+20,width:160,background:`#fff`,borderRadius:14,padding:`14px 16px`,boxShadow:`0 12px 32px rgba(0,0,0,0.35)`,opacity:a?1:0,transform:a?`translateY(0) rotate(${e.rot}deg) scale(1)`:`translateY(${40+t*20}px) rotate(0deg) scale(0.85)`,transition:`opacity 0.3s ease ${t*.07}s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${t*.07}s`,pointerEvents:`none`},children:e.label===`Impact`?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`div`,{style:{width:8,height:8,borderRadius:`50%`,background:R,marginBottom:8}}),(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:600,fontSize:12,color:V,margin:0,lineHeight:1.4},children:e.value})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`p`,{style:{fontFamily:I,fontWeight:900,fontSize:26,color:V,margin:0,lineHeight:1},children:e.value}),(0,x.jsx)(`p`,{style:{fontFamily:L,fontWeight:500,fontSize:11,color:H,margin:`4px 0 0`,textTransform:`uppercase`,letterSpacing:`0.05em`},children:e.label})]})},t))]})}
/* ==========================================================================
   SECTION: HOW IT WORKS (5-Step Interactive Pinned Process)
   ========================================================================== */
function Fe() {
  let isMobile = W();
  return (0, x.jsxs)('section', {
    id: 'categories',
    'data-section': 'clientstories',
    style: {
      position: 'relative',
      width: '100%',
      background: V,
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    children: [
      /* Section Header with generous clearance below navbar */
      (0, x.jsxs)('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
          paddingTop: isMobile ? 80 : 120,
          paddingBottom: 24,
          maxWidth: 768,
          margin: '0 auto',
          textAlign: 'center',
          boxSizing: 'border-box',
          paddingLeft: 20,
          paddingRight: 20
        },
        children: [
          (0, x.jsx)('span', {
            style: {
              fontFamily: I,
              fontWeight: 700,
              fontSize: 13,
              color: R,
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            },
            children: 'Categories'
          }),
          (0, x.jsx)('h2', {
            style: {
              fontFamily: F,
              fontWeight: 700,
              fontSize: isMobile ? 30 : 40,
              lineHeight: isMobile ? '38px' : '48px',
              letterSpacing: '-0.72px',
              color: '#ffffff',
              margin: 0
            },
            children: 'Tailored for every industry.'
          }),
          (0, x.jsx)('p', {
            style: {
              fontFamily: L,
              fontWeight: 400,
              fontSize: isMobile ? 16 : 18,
              color: 'rgba(255, 255, 255, 0.65)',
              lineHeight: '28px',
              margin: 0
            },
            children: 'Explore our specialized design categories and digital experiences.'
          })
        ]
      }),

      /* Fluid Carousel Iframe with expanded breathing room */
      (0, x.jsx)('div', {
        style: {
          width: '100%',
          height: isMobile ? '680px' : '820px',
          position: 'relative',
          background: 'transparent',
          paddingBottom: isMobile ? 48 : 72
        },
        children: (0, x.jsx)('iframe', {
          src: '/assets/category-carousel/index.html',
          title: 'Category Section Fluid Carousel',
          scrolling: 'no',
          'data-interactive': 'true',
          style: {
            width: '100%',
            height: '100%',
            border: 'none',
            background: 'transparent',
            display: 'block'
          }
        })
      })
    ]
  });
}


/* ==========================================================================
   PAGE: ALL WORKS 3D SPIRAL CAROUSEL
   ========================================================================== */
function J({ onBack, onBookCall, onNavigateSection }) {
  let isMobile = W();
  return (0, x.jsxs)('div', {
    style: { position: 'fixed', inset: 0, zIndex: 99999, background: '#0d0d0d', display: 'flex', flexDirection: 'column' },
    children: [
      (0, x.jsx)(de, {
        currentView: 'academy',
        aboveOverlay: !0,
        externalMounted: !0,
        onStudio: onBack,
        onAcademy: () => {},
        onBookCall: onBookCall || onBack,
        onNavigateSection: onNavigateSection || onBack
      }),
      (0, x.jsx)('iframe', {
        src: isMobile ? '/assets/all-works-mobile-carousel/index.html' : '/assets/all-works-carousel/index.html',
        title: isMobile ? 'All Works Fluid Carousel' : 'All Works 3D Spiral Carousel',
        style: { width: '100%', height: '100%', border: 'none', background: '#0d0d0d', display: 'block' }
      })
    ]
  });
}









/* ==========================================================================
   COMPONENT: INTERACTIVE WATERMARK EMAIL COPIER
   ========================================================================== */
function Re({ isMobile: e }) {
  let [t, n] = (0, o.useState)(!1);
  let [r, i] = (0, o.useState)(!1);
  let [a, s] = (0, o.useState)({ x: 0, y: 0 });
  let c = (0, o.useRef)(null);

  let l = () => {
    try {
      navigator.clipboard.writeText('hi@interkace.studio');
    } catch(err){}
    n(!0);
    setTimeout(() => n(!1), 2000);
  };

  let u = (e) => {
    let t = c.current?.getBoundingClientRect();
    t && s({ x: e.clientX - t.left, y: e.clientY - t.top });
  };

  return e ? (0, x.jsxs)('div', {
    onClick: l,
    style: { width: '100%', paddingTop: 24, paddingLeft: 16, paddingRight: 16, boxSizing: 'border-box', position: 'relative', cursor: 'pointer' },
    children: [
      (0, x.jsx)('svg', {
        viewBox: '0 0 900 85',
        preserveAspectRatio: 'xMidYMid meet',
        style: { width: '100%', height: 'auto', display: 'block' },
        children: (0, x.jsx)('text', {
          x: '450',
          y: '70',
          textAnchor: 'middle',
          style: {
            fontFamily: F,
            fontWeight: 800,
            fontSize: 76,
            letterSpacing: '-0.04em',
            fill: t ? R : 'rgba(0,0,0,0.06)',
            transition: 'fill 0.3s ease'
          },
          children: 'hi@interkace.studio'
        })
      }),
      (0, x.jsxs)('div', {
        style: {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: R,
          borderRadius: 100,
          padding: '8px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          opacity: t ? 1 : 0,
          transition: 'opacity 0.25s ease',
          pointerEvents: 'none'
        },
        children: [
          (0, x.jsx)('svg', {
            width: '14',
            height: '14',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: '#fff',
            strokeWidth: '2.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            children: (0, x.jsx)('polyline', { points: '20 6 9 17 4 12' })
          }),
          (0, x.jsx)('span', {
            style: { fontFamily: L, fontWeight: 600, fontSize: 13, color: '#fff', whiteSpace: 'nowrap' },
            children: 'Email copied'
          })
        ]
      })
    ]
  }) : (0, x.jsxs)(x.Fragment, {
    children: [
      (0, x.jsx)('style', {
        children: `
          @keyframes copyTooltipIn {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          }
        `
      }),
      (0, x.jsxs)('div', {
        ref: c,
        'data-cursor-no-stick': !0,
        'data-cursor-hide': !0,
        onClick: l,
        onMouseEnter: () => i(!0),
        onMouseLeave: () => { i(!1); n(!1); },
        onMouseMove: u,
        style: { width: '100%', paddingTop: 40, paddingLeft: 40, paddingRight: 40, boxSizing: 'border-box', cursor: 'pointer', position: 'relative' },
        children: [
          (0, x.jsx)('svg', {
            viewBox: '0 0 900 85',
            preserveAspectRatio: 'xMidYMid meet',
            style: { width: '100%', height: 'auto', display: 'block' },
            children: (0, x.jsx)('text', {
              x: '450',
              y: '70',
              textAnchor: 'middle',
              style: {
                fontFamily: F,
                fontWeight: 800,
                fontSize: 80,
                letterSpacing: '-0.04em',
                fill: t ? R : 'rgba(0,0,0,0.06)',
                transition: 'fill 0.3s ease'
              },
              children: 'hi@interkace.studio'
            })
          }),
          r && (() => {
            let e = (c.current?.offsetWidth ?? 1) / 2;
            let rot = ((a.x - e) / e) * 12;
            return (0, x.jsxs)('div', {
              style: {
                position: 'absolute',
                left: a.x,
                top: a.y,
                transform: `translate(-50%, -50%) rotate(${rot}deg)`,
                background: t ? R : V,
                borderRadius: 100,
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                pointerEvents: 'none',
                animation: 'copyTooltipIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                transition: 'background 0.2s ease',
                zIndex: 100
              },
              children: [
                (0, x.jsx)('svg', {
                  width: '16',
                  height: '16',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  stroke: '#fff',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  children: t ? (0, x.jsx)('polyline', { points: '20 6 9 17 4 12' }) : (0, x.jsxs)(x.Fragment, {
                    children: [
                      (0, x.jsx)('rect', { x: '9', y: '9', width: '13', height: '13', rx: '2', ry: '2' }),
                      (0, x.jsx)('path', { d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' })
                    ]
                  })
                }),
                (0, x.jsx)('span', {
                  style: { fontFamily: L, fontWeight: 600, fontSize: 13, color: '#fff', whiteSpace: 'nowrap' },
                  children: t ? 'Copied!' : 'Copy our email'
                })
              ]
            });
          })()
        ]
      })
    ]
  });
}


function FooterLink({ href, children, isMobile, onClick }) {
  let [hovered, setHovered] = (0, o.useState)(!1);
  return (0, x.jsx)('a', {
    href: href || '#',
    onClick: onClick ? (e) => { e.preventDefault(); onClick(e); } : (e) => {
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        let targetId = href.slice(1);
        let el = document.getElementById(targetId) || document.querySelector(`[data-section="${targetId}"]`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    onMouseEnter: () => setHovered(!0),
    onMouseLeave: () => setHovered(!1),
    style: {
      fontFamily: L,
      fontWeight: 600,
      fontSize: isMobile ? 15 : 17,
      color: hovered ? R : V,
      textDecoration: 'none',
      lineHeight: '1.6',
      transition: 'color 0.2s ease',
      cursor: 'pointer'
    },
    children: children
  });
}


/* ==========================================================================
   SECTION: FOOTER (Brand Card + Links + System Information)
   ========================================================================== */
function Ve({ isMobile: e }) {
  let isMobile = e !== undefined ? e : W();
  let r = { fontFamily: I, fontWeight: 500, fontSize: 13, color: H, letterSpacing: '0.5px', textTransform: 'uppercase', margin: '0 0 16px' };

  return (0, x.jsxs)('footer', {
    id: 'footer',
    'data-section': 'footer',
    'data-cursor-no-stick': !0,
    style: {
      background: '#fffbce',
      padding: isMobile ? '24px 16px' : '40px 40px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      width: '100%',
      boxSizing: 'border-box'
    },
    children: [
      (0, x.jsxs)('div', {
        style: {
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 20 : 24,
          maxWidth: 1200,
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        },
        children: [
          /* Left Orange Gradient Brand Card */
          !isMobile && (0, x.jsxs)('div', {
            style: {
              flex: '0 0 380px',
              background: `linear-gradient(165deg, ${R} 0%, #ff692e 100%)`,
              borderRadius: 24,
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 320,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(237, 77, 12, 0.15)'
            },
            children: [
              (0, x.jsxs)('div', {
                style: { display: 'flex', alignItems: 'center', gap: 10 },
                children: [
                  (0, x.jsx)('img', {
                    src: '/assets/brand/interkace-script-logo.png',
                    alt: 'Interkace',
                    style: { height: 28, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }
                  })
                ]
              }),
              (0, x.jsxs)('div', {
                children: [
                  (0, x.jsx)('p', {
                    style: { fontFamily: L, fontWeight: 600, fontSize: 18, color: '#fff', margin: 0, lineHeight: 1.4 },
                    children: 'Senior product design,'
                  }),
                  (0, x.jsx)('p', {
                    style: { fontFamily: L, fontWeight: 400, fontSize: 18, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.4 },
                    children: 'on demand.'
                  })
                ]
              })
            ]
          }),

          /* Right White Card */
          (0, x.jsxs)('div', {
            style: {
              flex: 1,
              background: '#fff',
              borderRadius: 24,
              padding: isMobile ? '28px 24px' : '40px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              minHeight: isMobile ? 'auto' : 320,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)'
            },
            children: [
              !isMobile && (0, x.jsx)('div', {
                style: {
                  position: 'absolute',
                  top: -12,
                  right: -12,
                  width: 96,
                  height: 96,
                  background: `linear-gradient(135deg, ${R}, #ff692e)`,
                  borderRadius: 22,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(12deg)',
                  boxShadow: '0 8px 32px rgba(255,105,46,0.3)',
                  overflow: 'hidden'
                },
                children: (0, x.jsx)('img', {
                  src: k,
                  alt: '',
                  style: { width: 36, height: 42, objectFit: 'contain', filter: 'brightness(0) invert(1)' }
                })
              }),

              (0, x.jsxs)('div', {
                style: { display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 32 : 64 },
                children: [
                  (0, x.jsxs)('div', {
                    children: [
                      (0, x.jsx)('p', { style: r, children: 'Links' }),
                      (0, x.jsxs)('div', {
                        style: { display: 'flex', flexDirection: 'column', gap: 8 },
                        children: [
                          (0, x.jsx)(FooterLink, { href: '#how-it-works', isMobile, children: 'How it works' }),
                          (0, x.jsx)(FooterLink, { href: '#clientstories', isMobile, children: 'Categories' }),
                          (0, x.jsx)(FooterLink, { href: '#faq', isMobile, children: 'FAQ' })
                        ]
                      })
                    ]
                  }),
                  (0, x.jsxs)('div', {
                    children: [
                      (0, x.jsx)('p', { style: r, children: 'Company' }),
                      (0, x.jsxs)('div', {
                        style: { display: 'flex', flexDirection: 'column', gap: 8 },
                        children: [
                          (0, x.jsx)(FooterLink, { href: '#contact-form', isMobile, onClick: (e)=>{e.preventDefault();let el=document.getElementById("contact-form");if(el){if(window.__lenis){window.__lenis.scrollTo(el,{offset:-90})}else{window.scrollTo({top:el.getBoundingClientRect().top+window.pageYOffset-90,behavior:"smooth"})}}}, children: 'Contact' }),
                          (0, x.jsx)(FooterLink, { href: '#', isMobile, children: 'Privacy Policy' }),
                          (0, x.jsx)(FooterLink, { href: '#', isMobile, children: 'Terms' })
                        ]
                      })
                    ]
                  })
                ]
              }),

              (0, x.jsxs)('div', {
                style: {
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  marginTop: isMobile ? 32 : 0,
                  paddingTop: 16,
                  borderTop: '1px solid #F2F4F7'
                },
                children: [
                  (0, x.jsx)('p', {
                    style: { fontFamily: L, fontWeight: 400, fontSize: 13, color: H, margin: 0 },
                    children: '© 2026 INTERKACE STUDIO. All rights reserved.'
                  }),
                  (0, x.jsx)('a', {
                    href: '#contact-form',
                    onClick: (e) => {
                      e.preventDefault();
                      let el = document.getElementById('contact-form');
                      if (el) {
                        if (window.__lenis) {
                          window.__lenis.scrollTo(el, { offset: -90 });
                        } else {
                          window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' });
                        }
                      }
                    },
                    style: {
                      background: V,
                      borderRadius: 100,
                      padding: '12px 28px',
                      fontFamily: L,
                      fontWeight: 600,
                      fontSize: 14,
                      color: '#fff',
                      textDecoration: 'none',
                      display: 'inline-block',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, opacity 0.2s ease'
                    },
                    children: 'Call Us'
                  })
                ]
              })
            ]
          })
        ]
      }),

      /* Interactive Watermark */
      (0, x.jsx)(Re, { isMobile })
    ]
  });
}


/* ==========================================================================
   PAGE: MAIN LANDING PAGE VIEW COMPOSER
   ========================================================================== */
function He({ onAlpin, onAcademy, navReady = true, aboveOverlay = true, navExiting = false }) {
  let [s, c] = (0, o.useState)(0);
  let l = (0, o.useRef)(null);
  let a = (0, o.useRef)(null);

  (0, o.useEffect)(() => {
    let e = () => d('page_view', 'landing');
    'requestIdleCallback' in window ? requestIdleCallback(e) : setTimeout(e, 1);
  }, []);

  (0, o.useEffect)(() => {
    let updateFooterHeight = () => {
      let footerEl = a.current;
      if (footerEl) {
        c(Math.max(580, footerEl.offsetHeight));
      }
    };
    updateFooterHeight();
    window.addEventListener('resize', updateFooterHeight);
    return () => window.removeEventListener('resize', updateFooterHeight);
  }, []);

  (0, o.useEffect)(() => {
    let scrollHandler = () => {
      let contentWrapper = l.current;
      let footerEl = a.current;
      if (!contentWrapper || !footerEl) return;

      let contentRect = contentWrapper.getBoundingClientRect();
      let footerHeight = footerEl.offsetHeight;
      let distFromBottom = window.innerHeight - contentRect.bottom;
      let progress = Math.max(0, Math.min(1, distFromBottom / (footerHeight * 0.6)));

      contentWrapper.style.marginLeft = `${progress * 10}px`;
      contentWrapper.style.marginRight = `${progress * 10}px`;

      let faqEl = document.getElementById('faq');
      if (faqEl) {
        faqEl.style.borderBottomLeftRadius = `${progress * 42}px`;
        faqEl.style.borderBottomRightRadius = `${progress * 42}px`;
        faqEl.style.boxShadow = `0 ${progress * 24}px ${progress * 48}px rgba(0, 0, 0, 0.4)`;
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    scrollHandler();
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (0, x.jsxs)('div', {
    style: { fontFamily: L, overflowX: 'clip', background: '#fffbce' },
    children: [
      (0, x.jsxs)('div', {
        ref: l,
        style: {
          position: 'relative',
          zIndex: 1,
          marginBottom: s,
          transition: 'margin-left 0.1s ease-out, margin-right 0.1s ease-out'
        },
        children: [
          (0, x.jsx)('div', { style: { background: '#fffbce', width: '100%' }, children: (0, x.jsx)(pe, { navReady, aboveOverlay }) }),
          (0, x.jsx)(he, {}),
          (0, x.jsx)(Ee, {}),
          (0, x.jsx)(Fe, {}),
          (0, x.jsx)(AboutUsSection, {}),
          (0, x.jsx)(FolderCardsSection, {}),
          (0, x.jsx)(ContactFormSection, {}),
          (0, x.jsx)(ke, {})
        ]
      }),
      (0, x.jsx)('div', {
        ref: a,
        style: { position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 0 },
        children: (0, x.jsx)(Ve, {})
      })
    ]
  });
}


/* ==========================================================================
   ROOT APP: MAIN ROUTER & VIEW SWITCHER
   ========================================================================== */
function ct(){
let[e,t]=(0,o.useState)(()=>window.location.hash==="#admin"?"backoffice":"landing"),[n,r]=(0,o.useState)(null),[i,a]=(0,o.useState)(null),[s,c]=(0,o.useState)(!1),[l,u]=(0,o.useState)(!1),d=["alpa","alpin-capital","winter"].includes(window.location.hash.slice(1)),[f,p]=(0,o.useState)(!0),[m,h]=(0,o.useState)(!0),[g,_]=(0,o.useState)(1),[v,y]=(0,o.useState)(!0),[b,S]=(0,o.useState)(!1),C={name:"Sophie Marchand",role:"Directrice créative"},
w=(targetView,targetSection)=>{
  let executeChange=()=>{
    t(targetView);
    if(targetSection){
      setTimeout(()=>{
        let el=document.querySelector(`[data-section="${targetSection}"], #${targetSection}`);
        if(el){
          if(window.__lenis){
            window.__lenis.scrollTo(el,{offset:-80});
          }else{
            window.scrollTo({top:el.getBoundingClientRect().top+window.pageYOffset-80,behavior:"smooth"});
          }
        }
      },120);
    }else{
      window.scrollTo({top:0,behavior:"auto"});
    }
  };
  if(window.playShaderTransition){
    window.playShaderTransition(executeChange);
  }else{
    S(!0);
    setTimeout(()=>{
      S(!1);
      executeChange();
    },450);
  }
};
(0,o.useEffect)(()=>{let e=e=>{e.ctrlKey&&e.shiftKey&&e.key==="B"&&(e.preventDefault(),t("backoffice"))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),(0,o.useEffect)(()=>{let e=["/assets/hero/hero-phone-mockup.webp","/assets/brand/interkace-icon.png","/assets/hero/status-cellular.svg","/assets/hero/status-wifi.svg","/assets/hero/status-battery.svg","/assets/brand/interkace-script-logo.png"],t=0,n=e.length,r=()=>{t++,_(t/n),t>=n&&(setTimeout(()=>h(!0),100),["/assets/brand/interkace-script-logo.png"].forEach(e=>{let t=document.createElement("video");t.preload="auto",t.src=e,t.load()}),[].forEach(e=>{let t=new Image;t.src=e}))};e.forEach(e=>{let t=new Image;t.onload=r,t.onerror=r,t.src=e});let i=setTimeout(()=>{_(1),setTimeout(()=>h(!0),100)},4e3);return()=>clearTimeout(i)},[]);
var Z=[]; let pendingCount=Z.filter(e=>e.status==="En cours").length,deliveredCount=Z.filter(e=>e.status==="Livré").length;return(0,x.jsxs)("div",{style:{position:"relative",minHeight:"100vh",background:"#fffbce"},children:[b&&(0,x.jsx)("div",{style:{position:"fixed",inset:0,zIndex:99999,background:"#000",opacity:.4,transition:"opacity 0.5s ease"}}),e==="landing"?d&&(i||n)?(0,x.jsx)(Pe,{clientKey:i||n||"winter",onBack:()=>{a(null),r(null)},onBookCall:()=>{let e=document.querySelector('[data-section="pricing"]');e&&window.scrollTo({top:e.offsetTop,behavior:"smooth"})}}):(0,x.jsxs)(o.Fragment,{children:[(0,x.jsx)(de,{currentView:"landing",aboveOverlay:!1,onAcademy:()=>w("academy"),onStudio:()=>w("landing")}),(0,x.jsx)(He,{onAcademy:()=>w("academy"),onOpenStudio:()=>{},onOpenBackoffice:()=>w("backoffice"),onSelectClient:e=>a(e)})]}):e==="academy"?(0,x.jsx)(J,{onBack:()=>w("landing"),onBookCall:()=>w("landing","contact-form"),onNavigateSection:sec=>w("landing",sec)}):(0,x.jsx)(Me,{t:pendingCount,fromRect:null,onClose:()=>w("landing"),skipEnter:!0})]})
}
(0,a.createRoot)(document.getElementById("root")).render((0,x.jsx)(o.StrictMode,{children:(0,x.jsx)(ct,{})}));
export{m as a,g as i,_ as n,h as o,p as r,c as s,J as t};
