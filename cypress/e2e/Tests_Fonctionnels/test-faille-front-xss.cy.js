describe("Sécurité - Injection XSS dans les commentaires", () => {
  const xssPayload = "<img src=x onerror=alert('XSS') />";

  before(() => {
    cy.login(); // Réutilise la commande personnalisée de login de commande.js
  });

  it("Empêche l'exécution ou l'affichage d'une injection XSS", () => {
    cy.contains("Avis").click();

    cy.get('[data-cy="review-input-rating-images"]').first().click();
    cy.get('[data-cy="review-input-title"]').clear().type("Test faille XSS");
    cy.get('[data-cy="review-input-comment"]').clear().type(xssPayload);
    cy.get('[data-cy="review-submit"]').click();

    // Cypress attend automatiquement l’apparition des avis
    cy.get("body").should("not.contain.html", xssPayload); // non interprété comme HTML
    cy.get("body").should("not.contain", "alert"); // pas d’effet de script

    // Vérifie que le commentaire n’est pas affiché tel quel
    cy.contains(xssPayload).should("not.exist");
  });
});
