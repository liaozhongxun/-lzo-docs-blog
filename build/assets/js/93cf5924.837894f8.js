"use strict";(self.webpackChunklzo_docs_blog=self.webpackChunklzo_docs_blog||[]).push([[3631],{9278:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(9301);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=l,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:l,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(8448),l=(n(9301),n(9278));const o={title:"\u914d\u7f6e\u8def\u5f84"},a=void 0,c={unversionedId:"linux/linux-shell-config-path",id:"linux/linux-shell-config-path",title:"\u914d\u7f6e\u8def\u5f84",description:"\u7cfb\u7edf\u51fd\u6570\u5e93",source:"@site/docs/linux/linux-shell-config-path.md",sourceDirName:"linux",slug:"/linux/linux-shell-config-path",permalink:"/docs/linux/linux-shell-config-path",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/linux/linux-shell-config-path.md",tags:[],version:"current",frontMatter:{title:"\u914d\u7f6e\u8def\u5f84"},sidebar:"tutorialSidebar",previous:{title:"linux\u670d\u52a1",permalink:"/docs/linux/linux-servers"},next:{title:"\u5c0f\u6280\u5de7",permalink:"/docs/linux/linux-shell-issues"}},i={},u=[],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7cfb\u7edf\u51fd\u6570\u5e93"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cat /etc/init.d/functions\n"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5f00\u673a\u6302\u8f7d"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cat /etc/fstab\n"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8fd0\u884c\u7ea7\u522b\u4fe1\u606f"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd /usr/lib/systemd/system\nls -la|grep runlevel   => runlevel{0-7}.target => \u5176\u4e2d234\u547d\u4ee4\u884c 5\u56fe\u5f62\nsystemctl set-default multi-user.target  #\u793e\u533a\u9ed8\u8ba4\u542f\u52a8\u4e3a\u654f\u73b2\u6a21\u5f0f\n"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"selinux"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cat /etc/selinux/config\n"))))}m.isMDXComponent=!0}}]);