---
title: "Iceberg table"
id: iceberg
---

# Apache Iceberg

Athena supports read, time travel, write, and DDL queries for Apache Iceberg tables that use the Apache Parquet format
for data and the AWS Glue catalog for their metastore.

Apache Iceberg is an open table format for huge analytic datasets.
Iceberg manages large collections of files as tables, and it supports modern analytical data lake operations such as
record-level insert, update, delete, and time travel queries.
The Iceberg specification allows seamless table evolution such as schema and partition evolution and is designed for
optimized usage on Amazon S3.
Iceberg also helps guarantee data correctness under concurrent write scenarios.

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

SELECT 'A'          AS user_id,
       'pi'         AS name,
       'active'     AS status,
       17.89        AS cost,
       1            AS quantity,
       100000000    AS quantity_big,
       current_date AS my_date
```

Iceberg supports **bucketing** as hidden partitions, therefore, use the `partitioned_by` config to add specific
bucketing conditions.

Iceberg supports several **table formats** for data : `PARQUET`, `AVRO` and `ORC`.

## Incremental tables

It is possible to use iceberg in an incremental materialization. Two strategies are supported:

- `append`: New records are appended to the table, this can lead to duplicates.
- `merge`: Performs an upsert (and optionally delete), where new records are added and existing records are updated.
  Only available with Athena engine version 3.

`merge` configuration

- `unique_key` **(required)**: columns that define a unique record in the source and target tables.

<VersionBlock firstVersion="1.5.1">

- `incremental_predicates` (optional): SQL conditions that enable custom join clauses in the merge statement. This can
  be useful for improving performance via predicate pushdown on the target table.

- `delete_condition` (optional): SQL condition used to identify records that should be deleted.

<VersionBlock firstVersion="1.6.2">

- `update_condition` (optional): SQL condition used to identify records that should be updated.

</VersionBlock>

<VersionBlock firstVersion="1.6.4">

- `insert_condition` (optional): SQL condition used to identify records that should be inserted.

</VersionBlock>

These configurations can include any column of the incremental table (`src`) or the final table (`target`).
Column names must be prefixed by either `src` or `target` to prevent a `Column is ambiguous` error.

</VersionBlock>

<VersionBlock firstVersion="1.4.4">

- `delete_condition` (optional): SQL condition used to identify records that should be deleted. Can include any column
  of the incremental table (`src`) or the final table (`target`). Column names must be prefixed by either `src`
  or `target` to prevent a `Column is ambiguous` error.

</VersionBlock>

:::caution
`MERGE INTO` is transactional and is supported only for Apache Iceberg tables in **Athena engine version 3**
:::

`incremental_predicates & delete_condition` example:

```sql
{{ config(
    materialized='incremental',
    table_type='iceberg',
    incremental_strategy='merge',
    unique_key='user_id',
    incremental_predicates=["src.quantity > 1", "target.my_date >= now() - interval '4' year"],
    delete_condition="src.status != 'active' and target.my_date < now() - interval '2' year",
    format='parquet'
) }}

select 'A'          as user_id,
       'pi'         as name,
       'active'     as status,
       17.89        as cost,
       1            as quantity,
       100000000    as quantity_big,
       current_date as my_date
```

<VersionBlock firstVersion="1.6.2">

`update_condition` example:

```sql
{{ config(
        materialized='incremental',
        incremental_strategy='merge',
        unique_key=['id'],
        update_condition='target.id > 1',
        schema='sandbox'
    )
}}

{% if is_incremental() %}

select * from (
    values
    (1, 'v1-updated')
    , (2, 'v2-updated')
) as t (id, value)

{% else %}

select * from (
    values
    (-1, 'v-1')
    , (0, 'v0')
    , (1, 'v1')
    , (2, 'v2')
) as t (id, value)

{% endif %}
```

</VersionBlock>

<VersionBlock firstVersion="1.6.4">

`insert_condition` example:

```sql
{{ config(
        table_type='iceberg',
        materialized='incremental',
        incremental_strategy='merge',
        unique_key=['id'],
        insert_condition='src.status != 0'
    )
}}

{% if is_incremental() %}

select * from (
    values
    (1, -1)
    , (2, 0)
    , (3, 1)
) as t (id, status)

{% else %}

select * from (
    values
    (0, 1)
) as t (id, status)

{% endif %}
```

</VersionBlock>
