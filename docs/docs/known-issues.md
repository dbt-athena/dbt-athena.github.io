---
title: "Known issues"
id: known-issues
---

- Incremental Iceberg models: sync all columns on schema change can't remove columns used as partitioning. The only way, from a dbt perspective, is to do a full-refresh of the incremental model.
- Tables, schemas and database should only be lowercase
