const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    env: {
      API_URL: ''
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
