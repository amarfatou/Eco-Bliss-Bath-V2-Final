describe("Affichage des produits", () => {
  it("Affiche chaque produit avec ses informations", () => {
    cy.goToProducts(); // Commande personnalisée correcte

    // Attente explicite si chargement lent
    cy.get('[data-cy="product"]', { timeout: 10000 }).should(
      "have.length.at.least",
      1
    );

    cy.get('[data-cy="product"]').each(($card) => {
      cy.wrap($card).within(() => {
        cy.get('[data-cy="product-picture"]').should("be.visible");
        cy.get('[data-cy="product-name"]').should("exist");
        cy.get('[data-cy="product-ingredients"]').should("exist");
        cy.get('[data-cy="product-price"]').should("exist");
        cy.get('[data-cy="product-link"]').should("contain", "Consulter");
      });
    });
  });
});
