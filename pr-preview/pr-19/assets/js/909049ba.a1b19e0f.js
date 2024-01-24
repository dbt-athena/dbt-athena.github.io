"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var a,r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=n(5108),s=["components"],c={title:"Iceberg table",id:"iceberg"},p="Apache Iceberg",d={unversionedId:"docs/configuration/materializations/iceberg",id:"docs/configuration/materializations/iceberg",title:"Iceberg table",description:"Athena supports read, time travel, write, and DDL queries for Apache Iceberg tables that use the Apache Parquet format",source:"@site/docs/docs/configuration/materializations/iceberg.md",sourceDirName:"docs/configuration/materializations",slug:"/docs/configuration/materializations/iceberg",permalink:"/pr-preview/pr-19/docs/configuration/materializations/iceberg",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/main/docs/docs/configuration/materializations/iceberg.md",tags:[],version:"current",lastUpdatedAt:1706107943,formattedLastUpdatedAt:"Jan 24, 2024",frontMatter:{title:"Iceberg table",id:"iceberg"},sidebar:"docs",previous:{title:"Highly-available Hive table",permalink:"/pr-preview/pr-19/docs/configuration/materializations/hive-ha"},next:{title:"Seeds",permalink:"/pr-preview/pr-19/docs/configuration/seeds"}},u={},m=[{value:"Getting started",id:"getting-started",level:2},{value:"Incremental tables",id:"incremental-tables",level:2}],g=(a="VersionBlock",function(e){return l.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:m},b="wrapper";function k(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"apache-iceberg"},"Apache Iceberg"),(0,o.kt)("p",null,"Athena supports read, time travel, write, and DDL queries for Apache Iceberg tables that use the Apache Parquet format\nfor data and the AWS Glue catalog for their metastore."),(0,o.kt)("p",null,"Apache Iceberg is an open table format for huge analytic datasets.\nIceberg manages large collections of files as tables, and it supports modern analytical data lake operations such as\nrecord-level insert, update, delete, and time travel queries.\nThe Iceberg specification allows seamless table evolution such as schema and partition evolution and is designed for\noptimized usage on Amazon S3.\nIceberg also helps guarantee data correctness under concurrent write scenarios."),(0,o.kt)("p",null,"The dbt-athena adapter supports table materialization for Apache Iceberg."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"To get started, add the following config block to your model:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"{{\n  config(\n    materialized='table',\n    table_type='iceberg',\n    format='parquet',\n    partitioned_by=['bucket(user_id, 5)'],\n    table_properties={\n      'optimize_rewrite_delete_file_threshold': '2'\n    }\n  )\n}}\n\nSELECT 'A'          AS user_id,\n       'pi'         AS name,\n       'active'     AS status,\n       17.89        AS cost,\n       1            AS quantity,\n       100000000    AS quantity_big,\n       current_date AS my_date\n")),(0,o.kt)("p",null,"Iceberg supports ",(0,o.kt)("strong",{parentName:"p"},"bucketing")," as hidden partitions, therefore, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"partitioned_by")," config to add specific\nbucketing conditions."),(0,o.kt)("p",null,"Iceberg supports several ",(0,o.kt)("strong",{parentName:"p"},"table formats")," for data : ",(0,o.kt)("inlineCode",{parentName:"p"},"PARQUET"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AVRO")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ORC"),"."),(0,o.kt)("h2",{id:"incremental-tables"},"Incremental tables"),(0,o.kt)("p",null,"It is possible to use iceberg in an incremental materialization. Two strategies are supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"append"),": New records are appended to the table, this can lead to duplicates."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"merge"),": Performs an upsert (and optionally delete), where new records are added and existing records are updated.\nOnly available with Athena engine version 3.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"merge")," configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"unique_key")," ",(0,o.kt)("strong",{parentName:"li"},"(required)"),": columns that define a unique record in the source and target tables.")),(0,o.kt)(g,{firstVersion:"1.5.1",mdxType:"VersionBlock"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"incremental_predicates")," (optional): SQL conditions that enable custom join clauses in the merge statement. This can\nbe useful for improving performance via predicate pushdown on the target table.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"delete_condition")," (optional): SQL condition used to identify records that should be deleted."))),(0,o.kt)(g,{firstVersion:"1.6.2",mdxType:"VersionBlock"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"update_condition")," (optional): SQL condition used to identify records that should be updated."))),(0,o.kt)(g,{firstVersion:"1.6.4",mdxType:"VersionBlock"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"insert_condition")," (optional): SQL condition used to identify records that should be inserted."))),(0,o.kt)("p",null,"These configurations can include any column of the incremental table (",(0,o.kt)("inlineCode",{parentName:"p"},"src"),") or the final table (",(0,o.kt)("inlineCode",{parentName:"p"},"target"),").\nColumn names must be prefixed by either ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," to prevent a ",(0,o.kt)("inlineCode",{parentName:"p"},"Column is ambiguous")," error.")),(0,o.kt)(g,{firstVersion:"1.4.4",mdxType:"VersionBlock"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delete_condition")," (optional): SQL condition used to identify records that should be deleted. Can include any column\nof the incremental table (",(0,o.kt)("inlineCode",{parentName:"li"},"src"),") or the final table (",(0,o.kt)("inlineCode",{parentName:"li"},"target"),"). Column names must be prefixed by either ",(0,o.kt)("inlineCode",{parentName:"li"},"src"),"\nor ",(0,o.kt)("inlineCode",{parentName:"li"},"target")," to prevent a ",(0,o.kt)("inlineCode",{parentName:"li"},"Column is ambiguous")," error."))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"MERGE INTO")," is transactional and is supported only for Apache Iceberg tables in ",(0,o.kt)("strong",{parentName:"p"},"Athena engine version 3"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"incremental_predicates & delete_condition")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"{{ config(\n    materialized='incremental',\n    table_type='iceberg',\n    incremental_strategy='merge',\n    unique_key='user_id',\n    incremental_predicates=[\"src.quantity > 1\", \"target.my_date >= now() - interval '4' year\"],\n    delete_condition=\"src.status != 'active' and target.my_date < now() - interval '2' year\",\n    format='parquet'\n) }}\n\nselect 'A'          as user_id,\n       'pi'         as name,\n       'active'     as status,\n       17.89        as cost,\n       1            as quantity,\n       100000000    as quantity_big,\n       current_date as my_date\n")),(0,o.kt)(g,{firstVersion:"1.6.2",mdxType:"VersionBlock"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"update_condition")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"{{ config(\n        materialized='incremental',\n        incremental_strategy='merge',\n        unique_key=['id'],\n        update_condition='target.id > 1',\n        schema='sandbox'\n    )\n}}\n\n{% if is_incremental() %}\n\nselect * from (\n    values\n    (1, 'v1-updated')\n    , (2, 'v2-updated')\n) as t (id, value)\n\n{% else %}\n\nselect * from (\n    values\n    (-1, 'v-1')\n    , (0, 'v0')\n    , (1, 'v1')\n    , (2, 'v2')\n) as t (id, value)\n\n{% endif %}\n"))),(0,o.kt)(g,{firstVersion:"1.6.4",mdxType:"VersionBlock"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"insert_condition")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"{{ config(\n        table_type='iceberg',\n        materialized='incremental',\n        incremental_strategy='merge',\n        unique_key=['id'],\n        insert_condition='src.status != 0'\n    )\n}}\n\n{% if is_incremental() %}\n\nselect * from (\n    values\n    (1, -1)\n    , (2, 0)\n    , (3, 1)\n) as t (id, status)\n\n{% else %}\n\nselect * from (\n    values\n    (0, 1)\n) as t (id, status)\n\n{% endif %}\n"))))}k.isMDXComponent=!0}}]);