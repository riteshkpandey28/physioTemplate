/*! For license information please see component---src-templates-service-tsx-5bd87cdbc9211fdf451d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{C331:function(e,t,i){"use strict";var n="bfred-it:object-fit-images",a=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,c="undefined"==typeof Image?{style:{"object-position":1}}:new Image,r="object-fit"in c.style,o="object-position"in c.style,l="background-size"in c.style,s="string"==typeof c.currentSrc,d=c.getAttribute,m=c.setAttribute,u=!1;function g(e,t,i){var n="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(t||1)+"' height='"+(i||0)+"'%3E%3C/svg%3E";d.call(e,"src")!==n&&m.call(e,"src",n)}function b(e,t){e.naturalWidth?t(e):setTimeout(b,100,e,t)}function p(e){var t=function(e){for(var t,i=getComputedStyle(e).fontFamily,n={};null!==(t=a.exec(i));)n[t[1]]=t[2];return n}(e),i=e[n];if(t["object-fit"]=t["object-fit"]||"fill",!i.img){if("fill"===t["object-fit"])return;if(!i.skipTest&&r&&!t["object-position"])return}if(!i.img){i.img=new Image(e.width,e.height),i.img.srcset=d.call(e,"data-ofi-srcset")||e.srcset,i.img.src=d.call(e,"data-ofi-src")||e.src,m.call(e,"data-ofi-src",e.src),e.srcset&&m.call(e,"data-ofi-srcset",e.srcset),g(e,e.naturalWidth||e.width,e.naturalHeight||e.height),e.srcset&&(e.srcset="");try{!function(e){var t={get:function(t){return e[n].img[t||"src"]},set:function(t,i){return e[n].img[i||"src"]=t,m.call(e,"data-ofi-"+i,t),p(e),t}};Object.defineProperty(e,"src",t),Object.defineProperty(e,"currentSrc",{get:function(){return t.get("currentSrc")}}),Object.defineProperty(e,"srcset",{get:function(){return t.get("srcset")},set:function(e){return t.set(e,"srcset")}})}(e)}catch(c){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(e){if(e.srcset&&!s&&window.picturefill){var t=window.picturefill._;e[t.ns]&&e[t.ns].evaled||t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),e.currentSrc=e[t.ns].curSrc||e.src}}(i.img),e.style.backgroundImage='url("'+(i.img.currentSrc||i.img.src).replace(/"/g,'\\"')+'")',e.style.backgroundPosition=t["object-position"]||"center",e.style.backgroundRepeat="no-repeat",e.style.backgroundOrigin="content-box",/scale-down/.test(t["object-fit"])?b(i.img,(function(){i.img.naturalWidth>e.width||i.img.naturalHeight>e.height?e.style.backgroundSize="contain":e.style.backgroundSize="auto"})):e.style.backgroundSize=t["object-fit"].replace("none","auto").replace("fill","100% 100%"),b(i.img,(function(t){g(e,t.naturalWidth,t.naturalHeight)}))}function f(e,t){var i=!u&&!e;if(t=t||{},e=e||"img",o&&!t.skipTest||!l)return!1;"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var a=0;a<e.length;a++)e[a][n]=e[a][n]||{skipTest:t.skipTest},p(e[a]);i&&(document.body.addEventListener("load",(function(e){"IMG"===e.target.tagName&&f(e.target,{skipTest:t.skipTest})}),!0),u=!0,e="img"),t.watchMQ&&window.addEventListener("resize",f.bind(null,e,{skipTest:t.skipTest}))}f.supportsObjectFit=r,f.supportsObjectPosition=o,function(){function e(e,t){return e[n]&&e[n].img&&("src"===t||"srcset"===t)?e[n].img:e}o||(HTMLImageElement.prototype.getAttribute=function(t){return d.call(e(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,i){return m.call(e(this,t),t,String(i))})}(),e.exports=f},D7ez:function(e,t,i){"use strict";i.d(t,"a",(function(){return S}));var n=i("DZdY"),a=(i("q1tI"),i("6SBK")),c=i("9Uw8"),r=i("9eSz"),o=i.n(r),l=i("sz96"),s=i("AeFk");var d=Object(n.a)("div",{target:"e13v9jwi1"})({name:"1eqju66",styles:"color:white;height:30rem;margin:0rem 0rem 0rem 0rem;box-shadow:0px 0px 20px rgba(54, 56, 66, 0.15)"}),m=Object(n.a)("div",{target:"e13v9jwi0"})({name:"9c3imw",styles:"background:#ffffff;background:rgb(235, 240, 247);background:linear-gradient(180deg, rgba(255, 255, 255, 1) 60%, rgba(235, 240, 247, 1) 60%)"}),u={name:"rltvnk",styles:"display:flex;flex-direction:column;align-items:center;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));border-radius:0.5rem"},g={name:"1w4is4q",styles:"margin-left:auto;margin-right:auto;width:100%;height:24rem;top:auto;right:auto;bottom:auto;left:auto;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;display:block"},b={name:"e2vne6",styles:"width:100%;height:33.333333%;border-bottom-left-radius:0.5rem;border-bottom-right-radius:0.5rem;padding:1.5rem;align-items:center"},p={name:"1bizlam",styles:"font-size:1.25rem;line-height:1.75rem;font-weight:600;@media (min-width: 640px){font-size:1.5rem;line-height:2rem;}"},f={name:"3uc6ph",styles:"font-size:1.125rem;line-height:1.75rem;padding-top:0.5rem;font-weight:400;@media (min-width: 640px){font-size:1.25rem;line-height:1.75rem;}"},h={name:"19b54xj",styles:"padding-left:0.5rem;padding-right:0.5rem;padding-top:4rem;@media (min-width: 640px){padding-left:5rem;padding-right:5rem;padding-top:2rem;}@media (min-width: 768px){margin-top:4rem;}"},j={name:"1fttcpj",styles:"display:flex;flex-direction:column"},y={name:"1b8chjv",styles:"display:flex;font-size:1.875rem;line-height:2.25rem;justify-content:center;margin:1rem"},v={name:"1gqeage",styles:"margin-right:0.75rem"},O={name:"vaak6u",styles:"display:none;@media (min-width: 640px){display:block;}"},x={name:"10um231",styles:"text-align:left;margin:1rem;padding:0.25rem;margin-top:0px;@media (min-width: 640px){display:block;text-align:center;font-size:1.125rem;line-height:1.75rem;}"},w={name:"vaak6u",styles:"display:none;@media (min-width: 640px){display:block;}"},k={name:"h6sqxb",styles:"@media (min-width: 640px){display:none;}"};function S(e){var t=Object(a.a)().map((function(e){return Object(s.c)(d,{css:u,key:e.id},Object(s.c)(o.a,{css:g,fluid:null==e?void 0:e.featuredImage}),Object(s.c)("div",{css:b,style:{backgroundColor:l.b.primaryDark,color:"white"}},Object(s.c)("div",{css:p},null==e?void 0:e.name),Object(s.c)("div",{css:f},null==e?void 0:e.line1)))}));return Object(s.c)(m,null,Object(s.c)("div",{css:h},Object(s.c)("div",{css:j},Object(s.c)("div",{css:y},Object(s.c)("span",{css:v,style:{color:l.b.primary}},"Expert ",e.speciality?e.speciality:"Physiotherapists"),Object(s.c)("div",{css:O},"ready to relieve your pain")),Object(s.c)("div",{css:x,style:{color:l.b.accent}},"We match every patient with a Doctor of Physical Therapy who is there with them from start to finish, so they can take control of their pain, for good.")),Object(s.c)("div",{css:w},Object(s.c)(c.a,{number:4,id:e.id+"homepagefullpagecarousal"},t)),Object(s.c)("div",{css:k},Object(s.c)(c.a,{number:1,id:e.id+"homepagemobilecarousal"},t))))}},Llqn:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i("DZdY"),a=i("m6XI"),c=(i("q1tI"),i("AeFk"));var r=Object(n.a)("div",{target:"ef0b5zg0"})({name:"4ts0wc",styles:"@media (min-width: 640px){max-width:26rem;}"});function o(){return Object(c.c)("div",null,Object(c.c)("div",{className:"modal fade",id:"exampleModal",tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Object(c.c)("div",{className:"modal-dialog modal-dialog-centered"},Object(c.c)(r,{className:"modal-content bg-transparent border-0 "},Object(c.c)("div",{className:"modal-body justify-content-center align-items-center"},Object(c.c)(a.a,null))))))}},ciIH:function(e,t,i){"use strict";var n=i("284h"),a=i("TqRt");t.__esModule=!0,t.default=void 0;var c=a(i("pVnL")),r=a(i("8OQS")),o=a(i("284h")),l=a(i("VbXa")),s=n(i("q1tI")),d=a(i("17x9")),m=a(i("9eSz")),u=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).imageRef=t.props.innerRef||(0,s.createRef)(),t.placeholderRef=(0,s.createRef)(),t}(0,l.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this,t=document.createElement("img");void 0!==t.style.objectFit&&void 0!==t.style.objectPosition||Promise.resolve().then((function(){return(0,o.default)(i("C331"))})).then((function(t){var i=t.default;i(e.imageRef.current.imageRef.current),i(e.placeholderRef.current)}))},n.render=function(){var e=this.props,t=e.objectFit,i=e.objectPosition,n=(0,r.default)(e,["objectFit","objectPosition"]),a={objectFit:t,objectPosition:i,fontFamily:'"object-fit: '+t+"; object-position: "+i+'"'};return s.default.createElement(m.default,(0,c.default)({ref:this.imageRef,placeholderRef:this.placeholderRef},n,{imgStyle:(0,c.default)({},n.imgStyle,a),placeholderStyle:(0,c.default)({},n.placeholderStyle,a)}))},t}(s.Component);u.propTypes={objectFit:d.default.string,objectPosition:d.default.string},u.defaultProps={objectFit:"cover",objectPosition:"50% 50%"};var g=(0,s.forwardRef)((function(e,t){return s.default.createElement(u,(0,c.default)({},e,{innerRef:t}))}));t.default=g},qnco:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return oe}));var n=i("DZdY"),a=i("q1tI"),c=i("ciIH"),r=i.n(c),o=i("R8uD"),l=i("vbKG"),s=i("D7ez"),d=i("boqk"),m=i.n(d),u=i("7cJT"),g=i("W5le"),b=i("sp93"),p=i("Q0SC"),f=i("AvYT"),h=(i("mjCe"),i("sz96")),j=i("AeFk");var y=i("KQm4"),v=i("BkRI"),O=i.n(v),x=i("PGPq"),w=i("ulNG"),k=i("Rrbt"),S=i("1/1+"),I=i("ReaS"),z=i("H1WH"),T=i("7lRc");function C(e){var t=Object(a.useState)(!1),i=t[0],n=t[1],c=Object(a.useState)(0),r=c[0],l=c[1];return Object(j.c)(x.a,null,Object(j.c)(b.e,{boxShadow:"rgba(0, 0, 0, 0.08) 0px 4px 12px",justifyContent:"space-between",flexDirection:"column",overflow:"hidden",color:"#55627A",flex:1},Object(j.c)(b.e,{p:"5",bg:"#EBF0F7",flexDir:"row",justifyContent:"center",alignItems:"center"},Object(j.c)(b.a,{marginRight:0,flexGrow:"1"},Object(j.c)(g.a,{borderRadius:"full",boxSize:"55px",src:e.entry.patientImg,alt:"Patient Image"})),Object(j.c)(b.m,{spacing:0,marginLeft:"5%",flexGrow:"8",alignItems:"flex-start"},Object(j.c)(b.l,{m:0,fontSize:["lg","lg","xl"],fontWeight:"600"},e.entry.patientName),Object(j.c)(b.l,{fontSize:["xs","sm","sm"]},e.entry.designation))),Object(j.c)(b.e,{padding:"2.5%",fontWeight:"500",color:"white",bg:h.b.primary,alignItems:"center",justifyContent:"center"},Object(j.c)(b.l,{paddingTop:"1%",paddingBottom:"1%",textAlign:"center",fontWeight:700,fontSize:["xl","100%","138%"]},e.entry.heroTitle)),Object(j.c)(b.e,{justifyContent:"center",alignItems:"center",flexDir:"row",position:"relative"},Object(j.c)(b.a,{p:4,m:0,height:"100%",bg:"white",width:"100%",bottom:i?0:-10,opacity:i?.9:0,position:"absolute",transition:"all .3s ease-out",overflowY:"scroll",onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)},onTouchStart:function(e){var t;l(null==e||null===(t=e.targetTouches[0])||void 0===t?void 0:t.clientX)},onTouchMove:function(e){var t,i=r-(null===(t=e.targetTouches[0])||void 0===t?void 0:t.clientX);(i<-T.a||i>T.a)&&n(!1)}},Object(j.c)(z.MobileView,null,Object(j.c)(S.a,{position:"absolute",top:"5%",right:"2.5%",size:"sm",color:h.b.primary,zIndex:"200",onClick:function(){return n(!1)}})),Object(j.c)(b.l,{width:"95%",wordBreak:"break-word"},Object(o.documentToReactComponents)(e.entry.description))),Object(j.c)(g.a,{width:"50%",objectFit:"fill",src:e.entry.untreatedImg}),Object(j.c)(g.a,{width:"50%",objectFit:"fill",src:e.entry.treatedImg}),Object(j.c)(z.MobileView,null,Object(j.c)(p.a,{position:"absolute",left:"35%",opacity:i?"0":"1",bottom:i?"0":"5%",leftIcon:Object(j.c)(I.f,null),size:"sm",bg:"rgb(0,172,193)",backdropFilter:"blur(95px)",color:"white",variant:"solid",borderRadius:"12px",transition:"all .3s ease",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",onClick:function(){return n(!0)}},"Read More")))))}function R(e){var t=Object(a.useState)([]),i=t[0],n=t[1];return Object(a.useEffect)((function(){var t,a=O()(i);null===(t=e.data)||void 0===t||t.forEach((function(e){var t=e.name,i=e.title,n=e.heroTitle,c=e.titleImage,r=e.preTreatmentImage,o=e.postTreatmentImage,l=e.monolog;a.push({patientName:t,designation:i,heroTitle:n,patientImg:null==c?void 0:c.src,untreatedImg:null==r?void 0:r.src,treatedImg:null==o?void 0:o.src,description:l})})),n(a)}),[e.data]),Object(j.c)(x.a,{theme:Object(x.b)(k.a)},Object(j.c)(b.c,{py:8,px:0,maxW:{base:"100%",sm:"35rem",md:"43.75rem",lg:"57.5rem",xl:"75rem",xxl:"87.5rem"}},Object(j.c)(w.a,{gap:32},i.map((function(e,t){return Object(j.c)(C,{key:t,entry:e})})))))}var q=i("DqjB");function H(e){var t=e.onClickBookConsultation,i=Object(q.a)(),n=i.reduce((function(e,t){return i=t.visualService,n="9d87ac76-a70e-5133-a09b-adc4b576794c",(null===(a=i.filter((function(e){return(null==e?void 0:e.id)===n})))||void 0===a?void 0:a.length)>0?[].concat(Object(y.a)(e),[t]):e;var i,n,a}),[]);return Object(j.c)(f.a,null,Object(j.c)(b.e,{mt:"4%",mb:"4%",color:h.b.secondary,flexDirection:"column",justifyContent:"center",alignItems:"center"},Object(j.c)(b.e,{justifyContent:"center",alignItems:"center",flexDir:"column"},Object(j.c)(b.l,{margin:"4px",color:h.b.primary,fontSize:{base:"2xl",md:"2xl",lg:"4xl"},fontWeight:"600"},"Success Stories"),Object(j.c)(b.l,{textAlign:"center",fontSize:{base:"m",md:"m",lg:"lg"},width:"100%",paddingTop:["1%","0.5%","0"],fontWeight:"400"},"Successfully treated ",Object(j.c)("b",null,"5000+")," Patients across the globe")),Object(j.c)(R,{data:n}),Object(j.c)(p.a,{className:"success-stories-book-button",fontSize:{base:"sm",md:"xl",lg:"xl"},color:h.b.baseLight,bg:h.b.primary,padding:"2% 8% 2% 8%",_hover:{bg:""+h.b.primaryDark},_active:{bg:""+h.b.primaryDark,transform:"scale(0.98)",borderColor:"#bec3c9"},width:{base:"90%",md:"70%",lg:"35%"},_focus:{boxShadow:"0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)"},borderRadius:{base:"10px",md:"14px",lg:"18px"},onClick:t,"data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"BOOK FREE ONLINE CONSULTATION")))}i("wx14");var E=i("Llqn");i("xWrr");var F=Object(n.a)(r.a,{target:"e1scfezq7"})({name:"mychk6",styles:"width:100%;margin:0px;padding:0px;"}),D=Object(n.a)(r.a,{target:"e1scfezq6"})({name:"1in0u0x",styles:"margin:0px;width:100%; max-height:30rem;filter:brightness(30%);@media only screen and (max-width: 640px){min-height:340px;height:auto;}"}),N=Object(n.a)("div",{target:"e1scfezq5"})({name:"tmfcg9",styles:"margin-top:-3rem;--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); position:-webkit-sticky;position:sticky;top:10rem;margin-top:1rem"}),L=Object(n.a)("div",{target:"e1scfezq4"})({name:"1fdr323",styles:"position:absolute;top:9rem;width:100vw;overflow:hidden;"}),M=Object(n.a)("h1",{target:"e1scfezq3"})({name:"nha1q1",styles:"color:#00acc1;font-size:1.5rem;font-weight:600;margin:1rem;text-align:center;@media (min-width: 640px){text-align:left;}"}),P=Object(n.a)("p",{target:"e1scfezq2"})({name:"105u9gu",styles:"margin-left:2rem;margin-top:1rem;margin-right:1rem"}),A=Object(n.a)("ul",{target:"e1scfezq1"})({name:"ti75j2",styles:"margin:0"}),B={name:"mmmiw6",styles:"margin-left:auto;margin-right:auto;margin-top:1.5rem;margin-bottom:1.5rem"},W=function(e){var t=e.data.target.fields;return t&&Object(j.c)("img",{css:B,src:"https://"+t.file["en-US"].url})},J=function(e){return Object(j.c)("strong",null,e)},_=function(e,t){return Object(j.c)(A,null,t)},K=Object(n.a)("button",{target:"e1scfezq0"})("padding:1rem;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));font-weight:700;@media (min-width: 640px){padding-left:2rem;padding-right:2rem;padding-top:1rem;padding-bottom:1rem;margin-top:3rem;font-size:1.5rem;line-height:2rem;} border-radius:0.5rem;background-color:",h.b.primary,";"),G={name:"vaak6u",styles:"display:none;@media (min-width: 640px){display:block;}"},Y={name:"h6sqxb",styles:"@media (min-width: 640px){display:none;}"},Q={name:"31w6tj",styles:"text-transform:uppercase;font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));display:flex;justify-content:center;@media (min-width: 640px){font-size:3.75rem;line-height:1;}"},U={name:"1xynbbq",styles:"width:100vw;display:flex;justify-content:center;padding:1.5rem;text-align:center;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));@media (min-width: 640px){font-size:1.5rem;line-height:2rem;margin-top:1rem;}"},V={name:"zl1inp",styles:"display:flex;justify-content:center"},X={name:"9p4r41",styles:"@media (min-width: 640px){display:flex;}"},Z={name:"1bxs575",styles:"@media (min-width: 640px){padding:5rem;width:66.666667%;}"},$={name:"h6sqxb",styles:"@media (min-width: 640px){display:none;}"},ee={name:"zh0ye3",styles:"text-align:center;text-transform:uppercase;font-weight:700"},te={name:"h6sqxb",styles:"@media (min-width: 640px){display:none;}"},ie={name:"h6sqxb",styles:"@media (min-width: 640px){display:none;}"},ne={name:"h6sqxb",styles:"@media (min-width: 640px){display:none;}"},ae={name:"h6sqxb",styles:"@media (min-width: 640px){display:none;}"},ce={name:"np82ko",styles:"display:none;margin-top:6rem;padding-right:6rem;@media (min-width: 640px){display:block;width:33.333333%;}"},re={name:"h6sqxb",styles:"@media (min-width: 640px){display:none;}"};function oe(e){var t,i,n,a,c,r,d,g,b,p,f,h,y,v,O,x=e.data,w={id:(n=x.contentfulService).id,heroImage:null==n||null===(a=n.heroImage)||void 0===a?void 0:a.fluid,name:null==n?void 0:n.name,slug:null==n?void 0:n.slug,description:null==n?void 0:n.description,videoLink:null==n?void 0:n.videoLink,body1:JSON.parse(null==n||null===(c=n.body1)||void 0===c?void 0:c.raw),causesHeading:null==n?void 0:n.causesHeading,image1:null==n||null===(r=n.image1)||void 0===r?void 0:r.fluid,causes:JSON.parse(null==n||null===(d=n.causes)||void 0===d?void 0:d.raw),symptoms:JSON.parse(null==n||null===(g=n.symptoms)||void 0===g?void 0:g.raw),symptomsHeading:null==n?void 0:n.symptomsHeading,diagnosis:JSON.parse(null==n||null===(b=n.diagnosis)||void 0===b?void 0:b.raw),diagnosisHeading:null==n?void 0:n.diagnosisHeading,image2:null==n||null===(p=n.image2)||void 0===p?void 0:p.fluid,treatment:JSON.parse(null==n||null===(f=n.treatment)||void 0===f?void 0:f.raw),treatmentHeading:null==n?void 0:n.treatmentHeading,mythsHeading:null==n?void 0:n.mythsHeading,myths:JSON.parse(null==n||null===(h=n.myths)||void 0===h?void 0:h.raw),ypHelpHeading:null==n?void 0:n.ypHelpHeading,ypHelp:JSON.parse(null==n||null===(y=n.ypHelp)||void 0===y?void 0:y.raw),featuredImage:null==n||null===(v=n.featuredImage)||void 0===v?void 0:v.fluid,mainImage:null==n||null===(O=n.mainImage)||void 0===O?void 0:O.fluid,isExperimental:null==n?void 0:n.isExperimental},k=w.id,S=w.name,I=w.mainImage,z=w.featuredImage,T=w.description,C=w.causes,R=w.slug,q=w.heroImage,A=w.causesHeading,B=w.body1,oe=w.diagnosis,le=w.diagnosisHeading,se=w.treatment,de=w.treatmentHeading,me=w.image1,ue=w.image2,ge=w.symptomsHeading,be=w.symptoms,pe=w.myths,fe=w.mythsHeading,he=w.ypHelp,je=w.ypHelpHeading,ye={renderMark:(t={},t[l.MARKS.BOLD]=J,t),renderNode:(i={},i[l.BLOCKS.EMBEDDED_ASSET]=W,i[l.BLOCKS.UL_LIST]=_,i)},ve=function(){m()("#booking-form-floating")};return Object(j.c)(u.k,null,Object(j.c)("div",null,Object(j.c)("div",{css:G},Object(j.c)(D,{fluid:q,objectFit:"cover"})),Object(j.c)("div",{css:Y},Object(j.c)(D,{fluid:z,objectFit:"cover"})),Object(j.c)(L,null,Object(j.c)("div",{css:Q},S),Object(j.c)("div",{css:U},T),Object(j.c)("div",{css:V},Object(j.c)(K,{onClick:ve,"data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"Book a FREE Consultation")))),Object(j.c)("div",{css:X},Object(j.c)("div",{css:Z},Object(j.c)("div",{css:$},Object(j.c)(u.c,null)),Object(j.c)("div",null,Object(j.c)(M,{css:ee},S),Object(j.c)(F,{css:te,fluid:I,objectFit:"fill"}),Object(j.c)(P,null,Object(o.documentToReactComponents)(B,ye))),"shoulder-pain"!==R&&Object(j.c)("div",{css:ie},Object(j.c)(u.q,{includeCTAButton:!0,serviceID:k})),Object(j.c)("div",null,Object(j.c)(M,{id:"causes-heading"},A),Object(j.c)(F,{css:ne,fluid:me,objectFit:"fill"}),Object(j.c)(P,null,Object(o.documentToReactComponents)(C,ye))),Object(j.c)("div",null,Object(j.c)(M,{id:"symptoms-heading"},ge),Object(j.c)(P,null,Object(o.documentToReactComponents)(be,ye))),Object(j.c)("div",null,Object(j.c)(M,{id:"diagnosis-heading"},le),Object(j.c)(P,null,Object(o.documentToReactComponents)(oe,ye))),Object(j.c)("div",null,Object(j.c)(M,{id:"treatment-heading"},de),Object(j.c)(F,{css:ae,fluid:ue,objectFit:"fill"}),Object(j.c)(P,null,Object(o.documentToReactComponents)(se,ye))),Object(j.c)("div",null,Object(j.c)(M,{id:"myths-heading"},fe),Object(j.c)(P,null,Object(o.documentToReactComponents)(pe,ye))),Object(j.c)("div",null,Object(j.c)(M,{id:"ypHelp-heading"},je),Object(j.c)(P,null,Object(o.documentToReactComponents)(he,ye)))),Object(j.c)("div",{css:ce},Object(j.c)(N,null,Object(j.c)(u.c,{itemID:"booking-form-floating",removeCTABufferspace:!0})))),"shoulder-pain"===R&&Object(j.c)("div",{css:re},Object(j.c)(H,{onClickBookConsultation:ve})),Object(j.c)("div",null,Object(j.c)(s.a,{speciality:S+" Specialists"})),Object(j.c)(u.d,null),Object(j.c)(E.a,null))}}}]);
//# sourceMappingURL=component---src-templates-service-tsx-5bd87cdbc9211fdf451d.js.map