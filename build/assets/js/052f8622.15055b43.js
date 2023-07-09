"use strict";(self.webpackChunklzo_docs_blog=self.webpackChunklzo_docs_blog||[]).push([[5473],{6291:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(8404);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,b=u["".concat(i,".").concat(d)]||u[d]||g[d]||a;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1140:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(2687),o=(r(8404),r(6291));const a={title:"go"},l=void 0,c={unversionedId:"server/go/go-bash",id:"server/go/go-bash",title:"go",description:"\u73af\u5883\u914d\u7f6e",source:"@site/docs/server/go/go-bash.md",sourceDirName:"server/go",slug:"/server/go/go-bash",permalink:"/docs/server/go/go-bash",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/server/go/go-bash.md",tags:[],version:"current",frontMatter:{title:"go"},sidebar:"tutorialSidebar",previous:{title:"ruby\u5de5\u5177",permalink:"/docs/server/Ruby/ruby-setting"},next:{title:"\u63a5\u53e3\u6587\u6863",permalink:"/docs/server/node/node-apidoc"}},i={},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:4},{value:"\u914d\u7f6e\u73af\u5883",id:"\u914d\u7f6e\u73af\u5883",level:4},{value:"\u67e5\u770b\u5b89\u88c5\u4e13\u9898",id:"\u67e5\u770b\u5b89\u88c5\u4e13\u9898",level:4},{value:"\u5b89\u88c5\u5305",id:"\u5b89\u88c5\u5305",level:4}],p={toc:s},u="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/huangeh/p/14331987.html"},"\u73af\u5883\u914d\u7f6e")),(0,o.kt)("h4",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://dl.google.com/go/go1.18.6.linux-amd64.tar.gz\ntar -C /usr/local -zxvf  go1.18.6.linux-amd64.tar.gz\n")),(0,o.kt)("h4",{id:"\u914d\u7f6e\u73af\u5883"},"\u914d\u7f6e\u73af\u5883"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# go \u5de5\u4f5c\u7a7a\u95f4\u5fc5\u987b\u5305\u542b\u8fd9\u4e09\u4e2a\u5b50\u76ee\u5f55\nmkdir -p /usr/local/gocode/{src,bin,pkg}\n\n# /etc/profile\nexport GO111MODULE=on\nexport GOROOT=/usr/local/go\nexport GOPATH=/usr/local/gocode\nexport PATH=$PATH:$GOROOT/bin:$GOPATH/bin\n\u6216\nexport GOROOT=/usr/local/go           #Golang\u6e90\u4ee3\u7801\u76ee\u5f55\uff0c\u5b89\u88c5\u76ee\u5f55\nexport GOPATH=/usr/local/gocode        #Golang\u9879\u76ee\u4ee3\u7801\u76ee\u5f55\uff08\u5de5\u4f5c\u7a7a\u95f4\uff09\nexport PATH=$GOROOT/bin:$PATH    #Linux\u73af\u5883\u53d8\u91cf\nexport PATH=$GOPATH/bin:$PATH    #Linux\u73af\u5883\u53d8\u91cf\nexport GOBIN=$GOPATH/bin        #go install\u540e\u751f\u6210\u7684\u53ef\u6267\u884c\u547d\u4ee4\u5b58\u653e\u8def\u5f84\n# source /etc/profile \u5c31\u5b89\u88c5\u597d\u4e86\n")),(0,o.kt)("h4",{id:"\u67e5\u770b\u5b89\u88c5\u4e13\u9898"},"\u67e5\u770b\u5b89\u88c5\u4e13\u9898"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770bgo\u73af\u5883\u53d8\u91cf\u8def\u5f84\nwhich go\n# \u67e5\u770bgo\u8bed\u8a00\u73af\u5883\u4fe1\u606f\ngo env\n# \u67e5\u770bgo\u7248\u672c\uff0c\u67e5\u770b\u662f\u5426\u5b89\u88c5\u6210\u529f\ngo version\n")),(0,o.kt)("h4",{id:"\u5b89\u88c5\u5305"},"\u5b89\u88c5\u5305"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"go get github.com/integrii/flaggy ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"golang.org \u8bbf\u95ee\u8270\u96be")))}g.isMDXComponent=!0}}]);