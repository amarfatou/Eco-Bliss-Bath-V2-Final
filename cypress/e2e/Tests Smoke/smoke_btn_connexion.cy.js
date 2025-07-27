describe("Bouton Connexion sur la page d’accueil", () => {
  it('Le bouton "Connexion" est visible sur la page d’accueil', () => {
    cy.visit("http://localhost:4200/#/");

    cy.get('[data-cy="nav-link-login"]').should("be.visible"); // Vérifier le bouton connexion est affiché
  });
});
