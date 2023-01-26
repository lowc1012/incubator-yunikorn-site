"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8114],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(a),u=i,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},64690:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],s={id:"scheduler_object_states",title:"Scheduler Object States"},c=void 0,l={unversionedId:"design/scheduler_object_states",id:"version-0.12.1/design/scheduler_object_states",title:"Scheduler Object States",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.1/design/scheduler_object_states.md",sourceDirName:"design",slug:"/design/scheduler_object_states",permalink:"/docs/0.12.1/design/scheduler_object_states",draft:!1,tags:[],version:"0.12.1",frontMatter:{id:"scheduler_object_states",title:"Scheduler Object States"},sidebar:"version-0.12.1/docs",previous:{title:"Batch Workloads Ordering with StateAware Policy",permalink:"/docs/0.12.1/design/state_aware_scheduling"},next:{title:"Gang scheduling design",permalink:"/docs/0.12.1/design/gang_scheduling"}},d={},h=[{value:"Core Scheduler",id:"core-scheduler",level:2},{value:"Application State",id:"application-state",level:3},{value:"Object State",id:"object-state",level:3},{value:"Node",id:"node",level:3},{value:"K8Shim Resource Manager",id:"k8shim-resource-manager",level:2},{value:"Application",id:"application",level:3},{value:"Task",id:"task",level:3},{value:"Node",id:"node-1",level:3},{value:"Scheduler",id:"scheduler",level:3}],p={toc:h};function u(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The YuniKorn project uses state machines to track the states of different objects.\nThis ranges from applications in the core to nodes in the k8shim.\nThe state machines are independent and not shared between the resource managers and core.\nA resource manager shim, and the core can thus have an independent idea of the state of a similar object."),(0,r.kt)("h2",{id:"core-scheduler"},"Core Scheduler"),(0,r.kt)("p",null,"State change are triggered by events that get processed.\nOne event can cause a change for multiple states or no change at all."),(0,r.kt)("h3",{id:"application-state"},"Application State"),(0,r.kt)("p",null,"Applications have a complex state model.\nAn application when created starts ain the new state."),(0,r.kt)("p",null,"An application can have the following states:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New: A new application that is being submitted or created, from here the application transitions into the accepted state when it is ready for scheduling.\nThe first ask to be added will trigger the transition."),(0,r.kt)("li",{parentName:"ul"},"Accepted: The application is ready and part of the scheduling cycle.\nOn allocation of the first ask the application moves into a starting state.\nThis state is part of the normal scheduling cycle."),(0,r.kt)("li",{parentName:"ul"},"Starting: The application has exactly one allocation confirmed this corresponds to one running container/pod.\nThe application transitions to running if and when more allocations are added to the application.\nThis state times out automatically to prevent applications that consist of just one allocation from getting stuck in this state.\nThe current time out is set to 5 minutes, and cannot be changed.\nIf after the timeout expires the application will auto transition to running.\nThe state change on time out is independent of the number of allocations added.\nThis state is part of the normal scheduling cycle."),(0,r.kt)("li",{parentName:"ul"},"Running: The state in which the application will spend most of its time.\nContainers/pods can be added to and removed from the application.\nThis state is part of the normal scheduling cycle."),(0,r.kt)("li",{parentName:"ul"},"Completing: An application that has no pending requests or running containers/pod will be completing.\nThis state shows that the application has not been marked completed yet but currently is not actively being scheduled."),(0,r.kt)("li",{parentName:"ul"},"Completed: An application is considered completed when it has been in the completing state for a defined time period.\nFrom this state the application can only move to the Expired state, and it cannot move back into any of scheduling states (Running or Completing)\nThe current timeout is set to 30 seconds."),(0,r.kt)("li",{parentName:"ul"},"Expired: The completed application is tracked for a period of time, after that is expired and deleted from the scheduler.\nThis is a final state and after this state the application cannot be tracked anymore. "),(0,r.kt)("li",{parentName:"ul"},"Failing: An application marked for failing, what still has some allocations or asks what needs to be cleaned up before entering into the Failed state.\nThe application can be Failing when the partition it belongs to is removed or during gang scheduling, if the placeholder processing times out, and the application has no real allocations yet."),(0,r.kt)("li",{parentName:"ul"},"Failed: An application is considered failed when it was marked for failure and all the pending requests and allocations were already removed.\nThis is a final state. The application cannot change state after entering."),(0,r.kt)("li",{parentName:"ul"},"Rejected: The application was rejected when it was added to the scheduler.\nThis only happens when a resource manager tries to add a new application, when it gets created in a New state, and the scheduler rejects the creation.\nApplications can be rejected due ACLs denying access to a queue the application has specified, or a placement via placement rules has failed.\nThis is a final state. The application cannot change state after entering.")),(0,r.kt)("p",null,"The events that can trigger a state change:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reject: rejecting the application by the scheduler (source: core scheduler)"),(0,r.kt)("li",{parentName:"ul"},"Run: progress an application to the next active state (source: core scheduler)"),(0,r.kt)("li",{parentName:"ul"},"Complete: mark an application as idle or complete (source: core scheduler)"),(0,r.kt)("li",{parentName:"ul"},"Fail: fail an application (source: resource manager or core scheduler)"),(0,r.kt)("li",{parentName:"ul"},"Expire: progress the application to the expired state and remove it from the scheduler (source: core scheduler)")),(0,r.kt)("p",null,"Here is a diagram that shows the states with the event that causes the state to change:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"application state diagram",src:a(44359).Z,width:"820",height:"899"})),(0,r.kt)("h3",{id:"object-state"},"Object State"),(0,r.kt)("p",null,"The object state is used by the following objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"queues"),(0,r.kt)("li",{parentName:"ul"},"partitions")),(0,r.kt)("p",null,"The object states are as follows: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Active: The object is active and used during the scheduling cycle.\nThis is the starting and normal state of an object.\nAn active object transitions to draining when it is removed.  "),(0,r.kt)("li",{parentName:"ul"},"Stopped: The object is stopped and no longer actively scheduled.\nThe object if empty is ready to be removed from the scheduler.\nThe object can transition back into active state if it gets re-started."),(0,r.kt)("li",{parentName:"ul"},"Draining: Before an object can be removed it needs to be cleaned up.\nThe cleanup starts with placing the object in the draining state.\nIn this state it does not accept additions or changes but is still actively being scheduled.\nThis allows for a graceful shutdown, cleanup and removal of the object.\nThis is the final state.")),(0,r.kt)("p",null,"The events that can trigger a state change:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start: make the object active (source: core scheduler)"),(0,r.kt)("li",{parentName:"ul"},"Stop: make the object inactive (source: core scheduler)"),(0,r.kt)("li",{parentName:"ul"},"Remove: mark an object for removal (source: core scheduler)")),(0,r.kt)("p",null,"Here is a diagram that shows the states with the event that causes the state to change:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"object state diagram",src:a(41152).Z,width:"620",height:"266"})),(0,r.kt)("h3",{id:"node"},"Node"),(0,r.kt)("p",null,"Node objects in the core are not using a state machine but do have a state.\nA node can have one of two states: ",(0,r.kt)("inlineCode",{parentName:"p"},"schedulable")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"not schedulable"),".\nThere is no complex state model or complex transition logic.\nThe scheduler can either use the node or not."),(0,r.kt)("p",null,"The node status changes based on the status provided by the resource manager (shim) that owns the node. "),(0,r.kt)("h2",{id:"k8shim-resource-manager"},"K8Shim Resource Manager"),(0,r.kt)("h3",{id:"application"},"Application"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"application state diagram",src:a(67469).Z,width:"814",height:"899"})),(0,r.kt)("h3",{id:"task"},"Task"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"task state diagram",src:a(58478).Z,width:"891",height:"871"})),(0,r.kt)("h3",{id:"node-1"},"Node"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"node state diagram",src:a(21547).Z,width:"546",height:"523"})),(0,r.kt)("h3",{id:"scheduler"},"Scheduler"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"scheduler state diagram",src:a(93248).Z,width:"710",height:"523"})))}u.isMDXComponent=!0},44359:function(e,t,a){t.Z=a.p+"assets/images/application-state-3fafccad36573faea7f6bff62cb312f7.png"},67469:function(e,t,a){t.Z=a.p+"assets/images/k8shim-application-state-1b8df985a622da0f105edde142b73243.png"},21547:function(e,t,a){t.Z=a.p+"assets/images/k8shim-node-state-cb64692729955fb1eb0899e747845921.png"},93248:function(e,t,a){t.Z=a.p+"assets/images/k8shim-scheduler-state-a7af383ab699d6b1c72f540d0e7d6f72.png"},58478:function(e,t,a){t.Z=a.p+"assets/images/k8shim-task-state-14b1032c3d70d0244a074fd1ca2cb4fc.png"},41152:function(e,t,a){t.Z=a.p+"assets/images/object-state-ce78c19f65c895bbbddd0e48b4c22d8f.png"}}]);