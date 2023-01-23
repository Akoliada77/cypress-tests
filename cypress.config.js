const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7jq1be',
  e2e: {
    setupNodeEvents(on, config) {
    viewportHeight: 1080
    viewportWidth: 1920
    chromeWebSecurity: false
    supportFile: true
    },
  },
});
