const { getDirectoryFiles } = require("./get-directory-files");

// Pass custom data to blog
module.exports = function buildGlobalDataPlugin(context, options) {
  return {
    name: "docusaurus-build-global-data-plugin",
    async loadContent() {
      // Get versionedPages and versionedCategories param
      // This controls versioning for sidebar
      const { versionedPages, versionedCategories } = options;

      // Get all FAQ doc ids
      // FAQ component uses these to pull file
      const faqFiles = getDirectoryFiles(`docs/faqs`);

      return {
        versionedPages,
        versionedCategories,
        faqFiles,
      };
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
};
