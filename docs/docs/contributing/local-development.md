---
title: "Local development"
id: local-development
---

## Using virtual environments

Virtualenv is the most common and easy to install tool for virtual environments. It’s a great tool for beginners.

```terminal
python3 -m venv dbt-env             # create the environment
source dbt-env/bin/activate         # activate the environment for Mac and Linux
dbt-env\Scripts\activate            # activate the environment for Windows
```

If you install dbt in a virtual environment, you need to reactivate that same virtual environment each time you create a shell window or session.

## Install a specific package of dbt-athena in your project

### Local package

When you are experiencing a bug, it's often very useful to run against a local version of dbt-athena, with the ability to add debug logs and fixes.

<File name="requirements.txt">

```text
-e /Users/username/Code/dbt-athena
```

</File>

Then, run `pip install -r requirements.txt`

### Git branch

To test a specific branch in your project, add the following to your `requirements.txt` file:

<File name="requirements.txt">

```text
git+https://github.com/dbt-athena/dbt-athena.git@main#dbt-athena-community
```

</File>

Then, run `pip install -r requirements.txt`

## Unit tests

To run the unit tests using Pytest in dbt-athena, follow these instructions:

```terminal
make install_deps
make unit_test
```
