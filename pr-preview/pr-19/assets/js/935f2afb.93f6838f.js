"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Introduction","href":"/pr-preview/pr-19/","docId":"docs/introduction"},{"type":"category","label":"Getting started","items":[{"type":"category","label":"Prerequisites","collapsed":true,"items":[{"type":"link","label":"AWS resources","href":"/pr-preview/pr-19/docs/getting-started/prerequisites/aws-resources","docId":"docs/getting-started/prerequisites/aws-resources"},{"type":"link","label":"IAM permissions","href":"/pr-preview/pr-19/docs/getting-started/prerequisites/iam-permissions","docId":"docs/getting-started/prerequisites/iam-permissions"}],"collapsible":true},{"type":"link","label":"Installation","href":"/pr-preview/pr-19/docs/getting-started/installation","docId":"docs/getting-started/installation"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Configuration","items":[{"type":"link","label":"Table configuration","href":"/pr-preview/pr-19/docs/configuration/table-configuration","docId":"docs/configuration/table-configuration"},{"type":"category","label":"Materializations","collapsed":true,"items":[{"type":"link","label":"Hive table","href":"/pr-preview/pr-19/docs/configuration/materializations/hive","docId":"docs/configuration/materializations/hive"},{"type":"link","label":"Highly-available Hive table","href":"/pr-preview/pr-19/docs/configuration/materializations/hive-ha","docId":"docs/configuration/materializations/hive-ha"},{"type":"link","label":"Iceberg table","href":"/pr-preview/pr-19/docs/configuration/materializations/iceberg","docId":"docs/configuration/materializations/iceberg"}],"collapsible":true},{"type":"link","label":"Seeds","href":"/pr-preview/pr-19/docs/configuration/seeds","docId":"docs/configuration/seeds"},{"type":"link","label":"Snapshots","href":"/pr-preview/pr-19/docs/configuration/snapshots","docId":"docs/configuration/snapshots"},{"type":"link","label":"Contract & Constraints","href":"/pr-preview/pr-19/docs/configuration/contract-constraints","docId":"docs/configuration/contract-constraints"},{"type":"link","label":"Lakeformation","href":"/pr-preview/pr-19/docs/configuration/lakeformation","docId":"docs/configuration/lakeformation"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Known issues","href":"/pr-preview/pr-19/docs/known-issues","docId":"docs/known-issues"},{"type":"category","label":"Migration","items":[{"type":"link","label":"Upgrade to version 1.5","href":"/pr-preview/pr-19/docs/migration/UPGRADE-1.5","docId":"docs/migration/UPGRADE-1.5"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Contributing","items":[{"type":"link","label":"Contributing","href":"/pr-preview/pr-19/docs/contributing/","docId":"docs/contributing/contributing"},{"type":"link","label":"Local development","href":"/pr-preview/pr-19/docs/contributing/local-development","docId":"docs/contributing/local-development"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Frequently asked questions","items":[{"type":"category","label":"Athena","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"How many dbt threads should I configure","href":"/pr-preview/pr-19/faqs/Athena/dbt-threads","docId":"faqs/Athena/dbt-threads"},{"type":"link","label":"Athena limits Hive tables to 100 partitions","href":"/pr-preview/pr-19/faqs/Athena/too-many-open-partitions","docId":"faqs/Athena/too-many-open-partitions"}]}],"collapsed":true,"collapsible":true,"href":"/pr-preview/pr-19/docs/faqs"}]},"docs":{"docs/configuration/contract-constraints":{"id":"docs/configuration/contract-constraints","title":"Contract & Constraints","description":"Contract","sidebar":"docs"},"docs/configuration/lakeformation":{"id":"docs/configuration/lakeformation","title":"Lakeformation","description":"Tags","sidebar":"docs"},"docs/configuration/materializations/hive":{"id":"docs/configuration/materializations/hive","title":"Hive table","description":"The default dbt table materialization will be using a Hive","sidebar":"docs"},"docs/configuration/materializations/hive-ha":{"id":"docs/configuration/materializations/hive-ha","title":"Highly-available Hive table","description":"This feature changed in version 1.5.","sidebar":"docs"},"docs/configuration/materializations/iceberg":{"id":"docs/configuration/materializations/iceberg","title":"Iceberg table","description":"Athena supports read, time travel, write, and DDL queries for Apache Iceberg tables that use the Apache Parquet format","sidebar":"docs"},"docs/configuration/seeds":{"id":"docs/configuration/seeds","title":"Seeds","description":"Seeds are CSV files in your dbt project (typically in your seeds directory), that dbt can load into your data warehouse using the dbt seed command. Read more about seeds in the dbt docs.","sidebar":"docs"},"docs/configuration/snapshots":{"id":"docs/configuration/snapshots","title":"Snapshots","description":"Hive snapshots will undergo breaking changes in version 1.5.","sidebar":"docs"},"docs/configuration/table-configuration":{"id":"docs/configuration/table-configuration","title":"Table configuration","description":"Model configuration","sidebar":"docs"},"docs/contributing/contributing":{"id":"docs/contributing/contributing","title":"Become a contributor","description":"A community-owned project","sidebar":"docs"},"docs/contributing/local-development":{"id":"docs/contributing/local-development","title":"Local development","description":"Using virtual environments","sidebar":"docs"},"docs/getting-started/installation":{"id":"docs/getting-started/installation","title":"Installing dbt-athena","description":"Prerequisites","sidebar":"docs"},"docs/getting-started/prerequisites/aws-resources":{"id":"docs/getting-started/prerequisites/aws-resources","title":"AWS resources","description":"To get started, you will need an S3 bucket, for instance my-bucket, and an Athena database:","sidebar":"docs"},"docs/getting-started/prerequisites/iam-permissions":{"id":"docs/getting-started/prerequisites/iam-permissions","title":"IAM permissions","description":"Athena IAM permissions","sidebar":"docs"},"docs/introduction":{"id":"docs/introduction","title":"What is dbt-athena?","description":"dbt-athena is a community-owned adapter for dbt Core. The dbt-athena package contains all the code to enable dbt to work with AWS Athena and transform data using SQL.","sidebar":"docs"},"docs/known-issues":{"id":"docs/known-issues","title":"Known issues","description":"- Incremental Iceberg models: sync all columns on schema change can\'t remove columns used as partitioning. The only way, from a dbt perspective, is to do a full-refresh of the incremental model.","sidebar":"docs"},"docs/migration/UPGRADE-1.5":{"id":"docs/migration/UPGRADE-1.5","title":"Upgrade to version 1.5","description":"Highly available Hive table","sidebar":"docs"},"faqs/Athena/dbt-threads":{"id":"faqs/Athena/dbt-threads","title":"How many dbt threads should I configure","description":"Athena has certain service API call quotas. The StartQueryExecution API supports 20 calls per second, and \u2013 if no api call is made in 4s \u2013 a burst to 80 calls. See the AWS Athena service limits documentation.","sidebar":"docs"},"faqs/Athena/too-many-open-partitions":{"id":"faqs/Athena/too-many-open-partitions","title":"Athena limits Hive table to 100 partitions","description":"In some cases, you might experience HIVETOOMANYOPENPARTITIONS: Exceeded limit of 100 open writers for partitions/buckets.. Athena supports writing to 100 unique partition and bucket combinations per query. For example, if no buckets are defined in the destination table, you can specify a maximum of 100 partitions. If you specify five buckets, 20 partitions (each with five buckets) are allowed. If you exceed this count, an error occurs.","sidebar":"docs"}}}')}}]);