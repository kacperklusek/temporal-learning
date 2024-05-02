"use strict";(self.webpackChunktemporal_learning=self.webpackChunktemporal_learning||[]).push([[7536],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7294),a=r(4334),o=r(3438),i=r(9960),l=r(3919),s=r(5999);const c="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",c)},r)}function m(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:o},r," ",o),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:i},i))}function f(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(4334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(3117),a=r(7294),o=r(4334),i=r(6775),l=r(1980),s=r(7392),c=r(12);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:r,groupId:n}),[f,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=s??f;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var y=r(2466),b=r(2389);const h="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,y.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==i&&(u(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",g,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return a.createElement(T,(0,n.Z)({key:String(t)},e))}},9291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(3117),a=(r(7294),r(3905)),o=(r(5162),r(4866),r(2991)),i=r(3438);const l={title:"TypeScript tutorials",sidebar_position:2,keywords:["TypeScript","tutorial","temporal","workflows","nextjs","express","node.js","javascript"],description:"Build Temporal applications with these TypeScript tutorials",image:"/img/temporal-logo-twitter-card.png"},s=void 0,c={unversionedId:"tutorials/typescript/index",id:"tutorials/typescript/index",title:"TypeScript tutorials",description:"Build Temporal applications with these TypeScript tutorials",source:"@site/docs/tutorials/typescript/index.md",sourceDirName:"tutorials/typescript",slug:"/tutorials/typescript/",permalink:"/tutorials/typescript/",draft:!1,tags:[],version:"current",lastUpdatedAt:1687883783,formattedLastUpdatedAt:"Jun 27, 2023",sidebarPosition:2,frontMatter:{title:"TypeScript tutorials",sidebar_position:2,keywords:["TypeScript","tutorial","temporal","workflows","nextjs","express","node.js","javascript"],description:"Build Temporal applications with these TypeScript tutorials",image:"/img/temporal-logo-twitter-card.png"},sidebar:"tutorialSidebar",previous:{title:"Build an email subscription workflow with Temporal and Go",permalink:"/tutorials/go/subscriptions/"},next:{title:"Integrating Temporal into an existing Next.js application",permalink:"/tutorials/typescript/nextjs/"}},u={},p=[],d={toc:p};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Temporal TypeScript SDK",src:r(2813).Z,width:"902",height:"254"})),(0,a.kt)("p",null,"TypeScript is a strongly typed programming language that builds on JavaScript. Temporal's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.temporal.io/dev-guide/typescript/foundations//#add-your-sdk"},"TypeScript SDK")," lets you use TypeScript to build Node.js applications that take advantage of Temporal's features."),(0,a.kt)("p",null,"These tutorials will walk you through building Temporal applications using TypeScript."),(0,a.kt)(o.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0},2813:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/banner_typescript-2156b7edec5a96f12884d24603574199.png"}}]);