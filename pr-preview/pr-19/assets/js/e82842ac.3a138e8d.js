"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[232],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7368:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={title:"Upgrade to version 1.5",id:"UPGRADE-1.5"},s=void 0,p={unversionedId:"docs/migration/UPGRADE-1.5",id:"docs/migration/UPGRADE-1.5",title:"Upgrade to version 1.5",description:"Highly available Hive table",source:"@site/docs/docs/migration/UPGRADE-1.5.md",sourceDirName:"docs/migration",slug:"/docs/migration/UPGRADE-1.5",permalink:"/pr-preview/pr-19/docs/migration/UPGRADE-1.5",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/main/docs/docs/migration/UPGRADE-1.5.md",tags:[],version:"current",lastUpdatedAt:1706107943,formattedLastUpdatedAt:"Jan 24, 2024",frontMatter:{title:"Upgrade to version 1.5",id:"UPGRADE-1.5"},sidebar:"docs",previous:{title:"Known issues",permalink:"/pr-preview/pr-19/docs/known-issues"},next:{title:"Contributing",permalink:"/pr-preview/pr-19/docs/contributing/"}},u={},m=[{value:"Highly available Hive table",id:"highly-available-hive-table",level:2},{value:"S3 naming strategies",id:"s3-naming-strategies",level:2},{value:"Hive snapshot migration",id:"hive-snapshot-migration",level:2}],c={toc:m},h="wrapper";function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"highly-available-hive-table"},"Highly available Hive table"),(0,i.kt)("p",null,"The 1.5 version introduces a breaking change. Materaliazation ",(0,i.kt)("inlineCode",{parentName:"p"},"table_hive_ha")," has been removed and integrated in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"table")," materialization. To migrate your ",(0,i.kt)("inlineCode",{parentName:"p"},"table_hive_ha")," models change the configuration with the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"materialization=table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ha=true"))),(0,i.kt)("p",null,"More information ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-19/docs/configuration/materializations/hive"},"here")),(0,i.kt)("h2",{id:"s3-naming-strategies"},"S3 naming strategies"),(0,i.kt)("p",null,"The 1.5 version introduces a breaking change. If you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," strategy, it is now named ",(0,i.kt)("inlineCode",{parentName:"p"},"unique"),", so change\nyour config accordingly in your profiles file and your model & project YAML configs."),(0,i.kt)("h2",{id:"hive-snapshot-migration"},"Hive snapshot migration"),(0,i.kt)("p",null,"The hive snapshots in dbt-athena v1.4 diverged from the dbt-core implementation.\nIn the v1.5 release, we take the opportunity to review our approach so that we follow the dbt standards.\nUnfortunately, this introduces breaking changes to existing snapshots.\nWe did our best to mitigate the impact on the developer, by printing a detailed error message with migration instructions.\nThe easiest way to migrate your snapshot table is by running ",(0,i.kt)("inlineCode",{parentName:"p"},"dbt snapshot")," one snapshot at a time."),(0,i.kt)("p",null,"Below is a summary of the steps to migrate all your snapshots:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"dbt-athena>=1.5")),(0,i.kt)("li",{parentName:"ol"},"Choose a snapshot to migrate. It's probably best to start with one of the least important ones first."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"dbt snapshot SNAPSHOT_NAME"),". This command should fail, and print a large error message with a migration query. Scroll up the stdout output until you find the same query again, but without the log timestamps."),(0,i.kt)("li",{parentName:"ol"},"Go to Athena and run the queries one by one. Please double-check each query to make sure that it does what it needs to do. The queries perform the following steps:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Take a backup of the original table. You never know."),(0,i.kt)("li",{parentName:"ul"},"Run the necessary transformations for the migration and store the results in a temporary table."),(0,i.kt)("li",{parentName:"ul"},"Drop the original table."),(0,i.kt)("li",{parentName:"ul"},"Copy the temporary table results to the original table."),(0,i.kt)("li",{parentName:"ul"},"Drop the temporary table."))),(0,i.kt)("li",{parentName:"ol"},"Check the results of the migrated table. Run some sanity checks to see if it behaves correctly."),(0,i.kt)("li",{parentName:"ol"},"(Optional) Run ",(0,i.kt)("inlineCode",{parentName:"li"},"dbt snapshot SNAPSHOT_NAME")," again. This time there should be no error anymore."),(0,i.kt)("li",{parentName:"ol"},"Repeat steps 2-6 for all your snapshots."),(0,i.kt)("li",{parentName:"ol"},"(Optional) Run ",(0,i.kt)("inlineCode",{parentName:"li"},"dbt snapshot")," to make sure that all your snapshots are migrated."),(0,i.kt)("li",{parentName:"ol"},"(Optional) After a couple of dbt runs, you can clean up the backup tables.")))}d.isMDXComponent=!0}}]);