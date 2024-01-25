---
title: "IAM permissions"
id: iam-permissions
---

## Athena IAM permissions

Athena permissions that are required to run queries:

```json
"athena:StartQueryExecution",
"athena:GetQueryResults",
"athena:GetWorkGroup",
"athena:StopQueryExecution",
"athena:GetQueryExecution",
```

## Glue IAM permissions

dbt-athena uses the AWS Glue API to fetch metadata. You will need to set these permissions on the Glue databases you are reading from:

```json
"glue:GetDatabase",
"glue:GetDatabases",
"glue:GetTable",
"glue:GetTables",
"glue:GetTableVersions",
"glue:GetPartition",
"glue:GetPartitions",
```

You will need these permissions on the glue databases you are writing to:

```json
"glue:CreateDatabase",  -- Indeed, in case the Athena database does not exist, DBT will try to create it for you.
"glue:GetDatabase",
"glue:GetDatabases",
"glue:GetTable",
"glue:GetTables",
"glue:GetPartition",
"glue:GetPartitions",
"glue:BatchCreatePartition",
"glue:BatchUpdatePartition",
"glue:BatchDeletePartition",
"glue:BatchDeleteTable",
"glue:BatchDeleteTableVersion",
"glue:CreatePartition",
"glue:UpdatePartition",
"glue:DeletePartition",
"glue:CreateTable",
"glue:UpdateTable",
"glue:DeleteTable",
"glue:DeleteTableVersion",
```

## S3 IAM permissions

You will need these permissions on the S3 buckets that dbt-athena reads from:

```json
"s3:GetObject",
"s3:GetBucketLocation",
"s3:ListBucket",
"s3:ListBucketMultipartUploads",
"s3:ListMultipartUploadParts",
```

You will need these permissions on the S3 buckets you are writing to (buckets defined in `s3_staging_dir` and `s3_data_dir`):

```json
"s3:GetObject",
"s3:GetBucketLocation",
"s3:ListBucket",
"s3:ListBucketMultipartUploads",
"s3:ListMultipartUploadParts",
"s3:AbortMultipartUpload",
"s3:PutObject",
"s3:DeleteObject",
```

If your buckets are encrypted using KMS, you will need these permissions on every KMS key of the buckets:

```json
"kms:GenerateDataKey*",
"kms:DescribeKey",
"kms:Decrypt",
```

## Lake Formation

If you are using databases managed by AWS Lake Formation, then you need to set these permissions on the role.:

```json
"lakeformation:GetDataAccess",
```
