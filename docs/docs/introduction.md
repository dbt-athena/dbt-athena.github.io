---
title: "What is dbt-athena?"
id: "introduction"
sidebar_label: "Introduction"
slug: /
---

dbt-athena is a community-owned adapter for dbt Core. The dbt-athena package contains all the code to enable dbt to work with [AWS Athena](https://aws.amazon.com/athena/) and transform data using SQL.

In essence, the dbt-athena adapter will transform existing data in Athena by leveraging the [`CREATE TABLE AS`](https://docs.aws.amazon.com/athena/latest/ug/create-table-as.html) or [`CREATE VIEW`](https://docs.aws.amazon.com/athena/latest/ug/create-view.html) SQL queries in AWS Athena.

## Features of dbt-athena

- ✅ Supports dbt version `1.5.*`
- ✅ Supports [dbt seeds](https://docs.getdbt.com/docs/building-a-dbt-project/seeds)
- ✅ Supports [dbt snapshots](https://docs.getdbt.com/docs/build/snapshots)
- ✅ Supports [table materialization](https://docs.getdbt.com/docs/build/materializations#table) using Hive tables (Athena v2/v3) and [Iceberg tables](https://docs.aws.amazon.com/athena/latest/ug/querying-iceberg.html) (Athena v3)
- ✅ Supports [incremental models](https://docs.getdbt.com/docs/build/incremental-models) for Iceberg (`merge` and `append`) and Hive tables (`insert_overwrite` and `append`).

Not supported yet: [Python models](https://docs.getdbt.com/docs/build/python-models#configuring-python-models), [persist docs](https://docs.getdbt.com/reference/resource-configs/persist_docs) for views.
