"use strict";(self.webpackChunktemporal_learning=self.webpackChunktemporal_learning||[]).push([[4884],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),o=r(4334);const a="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(3117),o=r(7294),a=r(4334),l=r(6775),i=r(1980),s=r(7392),u=r(12);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}function p(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=p(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[s,c]=m({queryString:r,groupId:n}),[f,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,u.Nk)(r);return[n,(0,o.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),y=(()=>{const e=s??f;return d({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,a]),tabValues:a}}var h=r(2466),y=r(2389);const g="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,h.o5)(),p=e=>{const t=e.currentTarget,r=u.indexOf(t),n=s[r].value;n!==l&&(c(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},i,{className:(0,a.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",g)},o.createElement(v,(0,n.Z)({},e,t)),o.createElement(w,(0,n.Z)({},e,t)))}function T(e){const t=(0,y.Z)();return o.createElement(k,(0,n.Z)({key:String(t)},e))}},3407:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(3117),o=(r(7294),r(3905));r(5162),r(4866);const a={title:"Versioning Workflows with Python",sidebar_position:4,sidebar_label:"Versioning Workflows with Python",draft:!1,tags:["courses","Python"],keywords:["Temporal","application development","durable execution","development lifecycle","testing","debugging","deployment","best practices","automated testing","event history","workflow execution","production updates"],description:"In this course, you'll go beyond the fundamentals, learning how to safely evolve your Temporal application code in production. There are three primary approaches to versioning Temporal Workflows.",custom_edit_url:null,hide_table_of_contents:!0,last_update:{date:new Date("2024-04-29T00:00:00.000Z")},image:"/img/temporal-logo-twitter-card.png"},l=void 0,i={unversionedId:"courses/versioning/python",id:"courses/versioning/python",title:"Versioning Workflows with Python",description:"In this course, you'll go beyond the fundamentals, learning how to safely evolve your Temporal application code in production. There are three primary approaches to versioning Temporal Workflows.",source:"@site/docs/courses/versioning/python.md",sourceDirName:"courses/versioning",slug:"/courses/versioning/python",permalink:"/courses/versioning/python",draft:!1,editUrl:null,tags:[{label:"courses",permalink:"/tags/courses"},{label:"Python",permalink:"/tags/python"}],version:"current",lastUpdatedAt:1714348800,formattedLastUpdatedAt:"Apr 29, 2024",sidebarPosition:4,frontMatter:{title:"Versioning Workflows with Python",sidebar_position:4,sidebar_label:"Versioning Workflows with Python",draft:!1,tags:["courses","Python"],keywords:["Temporal","application development","durable execution","development lifecycle","testing","debugging","deployment","best practices","automated testing","event history","workflow execution","production updates"],description:"In this course, you'll go beyond the fundamentals, learning how to safely evolve your Temporal application code in production. There are three primary approaches to versioning Temporal Workflows.",custom_edit_url:null,hide_table_of_contents:!0,last_update:{date:"2024-04-29T00:00:00.000Z"},image:"/img/temporal-logo-twitter-card.png"},sidebar:"tutorialSidebar",previous:{title:"Versioning Workflows with TypeScript",permalink:"/courses/versioning/typescript"},next:{title:"Securing Application Data",permalink:"/courses/appdatasec/"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Prerequisites:",id:"prerequisites",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Temporal Python SDK",src:r(289).Z,width:"902",height:"254"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Estimated time"),": ~\u23f1\ufe0f 1.5 hour, self-paced."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cost"),": Free"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"In this course, you'll go beyond the fundamentals, learning how to safely evolve your Temporal application code in production. There are several approaches to versioning Temporal Workflows, and this course will cover each of them, bookended by examples of how to monitor and test your Workflow Execution History, so you can verify that your Versioning is working correctly."),(0,o.kt)("p",null,"When you've completed the course, you'll be able to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Apply an appropriate Versioning strategy to modify your Workflows"),(0,o.kt)("li",{parentName:"ul"},"Implement a Versioned Workflow"),(0,o.kt)("li",{parentName:"ul"},"Verify correct implementations of Versioning strategies")),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites:"),(0,o.kt)("p",null,"To be successful in this course, you should have an understanding of the fundamental concepts, tools, and techniques used to develop and execute basic Temporal applications with the Python SDK. This includes the ability to develop and execute Temporal Workflows and Activities, navigate the Web UI, configure and run a Worker, as well as an understanding of the high-level interactions between the Temporal Application and Temporal Cluster during Workflow Execution. We strongly recommend that you complete Temporal 101 and 102, which cover these topics, before starting this course."),(0,o.kt)("p",null,"Since code used in examples and exercises are written in Python, you must also have at least basic proficiency with the Python programming language."),(0,o.kt)("a",{className:"button button--primary",href:"https://temporal.talentlms.com/catalog/info/id:169"},"Go to Course"))}p.isMDXComponent=!0},289:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/banner_python-0d345d125b6892840c54f7e1460c8a5a.png"}}]);