---
title: "Lakeformation"
id: lakeformation
---

## Tags
The adapter implements AWS Lakeformation tags management in the following way:
- you can enable or disable lf-tags management via [config](./table-configuration) (disabled by default). 
Here are config examples:

`model_config.sql`:
```sql
{{
  config(
    materialized='incremental',
    incremental_strategy='append',
    on_schema_change='append_new_columns',
    table_type='iceberg',
    schema='test_schema',
    lf_tags_config={
          'enabled': true,
          'tags': {
            'tag1': 'value1',
            'tag2': 'value2'
          },
          'tags_columns': {
            'tag1': {
              'value1': ['column1', 'column2'],
              'value2': ['column3', 'column4']
            }
          }
    }
  )
}}
```

`dbt_project.yml`:
```yaml
  +lf_tags_config:
    enabled: true
    tags:
      tag1: value1
      tag2: value2
    tags_columns:
      tag1:
        value1: [ column1, column2 ]
```

- once you enable the feature, lf-tags will be updated on every dbt run
- first, all lf-tags for **columns** are removed to avoid inheritance issues
- then all redundant lf-tags are removed from **table** and actual tags from config are applied
- finally, lf-tags for **columns** are applied

:::info

It's important to understand the following points:
- dbt does not manage lf-tags for database
- dbt does not manage lakeformation permissions

That's why you should handle this by yourself manually or using some automation tools like terraform, AWS CDK etc.  
You may find the following links useful to manage that:
- [terraform aws_lakeformation_permissions](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lakeformation_permissions)
- [terraform aws_lakeformation_resource_lf_tags](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lakeformation_resource_lf_tags)

:::

## Data Cell Filters
The adapter implements AWS Lakeformation Data Cell Filters management in the following way.  
`model_config.sql`:
```sql
{{
    config(
    materialized='incremental',
    incremental_strategy='append',
    on_schema_change='append_new_columns',
    table_type='iceberg',
    schema='test_schema',
    lf_grants={
          'data_cell_filters': {
              'enabled': True | False,
              'filters': {
                  'filter_name': {
                      'row_filter': '<filter_condition>',
                      'principals': ['principal_arn1', 'principal_arn2']
                  }
              }
          }
      }
}}
```

or more advanced example for `dbt_project.yml`
```yaml
models:
    directory:
      +schema: your_schema
      +materialized: incremental
      +on_schema_change: sync_all_columns
      model1:
        +lf_grants: &default_rls
          data_cell_filters:
            enabled: true
            filters:
              name1:
                row_filter: "field1 = 'value1'"
                principals:
                  - "role1_arn"
                  - "role2_arn"
              name2:
                row_filter: "field1 = 'value2'"
                principals:
                  - "role3_arn"
                  - "role4_arn"
      model2:
        +lf_grants: *default_rls  # reuse previously defined config
```

- Data cell filters management can't be automated outside dbt because the filter can't be attached to the table
which doesn't exist.  
- Once you `enable` this config, dbt will set all filters and their permissions during every dbt run.  
- Such approach keeps the actual state of row level security configuration actual after every dbt run and
applies changes if they occur: drop, create, update filters and their permissions.

:::caution

It's important to understand that LF permissions work like `union`.  
Let's imagine this scenario:
- Table X has tag `domain=foo`
- Role A has `select` permission for tables with `domain=foo`
- We add a data cell filter for a column in table X and then grant permissions to role A

In this case, tag permissions are the ones considered, and cell-level permissions are totally ignored. 
This means that this data cell filters management feature implies that you should use permissions for specific tables 
which don't have already tag-level permissions in that specific database or table.

:::
