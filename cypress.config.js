const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7jq1be',
  e2e: {
    baseUrl: 'https://automationteststore.com/',
    specPattern: '**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: 'tests/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
    viewportHeight: 1080
    viewportWidth: 1920
    chromeWebSecurity: false
    supportFile: true
    },
  },
  component: {
  baseUrl: 'https://automationteststore.com/',
  specPattern: 'component/**/*.cy.{js,jsx,ts,tsx}'
  }
});
