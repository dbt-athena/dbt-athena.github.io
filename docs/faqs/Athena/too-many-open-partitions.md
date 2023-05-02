---
title: Athena limits Hive table to 100 partitions
sidebar_label: "Athena limits Hive tables to 100 partitions"
id: too-many-open-partitions
---

In some cases, you might experience `HIVE_TOO_MANY_OPEN_PARTITIONS: Exceeded limit of 100 open writers for partitions/buckets.`. Athena supports writing to 100 unique partition and bucket combinations per query. For example, if no buckets are defined in the destination table, you can specify a maximum of 100 partitions. If you specify five buckets, 20 partitions (each with five buckets) are allowed. If you exceed this count, an error occurs.

:::info
Iceberg tables are also affected by the same limitation. The `iceberg.max-partitions-per-writer` setting in Trino is set by default to 100.
:::

AWS suggests a workaround in the documentation using [CTAs and INSERT INTO](https://docs.aws.amazon.com/athena/latest/ug/ctas-insert-into.html). We can automate this in dbt using a materialization. An example implementation – inspired by the [Redshift insert_by_period materialization](https://github.com/dbt-labs/dbt-labs-experimental-features/tree/main/insert_by_period) – can be found [here](https://gist.github.com/jessedobbelaere/6fdb593f9e2cc732e9f142c56c9bac87).
