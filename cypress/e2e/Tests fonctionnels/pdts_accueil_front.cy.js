describe("Affichage des produits", () => {
  it("Affiche chaque produit avec ses informations", () => {
    cy.visit("http://localhost:4200/#/");

    // Clique sur "Voir les produits" si besoin
    cy.contains("Voir les produits").click();

    // Vérifie qu'au moins un produit est affiché
    cy.get('[data-cy="product"]').should("have.length.at.least", 1);

    // Vérifie les informations de chaque produit
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
