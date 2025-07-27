describe("API - Ajouter un produit au panier", () => {
  let authToken; // Stocke le token après connexion

  before(() => {
    // Authentification
    cy.request({
      method: "POST",
      url: "http://localhost:8081/login",
      body: {
        username: "test2@test.fr",
        password: "testtest",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      authToken = response.body.token; // on récupère le token
    });
  });

  it("Ajoute un produit disponible au panier", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8081/orders/add",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        productId: 4,
        quantity: 1,
      },
    }).then((response) => {
      expect(response.status).to.eq(200); // ou 201 selon l’API

      expect(response.body).to.have.property("productId", 4);
    });
  });
});
