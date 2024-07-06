exports.id=186,exports.ids=[186],exports.modules={6397:(e,s,t)=>{"use strict";t.d(s,{Z:()=>i});let i=()=>{let e=document.querySelector(".swiper-pagination");e&&(e.innerHTML=e.innerHTML.replace(" / ",""))}},8926:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>f});var i=t(997),r=t(6689),a=t.n(r),n=t(4298),l=t.n(n),o=t(968),c=t.n(o);let d=()=>{let e=document.querySelector("#preloader"),s=document.querySelector(".loading-text"),t=()=>{e.classList.add("isdone"),s.classList.add("isdone")};Pace.on("start",function(){e.classList.remove("isdone"),s.classList.remove("isdone")}),Pace.on("done",function(){t()}),document.querySelector("body").classList.contains("pace-done")&&t(),document.addEventListener("load",()=>{t()})},p={QP:!0},m=()=>(a().useEffect(()=>{let e=document.querySelector("body");p.QP?(d(),e.classList.contains("hideX")&&e.classList.remove("hideX")):e.classList.add("hideX")}),(0,i.jsxs)(i.Fragment,{children:[i.jsx("div",{className:`${!0===p.QP?"showX":"hideX"}`,children:i.jsx("div",{id:"preloader",children:i.jsx("div",{className:"loading-text",children:"Y\xfckleniyor"})})}),p.QP?i.jsx(l(),{id:"pace",strategy:"beforeInteractive",src:"/assets/js/pace.min.js"}):""]}));t(108);let u=()=>{!function(){let e=document.querySelector(".cursor-inner"),s=document.querySelector(".cursor-outer");window.onmousemove=function(t){s.style.transform="translate("+t.clientX+"px, "+t.clientY+"px)",e.style.transform="translate("+t.clientX+"px, "+t.clientY+"px)",t.clientY,t.clientX},document.querySelector(".cursor-pointer")&&(document.querySelector(".cursor-pointer").addEventListener("mouseenter",function(){e.classList.add("cursor-hover"),s.classList.add("cursor-hover")}),document.querySelector(".cursor-pointer").addEventListener("mouseleave",function(){e.classList.remove("cursor-hover"),s.classList.remove("cursor-hover")}),e.style.visibility="visible",s.style.visibility="visible"),document.querySelectorAll("a").forEach(function(t){t.addEventListener("mouseenter",function(){e.classList.add("cursor-hover"),s.classList.add("cursor-hover")})}),document.querySelectorAll("a").forEach(function(t){t.addEventListener("mouseleave",function(){e.classList.remove("cursor-hover"),s.classList.remove("cursor-hover")})}),e.style.visibility="visible",s.style.visibility="visible"}()},h=()=>(a().useEffect(()=>{u()},[]),(0,i.jsxs)(i.Fragment,{children:[i.jsx("div",{className:"mouse-cursor cursor-outer"}),i.jsx("div",{className:"mouse-cursor cursor-inner"})]})),g=()=>{let e=document.querySelector(".progress-wrap"),s=document.querySelector(".progress-wrap path"),t=s.getTotalLength(),i=()=>{let e=window.pageYOffset,i=document.documentElement.scrollHeight-window.innerHeight;s.style.strokeDashoffset=t-e*t/i};e&&(s.style.transition=s.style.WebkitTransition="none",s.style.strokeDasharray=t+" "+t,s.style.strokeDashoffset=t,s.getBoundingClientRect(),s.style.transition=s.style.WebkitTransition="stroke-dashoffset 10ms linear",i(),window.addEventListener("scroll",i),window.addEventListener("scroll",function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")}),e.addEventListener("click",function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},x=()=>(a().useEffect(()=>{g()},[]),i.jsx("div",{className:"progress-wrap cursor-pointer",children:i.jsx("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:i.jsx("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})})),f=function({Component:e,pageProps:s}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(c(),{children:[i.jsx("title",{children:"IN-SEL"}),i.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"})]}),i.jsx(h,{}),i.jsx(m,{}),i.jsx(e,{...s}),i.jsx(x,{}),i.jsx(l(),{id:"wow",src:"/assets/js/wow.min.js"}),i.jsx(l(),{id:"splitting",strategy:"beforeInteractive",src:"/assets/js/splitting.min.js"}),i.jsx(l(),{id:"simpleParallax",src:"/assets/js/simpleParallax.min.js"}),i.jsx(l(),{id:"isotope",src:"/assets/js/isotope.pkgd.min.js"}),i.jsx(l(),{src:"/assets/js/main.js",id:"init",strategy:"lazyOnload"})]})}},9981:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var i=t(997),r=t(6859),a=t.n(r);class n extends a(){static async getInitialProps(e){return{...await a().getInitialProps(e)}}render(){return(0,i.jsxs)(r.Html,{children:[(0,i.jsxs)(r.Head,{children:[i.jsx("meta",{charSet:"utf-8"}),i.jsx("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),i.jsx("meta",{name:"keywords"}),i.jsx("meta",{name:"description"}),i.jsx("meta",{name:"author",content:""}),i.jsx("link",{rel:"shortcut icon",href:"/assets/img/favicon.ico"}),i.jsx("link",{href:"https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",rel:"stylesheet"}),i.jsx("link",{href:"https://fonts.googleapis.com/css?family=Teko:300,400,500,600,700&display=swap",rel:"stylesheet"}),i.jsx("link",{href:"https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap",rel:"stylesheet"}),i.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap",rel:"stylesheet"}),i.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap",rel:"stylesheet"})]}),(0,i.jsxs)("body",{children:[i.jsx(r.Main,{}),i.jsx(r.NextScript,{})]})]})}}let l=n},7311:(e,s,t)=>{"use strict";t.a(e,async(e,i)=>{try{t.r(s),t.d(s,{default:()=>g});var r=t(997),a=t(6689),n=t.n(a),l=t(2379),o=t(3015),c=t(6784),d=t(3877);t(7644),t(5392),t(3039);var p=t(1664),m=t.n(p),u=t(6397),h=e([o,d]);[o,d]=h.then?(await h)():h,d.default.use([d.Navigation,d.Pagination,d.Parallax]);let g=()=>{let e=n().useRef(null),[s,t]=n().useState(!0);n().useEffect(()=>{setTimeout(()=>{(0,u.Z)()},1e3),setTimeout(()=>{t(!1)})},[]);let i=n().useRef(null),a=n().useRef(null),d=n().useRef(null);return r.jsx(r.Fragment,{children:(0,r.jsxs)("header",{className:"slid-half",children:[(0,r.jsxs)("div",{id:"js-cta-slider",className:"cta__slider-wrapper nofull swiper-container",ref:e,children:[s?null:r.jsx(o.Swiper,{speed:800,parallax:!0,navigation:{prevEl:i.current,nextEl:a.current},pagination:{type:"fraction",clickable:!0,el:d.current},slidesPerView:1,direction:"horizontal",loop:!0,grabCursor:!0,watchSlidesProgress:!0,breakpoints:{450:{direction:"vertical"}},onBeforeInit:e=>{e.params.navigation.prevEl=i.current,e.params.navigation.nextEl=a.current,e.params.pagination.el=d.current},onSwiper:e=>{setTimeout(()=>{for(var s=0;s<e?.slides?.length;s++)e.slides[s].childNodes[0].setAttribute("data-swiper-parallax",.75*e.height);e.params&&(e.params.navigation.prevEl=i.current,e.params.navigation.nextEl=a.current,e.params.pagination.el=d.current,e.navigation?.destroy(),e.navigation?.init(),e.navigation?.update(),e.pagination?.destroy(),e.pagination?.init(),e.pagination?.update())},500)},className:"swiper-wrapper cta__slider",children:l.map(e=>r.jsx(o.SwiperSlide,{className:"cta__slider-item swiper-slide",children:(0,r.jsxs)("div",{className:"media-wrapper slide-inner valign",children:[r.jsx("div",{className:"bg-img",style:{backgroundImage:`url(${e.image})`},"data-overlay-dark":"5"}),r.jsx("div",{className:"container",children:r.jsx("div",{className:"row",children:r.jsx("div",{className:"col-lg-10 offset-lg-1",children:(0,r.jsxs)("div",{className:"caption",children:[r.jsx("span",{className:"top-corn"}),r.jsx("span",{className:"bottom-corn"}),(0,r.jsxs)("div",{className:"custom-font",children:[r.jsx("h5",{className:"thin custom-font",children:e.title.first}),r.jsx(c.default,{children:r.jsx("h1",{"data-splitting":!0,className:"words chars splitting",children:r.jsx(m(),{href:"#",children:e.title.second})})})]}),e?.content&&(0,r.jsxs)("p",{className:"mt-10",children:[e.content.first," ",r.jsx("br",{}),e.content.second]}),r.jsx(m(),{href:e?.pageLink,className:"btn-curve btn-color mt-30",children:r.jsx("span",{children:"Detaya Git"})})]})})})})]})},e.id))}),(0,r.jsxs)("div",{className:"cta__slider-arrows",children:[r.jsx("i",{id:"js-cta-slider-next",ref:a,className:"cta__slider-arrow cta__slider-arrow--next",children:e?.current?.offsetWidth>450?r.jsx("i",{className:"fas fa-chevron-up"}):r.jsx("i",{className:"fas fa-chevron-right"})}),r.jsx("i",{id:"js-cta-slider-previous",ref:i,className:"cta__slider-arrow cta__slider-arrow--previous",children:e?.current?.offsetWidth>450?r.jsx("i",{className:"fas fa-chevron-down"}):r.jsx("i",{className:"fas fa-chevron-left"})})]})]}),r.jsx("div",{ref:d,className:"swiper-pagination top custom-font"}),(0,r.jsxs)("div",{className:"social-icon",style:{position:"absolute",left:"40px",bottom:"100px",zIndex:100},children:[r.jsx("a",{href:"https://www.instagram.com/insel_villalari?igsh=aGowaGF3c2ozM2dm",rel:"noopener noreferrer",target:"_blank",style:{width:"40px",height:"40px",lineHeight:"40px",textAlign:"center",borderRadius:"20%",fontSize:"20px",cursor:"pointer",color:"#C13584"},children:r.jsx("i",{className:"fab fa-instagram"})}),r.jsx("a",{href:"https://wa.me/905071376396?text=Merhaba,%20İnsel%20Villaları%20hakkında%20bilgi%20almak%20istiyorum",rel:"noopener noreferrer",target:"_blank",style:{width:"40px",height:"40px",lineHeight:"40px",textAlign:"center",borderRadius:"50%",color:"rgb(37,211,102)",fontSize:"20px",cursor:"pointer !important"},children:r.jsx("i",{className:"fab fa-whatsapp"})}),r.jsx("a",{href:"/contact",style:{width:"40px",height:"40px",lineHeight:"40px",textAlign:"center",borderRadius:"50%",color:"rgb(234, 67, 53)",fontSize:"20px",cursor:"pointer"},children:r.jsx("i",{className:"fab fa-google"})})]})]})})};i()}catch(e){i(e)}})},6784:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var i=t(997),r=t(6689),a=t.n(r);class n extends a().Component{render(){return i.jsx("div",{ref:this.target,children:this.props.children})}constructor(...e){super(...e),this.target=a().createRef(),this.split=()=>{this.target.current&&Splitting({target:this.target.current})},this.componentDidMount=this.split,this.componentDidUpdate=this.split}}let l=n},3039:()=>{},5392:()=>{},7644:()=>{},108:()=>{},2379:e=>{"use strict";e.exports=JSON.parse('[{"id":1,"title":{"first":"","second":"VİLLA AGENA"},"image":"/assets/img/slid/homePage/agenaHomePage.jpeg","pageLink":"/agena"},{"id":2,"title":{"first":"","second":"VİLLA CAPELLA"},"image":"/assets/img/slid/homePage/capellaHomePage.jpeg","pageLink":"/capella"},{"id":3,"title":{"first":"","second":"VİLLA GREDI"},"image":"/assets/img/slid/homePage/grediHomePage.jpeg","pageLink":"/gredi"},{"id":4,"title":{"first":"","second":"VİLLA RIGEL"},"image":"/assets/img/slid/homePage/rigelHomePage.jpeg","pageLink":"/rigel"}]')}};