---
title: How many dbt threads should I configure
id: dbt-threads
---

Athena has certain service API call quotas. The `StartQueryExecution` API supports 20 calls per second, and – if no api call is made in 4s – a burst to 80 calls. See the [AWS Athena service limits documentation](https://docs.aws.amazon.com/athena/latest/ug/service-limits.html#service-limits-api-calls).

Due to these limits, you should consider how many concurrent API requests are happening in your AWS account and configure your threads accordingly. A good average value for threads could be `threads: 8`.
