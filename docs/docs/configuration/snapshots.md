---
title: "Snapshots"
id: snapshots
---

The dbt-athena adapter supports [dbt snapshots](https://docs.getdbt.com/docs/build/snapshots). Both the dbt timestamp and check strategy are supported. To create a snapshot, create a snapshot file in the dbt snapshots directory. If directory does not exist create one. Read more about dbt snapshots [here](https://docs.getdbt.com/docs/build/snapshots).

## Detecting row changes

### Timestamp strategy (recommended)

To use the timestamp strategy refer to the [dbt docs](https://docs.getdbt.com/docs/build/snapshots#timestamp-strategy-recommended)

### Check strategy

To use the check strategy refer to the [dbt docs](https://docs.getdbt.com/docs/build/snapshots#check-strategy)

### Hard-deletes (opt-in)

The materialization also supports invalidating hard deletes. Check the [docs](https://docs.getdbt.com/docs/build/snapshots#hard-deletes-opt-in) to understand the usage.

## Example

<File name='seeds/employment_indicators_november_2022_csv_tables.csv'>

```csv
Series_reference,Period,Data_value,Suppressed
MEIM.S1WA,1999.04,80267,
MEIM.S1WA,1999.05,70803,
MEIM.S1WA,1999.06,65792,
MEIM.S1WA,1999.07,66194,
MEIM.S1WA,1999.08,67259,
MEIM.S1WA,1999.09,69691,
MEIM.S1WA,1999.1,72475,
MEIM.S1WA,1999.11,79263,
MEIM.S1WA,1999.12,86540,
MEIM.S1WA,2000.01,82552,
MEIM.S1WA,2000.02,81709,
MEIM.S1WA,2000.03,84126,
MEIM.S1WA,2000.04,77089,
MEIM.S1WA,2000.05,73811,
MEIM.S1WA,2000.06,70070,
MEIM.S1WA,2000.07,69873,
MEIM.S1WA,2000.08,71468,
MEIM.S1WA,2000.09,72462,
MEIM.S1WA,2000.1,74897,
```

</File>

<File name='models/example_model.sql'>

```sql
{{
  config(materialized='table')
}}

select
    row_number() over () as id,
    *,
    cast(from_unixtime(to_unixtime(now())) as timestamp(6)) AS refresh_timestamp
from {{ ref('employment_indicators_november_2022_csv_tables') }}
```

</File>

<File name='snapshots/model_snapshot_timestamp_strategy.sql'>

```sql
{% snapshot model_snapshot_timestamp_strategy %}
  {{
      config(
        strategy='timestamp',
        updated_at='refresh_timestamp',
        unique_key='id'
      )
  }}

  select * from {{ ref('model') }}
{% endsnapshot %}

```

</File>

<File name='snapshots/model_snapshot_timestamp_strategy_hard_deletes.sql'>

```sql
{% snapshot model_snapshot_timestamp_strategy_hard_deletes %}
  {{
      config(
        unique_key='id',
        strategy='timestamp',
        updated_at='refresh_timestamp',
        invalidate_hard_deletes=True,
      )
  }}
  select * from {{ ref('model') }}
{% endsnapshot %}
```

</File>

<File name='snapshots/model_snapshot_check_strategy.sql'>

```sql
{% snapshot model_snapshot_check_strategy %}
  {{
      config(
        unique_key='id',
        strategy='check',
        check_cols=['series_reference','data_value']
      )
  }}
  select * from {{ ref('model') }}
{% endsnapshot %}
```

</File>

:::caution
Snapshots do not support dropping columns from the source table. If you drop a column, make sure to drop the column from the snapshot as well. Another workaround is to `NULL` the column in the snapshot definition to preserve history
:::
