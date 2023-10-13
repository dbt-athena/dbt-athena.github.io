"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var a,i=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(5108),s=["components"],c={title:"Hive table",id:"hive"},u="Hive",d={unversionedId:"docs/configuration/materializations/hive",id:"docs/configuration/materializations/hive",title:"Hive table",description:"The default dbt table materialization will be using a Hive",source:"@site/docs/docs/configuration/materializations/hive.md",sourceDirName:"docs/configuration/materializations",slug:"/docs/configuration/materializations/hive",permalink:"/pr-preview/pr-16/docs/configuration/materializations/hive",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/main/docs/docs/configuration/materializations/hive.md",tags:[],version:"current",lastUpdatedAt:1697234127,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{title:"Hive table",id:"hive"},sidebar:"docs",previous:{title:"Table configuration",permalink:"/pr-preview/pr-16/docs/configuration/table-configuration"},next:{title:"Highly-available Hive table",permalink:"/pr-preview/pr-16/docs/configuration/materializations/hive-ha"}},p={},m=[{value:"Reducing downtime",id:"reducing-downtime",level:2},{value:"Known issues",id:"known-issues",level:4}],h=(a="VersionBlock",function(e){return l.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:m},b="wrapper";function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)(b,(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hive"},"Hive"),(0,o.kt)("p",null,"The default dbt ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/materializations#table"},"table materialization")," will be using a Hive\ntable in Athena.\nWhen used, dbt will run a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/athena/latest/ug/create-table-as.html"},(0,o.kt)("inlineCode",{parentName:"a"},"CREATE TABLE AS"))," query\nagainst Athena."),(0,o.kt)(h,{firstVersion:"1.5",mdxType:"VersionBlock"},(0,o.kt)("h2",{id:"reducing-downtime"},"Reducing downtime"),(0,o.kt)("p",null,"The current implementation of the Hive table materialization can lead to downtime, because the target table is\ndropped and re-created. To have a less destructive behavior, it's possible to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ha=true")," config in your model\nconfiguration (disabled by default). We had a specific materialization for that, called ",(0,o.kt)("inlineCode",{parentName:"p"},"table_hive_ha"),", which was\nmerged in the ",(0,o.kt)("inlineCode",{parentName:"p"},"table")," materialization."),(0,o.kt)("p",null,"The ha config leverages the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/webapi/API_GetTableVersions.html"},"table versions"),'\nfeature of Glue catalog: creating a "tmp" table and swapping the target table to the location of the tmp table.'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This materialization is only available for ",(0,o.kt)("inlineCode",{parentName:"p"},"table_type=hive")," (default) and requires using unique locations on S3.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"{{\n  config(\n    materialized='table',\n    ha=true,\n    format='parquet',\n    partitioned_by=['status'],\n    s3_data_naming='table_unique'\n  )\n}}\n\nselect\n    'a' as user_id,\n    'pi' as user_name,\n    'active' as status\nunion all\nselect\n    'b' as user_id,\n    'sh' as user_name,\n    'active' as status\nunion all\nselect\n    'c' as user_id,\n    'sh' as user_name,\n    'disabled' as status\n")),(0,o.kt)("p",null,"By default, only the last 4 table versions are kept. You can change it by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"versions_to_keep")," on the model\nconfiguration."),(0,o.kt)("h4",{id:"known-issues"},"Known issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When swapping from a table with partitions to a table without (and the other way around), there could be a little\ndowntime. In case high performance is needed, consider bucketing instead of partitions"),(0,o.kt)("li",{parentName:"ul"},'By default, Glue "duplicates" the versions internally, so the last 2 versions of a table point to the same location.\nTherefore it\'s recommended to use ',(0,o.kt)("inlineCode",{parentName:"li"},"versions_to_keep")," >= 4, as this will avoid to have the older location removed."))))}v.isMDXComponent=!0}}]);