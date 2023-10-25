"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[951],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(a),c=i,k=s["".concat(d,".").concat(c)]||s[c]||u[c]||r;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},835:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var n,i=a(7462),r=a(3366),l=(a(7294),a(3905)),o=a(5108),d=["components"],p={title:"Table configuration",id:"table-configuration"},m=void 0,s={unversionedId:"docs/configuration/table-configuration",id:"docs/configuration/table-configuration",title:"Table configuration",description:"Model configuration",source:"@site/docs/docs/configuration/table-configuration.md",sourceDirName:"docs/configuration",slug:"/docs/configuration/table-configuration",permalink:"/pr-preview/pr-18/docs/configuration/table-configuration",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/main/docs/docs/configuration/table-configuration.md",tags:[],version:"current",lastUpdatedAt:1698254102,formattedLastUpdatedAt:"Oct 25, 2023",frontMatter:{title:"Table configuration",id:"table-configuration"},sidebar:"docs",previous:{title:"Installation",permalink:"/pr-preview/pr-18/docs/getting-started/installation"},next:{title:"Hive table",permalink:"/pr-preview/pr-18/docs/configuration/materializations/hive"}},u={},c=[{value:"Model configuration",id:"model-configuration",level:2},{value:"Lakeformation configuration",id:"lakeformation-configuration",level:2},{value:"Table data location",id:"table-data-location",level:2},{value:"Incremental table models",id:"incremental-table-models",level:2},{value:"On schema change",id:"on-schema-change",level:3}],k=(n="VersionBlock",function(e){return o.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),g={toc:c},N="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,d);return(0,l.kt)(N,(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"model-configuration"},"Model configuration"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"materialized")),(0,l.kt)("td",{parentName:"tr",align:null},"A table materialization like ",(0,l.kt)("inlineCode",{parentName:"td"},"table"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"incremental"),", ",(0,l.kt)("a",{parentName:"td",href:"./materializations/hive-ha"},(0,l.kt)("inlineCode",{parentName:"a"},"table_hive_ha"))),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s3_data_naming")),(0,l.kt)("td",{parentName:"tr",align:null},"An optional naming policy for the data on S3. See ",(0,l.kt)("a",{parentName:"td",href:"#table-data-location"},"Table data location"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema_table_unique"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"external_location")),(0,l.kt)("td",{parentName:"tr",align:null},"If set, the full S3 path in which the table will be saved. (Does not work with Iceberg table)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"none"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"partitioned_by")),(0,l.kt)("td",{parentName:"tr",align:null},"An array list of columns by which the table will be partitioned. \u26a0\ufe0f ",(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/athena/latest/ug/ctas-considerations-limitations.html#ctas-considerations-limitations-partition-and-bucket-limits"},"Limited to the creation of 100 partitions"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"none"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bucketed_by")),(0,l.kt)("td",{parentName:"tr",align:null},"An array list of columns to bucket the data. This is ignored when using Iceberg. Example: ",(0,l.kt)("inlineCode",{parentName:"td"},"[org_id]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"none"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bucket_count")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of buckets for bucketing your data. This is ignored when using Iceberg. Example: ",(0,l.kt)("inlineCode",{parentName:"td"},"1"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"none"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table_type")),(0,l.kt)("td",{parentName:"tr",align:null},"The type of table in Athena. Supports ",(0,l.kt)("inlineCode",{parentName:"td"},"hive")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"iceberg")," values."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hive"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"format")),(0,l.kt)("td",{parentName:"tr",align:null},"The data format for the table. Supports ",(0,l.kt)("inlineCode",{parentName:"td"},"ORC"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"PARQUET"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"AVRO"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"JSON"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"TEXTFILE"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PARQUET"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"write_compression")),(0,l.kt)("td",{parentName:"tr",align:null},"The compression type to use for any storage format that allows compression to be specified. To see which options are available, see ",(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/athena/latest/ug/create-table-as.html"},"CREATE TABLE AS"),". Example: ",(0,l.kt)("inlineCode",{parentName:"td"},"SNAPPY"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"none"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"field_delimiter")),(0,l.kt)("td",{parentName:"tr",align:null},"Custom field delimiter. Used when the format is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"TEXTFILE"),". See ",(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/athena/latest/ug/create-table-as.html"},"CREATE TABLE AS"),". Example: ",(0,l.kt)("inlineCode",{parentName:"td"},"','")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"none"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table_properties")),(0,l.kt)("td",{parentName:"tr",align:null},"Additional table properties to add to the table. Valid for Iceberg only. Example: ",(0,l.kt)("inlineCode",{parentName:"td"},"{'optimize_rewrite_delete_file_threshold': '2'}")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"none"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"native_drop")),(0,l.kt)("td",{parentName:"tr",align:null},"Relation drop operations will be performed with SQL, not direct Glue API calls. No S3 calls will be made to manage data in S3. Data in S3 will only be cleared up for Iceberg tables ",(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/athena/latest/ug/querying-iceberg-managing-tables.html"},"see AWS docs"),". Useful in contexts where S3 access is restricted. Note that Iceberg DROP TABLE operations may timeout if they take longer than 60 seconds."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"seed_by_insert")),(0,l.kt)("td",{parentName:"tr",align:null},"Default behaviour uploads seed data to S3. This flag will create seeds using an SQL insert statement. large seed files cannot use ",(0,l.kt)("inlineCode",{parentName:"td"},"seed_by_insert"),", as the SQL insert statement would exceed ",(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/athena/latest/ug/service-limits.html"},"the Athena limit of 262144 bytes"),". Useful in contexts where S3 access is restricted."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)(k,{firstVersion:"1.5",mdxType:"VersionBlock"},(0,l.kt)("h2",{id:"lakeformation-configuration"},"Lakeformation configuration"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lf_tags_config")),(0,l.kt)("td",{parentName:"tr",align:null},"Lake Formation tags for metadata access control, to associate to the table. See detailed instructions ",(0,l.kt)("a",{parentName:"td",href:"./lakeformation"},"here")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"none"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lf_grants")),(0,l.kt)("td",{parentName:"tr",align:null},"Lake Formation data cell filters configuration. See detailed instructions ",(0,l.kt)("a",{parentName:"td",href:"./lakeformation"},"here")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"none")))))),(0,l.kt)("h2",{id:"table-data-location"},"Table data location"),(0,l.kt)("p",null,"The S3 location in which table data is saved is determined by:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"external_location")," is defined, that value is used."),(0,l.kt)("li",{parentName:"ol"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"s3_data_dir")," is defined, the path is determined by this value and ",(0,l.kt)("inlineCode",{parentName:"li"},"s3_data_naming"),"."),(0,l.kt)("li",{parentName:"ol"},"If no ",(0,l.kt)("inlineCode",{parentName:"li"},"s3_data_dir")," is defined, the data is stored under ",(0,l.kt)("inlineCode",{parentName:"li"},"s3_staging_dir/tables/"),".")),(0,l.kt)("p",null,"The options for ",(0,l.kt)("inlineCode",{parentName:"p"},"s3_data_naming")," are:"),(0,l.kt)(k,{lastVersion:"1.4",mdxType:"VersionBlock"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"uuid")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"{s3_data_dir}/{uuid4()}/")))),(0,l.kt)(k,{firstVersion:"1.5",mdxType:"VersionBlock"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"unique")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"{s3_data_dir}/{uuid4()}/")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"table_table")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"{s3_data_dir}/{table}/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"table_unique")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"{s3_data_dir}/{table}/{uuid4()}/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"schema_table")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"{s3_data_dir}/{schema}/{table}/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"schema_table_unique")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"{s3_data_dir}/{schema}/{table}/{uuid4()}/"))),(0,l.kt)(k,{firstVersion:"1.5",mdxType:"VersionBlock"},(0,l.kt)("admonition",{title:"Unique and UUID naming strategy",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"In the past, the ",(0,l.kt)("inlineCode",{parentName:"p"},"unique")," strategy was named ",(0,l.kt)("inlineCode",{parentName:"p"},"uuid"),". We changed that to ensure consistency in our strategies naming."))),(0,l.kt)("p",null,"It's possible to set the ",(0,l.kt)("inlineCode",{parentName:"p"},"s3_data_naming")," globally in the ",(0,l.kt)("inlineCode",{parentName:"p"},"profile.yml"),", set it for a group of models in the ",(0,l.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")," or overwrite the value for a specific model in the config block."),(0,l.kt)("admonition",{title:"Workgroup with default output location",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"When using an Athena workgroup with a default output location configured, ",(0,l.kt)("inlineCode",{parentName:"p"},"s3_data_naming")," and any configured buckets are ignored and the location configured in the workgroup is used.")),(0,l.kt)("h2",{id:"incremental-table-models"},"Incremental table models"),(0,l.kt)("p",null,"dbt-athena supports ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/incremental-models"},"incremental models"),". These strategies are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"insert_overwrite")," (default): The insert overwrite strategy deletes the overlapping partitions from the destination table, and then inserts the new records from the source. This strategy depends on the ",(0,l.kt)("inlineCode",{parentName:"li"},"partitioned_by")," keyword! If no partitions are defined, dbt will fall back to the ",(0,l.kt)("inlineCode",{parentName:"li"},"append")," strategy."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"append"),": Insert new records without updating, deleting or overwriting any existing data. There might be duplicate data (e.g. great for log or historical data)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"merge"),": Conditionally updates, deletes, or inserts rows into an Iceberg table. Used in combination with ",(0,l.kt)("inlineCode",{parentName:"li"},"unique_key"),". \u26a0\ufe0f Only available when using ",(0,l.kt)("a",{parentName:"li",href:"docs/configuration/materializations/iceberg"},"Iceberg"),".")),(0,l.kt)("h3",{id:"on-schema-change"},"On schema change"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"on_schema_change")," is an option to reflect changes of schema in incremental models.\nThe following options are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ignore")," (default)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fail")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"append_new_columns")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sync_all_columns"))),(0,l.kt)("p",null,"In detail, please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/incremental-models#what-if-the-columns-of-my-incremental-model-change"},"dbt docs"),"."))}h.isMDXComponent=!0}}]);