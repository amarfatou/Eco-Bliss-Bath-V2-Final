describe("API - Accès non authentifié au panier", () => {
  it("Doit retourner 401 si l'utilisateur n'est pas connecté", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:8081/orders",
      failOnStatusCode: false,
    }).then((response) => {
      cy.log("Status: " + response.status);
      expect(response.status).to.eq(401);
    });
  });
});
