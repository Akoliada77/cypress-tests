const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7jq1be',
  e2e: {
    specPattern: '**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
    viewportHeight: 1080
    viewportWidth: 1920
    chromeWebSecurity: false
    supportFile: true
    },
  },
  component: {
  specPattern: 'component/**/*.cy.{js,jsx,ts,tsx}'
  }
});
