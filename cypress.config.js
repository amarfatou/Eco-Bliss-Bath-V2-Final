const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
<<<<<<< HEAD
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
=======
    setupNodeEvents(on, config) {},
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.cy.js",
    baseUrl: "http://localhost:4200",
>>>>>>> 0682c79 (Mise à jour : corrections des tests automatisés-Ajout Panier)
  },
});
