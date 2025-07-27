describe("API - Accès authentifié au panier", () => {
  let authToken;

  before(() => {
    cy.loginByAPI().then((response) => {
      expect(response.status).to.eq(200);
      authToken = response.body.token;
    });
  });

  it("Retourner la liste des produits du panier", () => {
    cy.getCartAPI(authToken).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("orderLines");
      expect(response.body.orderLines).to.be.an("array");
    });
  });
});
