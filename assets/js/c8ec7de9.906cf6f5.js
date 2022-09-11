"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2495],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84200:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"workload_overview",title:"Overview"},u=void 0,s={unversionedId:"user_guide/workloads/workload_overview",id:"user_guide/workloads/workload_overview",title:"Overview",description:"\x3c!--",source:"@site/docs/user_guide/workloads/workload_overview.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/workload_overview",permalink:"/docs/next/user_guide/workloads/workload_overview",draft:!1,tags:[],version:"current",frontMatter:{id:"workload_overview",title:"Overview"},sidebar:"docs",previous:{title:"Labels and Annotations in YuniKorn",permalink:"/docs/next/user_guide/labels_and_annotations_in_yunikorn"},next:{title:"Run Spark Jobs",permalink:"/docs/next/user_guide/workloads/run_spark"}},p={},c=[{value:"Advanced Examples",id:"advanced-examples",level:2}],d={toc:c};function m(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The YuniKorn scheduler is able to run any Kubernetes workload. All that is required is to ensure\nthat the ",(0,o.kt)("inlineCode",{parentName:"p"},"schedulerName")," field of a Pod specification is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn")," and an ",(0,o.kt)("inlineCode",{parentName:"p"},"applicationId"),"\nlabel is set to a unique value per application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    app: sleep\n    applicationId: "application-sleep-0001"\n  name: sleep-app-1\nspec:\n  schedulerName: yunikorn\n  containers:\n    - name: sleep-30s\n      image: "alpine:latest"\n      command: ["sleep", "30"]\n      resources:\n        requests:\n          cpu: "100m"\n          memory: "100M"\n')),(0,o.kt)("p",null,"Additionally, if the YuniKorn admission controller is present, the ",(0,o.kt)("inlineCode",{parentName:"p"},"schedulerName")," field may be\nomitted as it will be set automatically on newly created pods."),(0,o.kt)("h2",{id:"advanced-examples"},"Advanced Examples"),(0,o.kt)("p",null,"Examples of more advanced use cases can be found here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"run_spark"},"Run Spark Jobs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"run_flink"},"Run Flink Jobs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"run_tf"},"Run TensorFlow Jobs"))))}m.isMDXComponent=!0}}]);