"use strict";(self.webpackChunktemporal_learning=self.webpackChunktemporal_learning||[]).push([[4134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294),a=n(4334);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>_});var o=n(3117),a=n(7294),i=n(4334),r=n(6775),l=n(1980),s=n(7392),p=n(12);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const o=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,i=c(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:n,groupId:o}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,p.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:o}),k=(()=>{const e=s??m;return d({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=n(2466),k=n(2389);const y="tabList__CuJ",w="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,f.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),o=s[n].value;o!==r&&(u(t),l(o))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:c},l,{className:(0,i.Z)("tabs__item",w,l?.className,{"tabs__item--active":r===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function b(e){const t=m(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",y)},a.createElement(g,(0,o.Z)({},e,t)),a.createElement(v,(0,o.Z)({},e,t)))}function _(e){const t=(0,k.Z)();return a.createElement(b,(0,o.Z)({key:String(t)},e))}},8875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(3117),a=(n(7294),n(3905));n(5162),n(4866);const i={id:"data-pipeline-tutorial",sidebar_position:3,keywords:["Python","temporal","sdk","tutorial"],tags:["Python","SDK"],last_update:{date:new Date("2023-05-01T00:00:00.000Z")},title:"Build a data pipeline Workflow with Temporal and Python",description:"You'll implement a data pipeline application in Python, using Temporal's Workflows, Activities, and Schedules to orchestrate and run the steps in your pipeline.",image:"/img/temporal-logo-twitter-card.png"},r=void 0,l={unversionedId:"tutorials/python/data-pipelines/data-pipeline-tutorial",id:"tutorials/python/data-pipelines/data-pipeline-tutorial",title:"Build a data pipeline Workflow with Temporal and Python",description:"You'll implement a data pipeline application in Python, using Temporal's Workflows, Activities, and Schedules to orchestrate and run the steps in your pipeline.",source:"@site/docs/tutorials/python/data-pipelines/index.md",sourceDirName:"tutorials/python/data-pipelines",slug:"/tutorials/python/data-pipelines/",permalink:"/tutorials/python/data-pipelines/",draft:!1,tags:[{label:"Python",permalink:"/tags/python"},{label:"SDK",permalink:"/tags/sdk"}],version:"current",lastUpdatedAt:1682899200,formattedLastUpdatedAt:"May 1, 2023",sidebarPosition:3,frontMatter:{id:"data-pipeline-tutorial",sidebar_position:3,keywords:["Python","temporal","sdk","tutorial"],tags:["Python","SDK"],last_update:{date:"2023-05-01T00:00:00.000Z"},title:"Build a data pipeline Workflow with Temporal and Python",description:"You'll implement a data pipeline application in Python, using Temporal's Workflows, Activities, and Schedules to orchestrate and run the steps in your pipeline.",image:"/img/temporal-logo-twitter-card.png"},sidebar:"tutorialSidebar",previous:{title:"Python tutorials",permalink:"/tutorials/python/"},next:{title:"Build an email subscription workflow with Temporal and Python",permalink:"/tutorials/python/subscriptions/"}},s={},p=[{value:"Introduction",id:"introduction",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Develop a Workflow to orchestrate your data pipeline",id:"develop-a-workflow-to-orchestrate-your-data-pipeline",level:2},{value:"Develop Activities to process your data",id:"develop-activities-to-process-your-data",level:2},{value:"Create the Worker to host your Workflow and Activities",id:"create-the-worker-to-host-your-workflow-and-activities",level:2},{value:"Run the Workflow to execute the data pipeline",id:"run-the-workflow-to-execute-the-data-pipeline",level:2},{value:"Schedule a Workflow to run on a specific interval",id:"schedule-a-workflow-to-run-on-a-specific-interval",level:2},{value:"Delete the Schedule",id:"delete-the-schedule",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Next steps",id:"next-steps",level:3}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Temporal Python SDK",src:n(289).Z,width:"902",height:"254"})),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"When it comes to building data pipelines, choosing the right workflow model is crucial for achieving reliability, scalability, and maintainability.\nTemporal makes writing data pipelines less complex  with Workflows and Activities."),(0,a.kt)("p",null,"With Temporal, you can retrieve data from a source, process the information with steps, and output the flow of information to a destination, all using code. This means you can implement, test, and execute all your developer best practices as required. Furthermore, Temporal offers built-in resilience and fault tolerance features that can handle unexpected failures and issues seamlessly."),(0,a.kt)("p",null,"In this tutorial you'll build a data pipeline with Temporal, where you'll leverage its features to build robust, scalable, and maintainable pipelines, by retrieving the latest ",(0,a.kt)("a",{parentName:"p",href:"https://community.temporal.io"},"Temporal Community")," posts, processing them based on their post identifier, and then return a list of the top 10 most recently viewed posts."),(0,a.kt)("p",null,"Then, to improve your understanding, you'll schedule your Workflows on an interval timer to automate the execution of these steps."),(0,a.kt)("p",null,"By the end of this tutorial, you'll have a comprehensive understanding of how to implement code-based data pipelines using Temporal's features, such as Retries, Timeouts, and Schedules to ensure your pipeline's resilience and fault tolerance."),(0,a.kt)("p",null,"You can find the completed application on GitHub in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/temporalio/data-pipeline-project-python"},"data-pipeline-project-python")," repository."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before starting this tutorial:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Complete the ",(0,a.kt)("a",{parentName:"li",href:"/getting_started/python/hello_world_in_python/"},"Hello World")," tutorial"),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://pandas.pydata.org"},"Pandas")," (tested with version 2.0.1)"),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aiohttp.org/en/stable/"},"aiohttp")," (tested with version 3.8.4)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-command"},"pip install pandas aiohttp\n")),(0,a.kt)("p",null,"Now that you've installed the required libraries, develop your Workflow Definition and get started with building a fault-tolerant data pipeline."),(0,a.kt)("h2",{id:"develop-a-workflow-to-orchestrate-your-data-pipeline"},"Develop a Workflow to orchestrate your data pipeline"),(0,a.kt)("p",null,"Use Workflows to orchestrate the execution of your data pipeline's steps.\nThe Workflow will be responsible for executing the Activities, or steps, in your data pipeline, and handle any failures that may occur using retries and timeouts."),(0,a.kt)("p",null,"Create a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"your_workflow.py")," and add the following code:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/temporalio/data-pipeline-project-python/blob/main/your_workflow.py"},"your_workflow.py")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from datetime import timedelta\nfrom typing import Any, List\n\nfrom temporalio import workflow\n\nwith workflow.unsafe.imports_passed_through():\n    from activities import TemporalCommunityPost, post_ids, top_posts\n\n\n@workflow.defn\nclass TemporalCommunityWorkflow:\n    @workflow.run\n    async def run(self) -> List[TemporalCommunityPost]:\n        news_ids = await workflow.execute_activity(\n            post_ids,\n            start_to_close_timeout=timedelta(seconds=15),\n        )\n        return await workflow.execute_activity(\n            top_posts,\n            news_ids,\n            start_to_close_timeout=timedelta(seconds=15),\n        )\n\n\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TemporalCommunityWorkflow")," class is decorated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@workflow.defn")," which must be set on any registered Workflow class."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"async def run()")," function is decorated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@workflow.run")," which is set on the one asynchronous method on the same class as the ",(0,a.kt)("inlineCode",{parentName:"p"},"@workflow.defn"),"."),(0,a.kt)("p",null,"There are two Activities being executed, ",(0,a.kt)("inlineCode",{parentName:"p"},"post_ids")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"top_posts"),".\nThese Activities are defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"activities.py")," file, which will be explained later."),(0,a.kt)("p",null,"Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow.execute_activity()")," function, pass the reference of Activity Definition, or step in your data pipeline.\nIf that step takes an argument, then use the second positional argument for that name, as shown in the second ",(0,a.kt)("inlineCode",{parentName:"p"},"execute_activity()")," function."),(0,a.kt)("p",null,"You must set either a Start-To-Close or Schedule-To-Close Activity Timeout."),(0,a.kt)("p",null,"Now, that the Workflow is explained, develop your Activities to handle the logic of your data pipeline."),(0,a.kt)("h2",{id:"develop-activities-to-process-your-data"},"Develop Activities to process your data"),(0,a.kt)("p",null,"Think of the Activities as steps in your data pipeline. Each Activity should handle something that you want executed.\nThe Workflow will handle the execution of each step."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"activities.py")," file, write out each step in the data processing pipeline."),(0,a.kt)("p",null,"In this example, establish a connection to the ",(0,a.kt)("inlineCode",{parentName:"p"},"aiohttp"),"'s ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aiohttp.org/en/stable/client_reference.html"},"Client Session"),".\nThe ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aiohttp.org/en/stable/index.html"},"aiohttp")," library is recommended instead of ",(0,a.kt)("a",{parentName:"p",href:"https://requests.readthedocs.io"},"requests"),", because it avoids making blocking calls."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"post_ids()")," function gets the top 10 Temporal Community posts while, ",(0,a.kt)("inlineCode",{parentName:"p"},"top_posts()")," gets items based on the post's identifier."),(0,a.kt)("p",null,"Create a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"activities.py")," and add the following code:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/temporalio/data-pipeline-project-python/blob/main/activities.py"},"activities.py")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'from dataclasses import dataclass\nfrom typing import Any, List\n\nimport aiohttp\nfrom temporalio import activity\n\nTASK_QUEUE_NAME = "temporal-community-task-queue"\n\n\n@dataclass\nclass TemporalCommunityPost:\n    title: str\n    url: str\n    views: int\n\n\n@activity.defn\nasync def post_ids() -> List[str]:\n    async with aiohttp.ClientSession() as session:\n        async with session.get("https://community.temporal.io/latest.json") as response:\n            if not 200 <= int(response.status) < 300:\n                raise RuntimeError(f"Status: {response.status}")\n            post_ids = await response.json()\n\n    return [str(topic["id"]) for topic in post_ids["topic_list"]["topics"]]\n\n\n@activity.defn\nasync def top_posts(post_ids: List[str]) -> List[TemporalCommunityPost]:\n    results: List[TemporalCommunityPost] = []\n    async with aiohttp.ClientSession() as session:\n        for item_id in post_ids:\n            async with session.get(\n                f"https://community.temporal.io/t/{item_id}.json"\n            ) as response:\n                if response.status < 200 or response.status >= 300:\n                    raise RuntimeError(f"Status: {response.status}")\n                item = await response.json()\n                slug = item["slug"]\n                url = f"https://community.temporal.io/t/{slug}/{item_id}"\n                community_post = TemporalCommunityPost(\n                    title=item["title"], url=url, views=item["views"]\n                )\n                results.append(community_post)\n    results.sort(key=lambda x: x.views, reverse=True)\n    top_ten = results[:10]\n    return top_ten\n\n\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The Temporal Community posts are built off of the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.discourse.org/#tag/Posts"},"Discourse")," API.")),(0,a.kt)("p",null,"Each function contains an ",(0,a.kt)("inlineCode",{parentName:"p"},"activity.defn")," decorator that ensures that function is durably backed by Temporal.\nThe Retry Policy defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"TemporalCommunityWorkflow")," class contains information needed to retry in case the API endpoint is down."),(0,a.kt)("p",null,"By default, the Retry Policy is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-output"},"Initial Interval     = 1 second\nBackoff Coefficient  = 2.0\nMaximum Interval     = 100 \xd7 Initial Interval\nMaximum Attempts     = \u221e\nNon-Retryable Errors = []\n")),(0,a.kt)("p",null,"The first step of the data pipeline checks if the status of the endpoint returns a 200 response, if it doesn't, it will raise a ",(0,a.kt)("inlineCode",{parentName:"p"},"RuntimeError"),", otherwise, it will continue processing the post identifiers.\nThe last step of the data pipeline returns the results, which will be processed in your ",(0,a.kt)("inlineCode",{parentName:"p"},"run_workflow.py")," file."),(0,a.kt)("p",null,"Now that you've defined the steps in your data pipeline, create a Worker that will host the Workflow and Activities."),(0,a.kt)("h2",{id:"create-the-worker-to-host-your-workflow-and-activities"},"Create the Worker to host your Workflow and Activities"),(0,a.kt)("p",null,"The Worker component plays a crucial role in your data pipeline by hosting and executing Workflows and Activities. It serves as the backbone of the execution process, responsible for listening to Task Queues and performing the necessary actions in response to incoming tasks."),(0,a.kt)("p",null,"To enable the execution of your Workflows and Activities, you need to set up a Worker. Start by creating a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"run_worker.py")," and add the following code. This code will define the Worker's behavior, allowing it to host and execute the Workflows and/or Activities associated with your application."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/temporalio/data-pipeline-project-python/blob/main/run_worker.py"},"run_worker.py")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'import asyncio\n\nfrom temporalio.client import Client\nfrom temporalio.worker import Worker\n\nfrom activities import TASK_QUEUE_NAME, post_ids, top_posts\nfrom your_workflow import TemporalCommunityWorkflow\n\n\nasync def main():\n    client = await Client.connect("localhost:7233")\n    worker = Worker(\n        client,\n        task_queue=TASK_QUEUE_NAME,\n        workflows=[TemporalCommunityWorkflow],\n        activities=[top_posts, post_ids],\n    )\n    await worker.run()\n\n\nif __name__ == "__main__":\n    asyncio.run(main())\n')),(0,a.kt)("p",null,"To run a Worker, you create an instance of the same Client that's used to start the Workflow.\nYou must set the Worker to the same Task Queue name and specify your Workflow and Activity names in a list."),(0,a.kt)("p",null,"The Worker need to know which Workflows and Activities it should execute in response to incoming tasks on the Task Queue.\nSo by specifying the names of the Workflows and Activities, the Worker knows which code to run when it receives a task from the Task Queue."),(0,a.kt)("p",null,"Then run the Worker with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio-runner.html#asyncio.run"},"asyncio.run()")," function."),(0,a.kt)("p",null,"The Worker listens and polls on a single Task Queue. A Worker Entity contains both a Workflow Worker and an Activity Worker so that it may make progress of either a Workflow Execution or an Activity Execution."),(0,a.kt)("p",null,"Now that you've developed a Worker, run the Workflow."),(0,a.kt)("h2",{id:"run-the-workflow-to-execute-the-data-pipeline"},"Run the Workflow to execute the data pipeline"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"run_workflow.py")," file serves as a program that facilitates the execution of the Workflow associated with our data pipeline.\nWhile you can run the Client through the CLI, this example process and initiates the data processing logic programmatically."),(0,a.kt)("p",null,"Connecting and running the Workflow programmatically offers more flexibility and control over the execution process, like the ability to test, integrate, and execute based on your own business logic."),(0,a.kt)("p",null,"The Workflow is executed by the Temporal Client, which is connected to an instance of the Temporal Server."),(0,a.kt)("p",null,"Create a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"run_workflow.py")," and add the following code:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/temporalio/data-pipeline-project-python/blob/main/run_workflow.py"},"run_workflow.py")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'import asyncio\n\nimport pandas as pd\nfrom temporalio.client import Client\n\nfrom activities import TASK_QUEUE_NAME\nfrom your_workflow import TemporalCommunityWorkflow\n\n\nasync def main():\n    client = await Client.connect("localhost:7233")\n\n    stories = await client.execute_workflow(\n        TemporalCommunityWorkflow.run,\n        id="temporal-community-workflow",\n        task_queue=TASK_QUEUE_NAME,\n    )\n    df = pd.DataFrame(stories)\n    df.columns = ["Title", "URL", "Views"]\n    print("Top 10 stories on Temporal Community:")\n    print(df)\n    return df\n\n\nif __name__ == "__main__":\n    asyncio.run(main())\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Client.connect()")," connects to an instance of the Temporal Client. Since it's running locally, it's connected to ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:7233"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"execute_workflow()")," function is set on the ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," to execute the Workflow, by passing the name of the Workflow run method, a Workflow Id, and a Task Queue name."),(0,a.kt)("p",null,"This will execute the steps defined in your Workflow, which will then return the results of ",(0,a.kt)("inlineCode",{parentName:"p"},"stories"),".\nFor this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"stories")," is processed by a ",(0,a.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html"},"Pandas Data Frame"),"."),(0,a.kt)("p",null,"The code runs in an ",(0,a.kt)("inlineCode",{parentName:"p"},"asyncio")," event loop."),(0,a.kt)("p",null,"To run your code, open two terminal windows. "),(0,a.kt)("p",null,"In the first terminal, run this command to start the worker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-command"},"python run_worker.py\n")),(0,a.kt)("p",null,"In the second terminal, run this command to start the workflow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-command"},"python run_workflow.py\n")),(0,a.kt)("p",null,"You'll see an output similar to the following in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-output"},"Top 10 stories on Temporal Community:\n                                                                                 Title  ... Views\n0  Jest has detected the following 1 open handle potentially keeping Jest from exiting  ...  1103\n1                                                     Welcome to community.temporal.io  ...   842\n2                                              Java SDK support for Reactive framework  ...   739\n3                                                  History Mem Usage, Cache Size & TTL  ...   496\n4                                   How to stop non-deterministic error retry forever?  ...   482\n5                                          Workflows Not Showing on temporal ui-server  ...   106\n6                        Custom Search Attributes not appearing post upgrade to 1.20.1  ...    74\n7                                       Temporal Sleep feature for scheduled date time  ...    68\n8                                                                  Java-SDK SpringBoot  ...    61\n9                                     Addition of new activity impacting old workflows  ...    58\n[10 rows x 3 columns]\n")),(0,a.kt)("p",null,"Now go to your running instance of the ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8233/namespaces/default/workflows"},"Temporal Web UI"),", to see how the information is persisted in history."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the most recently running Workflow by Workflow Id, for example ",(0,a.kt)("inlineCode",{parentName:"li"},"temporal-community-workflow")," followed by a timestamp."),(0,a.kt)("li",{parentName:"ol"},"Open the ",(0,a.kt)("strong",{parentName:"li"},"Input and results")," pane to see what was entered and returned to the Workflow."),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Recent Events,")," you can observe every step and task created by the data pipeline.\nThis information is persisted in History, meaning that if any point a failure is created in your data pipeline, you can resume from that point in the history, rather than starting over from the beginning.")),(0,a.kt)("p",null,"You've successfully run your Workflow and explored the Event History, now schedule your Workflow."),(0,a.kt)("h2",{id:"schedule-a-workflow-to-run-on-a-specific-interval"},"Schedule a Workflow to run on a specific interval"),(0,a.kt)("p",null,"You just built and ran a Workflow, that returns information from your data pipeline. Now, you'll run this Workflow on a schedule."),(0,a.kt)("p",null,"Cron jobs have a reputation for fragility because they run commands in a different environment than the user's shell, which can lead to configuration management issues and random machine failures.\nAdditionally, cron errors are not always directed to live email, making it hard to know when things go wrong.\nWhile newer systems like systemd timers and Kubernetes cron jobs fix some of these issues, there is still a reliance on the archaic five-field string syntax for specifying times.\nFortunately, Temporal provides an alternative solution for scheduling workflows that doesn't require configuring additional dependencies or worrying about system alerts."),(0,a.kt)("p",null,"Temporal provides a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.temporal.io/workflows#schedule"},"Schedule Workflow")," function, in which you can start, backfill, delete, describe, list, pause, trigger, and update a Schedule.\nInstead of relying on machine-level cron jobs, you can define your tasks as Workflows in Temporal and schedule them to run on a specified schedule, interval, calendar, or event trigger."),(0,a.kt)("p",null,"For this example, you'll schedule the Workflow to run every 10 hours."),(0,a.kt)("p",null,"Create a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"schedule_workflow.py")," and add the following code:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/temporalio/data-pipeline-project-python/blob/main/schedule_workflow.py"},"schedule_workflow.py")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'import asyncio\nfrom datetime import timedelta\n\nfrom temporalio.client import (\n    Client,\n    Schedule,\n    ScheduleActionStartWorkflow,\n    ScheduleIntervalSpec,\n    ScheduleSpec,\n    ScheduleState,\n)\n\nfrom activities import TASK_QUEUE_NAME\nfrom your_workflow import TemporalCommunityWorkflow\n\n\nasync def main():\n    client = await Client.connect("localhost:7233")\n    await client.create_schedule(\n        "top-stories-every-10-hours",\n        Schedule(\n            action=ScheduleActionStartWorkflow(\n                TemporalCommunityWorkflow.run,\n                id="temporal-community-workflow",\n                task_queue=TASK_QUEUE_NAME,\n            ),\n            spec=ScheduleSpec(\n                intervals=[ScheduleIntervalSpec(every=timedelta(hours=10))]\n            ),\n        ),\n    )\n\n\nif __name__ == "__main__":\n    asyncio.run(main())\n')),(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"create_schedule()")," function on the Client and pass a unique identifier for the Schedule. You can use the unique identifier as a business process identifier, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"temporal-community-workflow"),". It is crucial for each Schedule to have a unique identifier to avoid conflicts and ensure clear identification. The unique identifier ensures unambiguous identification and distinguishes one Schedule from another, avoiding potential errors."),(0,a.kt)("p",null,"Then use the ",(0,a.kt)("a",{parentName:"p",href:"https://python.temporal.io/temporalio.client.Schedule.html"},"Schedule")," class on the Client to set the Schedule ",(0,a.kt)("a",{parentName:"p",href:"https://python.temporal.io/temporalio.client.Schedule.html#action"},"action")," and ",(0,a.kt)("a",{parentName:"p",href:"https://python.temporal.io/temporalio.client.Schedule.html#spec"},"spec"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Schedule")," provides a solution to running your actions periodically. The ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," determines when the action is taken."),(0,a.kt)("p",null,"In this example, the Action specifies the Workflow run, ",(0,a.kt)("inlineCode",{parentName:"p"},"TemporalCommunityWorkflow"),", the Workflow Id, ",(0,a.kt)("inlineCode",{parentName:"p"},"temporal-community-workflow"),", and the Task Queue name."),(0,a.kt)("p",null,"Then in the ",(0,a.kt)("a",{parentName:"p",href:"https://python.temporal.io/temporalio.client.ScheduleSpec.html"},"ScheduleSpec")," set an interval timer, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"every=timedelta(hours=10)"),"."),(0,a.kt)("p",null,"While this tutorial uses an interval timer, you can set a ",(0,a.kt)("a",{parentName:"p",href:"https://python.temporal.io/temporalio.client.ScheduleSpec.html#cron_expressions"},"cron_expressions"),", ",(0,a.kt)("a",{parentName:"p",href:"https://python.temporal.io/temporalio.client.ScheduleSpec.html#calendars"},"calendars"),", and more to run your Workflow."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Modify the interval timer from ",(0,a.kt)("inlineCode",{parentName:"p"},"hours=10")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"minutes=1")," to see the Schedule Workflow execute more frequently.")),(0,a.kt)("p",null,"Run the following command to start the Schedule."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-command"},"python schedule_workflow.py\n")),(0,a.kt)("p",null,"Now go to your running instance of the ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8233/"},"Temporal Web UI"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"Schedules")," from the left-hand navigation."),(0,a.kt)("li",{parentName:"ol"},"Choose the Schedule and see a list of upcoming runs.")),(0,a.kt)("p",null,"After a few runs, you can see the ",(0,a.kt)("strong",{parentName:"p"},"Recent Runs")," fill up with previously run Workflows, or go back to the ",(0,a.kt)("strong",{parentName:"p"},"Recent Workflows")," page and see the Workflows populate there."),(0,a.kt)("p",null,"Now that you've scheduled your Workflow, let's add the ability to delete the Schedule."),(0,a.kt)("h2",{id:"delete-the-schedule"},"Delete the Schedule"),(0,a.kt)("p",null,"Create a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"delete_schedule.py")," and add the following code:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/temporalio/data-pipeline-project-python/blob/main/delete_schedule.py"},"delete_schedule.py")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'import asyncio\n\nfrom temporalio.client import Client\n\n\nasync def main():\n    client = await Client.connect("localhost:7233")\n    handle = client.get_schedule_handle(\n        "top-stories-every-10-hours",\n    )\n\n    await handle.delete()\n\n\nif __name__ == "__main__":\n    asyncio.run(main())\n\n')),(0,a.kt)("p",null,"Run the following command to delete the Schedule."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-command"},"# terminal two\npython delete_schedule.py\n")),(0,a.kt)("p",null,"This sets the Schedule Id and then deletes the Schedule with the ",(0,a.kt)("a",{parentName:"p",href:"https://python.temporal.io/temporalio.client.ScheduleHandle.html#delete"},"delete()")," method on the Workflow handle."),(0,a.kt)("p",null,"Alternatively, you can delete a Schedule from the CLI."),(0,a.kt)("p",null,"Run the following command to delete the Schedule."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-command"},"temporal schedule delete --schedule-id workflow-schedule-id\n")),(0,a.kt)("p",null,"You've successfully deleted a running Schedule."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"You have built and processed data with a data pipeline that's durably backed by Temporal and schedule a Workflow."),(0,a.kt)("p",null,"With Temporal, you have insight into your data pipelines. You can see every point in History and have the ability to resume from a failure or retry, and ensure that your Workflows execute on a scheduled interval."),(0,a.kt)("h3",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"Now on your own, write another Activity, or step in your data pipeline, that extracts the most frequently occurring words or topics in the story title."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How do you tell the Worker to process another Activity?"),"Add the reference to the Activity name to the list of Activities processed by the Worker.",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"    worker = Worker(\n        client,\n        task_queue=TASK_QUEUE_NAME,\n        workflows=[TemporalCommunityWorkflow],\n        # tell the Worker of you new Activity\n        activities=[top_posts, post_ids, freq_occurring_words], # adding `freq_occurring_words`\n    )\n    await worker.run()\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How does the Workflow know to process that step?"),"In your Workflow, add an extra step to execute that Activity.",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@workflow.defn\nclass TemporalCommunityWorkflow:\n    @workflow.run\n    async def run(self) -> list:\n        news_id = await workflow.execute_activity(\n            post_ids,\n            start_to_close_timeout=timedelta(seconds=15),\n        )\n        top_posts = await workflow.execute_activity(\n            top_posts,\n            news_id,\n            start_to_close_timeout=timedelta(seconds=15),\n        )\n        # Add a step to your data pipeline\n        return await workflow.execute_activity(\n            freq_occurring_words,\n            top_posts,\n            start_to_close_timeout=timedelta(seconds=15),\n        )\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"What's returned by the Workflow Execution?"),"The most frequently occurring words are returned by the Workflow Execution.",(0,a.kt)("p",null,"The file, ",(0,a.kt)("inlineCode",{parentName:"p"},"run_workflow.py")," can process or present that information anyway it likes.\nFor example, creating a Word Cloud with that information.")))}c.isMDXComponent=!0},289:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/banner_python-0d345d125b6892840c54f7e1460c8a5a.png"}}]);