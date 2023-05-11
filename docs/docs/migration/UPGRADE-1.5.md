---
title: "Upgrade to version 1.5"
id: UPGRADE-1.5
---

## Hive snapshot migration

The hive snapshots in dbt-athena v1.4 diverged from the dbt-core implementation.
In the v1.5 release, we take the opportunity to review our approach so that we follow the dbt standards.
Unfortunately, this introduces breaking changes to existing snapshots.
We did our best to mitigate the impact on the developer, by printing a detailed error message with migration instructions.
The easiest way to migrate your snapshot table is by running `dbt snapshot` one snapshot at a time.

Below is a summary of the steps to migrate all your snapshots:

1. Install `dbt-athena>=1.5`
2. Choose a snapshot to migrate. It's probably best to start with one of the least important ones first.
3. Run `dbt snapshot SNAPSHOT_NAME`. This command should fail, and print a large error message with a migration query. Scroll up the stdout output until you find the same query again, but without the log timestamps.
4. Go to Athena and run the queries one by one. Please double-check each query to make sure that it does what it needs to do. The queries perform the following steps:
    * Take a backup of the original table. You never know.
    * Run the necessary transformations for the migration and store the results in a temporary table.
    * Drop the original table.
    * Copy the temporary table results to the original table.
    * Drop the temporary table.
5. Check the results of the migrated table. Run some sanity checks to see if it behaves correctly.
6. (Optional) Run `dbt snapshot SNAPSHOT_NAME` again. This time there should be no error anymore.
7. Repeat steps 2-6 for all your snapshots.
8. (Optional) Run `dbt snapshot` to make sure that all your snapshots are migrated.
9. (Optional) After a couple of dbt runs, you can clean up the backup tables.
