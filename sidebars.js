const sidebarSettings = {
  docs: [
    "docs/introduction",

    // Getting Started
    {
      type: "category",
      label: "Getting started",
      items: [
        {
          type: "category",
          label: "Prerequisites",
          collapsed: true,
          items: [
            "docs/getting-started/prerequisites/aws-resources",
            "docs/getting-started/prerequisites/iam-permissions",
          ],
        },
        "docs/getting-started/installation",
        "docs/getting-started/profile-configuration",
      ],
    },

    // Configuration
    {
      type: "category",
      label: "Configuration",
      items: [
        {
          type: "category",
          label: "Materializations",
          collapsed: true,
          items: [
            "docs/configuration/materializations/hive",
            "docs/configuration/materializations/ha-hive",
            "docs/configuration/materializations/iceberg",
          ],
        },
        "docs/configuration/seeds",
        "docs/configuration/snapshots",
      ],
    },

    // Others
    "docs/known-issues",
    "docs/contributing/contributing",
  ],
};

module.exports = sidebarSettings;
