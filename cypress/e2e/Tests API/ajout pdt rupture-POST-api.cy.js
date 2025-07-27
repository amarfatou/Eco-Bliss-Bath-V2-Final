describe("API - Ajouter un produit en rupture de stock", () => {
  let authToken;

  before(() => {
    // Authentification API
    cy.request("POST", "http://localhost:8081/login", {
      username: "test2@test.fr",
      password: "testtest",
    }).then((response) => {
      expect(response.status).to.eq(200);
      authToken = response.body.token;
    });
  });

  it("Devrait retourner une erreur pour un produit en rupture (id 3)", () => {
    cy.request({
      method: "POST", // Ou PUT pour comparer
      url: "http://localhost:8081/orders/add",
      failOnStatusCode: false,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        productId: 3, // Produit en rupture de stock
        quantity: 1,
      },
    }).then((response) => {
      // Le serveur doit refuser l’ajout
      expect([400, 403]).to.include(response.status);
    });
  });
});
