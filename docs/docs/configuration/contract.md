---
title: "Contract & Constraints"
id: contract-constraints
---

## Contract
The adapter partly supports [contract](https://docs.getdbt.com/reference/resource-configs/contract) definition.

Concerning the `data_type`, it is supported but needs to be adjusted for complex types. They must be specified
entirely (for instance `array<int>`) even though they won't be checked. Indeed, as dbt recommends, we only compare
the broader type (array, map, int, varchar). The complete definition is used in order to check that the data types
defined in athena are ok (pre-flight check).

## Constraints
The adapter does not support [constraints](https://docs.getdbt.com/reference/resource-properties/constraints) since 
constraints don't exist in Athena.
