"use strict";(self.webpackChunklzo_docs_blog=self.webpackChunklzo_docs_blog||[]).push([[6103],{9278:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(9301);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(8448),a=(n(9301),n(9278));const o={title:"vscode\u914d\u7f6eC/C++\u73af\u5883"},l=void 0,i={unversionedId:"server/C/c-vscode",id:"server/C/c-vscode",title:"vscode\u914d\u7f6eC/C++\u73af\u5883",description:"Linux",source:"@site/docs/server/C/c-vscode.md",sourceDirName:"server/C",slug:"/server/C/c-vscode",permalink:"/docs/server/C/c-vscode",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/server/C/c-vscode.md",tags:[],version:"current",frontMatter:{title:"vscode\u914d\u7f6eC/C++\u73af\u5883"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5",permalink:"/docs/server/C/C-\u6570\u636e\u7ed3\u6784"},next:{title:"C++ \u57fa\u7840",permalink:"/docs/server/C++/c++-base"}},c={},s=[{value:"Linux",id:"linux",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"linux"},"Linux"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5gcc\uff0cgdb"),(0,a.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u4e00\u4e2a\u6587\u4ef6\u53eb\u4f5c\u4e3a\u5de5\u4f5c\u533a\u5982xxx/cpp(\u968f\u610f)"),(0,a.kt)("li",{parentName:"ul"},"vscode\u6253\u5f00\u4e0a\u9762\u5efa\u7acb\u7684\u6587\u4ef6\u5939"),(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5C/C++\u3001runcode \u7b49 vscode\u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u8c03\u8bd5\u866b\u5b50\u6309\u94ae\uff0c\u521b\u5efalaunch.json -> \u9009\u62e9GDB/LLDB ->\u9009\u62e9\u7f16\u8bd1\u5668-> \u81ea\u52a8\u751f\u6210lunch\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u81ea\u52a8\u751f\u6210.vscode/tasks.json\u6587\u4ef6,C+S+P\u8f93\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"preLaunchTask"),"\u7684\u503c,\u751f\u6210tasks.json"),(0,a.kt)("li",{parentName:"ul"},"lunch.json \u7684",(0,a.kt)("inlineCode",{parentName:"li"},"preLaunchTask")," \u4e0etasks.json\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"label"),"\u5bf9\u5e94"),(0,a.kt)("li",{parentName:"ul"},"tasks.json \u7684args\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"-std"),"\u6307\u5b9a\u8bed\u8a00\u6807\u51c6"),(0,a.kt)("li",{parentName:"ul"},"C/C++\u63d2\u4ef6\u8bbe\u7f6e\u4e2d ",(0,a.kt)("inlineCode",{parentName:"li"},"C Standard"),",",(0,a.kt)("inlineCode",{parentName:"li"},"Cpp Standard"),":\u8bbe\u7f6e\u6700\u65b0\u8bed\u8a00\u6807\u51c6"),(0,a.kt)("li",{parentName:"ul"},"\u7ed9std\u884c\u6dfb\u52a0\u65ad\u7535",(0,a.kt)("inlineCode",{parentName:"li"},"f5"),'\u8c03\u8bd5\uff0c\u5e76\u751f\u6210\u53ef\u6267\u884c\u6587\u4ef6(lunch:"internalConsoleOptions": "neverOpen"\u5173\u95ed\u8f93\u5165\u8f93\u51fa)')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C++"},'\n#include <iostream>\n#include <string>\n\nint main(int argc, char const *argv[])\n{\n    std::cout << "hello" << std::endl;\n    return 0;\n}\n')))}d.isMDXComponent=!0}}]);