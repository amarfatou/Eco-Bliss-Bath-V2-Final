const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Tu peux configurer ici les events si nécessaire
    },
    supportFile: "cypress/support/e2e.js", // fichier support utilisé (commands, etc.)
    specPattern: "cypress/e2e/**/*.cy.js", // pour détecter tous les fichiers de test
    baseUrl: "http://localhost:4200", // (optionnel mais pratique pour éviter de répéter l’URL)
  },
});
