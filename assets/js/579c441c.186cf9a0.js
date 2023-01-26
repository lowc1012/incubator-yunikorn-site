"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8010],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,m=p["".concat(s,".").concat(c)]||p[c]||h[c]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"usergroup_resolution",title:"User & Group Resolution"},s=void 0,u={unversionedId:"user_guide/usergroup_resolution",id:"user_guide/usergroup_resolution",title:"User & Group Resolution",description:"\x3c!--",source:"@site/docs/user_guide/usergroup_resolution.md",sourceDirName:"user_guide",slug:"/user_guide/usergroup_resolution",permalink:"/docs/next/user_guide/usergroup_resolution",draft:!1,tags:[],version:"current",frontMatter:{id:"usergroup_resolution",title:"User & Group Resolution"},sidebar:"docs",previous:{title:"App Placement Rules",permalink:"/docs/next/user_guide/placement_rules"},next:{title:"Sorting Policies",permalink:"/docs/next/user_guide/sorting_policies"}},d={},p=[{value:"User resolution",id:"user-resolution",level:2},{value:"Legacy user handling",id:"legacy-user-handling",level:2},{value:"Using the <code>yunikorn.apache.org/username</code> label",id:"using-the-yunikornapacheorgusername-label",level:3},{value:"Group resolution",id:"group-resolution",level:3},{value:"The new, recommended way of handling users",id:"the-new-recommended-way-of-handling-users",level:2},{value:"Configuring the admission controller",id:"configuring-the-admission-controller",level:3}],h={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"user-resolution"},"User resolution"),(0,o.kt)("p",null,"User information is an important aspect of the scheduling cycle. It is one of the key identifier that can be used to determine the queue to which a job should be submitted. The Yunikorn Scheduler relies on the K8s Shim to provide user information. In the world of Kubernetes, there is no object defined that identfies the actual user. This is by design and more information can be found ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#users-in-kubernetes"},"here"),"."),(0,o.kt)("p",null,"In Yunikorn, there are two ways of handling users and groups. The first is the legacy way, which uses the label ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn.apache.org/username"),". If this label is set on a pod, then the value is automatically extracted in the shim and will be used accordingly. Group resolution is also done in the shim and is disabled by default. The problem with this approach is twofold: user restrictions can be easily bypassed because the submitter is free to set this label to any value, therefore this only be used in a trusted environment. The second is that identifying the groups in the shim is too late: users can be assigned to multiple groups, but depending on the authentication mechanism (X509, tokens, LDAP, etc) it might be very difficult to look up which group a user belongs to. Since these limitations are significant, this method is kept for backward compatibility reasons and will likely be removed in the future."),(0,o.kt)("p",null,"A more reliable and robust mechanism is using the ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn.apache.org/user.info")," annotation, where the user information can be set externally by an allowed list of users or groups or the admission controller can attach this automatically to every workload."),(0,o.kt)("h2",{id:"legacy-user-handling"},"Legacy user handling"),(0,o.kt)("h3",{id:"using-the-yunikornapacheorgusername-label"},"Using the ",(0,o.kt)("inlineCode",{parentName:"h3"},"yunikorn.apache.org/username")," label"),(0,o.kt)("p",null,"Since, Kubernetes has no pre-defined field or resource for user information and individual cluster deployments with unique user identification tools can vary, we have defined a standard way of identifying the user. Yunikorn requires a Kubernetes ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"Label")," added. Using the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/"},"recommendation")," provided here, the default label is defined as below:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Label"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yunikorn.apache.org/username"),(0,o.kt)("td",{parentName:"tr",align:null},"User name. It can have duplicate entries but only the first value will be used. The default user is ",(0,o.kt)("inlineCode",{parentName:"td"},"nobody"))))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'metadata:\n  labels:\n    yunikorn.apache.org/username: "john"\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In order to make this field uniquiely identifiable to the authorized user, the suggestion is to add this label as an immutable field by the user identification tool used by the cluster administrators. The cluster administrators or users are free to use any method or tool to add this field and value. This includes adding it manually at the time of submission. ")),(0,o.kt)("admonition",{title:"Assumption ",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Assumption:\nYunikorn assumes that all pods belonging to an application are owned by the same user. We recommend that the user label is added to every pod of an app. This is to ensure that there is no discrepency. ")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn.apache.org/username")," key can be customized by overriding the default value using the ",(0,o.kt)("inlineCode",{parentName:"p"},"USER_LABEL_KEY"),"env variable in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-release/blob/master/helm-charts/yunikorn/templates/deployment.yaml"},"K8s Deployment"),". This is particularly useful in scenarios where the user label is already being added or if the label has to be modified for some secuirty reasons. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'            env:\n            - name: USER_LABEL_KEY\n              value: "custom_user_label"\n')),(0,o.kt)("h3",{id:"group-resolution"},"Group resolution"),(0,o.kt)("p",null,"Group membership resolution is pluggables and is defined here. Groups do not have to be part of provided user and group object. When the object is added to the cache the groups are automatically resolved based on the resolution that is configured.\nThe resolver which is linked to the cache can be set per partition."),(0,o.kt)("p",null,'The default group resolver is "no resolver".\nThis resolver just echos the user name and a primary group with the same name as the user.'),(0,o.kt)("p",null,"Other resolvers are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OS resolver"),(0,o.kt)("li",{parentName:"ul"},"test resolver")),(0,o.kt)("h2",{id:"the-new-recommended-way-of-handling-users"},"The new, recommended way of handling users"),(0,o.kt)("p",null,"Since Yunikorn 1.2 a more sophisticated way of user/group resolution is available."),(0,o.kt)("p",null,"In this mode, Yunikorn no longer relies on the ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn.apache.org/username")," label, instead, the annotation ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn.apache.org/user.info")," is attached to the workload. The value is simple JSON, which defines the user name and groups:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'metadata:\n  annotations:\n    yunikorn.apache.org/user.info: "\n    {\n      username: \\"yunikorn\\",\n      groups: [\n        \\"developers\\",\n        \\"devops\\"\n      ]\n    }"\n')),(0,o.kt)("p",null,"However, to enhance security, the following is enforced in the admission controller:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"not every user in the cluster is allowed to attach this annotation, only those which are configured"),(0,o.kt)("li",{parentName:"ul"},"if the annotation is missing, the admission controller will add this information automatically"),(0,o.kt)("li",{parentName:"ul"},"attempts to change this annotation will be rejected")),(0,o.kt)("p",null,"We also no longer do this on pods only, but also on Deployments, ReplicaSets, DeamonSets, StatefulSets, Jobs and CronJobs."),(0,o.kt)("p",null,"Group resolution is no longer necessary inside the shim."),(0,o.kt)("h3",{id:"configuring-the-admission-controller"},"Configuring the admission controller"),(0,o.kt)("p",null,"The admission controller can be configured with the ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn-configs")," configmap. All entries start with the prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"admissionController.accessControl."),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Default value"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"bypassAuth")),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"Allow any external user to create pods with user information set")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"trustControllers")),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"Allow Kubernetes controller users to create pods with user information set")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"systemUsers")),(0,o.kt)("td",{parentName:"tr",align:null},'"^system:serviceaccount:kube-system:"'),(0,o.kt)("td",{parentName:"tr",align:null},"Regular expression for the allowed controller service account list")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"externalUsers")),(0,o.kt)("td",{parentName:"tr",align:null},'""'),(0,o.kt)("td",{parentName:"tr",align:null},"Regular expression for the allowed external user list")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"externalGroups")),(0,o.kt)("td",{parentName:"tr",align:null},'""'),(0,o.kt)("td",{parentName:"tr",align:null},"Regular expression for the allowed external group list")))),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"bypassAuth")," is set to true the admission controller will not add the annotation to a pod if the annotation is not present and the deprecated user labell is set. If the annotation is not set and the user label is not set the new annotation will be added. In the case that ",(0,o.kt)("inlineCode",{parentName:"p"},"bypassAuth")," is false, the default, the admission controller will always add the new annotation, regardless of the existence of the deprecated label."),(0,o.kt)("p",null,"In certain scenarios, users and groups must be provided to Yunikorn upon submission because the user and group management is provided by external systems and the lookup mechanism is not trivial. In these cases, the ",(0,o.kt)("inlineCode",{parentName:"p"},"externalUsers")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"externalGroups")," can be configured which are treated as regular expressions. Matching users and groups are allowed to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn.apache.org/user.info")," annotation to any arbitrary value. Since this has implications which affects scheduling inside Yunikorn, these properties must be set carefully."))}c.isMDXComponent=!0}}]);