"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=c(n),h=s,u=l["".concat(p,".").concat(h)]||l[h]||m[h]||r;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var a=n(7462),s=n(3366),r=(n(7294),n(3905)),o=n(5108),i=["components"],p={title:"Snapshots",id:"snapshots"},c=void 0,d={unversionedId:"docs/configuration/snapshots",id:"docs/configuration/snapshots",title:"Snapshots",description:"Hive snapshots will undergo breaking changes in version 1.5.",source:"@site/docs/docs/configuration/snapshots.md",sourceDirName:"docs/configuration",slug:"/docs/configuration/snapshots",permalink:"/pr-preview/pr-18/docs/configuration/snapshots",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/main/docs/docs/configuration/snapshots.md",tags:[],version:"current",lastUpdatedAt:1698254102,formattedLastUpdatedAt:"Oct 25, 2023",frontMatter:{title:"Snapshots",id:"snapshots"},sidebar:"docs",previous:{title:"Seeds",permalink:"/pr-preview/pr-18/docs/configuration/seeds"},next:{title:"Contract & Constraints",permalink:"/pr-preview/pr-18/docs/configuration/contract-constraints"}},l={},m=[{value:"Detecting row changes",id:"detecting-row-changes",level:2},{value:"Timestamp strategy (recommended)",id:"timestamp-strategy-recommended",level:3},{value:"Check strategy",id:"check-strategy",level:3},{value:"Hard-deletes (opt-in)",id:"hard-deletes-opt-in",level:3},{value:"Example",id:"example",level:2}],h=function(e){return function(t){return o.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},u=h("VersionBlock"),g=h("File"),f={toc:m},k="wrapper";function y(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)(k,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(u,{lastVersion:"1.4",mdxType:"VersionBlock"},(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Hive snapshots will undergo breaking changes in version 1.5.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-18/docs/migration/UPGRADE-1.5"},"migration guide")," for more details."))),(0,r.kt)(u,{firstVersion:"1.5",mdxType:"VersionBlock"},(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Hive snapshots underwent breaking changes in version 1.5.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-18/docs/migration/UPGRADE-1.5"},"migration guide")," for more details."))),(0,r.kt)("p",null,"The dbt-athena adapter supports ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/snapshots"},"dbt snapshots"),". Both the dbt timestamp and check strategy are supported for hive and iceberg tables. To create a snapshot, create a snapshot file in the dbt snapshots directory. If directory does not exist create one. Read more about dbt snapshots ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/snapshots"},"here"),"."),(0,r.kt)("h2",{id:"detecting-row-changes"},"Detecting row changes"),(0,r.kt)("h3",{id:"timestamp-strategy-recommended"},"Timestamp strategy (recommended)"),(0,r.kt)("p",null,"To use the timestamp strategy refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/snapshots#timestamp-strategy-recommended"},"dbt docs")),(0,r.kt)("h3",{id:"check-strategy"},"Check strategy"),(0,r.kt)("p",null,"To use the check strategy refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/snapshots#check-strategy"},"dbt docs")),(0,r.kt)("h3",{id:"hard-deletes-opt-in"},"Hard-deletes (opt-in)"),(0,r.kt)("p",null,"The materialization also supports invalidating hard deletes. Check the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/snapshots#hard-deletes-opt-in"},"docs")," to understand the usage."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Place the example files below in your dbt project."),(0,r.kt)(g,{name:"seeds/base.csv",mdxType:"File"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id,name,some_date\n1,Easton,1981-05-20T06:46:51\n2,Lillian,1978-09-03T18:10:33\n3,Jeremiah,1982-03-11T03:59:51\n4,Nolan,1976-05-06T20:21:35\n5,Hannah,1982-06-23T05:41:26\n6,Eleanor,1991-08-10T23:12:21\n7,Lily,1971-03-29T14:58:02\n8,Jonathan,1988-02-26T02:55:24\n9,Adrian,1994-02-09T13:14:23\n10,Nora,1976-03-01T16:51:39\n"))),(0,r.kt)(g,{name:"seeds/changed.csv",mdxType:"File"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id,name,some_date\n4,Updated Nolan,2022-05-06T20:21:35\n5,Updated Hannah,2022-06-23T05:41:26\n6,Updated Eleanor,2022-08-10T23:12:21\n7,Lily,1971-03-29T14:58:02\n8,Jonathan,1988-02-26T02:55:24\n9,Adrian,1994-02-09T13:14:23\n10,Nora,1976-03-01T16:51:39\n11,New Mateo,2014-09-07T17:04:27\n12,New Julian,2000-02-04T11:48:30\n13,New Gabriel,2001-07-10T07:32:52\n"))),(0,r.kt)(g,{name:"snapshots/iceberg_snapshot_timestamp_strategy.sql",mdxType:"File"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"{% snapshot iceberg_snapshot_timestamp_strategy %}\n    {{ config(\n        strategy='timestamp',\n        unique_key='id',\n        updated_at='some_date',\n        table_type='iceberg',\n    )}}\n    select * from {{ ref(var('seed_name', 'base')) }}\n{% endsnapshot %}\n\n"))),(0,r.kt)(g,{name:"snapshots/hive_snapshot_timestamp_strategy_hard_deletes.sql",mdxType:"File"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"{% snapshot hive_snapshot_timestamp_strategy_hard_deletes %}\n    {{ config(\n        strategy='timestamp',\n        unique_key='id',\n        updated_at='some_date',\n        table_type='hive',\n        invalidate_hard_deletes=True,\n    )}}\n    select * from {{ ref(var('seed_name', 'base')) }}\n{% endsnapshot %}\n"))),(0,r.kt)(g,{name:"snapshots/iceberg_snapshot_check_column_strategy.sql",mdxType:"File"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"{% snapshot iceberg_snapshot_check_column_strategy %}\n    {{ config(\n        check_cols=['name'], \n        unique_key='id', \n        strategy='check',\n        table_type='iceberg',\n    ) }}\n    select * from {{ ref(var('seed_name', 'base')) }}\n{% endsnapshot %}\n"))),(0,r.kt)(g,{name:"snapshots/hive_snapshot_check_all_columns_strategy.sql",mdxType:"File"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"{% snapshot hive_snapshot_check_all_columns_strategy %}\n    {{ config(\n        check_cols='all', \n        unique_key='id', \n        strategy='check',\n        table_type='hive',\n    ) }}\n    select * from {{ ref(var('seed_name', 'base')) }}\n{% endsnapshot %}\n"))),(0,r.kt)("p",null,"Now you can test these different snapshot strategies. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"SNAPSHOT_NAME")," with one of the snapshots defined above (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"hive_snapshot_check_all_columns_strategy"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Load seeds\ndbt seed\n\n# Run initial snapshot\ndbt snapshot --select SNAPSHOT_NAME\n\n# Run snapshot again, on changed source data\ndbt snapshot --select SNAPSHOT_NAME --vars "seed_name: changed"\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots do not support dropping columns from the source table. If you drop a column, make sure to drop the column from the snapshot as well. Another workaround is to ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," the column in the snapshot definition to preserve history")))}y.isMDXComponent=!0}}]);