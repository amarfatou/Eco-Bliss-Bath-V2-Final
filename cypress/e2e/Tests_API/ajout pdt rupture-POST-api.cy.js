describe("API - Ajouter un produit en rupture de stock", () => {
  before(() => {
    // Authentifie l'utilisateur et stocke le token dans Cypress.env
    cy.storeAuthToken();
  });

  it("Devrait retourner une erreur pour un produit en rupture (id 3)", () => {
    const token = Cypress.env("authToken");

    cy.addToCartAPI(token, 3, 1).then((response) => {
      // Le serveur doit refuser l’ajout (produit hors stock)
      expect([400]).to.include(response.status);
    });
  });
});
