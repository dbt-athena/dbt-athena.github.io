---
title: "Known issues"
id: known-issues
---

- Incremental Iceberg models: sync all columns on schema change can't remove columns used as partitioning. The only way, from a dbt perspective, is to do a full-refresh of the incremental model.
- Tables, schemas and database should only be lowercase

## An error occurred (InvalidIdentityToken) when calling the AssumeRoleWithWebIdentity operation

When using db-athena with Single Sign On (SSO), the mechanism you use to assume the target role can cause problems. You can provide the token in `~/.aws/config` as follows:

```toml
[profile web-identity]
role_arn=arn:aws:iam:...
web_identity_token_file=/path/to/a/token
```
This approach has been known to cause an error during your dbt execution ([issue#259](https://github.com/dbt-athena/dbt-athena/issues/259)):

```
An error occurred (InvalidIdentityToken) when calling the AssumeRoleWithWebIdentity operation: Couldn't retrieve verification key from your identity provider, please reference AssumeRoleWithWebIdentity documentation for requirements"
```

A solution is to explicitly assume the role before your dbt execution, rather than letting the underlying libraries take care of it. Call [`aws sts assume-role-with-web-identity`](https://docs.aws.amazon.com/cli/latest/reference/sts/assume-role-with-web-identity.html) with an appropriate duration.
