"use strict";(self.webpackChunktemporal_learning=self.webpackChunktemporal_learning||[]).push([[7779],{5997:(e,t,a)=>{a.d(t,{Zt:()=>l,yT:()=>o});var n=a(7294),r=a(2004);const o=function(e){let{url:t,loop:a,playing:o}=e;return n.createElement("div",{className:"relative rounded-lg shadow-lg",style:{position:"relative",paddingTop:"56.25%",marginBottom:20}},n.createElement(r.Z,{url:t,loop:a,playing:o,width:"100%",height:"100%",controls:!0,style:{position:"absolute",top:0,left:0}}))};a(4673);var i=a(3612);function l(){return n.createElement(i.Z,{type:"info",title:"WORK IN PROGRESS"},n.createElement("p",null,"This tutorial is a work in progress. Some sections may be incomplete, out of date, or missing. We're working to update it."))}},3411:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(3117),r=(a(7294),a(3905)),o=(a(5162),a(4866),a(5997));const i={id:"chatbot-tutorial",sidebar_position:4,keywords:["TypeScript","temporal","sdk","tutorial"],tags:["TypeScript","SDK"],last_update:{date:new Date("2021-10-01T00:00:00.000Z")},title:"Choose Your Own Adventure Bot walkthrough in TypeScript",description:"In this tutorial, we'll integrate all the knowledge gained from Core and Production APIs in an end-to-end, complete demo application.",image:"/img/temporal-logo-twitter-card.png"},l=void 0,p={unversionedId:"tutorials/typescript/chatbot/chatbot-tutorial",id:"tutorials/typescript/chatbot/chatbot-tutorial",title:"Choose Your Own Adventure Bot walkthrough in TypeScript",description:"In this tutorial, we'll integrate all the knowledge gained from Core and Production APIs in an end-to-end, complete demo application.",source:"@site/docs/tutorials/typescript/chatbot/index.md",sourceDirName:"tutorials/typescript/chatbot",slug:"/tutorials/typescript/chatbot/",permalink:"/tutorials/typescript/chatbot/",draft:!1,tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"SDK",permalink:"/tags/sdk"}],version:"current",lastUpdatedAt:1633046400,formattedLastUpdatedAt:"Oct 1, 2021",sidebarPosition:4,frontMatter:{id:"chatbot-tutorial",sidebar_position:4,keywords:["TypeScript","temporal","sdk","tutorial"],tags:["TypeScript","SDK"],last_update:{date:"2021-10-01T00:00:00.000Z"},title:"Choose Your Own Adventure Bot walkthrough in TypeScript",description:"In this tutorial, we'll integrate all the knowledge gained from Core and Production APIs in an end-to-end, complete demo application.",image:"/img/temporal-logo-twitter-card.png"},sidebar:"tutorialSidebar",previous:{title:"Build a subscription workflow with Temporal and TypeScript",permalink:"/tutorials/typescript/subscriptions/"},next:{title:"Python tutorials",permalink:"/tutorials/python/"}},s={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Project Requirements",id:"project-requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Worker",id:"worker",level:3},{value:"Client",id:"client",level:3},{value:"runGame",id:"rungame",level:3},{value:"Platforms",id:"platforms",level:3},{value:"Integrations",id:"integrations",level:3},{value:"Servers",id:"servers",level:3}],c={toc:m};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Temporal TypeScript SDK",src:a(2813).Z,width:"902",height:"254"})),(0,r.kt)(o.Zt,{mdxType:"OutdatedNotice"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this tutorial, we'll integrate all the knowledge gained from Core and Logging APIs in an end-to-end, complete demo application - which happens to be a Choose Your Own Adventure game that you can play on Discord or Slack!"),(0,r.kt)("p",null,"This project will integrate and give context to your understanding of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.temporal.io/dev-guide/typescript/foundations//#develop-workflows"},"Temporal SDK APIs"),": logging with Sinks, Activity dependency injection, Timer and Promise.race design patterns, Signals (and HTTP Servers for them), Polling patterns, and ",(0,r.kt)("inlineCode",{parentName:"p"},"continueAsNew")," for indefinitely long running Workflows."),(0,r.kt)("admonition",{title:"Skip ahead",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"View the completed project on GitHub: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JoshuaKGoldberg/temporal-adventure-bot"},"https://github.com/JoshuaKGoldberg/temporal-adventure-bot"))),(0,r.kt)("p",null,"Let's dive in!"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/getting_started/typescript/dev_environment/"},"Set up a local development environment for developing Temporal applications using TypeScript")),(0,r.kt)("li",{parentName:"ul"},"Review the ",(0,r.kt)("a",{parentName:"li",href:"/getting_started/typescript/hello_world_in_typescript/"},"Hello World in TypeScript tutorial")," to understand the basics of getting a Temporal TypeScript SDK project up and running.")),(0,r.kt)("h2",{id:"project-requirements"},"Project Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On ",(0,r.kt)("inlineCode",{parentName:"li"},"/instructions"),", posts instructions to Slack/Discord and pins the message"),(0,r.kt)("li",{parentName:"ul"},"Continuously runs the game until it reaches an end state:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Every day, post the current entry as a poll"),(0,r.kt)("li",{parentName:"ul"},"Wait until the earlier of:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Every day, check the poll results",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If there is consensus, determine next state"),(0,r.kt)("li",{parentName:"ul"},"If no consensus, remind people to vote"))),(0,r.kt)("li",{parentName:"ul"},"Allow an admin to ",(0,r.kt)("inlineCode",{parentName:"li"},"/force")," a choice any time"))))),(0,r.kt)("li",{parentName:"ul"},"Report important game updates to a specified logger")),(0,r.kt)(o.yT,{url:"https://www.youtube.com/watch?v=hGIhc6m2keQ",mdxType:"ResponsivePlayer"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://youtube.com/watch?v=hGIhc6m2keQ&t=0s"},"00:00")," Project Intro and Demo",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://youtube.com/watch?v=hGIhc6m2keQ&t=210s"},"03:30")," Temporal Worker - Activity Dependency Injection",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://youtube.com/watch?v=hGIhc6m2keQ&t=420s"},"07:00")," Temporal Sinks for Logging",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://youtube.com/watch?v=hGIhc6m2keQ&t=480s"},"08:00")," Temporal Client",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://youtube.com/watch?v=hGIhc6m2keQ&t=650s"},"10:50")," RunGame Workflow and Game Logic",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://youtube.com/watch?v=hGIhc6m2keQ&t=825s"},"13:45")," Async Race Design Pattern: Timers vs Humans",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://youtube.com/watch?v=hGIhc6m2keQ&t=900s"},"15:00")," Design Pattern: Polling",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://youtube.com/watch?v=hGIhc6m2keQ&t=1085s"},"18:05")," Signals",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://youtube.com/watch?v=hGIhc6m2keQ&t=1200s"},"20:00")," HTTP Server for Signal",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://youtube.com/watch?v=hGIhc6m2keQ&t=1380s"},"23:00")," ContinueAsNew"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("h3",{id:"worker"},"Worker"),(0,r.kt)("p",null,"The Temporal Worker is set up in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/worker.ts"),".\nIt uses two common Temporal patterns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dependency Injection"),": using the integration object created by ",(0,r.kt)("inlineCode",{parentName:"li"},"createIntegration")," to provide APIs for the social platform being targeted (",(0,r.kt)("inlineCode",{parentName:"li"},"Discord")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Slack"),") (see ",(0,r.kt)("a",{parentName:"li",href:"#platforms"},"Platforms"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Logging Sinks"),": providing a ",(0,r.kt)("inlineCode",{parentName:"li"},"logger.sink")," method for the Workflows to log out to ",(0,r.kt)("inlineCode",{parentName:"li"},"console.log"))),(0,r.kt)("h3",{id:"client"},"Client"),(0,r.kt)("p",null,"The client in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/client.ts")," will ask Temporal to run two different Workflows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"instructions")),": Posts instructions to the social platform and pins the message"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"runGame")),": Continuously runs the game state until the game is finished")),(0,r.kt)("h3",{id:"rungame"},"runGame"),(0,r.kt)("p",null,"Each iteration of the game (so, daily), ",(0,r.kt)("inlineCode",{parentName:"p"},"runGame")," goes through these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If the entry has no options, the game is over"),(0,r.kt)("li",{parentName:"ol"},"Post the current entry as a poll"),(0,r.kt)("li",{parentName:"ol"},"Check and remind people to vote once a day until either...",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"...a choice is made by consensus"),(0,r.kt)("li",{parentName:"ul"},"...an admin forces a choice"))),(0,r.kt)("li",{parentName:"ol"},"If the choice was forced by an admin, mention that"),(0,r.kt)("li",{parentName:"ol"},"Continue with that chosen next step in the game")),(0,r.kt)("h3",{id:"platforms"},"Platforms"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"platformFactory")," function used in both workers and Workflows reads from ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env")," to return the ",(0,r.kt)("inlineCode",{parentName:"p"},"createIntegration")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"createServer")," methods for the social platform being targeted."),(0,r.kt)("h3",{id:"integrations"},"Integrations"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createIntegration"),": creates the client API used to send messages to the social platform.\nFor example, the Slack integration uses the ",(0,r.kt)("a",{parentName:"p",href:"https://slack.dev/bolt-js"},"Slack Bolt SDK"),"."),(0,r.kt)("h3",{id:"servers"},"Servers"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createServer")," creates the (generally Express) server that runs locally and receives webhook events from the social platform.\nBoth the Discord and Slack servers use Ngrok to expose a local port on the public web, so that a ",(0,r.kt)("inlineCode",{parentName:"p"},"/force")," command configured on the platform sends a message, it can Signal to the Workflow."))}u.isMDXComponent=!0},2813:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner_typescript-2156b7edec5a96f12884d24603574199.png"}}]);