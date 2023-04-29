---
title: "Installing dbt-athena"
id: installation
sidebar_label: "Installation"
---

## Prerequisites

- Installed dbt Core using the [installation instructions](https://docs.getdbt.com/docs/core/installation) for your operating system + a dbt project initialized.
- A working Athena setup.

## Install dbt-athena

Pip is the easiest way to install the [dbt-athena-community package](https://pypi.org/project/dbt-athena-community/) in your dbt project:

```terminal
pip install dbt-athena-community
```

### Configuring dbt-athena

A dbt profile can be configured in the `profiles.yml` to run against AWS Athena using the following configuration:

| Option                  | Description                                                                                                                                                                                                                                                       | Required? | Example                                  |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------------- |
| `s3_staging_dir`        | S3 location to store Athena query results and metadata                                                                                                                                                                                                            | Required  | `s3://bucket/dbt/`                       |
| `s3_data_dir`           | Prefix for storing tables, if different from the connection's `s3_staging_dir`                                                                                                                                                                                    | Optional  | `s3://bucket2/dbt/`                      |
| `s3_data_naming`        | How to generate table paths in `s3_data_dir`. Default: `schema_table_unique`. See [Table Configuration](docs/configuration/table-configuration)                                                                                                                   | Optional  | `schema_table_unique`                    |
| `region_name`           | AWS region of your Athena instance                                                                                                                                                                                                                                | Required  | `eu-central-1`                           |
| `schema`                | Specify the schema (Athena database) to build models into (lowercase **only**)                                                                                                                                                                                    | Required  | `dbt`                                    |
| `database`              | Specify the database (Data catalog) to build models into (lowercase **only**)                                                                                                                                                                                     | Required  | `awsdatacatalog`                         |
| `poll_interval`         | Interval in seconds to use for polling the status of query results in Athena. Default: `1`                                                                                                                                                                        | Optional  | `5`                                      |
| `aws_profile_name`      | Profile to use from your AWS shared credentials file.                                                                                                                                                                                                             | Optional  | `my-profile`                             |
| `aws_access_key_id`     | AWS access key to sign AWS API requests. This is optional, as [credentials are determined automatically based on the aws cli and boto3 conventions](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html) and stored login info.        | Optional  | `AKIAIOSFODNN7EXAMPLE`                   |
| `aws_secret_access_key` | AWS secret access key to sign AWS API requests. This is optional, as [credentials are determined automatically based on the aws cli and boto3 conventions](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html) and stored login info. | Optional  | `my-profile`                             |
| `work_group`            | Identifier of Athena workgroup                                                                                                                                                                                                                                    | Optional  | `my-custom-workgroup`                    |
| `num_retries`           | Number of times to retry a failing query. Default: `5`                                                                                                                                                                                                            | Optional  | `3`                                      |
| `lf_tags`               | LF tags to apply to any database created by dbt                                                                                                                                                                                                                   | Optional  | `{"origin": "dbt", "team": "analytics"}` |

**Example profiles.yml entry:**

```yaml
athena:
  target: dev
  outputs:
    dev:
      type: athena
      work_group: primary
      s3_staging_dir: s3://aws-athena-query-results/dbt/
      s3_data_dir: s3://your_s3_bucket/dbt/
      s3_data_naming: schema_table_unique
      region_name: eu-central-1
      database: awsdatacatalog
      schema: dbt
      aws_profile_name: my-profile
      lf_tags:
        origin: dbt
        team: analytics
      threads: 8
```

_Additional information_

- `threads` is supported
- `database` and `catalog` can be used interchangeably
