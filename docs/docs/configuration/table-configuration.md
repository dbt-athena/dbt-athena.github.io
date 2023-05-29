---
title: "Table configuration"
id: table-configuration
---

## Model configuration

| Property            | Description                                                                                                                                                                                                                                                     | Default               |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| `materialized`      | A table materialization like `table`, `incremental`, [`table_hive_ha`](./materializations/hive-ha)                                                                                                                                                              |                       |
| `s3_data_naming`    | An optional naming policy for the data on S3. See [Table data location](#table-data-location).                                                                                                                                                                  | `schema_table_unique` |
| `external_location` | If set, the full S3 path in which the table will be saved. (Does not work with Iceberg table).                                                                                                                                                                  | `none`                |
| `partitioned_by`    | An array list of columns by which the table will be partitioned. ⚠️ [Limited to the creation of 100 partitions](https://docs.aws.amazon.com/athena/latest/ug/ctas-considerations-limitations.html#ctas-considerations-limitations-partition-and-bucket-limits). | `none`                |
| `bucketed_by`       | An array list of columns to bucket the data. This is ignored when using Iceberg. Example: `[org_id]`                                                                                                                                                            | `none`                |
| `bucket_count`      | The number of buckets for bucketing your data. This is ignored when using Iceberg. Example: `1`.                                                                                                                                                                | `none`                |
| `table_type`        | The type of table in Athena. Supports `hive` or `iceberg` values.                                                                                                                                                                                               | `hive`                |
| `format`            | The data format for the table. Supports `ORC`, `PARQUET`, `AVRO`, `JSON`, `TEXTFILE`.                                                                                                                                                                           | `PARQUET`             |
| `write_compression` | The compression type to use for any storage format that allows compression to be specified. To see which options are available, see [CREATE TABLE AS](https://docs.aws.amazon.com/athena/latest/ug/create-table-as.html). Example: `SNAPPY`.                    | `none`                |
| `field_delimiter`   | Custom field delimiter. Used when the format is set to `TEXTFILE`. See [CREATE TABLE AS](https://docs.aws.amazon.com/athena/latest/ug/create-table-as.html). Example: `','`                                                                                     | `none`                |
| `table_properties`  | Additional table properties to add to the table. Valid for Iceberg only. Example: `{'optimize_rewrite_delete_file_threshold': '2'}`                                                                                                                             | `none`                |

<VersionBlock firstVersion="1.5">

## Lakeformation configuration

| Property         | Description                                                                                                                   | Default |
|------------------|-------------------------------------------------------------------------------------------------------------------------------|---------|
| `lf_tags_config` | Lake Formation tags for metadata access control, to associate to the table. See detailed instructions [here](./lakeformation) | `none`  |
| `lf_grants`      | Lake Formation data cell filters configuration. See detailed instructions [here](./lakeformation)                             | `none`  |

</VersionBlock>

## Table data location

The S3 location in which table data is saved is determined by:

1. If `external_location` is defined, that value is used.
2. If `s3_data_dir` is defined, the path is determined by this value and `s3_data_naming`.
3. If no `s3_data_dir` is defined, the data is stored under `s3_staging_dir/tables/`.

The options for `s3_data_naming` are:

<VersionBlock lastVersion="1.4">

- **`uuid`**: `{s3_data_dir}/{uuid4()}/`

</VersionBlock>

<VersionBlock firstVersion="1.5">

- **`unique`**: `{s3_data_dir}/{uuid4()}/`

</VersionBlock>

- **`table_table`**: `{s3_data_dir}/{table}/`
- **`table_unique`**: `{s3_data_dir}/{table}/{uuid4()}/`
- **`schema_table`**: `{s3_data_dir}/{schema}/{table}/`
- **`schema_table_unique`**: `{s3_data_dir}/{schema}/{table}/{uuid4()}/`

<VersionBlock firstVersion="1.5">

:::caution Unique and UUID naming strategy
In the past, the `unique` strategy was named `uuid`. We changed that to ensure consistency in our strategies naming.
:::

</VersionBlock>

It's possible to set the `s3_data_naming` globally in the `profile.yml`, set it for a group of models in the `dbt_project.yml` or overwrite the value for a specific model in the config block.

:::caution Workgroup with default output location
When using an Athena workgroup with a default output location configured, `s3_data_naming` and any configured buckets are ignored and the location configured in the workgroup is used.
:::

## Incremental table models

dbt-athena supports [incremental models](https://docs.getdbt.com/docs/build/incremental-models). These strategies are supported:

- `insert_overwrite` (default): The insert overwrite strategy deletes the overlapping partitions from the destination table, and then inserts the new records from the source. This strategy depends on the `partitioned_by` keyword! If no partitions are defined, dbt will fall back to the `append` strategy.
- `append`: Insert new records without updating, deleting or overwriting any existing data. There might be duplicate data (e.g. great for log or historical data).
- `merge`: Conditionally updates, deletes, or inserts rows into an Iceberg table. Used in combination with `unique_key`. ⚠️ Only available when using [Iceberg](docs/configuration/materializations/iceberg).

### On schema change

`on_schema_change` is an option to reflect changes of schema in incremental models.
The following options are supported:

- `ignore` (default)
- `fail`
- `append_new_columns`
- `sync_all_columns`

In detail, please refer to [dbt docs](https://docs.getdbt.com/docs/build/incremental-models#what-if-the-columns-of-my-incremental-model-change).
