"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7541],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97061:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"roadmap",title:"Roadmap"},p=void 0,u={type:"mdx",permalink:"/community/roadmap",source:"@site/src/pages/community/roadmap.md",title:"Roadmap",description:"\x3c!--",frontMatter:{id:"roadmap",title:"Roadmap"}},s=[],c={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"future-development-long-term-goals"},"Future development: long term goals"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application and task priority support"),(0,o.kt)("li",{parentName:"ul"},"Preemption of allocations"),(0,o.kt)("li",{parentName:"ul"},"User and group quota and limit enforcement"),(0,o.kt)("li",{parentName:"ul"},"Offer an alternative mode of deployment as plugins to the default scheduler, in addition to the current standalone mode")),(0,o.kt)("h1",{id:"next-release-development"},"Next Release Development"),(0,o.kt)("p",null,"Release Details:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Version: 1.1.0"),(0,o.kt)("li",{parentName:"ul"},"Target release date: August 2022"),(0,o.kt)("li",{parentName:"ul"},"Release manager: undecided"),(0,o.kt)("li",{parentName:"ul"},"Development status: ",(0,o.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/issues/?filter=12348416"},"Issue tracker"))),(0,o.kt)("p",null,"Planned major features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-984"},"YUNIKORN-984")," Enforcing User and Group limits (phase 1)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-725"},"YUNIKORN-725")," Support for ARM64 processors"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1187"},"YUNIKORN-1187")," Recovery stabilization"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1"},"YUNIKORN-1")," Application priority"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1196"},"YUNIKORN-1196")," Update K8s build dependency"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1085"},"YUNIKORN-1085")," DaemonSet pods may fail to be scheduled on new nodes added during autoscaling")),(0,o.kt)("p",null,"Supported Kubernetes versions and the Kubernetes dependency will be defined and finalised during the development cycle."))}m.isMDXComponent=!0}}]);