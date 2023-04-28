const sidebarSettings = {
  docs: [
    "docs/introduction",
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
  ],
};

module.exports = sidebarSettings;
