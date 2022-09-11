"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1754],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61016:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"reporting_issues",title:"Reporting Issues"},l=void 0,u={type:"mdx",permalink:"/community/reporting_issues",source:"@site/src/pages/community/reporting_issues.md",title:"Reporting Issues",description:"\x3c!--",frontMatter:{id:"reporting_issues",title:"Reporting Issues"}},p=[{value:"Reporting a security issue",id:"reporting-a-security-issue",level:2},{value:"Non security issues",id:"non-security-issues",level:2},{value:"Filing a JIRA for YuniKorn issues",id:"filing-a-jira-for-yunikorn-issues",level:2}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"reporting-a-security-issue"},"Reporting a security issue"),(0,i.kt)("p",null,"YuniKorn community cares deeply about the security and actively addresses any security issues as\nthe top priority. We follow the Apache security guidelines for handling security issues, please see the Apache doc\nabout ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/security/"},"handling security issues"),". If you find any security issue,\nplease send a vulnerability report to ",(0,i.kt)("a",{parentName:"p",href:"mailto:security@apache.org"},"security@apache.org"),", the YuniKorn security team will assess the issue\nimmediately and work with the reporter on a plan to fix it.\nPlease do not disclose the issue to any public forum before working with the security team."),(0,i.kt)("h2",{id:"non-security-issues"},"Non security issues"),(0,i.kt)("p",null,"If you have an issue with YuniKorn operation, please follow these guidelines:"),(0,i.kt)("p",null,"If you are having an issue with setup, configuration, or some other form of behavior not matching your expectation, join the user mailing list and ask your questions in that forum.\nSee the ",(0,i.kt)("a",{parentName:"p",href:"get_involved#communication-channels"},"Get Involved")," page for information on mailing lists.\nYou can also ask the YuniKorn slack channel for help, details on how to join can be found on the same page.\nIf you have a bug that needs a fix in the code or in the documentation, please follow the procedure in ",(0,i.kt)("a",{parentName:"p",href:"#filing-a-jira-for-yunikorn-issues"},"Filing a JIRA")," below."),(0,i.kt)("p",null,"JIRA is used by the Apache YuniKorn project to track all issues.\nThese include:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add new features"),(0,i.kt)("li",{parentName:"ol"},"Improving existing features"),(0,i.kt)("li",{parentName:"ol"},"Report bugs that need to be fixed in the codebase")),(0,i.kt)("p",null,"If you are interested in tracking development issues in JIRA, you can browse this ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/projects/YUNIKORN"},"link"),"."),(0,i.kt)("h2",{id:"filing-a-jira-for-yunikorn-issues"},"Filing a JIRA for YuniKorn issues"),(0,i.kt)("p",null,"Go to the Apache JIRA page to file your issue."),(0,i.kt)("p",null,"Make sure the Project is set to YuniKorn. Set the issue type field appropriately based on your analysis or request:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bug"),(0,i.kt)("li",{parentName:"ul"},"New Feature"),(0,i.kt)("li",{parentName:"ul"},"Improvement"),(0,i.kt)("li",{parentName:"ul"},"Test"),(0,i.kt)("li",{parentName:"ul"},"Wish"),(0,i.kt)("li",{parentName:"ul"},"Task")),(0,i.kt)("p",null,"For Summary, please provide a detailed title e.g. ",(0,i.kt)("em",{parentName:"p"},"K8 pod not scheduled in an empty cluster")," instead of just ",(0,i.kt)("em",{parentName:"p"},"YuniKorn scheduling failed"),"."),(0,i.kt)("p",null,"Please set the component field if you have isolated the issue to a particular component:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Component"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"build"),(0,i.kt)("td",{parentName:"tr",align:null},"Project build, build scripts, and git issues")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"core - common"),(0,i.kt)("td",{parentName:"tr",align:null},"Common code, like resources, for the core scheduler")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"core - scheduler"),(0,i.kt)("td",{parentName:"tr",align:null},"Core scheduling issues")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation fixes and enhancements")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scheduler-interface"),(0,i.kt)("td",{parentName:"tr",align:null},"Scheduler interface specification")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"security"),(0,i.kt)("td",{parentName:"tr",align:null},"Security related issues (encryption, authz & authn)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"shim - kubernetes"),(0,i.kt)("td",{parentName:"tr",align:null},"K8shim issues")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"shim - yarn"),(0,i.kt)("td",{parentName:"tr",align:null},"Hadoop YARN shim issues")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"test - smoke"),(0,i.kt)("td",{parentName:"tr",align:null},"Smoke test failures")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"test - unit"),(0,i.kt)("td",{parentName:"tr",align:null},"Unit test failures")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"webapp"),(0,i.kt)("td",{parentName:"tr",align:null},"Web UI for the scheduler")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"website"),(0,i.kt)("td",{parentName:"tr",align:null},"Website content (does not include documentation)")))),(0,i.kt)("p",null,"The Affects Versions/s field can be set to the earliest version of YuniKorn where you have seen the bug.\nIf you are not sure then just leave it empty.\nAdditionally, do not set the Fix Version. Committers use this field to determine which branches have had patches committed.\nInstead, use the Affects and Target Versions to notify others of the branches that should be considered."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can set the label for a JIRA to ",(0,i.kt)("em",{parentName:"p"},"newbie")," if you think that it is a good issue for someone who is not familiar with the project yet.")),(0,i.kt)("p",null,"If you are a developer intending to fix the bug, put your JIRA ID in the Assignee field.\nNote that you need to be in the contributors list of Apache YuniKorn in order to be able to be assign a JIRA ticket.\nIf you have not been added to the list, email the ",(0,i.kt)("a",{parentName:"p",href:"mailto:dev@yunikorn.apache.org"},"dev@yunikorn.apache.org")," mailing list or ask in a comment of the jira to request for it."),(0,i.kt)("p",null,"Please put as much detail as possible in the Description field.\nInclude your configuration changes, cluster size, and YuniKorn version.\nAny related code or configuration that helps replicate the issue you should also add."),(0,i.kt)("p",null,"For bug reports: a short reproduction of the problem would be more than welcomed.\nIf you have logs, the specific part of the log with the error message or stack trace.\nAttaching the entire log can be useful.\nIf you have already tried to debug the issue describe the steps you have already done.\nEven if that result was that you were not able to reproduce the issue."),(0,i.kt)("p",null,"For new feature requests, it may include a design document.\nIf you do not have that, or it is just a generic request, work with us to design your feature and implement it."))}d.isMDXComponent=!0}}]);