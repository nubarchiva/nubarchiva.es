"use strict";(self.webpackChunkskeleton_ts=self.webpackChunkskeleton_ts||[]).push([[159],{4514:function(e,t,a){var n=a(7294);t.Z=e=>n.createElement("div",{className:"m-banner-icons "+(e.isRelative?"m-banner-icons--relative":"")})},9462:function(e,t,a){a.d(t,{k:function(){return i}});var n=a(7294),l=a(1072),r=a(2422);const i=e=>{const{t:t}=(0,l.$G)("global"),a={textButtonSubmit:""+t("form.Send"),textButtonSubmitting:""+t("form.Sending"),stateForm:e.stateForm,textInfo:e.infoRequest};return n.createElement("form",{name:"contact",method:"post","data-netlify":"true",onSubmit:t=>{e.handleSubmit(t)},className:""},n.createElement("input",{type:"hidden",name:"form-name",value:"Contacto"}),n.createElement("div",{className:"form__columns"},n.createElement("div",null,n.createElement("label",{hidden:!0},t("form.PlaceholderName")),n.createElement("input",{className:"a-input a-input--required",type:"text",name:"name",placeholder:""+t("form.PlaceholderNameSubname"),required:!0}),n.createElement("span",null,"*")),n.createElement("div",null,n.createElement("label",{hidden:!0},t("form.PlaceholderEmail")," "),n.createElement("input",{className:"a-input a-input--required",type:"email",name:"email",placeholder:""+t("form.PlaceholderEmail"),required:!0}),n.createElement("span",null,"*")),n.createElement("div",null,n.createElement("label",{hidden:!0},""+t("form.PlaceholderPhone")," "),n.createElement("input",{className:"a-input a-input--required",type:"tel",name:"phone",placeholder:""+t("form.PlaceholderPhone"),required:!0}),n.createElement("span",null,"*")),n.createElement("label",{hidden:!0}," ",t("form.PlaceholderOrg")," "),n.createElement("input",{className:"a-input",type:"text",name:"company",placeholder:""+t("form.PlaceholderOrg")})),n.createElement("div",{className:"m-info-form__one-line a-input--required"},n.createElement("label",{hidden:!0},t("form.TextMessage")," "),n.createElement("input",{className:"a-input",type:"text",name:"message",placeholder:""+t("form.PlaceholderMessage"),required:!0}),n.createElement("span",null,"*")),n.createElement("div",{className:"m-info-form__check-submit"},n.createElement("div",{className:"m-info-form__private"},n.createElement("label",{htmlFor:"politica--"+e.fromLanding,className:"a-policy"},t("form.politic")," ",n.createElement("a",{href:"/legal/politica-de-privacidad/",className:"a-link",target:"_blank",rel:"nofollow noopener noreferrer"},t("form.politicLink"))," "),n.createElement("input",{type:"checkbox",name:"politica--"+e.fromLanding,id:"politica--"+e.fromLanding,value:"acepta-politica",required:!0})),n.createElement("div",{className:"center"},n.createElement(r.Z,{submit:a}))))}},2422:function(e,t,a){var n=a(7294),l=a(1072),r=a(6489),i=a(3547);t.Z=e=>{const{t:t}=(0,l.$G)("global");return n.createElement("div",{className:"m-submit"},n.createElement("button",{type:"submit",disabled:e.submit.stateForm>0,className:"a-button \n        "+(e.submit.stateForm===r.f.SUCCESS?"a-button--success":"")+"\n        "+(e.submit.stateForm===r.f.SUBMITTING?"a-button--submitting":"")+"\n        "+(e.submit.stateForm===r.f.FAIL?"a-button--fail":"")+"\n        "},e.submit.stateForm===r.f.REST&&n.createElement(n.Fragment,null," ",e.submit.textButtonSubmit),e.submit.stateForm===r.f.SUBMITTING&&n.createElement(n.Fragment,null," ",e.submit.textButtonSubmitting," "),e.submit.stateForm===r.f.SUCCESS&&n.createElement(n.Fragment,null," ",t("Submit.Completed")," ",i.vh," "),e.submit.stateForm===r.f.FAIL&&n.createElement(n.Fragment,null," ",t("Submit.Error")," ")),e.submit.stateForm===r.f.FAIL&&n.createElement("p",{className:"m-submit__sms m-submit__sms--fail"},n.createElement(l.cC,{t:t,components:{b:n.createElement("b",null)}},t("Submit.ErrorMessage")," ",e.submit.textInfo)),e.submit.stateForm===r.f.SUCCESS&&n.createElement("p",{className:"m-submit__sms m-submit__sms--success"},n.createElement(l.cC,{t:t,components:{b:n.createElement("b",null)}},t("Submit.CompletedMessage")," ",e.submit.textInfo)))}},9840:function(e,t,a){let n;a.d(t,{T:function(){return n}}),function(e){e[e.INFO=0]="INFO"}(n||(n={}))},6489:function(e,t,a){a.d(t,{f:function(){return i},c:function(){return o}});var n=a(7294),l=a(9840);let r=function(){function e(){}return e.prototype.send=async function(e){const t={};for(const[a,n]of e.entries())"string"==typeof n&&(t[a]=n);return fetch("/api/send-form",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},e}();let i;!function(e){e[e.REST=0]="REST",e[e.SUBMITTING=1]="SUBMITTING",e[e.SUCCESS=2]="SUCCESS",e[e.FAIL=3]="FAIL"}(i||(i={}));const o=e=>{const{0:t,1:a}=(0,n.useState)(i.REST),{0:o,1:m}=(0,n.useState)(""),c=(e=>{if(e===l.T.INFO)return new r})(e);return{handleSubmit:e=>{e.preventDefault(),a(i.SUBMITTING);const t=new FormData(e.target);c.send(t).then((e=>{e.ok?a(i.SUCCESS):a(i.FAIL),m(e.statusText)})).catch((e=>{a(i.FAIL),m(e.toString)}))},stateForm:t,infoRequest:o}}},3847:function(e,t,a){var n=a(4578),l=a(7294),r=a(6489);t.Z=function(e,t,a){void 0===a&&(a="");const{handleSubmit:i,stateForm:o,infoRequest:m}=(0,r.c)(t);return function(t){function r(){return t.apply(this,arguments)||this}return(0,n.Z)(r,t),r.prototype.render=function(){return l.createElement(e,{handleSubmit:i,stateForm:o,infoRequest:m,fromLanding:a})},r}(l.Component)}},9526:function(e,t,a){a.d(t,{X:function(){return f},Z:function(){return v}});var n=a(7294),l=a(653),r=a(6364),i=a(9840),o=a(1072),m=a(2422);const c=e=>{const{t:t}=(0,o.$G)("global"),a={textButtonSubmit:""+t("form.Send"),textButtonSubmitting:""+t("form.Sending"),stateForm:e.stateForm,textInfo:e.infoRequest};return n.createElement("form",{name:"solicita-informacion",method:"post","data-netlify":"true",onSubmit:t=>{e.handleSubmit(t)},className:""},n.createElement("div",{className:"form-demo__inputs"},n.createElement("div",null,n.createElement("label",{hidden:!0}," ",t("form.PlaceholderName")," "),n.createElement("input",{className:"a-input",type:"text",name:"name",placeholder:""+t("form.PlaceholderName"),required:!0})),n.createElement("div",null,n.createElement("label",{hidden:!0},t("form.PlaceholderEmail")," "),n.createElement("input",{className:"a-input",type:"email",name:"email",placeholder:""+t("form.PlaceholderEmail"),required:!0}))),n.createElement("div",{className:"form-demo__actions"},n.createElement("div",{className:"m-info-form__check-submit"},n.createElement("div",{className:"m-info-form__private"},n.createElement("label",{htmlFor:"politica--"+e.fromLanding,className:"a-policy"},t("form.politic")," ",n.createElement("a",{href:"/legal/politica-de-privacidad/",target:"_blank",className:"a-link",rel:"nofollow noopener noreferrer"},t("form.politicLink"))," "),n.createElement("input",{type:"checkbox",name:"politica--"+e.fromLanding,id:"politica--"+e.fromLanding,value:"acepta-politica",required:!0})),n.createElement("div",{className:"center"},n.createElement(m.Z,{submit:a})))))};var s=a(9462);const d=e=>{const{t:t}=(0,o.$G)("global"),a={textButtonSubmit:""+t("form.Send"),textButtonSubmitting:""+t("form.Sending"),stateForm:e.stateForm,textInfo:e.infoRequest};return n.createElement("form",{name:"subscribe",method:"post","data-netlify":"true",onSubmit:t=>{e.handleSubmit(t)},className:""},n.createElement("input",{type:"hidden",name:"form-name",value:"Subscripción"}),n.createElement("div",{className:"form-demo__inputs"},n.createElement("div",null,n.createElement("label",{hidden:!0}," ",t("form.PlaceholderName")," "),n.createElement("input",{className:"a-input",type:"text",name:"name",placeholder:""+t("form.PlaceholderName"),required:!0})),n.createElement("div",null,n.createElement("label",{hidden:!0},t("form.PlaceholderEmail")),n.createElement("input",{className:"a-input",type:"email",name:"email",placeholder:""+t("form.PlaceholderEmail"),required:!0}))),n.createElement("div",{className:"form-demo__actions"},n.createElement("div",{className:"m-info-form__check-submit"},n.createElement("div",{className:"m-info-form__private"},n.createElement("label",{htmlFor:"politica--"+e.fromLanding,className:"a-policy"},t("form.politic")," ",n.createElement("a",{href:"/legal/politica-de-privacidad/",className:"a-link",target:"_blank",rel:"nofollow noopener noreferrer"},t("form.politicLink"))," "),n.createElement("input",{type:"checkbox",name:"politica--"+e.fromLanding,id:"politica--"+e.fromLanding,value:"acepta-politica",required:!0})),n.createElement("div",{className:"center"},n.createElement(m.Z,{submit:a})))))};var u=a(3847);let f;!function(e){e.DEMO="demo",e.INFO="info",e.SUBSCRIBE="subscribe"}(f||(f={}));var v=e=>{let t,{nameSection:a,data:o,renderForm:m}=e;if(!m)return n.createElement(r.Z,{sms:"Falta form"});switch(m){case f.SUBSCRIBE:t=d;break;case f.INFO:t=s.k;break;case f.DEMO:t=c;break;default:t=s.k}const v=(0,u.Z)(t,i.T.INFO,a),p=n.createElement(o.tagTitle||"p",{className:"a-title-section"},o.title);return n.createElement("section",{className:"s-"+a+" o-title-resume-form"},n.createElement("div",{className:"c-title-resume-form"},n.createElement("div",{className:"a-title-section"},p," "),o.resume_html&&n.createElement("div",{className:"title-resume-form__text"},(0,l.ZP)(o.resume_html)),n.createElement("div",{className:"title-resume-form__form"},n.createElement(v,null))))}},3792:function(e,t,a){a.r(t),a.d(t,{Head:function(){return R},default:function(){return C}});var n=a(3433),l=a(7500),r=a(7294),i=a(653),o=a(4514),m=a(8032),c=a(1072);const s=r.createElement("svg",{className:"icon_svg facebook_svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12.5 25"},r.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M8.526 25V13.75h3.416l.558-5H8.526V6.313c0-1.287.034-2.562 1.832-2.562h1.823V.176A20.759 20.759 0 0 0 9.032.001c-3.308 0-5.379 2.075-5.379 5.875v2.875H0v5h3.654V25Z","data-name":"facebook-[#176]"})),d=r.createElement("svg",{className:"icon_svg twitter_svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.909 18.326"},r.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M7.2 18.326A13.176 13.176 0 0 0 20.573 5.165c0-.206 0-.4-.014-.607a9.456 9.456 0 0 0 2.345-2.394 9.565 9.565 0 0 1-2.7.732A4.676 4.676 0 0 0 22.27.331a9.3 9.3 0 0 1-2.985 1.122 4.764 4.764 0 0 0-6.651-.194 4.586 4.586 0 0 0-1.36 4.422A13.467 13.467 0 0 1 1.587.847a4.587 4.587 0 0 0 1.456 6.174 4.782 4.782 0 0 1-2.134-.573v.058a4.66 4.66 0 0 0 3.771 4.536 4.745 4.745 0 0 1-2.121.069 4.69 4.69 0 0 0 4.391 3.218 9.427 9.427 0 0 1-5.837 1.982c-.373 0-.747-.022-1.119-.058a13.547 13.547 0 0 0 7.2 2.073","data-name":"twitter-[#154]"})),u=r.createElement("svg",{className:"icon_svg instagram_svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 19.996"},r.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M5.87.119a5.518 5.518 0 0 0-5.788 5.78c-.046 1-.314 8.6.462 10.59a5.034 5.034 0 0 0 2.911 2.9 7 7 0 0 0 2.415.46c8.86.4 12.145.19 13.53-3.36a7.217 7.217 0 0 0 .462-2.41c.4-8.88-.066-10.81-1.61-12.35C17.027.509 15.586-.321 5.87.119m.081 17.95a5.87 5.87 0 0 1-1.848-.34 3.28 3.28 0 0 1-1.888-1.89c-.591-1.51-.395-8.7-.342-9.86a4.263 4.263 0 0 1 1.086-2.99c.995-.99 2.281-1.48 11.034-1.08a4.266 4.266 0 0 1 2.992 1.08c1 .99 1.489 2.29 1.087 11.01a5.445 5.445 0 0 1-.342 1.84c-.9 2.31-2.973 2.63-11.779 2.23m8.139-13.38a1.195 1.195 0 1 0 1.194-1.19 1.19 1.19 0 0 0-1.194 1.19m-9.227 5.3a5.11 5.11 0 1 0 5.109-5.1 5.1 5.1 0 0 0-5.109 5.1m1.793 0a3.317 3.317 0 1 1 3.316 3.31 3.311 3.311 0 0 1-3.316-3.31","data-name":"instagram-[#167]"})),f=r.createElement("svg",{className:"icon_svg linkedin_svg",viewBox:"0 0 20.807 20.807"},r.createElement("path",{fill:"#fff",d:"M4.658 20.807H.344V6.916h4.314ZM2.5 5.021A2.51 2.51 0 1 1 5 2.5a2.519 2.519 0 0 1-2.5 2.521Zm18.3 15.786h-4.3v-6.762c0-1.612-.033-3.678-2.243-3.678-2.243 0-2.587 1.751-2.587 3.562v6.878H7.357V6.916H11.5v1.895h.06a4.534 4.534 0 0 1 4.082-2.243c4.366 0 5.169 2.875 5.169 6.609v7.631Z","data-name":"Path 15"})),v=r.createElement("svg",{className:"icon_svg github_svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},r.createElement("path",{fill:"#ffffff",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}));var p=a(3222),E=a(6364);let b;!function(e){e.LINK="link",e.BUTTON="button",e.SPAN="span"}(b||(b={}));var g=e=>{const{url:t}=e;if(!t)return r.createElement(E.Z,{sms:"No existe Url"});const a=e.colorIcon?e.colorIcon:"gray",n=e.type?e.type:b.LINK,l=!!e.isDisable;const i=(e=>e.includes("facebook.com")?s:e.includes("twitter.com")?d:e.includes("instagram.com")?u:e.includes("github.com")?v:e.includes("linkedin.com")?f:p.G)(t);switch(n){case b.LINK:return r.createElement("a",{href:t,className:"m-social-link m-social-link--"+a+" "+(l?"m-social-link--disabled":""),target:"_blank",rel:"noopener noreferrer"},i);case b.BUTTON:return r.createElement("button",{disabled:l,onClick:function(){window.open(t,"_blank")},className:"m-social-link m-social-link--"+a},i);default:return null}};var h=e=>{const t=e.socialLinkList.map((t=>{var a,n,l;return{url:t.url,colorIcon:(null==t?void 0:t.colorIcon)||(null===(a=e.settings)||void 0===a?void 0:a.colorIcon)||null,type:(null==t?void 0:t.type)||(null===(n=e.settings)||void 0===n?void 0:n.type)||null,isDisable:(null==t?void 0:t.isDisable)||(null===(l=e.settings)||void 0===l?void 0:l.isDisable)||null}}));return r.createElement("ul",{className:"m-social-link-list"},t.map(((e,t)=>r.createElement("li",{key:t,className:"social-link-list__item"},r.createElement(g,e)))))};var N=e=>{const{t:t,i18n:a}=(0,c.$G)("global"),{summary:n,photo:l}=e;return r.createElement("div",{className:"m-card-author"},r.createElement("div",{className:"c-card-author"},r.createElement(m.G,{className:"card-author__photo",alt:""+t("photoProfile"),image:l,objectFit:"cover",objectPosition:"center"}),r.createElement("div",null,r.createElement("p",{className:"card-author__name"},n.title),r.createElement("div",{className:"card-author__info"},r.createElement("div",null,(0,i.ZP)(""+n.description)),r.createElement(h,{settings:{colorIcon:"blue"},socialLinkList:n.socialNetworkList.map((e=>({url:e})))})))))},k=a(9526),_=a(9936),S=a(2378),y=a(7181);const w=S._O+"assets/thumbnails/",F=S._O+"assets/images/";var L=e=>{const t=null!=e&&e.thumbnail?(0,y.W)(e.thumbnail):(0,y.W)("home.png",w),a='\n{\n  "@context": "https://schema.org",\n  "@type": "BlogPosting",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "'+(0,y.W)(""+e.slug)+'"\n  },\n  "headline": "'+e.title+'",\n  "image": "'+t+'", \n  "author": {\n    "@type": "Organization",\n    "name": "nubarchiva"\n  },\n  "publisher": {\n    "@type": "Organization",\n    "name": "nubarchiva",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "'+(0,y.W)("logo.png",F)+'"\n    }\n  },\n  "datePublished": "'+e.datePublished+'",\n  "dateModified": "'+e.dateModified+'",\n  "description": "'+e.description+"\n}\n\n  \t";return r.createElement(r.Fragment,null,r.createElement(l.Xf,{strategy:l.p6.postHydrate,type:"application/ld+json"},a))},x=a(2778),I=a(3203);const R=e=>{var t,a,n,l,i,o,m,c,s,d,u,f,v,p,E,b,g,h,N,k,_,S,y,w,F,R,C,P,B,T,M,O,Z;return r.createElement(r.Fragment,null,r.createElement(x.H,{title:null===(t=e.data.markdownRemark)||void 0===t||null===(a=t.frontmatter)||void 0===a||null===(n=a.metas)||void 0===n?void 0:n.title,description:null===(l=e.data.markdownRemark)||void 0===l||null===(i=l.frontmatter)||void 0===i||null===(o=i.metas)||void 0===o?void 0:o.description,thumbnailWithExtension:null===(m=e.data.file)||void 0===m?void 0:m.publicURL,canonical:"blog/"+(null===(c=e.data.markdownRemark)||void 0===c||null===(s=c.frontmatter)||void 0===s||null===(d=s.metas)||void 0===d?void 0:d.slug),lang:e.pageContext.lang,isNotOriginalContent:null===(u=e.data.markdownRemark)||void 0===u||null===(f=u.frontmatter)||void 0===f||null===(v=f.metas)||void 0===v?void 0:v.isNotOriginalContent,slug:"blog/"+(null===(p=e.data.markdownRemark)||void 0===p||null===(E=p.frontmatter)||void 0===E||null===(b=E.metas)||void 0===b?void 0:b.slug),hrefLangList:null===(g=e.data)||void 0===g||null===(h=g.hrefLangsList)||void 0===h||null===(N=h.nodes)||void 0===N?void 0:N.map((e=>{var t,a;return{hrefLang:(0,I.O)(e.relativeDirectory),slug:"/blog/"+(null===(t=e.md[0].frontmatter)||void 0===t||null===(a=t.metas)||void 0===a?void 0:a.slug)}}))}),r.createElement(L,{title:null===(k=e.data.markdownRemark)||void 0===k||null===(_=k.frontmatter)||void 0===_||null===(S=_.metas)||void 0===S?void 0:S.title,slug:"blog/"+(null===(y=e.data.markdownRemark)||void 0===y||null===(w=y.frontmatter)||void 0===w||null===(F=w.metas)||void 0===F?void 0:F.slug),thumbnail:null===(R=e.data.file)||void 0===R?void 0:R.publicURL,datePublished:""+(null===(C=e.data.markdownRemark)||void 0===C||null===(P=C.frontmatter)||void 0===P?void 0:P.datePublished),dateModified:""+(null===(B=e.data.markdownRemark)||void 0===B||null===(T=B.frontmatter)||void 0===T?void 0:T.dateModified),description:null===(M=e.data.markdownRemark)||void 0===M||null===(O=M.frontmatter)||void 0===O||null===(Z=O.metas)||void 0===Z?void 0:Z.description}))};var C=e=>{var t,a,m,c,s,d,u,f,v,p,E;return r.createElement(_.Z,{landingName:"post",lang:e.pageContext.lang,navbarLinksList:(0,n.Z)(e.data.navbarLinks.nodes.map((e=>e.metas))),legalLinks:(null===(t=e.data.allLegals)||void 0===t||null===(a=t.nodes)||void 0===a?void 0:a.map((e=>{var t;return null===(t=e.childMarkdownRemark)||void 0===t?void 0:t.frontmatter})))||[]},r.createElement("div",{className:"docs"},r.createElement("div",{className:"post__headLine"},r.createElement("h1",{className:"post__h1"},null===(m=e.data.markdownRemark)||void 0===m||null===(c=m.frontmatter)||void 0===c?void 0:c.h1),r.createElement("ul",{className:"post__info"},r.createElement("li",null,r.createElement(l.rU,{to:(0,I.x)("blog",e.pageContext.lang)}," Blog ")),null===(s=e.data.markdownRemark)||void 0===s||null===(d=s.frontmatter)||void 0===d||null===(u=d.categoryList)||void 0===u?void 0:u.map((t=>{var a,n,i;return r.createElement("li",{key:null==t||null===(a=t.metas)||void 0===a?void 0:a.slug},r.createElement(l.rU,{to:(0,I.x)("blog/"+(null==t||null===(n=t.metas)||void 0===n?void 0:n.slug),e.pageContext.lang)}," ",null==t||null===(i=t.metas)||void 0===i?void 0:i.name," "))})))),r.createElement("div",{className:"doc"},(0,i.ZP)(""+(null===(f=e.data.markdownRemark)||void 0===f?void 0:f.content_html))),r.createElement("div",{className:"post__footer"},null===(v=e.data.markdownRemark)||void 0===v||null===(p=v.frontmatter)||void 0===p||null===(E=p.authorList)||void 0===E?void 0:E.map(((e,t)=>{var a;return r.createElement(N,{key:t,summary:{...null==e?void 0:e.summary,socialNetworkList:null==e||null===(a=e.profile)||void 0===a?void 0:a.socialNetworkList},photo:null==e?void 0:e.photo.sharp.gatsbyImageData})})))),r.createElement(o.Z,{isRelative:!0}),r.createElement(k.Z,{data:{title:"Sé parte del cambio",tagTitle:"h3"},nameSection:"subscribe-post",renderForm:k.X.SUBSCRIBE}))}}}]);
//# sourceMappingURL=component---src-templates-blog-page-post-tsx-e4b5595957ed64dff124.js.map