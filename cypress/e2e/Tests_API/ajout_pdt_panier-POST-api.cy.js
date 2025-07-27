describe("API - Ajouter un produit au panier", () => {
  before(() => {
    // Connexion API + stockage du token
    cy.storeAuthToken();
  });

  it("Ajoute un produit disponible au panier", () => {
    const token = Cypress.env("authToken");

    cy.addToCartAPI(token, 4, 1).then((response) => {
      expect([200, 201]).to.include(response.status);
      expect(response.body).to.have.property("productId", 4);
    });
  });
});
