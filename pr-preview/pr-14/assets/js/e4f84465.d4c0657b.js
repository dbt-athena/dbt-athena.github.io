"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"How many dbt threads should I configure",id:"dbt-threads"},c=void 0,l={unversionedId:"faqs/Athena/dbt-threads",id:"faqs/Athena/dbt-threads",title:"How many dbt threads should I configure",description:"Athena has certain service API call quotas. The StartQueryExecution API supports 20 calls per second, and \u2013 if no api call is made in 4s \u2013 a burst to 80 calls. See the AWS Athena service limits documentation.",source:"@site/docs/faqs/Athena/dbt-threads.md",sourceDirName:"faqs/Athena",slug:"/faqs/Athena/dbt-threads",permalink:"/pr-preview/pr-14/faqs/Athena/dbt-threads",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/main/docs/faqs/Athena/dbt-threads.md",tags:[],version:"current",lastUpdatedAt:1696837970,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{title:"How many dbt threads should I configure",id:"dbt-threads"},sidebar:"docs",previous:{title:"Frequently asked questions",permalink:"/pr-preview/pr-14/docs/faqs"},next:{title:"Athena limits Hive tables to 100 partitions",permalink:"/pr-preview/pr-14/faqs/Athena/too-many-open-partitions"}},p={},d=[],u={toc:d},f="wrapper";function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Athena has certain service API call quotas. The ",(0,o.kt)("inlineCode",{parentName:"p"},"StartQueryExecution")," API supports 20 calls per second, and \u2013 if no api call is made in 4s \u2013 a burst to 80 calls. See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/athena/latest/ug/service-limits.html#service-limits-api-calls"},"AWS Athena service limits documentation"),"."),(0,o.kt)("p",null,"Due to these limits, you should consider how many concurrent API requests are happening in your AWS account and configure your threads accordingly. A good average value for threads could be ",(0,o.kt)("inlineCode",{parentName:"p"},"threads: 8"),"."))}h.isMDXComponent=!0}}]);