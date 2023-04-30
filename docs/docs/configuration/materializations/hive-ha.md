---
title: "Highly-available Hive table"
id: hive-ha
---

The current implementation of the Hive table materialization can lead to downtime, because the target table is dropped and re-created. To have a less destructive behavior, it's possible to use the `table='table_hive_ha'` materialization.

**`table_hive_ha`** leverages the [table versions](https://docs.aws.amazon.com/glue/latest/webapi/API_GetTableVersions.html) feature of Glue catalog: creating a "tmp" table and swapping the target table to the location of the tmp table.

:::info
This materialization is only available for `table_type=hive` (default) and requires using unique locations on S3.
:::

```sql
{{
  config(
    materialized='table_hive_ha',
    format='parquet',
    partition_by=['status'],
    s3_data_naming='table_unique'
  )
}}

select
    'a' as user_id,
    'pi' as user_name,
    'active' as status
union all
select
    'b' as user_id,
    'sh' as user_name,
    'active' as status
union all
select
    'c' as user_id,
    'sh' as user_name,
    'disabled' as status
```

By default, the materialization keeps the last 4 table versions. You can change it by setting `versions_to_keep` on the model configuration.

#### Known issues

- When swapping from a table with partitions to a table without (and the other way around), there could be a little downtime. In case high performance is needed, consider bucketing instead of partitions
- By default, Glue "duplicates" the versions internally, so the last 2 versions of a table point to the same location.
- It's recommended to have `versions_to_keep` >= 4, as this will avoid to have the older location removed.
- The macro `athena__end_of_time` needs to be overwritten by the user if using Athena v3 since it requires a precision parameter for timestamps
