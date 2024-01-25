"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"Lakeformation",id:"lakeformation"},s=void 0,m={unversionedId:"docs/configuration/lakeformation",id:"docs/configuration/lakeformation",title:"Lakeformation",description:"Tags",source:"@site/docs/docs/configuration/lakeformation.md",sourceDirName:"docs/configuration",slug:"/docs/configuration/lakeformation",permalink:"/docs/configuration/lakeformation",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/main/docs/docs/configuration/lakeformation.md",tags:[],version:"current",lastUpdatedAt:1698699261,formattedLastUpdatedAt:"Oct 30, 2023",frontMatter:{title:"Lakeformation",id:"lakeformation"},sidebar:"docs",previous:{title:"Contract & Constraints",permalink:"/docs/configuration/contract-constraints"},next:{title:"Known issues",permalink:"/docs/known-issues"}},c={},p=[{value:"Tags",id:"tags",level:2},{value:"Data Cell Filters",id:"data-cell-filters",level:2}],u={toc:p},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tags"},"Tags"),(0,l.kt)("p",null,"The adapter implements AWS Lakeformation tags management in the following way:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"you can enable or disable lf-tags management via ",(0,l.kt)("a",{parentName:"li",href:"./table-configuration"},"config")," (disabled by default).\nHere are config examples:")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model_config.sql"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"{{\n  config(\n    materialized='incremental',\n    incremental_strategy='append',\n    on_schema_change='append_new_columns',\n    table_type='iceberg',\n    schema='test_schema',\n    lf_tags_config={\n          'enabled': true,\n          'tags': {\n            'tag1': 'value1',\n            'tag2': 'value2'\n          },\n          'tags_columns': {\n            'tag1': {\n              'value1': ['column1', 'column2'],\n              'value2': ['column3', 'column4']\n            }\n          }\n    }\n  )\n}}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dbt_project.yml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  +lf_tags_config:\n    enabled: true\n    tags:\n      tag1: value1\n      tag2: value2\n    tags_columns:\n      tag1:\n        value1: [ column1, column2 ]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"once you enable the feature, lf-tags will be updated on every dbt run"),(0,l.kt)("li",{parentName:"ul"},"first, all lf-tags for ",(0,l.kt)("strong",{parentName:"li"},"columns")," are removed to avoid inheritance issues"),(0,l.kt)("li",{parentName:"ul"},"then all redundant lf-tags are removed from ",(0,l.kt)("strong",{parentName:"li"},"table")," and actual tags from config are applied"),(0,l.kt)("li",{parentName:"ul"},"finally, lf-tags for ",(0,l.kt)("strong",{parentName:"li"},"columns")," are applied")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"It's important to understand the following points:"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"dbt does not manage lf-tags for database"),(0,l.kt)("li",{parentName:"ul"},"dbt does not manage lakeformation permissions")),(0,l.kt)("p",{parentName:"admonition"},"That's why you should handle this by yourself manually or using some automation tools like terraform, AWS CDK etc.",(0,l.kt)("br",{parentName:"p"}),"\n","You may find the following links useful to manage that:"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lakeformation_permissions"},"terraform aws_lakeformation_permissions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lakeformation_resource_lf_tags"},"terraform aws_lakeformation_resource_lf_tags")))),(0,l.kt)("h2",{id:"data-cell-filters"},"Data Cell Filters"),(0,l.kt)("p",null,"The adapter implements AWS Lakeformation Data Cell Filters management in the following way.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"model_config.sql"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"{{\n    config(\n    materialized='incremental',\n    incremental_strategy='append',\n    on_schema_change='append_new_columns',\n    table_type='iceberg',\n    schema='test_schema',\n    lf_grants={\n          'data_cell_filters': {\n              'enabled': True | False,\n              'filters': {\n                  'filter_name': {\n                      'row_filter': '<filter_condition>',\n                      'principals': ['principal_arn1', 'principal_arn2']\n                  }\n              }\n          }\n      }\n}}\n")),(0,l.kt)("p",null,"or more advanced example for ",(0,l.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'models:\n    directory:\n      +schema: your_schema\n      +materialized: incremental\n      +on_schema_change: sync_all_columns\n      model1:\n        +lf_grants: &default_rls\n          data_cell_filters:\n            enabled: true\n            filters:\n              name1:\n                row_filter: "field1 = \'value1\'"\n                principals:\n                  - "role1_arn"\n                  - "role2_arn"\n              name2:\n                row_filter: "field1 = \'value2\'"\n                principals:\n                  - "role3_arn"\n                  - "role4_arn"\n      model2:\n        +lf_grants: *default_rls  # reuse previously defined config\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Data cell filters management can't be automated outside dbt because the filter can't be attached to the table\nwhich doesn't exist.  "),(0,l.kt)("li",{parentName:"ul"},"Once you ",(0,l.kt)("inlineCode",{parentName:"li"},"enable")," this config, dbt will set all filters and their permissions during every dbt run.  "),(0,l.kt)("li",{parentName:"ul"},"Such approach keeps the actual state of row level security configuration actual after every dbt run and\napplies changes if they occur: drop, create, update filters and their permissions.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"It's important to understand that LF permissions work like ",(0,l.kt)("inlineCode",{parentName:"p"},"union"),".",(0,l.kt)("br",{parentName:"p"}),"\n","Let's imagine this scenario:"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Table X has tag ",(0,l.kt)("inlineCode",{parentName:"li"},"domain=foo")),(0,l.kt)("li",{parentName:"ul"},"Role A has ",(0,l.kt)("inlineCode",{parentName:"li"},"select")," permission for tables with ",(0,l.kt)("inlineCode",{parentName:"li"},"domain=foo")),(0,l.kt)("li",{parentName:"ul"},"We add a data cell filter for a column in table X and then grant permissions to role A")),(0,l.kt)("p",{parentName:"admonition"},"In this case, tag permissions are the ones considered, and cell-level permissions are totally ignored.\nThis means that this data cell filters management feature implies that you should use permissions for specific tables\nwhich don't have already tag-level permissions in that specific database or table.")))}f.isMDXComponent=!0}}]);