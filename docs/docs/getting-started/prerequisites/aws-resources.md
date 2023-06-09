---
title: "AWS resources"
id: aws-resources
---

To get started, you will need an S3 bucket, for instance `my-bucket`, and an Athena database:

```sql
CREATE DATABASE IF NOT EXISTS analytics_dev
COMMENT 'Analytics models generated by dbt (development)'
LOCATION 's3://my-bucket/'
WITH DBPROPERTIES ('creator'='Foo Bar', 'email'='foo@bar.com');
```

If the database does not exist, then dbt will attempt to create it automatically.

:::info AWS Glue
You can also use [AWS Glue](https://docs.aws.amazon.com/athena/latest/ug/glue-athena.html) to create and manage your Athena databases.
:::
