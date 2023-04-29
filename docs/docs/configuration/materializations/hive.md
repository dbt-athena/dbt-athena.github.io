---
title: "Hive table"
id: hive
---

The default dbt [table materialization](https://docs.getdbt.com/docs/build/materializations#table) will be using a Hive table in Athena.
When used, dbt will run a [`CREATE TABLE AS`](https://docs.aws.amazon.com/athena/latest/ug/create-table-as.html) query against Athena.
