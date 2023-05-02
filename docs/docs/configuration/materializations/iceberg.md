---
title: "Iceberg table"
id: iceberg
---

# Apache Iceberg

Athena supports read, time travel, write, and DDL queries for Apache Iceberg tables that use the Apache Parquet format for data and the AWS Glue catalog for their metastore.

Apache Iceberg is an open table format for very large analytic datasets. Iceberg manages large collections of files as tables, and it supports modern analytical data lake operations such as record-level insert, update, delete, and time travel queries. The Iceberg specification allows seamless table evolution such as schema and partition evolution and is designed for optimized usage on Amazon S3. Iceberg also helps guarantee data correctness under concurrent write scenarios.

The dbt-athena adapter supports table materialization for Apache Iceberg.

## Getting started

To get started, add the following config block to your model:

```sql
{{
  config(
    materialized='table',
    table_type='iceberg',
    format='parquet',
    partitioned_by=['bucket(user_id, 5)'],
    table_properties={
      'optimize_rewrite_delete_file_threshold': '2'
    }
  )
}}

SELECT
    'A' AS user_id,
    'pi' AS name,
    'active' AS status,
    17.89 AS cost,
    1 AS quantity,
    100000000 AS quantity_big,
    current_date AS my_date
```

Iceberg supports **bucketing** as hidden partitions, therefore use the `partitioned_by` config to add specific bucketing conditions.

Iceberg supports several **table formats** for data : `PARQUET`, `AVRO` and `ORC`.

## Incremental tables

It is possible to use iceberg in an incremental materialization. Two strategies are supported:

- `append`: new records are appended to the table, this can lead to duplicates
- `merge`: must be used in combination with `unique_key`.
  It performs an upsert: new records are added, and records that already existed, are updated. If
  `delete_condition` is provided in the model config, it can also delete records based on the
  provided condition (SQL condition). You can use any column of the incremental table (`src`) or
  the final table (`target`). You must prefix the column by the name of the table to prevent
  `Column is ambiguous` error.

:::caution
`MERGE INTO` is transactional and is supported only for Apache Iceberg tables in **Athena engine version 3**.
:::

```sql
{{
  config(
    materialized='incremental',
    table_type='iceberg',
    incremental_strategy='merge',
    unique_key='user_id',
    delete_condition="src.status != 'active' and target.my_date < now() - interval '2' year"
    format='parquet',
  )
}}

SELECT
    'A' AS user_id,
    'pi' AS name,
    'active' AS status,
    17.89 AS cost,
    1 AS quantity,
    100000000 AS quantity_big,
    current_date AS my_date
```
