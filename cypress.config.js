const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cakrza',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do curso de Cypress',
      reportPageTitle: 'Projeto do curso de Cypress'
    },
    baseUrl: 'https://automationpratice.com.br',
    defaultCommandTimeout: 5000,
    viewportWidth: 1920,
    viewportHeight: 1080,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
