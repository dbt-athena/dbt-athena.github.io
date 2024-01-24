"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[326],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(a),c=r,g=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(g,i(i({ref:e},s),{},{components:a})):n.createElement(g,i({ref:e},s))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9641:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"Installing dbt-athena",id:"installation",sidebar_label:"Installation"},d=void 0,p={unversionedId:"docs/getting-started/installation",id:"docs/getting-started/installation",title:"Installing dbt-athena",description:"Prerequisites",source:"@site/docs/docs/getting-started/installation.md",sourceDirName:"docs/getting-started",slug:"/docs/getting-started/installation",permalink:"/pr-preview/pr-19/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/main/docs/docs/getting-started/installation.md",tags:[],version:"current",lastUpdatedAt:1706107943,formattedLastUpdatedAt:"Jan 24, 2024",frontMatter:{title:"Installing dbt-athena",id:"installation",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"IAM permissions",permalink:"/pr-preview/pr-19/docs/getting-started/prerequisites/iam-permissions"},next:{title:"Table configuration",permalink:"/pr-preview/pr-19/docs/configuration/table-configuration"}},s={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install dbt-athena",id:"install-dbt-athena",level:2},{value:"Configuring dbt-athena",id:"configuring-dbt-athena",level:3}],u={toc:m},c="wrapper";function g(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)(c,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Installed dbt Core using the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/core/installation"},"installation instructions")," for your operating system + a dbt project initialized."),(0,l.kt)("li",{parentName:"ul"},"A working Athena setup.")),(0,l.kt)("h2",{id:"install-dbt-athena"},"Install dbt-athena"),(0,l.kt)("p",null,"Pip is the easiest way to install the ",(0,l.kt)("a",{parentName:"p",href:"https://pypi.org/project/dbt-athena-community/"},"dbt-athena-community package")," in your dbt project:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"pip install dbt-athena-community\n")),(0,l.kt)("h3",{id:"configuring-dbt-athena"},"Configuring dbt-athena"),(0,l.kt)("p",null,"A dbt profile can be configured in the ",(0,l.kt)("inlineCode",{parentName:"p"},"profiles.yml")," to run against AWS Athena using the following configuration:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s3_staging_dir")),(0,l.kt)("td",{parentName:"tr",align:null},"S3 location to store Athena query results and metadata"),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s3://bucket/dbt/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s3_data_dir")),(0,l.kt)("td",{parentName:"tr",align:null},"Prefix for storing tables, if different from the connection's ",(0,l.kt)("inlineCode",{parentName:"td"},"s3_staging_dir")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s3://bucket2/dbt/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s3_data_naming")),(0,l.kt)("td",{parentName:"tr",align:null},"How to generate table paths in ",(0,l.kt)("inlineCode",{parentName:"td"},"s3_data_dir"),". Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"schema_table_unique"),". See ",(0,l.kt)("a",{parentName:"td",href:"docs/configuration/table-configuration"},"Table Configuration")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema_table_unique"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"region_name")),(0,l.kt)("td",{parentName:"tr",align:null},"AWS region of your Athena instance"),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"eu-central-1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema")),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the schema (Athena database) to build models into (lowercase ",(0,l.kt)("strong",{parentName:"td"},"only"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dbt"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"database")),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the database (Data catalog) to build models into (lowercase ",(0,l.kt)("strong",{parentName:"td"},"only"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"awsdatacatalog"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"poll_interval")),(0,l.kt)("td",{parentName:"tr",align:null},"Interval in seconds to use for polling the status of query results in Athena. Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"5"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aws_profile_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Profile to use from your AWS shared credentials file."),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"my-profile"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aws_access_key_id")),(0,l.kt)("td",{parentName:"tr",align:null},"AWS access key to sign AWS API requests. This is optional, as ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"credentials are determined automatically based on the aws cli and boto3 conventions")," and stored login info."),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AKIAIOSFODNN7EXAMPLE"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aws_secret_access_key")),(0,l.kt)("td",{parentName:"tr",align:null},"AWS secret access key to sign AWS API requests. This is optional, as ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"credentials are determined automatically based on the aws cli and boto3 conventions")," and stored login info."),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"work_group")),(0,l.kt)("td",{parentName:"tr",align:null},"Identifier of Athena workgroup"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"my-custom-workgroup"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"num_retries")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of times to retry a failing query. Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"5")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lf_tags")),(0,l.kt)("td",{parentName:"tr",align:null},"LF tags to apply to any database created by dbt"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"origin": "dbt", "team": "analytics"}'))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example profiles.yml entry:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"athena:\n  target: dev\n  outputs:\n    dev:\n      type: athena\n      work_group: primary\n      s3_staging_dir: s3://aws-athena-query-results/dbt/\n      s3_data_dir: s3://your_s3_bucket/dbt/\n      s3_data_naming: schema_table_unique\n      region_name: eu-central-1\n      database: awsdatacatalog\n      schema: dbt\n      aws_profile_name: my-profile\n      lf_tags:\n        origin: dbt\n        team: analytics\n      threads: 8\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Additional information")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"threads")," is supported"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"database")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"catalog")," can be used interchangeably")))}g.isMDXComponent=!0}}]);