describe("API - Accès authentifié au panier", () => {
  let authToken;

  before(() => {
    // Se connecter pour récupérer le token
    cy.request("POST", "http://localhost:8081/login", {
      username: "test2@test.fr",
      password: "testtest",
    }).then((response) => {
      expect(response.status).to.eq(200);
      authToken = response.body.token;
    });
  });

  it("Retourner la liste des produits du panier", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:8081/orders",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      cy.log("Status: " + response.status);
      cy.log("Panier: " + JSON.stringify(response.body));

      // Vérifie réponse reçue
      expect(response.status).to.eq(200);

      // Vérifie que le panier contient bien une liste de produits
      expect(response.body).to.have.property("orderLines");
      expect(response.body.orderLines).to.be.an("array");
    });
  });
});
