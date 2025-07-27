describe("Tests API - Login", () => {
  it("Doit retourner 200 pour un utilisateur connu", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8081/login",
      body: {
        username: "test2@test.fr",
        password: "testtest",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200); // Vérifie le statut
      expect(response.body).to.have.property("token");
    });
  });

  it("Doit retourner 401 pour un utilisateur inconnu", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8081/login",
      body: {
        username: "faux@test.fr",
        password: "mdpfaux",
      },
      failOnStatusCode: false, // pour ne pas que Cypress stoppe le test sur erreur
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });
});
