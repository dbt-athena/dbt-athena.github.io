---
title: "Snapshots"
id: snapshots
---

<VersionBlock lastVersion="1.4">

:::caution
Hive snapshots will undergo breaking changes in version 1.5. 
See the [migration guide](docs/UPGRADE_1.5.md) for more details.
:::

</VersionBlock>

<VersionBlock firstVersion="1.5">

:::caution
Hive snapshots underwent breaking changes in version 1.5.
See the [migration guide](docs/UPGRADE_1.5.md) for more details.
:::

</VersionBlock>

The dbt-athena adapter supports [dbt snapshots](https://docs.getdbt.com/docs/build/snapshots). Both the dbt timestamp and check strategy are supported for hive and iceberg tables. To create a snapshot, create a snapshot file in the dbt snapshots directory. If directory does not exist create one. Read more about dbt snapshots [here](https://docs.getdbt.com/docs/build/snapshots).

## Detecting row changes

### Timestamp strategy (recommended)

To use the timestamp strategy refer to the [dbt docs](https://docs.getdbt.com/docs/build/snapshots#timestamp-strategy-recommended)

### Check strategy

To use the check strategy refer to the [dbt docs](https://docs.getdbt.com/docs/build/snapshots#check-strategy)

### Hard-deletes (opt-in)

The materialization also supports invalidating hard deletes. Check the [docs](https://docs.getdbt.com/docs/build/snapshots#hard-deletes-opt-in) to understand the usage.

## Example

Place the example files below in your dbt project.

<File name='seeds/base.csv'>

```csv
id,name,some_date
1,Easton,1981-05-20T06:46:51
2,Lillian,1978-09-03T18:10:33
3,Jeremiah,1982-03-11T03:59:51
4,Nolan,1976-05-06T20:21:35
5,Hannah,1982-06-23T05:41:26
6,Eleanor,1991-08-10T23:12:21
7,Lily,1971-03-29T14:58:02
8,Jonathan,1988-02-26T02:55:24
9,Adrian,1994-02-09T13:14:23
10,Nora,1976-03-01T16:51:39
```

</File>

<File name='seeds/changed.csv'>

```csv
id,name,some_date
4,Updated Nolan,2022-05-06T20:21:35
5,Updated Hannah,2022-06-23T05:41:26
6,Updated Eleanor,2022-08-10T23:12:21
7,Lily,1971-03-29T14:58:02
8,Jonathan,1988-02-26T02:55:24
9,Adrian,1994-02-09T13:14:23
10,Nora,1976-03-01T16:51:39
11,New Mateo,2014-09-07T17:04:27
12,New Julian,2000-02-04T11:48:30
13,New Gabriel,2001-07-10T07:32:52
```

</File>


<File name='snapshots/iceberg_snapshot_timestamp_strategy.sql'>

```sql
{% snapshot iceberg_snapshot_timestamp_strategy %}
    {{ config(
        strategy='timestamp',
        unique_key='id',
        updated_at='some_date',
        table_type='iceberg',
    )}}
    select * from {{ ref(var('seed_name', 'base')) }}
{% endsnapshot %}

```

</File>

<File name='snapshots/hive_snapshot_timestamp_strategy_hard_deletes.sql'>

```sql
{% snapshot hive_snapshot_timestamp_strategy_hard_deletes %}
    {{ config(
        strategy='timestamp',
        unique_key='id',
        updated_at='some_date',
        table_type='hive',
        invalidate_hard_deletes=True,
    )}}
    select * from {{ ref(var('seed_name', 'base')) }}
{% endsnapshot %}
```

</File>

<File name='snapshots/iceberg_snapshot_check_column_strategy.sql'>

```sql
{% snapshot iceberg_snapshot_check_column_strategy %}
    {{ config(
        check_cols=['name'], 
        unique_key='id', 
        strategy='check',
        table_type='iceberg',
    ) }}
    select * from {{ ref(var('seed_name', 'base')) }}
{% endsnapshot %}
```

</File>

<File name='snapshots/hive_snapshot_check_all_columns_strategy.sql'>

```sql
{% snapshot hive_snapshot_check_all_columns_strategy %}
    {{ config(
        check_cols='all', 
        unique_key='id', 
        strategy='check',
        table_type='hive',
    ) }}
    select * from {{ ref(var('seed_name', 'base')) }}
{% endsnapshot %}
```

</File>

Now you can test these different snapshot strategies. Replace `SNAPSHOT_NAME` with one of the snapshots defined above (e.g. `hive_snapshot_check_all_columns_strategy`).

```shell
# Load seeds
dbt seed

# Run initial snapshot
dbt snapshot --select SNAPSHOT_NAME

# Run snapshot again, on changed source data
dbt snapshot --select SNAPSHOT_NAME --vars "seed_name: changed"
```

:::caution
Snapshots do not support dropping columns from the source table. If you drop a column, make sure to drop the column from the snapshot as well. Another workaround is to `NULL` the column in the snapshot definition to preserve history
:::

