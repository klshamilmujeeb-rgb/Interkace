import { r as e } from "./rolldown-runtime.js";
import { i as t, n, r, t as i } from "./vendor-react.js";
var E = () => null;
const __vite__mapDeps = (i2, m2 = __vite__mapDeps, d2 = m2.f || (m2.f = ["assets/core/CustomCursor.js", "assets/core/rolldown-runtime.js", "assets/core/vendor-react.js", "assets/core/vendor-lenis.js", "assets/IntroAnimation-DvAKon4R.js", "assets/AcademyPage-CnXZ2XvD.js", "assets/AlpinDashboard-DbPa-Ucg.js", "assets/AlpinClients-DezW7nlz.js", "assets/AlpinClientDetail-DMszYulb.js", "assets/AlpinOperationModal-Ci-SXlBf.js", "assets/AlpinMandats-Cpq3mW7m.js", "assets/AlpinMandatDetail-BX1hFjkb.js", "assets/AlpinMessages-DlaKpSe6.js", "assets/AlpinSettings-dI0DDc1h.js", "assets/AlpinNotifPanel-DUP9H55Z.js", "assets/Backoffice-TReBpWxW.js"])) => i2.map((i3) => d2[i3]);
(function() {
  let e2 = document.createElement(`link`).relList;
  if (e2 && e2.supports && e2.supports(`modulepreload`)) return;
  for (let e3 of document.querySelectorAll(`link[rel="modulepreload"]`)) n2(e3);
  new MutationObserver((e3) => {
    for (let t3 of e3) if (t3.type === `childList`) for (let e4 of t3.addedNodes) e4.tagName === `LINK` && e4.rel === `modulepreload` && n2(e4);
  }).observe(document, { childList: true, subtree: true });
  function t2(e3) {
    let t3 = {};
    return e3.integrity && (t3.integrity = e3.integrity), e3.referrerPolicy && (t3.referrerPolicy = e3.referrerPolicy), e3.crossOrigin === `use-credentials` ? t3.credentials = `include` : e3.crossOrigin === `anonymous` ? t3.credentials = `omit` : t3.credentials = `same-origin`, t3;
  }
  function n2(e3) {
    if (e3.ep) return;
    e3.ep = true;
    let n3 = t2(e3);
    fetch(e3.href, n3);
  }
})();
var a = n(), o = e(t(), 1), s = r(), c = () => false, l = `umano_analytics`, u = 1e4;
function d(e2, t2, n2) {
  try {
    let r2 = f();
    r2.push({ type: e2, label: t2, timestamp: Date.now(), path: n2 }), r2.length > u && r2.splice(0, r2.length - u), localStorage.setItem(l, JSON.stringify(r2));
  } catch {
  }
}
function f() {
  try {
    let e2 = localStorage.getItem(l);
    return e2 ? JSON.parse(e2) : [];
  } catch {
    return [];
  }
}
async function p() {
  return v();
}
async function m(e2, t2 = 14) {
  let n2 = /* @__PURE__ */ new Date(), r2 = new Date(n2);
  return r2.setDate(r2.getDate() - t2), b(e2, t2);
}
async function h(e2, t2 = 10) {
  return y(e2, t2);
}
async function g(e2 = 50) {
  return f().slice(-e2).reverse();
}
async function _() {
  localStorage.removeItem(l);
}
function v() {
  let e2 = {};
  for (let t2 of f()) e2[t2.type] = (e2[t2.type] || 0) + 1;
  return e2;
}
function y(e2, limit) {
  let n2 = {};
  for (let item of f()) item.type === e2 && (n2[item.label] = (n2[item.label] || 0) + 1);
  return Object.entries(n2).map(([k2, v2]) => ({ label: k2, count: v2 })).sort((a2, b2) => b2.count - a2.count).slice(0, limit);
}
function b(e2, t2) {
  let n2 = /* @__PURE__ */ new Date(), r2 = f().filter((t3) => t3.type === e2), i2 = [];
  for (let e3 = t2 - 1; e3 >= 0; e3--) {
    let t3 = new Date(n2);
    t3.setDate(t3.getDate() - e3);
    let a2 = t3.toISOString().slice(0, 10), o2 = new Date(a2).getTime(), s2 = o2 + 864e5;
    i2.push({ date: t3.toLocaleDateString(`en-US`, { month: `short`, day: `numeric` }), count: r2.filter((e4) => e4.timestamp >= o2 && e4.timestamp < s2).length });
  }
  return i2;
}
var x = i(), S = `modulepreload`, C = function(e2) {
  return `/` + e2;
}, w = {}, T = function(e2, t2, n2) {
  let r2 = Promise.resolve();
  if (t2 && t2.length > 0) {
    let o2 = function(e4) {
      return Promise.all(e4.map((e5) => Promise.resolve(e5).then((e6) => ({ status: "fulfilled", value: e6 }), (e6) => ({ status: "rejected", reason: e6 }))));
    };
    let e3 = document.getElementsByTagName("link"), i2 = document.querySelector("meta[property=csp-nonce]"), a2 = i2?.nonce || i2?.getAttribute("nonce");
    r2 = o2(t2.map((t3) => {
      if (t3 = C(t3, n2), t3 in w) return;
      w[t3] = true;
      let r3 = t3.endsWith(".css"), i3 = r3 ? '[rel="stylesheet"]' : "";
      if (n2) for (let n3 = e3.length - 1; n3 >= 0; n3--) {
        let i4 = e3[n3];
        if (i4.href === t3 && (!r3 || i4.rel === "stylesheet")) return;
      }
      else if (document.querySelector('link[href="' + t3 + '"]' + i3)) return;
      let s2 = document.createElement("link");
      if (s2.rel = r3 ? "stylesheet" : "modulepreload", r3 || (s2.as = "script", s2.crossOrigin = ""), s2.href = t3, a2 && s2.setAttribute("nonce", a2), document.head.appendChild(s2), r3) return new Promise((e4, n3) => {
        s2.addEventListener("load", e4), s2.addEventListener("error", () => n3(new Error("Unable to preload CSS for " + t3)));
      });
    }));
  }
  return r2;
}, E = (0, o.lazy)(() => T(() => import("./CustomCursor.js"), __vite__mapDeps([0, 1, 2]))), D = `/assets/brand/interkace-script-logo.png`, O = `/assets/hero/hero-phone-mockup.webp`, k = `/assets/hero/logo-symbol.svg`, A = `/assets/hero/status-cellular.svg`, j = `/assets/hero/status-wifi.svg`, M = `/assets/hero/status-battery.svg`, ee = `/assets/4749c967c7f8adfedb3d46b0d1431c47a4a6e817.webp`, N = `/assets/ea55a0a638beaab91dee0dbca6565714337197b1.webp`, te = `/assets/39949f69e900d50476534b8abec29b6bb7030c99.webp`, ne = `/assets/cf9789569f4d0ab00ff30680fc494f3416e9d992.webp`, P = `/assets/f7e17e89fae89964272fc250d4fa15c376f4f99f.webp`, re = `/assets/hero/icon-interface.svg`, ie = `/assets/f21df5ff43c89458291f5995e6900ef45c1a1e54.webp`, ae = `/assets/hero/logo-badge.svg`, oe = `/notif.mp4`, F = `"Teko", sans-serif`, I = `"Ubuntu", sans-serif`, L = `"Ubuntu", sans-serif`, R = `#ff692e`, z = `#ff4405`, B = `#181d27`, V = `#0a0d12`, H = `#535862`, U = `#e9eaeb`;
function se(e2 = 0.12) {
  let t2 = (0, o.useRef)(null), [n2, r2] = (0, o.useState)(false);
  (0, o.useEffect)(() => {
    let n3 = t2.current;
    if (!n3) return;
    let i2 = new IntersectionObserver(([e3]) => {
      e3.isIntersecting && (r2(true), i2.disconnect());
    }, { threshold: e2 });
    i2.observe(n3);
    return () => i2.disconnect();
  }, [e2]);
  return { ref: t2, visible: n2 };
}
var ce = (e2) => ({ opacity: e2 ? 1 : 0, transform: e2 ? `translateY(0)` : `translateY(32px)`, transition: `opacity 0.65s ease, transform 0.65s ease` });
function W() {
  let [e2, t2] = (0, o.useState)(() => window.innerWidth <= 768);
  return (0, o.useEffect)(() => {
    let e3 = () => t2(window.innerWidth <= 768);
    return window.addEventListener(`resize`, e3), () => window.removeEventListener(`resize`, e3);
  }, []), e2;
}
var le = [`Design Studio`, `All Works`], ue = [`How it works`, `Categories`, `About Us`], G = 5;
function de({ externalMounted: e2, aboveOverlay: t2, onAcademy: n2, onStudio: onStudioFn, exiting: r2 } = {}) {
  let i2 = W(), [a2, s2] = (0, o.useState)(true), [c2, l2] = (0, o.useState)(false), [u2, f2] = (0, o.useState)(false), [p2, m2] = (0, o.useState)(0), [h2, g2] = (0, o.useState)(false), [_2, v2] = (0, o.useState)(false), [y2, b2] = (0, o.useState)(""), [S2, C2] = (0, o.useState)(false), w2 = (0, o.useRef)(0), T2 = (0, o.useRef)(true), E2 = (0, o.useRef)(false), O2 = (0, o.useRef)(0), k2 = (0, o.useRef)(null), A2 = (0, o.useRef)(0);
  (0, o.useEffect)(() => {
    requestAnimationFrame(() => v2(true));
  }, []), (0, o.useEffect)(() => {
    let e3 = () => {
      let e4 = window.scrollY, t3 = document.getElementById(`hero-section`), n3 = e4 <= (t3 ? t3.offsetHeight : window.innerHeight), r3 = document.getElementById(`how-it-works`), i3 = false;
      if (r3) {
        let e5 = r3.getBoundingClientRect(), t4 = Math.max(0, -e5.top), n4 = (r3.offsetHeight - window.innerHeight) * 4 / 5;
        if (i3 = t4 > 0 && t4 < n4, i3) {
          let e6 = Math.min(1, t4 / n4), r4 = Math.min(G - 1, Math.floor(e6 * G));
          r4 !== O2.current && (O2.current = r4, m2(r4));
        }
      }
      i3 !== E2.current && (E2.current = i3, s2(false), A2.current = Date.now() + 1100, k2.current && clearTimeout(k2.current), k2.current = setTimeout(() => {
        f2(i3), s2(true);
      }, 500)), i3 || (T2.current && !n3 ? (s2(false), A2.current = Date.now() + 1100, k2.current && clearTimeout(k2.current), k2.current = setTimeout(() => {
        l2(true), f2(false), s2(true);
      }, 500)) : !T2.current && n3 && (s2(false), A2.current = Date.now() + 1100, k2.current && clearTimeout(k2.current), k2.current = setTimeout(() => {
        l2(false), f2(false), s2(true);
      }, 500))), T2.current = n3, w2.current = e4;
      let a3 = [`how-it-works`, `clientstories`, `about-us`, `faq`], o2 = "";
      for (let e5 of a3) {
        let t4 = document.querySelector(`[data-section="${e5}"], #${e5}`);
        if (t4) {
          let n4 = t4.getBoundingClientRect();
          n4.top <= window.innerHeight * 0.4 && n4.bottom > window.innerHeight * 0.3 && (o2 = e5);
        }
      }
      if (o2 === `how-it-works`) {
        let e5 = document.getElementById(`how-it-works`);
        if (e5) {
          let t4 = (e5.offsetHeight - window.innerHeight) * 4 / 5;
          Math.max(0, -e5.getBoundingClientRect().top) > t4 && (o2 = `clientstories`);
        }
      }
      b2(o2);
    };
    return window.addEventListener(`scroll`, e3, { passive: true }), () => {
      window.removeEventListener(`scroll`, e3), k2.current && clearTimeout(k2.current);
    };
  }, []);
  let j2 = a2 || h2, M2 = c2 ? ue : le;
  return (0, x.jsxs)(`div`, { "data-main-nav": true, style: { position: `fixed`, top: 12, left: 0, right: 0, zIndex: t2 ? 1e4 : 100, display: `flex`, justifyContent: `center`, pointerEvents: `none`, opacity: r2 ? 0 : e2 ?? _2 ? 1 : 0, transform: r2 ? `translateY(-200%)` : e2 ?? _2 ? `translateY(0)` : `translateY(-200%)`, transition: `opacity 0.5s ease, transform 0.5s cubic-bezier(0.4,0,0.6,1)` }, children: [(0, x.jsx)(`header`, { style: { pointerEvents: `auto`, position: `relative` }, onMouseEnter: () => g2(true), onMouseLeave: () => g2(false), children: i2 ? (0, x.jsxs)(`div`, { style: { position: `relative`, display: `flex`, flexDirection: `column`, background: `#F0F0F0`, borderRadius: S2 ? 28 : 32, padding: S2 ? `16px 14px 16px 18px` : `0 14px 0 18px`, gap: 0, height: S2 ? 278 : 52, width: `min(350px, calc(100vw - 32px))`, boxShadow: `0 8px 32px rgba(0,0,0,0.12)`, willChange: `transform`, transition: `height 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.45s cubic-bezier(0.16, 1, 0.3, 1), padding 0.45s cubic-bezier(0.16, 1, 0.3, 1)`, overflow: `hidden`, boxSizing: `border-box` }, children: [
    (0, x.jsxs)(`div`, { style: { display: `flex`, alignItems: `center`, justifyContent: `space-between`, width: `100%`, height: S2 ? 36 : 52, flexShrink: 0, transition: `height 0.45s cubic-bezier(0.16, 1, 0.3, 1)` }, children: [
      u2 ? (0, x.jsx)(`div`, { style: { display: `flex`, alignItems: `center`, gap: 6, padding: `0 4px` }, children: Array.from({ length: G }).map((e3, t3) => (0, x.jsx)(`div`, { style: { height: 7, flexShrink: 0, width: p2 === t3 ? 24 : 7, borderRadius: 4, background: p2 === t3 ? B : `${B}40`, transition: `width 0.45s cubic-bezier(0.4,0,0.2,1), background 0.3s ease` } }, t3)) }) : (0, x.jsx)(`div`, { onClick: () => window.scrollTo({ top: 0, behavior: `smooth` }), style: { display: `flex`, alignItems: `center`, flexShrink: 0, cursor: `pointer` }, children: (0, x.jsx)(`img`, { src: D, alt: `UMANO`, style: { height: 28, width: `auto`, objectFit: `contain` } }) }),
      (0, x.jsxs)(`button`, { "aria-label": S2 ? `Close menu` : `Open menu`, onClick: () => C2(!S2), style: { background: `#000`, color: `#fff`, border: `none`, borderRadius: 20, width: 36, height: 36, padding: 0, cursor: `pointer`, display: `flex`, alignItems: `center`, justifyContent: `center`, flexShrink: 0, transition: `transform 0.2s ease` }, children: [S2 ? (0, x.jsx)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 16 16`, fill: `none`, children: (0, x.jsx)(`path`, { d: `M4 4L12 12M12 4L4 12`, stroke: `#fff`, strokeWidth: `2`, strokeLinecap: `round` }) }) : (0, x.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: `3px`, alignItems: `center` }, children: [(0, x.jsx)(`span`, { style: { display: `block`, width: 14, height: 2, background: `#fff`, borderRadius: 1 } }), (0, x.jsx)(`span`, { style: { display: `block`, width: 14, height: 2, background: `#fff`, borderRadius: 1 } }), (0, x.jsx)(`span`, { style: { display: `block`, width: 14, height: 2, background: `#fff`, borderRadius: 1 } })] })] })
    ] }),
    (0, x.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: 10, width: `100%`, opacity: S2 ? 1 : 0, transform: S2 ? `translateY(0)` : `translateY(-10px)`, transition: `opacity 0.35s ease ${S2 ? "0.15s" : "0s"}, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${S2 ? "0.1s" : "0s"}`, pointerEvents: S2 ? `auto` : `none`, marginTop: 20 }, children: [
      (0, x.jsx)(`nav`, { style: { display: `flex`, flexDirection: `column`, gap: 4 }, children: [{ label: `How it works`, section: `how-it-works` }, { label: `Categories`, section: `clientstories` }, { label: `About Us`, section: `about-us` }].map((e3) => (0, x.jsxs)(`a`, { href: `#${e3.section}`, onClick: (t3) => {
        t3.preventDefault();
        C2(false);
        let n3 = document.querySelector(`[data-section="${e3.section}"], #${e3.section}`);
        if (n3) {
          if (window.__lenis) {
            window.__lenis.scrollTo(n3, { offset: -80 });
          } else {
            window.scrollTo({ top: n3.getBoundingClientRect().top + window.pageYOffset - 80, behavior: `smooth` });
          }
        }
      }, style: { fontFamily: F, fontWeight: 700, fontSize: 18, color: `#121212`, textDecoration: `none`, padding: `10px 14px`, borderRadius: 12, background: `rgba(0,0,0,0.04)`, display: `flex`, alignItems: `center`, justifyContent: `space-between`, transition: `background 0.2s ease` }, children: [(0, x.jsx)(`span`, { children: e3.label }), (0, x.jsx)(`svg`, { width: `14`, height: `14`, viewBox: `0 0 16 16`, fill: `none`, style: { opacity: 0.4 }, children: (0, x.jsx)(`path`, { d: `M6 12L10 8L6 4`, stroke: `#121212`, strokeWidth: `2`, strokeLinecap: `round`, strokeLinejoin: `round` }) })] }, e3.label)) }),
      (0, x.jsx)(`a`, { href: `#contact-form`, onClick: (e3) => {
        e3.preventDefault();
        C2(false);
        let t3 = document.getElementById("contact-form");
        if (t3) {
          if (window.__lenis) {
            window.__lenis.scrollTo(t3, { offset: -80 });
          } else {
            window.scrollTo({ top: t3.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
          }
        }
      }, style: { display: `block`, width: `100%`, background: R, borderRadius: 14, padding: `12px 18px`, fontFamily: L, fontWeight: 600, fontSize: 16, color: `#fff`, textAlign: `center`, textDecoration: `none`, boxSizing: `border-box`, marginTop: 4 }, children: `Book a call` })
    ] })
  ] }) : (0, x.jsxs)(`div`, { style: { display: `flex`, alignItems: `center`, background: `#F0F0F0`, borderRadius: 55, padding: `0 21px`, gap: 24, height: 81, boxShadow: `none`, whiteSpace: `nowrap`, willChange: `transform` }, children: [(0, x.jsx)(`div`, { onClick: () => window.scrollTo({ top: 0, behavior: `smooth` }), style: { display: `flex`, alignItems: `center`, padding: `4px 8px`, flexShrink: 0, cursor: `pointer` }, children: (0, x.jsx)(`img`, { src: D, alt: `UMANO`, style: { height: 32, width: `auto` } }) }), (0, x.jsx)(`div`, { style: { display: `grid`, gridTemplateColumns: j2 ? `1fr` : `0fr`, transition: `grid-template-columns 0.45s cubic-bezier(0.4,0,0.2,1)`, overflow: `hidden` }, children: (0, x.jsx)(`div`, { style: { display: `flex`, alignItems: `center`, minWidth: 0, opacity: j2 ? 1 : 0, transition: j2 ? `opacity 0.3s ease` : `none` }, children: u2 ? (0, x.jsx)(`div`, { style: { display: `flex`, alignItems: `center`, gap: 7, padding: `0 10px` }, children: Array.from({ length: G }).map((e3, t3) => (0, x.jsx)(`div`, { style: { height: 8, flexShrink: 0, width: p2 === t3 ? 28 : 8, borderRadius: 4, background: p2 === t3 ? B : `${B}40`, transition: `width 0.45s cubic-bezier(0.4,0,0.2,1), background 0.3s ease` } }, t3)) }) : (0, x.jsx)(`nav`, { style: { display: `flex`, alignItems: `center`, gap: 2 }, children: M2.map((e3) => {
    let t3 = { "How it works": `how-it-works`, "Categories": `clientstories`, "About Us": `about-us` }[e3] || null, r3 = !c2 && e3 === `Design Studio` || c2 && !!t3 && y2 === t3;
    return (0, x.jsx)(`a`, { href: t3 ? `#${t3}` : `#`, onClick: (r4) => {
      if (r4.preventDefault(), e3 === `All Works`) {
        n2?.();
        return;
      }
      if (e3 === `Design Studio`) {
        if (onStudioFn) {
          onStudioFn();
          return;
        }
      }
      if (e3 === `Categories`) {
        let e4 = document.querySelector(`[data-section="clientstories"]`);
        e4 && window.scrollTo({ top: e4.offsetTop, behavior: `smooth` });
        return;
      }
      if (t3) {
        let e4 = document.getElementById(t3);
        e4 && window.scrollTo({ top: e4.offsetTop, behavior: `smooth` });
      }
    }, style: { fontFamily: L, fontWeight: r3 ? 800 : 600, fontSize: 18, color: r3 ? R : B, textDecoration: `none`, padding: `8px 16px`, fontWeight: 700, borderRadius: 8, flexShrink: 0, transition: `color 0.2s ease` }, children: e3 }, e3);
  }) }) }) }), (0, x.jsx)(`a`, { href: `#contact-form`, onClick: (e3) => {
    e3.preventDefault();
    d(`cta_click`, `Call Us, nav`);
    let el = document.getElementById("contact-form");
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -90 });
      } else {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 90, behavior: "smooth" });
      }
    }
  }, style: { fontFamily: L, fontWeight: 600, fontSize: 18, background: c2 ? R : `#000`, color: `#fff`, border: `none`, borderRadius: 43, padding: `12px 24px`, cursor: `pointer`, flexShrink: 0, marginLeft: 4, textDecoration: `none` }, children: `Book a call` })] }) })] });
}
var fe = [`Mobile App`, `SaaS`, `Website`, `Software`, `Landing Pages`, `Brand`, `Product`, `Flows`];
function CrowdCanvas({ src = "/assets/hero/hero-crowd-peeps.png", rows = 15, cols = 7, scale = 1 }) {
  const canvasRef = (0, o.useRef)(null);
  (0, o.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const gsap = window.gsap;
    if (!gsap) return;
    const config = { src, rows, cols };
    const randomRange = (min, max) => min + Math.random() * (max - min);
    const randomIndex = (array) => randomRange(0, array.length) | 0;
    const removeFromArray = (array, i2) => array.splice(i2, 1)[0];
    const removeItemFromArray = (array, item) => removeFromArray(array, array.indexOf(item));
    const removeRandomFromArray = (array) => removeFromArray(array, randomIndex(array));
    const getRandomFromArray = (array) => array[randomIndex(array) | 0];
    const resetPeep = ({ stage: stage2, peep }) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const offsetY = (40 - 140 * (gsap.parseEase ? gsap.parseEase("power2.in")(Math.random()) : Math.random())) * scale;
      const startY = stage2.height - peep.height + offsetY;
      let startX, endX;
      if (direction === 1) {
        startX = -peep.width;
        endX = stage2.width;
        peep.scaleX = 1;
      } else {
        startX = stage2.width + peep.width;
        endX = 0;
        peep.scaleX = -1;
      }
      peep.x = startX;
      peep.y = startY;
      peep.anchorY = startY;
      return { startX, startY, endX };
    };
    const normalWalk = ({ peep, props }) => {
      const { startX, startY, endX } = props;
      const xDuration = 10;
      const yDuration = 0.25;
      const tl = gsap.timeline();
      tl.timeScale(randomRange(0.5, 1.5));
      tl.to(peep, { duration: xDuration, x: endX, ease: "none" }, 0);
      tl.to(peep, { duration: yDuration, repeat: Math.floor(xDuration / yDuration), yoyo: true, y: startY - 10 * scale }, 0);
      return tl;
    };
    const walks = [normalWalk];
    const createPeep = ({ image, rect }) => {
      const peep = { image, rect: [], width: 0, height: 0, drawArgs: [], x: 0, y: 0, anchorY: 0, scaleX: 1, walk: null, setRect: (r2) => {
        peep.rect = r2;
        peep.width = r2[2] * scale;
        peep.height = r2[3] * scale;
        peep.drawArgs = [peep.image, ...r2, 0, 0, peep.width, peep.height];
      }, render: (c2) => {
        c2.save();
        c2.translate(peep.x, peep.y);
        c2.scale(peep.scaleX, 1);
        c2.drawImage(peep.image, peep.rect[0], peep.rect[1], peep.rect[2], peep.rect[3], 0, 0, peep.width, peep.height);
        c2.restore();
      } };
      peep.setRect(rect);
      return peep;
    };
    const img = document.createElement("img");
    const stage = { width: 0, height: 0 };
    const allPeeps = [];
    const availablePeeps = [];
    const crowd = [];
    const createPeeps = () => {
      const { rows: rows2, cols: cols2 } = config;
      const { naturalWidth: width, naturalHeight: height } = img;
      const total = rows2 * cols2;
      const rectWidth = width / rows2;
      const rectHeight = height / cols2;
      for (let i2 = 0; i2 < total; i2++) {
        allPeeps.push(createPeep({ image: img, rect: [i2 % rows2 * rectWidth, (i2 / rows2 | 0) * rectHeight, rectWidth, rectHeight] }));
      }
    };
    const addPeepToCrowd = () => {
      if (!availablePeeps.length) return null;
      const peep = removeRandomFromArray(availablePeeps);
      const walk = getRandomFromArray(walks)({ peep, props: resetPeep({ peep, stage }) }).eventCallback("onComplete", () => {
        removePeepFromCrowd(peep);
        addPeepToCrowd();
      });
      peep.walk = walk;
      crowd.push(peep);
      crowd.sort((a2, b2) => a2.anchorY - b2.anchorY);
      return peep;
    };
    const initCrowd = () => {
      while (availablePeeps.length) {
        const p2 = addPeepToCrowd();
        if (p2 && p2.walk) p2.walk.progress(Math.random());
      }
    };
    const removePeepFromCrowd = (peep) => {
      removeItemFromArray(crowd, peep);
      availablePeeps.push(peep);
    };
    const render = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      const dpr = window.devicePixelRatio || 1;
      ctx.scale(dpr, dpr);
      crowd.forEach((peep) => peep.render(ctx));
      ctx.restore();
    };
    const resize = () => {
      if (!canvas) return;
      stage.width = canvas.clientWidth;
      stage.height = canvas.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = stage.width * dpr;
      canvas.height = stage.height * dpr;
      crowd.forEach((peep) => {
        if (peep.walk) peep.walk.kill();
      });
      crowd.length = 0;
      availablePeeps.length = 0;
      availablePeeps.push(...allPeeps);
      initCrowd();
    };
    const init = () => {
      createPeeps();
      resize();
      if (gsap && gsap.ticker) gsap.ticker.add(render);
    };
    img.onload = init;
    img.src = config.src;
    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (gsap && gsap.ticker) gsap.ticker.remove(render);
      crowd.forEach((peep) => {
        if (peep.walk) peep.walk.kill();
      });
    };
  }, []);
  return (0, x.jsx)("canvas", { ref: canvasRef, style: { position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" } });
}
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
              fontFamily: '"Teko", Ubuntu, system-ui, sans-serif',
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontWeight: 500,
              margin: "12px auto 0 auto",
              zIndex: 5
            },
            children: [
              (0, x.jsx)("span", { style: { opacity: 0.6, fontSize: "10px" }, children: "\u{1F512}" }),
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
              fontFamily: '"Teko", Ubuntu, system-ui, sans-serif',
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
                  fontFamily: '"Ubuntu", system-ui, -apple-system, sans-serif',
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontWeight: 500
                },
                children: [
                  (0, x.jsx)("span", { style: { opacity: 0.6 }, children: "\u{1F512}" }),
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
              fontFamily: '"Ubuntu", system-ui, -apple-system, sans-serif'
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
                  fontFamily: '"Ubuntu", sans-serif',
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
function pe({ navReady: e2, aboveOverlay: t2 } = {}) {
  let isMobile = W(), [r2, i2] = (0, o.useState)(0), [a2, s2] = (0, o.useState)(true), c2 = (0, o.useRef)(null), [l2, u2] = (0, o.useState)(void 0), d2 = (0, o.useRef)(null), f2 = (0, o.useRef)(null), p2 = (0, o.useRef)(false), m2 = (0, o.useRef)(false);
  (0, o.useLayoutEffect)(() => {
    m2.current = false;
    if (f2.current) {
      f2.current.style.transition = "none";
    }
  }, [t2]);
  (0, o.useEffect)(() => {
    m2.current = false;
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("scroll"));
    }
  }, [t2]);
  (0, o.useEffect)(() => {
    c2.current && u2(c2.current.offsetWidth);
  }, [r2]);
  (0, o.useEffect)(() => {
    let e3 = setInterval(() => {
      s2(false);
      setTimeout(() => {
        i2((e4) => (e4 + 1) % fe.length);
        s2(true);
      }, 250);
    }, 1500);
    return () => clearInterval(e3);
  }, []);
  (0, o.useEffect)(() => {
    let heroEl = d2.current;
    let mockupEl = f2.current;
    if (!heroEl || !mockupEl) return;
    let updateParallax = () => {
      let scrollY = window.scrollY || window.pageYOffset || 0;
      let isMob = window.innerWidth <= 768;
      let threshold = isMob ? 160 : 200;
      let progress = Math.max(0, Math.min(1, scrollY / threshold));
      let radiusPx = isMob ? 28 : 44;
      heroEl.style.borderBottomLeftRadius = `${progress * radiusPx}px`;
      heroEl.style.borderBottomRightRadius = `${progress * radiusPx}px`;
      if (m2.current) return;
      let tilt = isMob ? 0 : Math.min(5, scrollY * 0.015);
      let translateY = isMob ? Math.min(16, scrollY * 0.05) : Math.min(60, scrollY * 0.15);
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
  return (0, x.jsxs)("section", {
    ref: d2,
    id: "hero-section",
    style: {
      position: "relative",
      zIndex: 1,
      background: "#051880",
      overflow: "visible",
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
      margin: 0
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
                  width: l2,
                  transition: "width 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  verticalAlign: "bottom",
                  overflow: "hidden"
                },
                children: (0, x.jsx)("strong", {
                  ref: c2,
                  style: {
                    fontFamily: I,
                    fontWeight: 700,
                    display: "inline-block",
                    opacity: a2 ? 1 : 0,
                    transform: a2 ? "translateY(0)" : "translateY(6px)",
                    transition: "opacity 0.25s ease, transform 0.3s ease",
                    whiteSpace: "nowrap",
                    color: "#ffffff"
                  },
                  children: fe[r2]
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
          overflow: "visible",
          flexShrink: 0,
          marginTop: "auto",
          marginBottom: 0,
          paddingBottom: 0
        },
        children: (0, x.jsx)("div", {
          ref: f2,
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
  });
}
function me() {
  let e2 = W(), { ref: t2, visible: n2 } = se(), r2 = [{ src: ee, w: 124, h: 69 }, { src: N, w: 124, h: 37 }, { src: te, w: 158, h: 105 }, { src: ne, w: 163, h: 92 }, { src: P, w: 156, h: 69 }];
  return (0, x.jsx)(`section`, { style: { background: `#fff`, display: `flex`, justifyContent: `center`, padding: e2 ? `72px 0` : `96px 0`, overflow: `hidden` }, children: (0, x.jsxs)(`div`, { ref: t2, style: { ...ce(n2), display: `flex`, flexDirection: `column`, gap: 32, alignItems: `center`, maxWidth: 1280, width: `100%` }, children: [(0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 500, fontSize: 16, color: H, lineHeight: `24px`, textAlign: `center`, margin: 0, padding: e2 ? `0 16px` : `0 32px` }, children: `Our designers have been part of these teams.` }), e2 ? (0, x.jsxs)(`div`, { style: { width: `100%`, overflow: `hidden` }, children: [(0, x.jsxs)(`div`, { style: { display: `flex`, gap: 48, alignItems: `center`, width: `max-content` }, children: [(0, x.jsx)(`div`, { style: { display: `flex`, gap: 48, alignItems: `center`, animation: `logoMarquee 25s linear infinite` }, children: r2.map((e3, t3) => (0, x.jsx)(`img`, { src: e3.src, alt: "", style: { width: e3.w * 0.7, height: e3.h * 0.7, objectFit: `contain`, filter: `grayscale(1)`, flexShrink: 0 } }, t3)) }), (0, x.jsx)(`div`, { "aria-hidden": "true", style: { display: `flex`, gap: 48, alignItems: `center`, animation: `logoMarquee 25s linear infinite` }, children: r2.map((e3, t3) => (0, x.jsx)(`img`, { src: e3.src, alt: "", style: { width: e3.w * 0.7, height: e3.h * 0.7, objectFit: `contain`, filter: `grayscale(1)`, flexShrink: 0 } }, t3)) }), (0, x.jsx)(`div`, { "aria-hidden": "true", style: { display: `flex`, gap: 48, alignItems: `center`, animation: `logoMarquee 25s linear infinite` }, children: r2.map((e3, t3) => (0, x.jsx)(`img`, { src: e3.src, alt: "", style: { width: e3.w * 0.7, height: e3.h * 0.7, objectFit: `contain`, filter: `grayscale(1)`, flexShrink: 0 } }, t3)) }), (0, x.jsx)(`div`, { "aria-hidden": "true", style: { display: `flex`, gap: 48, alignItems: `center`, animation: `logoMarquee 25s linear infinite` }, children: r2.map((e3, t3) => (0, x.jsx)(`img`, { src: e3.src, alt: "", style: { width: e3.w * 0.7, height: e3.h * 0.7, objectFit: `contain`, filter: `grayscale(1)`, flexShrink: 0 } }, t3)) })] }), (0, x.jsx)(`style`, { children: `
              @keyframes logoMarquee {
                0%   { transform: translateX(0); }
                100% { transform: translateX(calc(-100% - 48px)); }
              }
            ` })] }) : (0, x.jsx)(`div`, { style: { display: `flex`, flexWrap: `wrap`, gap: 113, alignItems: `center`, justifyContent: `center`, width: `100%`, padding: `0 32px` }, children: r2.map((e3, t3) => (0, x.jsx)(`img`, { src: e3.src, alt: "", style: { width: e3.w, height: e3.h, objectFit: `contain`, filter: `grayscale(1)` } }, t3)) })] }) });
}
var K = [`Finding`, `a`, `product`, `designer`, `takes`, `months.`, `Starting`, `with`, `UMANO`, `takes`, `minutes.`, `Unlimited`, `requests.`, `Fixed`, `monthly`, `price.`, `No`, `commitment.`];
function he() {
  let e2 = W(), t2 = (0, o.useRef)(null), [n2, r2] = (0, o.useState)(0);
  return (0, o.useEffect)(() => {
    let e3 = () => {
      let e4 = t2.current;
      if (!e4) return;
      let n3 = e4.getBoundingClientRect(), i2 = e4.offsetHeight - window.innerHeight;
      r2(Math.max(0, Math.min(1, -n3.top / i2)));
    };
    return window.addEventListener(`scroll`, e3, { passive: true }), e3(), () => window.removeEventListener(`scroll`, e3);
  }, []), (0, x.jsx)(x.Fragment, { children: (0, x.jsx)(`div`, { ref: t2, style: { position: `relative`, zIndex: 10, height: `250vh`, background: `#fff` }, children: (0, x.jsx)(`div`, { style: { position: `sticky`, top: 0, height: `100vh`, display: `flex`, alignItems: `center`, justifyContent: `center` }, children: (0, x.jsx)(`div`, { style: { padding: e2 ? `0 24px` : `0 112px`, width: `100%`, maxWidth: 1440 }, children: (0, x.jsx)(`p`, { style: { fontFamily: F, fontWeight: 700, fontSize: e2 ? 24 : 36, lineHeight: e2 ? `34px` : `44px`, margin: 0, letterSpacing: `-0.72px`, maxWidth: e2 ? `100%` : 695 }, children: K.map((e3, t3) => {
    let r3 = t3 / K.length, i2 = (t3 + 1) / K.length, a2 = Math.max(0, Math.min(1, (n2 - r3 * 0.85) / (i2 - r3 + 0.04)));
    return (0, x.jsxs)(`span`, { style: { color: a2 >= 1 ? V : a2 <= 0 ? `#f5f5f5` : `color-mix(in srgb, ${V} ${Math.round(a2 * 100)}%, #f5f5f5)`, transition: `color 0.15s ease` }, children: [e3, ` `] }, t3);
  }) }) }) }) }) });
}
var q = [{ title: `Your designer, from day one`, desc: `A senior product designer fully dedicated to your company. Working like a founding designer, without the hiring process.`, video: `/assets/process/process-video-designer.mp4` }, { title: `Unlimited design requests`, desc: `Submit as many tasks as you need. No per-task billing, no cap, no waiting list. Just continuous output.`, video: `/assets/process/process-video-requests.mp4`, icon: `/assets/process/process-icon-requests.svg` }, { title: `Delivered in 4 days or less`, desc: `Every task is delivered within 4 days. Your roadmap keeps moving, your product keeps shipping.`, icon: `/assets/process/process-icon-delivery.svg` }, { title: `Embedded in your workflow`, desc: `Slack, Jira, Notion, Figma, Linear. We plug into whatever you use and work like part of your team.`, icon: `/assets/process/process-icon-embedded.svg` }, { title: `Flexible and predictable`, desc: `One flat subscription. No surprises, no contracts. Pause or cancel anytime. Scale design up or down as you grow.`, pricingCta: true, icon: `/assets/process/process-icon-budget.svg` }], ge = 33, _e = Array.from({ length: 5 }, (e2, t2) => Array.from({ length: 5 }, (e3, n2) => ({ r: t2, c: n2 }))).flat(), ve = /* @__PURE__ */ new Set([`0-1`, `0-2`, `1-0`, `1-4`, `2-1`, `3-0`, `3-3`, `4-0`, `4-4`]), ye = 200;
function be({ w: e2, h: t2 }) {
  let [n2, r2] = (0, o.useState)(0);
  (0, o.useEffect)(() => {
    let e3 = setInterval(() => {
      r2((e4) => e4 >= _e.length ? e4 : e4 + 1);
    }, ye);
    return () => clearInterval(e3);
  }, []), (0, o.useEffect)(() => {
    if (n2 < _e.length) return;
    let e3 = setTimeout(() => r2(0), 1800);
    return () => clearTimeout(e3);
  }, [n2]);
  let i2 = e2 * 0.13, a2 = t2 * 0.13, s2 = (e2 - i2 * 2) / 4, c2 = (t2 - a2 * 2) / 4, l2 = Math.round(e2 * 0.016), u2 = Math.round(e2 * 0.072);
  return (0, x.jsx)(`svg`, { width: e2, height: t2, style: { position: `absolute`, inset: 0 }, children: Array.from({ length: 5 }, (e3, t3) => Array.from({ length: 5 }, (e4, r3) => {
    let o2 = `${t3}-${r3}`, d2 = t3 * 5 + r3 < n2, f2 = ve.has(o2), p2 = i2 + r3 * s2, m2 = a2 + t3 * c2;
    return (0, x.jsxs)(`g`, { children: [!f2 && (0, x.jsx)(`circle`, { cx: p2, cy: m2, r: l2, fill: d2 ? `#ff692e` : `#C8BFB0`, style: { transition: `fill 0.15s ease` } }), f2 && !d2 && (0, x.jsx)(`circle`, { cx: p2, cy: m2, r: l2, fill: `#C8BFB0` }), f2 && d2 && (0, x.jsxs)(`g`, { transform: `translate(${p2 - u2 * 0.5}, ${m2 - u2 * 0.59}) scale(${u2 / 221})`, style: { opacity: 1, transition: `opacity 0.3s ease` }, children: [(0, x.jsx)(`path`, { d: `M104.014 260.23C46.6953 260.23 0.229736 213.764 0.229736 156.446L0.229736 104.554C57.5479 104.554 104.014 151.02 104.014 208.338V260.23Z`, fill: `#ff692e` }), (0, x.jsx)(`path`, { d: `M116.987 260.23V4.78771C116.987 2.56894 118.785 0.770275 121.004 0.770275C176.103 0.770275 220.77 45.4372 220.77 100.537V169.958C220.77 219.814 180.354 260.23 130.499 260.23H116.987Z`, fill: `#ff692e` })] })] }, o2);
  })) });
}
var xe = Array.from({ length: 12 }, (e2, t2) => `/assets/tools/tool-${t2}.png`);
function Se(e2, t2, n2, r2, i2, a2) {
  e2.beginPath(), e2.moveTo(t2 + a2, n2), e2.lineTo(t2 + r2 - a2, n2), e2.arcTo(t2 + r2, n2, t2 + r2, n2 + a2, a2), e2.lineTo(t2 + r2, n2 + i2 - a2), e2.arcTo(t2 + r2, n2 + i2, t2 + r2 - a2, n2 + i2, a2), e2.lineTo(t2 + a2, n2 + i2), e2.arcTo(t2, n2 + i2, t2, n2 + i2 - a2, a2), e2.lineTo(t2, n2 + a2), e2.arcTo(t2, n2, t2 + a2, n2, a2), e2.closePath();
}
function Ce({ velocityRef: e2, w: t2, h: n2 }) {
  let r2 = (0, o.useRef)(null);
  return (0, o.useEffect)(() => {
    let i2 = r2.current, a2 = i2.getContext(`2d`), o2 = Math.min(window.devicePixelRatio, 2);
    i2.width = Math.round(t2 * o2), i2.height = Math.round(n2 * o2), a2.scale(o2, o2);
    let s2 = Math.round(t2 * 0.165), c2 = s2 * 0.24, l2 = s2 * 0.13, u2 = 0.42, d2 = xe.map((e3) => {
      let t3 = new Image();
      return t3.src = e3, t3;
    }), f2 = Math.floor(t2 / (s2 + 8)), p2 = d2.map((e3, n3) => ({ img: e3, x: s2 / 2 + 8 + n3 % f2 * ((t2 - s2 - 16) / Math.max(f2 - 1, 1)), y: -s2 * 1.4 - Math.floor(n3 / f2) * (s2 + 6), vx: (Math.random() - 0.5) * 1.5, vy: 0.5 + Math.random() * 1.5 })), m2 = 0, h2 = () => {
      a2.clearRect(0, 0, t2, n2);
      let r3 = e2.current ?? 0;
      p2.forEach((e3) => {
        e3.vy += 0.28, e3.vx -= r3 * 0.1, e3.vx *= 0.94, e3.vy *= 0.988, e3.x += e3.vx, e3.y += e3.vy;
        let i3 = s2 / 2;
        e3.x - i3 < 0 && (e3.x = i3, e3.vx = Math.abs(e3.vx) * u2), e3.x + i3 > t2 && (e3.x = t2 - i3, e3.vx = -Math.abs(e3.vx) * u2), e3.y - i3 < 0 && (e3.y = i3, e3.vy = Math.abs(e3.vy) * u2), e3.y + i3 > n2 && (e3.y = n2 - i3, e3.vy = -Math.abs(e3.vy) * u2);
      });
      for (let e3 = 0; e3 < p2.length; e3++) for (let t3 = e3 + 1; t3 < p2.length; t3++) {
        let n3 = p2[e3], r4 = p2[t3], i3 = r4.x - n3.x, a3 = r4.y - n3.y, o3 = Math.sqrt(i3 * i3 + a3 * a3);
        if (o3 < s2 && o3 > 1e-3) {
          let e4 = i3 / o3, t4 = a3 / o3, c3 = s2 - o3;
          n3.x -= e4 * c3 / 2, n3.y -= t4 * c3 / 2, r4.x += e4 * c3 / 2, r4.y += t4 * c3 / 2;
          let l3 = (r4.vx - n3.vx) * e4 + (r4.vy - n3.vy) * t4;
          if (l3 < 0) {
            let i4 = l3 * (1 + u2) / 2;
            n3.vx += i4 * e4, n3.vy += i4 * t4, r4.vx -= i4 * e4, r4.vy -= i4 * t4;
          }
        }
      }
      p2.forEach((e3) => {
        let t3 = e3.x - s2 / 2, n3 = e3.y - s2 / 2;
        Se(a2, t3, n3, s2, s2, c2), a2.fillStyle = `#fff`, a2.fill(), e3.img.complete && e3.img.naturalWidth && (a2.save(), Se(a2, t3, n3, s2, s2, c2), a2.clip(), a2.drawImage(e3.img, t3 + l2, n3 + l2, s2 - l2 * 2, s2 - l2 * 2), a2.restore());
      }), m2 = requestAnimationFrame(h2);
    };
    return m2 = requestAnimationFrame(h2), () => cancelAnimationFrame(m2);
  }, [t2, n2, e2]), (0, x.jsx)(`canvas`, { ref: r2, style: { position: `absolute`, inset: 0, width: t2, height: n2 } });
}
function we({ title: e2, desc: t2, imgH: n2, video: r2, img: i2, cardW: a2, overlay: o2, pricingCta: s2, bgColor: c2, children: l2, videoRef: u2, imgRef: d2, bgRef: f2, icon: p2 }) {
  let m2 = W(), h2 = Math.round(n2 / 694 * 37), g2 = () => {
    let e3 = document.querySelector(`[data-section="pricing"]`);
    e3 && window.scrollTo({ top: e3.offsetTop, behavior: `smooth` });
  };
  return (0, x.jsxs)(`div`, { "data-cursor": `card`, "data-cursor-radius": h2, onClick: g2, style: { display: `flex`, flexDirection: `column`, gap: 20, width: a2, flexShrink: 0 }, children: [(0, x.jsxs)(`div`, { ref: f2, style: { position: `relative`, borderRadius: h2, height: n2, overflow: `hidden`, flexShrink: 0, background: c2 ?? `#0a0d12` }, children: [r2 && (0, x.jsx)(`video`, { ref: u2, autoPlay: true, loop: true, muted: true, playsInline: true, style: { position: `absolute`, inset: 0, width: `100%`, height: `100%`, objectFit: `cover`, transform: `scale(1.15)`, transition: `transform 1.8s cubic-bezier(.165,.84,.44,1)` }, children: (0, x.jsx)(`source`, { src: r2 }) }), i2 && (0, x.jsx)(`img`, { ref: d2, src: i2, alt: "", style: { position: `absolute`, inset: 0, width: `100%`, height: `100%`, objectFit: `cover` } }), o2 && !l2 && (0, x.jsx)(`div`, { style: { position: `absolute`, inset: 0, pointerEvents: `none`, background: `rgba(0,0,0,0.2)` } }), l2] }), (0, x.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: 8, maxWidth: 437 }, children: [(0, x.jsxs)(`div`, { style: { display: `flex`, gap: 9, alignItems: `center` }, children: [(0, x.jsx)(`img`, { src: p2 || re, alt: "", style: { width: 20, height: 20, objectFit: `contain`, flexShrink: 0 } }), (0, x.jsx)(`span`, { style: { fontFamily: I, fontWeight: 700, fontSize: m2 ? 15 : 20, color: `#140906`, letterSpacing: `-0.2px`, lineHeight: `normal` }, children: e2 })] }), (0, x.jsx)(`p`, { style: { fontFamily: I, fontWeight: 500, fontSize: m2 ? 13 : 18, color: `#140906`, letterSpacing: `-0.18px`, lineHeight: `1.4`, margin: 0 }, children: t2 })] })] });
}
function Te({ w: e2, h: t2, zoomProgRef: n2, velocityRef: r2, logoSvgRef: i2 }) {
  let a2 = (0, o.useRef)(null), s2 = (0, o.useRef)(null), c2 = (0, o.useRef)(null), l2 = i2 || c2, u2 = (0, o.useRef)(0), d2 = Math.min(e2, t2) * 0.38, f2 = Math.min(e2, t2) * 0.65;
  return (0, o.useEffect)(() => {
    let i3 = 0, o2 = () => {
      let c3 = 1 - (1 - (n2.current ?? 0)) ** 2, l3 = r2.current ?? 0;
      u2.current = Math.max(-18, Math.min(18, u2.current * 0.92 + l3 * 0.12));
      let d3 = u2.current;
      a2.current && (a2.current.style.transform = `translate(${-c3 * e2 * 0.55 + d3 * 1.2}px, ${-c3 * t2 * 0.35 + d3 * 0.4}px)`), s2.current && (s2.current.style.transform = `translate(${c3 * e2 * 0.55 - d3 * 0.8}px, ${c3 * t2 * 0.35 - d3 * 0.3}px)`), i3 = requestAnimationFrame(o2);
    };
    return i3 = requestAnimationFrame(o2), () => cancelAnimationFrame(i3);
  }, [e2, t2, d2, n2, r2]), (0, x.jsxs)(`div`, { style: { position: `absolute`, inset: 0, display: `flex`, alignItems: `center`, justifyContent: `center` }, children: [(0, x.jsxs)(`svg`, { ref: l2, viewBox: `0 0 221 261`, fill: `none`, style: { position: `absolute`, left: `50%`, top: `50%`, transform: `translate(-50%, -50%)`, width: d2, height: d2 * 1.18, willChange: `transform` }, children: [(0, x.jsx)(`path`, { d: `M104.014 260.23C46.6953 260.23 0.229736 213.764 0.229736 156.446L0.229736 104.554V104.554C57.5479 104.554 104.014 151.02 104.014 208.338V260.23V260.23Z`, fill: R }), (0, x.jsx)(`path`, { d: `M116.987 260.23V4.78771C116.987 2.56894 118.785 0.770275 121.004 0.770275V0.770275C176.103 0.770275 220.77 45.4372 220.77 100.537V169.958C220.77 219.814 180.354 260.23 130.499 260.23H116.987Z`, fill: R })] }), (0, x.jsx)(`img`, { ref: a2, src: `/assets/process/process-cloud-left.webp`, alt: "", style: { position: `absolute`, width: f2, height: `auto`, top: `8%`, left: `-5%`, pointerEvents: `none`, willChange: `transform` } }), (0, x.jsx)(`img`, { ref: s2, src: `/assets/process/process-cloud-right.webp`, alt: "", style: { position: `absolute`, width: f2, height: `auto`, bottom: `8%`, right: `-5%`, pointerEvents: `none`, willChange: `transform` } })] });
}
function Ee() {
  let e2 = W(), t2 = (0, o.useRef)(null), n2 = (0, o.useRef)(null), r2 = (0, o.useRef)(null), i2 = (0, o.useRef)(null), a2 = (0, o.useRef)([]), s2 = (0, o.useRef)([]), c2 = (0, o.useRef)([]), l2 = (0, o.useRef)(q.map(() => false)), u2 = (0, o.useRef)(0), d2 = (0, o.useRef)(null), f2 = (0, o.useRef)(null), p2 = (0, o.useRef)(0), m2 = (0, o.useRef)(0), h2 = (0, o.useRef)(null), [g2, _2] = (0, o.useState)(() => window.innerWidth), [v2, y2] = (0, o.useState)(() => window.innerHeight), b2 = e2 ? Math.min(320, g2 - 32) : 487, S2 = e2 ? 20 : 80, C2 = Math.max(240, Math.min(694, v2 - 112 - 260)), w2 = e2 ? Math.round(b2 * 1.35) : C2;
  return (0, o.useEffect)(() => {
    let e3 = 0.8, i3 = 0, o2 = 0, g3 = 0, v3 = () => {
      let _3 = t2.current, y3 = n2.current, b4 = r2.current;
      if (!_3 || !y3) {
        g3 = requestAnimationFrame(v3);
        return;
      }
      let x3 = window.innerWidth, S4 = window.innerHeight, C4 = _3.getBoundingClientRect(), w4 = _3.offsetHeight - S4, T3 = w4 * 4 / 5, E3 = w4 / 5, D3 = Math.max(0, -C4.top), O2 = D3 - o2;
      o2 = D3, p2.current = O2, D3 <= T3 ? i3 = Math.max(-28, Math.min(28, i3 * e3 + O2 * 0.3)) : i3 *= e3;
      let k2 = x3 <= 768, A2 = k2 ? Math.min(320, x3 - 32) : 487, j2 = k2 ? 20 : 80, M2 = j2 + A2 / 2, ee2 = j2 + (q.length - 1) * (A2 + ge) + A2 / 2, N2 = x3 / 2 - M2, te2 = x3 / 2 - ee2, ne2 = N2 + Math.min(1, D3 / T3) * (te2 - N2);
      y3.style.transform = `translateX(${ne2}px)`, a2.current.forEach((e4, t3) => {
        e4 && (e4.style.transform = `translateX(${i3 * (t3 + 1)}px)`);
      });
      let P2 = performance.now();
      if (s2.current.forEach((e4, t3) => {
        if (!(!e4 || l2.current[t3]) && e4.getBoundingClientRect().left < x3 * 0.75) {
          if (P2 < u2.current) return;
          l2.current[t3] = true, u2.current = P2 + 350, e4.style.opacity = `1`, e4.style.transform = `translateY(0px) skewY(0deg)`;
          let n3 = c2.current[t3];
          n3 && (n3.style.transform = `scale(1)`);
        }
      }), b4) {
        let e4 = Math.max(240, Math.min(694, S4 - 112 - 260)), t3 = k2 ? Math.round(e4 / 487 * A2) : e4, n3 = Math.max(0, Math.min(1, (D3 - T3) / E3));
        m2.current = n3;
        let r3 = 1 - (1 - n3) ** 3, i4 = Math.max(x3 / A2, S4 / Math.max(1, t3));
        b4.style.transform = `scale(${1 + (i4 - 1) * r3})`, b4.style.transformOrigin = `${x3 / 2}px ${112 + t3 / 2}px`;
        let a3 = d2.current;
        if (a3) {
          let e5 = A2 * i4, n4 = t3 * i4;
          a3.style.inset = "", a3.style.width = `${e5}px`, a3.style.height = `${n4}px`, a3.style.left = `${(A2 - e5) / 2}px`, a3.style.top = `${(t3 - n4) / 2}px`;
        }
        let o3 = h2.current;
        if (o3) {
          let e5 = Math.min(A2, t3) * 0.45;
          o3.style.width = `${e5}px`, o3.style.height = `${e5 * 1.18}px`, o3.style.transform = `translate(-50%, -50%)`;
          let n4 = D3 - w4, r4 = Math.max(0, Math.min(1, n4 / (S4 * 0.5)));
          o3.style.opacity = `${1 - r4}`;
        }
        let s3 = f2.current;
        if (s3) {
          let e5 = 1 - (1 - Math.max(0, (n3 - 0.4) / 0.6)) ** 3;
          s3.style.background = `color-mix(in srgb, #0a0d12 ${Math.round(e5 * 100)}%, #0a0d12)`;
        }
      }
      g3 = requestAnimationFrame(v3);
    };
    g3 = requestAnimationFrame(v3);
    let b3 = () => {
      _2(window.innerWidth), y2(window.innerHeight);
    };
    window.addEventListener(`resize`, b3, { passive: true });
    let x2 = 0, S3 = 0, C3 = 0, w3 = `unknown`, T2 = (e4) => {
      let n3 = t2.current;
      if (!n3) return;
      let r3 = n3.getBoundingClientRect(), i4 = (n3.offsetHeight - window.innerHeight) * 4 / 5, a3 = Math.max(0, -r3.top);
      a3 <= 0 || a3 >= i4 || (x2 = e4.touches[0].clientX, S3 = e4.touches[0].clientY, C3 = window.scrollY, w3 = `unknown`);
    }, E2 = (e4) => {
      let n3 = t2.current;
      if (!n3) return;
      let r3 = e4.touches[0].clientX - x2, i4 = e4.touches[0].clientY - S3;
      if (w3 === `unknown` && (Math.abs(r3) > 10 || Math.abs(i4) > 10) && (w3 = Math.abs(r3) > Math.abs(i4) ? `horizontal` : `vertical`), w3 !== `horizontal`) return;
      e4.cancelable && e4.preventDefault();
      let a3 = (n3.offsetHeight - window.innerHeight) * 4 / 5 / Math.max(1, G - 1) / (window.innerWidth * 0.7);
      window.scrollTo({ top: C3 - r3 * a3 });
    }, D2 = t2.current;
    return D2?.addEventListener(`touchstart`, T2, { passive: true }), D2?.addEventListener(`touchmove`, E2, { passive: false }), () => {
      cancelAnimationFrame(g3), window.removeEventListener(`resize`, b3), D2?.removeEventListener(`touchstart`, T2), D2?.removeEventListener(`touchmove`, E2);
    };
  }, []), (0, x.jsx)(`div`, { id: `how-it-works`, ref: t2, style: { position: `relative`, height: `500vh`, background: `#0a0d12` }, children: (0, x.jsx)(`div`, { style: { position: `sticky`, top: 0, height: `100vh`, overflow: `hidden`, display: `flex`, flexDirection: `column`, background: `#fff` }, children: (0, x.jsx)(`div`, { ref: r2, style: { display: `flex`, flexDirection: `column`, height: `100%` }, children: (0, x.jsx)(`div`, { ref: i2, style: { flex: 1, overflow: `hidden`, display: `flex`, alignItems: `center`, perspective: `1400px`, perspectiveOrigin: `50% 50%` }, children: (0, x.jsx)(`div`, { ref: n2, style: { display: `flex`, gap: ge, paddingLeft: S2, paddingRight: S2, willChange: `transform` }, children: q.map((e3, t3) => (0, x.jsx)(`div`, { ref: (e4) => {
    a2.current[t3] = e4;
  }, style: { flexShrink: 0 }, children: (0, x.jsx)(`div`, { ref: (e4) => {
    s2.current[t3] = e4;
  }, style: { opacity: 0, transform: `translateY(80px) skewY(3deg)`, transition: `opacity 0.6s ease, transform 1.2s cubic-bezier(.165,.84,.44,1)`, willChange: `transform, opacity` }, children: (0, x.jsxs)(we, { title: e3.title, desc: e3.desc, imgH: w2, video: e3.video, img: e3.img, icon: e3.icon, cardW: b2, overlay: !e3.img && !e3.video, pricingCta: e3.pricingCta, bgColor: t3 === 2 || t3 === 3 || t3 === 4 ? `#0a0d12` : void 0, videoRef: (e4) => {
    c2.current[t3] = e4;
  }, imgRef: t3 === q.length - 1 ? d2 : void 0, bgRef: t3 === q.length - 1 ? f2 : void 0, children: [t3 === 2 && (0, x.jsx)(be, { w: b2, h: w2 }), t3 === 3 && (0, x.jsx)(Ce, { velocityRef: p2, w: b2, h: w2 }), t3 === 4 && (0, x.jsx)(Te, { w: b2, h: w2, zoomProgRef: m2, velocityRef: p2, logoSvgRef: h2 })] }) }) }, t3)) }) }) }) }) });
}
var De = [{ icon: `/assets/process/process-icon-requests.svg`, sub: `Unlimited design requests`, mission: `Defined mission scope` }, { icon: `/assets/process/process-icon-content.svg`, sub: `1 dedicated senior designer`, mission: `1 dedicated senior designer` }, { icon: `/assets/process/process-icon-delivery.svg`, sub: `Deliveries within 4 days`, mission: `Continuous delivery` }, { icon: `/assets/process/process-icon-meeting.svg`, sub: `Weekly call`, mission: `Daily calls` }, { icon: `/assets/process/process-icon-budget.svg`, sub: `Monthly subscription`, mission: `Defined period`, missionIcon: `/assets/process/process-icon-period.svg` }, { icon: `/assets/process/process-icon-pause.svg`, sub: `Pause or cancel anytime`, mission: `Full design ownership`, missionIcon: `/assets/process/process-icon-ownership.svg` }];
function Oe({ title: e2, price: t2, description: n2, features: r2 = [], visual: i2 }) {
  let a2 = W(), [s2, c2] = (0, o.useState)(false), [l2, u2] = (0, o.useState)(false), d2 = (0, o.useRef)(null);
  (0, o.useEffect)(() => {
    if (!a2 || !d2.current) return;
    let e3 = new IntersectionObserver(([e4]) => u2(e4.isIntersecting), { threshold: 0.5 });
    return e3.observe(d2.current), () => e3.disconnect();
  }, [a2]);
  let f2 = a2 ? l2 : s2;
  return (0, x.jsxs)(`a`, { ref: d2, href: `#contact-form`, onClick: (e3) => {
    e3.preventDefault();
    let el = document.getElementById("contact-form");
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -90 });
      } else {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 90, behavior: "smooth" });
      }
    }
  }, "data-cursor-dot": true, onMouseEnter: () => c2(true), onMouseLeave: () => c2(false), style: { background: `#fff`, borderRadius: 24, overflow: `hidden`, display: `flex`, flexDirection: `column`, textDecoration: `none`, color: `inherit`, cursor: `pointer` }, children: [(0, x.jsx)(`div`, { style: { filter: f2 ? `none` : `grayscale(1)`, transition: `filter 0.4s ease` }, children: i2 }), (0, x.jsxs)(`div`, { style: { padding: a2 ? `24px 20px 32px` : `32px 32px 32px`, display: `flex`, flexDirection: `column`, gap: 20, flex: 1 }, children: [(0, x.jsxs)(`div`, { style: { display: `flex`, justifyContent: `space-between`, alignItems: `center`, flexWrap: `wrap`, gap: 8 }, children: [(0, x.jsx)(`h3`, { style: { fontFamily: F, fontWeight: 700, fontSize: a2 ? 24 : 30, lineHeight: `1.2`, color: V, margin: 0 }, children: e2 }), (0, x.jsx)(`span`, { style: { fontFamily: F, fontWeight: 700, fontSize: a2 ? 20 : 26, color: f2 ? R : V, letterSpacing: `-0.3px`, transition: `color 0.4s ease` }, children: t2 })] }), (0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 400, fontSize: 15, color: `#535862`, lineHeight: `24px`, margin: 0 }, children: n2 }), (0, x.jsx)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: 14 }, children: r2.map((e3, t3) => (0, x.jsxs)(`div`, { style: { display: `flex`, gap: 12, alignItems: `center`, color: `#535862` }, children: [(0, x.jsx)(`img`, { src: e3.icon, alt: "", style: { width: 20, height: 20, objectFit: `contain`, flexShrink: 0 } }), (0, x.jsx)(`span`, { style: { fontFamily: L, fontWeight: 400, fontSize: 14, color: V, lineHeight: `20px` }, children: e3.label })] }, t3)) }), (0, x.jsx)(`div`, { style: { width: `100%`, background: f2 ? R : V, borderRadius: 12, padding: `14px 24px`, fontFamily: L, fontWeight: 600, fontSize: 16, color: `#fff`, textAlign: `center`, marginTop: `auto`, transition: `background 0.4s ease` }, children: `Call Us` })] })] });
}
function FolderCardsSection() {
  let isMobile = W();
  let [openIndex, setOpenIndex] = (0, o.useState)(-1);
  let cardsData = [
    {
      id: "files",
      coverTitle: "CONFIDENTIAL FILES",
      coverSubtitle: "Internal use only",
      badge: "CLASSIFIED - LEVEL 01",
      paperTitle: "STUDIO CAPABILITIES",
      paperText: "This document is classified and intended solely for authorized personnel. High-converting Web Applications, Custom Motion Systems, and Bespoke Digital Experiences.",
      paperNote: "Access granted for client review."
    },
    {
      id: "strategy",
      coverTitle: "BRAND STRATEGY",
      coverSubtitle: "Restricted Access",
      badge: "RESTRICTED - LEVEL 02",
      paperTitle: "POSITIONING BLUEPRINT",
      paperText: "Strategic brand architecture and market positioning framework for local and scaling businesses. Designed for maximum digital conversion and lasting impact.",
      paperNote: "Strict confidentiality required."
    },
    {
      id: "system",
      coverTitle: "DESIGN SYSTEM",
      coverSubtitle: "Internal Use",
      badge: "TOP SECRET",
      paperTitle: "MOTION & TYPOGRAPHY",
      paperText: "Core design primitives, micro-interactions, fluid spatial grids, and physics-driven spring animations crafted for seamless user engagement.",
      paperNote: "...You really don't follow instructions, do you?"
    }
  ];
  return (0, x.jsx)("section", {
    id: "folder-cards",
    "data-section": "folder-cards",
    style: {
      width: "100%",
      background: typeof V !== "undefined" ? V : "#0b0c0e",
      overflow: "visible",
      margin: 0,
      padding: isMobile ? "40px 16px 56px" : "56px 24px 80px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box"
    },
    children: (0, x.jsx)("div", {
      style: {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "center" : "flex-end",
        justifyContent: "center",
        gap: isMobile ? "56px" : "32px",
        width: "100%",
        maxWidth: "1140px",
        margin: "0 auto",
        boxSizing: "border-box"
      },
      children: cardsData.map(function(card, idx) {
        let isOpen = openIndex === idx;
        return (0, x.jsxs)("div", {
          key: card.id,
          tabIndex: 0,
          role: "button",
          "aria-expanded": isOpen,
          onMouseEnter: function() {
            setOpenIndex(idx);
          },
          onMouseLeave: function() {
            setOpenIndex(-1);
          },
          onClick: function() {
            setOpenIndex(isOpen ? -1 : idx);
          },
          onFocus: function() {
            setOpenIndex(idx);
          },
          onBlur: function() {
            setOpenIndex(-1);
          },
          onKeyDown: function(e2) {
            if (e2.key === "Enter" || e2.key === " ") {
              e2.preventDefault();
              setOpenIndex(isOpen ? -1 : idx);
            }
          },
          style: {
            position: "relative",
            width: isMobile ? "100%" : "320px",
            maxWidth: "320px",
            height: "340px",
            paddingTop: "130px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            cursor: "pointer",
            perspective: "1200px",
            overflow: "visible",
            flexShrink: 0,
            outline: "none",
            WebkitTapHighlightColor: "transparent",
            userSelect: "none"
          },
          children: [
            (0, x.jsxs)("div", {
              style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "200px",
                background: "#3158aa",
                borderRadius: "16px",
                borderTopRightRadius: "4px",
                boxShadow: "0 12px 28px rgba(0, 0, 0, 0.35)",
                zIndex: 1,
                pointerEvents: "none"
              },
              children: [
                (0, x.jsx)("div", {
                  style: {
                    position: "absolute",
                    top: "-14px",
                    left: 0,
                    width: "110px",
                    height: "18px",
                    background: "#3158aa",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px"
                  }
                })
              ]
            }),
            (0, x.jsxs)("div", {
              style: {
                position: "absolute",
                bottom: "12px",
                left: "5%",
                width: "90%",
                height: "215px",
                background: "#fcfbf9",
                borderRadius: "12px",
                boxShadow: isOpen ? "0 16px 36px rgba(0, 0, 0, 0.3)" : "0 6px 18px rgba(0, 0, 0, 0.15)",
                zIndex: 2,
                transform: isOpen ? "translateY(-120px) rotate(-2.5deg) scale(1.02)" : "translateY(0px) rotate(0deg) scale(0.98)",
                transformOrigin: "50% 100%",
                transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease",
                padding: "18px 20px",
                boxSizing: "border-box",
                overflow: "hidden",
                pointerEvents: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "1px solid rgba(0, 0, 0, 0.06)"
              },
              children: [
                (0, x.jsxs)("div", {
                  children: [
                    (0, x.jsx)("div", {
                      style: {
                        display: "inline-block",
                        padding: "2px 7px",
                        border: "1.5px solid #d32f2f",
                        color: "#d32f2f",
                        fontWeight: "800",
                        fontSize: "9.5px",
                        letterSpacing: "1.2px",
                        textTransform: "uppercase",
                        borderRadius: "3px",
                        fontFamily: "monospace, monospace",
                        marginBottom: "8px",
                        transform: "rotate(-1.5deg)"
                      },
                      children: card.badge
                    }),
                    (0, x.jsx)("div", {
                      style: {
                        fontSize: "12.5px",
                        fontWeight: "700",
                        color: "#111111",
                        marginBottom: "6px",
                        fontFamily: "monospace, monospace",
                        letterSpacing: "0.5px"
                      },
                      children: card.paperTitle
                    }),
                    (0, x.jsx)("div", {
                      style: {
                        fontSize: "11px",
                        lineHeight: "1.45",
                        color: "#333333",
                        fontFamily: '"Geist", "Helvetica Neue", Arial, sans-serif'
                      },
                      children: card.paperText
                    })
                  ]
                }),
                (0, x.jsx)("div", {
                  style: {
                    fontSize: "10px",
                    color: "#777777",
                    fontStyle: "italic",
                    fontFamily: "monospace, monospace",
                    borderTop: "1px dashed #e0ddd7",
                    paddingTop: "6px"
                  },
                  children: card.paperNote
                })
              ]
            }),
            (0, x.jsxs)("div", {
              style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "190px",
                background: "linear-gradient(135deg, #336cdc 0%, #2859bd 100%)",
                borderRadius: "16px",
                boxShadow: isOpen ? "inset 0 2px 2px rgba(255, 255, 255, 0.35), 0 16px 36px rgba(0, 0, 0, 0.45)" : "inset 0 2px 2px rgba(255, 255, 255, 0.25), 0 8px 24px rgba(0, 0, 0, 0.35)",
                zIndex: 3,
                transformOrigin: "0% 50%",
                transform: isOpen ? "perspective(1000px) rotateY(-110deg) rotateX(2deg)" : "perspective(1000px) rotateY(0deg) rotateX(0deg)",
                transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "20px 22px",
                boxSizing: "border-box",
                pointerEvents: "none",
                overflow: "hidden"
              },
              children: [
                (0, x.jsx)("div", {
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))"
                  }
                }),
                (0, x.jsx)("div", {
                  style: {
                    color: "#ffffff",
                    fontFamily: "monospace, monospace",
                    fontWeight: "700",
                    fontSize: "13.5px",
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)"
                  },
                  children: card.coverTitle
                }),
                (0, x.jsx)("div", {
                  style: {
                    color: "rgba(255, 255, 255, 0.85)",
                    fontFamily: '"Geist", "Helvetica Neue", Arial, sans-serif',
                    fontSize: "12px",
                    marginTop: "3px",
                    fontWeight: "400"
                  },
                  children: card.coverSubtitle
                }),
                (0, x.jsx)("div", {
                  style: {
                    position: "absolute",
                    right: "16px",
                    top: "18px",
                    width: "22px",
                    height: "22px",
                    opacity: 0.65,
                    border: "1.5px solid rgba(255, 255, 255, 0.8)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    color: "#fff",
                    fontWeight: "bold"
                  },
                  children: "\u2605"
                })
              ]
            })
          ]
        });
      })
    })
  });
}
function AboutUsSection() {
  let isMobile = W();
  return (0, x.jsx)("section", {
    id: "about-us",
    "data-section": "about-us",
    style: {
      width: "100%",
      background: V,
      overflow: "hidden",
      margin: 0,
      padding: isMobile ? "24px 0 40px" : "32px 0 56px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    children: (0, x.jsx)("iframe", {
      src: "/assets/about-us/index.html",
      title: "About Us",
      scrolling: "no",
      style: {
        width: "100%",
        maxWidth: 1200,
        height: isMobile ? 900 : 880,
        border: "none",
        background: "transparent",
        display: "block"
      }
    })
  });
}
var Ae = [
  { q: "How much does it cost?", a: "Please reach out to us \u2014 we'll be happy to discuss it with you and find the right plan for your needs." },
  { q: "We already have a design team. Can you still help?", a: "Absolutely. We integrate into your existing workflow and tools. Jira, Notion, Figma, Slack, Linear. Think of us as an extension of your team, not a replacement." },
  { q: "Who will be my designer?", a: "A dedicated senior product designer with experience shipping products at startups and scale-ups. They own your project end to end. No handoffs, no junior rotations." },
  { q: "What can you design?", a: "Everything a founding designer would handle. Mobile apps, SaaS products, websites, landing pages, design systems, dashboards, and more. UX research, UI design, prototyping, all the way to developer handoff." },
  { q: "How fast can you start?", a: "Most engagements kick off within a few days. Book a call, tell us what you need, and we'll match you with the right designer." }
];
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
    budget: "\u20B925,000 \u2013 \u20B950,000",
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
    "\u20B910,000 \u2013 \u20B925,000",
    "\u20B925,000 \u2013 \u20B950,000",
    "\u20B950,000 \u2013 \u20B91,00,000",
    "\u20B91,00,000+"
  ];
  const timelines = [
    "ASAP (10-Day Sprint)",
    "Within 2-3 weeks",
    "1 Month",
    "Flexible"
  ];
  const handleChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
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
      setStep((prev) => prev + 1);
      setIsAnimating(false);
    }, 200);
  };
  const handleBack = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep((prev) => prev - 1);
      setIsAnimating(false);
    }, 200);
  };
  const handleSubmit = (e2) => {
    if (e2) e2.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        d("contact_form_submit", formData.service, "/contact-form");
      } catch (err) {
      }
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
      budget: "\u20B925,000 \u2013 \u20B950,000",
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
                  (0, x.jsx)("span", { style: { color: "rgba(255,255,255,0.2)", fontSize: 14 }, children: "\u2014" }),
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
                  (0, x.jsx)("span", { style: { color: "rgba(255,255,255,0.2)", fontSize: 14 }, children: "\u2014" }),
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
                      children: "Step 01 \u2014 About You"
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
                          onChange: (e2) => handleChange("fullName", e2.target.value),
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
                          onChange: (e2) => handleChange("email", e2.target.value),
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
                          onChange: (e2) => handleChange("phone", e2.target.value),
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
                          onChange: (e2) => handleChange("brandName", e2.target.value),
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
                            (0, x.jsx)("span", { style: { fontSize: 18 }, children: "\u2192" })
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
                      children: "Step 02 \u2014 Your Project"
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
                          children: services.map((srv) => {
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
                          onChange: (e2) => handleChange("description", e2.target.value),
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
                          children: ["Budget Range (INR \u20B9) ", (0, x.jsx)("span", { style: { color: R }, children: "*" })]
                        }),
                        (0, x.jsx)("div", {
                          style: {
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr",
                            gap: 10
                          },
                          children: budgets.map((bgt) => {
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
                            (0, x.jsx)("span", { style: { fontSize: 16 }, children: "\u2190" }),
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
                            (0, x.jsx)("span", { style: { fontSize: 18 }, children: "\u2192" })
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
                      children: "Step 03 \u2014 Let's Start"
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
                          children: timelines.map((tml) => {
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
                          onChange: (e2) => handleChange("notes", e2.target.value),
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
                            (0, x.jsx)("span", { style: { fontSize: 16 }, children: "\u2190" }),
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
                            (0, x.jsx)("span", { style: { fontSize: 18 }, children: "\u2192" })
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
function ke() {
  let e2 = W();
  let [openIdx, setOpenIdx] = (0, o.useState)(null);
  return (0, x.jsx)("section", {
    id: "faq",
    "data-section": "faq",
    style: { background: V, display: "flex", flexDirection: "column", alignItems: "center", padding: e2 ? "64px 16px" : "96px 32px" },
    children: (0, x.jsxs)("div", {
      style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 32, width: "100%", maxWidth: 860 },
      children: [
        (0, x.jsx)("h2", {
          style: { fontFamily: F, fontWeight: 700, fontSize: e2 ? 36 : "clamp(36px, 4vw, 56px)", lineHeight: 1.1, color: "#fff", margin: "0 0 16px", textAlign: "center" },
          children: "Frequently asked questions"
        }),
        (0, x.jsx)("div", {
          style: { display: "flex", flexDirection: "column", gap: 16, width: "100%", marginTop: 16 },
          children: Ae.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (0, x.jsxs)("div", {
              onClick: () => setOpenIdx(isOpen ? null : idx),
              style: { background: "#181d27", borderRadius: 16, padding: "24px 28px", cursor: "pointer", border: "1px solid rgba(255,255,255,0.08)", transition: "all 0.3s ease" },
              children: [
                (0, x.jsxs)("div", {
                  style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 },
                  children: [
                    (0, x.jsx)("h3", { style: { fontFamily: L, fontWeight: 600, fontSize: 18, color: "#fff", margin: 0 }, children: item.q }),
                    (0, x.jsx)("span", { style: { fontSize: 22, color: R, fontWeight: 300, transition: "transform 0.3s ease", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }, children: "+" })
                  ]
                }),
                isOpen && (0, x.jsx)("p", { style: { fontFamily: L, fontWeight: 400, fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: "24px", margin: "16px 0 0" }, children: item.a })
              ]
            }, idx);
          })
        })
      ]
    })
  });
}
function je({ tickets: e2 }) {
  let [t2, n2] = (0, o.useState)(0), [r2, i2] = (0, o.useState)(0), [a2, s2] = (0, o.useState)(false), [c2, l2] = (0, o.useState)(null), u2 = (0, o.useRef)(0), d2 = (0, o.useRef)(0), f2 = (0, o.useRef)(null), p2 = e2.length, m2 = () => {
    l2("left"), setTimeout(() => {
      n2((e3) => (e3 + 1) % p2), l2(null), i2(0);
    }, 300);
  }, h2 = () => {
    l2("right"), setTimeout(() => {
      n2((e3) => (e3 - 1 + p2) % p2), l2(null), i2(0);
    }, 300);
  }, g2 = (e3) => {
    u2.current = e3.touches[0].clientX, d2.current = e3.touches[0].clientY, f2.current = null, s2(true);
  }, _2 = (e3) => {
    if (!a2) return;
    let t3 = e3.touches[0].clientX - u2.current, n3 = e3.touches[0].clientY - d2.current;
    f2.current || (f2.current = Math.abs(t3) > Math.abs(n3) ? "h" : "v"), f2.current === "h" && (e3.preventDefault(), i2(t3));
  }, v2 = () => {
    if (s2(false), f2.current === "h") {
      if (r2 < -80) {
        m2();
        return;
      }
      if (r2 > 80) {
        h2();
        return;
      }
    }
    i2(0), f2.current = null;
  }, y2 = [-3, 2, -1.5], b2 = (t2 + 1) % p2;
  return (0, x.jsxs)("div", { style: { padding: "20px 0 16px" }, children: [(0, x.jsxs)("div", { style: { position: "relative", width: "100%", maxWidth: 300, margin: "0 auto", height: 360, touchAction: "pan-y" }, onTouchStart: g2, onTouchMove: _2, onTouchEnd: v2, children: [(0, x.jsx)("div", { style: { position: "absolute", inset: 0, background: "#f2f3f5", borderRadius: 20, padding: 10, transform: `rotate(${y2[b2 % y2.length]}deg) scale(0.95)`, opacity: 0.6 }, children: (0, x.jsx)("div", { style: { background: V, borderRadius: 14, padding: "28px 22px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 12 }, children: (0, x.jsx)("p", { style: { fontFamily: F, fontWeight: 700, fontSize: 18, lineHeight: 1.2, color: "#fff", margin: 0 }, children: e2[b2].title }) }) }), (0, x.jsx)("div", { style: { position: "absolute", inset: 0, background: "#f2f3f5", borderRadius: 20, padding: 10, transform: c2 ? `translateX(${c2 === "left" ? "-120%" : "120%"}) rotate(${c2 === "left" ? -15 : 15}deg)` : `translateX(${r2}px) rotate(${r2 * 0.05}deg)`, transition: a2 ? "none" : "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)", zIndex: 2 }, children: (0, x.jsxs)("div", { style: { background: V, borderRadius: 14, padding: "28px 22px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 12 }, children: [(0, x.jsx)("p", { style: { fontFamily: F, fontWeight: 700, fontSize: 18, lineHeight: 1.2, color: "#fff", margin: 0 }, children: e2[t2].title }), (0, x.jsx)("p", { style: { fontFamily: L, fontWeight: 400, fontSize: 13, lineHeight: "20px", color: "rgba(255,255,255,0.7)", margin: 0 }, children: e2[t2].request })] }) })] }), (0, x.jsxs)("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 20 }, children: [(0, x.jsx)("button", { "aria-label": "Previous", onClick: h2, style: { width: 40, height: 40, borderRadius: "50%", border: `1px solid ${U}`, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, children: (0, x.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: V, strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, x.jsx)("path", { d: "M19 12H5" }), (0, x.jsx)("polyline", { points: "12 19 5 12 12 5" })] }) }), (0, x.jsx)("div", { style: { display: "flex", gap: 8 }, children: e2.map((e3, n3) => (0, x.jsx)("div", { style: { width: n3 === t2 ? 20 : 8, height: 8, borderRadius: 4, background: n3 === t2 ? R : "#d5d7da", transition: "all 0.3s ease" } }, n3)) }), (0, x.jsx)("button", { "aria-label": "Next", onClick: m2, style: { width: 40, height: 40, borderRadius: "50%", border: `1px solid ${U}`, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, children: (0, x.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: V, strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, x.jsx)("path", { d: "M5 12h14" }), (0, x.jsx)("polyline", { points: "12 5 19 12 12 19" })] }) })] }), (0, x.jsx)("p", { style: { fontFamily: L, fontWeight: 500, fontSize: 12, color: H, textAlign: "center", margin: "12px 0 0", opacity: 0.6 }, children: "Swipe to see more" })] });
}
function Me({ t: e2, fromRect: t2, onClose: n2, skipEnter: r2 }) {
  let [i2, a2] = (0, o.useState)(r2 ? `fadein` : `enter`), [s2, c2] = (0, o.useState)(0), l2 = (0, o.useRef)(null), u2 = (0, o.useRef)(null), [f2, p2] = (0, o.useState)(false), m2 = W(), h2 = e2.useCase, g2 = m2 ? 0 : 32;
  (0, o.useEffect)(() => {
    d(`use_case_read`, h2.collab), document.body.style.overflow = `hidden`;
    let e3 = document.querySelector(`[data-main-nav]`);
    e3 && (e3.style.visibility = `hidden`, e3.style.pointerEvents = `none`), requestAnimationFrame(() => {
      requestAnimationFrame(() => a2(`open`));
    });
    let t3 = (e4) => {
      e4.key === `Escape` && _2();
    };
    return window.addEventListener(`keydown`, t3), () => {
      document.body.style.overflow = ``, e3 && (e3.style.visibility = ``, e3.style.pointerEvents = ``), window.removeEventListener(`keydown`, t3);
    };
  }, []), (0, o.useEffect)(() => {
    let e3 = u2.current, t3 = l2.current;
    if (!e3 || !t3) return;
    let n3 = new IntersectionObserver(([e4]) => {
      e4.isIntersecting && (p2(true), n3.disconnect());
    }, { root: t3, threshold: 0.2 });
    return n3.observe(e3), () => n3.disconnect();
  }, [i2]), (0, o.useEffect)(() => {
    if (i2 !== `open` && i2 !== `fadein`) return;
    let e3 = l2.current;
    if (!e3) return;
    let t3 = e3.querySelectorAll(`[data-parallax-gallery]`), n3 = e3.querySelectorAll(`[data-parallax-card]`);
    if (t3.length === 0 && n3.length === 0) return;
    let r3 = () => {
      let e4 = window.innerHeight;
      t3.forEach((t4) => {
        let n4 = t4.parentElement;
        if (!n4) return;
        let r4 = n4.getBoundingClientRect(), i3 = (e4 - r4.top) / (e4 + r4.height), a3 = (Math.max(0, Math.min(1, i3)) - 0.5) * -40;
        t4.style.transform = `scale(1.08) translateY(${a3}px)`;
      }), n3.forEach((t4) => {
        let n4 = t4.parentElement;
        if (!n4) return;
        let r4 = n4.getBoundingClientRect(), i3 = (e4 - r4.top) / (e4 + r4.height), a3 = (Math.max(0, Math.min(1, i3)) - 0.5) * 80, o2 = t4.getAttribute(`data-card-rotation`) || `0`;
        t4.style.transform = `translateY(${a3}px) rotate(${o2}deg)`;
      });
    };
    return e3.addEventListener(`scroll`, r3, { passive: true }), r3(), () => e3.removeEventListener(`scroll`, r3);
  }, [i2]);
  let _2 = () => {
    a2(`exit`), setTimeout(n2, 400);
  }, v2 = h2.sections.map((e3) => e3.heading), y2 = (e3) => {
    l2.current?.querySelector(`#uc-${e3}`)?.scrollIntoView({ behavior: `smooth` });
  }, b2 = t2 ?? new DOMRect(window.innerWidth / 2 - 140, window.innerHeight / 2 - 185, 280, 370), S2 = i2 === `open` || i2 === `fadein`, C2 = i2 === `exit`, w2 = i2 === `fadein`, T2 = S2 || C2 ? g2 : b2.top, E2 = S2 || C2 ? g2 : b2.left, D2 = S2 || C2 ? window.innerWidth - g2 * 2 : b2.width, O2 = S2 || C2 ? window.innerHeight - g2 * 2 : b2.height;
  return (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)(`div`, { onClick: _2, style: { position: `fixed`, inset: 0, zIndex: 10001, background: `rgba(10, 13, 18, 0.5)`, backdropFilter: S2 ? `blur(12px)` : `blur(0px)`, WebkitBackdropFilter: S2 ? `blur(12px)` : `blur(0px)`, opacity: C2 ? 0 : S2 ? 1 : 0, transition: C2 ? `opacity 0.35s ease` : `opacity 0.4s ease, backdrop-filter 0.5s ease` } }), (0, x.jsxs)(`div`, { style: { position: `fixed`, zIndex: 10002, top: T2, left: E2, width: D2, height: O2, borderRadius: m2 ? 0 : 24, overflow: `hidden`, background: `#f2f3f5`, isolation: `isolate`, boxShadow: `0 32px 80px rgba(0,0,0,0.25)`, opacity: C2 ? 0 : 1, transform: C2 ? `scale(0.97)` : `scale(1)`, transition: C2 ? `all 0.35s cubic-bezier(0.4, 0, 0.6, 1)` : `opacity 0.4s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)` }, children: [(0, x.jsxs)(`div`, { ref: l2, "data-lenis-prevent": true, onScroll: () => {
    l2.current && c2(l2.current.scrollTop);
  }, style: { width: `100%`, height: `100%`, overflowY: S2 ? `auto` : `hidden`, overflowX: `hidden` }, children: [(0, x.jsxs)(`div`, { style: { position: `relative`, width: `100%`, height: `50vh`, minHeight: 320, display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center`, overflow: `hidden` }, children: [(0, x.jsx)(`video`, { autoPlay: true, loop: true, muted: true, playsInline: true, style: { position: `absolute`, inset: `-20% 0`, width: `100%`, height: `140%`, objectFit: `cover`, transform: `translateY(${s2 * 0.3}px)`, willChange: `transform` }, children: (0, x.jsx)(`source`, { src: e2.video }) }), (0, x.jsx)(`div`, { style: { position: `absolute`, inset: `-20% 0`, width: `100%`, height: `140%`, background: `rgba(10,13,18,0.85)`, transform: `translateY(${s2 * 0.3}px)`, willChange: `transform` } }), (0, x.jsx)(`div`, { style: { position: `absolute`, inset: 0, zIndex: 1, display: `flex`, flexDirection: `column`, justifyContent: `center`, padding: m2 ? `48px 20px` : `64px 48px`, transform: `translateY(${s2 * -0.15}px)`, willChange: `transform` }, children: (0, x.jsx)(`h1`, { style: { fontFamily: F, fontWeight: 700, fontSize: m2 ? 28 : `clamp(28px, 4vw, 56px)`, lineHeight: 1.05, letterSpacing: `-0.02em`, color: `#fff`, margin: 0, textAlign: `left`, maxWidth: 700 }, children: h2.title }) })] }), (0, x.jsxs)(`div`, { style: { padding: m2 ? `24px 20px 0` : `32px 32px 0`, opacity: S2 && !w2 ? 1 : 0, transform: S2 && !w2 ? `translateY(0)` : `translateY(24px)`, transition: `opacity 0.5s ease 0.5s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s` }, children: [(0, x.jsxs)(`div`, { style: { maxWidth: 1100, margin: `0 auto`, padding: m2 ? `24px 0 48px` : `32px 0 80px`, display: `flex`, gap: 64 }, children: [!m2 && (0, x.jsxs)(`aside`, { style: { position: `sticky`, top: 32, alignSelf: `flex-start`, width: 240, flexShrink: 0, display: `flex`, flexDirection: `column`, gap: 0 }, children: [(0, x.jsxs)(`div`, { style: { borderBottom: `1px solid ${U}`, paddingBottom: 24, marginBottom: 24 }, children: [(0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 700, fontSize: 14, color: R, margin: `0 0 16px` }, children: `Table of contents` }), (0, x.jsx)(`div`, { "data-cursor-no-stick": true, style: { display: `flex`, flexDirection: `column`, gap: 8 }, children: v2.map((e3, t3) => (0, x.jsx)(`a`, { href: `#uc-${t3}`, style: { fontFamily: L, fontWeight: 500, fontSize: 15, color: V, textDecoration: `none`, lineHeight: `24px`, transition: `color 0.2s ease` }, onMouseEnter: (e4) => {
    e4.currentTarget.style.color = R;
  }, onMouseLeave: (e4) => {
    e4.currentTarget.style.color = V;
  }, onClick: (e4) => {
    e4.preventDefault(), y2(t3);
  }, children: e3 }, t3)) })] }), (0, x.jsxs)(`div`, { style: { borderBottom: `1px solid ${U}`, paddingBottom: 24, marginBottom: 24 }, children: [(0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 700, fontSize: 14, color: R, margin: `0 0 16px` }, children: `Table of contents` }), (0, x.jsx)(`div`, { "data-cursor-no-stick": true, style: { display: `flex`, flexDirection: `column`, gap: 8 }, children: v2.map((e3, t3) => (0, x.jsx)(`a`, { href: `#uc-${t3}`, style: { fontFamily: L, fontWeight: 500, fontSize: 15, color: V, textDecoration: `none`, lineHeight: `24px`, transition: `color 0.2s ease` }, onMouseEnter: (e4) => {
    e4.currentTarget.style.color = R;
  }, onMouseLeave: (e4) => {
    e4.currentTarget.style.color = V;
  }, onClick: (e4) => {
    e4.preventDefault(), y2(t3);
  }, children: e3 }, t3)) })] }), (0, x.jsxs)(`div`, { style: { borderBottom: `1px solid ${U}`, paddingBottom: 24, marginBottom: 24 }, children: [(0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 700, fontSize: 14, color: R, margin: `0 0 16px` }, children: `Designers` }), (0, x.jsx)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: 14 }, children: h2.designers.map((e3, t3) => (0, x.jsxs)(`div`, { style: { display: `flex`, alignItems: `center`, gap: 12 }, children: [(0, x.jsx)(`div`, { style: { width: 40, height: 40, borderRadius: `50%`, background: `linear-gradient(135deg, #e8d5c4, #c4a882)`, display: `flex`, alignItems: `center`, justifyContent: `center`, fontSize: 14, fontWeight: 700, color: `#fff`, overflow: `hidden` }, children: (0, x.jsx)(`img`, { src: e3.avatar || ie, alt: ``, style: { width: `100%`, height: `100%`, objectFit: `cover` } }) }), (0, x.jsxs)(`div`, { children: [(0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 600, fontSize: 14, color: V, margin: 0 }, children: e3.name }), (0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 400, fontSize: 12, color: H, margin: `1px 0 0` }, children: e3.role })] })] }, t3)) })] }), (0, x.jsxs)(`div`, { style: { marginBottom: 24 }, children: [(0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 600, fontSize: 14, color: R, margin: `0 0 12px` }, children: `Do you need design?` }), (0, x.jsx)(`a`, { href: `#contact-form`, onClick: (e3) => {
    e3.preventDefault();
    _2();
    let el = document.getElementById("contact-form");
    if (el) {
      setTimeout(() => {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -90 });
        } else {
          window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 90, behavior: "smooth" });
        }
      }, 400);
    }
  }, style: { background: R, borderRadius: 12, padding: `14px 0`, fontFamily: L, fontWeight: 600, fontSize: 14, color: `#fff`, textDecoration: `none`, textAlign: `center`, display: `block`, cursor: `pointer` }, children: `Call Us` })] })] }), (0, x.jsxs)(`article`, { style: { flex: 1, minWidth: 0 }, children: [h2.sections.map((t3, n3) => (0, x.jsxs)(o.Fragment, { children: [(0, x.jsxs)(`div`, { id: `uc-${n3}`, style: { marginBottom: 48 }, children: [(0, x.jsx)(`h2`, { style: { fontFamily: F, fontWeight: 700, fontSize: 28, lineHeight: 1.2, letterSpacing: `-0.3px`, color: V, margin: `0 0 16px` }, children: t3.heading }), (0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 400, fontSize: 16, lineHeight: `28px`, color: H, margin: 0 }, children: t3.body })] }), n3 === 2 && h2.gallery && h2.gallery.length > 0 && (0, x.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: 40, marginBottom: 48 }, children: [h2.gallery.map((e3, t4) => {
    let n4 = h2.tickets?.[t4];
    return (0, x.jsxs)(`div`, { style: { position: `relative` }, children: [(0, x.jsx)(`div`, { style: { borderRadius: 14, overflow: `hidden`, background: `#f2f3f5` }, children: (0, x.jsx)(`img`, { src: e3.src, alt: e3.caption, loading: `lazy`, "data-parallax-gallery": true, style: { width: `100%`, height: `auto`, display: `block`, willChange: `transform`, transform: `scale(1.08)` } }) }), n4 && !m2 && (() => {
      let e4 = t4 % 2 == 0, r3 = [3, -2.5, 2], i3 = r3[t4 % r3.length];
      return (0, x.jsx)(`div`, { "data-parallax-card": true, "data-card-rotation": i3, style: { position: `absolute`, bottom: -32, ...e4 ? { right: -20 } : { left: -20 }, width: 280, background: `#f2f3f5`, borderRadius: 20, padding: 8, willChange: `transform`, transform: `rotate(${i3}deg)`, zIndex: 2, boxShadow: `0 20px 60px rgba(0,0,0,0.18), 0 40px 100px rgba(0,0,0,0.12)` }, children: (0, x.jsxs)(`div`, { style: { background: V, borderRadius: 14, padding: `28px 22px`, display: `flex`, flexDirection: `column`, gap: 12, minHeight: 260 }, children: [(0, x.jsx)(`p`, { style: { fontFamily: F, fontWeight: 700, fontSize: 18, lineHeight: 1.2, color: `#fff`, margin: 0 }, children: n4.title }), (0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 400, fontSize: 13, lineHeight: `20px`, color: `rgba(255,255,255,0.7)`, margin: 0 }, children: n4.request })] }) });
    })()] }, t4);
  }), m2 && h2.tickets && h2.tickets.length > 0 && (0, x.jsxs)(`div`, { children: [(0, x.jsxs)(`p`, { style: { fontFamily: L, fontWeight: 500, fontSize: 16, color: V, margin: `0 0 20px`, lineHeight: `24px` }, children: [`More than `, (0, x.jsxs)(`strong`, { style: { fontWeight: 700 }, children: [e2.tasks, `+ tickets`] }), ` delivered, here are a few examples.`] }), (0, x.jsx)(je, { tickets: h2.tickets })] })] })] }, n3)), e2.quote && (0, x.jsxs)(`blockquote`, { style: { borderLeft: `3px solid ${R}`, padding: `16px 0 16px 24px`, margin: `32px 0` }, children: [(0, x.jsxs)(`p`, { style: { fontFamily: F, fontStyle: `italic`, fontWeight: 500, fontSize: 20, lineHeight: 1.5, color: V, margin: 0 }, children: [`\u201C`, e2.quote, `\u201D`] }), (0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 600, fontSize: 14, color: V, margin: `12px 0 0` }, children: e2.name }), (0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 400, fontSize: 13, color: H, margin: `2px 0 0` }, children: e2.role })] }), (0, x.jsxs)(`div`, { style: { display: `flex`, gap: 24, padding: `32px 0`, borderTop: `1px solid ${U}`, borderBottom: `1px solid ${U}`, margin: `32px 0` }, children: [[{ value: `${e2.months} months`, label: `Collaboration` }, { value: `${e2.tasks} tasks`, label: `Delivered` }].map((e3, t3) => (0, x.jsxs)(`div`, { style: { flex: 1 }, children: [(0, x.jsx)(`p`, { style: { fontFamily: I, fontWeight: 900, fontSize: 24, color: V, margin: 0 }, children: e3.value }), (0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 400, fontSize: 13, color: H, margin: `4px 0 0` }, children: e3.label })] }, t3)), (0, x.jsxs)(`div`, { style: { flex: 2 }, children: [(0, x.jsx)(`p`, { style: { fontFamily: I, fontWeight: 900, fontSize: 24, color: R, margin: 0 }, children: `Impact` }), (0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 400, fontSize: 13, color: H, margin: `4px 0 0` }, children: e2.impact })] })] })] })] }), m2 && (0, x.jsxs)(`div`, { style: { padding: `0 0 32px`, borderTop: `1px solid ${U}`, marginTop: 8, paddingTop: 24 }, children: [(0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 700, fontSize: 14, color: R, margin: `0 0 16px` }, children: `Designers` }), (0, x.jsx)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: 14 }, children: h2.designers.map((e3, t3) => (0, x.jsxs)(`div`, { style: { display: `flex`, alignItems: `center`, gap: 12 }, children: [(0, x.jsx)(`div`, { style: { width: 40, height: 40, borderRadius: `50%`, background: `linear-gradient(135deg, #e8d5c4, #c4a882)`, display: `flex`, alignItems: `center`, justifyContent: `center`, fontSize: 14, fontWeight: 700, color: `#fff`, overflow: `hidden` }, children: (0, x.jsx)(`img`, { src: e3.avatar || ie, alt: ``, style: { width: `100%`, height: `100%`, objectFit: `cover` } }) }), (0, x.jsxs)(`div`, { children: [(0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 600, fontSize: 14, color: V, margin: 0 }, children: e3.name }), (0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 400, fontSize: 12, color: H, margin: `1px 0 0` }, children: e3.role })] })] }, t3)) })] })] }), (0, x.jsx)(`div`, { ref: u2, style: { padding: `32px` }, children: (0, x.jsxs)(`div`, { style: { background: `#fff`, borderRadius: 24, padding: `64px 32px 0`, display: `flex`, flexDirection: `column`, alignItems: `center`, textAlign: `center`, overflow: `hidden` }, children: [(0, x.jsx)(`div`, { style: { overflow: `hidden`, paddingBottom: `0.15em`, marginBottom: `-0.15em` }, children: (0, x.jsx)(`p`, { style: { fontFamily: I, fontWeight: 700, fontSize: 13, color: R, textTransform: `uppercase`, letterSpacing: `0.1em`, margin: `0 0 16px`, transform: f2 ? `translateY(0)` : `translateY(110%)`, transition: `transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)`, transitionDelay: `0ms` }, children: `Ready to start?` }) }), (0, x.jsx)(`div`, { style: { overflow: `hidden`, paddingBottom: `0.15em`, marginBottom: `-0.15em` }, children: (0, x.jsxs)(`h2`, { style: { fontFamily: F, fontWeight: 700, fontSize: `clamp(32px, 5vw, 56px)`, lineHeight: 1.05, letterSpacing: `-0.02em`, color: V, margin: `0 0 24px`, maxWidth: 600, transform: f2 ? `translateY(0)` : `translateY(110%)`, transition: `transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)`, transitionDelay: `200ms` }, children: [`Get your first designs delivered on `, (() => {
    let e3 = /* @__PURE__ */ new Date(), t3 = 0;
    for (; t3 < 3; ) e3.setDate(e3.getDate() + 1), e3.getDay() !== 0 && e3.getDay() !== 6 && t3++;
    return e3.toLocaleDateString(`en-US`, { month: `long`, day: `numeric` });
  })(), `.`] }) }), (0, x.jsx)(`div`, { style: { overflow: `hidden`, paddingBottom: `0.15em`, marginBottom: `-0.15em` }, children: (0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 400, fontSize: 17, color: H, margin: `0 0 36px`, maxWidth: 440, lineHeight: `26px`, transform: f2 ? `translateY(0)` : `translateY(110%)`, transition: `transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)`, transitionDelay: `400ms` }, children: `No hiring. No onboarding. Just senior design, delivered fast.` }) }), (0, x.jsx)(`div`, { style: { overflow: `hidden`, paddingBottom: `0.15em`, marginBottom: `-0.15em` }, children: (0, x.jsx)(`a`, { href: `#contact-form`, onClick: (e3) => {
    e3.preventDefault();
    _2();
    let el = document.getElementById("contact-form");
    if (el) {
      setTimeout(() => {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -90 });
        } else {
          window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 90, behavior: "smooth" });
        }
      }, 400);
    }
  }, style: { background: R, borderRadius: 43, padding: `18px 40px`, fontFamily: L, fontWeight: 600, fontSize: 17, color: `#fff`, textDecoration: `none`, display: `inline-block`, marginBottom: 48, transform: f2 ? `translateY(0)` : `translateY(110%)`, transition: `transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)`, transitionDelay: `600ms`, cursor: `pointer` }, children: `Call Us` }) })] }) })] }), (0, x.jsx)(`button`, { "aria-label": `Close`, onClick: _2, style: { position: `absolute`, top: 20, right: 20, zIndex: 3, width: 44, height: 44, borderRadius: `50%`, background: `rgba(255,255,255,0.85)`, backdropFilter: `blur(12px)`, WebkitBackdropFilter: `blur(12px)`, border: `1px solid rgba(255,255,255,0.3)`, cursor: `pointer`, display: `flex`, alignItems: `center`, justifyContent: `center`, boxShadow: `0 2px 12px rgba(0,0,0,0.1)`, opacity: S2 && !w2 ? 1 : 0, transform: S2 && !w2 ? `scale(1)` : `scale(0.8)`, transition: `opacity 0.4s ease 0.7s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.7s` }, children: (0, x.jsxs)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 24 24`, fill: `none`, stroke: V, strokeWidth: `2.5`, strokeLinecap: `round`, strokeLinejoin: `round`, children: [(0, x.jsx)(`path`, { d: `M18 6L6 18` }), (0, x.jsx)(`path`, { d: `M6 6l12 12` })] }) })] })] });
}
var Ne = [{ x: 18, y: 22, rot: -12, from: `left`, at: 0 }, { x: 62, y: 20, rot: 10, from: `right`, at: 0.3 }, { x: 38, y: 42, rot: 2, from: `left`, at: 0.6 }];
function Pe({ t: e2, layout: t2, progress: n2, index: r2, onOpenUseCase: i2 }) {
  let [a2, s2] = (0, o.useState)(false), c2 = (0, o.useRef)(null), l2 = Math.max(0, Math.min(1, (n2 - t2.at) / 0.18)), u2 = 1 - (1 - l2) ** 3, d2 = t2.x + (1 - u2) * (t2.from === `left` ? -15 : 15), f2 = 120 + (t2.y - 120) * u2, p2 = 25 + (t2.rot - 25) * u2, m2 = Math.min(1, l2 * 3);
  return (0, x.jsxs)(`div`, { ref: c2, onMouseEnter: () => s2(true), onMouseLeave: () => s2(false), onClick: () => {
    let e3 = c2.current?.getBoundingClientRect();
    i2(e3 ?? new DOMRect(0, 0, 280, 370));
  }, style: { position: `absolute`, left: `${d2}%`, top: `${f2}%`, width: 280, height: 370, borderRadius: 16, boxShadow: `0 16px 48px rgba(0,0,0,0.4)`, transform: `rotate(${a2 ? 0 : p2}deg) scale(${a2 ? 1.06 : 1})`, opacity: m2, zIndex: a2 ? 20 : 10 + r2, transition: a2 ? `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), z-index 0s` : `transform 0.4s ease`, cursor: `pointer` }, children: [(0, x.jsxs)(`div`, { style: { width: `100%`, height: `100%`, borderRadius: 16, overflow: `hidden`, background: `#1c2230`, position: `relative` }, children: [(0, x.jsx)(`video`, { autoPlay: true, loop: true, muted: true, playsInline: true, style: { width: `100%`, height: `100%`, objectFit: `cover` }, children: (0, x.jsx)(`source`, { src: e2.video }) }), (0, x.jsx)(`div`, { style: { position: `absolute`, inset: 0, background: `rgba(10,13,18,0.9)`, display: `flex`, flexDirection: `column`, justifyContent: `space-between`, padding: `24px 24px 16px`, opacity: a2 ? 1 : 0, transition: `opacity 0.3s ease`, pointerEvents: `none` }, children: (0, x.jsxs)(`div`, { children: [e2.logo && (0, x.jsx)(`img`, { src: e2.logo, alt: ``, style: { height: e2.logoHeight || 24, width: `auto`, marginBottom: 12, display: `block`, objectFit: `contain` } }), (0, x.jsx)(`p`, { style: { fontFamily: F, fontWeight: 700, fontSize: 14, color: `#fff`, lineHeight: `21px`, margin: 0 }, children: e2.useCase.title })] }) }), (0, x.jsxs)(`div`, { style: { position: `absolute`, bottom: 16, left: 16, right: 16, background: R, borderRadius: 12, padding: `12px 0`, fontFamily: L, fontWeight: 600, fontSize: 13, color: `#fff`, display: `flex`, alignItems: `center`, justifyContent: `center`, gap: 6, pointerEvents: `none` }, children: [`Read use case`, (0, x.jsxs)(`svg`, { width: `12`, height: `12`, viewBox: `0 0 24 24`, fill: `none`, stroke: `#fff`, strokeWidth: `2.5`, strokeLinecap: `round`, strokeLinejoin: `round`, children: [(0, x.jsx)(`path`, { d: `M5 12h14` }), (0, x.jsx)(`polyline`, { points: `12 5 19 12 12 19` })] })] })] }), [{ label: `Months`, value: `${e2.months}`, rot: -5, delay: 0 }, { label: `Tasks delivered`, value: `${e2.tasks}`, rot: 3, delay: 1 }, { label: `Impact`, value: e2.impact, rot: -2, delay: 2 }].map((e3, t3) => (0, x.jsx)(`div`, { style: { position: `absolute`, right: -180, top: t3 * 90 + 20, width: 160, background: `#fff`, borderRadius: 14, padding: `14px 16px`, boxShadow: `0 12px 32px rgba(0,0,0,0.35)`, opacity: a2 ? 1 : 0, transform: a2 ? `translateY(0) rotate(${e3.rot}deg) scale(1)` : `translateY(${40 + t3 * 20}px) rotate(0deg) scale(0.85)`, transition: `opacity 0.3s ease ${t3 * 0.07}s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${t3 * 0.07}s`, pointerEvents: `none` }, children: e3.label === `Impact` ? (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)(`div`, { style: { width: 8, height: 8, borderRadius: `50%`, background: R, marginBottom: 8 } }), (0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 600, fontSize: 12, color: V, margin: 0, lineHeight: 1.4 }, children: e3.value })] }) : (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)(`p`, { style: { fontFamily: I, fontWeight: 900, fontSize: 26, color: V, margin: 0, lineHeight: 1 }, children: e3.value }), (0, x.jsx)(`p`, { style: { fontFamily: L, fontWeight: 500, fontSize: 11, color: H, margin: `4px 0 0`, textTransform: `uppercase`, letterSpacing: `0.05em` }, children: e3.label })] }) }, t3))] });
}
function Fe() {
  let isMobile = W();
  return (0, x.jsxs)("section", {
    id: "categories",
    "data-section": "clientstories",
    style: {
      position: "relative",
      width: "100%",
      background: V,
      overflow: "hidden",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    children: [
      /* Small Appropriate Section Header */
      (0, x.jsxs)("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          paddingTop: isMobile ? 64 : 88,
          paddingBottom: 16,
          maxWidth: 768,
          margin: "0 auto",
          textAlign: "center",
          boxSizing: "border-box",
          paddingLeft: 16,
          paddingRight: 16
        },
        children: [
          (0, x.jsx)("span", {
            style: {
              fontFamily: I,
              fontWeight: 700,
              fontSize: 13,
              color: R,
              textTransform: "uppercase",
              letterSpacing: "0.08em"
            },
            children: "Categories"
          }),
          (0, x.jsx)("h2", {
            style: {
              fontFamily: F,
              fontWeight: 700,
              fontSize: isMobile ? 28 : 36,
              lineHeight: "44px",
              letterSpacing: "-0.72px",
              color: "#ffffff",
              margin: 0
            },
            children: "Tailored for every industry."
          }),
          (0, x.jsx)("p", {
            style: {
              fontFamily: L,
              fontWeight: 400,
              fontSize: isMobile ? 16 : 18,
              color: "rgba(255, 255, 255, 0.5)",
              lineHeight: "28px",
              margin: 0
            },
            children: "Explore our specialized design categories and digital experiences."
          })
        ]
      }),
      /* Fluid Carousel Iframe */
      (0, x.jsx)("div", {
        style: {
          width: "100%",
          height: isMobile ? "620px" : "720px",
          position: "relative",
          background: "transparent"
        },
        children: (0, x.jsx)("iframe", {
          src: "/assets/category-carousel/index.html",
          title: "Category Section Fluid Carousel",
          scrolling: "no",
          "data-interactive": "true",
          style: {
            width: "100%",
            height: "100%",
            border: "none",
            background: "transparent",
            display: "block"
          }
        })
      })
    ]
  });
}
function J({ onBack }) {
  return (0, x.jsxs)("div", {
    style: { position: "fixed", inset: 0, zIndex: 99999, background: "#0d0d0d", display: "flex", flexDirection: "column" },
    children: [
      (0, x.jsxs)("div", {
        style: { position: "absolute", top: 20, left: 24, right: 24, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center", pointerEvents: "auto" },
        children: [
          (0, x.jsxs)("button", {
            onClick: onBack,
            style: { display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", padding: "10px 22px", borderRadius: 30, fontSize: 14, fontFamily: L, fontWeight: 500, cursor: "pointer", transition: "all 0.2s ease" },
            children: ["\u2190 Back to Home"]
          }),
          (0, x.jsx)("span", { style: { fontFamily: F, fontWeight: 700, fontSize: 22, color: "#fff", letterSpacing: "-0.02em" }, children: "All Works" })
        ]
      }),
      (0, x.jsx)("iframe", {
        src: "/assets/all-works-carousel/index.html",
        title: "All Works 3D Spiral Carousel",
        style: { width: "100%", height: "100%", border: "none", background: "#0d0d0d", display: "block" }
      })
    ]
  });
}
function Re({ isMobile: e2 }) {
  let [t2, n2] = (0, o.useState)(false);
  let [r2, i2] = (0, o.useState)(false);
  let [a2, s2] = (0, o.useState)({ x: 0, y: 0 });
  let c2 = (0, o.useRef)(null);
  let l2 = () => {
    try {
      navigator.clipboard.writeText("hi@interkace.studio");
    } catch (err) {
    }
    n2(true);
    setTimeout(() => n2(false), 2e3);
  };
  let u2 = (e3) => {
    let t3 = c2.current?.getBoundingClientRect();
    t3 && s2({ x: e3.clientX - t3.left, y: e3.clientY - t3.top });
  };
  return e2 ? (0, x.jsxs)("div", {
    onClick: l2,
    style: { width: "100%", paddingTop: 24, paddingLeft: 16, paddingRight: 16, boxSizing: "border-box", position: "relative", cursor: "pointer" },
    children: [
      (0, x.jsx)("svg", {
        viewBox: "0 0 900 85",
        preserveAspectRatio: "xMidYMid meet",
        style: { width: "100%", height: "auto", display: "block" },
        children: (0, x.jsx)("text", {
          x: "450",
          y: "70",
          textAnchor: "middle",
          style: {
            fontFamily: F,
            fontWeight: 800,
            fontSize: 76,
            letterSpacing: "-0.04em",
            fill: t2 ? R : "rgba(0,0,0,0.06)",
            transition: "fill 0.3s ease"
          },
          children: "hi@interkace.studio"
        })
      }),
      (0, x.jsxs)("div", {
        style: {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: R,
          borderRadius: 100,
          padding: "8px 20px",
          display: "flex",
          alignItems: "center",
          gap: 6,
          opacity: t2 ? 1 : 0,
          transition: "opacity 0.25s ease",
          pointerEvents: "none"
        },
        children: [
          (0, x.jsx)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#fff",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0, x.jsx)("polyline", { points: "20 6 9 17 4 12" })
          }),
          (0, x.jsx)("span", {
            style: { fontFamily: L, fontWeight: 600, fontSize: 13, color: "#fff", whiteSpace: "nowrap" },
            children: "Email copied"
          })
        ]
      })
    ]
  }) : (0, x.jsxs)(x.Fragment, {
    children: [
      (0, x.jsx)("style", {
        children: `
          @keyframes copyTooltipIn {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          }
        `
      }),
      (0, x.jsxs)("div", {
        ref: c2,
        "data-cursor-no-stick": true,
        "data-cursor-hide": true,
        onClick: l2,
        onMouseEnter: () => i2(true),
        onMouseLeave: () => {
          i2(false);
          n2(false);
        },
        onMouseMove: u2,
        style: { width: "100%", paddingTop: 40, paddingLeft: 40, paddingRight: 40, boxSizing: "border-box", cursor: "pointer", position: "relative" },
        children: [
          (0, x.jsx)("svg", {
            viewBox: "0 0 900 85",
            preserveAspectRatio: "xMidYMid meet",
            style: { width: "100%", height: "auto", display: "block" },
            children: (0, x.jsx)("text", {
              x: "450",
              y: "70",
              textAnchor: "middle",
              style: {
                fontFamily: F,
                fontWeight: 800,
                fontSize: 80,
                letterSpacing: "-0.04em",
                fill: t2 ? R : "rgba(0,0,0,0.06)",
                transition: "fill 0.3s ease"
              },
              children: "hi@interkace.studio"
            })
          }),
          r2 && (() => {
            let e3 = (c2.current?.offsetWidth ?? 1) / 2;
            let rot = (a2.x - e3) / e3 * 12;
            return (0, x.jsxs)("div", {
              style: {
                position: "absolute",
                left: a2.x,
                top: a2.y,
                transform: `translate(-50%, -50%) rotate(${rot}deg)`,
                background: t2 ? R : V,
                borderRadius: 100,
                padding: "10px 20px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                pointerEvents: "none",
                animation: "copyTooltipIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                transition: "background 0.2s ease",
                zIndex: 100
              },
              children: [
                (0, x.jsx)("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: t2 ? (0, x.jsx)("polyline", { points: "20 6 9 17 4 12" }) : (0, x.jsxs)(x.Fragment, {
                    children: [
                      (0, x.jsx)("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
                      (0, x.jsx)("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
                    ]
                  })
                }),
                (0, x.jsx)("span", {
                  style: { fontFamily: L, fontWeight: 600, fontSize: 13, color: "#fff", whiteSpace: "nowrap" },
                  children: t2 ? "Copied!" : "Copy our email"
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
  let [hovered, setHovered] = (0, o.useState)(false);
  return (0, x.jsx)("a", {
    href: href || "#",
    onClick: onClick ? (e2) => {
      e2.preventDefault();
      onClick(e2);
    } : (e2) => {
      if (href && href.startsWith("#") && href.length > 1) {
        e2.preventDefault();
        let targetId = href.slice(1);
        let el = document.getElementById(targetId) || document.querySelector(`[data-section="${targetId}"]`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      fontFamily: L,
      fontWeight: 600,
      fontSize: isMobile ? 15 : 17,
      color: hovered ? R : V,
      textDecoration: "none",
      lineHeight: "1.6",
      transition: "color 0.2s ease",
      cursor: "pointer"
    },
    children
  });
}
function Ve({ isMobile: e2 }) {
  let isMobile = e2 !== void 0 ? e2 : W();
  let r2 = { fontFamily: I, fontWeight: 500, fontSize: 13, color: H, letterSpacing: "0.5px", textTransform: "uppercase", margin: "0 0 16px" };
  return (0, x.jsxs)("footer", {
    id: "footer",
    "data-section": "footer",
    "data-cursor-no-stick": true,
    style: {
      background: "#f2f3f5",
      padding: isMobile ? "24px 16px" : "40px 40px 48px",
      display: "flex",
      flexDirection: "column",
      gap: 0,
      width: "100%",
      boxSizing: "border-box"
    },
    children: [
      (0, x.jsxs)("div", {
        style: {
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 20 : 24,
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 2
        },
        children: [
          /* Left Orange Gradient Brand Card */
          !isMobile && (0, x.jsxs)("div", {
            style: {
              flex: "0 0 380px",
              background: `linear-gradient(165deg, ${R} 0%, #ff692e 100%)`,
              borderRadius: 24,
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 320,
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 12px 32px rgba(237, 77, 12, 0.15)"
            },
            children: [
              (0, x.jsxs)("div", {
                style: { display: "flex", alignItems: "center", gap: 10 },
                children: [
                  (0, x.jsx)("img", {
                    src: "/assets/brand/interkace-script-logo.png",
                    alt: "Interkace",
                    style: { height: 28, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }
                  })
                ]
              }),
              (0, x.jsxs)("div", {
                children: [
                  (0, x.jsx)("p", {
                    style: { fontFamily: L, fontWeight: 600, fontSize: 18, color: "#fff", margin: 0, lineHeight: 1.4 },
                    children: "Senior product design,"
                  }),
                  (0, x.jsx)("p", {
                    style: { fontFamily: L, fontWeight: 400, fontSize: 18, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.4 },
                    children: "on demand."
                  })
                ]
              })
            ]
          }),
          /* Right White Card */
          (0, x.jsxs)("div", {
            style: {
              flex: 1,
              background: "#fff",
              borderRadius: 24,
              padding: isMobile ? "28px 24px" : "40px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              minHeight: isMobile ? "auto" : 320,
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.04)"
            },
            children: [
              !isMobile && (0, x.jsx)("div", {
                style: {
                  position: "absolute",
                  top: -12,
                  right: -12,
                  width: 96,
                  height: 96,
                  background: `linear-gradient(135deg, ${R}, #ff692e)`,
                  borderRadius: 22,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: "rotate(12deg)",
                  boxShadow: "0 8px 32px rgba(255,105,46,0.3)",
                  overflow: "hidden"
                },
                children: (0, x.jsx)("img", {
                  src: k,
                  alt: "",
                  style: { width: 36, height: 42, objectFit: "contain", filter: "brightness(0) invert(1)" }
                })
              }),
              (0, x.jsxs)("div", {
                style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 32 : 64 },
                children: [
                  (0, x.jsxs)("div", {
                    children: [
                      (0, x.jsx)("p", { style: r2, children: "Links" }),
                      (0, x.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", gap: 8 },
                        children: [
                          (0, x.jsx)(FooterLink, { href: "#how-it-works", isMobile, children: "How it works" }),
                          (0, x.jsx)(FooterLink, { href: "#clientstories", isMobile, children: "Categories" }),
                          (0, x.jsx)(FooterLink, { href: "#faq", isMobile, children: "FAQ" })
                        ]
                      })
                    ]
                  }),
                  (0, x.jsxs)("div", {
                    children: [
                      (0, x.jsx)("p", { style: r2, children: "Company" }),
                      (0, x.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", gap: 8 },
                        children: [
                          (0, x.jsx)(FooterLink, { href: "#contact-form", isMobile, onClick: (e3) => {
                            e3.preventDefault();
                            let el = document.getElementById("contact-form");
                            if (el) {
                              if (window.__lenis) {
                                window.__lenis.scrollTo(el, { offset: -90 });
                              } else {
                                window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 90, behavior: "smooth" });
                              }
                            }
                          }, children: "Contact" }),
                          (0, x.jsx)(FooterLink, { href: "#", isMobile, children: "Privacy Policy" }),
                          (0, x.jsx)(FooterLink, { href: "#", isMobile, children: "Terms" })
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, x.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: isMobile ? "flex-start" : "center",
                  justifyContent: "space-between",
                  gap: 16,
                  marginTop: isMobile ? 32 : 0,
                  paddingTop: 16,
                  borderTop: "1px solid #F2F4F7"
                },
                children: [
                  (0, x.jsx)("p", {
                    style: { fontFamily: L, fontWeight: 400, fontSize: 13, color: H, margin: 0 },
                    children: "\xA9 2026 INTERKACE STUDIO. All rights reserved."
                  }),
                  (0, x.jsx)("a", {
                    href: "#contact-form",
                    onClick: (e3) => {
                      e3.preventDefault();
                      let el = document.getElementById("contact-form");
                      if (el) {
                        if (window.__lenis) {
                          window.__lenis.scrollTo(el, { offset: -90 });
                        } else {
                          window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 90, behavior: "smooth" });
                        }
                      }
                    },
                    style: {
                      background: V,
                      borderRadius: 100,
                      padding: "12px 28px",
                      fontFamily: L,
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#fff",
                      textDecoration: "none",
                      display: "inline-block",
                      cursor: "pointer",
                      transition: "transform 0.2s ease, opacity 0.2s ease"
                    },
                    children: "Call Us"
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
function He({ onAlpin, onAcademy, navReady = true, aboveOverlay = true, navExiting = false }) {
  let [s2, c2] = (0, o.useState)(0);
  let l2 = (0, o.useRef)(null);
  let a2 = (0, o.useRef)(null);
  (0, o.useEffect)(() => {
    let e2 = () => d("page_view", "landing");
    "requestIdleCallback" in window ? requestIdleCallback(e2) : setTimeout(e2, 1);
  }, []);
  (0, o.useEffect)(() => {
    let updateFooterHeight = () => {
      let footerEl = a2.current;
      if (footerEl) {
        c2(Math.max(580, footerEl.offsetHeight));
      }
    };
    updateFooterHeight();
    window.addEventListener("resize", updateFooterHeight);
    return () => window.removeEventListener("resize", updateFooterHeight);
  }, []);
  (0, o.useEffect)(() => {
    let scrollHandler = () => {
      let contentWrapper = l2.current;
      let footerEl = a2.current;
      if (!contentWrapper || !footerEl) return;
      let contentRect = contentWrapper.getBoundingClientRect();
      let footerHeight = footerEl.offsetHeight;
      let distFromBottom = window.innerHeight - contentRect.bottom;
      let progress = Math.max(0, Math.min(1, distFromBottom / (footerHeight * 0.6)));
      contentWrapper.style.marginLeft = `${progress * 10}px`;
      contentWrapper.style.marginRight = `${progress * 10}px`;
      let faqEl = document.getElementById("faq");
      if (faqEl) {
        faqEl.style.borderBottomLeftRadius = `${progress * 42}px`;
        faqEl.style.borderBottomRightRadius = `${progress * 42}px`;
        faqEl.style.boxShadow = `0 ${progress * 24}px ${progress * 48}px rgba(0, 0, 0, 0.4)`;
      }
    };
    window.addEventListener("scroll", scrollHandler, { passive: true });
    scrollHandler();
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  return (0, x.jsxs)("div", {
    style: { fontFamily: L, overflowX: "clip", background: "#000000" },
    children: [
      (0, x.jsx)(de, { externalMounted: navReady, aboveOverlay, onAcademy, exiting: navExiting }),
      (0, x.jsxs)("div", {
        ref: l2,
        style: {
          position: "relative",
          zIndex: 1,
          marginBottom: s2,
          background: "#000000",
          transition: "margin-left 0.1s ease-out, margin-right 0.1s ease-out"
        },
        children: [
          (0, x.jsx)("div", {
            style: { position: "relative", zIndex: 1, background: "#000000" },
            children: (0, x.jsx)(pe, { navReady, aboveOverlay })
          }),
          (0, x.jsxs)("div", {
            style: { position: "relative", zIndex: 10, background: "#ffffff" },
            children: [
              (0, x.jsx)(he, {}),
              (0, x.jsx)(Ee, {}),
              (0, x.jsx)(Fe, {}),
              (0, x.jsx)(AboutUsSection, {}),
              (0, x.jsx)(FolderCardsSection, {}),
              (0, x.jsx)(ContactFormSection, {}),
              (0, x.jsx)(ke, {})
            ]
          })
        ]
      }),
      (0, x.jsx)("div", {
        ref: a2,
        style: { position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 0 },
        children: (0, x.jsx)(Ve, {})
      })
    ]
  });
}
function ct() {
  let [e2, t2] = (0, o.useState)(() => window.location.hash === "#admin" ? "backoffice" : "landing"), [n2, r2] = (0, o.useState)(null), [i2, a2] = (0, o.useState)(null), [s2, c2] = (0, o.useState)(false), [l2, u2] = (0, o.useState)(false), d2 = ["alpa", "alpin-capital", "winter"].includes(window.location.hash.slice(1)), [f2, p2] = (0, o.useState)(true), [m2, h2] = (0, o.useState)(true), [g2, _2] = (0, o.useState)(1), [v2, y2] = (0, o.useState)(true), [b2, S2] = (0, o.useState)(false), C2 = { name: "Sophie Marchand", role: "Directrice cr\xE9ative" }, w2 = (e3) => {
    S2(true), setTimeout(() => {
      S2(false), e3 === "landing" && f2 && (y2(false), requestAnimationFrame(() => requestAnimationFrame(() => y2(true)))), t2(e3);
    }, 500);
  };
  (0, o.useEffect)(() => {
    let e3 = (e4) => {
      e4.ctrlKey && e4.shiftKey && e4.key === "B" && (e4.preventDefault(), t2("backoffice"));
    };
    return window.addEventListener("keydown", e3), () => window.removeEventListener("keydown", e3);
  }, []), (0, o.useEffect)(() => {
    let e3 = ["/assets/hero/hero-phone-mockup.webp", "/assets/hero/logo-symbol.svg", "/assets/hero/status-cellular.svg", "/assets/hero/status-wifi.svg", "/assets/hero/status-battery.svg", "/assets/brand/interkace-script-logo.png"], t3 = 0, n3 = e3.length, r3 = () => {
      t3++, _2(t3 / n3), t3 >= n3 && (setTimeout(() => h2(true), 100), ["/assets/brand/interkace-script-logo.png"].forEach((e4) => {
        let t4 = document.createElement("video");
        t4.preload = "auto", t4.src = e4, t4.load();
      }), [].forEach((e4) => {
        let t4 = new Image();
        t4.src = e4;
      }));
    };
    e3.forEach((e4) => {
      let t4 = new Image();
      t4.onload = r3, t4.onerror = r3, t4.src = e4;
    });
    let i3 = setTimeout(() => {
      _2(1), setTimeout(() => h2(true), 100);
    }, 4e3);
    return () => clearTimeout(i3);
  }, []);
  var Z = [];
  let pendingCount = Z.filter((e3) => e3.status === "En cours").length, deliveredCount = Z.filter((e3) => e3.status === "Livr\xE9").length;
  return (0, x.jsxs)("div", { style: { position: "relative", minHeight: "100vh", background: "#fff" }, children: [b2 && (0, x.jsx)("div", { style: { position: "fixed", inset: 0, zIndex: 99999, background: "#000", opacity: 0.4, transition: "opacity 0.5s ease" } }), e2 === "landing" ? d2 && (i2 || n2) ? (0, x.jsx)(Pe, { clientKey: i2 || n2 || "winter", onBack: () => {
    a2(null), r2(null);
  }, onBookCall: () => {
    let e3 = document.querySelector('[data-section="pricing"]');
    e3 && window.scrollTo({ top: e3.offsetTop, behavior: "smooth" });
  } }) : (0, x.jsxs)(o.Fragment, { children: [(0, x.jsx)(de, { aboveOverlay: false, onAcademy: () => w2("academy"), onStudio: () => w2("landing") }), (0, x.jsx)(He, { onAcademy: () => w2("academy"), onOpenStudio: () => {
  }, onOpenBackoffice: () => w2("backoffice"), onSelectClient: (e3) => a2(e3) })] }) : e2 === "academy" ? (0, x.jsx)(J, { onBack: () => w2("landing") }) : (0, x.jsx)(Me, { t: pendingCount, fromRect: null, onClose: () => w2("landing"), skipEnter: true })] });
}
(0, a.createRoot)(document.getElementById("root")).render((0, x.jsx)(o.StrictMode, { children: (0, x.jsx)(ct, {}) }));
export { m as a, g as i, _ as n, h as o, p as r, c as s, J as t };
