(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7377],{2950:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/footer",function(){return r(496)}])},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,l=void 0;try{for(var i,s=e[Symbol.iterator]();!(t=(i=s.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(o){a=!0,l=o}finally{try{t||null==s.return||s.return()}finally{if(a)throw l}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},i=r(6273),s=r(387),o=r(7190);var c={};function u(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;c[n+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,a=s.useRouter(),f=l.default.useMemo((function(){var n=t(i.resolveHref(a,e.href,!0),2),r=n[0],l=n[1];return{href:r,as:e.as?i.resolveHref(a,e.as):l||r}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,m=e.shallow,x=e.scroll,j=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var y=(n=l.default.Children.only(p))&&"object"===typeof n&&n.ref,b=t(o.useIntersection({rootMargin:"200px"}),2),g=b[0],N=b[1],w=l.default.useCallback((function(e){g(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,g]);l.default.useEffect((function(){var e=N&&r&&i.isLocalURL(d),n="undefined"!==typeof j?j:a&&a.locale,t=c[d+"%"+h+(n?"%"+n:"")];e&&!t&&u(a,d,h,{locale:n})}),[h,d,N,j,r,a]);var k={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,l,s,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==s&&t.indexOf("#")>=0&&(s=!1),n[a?"replace":"push"](r,t,{shallow:l,locale:o,scroll:s}))}(e,a,d,h,v,m,x,j)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&u(a,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var _="undefined"!==typeof j?j:a&&a.locale,E=a&&a.isLocaleDomain&&i.getDomainLocale(h,_,a&&a.locales,a&&a.domainLocales);k.href=E||i.addBasePath(i.addLocale(h,_,a&&a.defaultLocale))}return l.default.cloneElement(n,k)};n.default=f},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,l=void 0;try{for(var i,s=e[Symbol.iterator]();!(t=(i=s.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(o){a=!0,l=o}finally{try{t||null==s.return||s.return()}finally{if(a)throw l}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,o=a.useRef(),c=t(a.useState(!1),2),u=c[0],f=c[1],d=a.useCallback((function(e){o.current&&(o.current(),o.current=void 0),r||u||e&&e.tagName&&(o.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=s.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return s.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,l=t.observer,i=t.elements;return i.set(e,n),l.observe(e),function(){i.delete(e),l.unobserve(e),0===i.size&&(l.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,u]);return a.useEffect((function(){if(!i&&!u){var e=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=r(7294),l=r(9311),i="undefined"!==typeof IntersectionObserver;var s=new Map},496:function(e,n,r){"use strict";r.r(n);var t=r(5893),a=(r(7294),r(1664));n.default=function(e){var n=e.classText;return(0,t.jsx)("footer",{className:"".concat(n||""),children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-6",children:(0,t.jsxs)("div",{className:"item md-mb50",children:[(0,t.jsx)("div",{className:"title",children:(0,t.jsx)("h5",{children:"Bize Ula\u015f\u0131n"})}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"icon pe-7s-map-marker"}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"Adres Bilgilerimiz"}),(0,t.jsx)("p",{children:"Zakkum Sk Kalkan, Ka\u015f, ANTALYA"})]})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"icon pe-7s-mail"}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"Bize Yaz\u0131n"}),(0,t.jsx)("p",{children:"info@inselvillalari.com"})]})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"icon pe-7s-call"}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"Bizi Aray\u0131n"}),(0,t.jsx)("p",{children:"+90 507 137 63 96"})]})]})]})]})}),(0,t.jsx)("div",{className:"col-lg-6",children:(0,t.jsxs)("div",{className:"item",children:[(0,t.jsx)("div",{className:"logo"}),(0,t.jsxs)("div",{className:"social",children:[(0,t.jsx)(a.default,{href:"https://wa.me/905071376396?text=Merhaba,%20\u0130nsel%20Villalar\u0131%20hakk\u0131nda%20bilgi%20almak%20istiyorum",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("a",{target:"_blank",children:(0,t.jsx)("i",{className:"fab fa-whatsapp"})})}),(0,t.jsx)(a.default,{href:"https://www.instagram.com/insel_villalari?igsh=aGowaGF3c2ozM2dm",rel:"noopener noreferrer",target:"_blank",children:(0,t.jsx)("a",{target:"_blank",children:(0,t.jsx)("i",{className:"fab fa-instagram"})})}),(0,t.jsx)(a.default,{href:"/contact",children:(0,t.jsx)("a",{children:(0,t.jsx)("i",{className:"fab fa-google"})})})]})]})})]})})})}},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[9774,2888,179],(function(){return n=2950,e(e.s=n);var n}));var n=e.O();_N_E=n}]);