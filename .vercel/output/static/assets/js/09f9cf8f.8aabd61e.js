"use strict";(self.webpackChunktemporal_learning=self.webpackChunktemporal_learning||[]).push([[439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),p=n,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(4334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>S});var a=r(3117),n=r(7294),o=r(4334),i=r(6775),l=r(1980),s=r(7392),c=r(12);function u(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=p({queryString:r,groupId:a}),[f,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=s??f;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var h=r(2466),b=r(2389);const g="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,h.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==i&&(u(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function S(e){const t=(0,b.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},5206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(3117),n=(r(7294),r(3905));r(5162),r(4866);const o={id:"state-criminal-search",sidebar_position:9,keywords:["go","golang","temporal","sdk","tutorial"],title:"What does the State Criminal Search Workflow Definition Look Like?",description:"The State Criminal Search Workflow calls an external API via an Activity Execution and returns the results.",image:"/img/temporal-logo-twitter-card.png"},i=void 0,l={unversionedId:"examples/go/background-checks/state-criminal-search",id:"examples/go/background-checks/state-criminal-search",title:"What does the State Criminal Search Workflow Definition Look Like?",description:"The State Criminal Search Workflow calls an external API via an Activity Execution and returns the results.",source:"@site/docs/examples/go/background-checks/state-criminal-search.md",sourceDirName:"examples/go/background-checks",slug:"/examples/go/background-checks/state-criminal-search",permalink:"/examples/go/background-checks/state-criminal-search",draft:!1,tags:[],version:"current",lastUpdatedAt:1668461477,formattedLastUpdatedAt:"Nov 14, 2022",sidebarPosition:9,frontMatter:{id:"state-criminal-search",sidebar_position:9,keywords:["go","golang","temporal","sdk","tutorial"],title:"What does the State Criminal Search Workflow Definition Look Like?",description:"The State Criminal Search Workflow calls an external API via an Activity Execution and returns the results.",image:"/img/temporal-logo-twitter-card.png"},sidebar:"tutorialSidebar",previous:{title:"What does the Federal Criminal Search Workflow Definition look like?",permalink:"/examples/go/background-checks/federal-criminal-search"},next:{title:"What does the Motor Vehicle Search Workflow Definition look like?",permalink:"/examples/go/background-checks/motor-vehicle-search"}},s={},c=[],u={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/temporalio/background-checks/blob/main/workflows/state_criminal_search.go"},"workflows/state_criminal_search.go")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"\n// StateCriminalSearch is a Workflow Definition that calls for the execution an Activity for\n// each address associated with the Candidate.\n// This is executed as a Child Workflow by the main Background Check.\nfunc StateCriminalSearch(ctx workflow.Context, input *StateCriminalSearchWorkflowInput) (*StateCriminalSearchWorkflowResult, error) {\n    var result StateCriminalSearchWorkflowResult\n\n    name := input.FullName\n    knownaddresses := input.KnownAddresses\n    var crimes []string\n\n    for _, address := range knownaddresses {\n        activityInput := activities.StateCriminalSearchInput{\n            FullName: name,\n            Address:  address,\n        }\n        var activityResult activities.StateCriminalSearchResult\n\n        ctx = workflow.WithActivityOptions(ctx, workflow.ActivityOptions{\n            StartToCloseTimeout: time.Minute,\n        })\n\n        statecheck := workflow.ExecuteActivity(ctx, a.StateCriminalSearch, activityInput)\n\n        err := statecheck.Get(ctx, &activityResult)\n        if err == nil {\n            crimes = append(crimes, activityResult.Crimes...)\n        }\n    }\n    result.Crimes = crimes\n\n    r := StateCriminalSearchWorkflowResult(result)\n    return &r, nil\n}\n\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Swim lane diagram of the State Criminal Search Child Workflow Execution",src:r(4840).Z,width:"1220",height:"666"})))}d.isMDXComponent=!0},4840:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/state-criminal-search-flow-830a90bf1199bec911276c4da0162b53.svg"}}]);