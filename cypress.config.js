const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    username: 'muhammadawab1996@gmail.com',
    password: 'Ghumman@12'
  },
});
