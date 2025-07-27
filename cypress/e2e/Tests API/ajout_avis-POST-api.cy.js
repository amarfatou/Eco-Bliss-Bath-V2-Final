describe("API - Ajouter un avis", () => {
  let authToken;

  before(() => {
    // Authentifier l'utilisateur
    cy.request("POST", "http://localhost:8081/login", {
      username: "test2@test.fr",
      password: "testtest",
    }).then((response) => {
      expect(response.status).to.eq(200);
      authToken = response.body.token;
    });
  });

  it("Ajouter un avis et retourner 200 ou 201", () => {
    cy.fixture("review").then((reviewData) => {
      cy.request({
        method: "POST",
        url: "http://localhost:8081/reviews",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: reviewData,
      }).then((response) => {
        expect([200, 201]).to.include(response.status);

        // Vérifie la présence de certaines propriétés dans la réponse
        expect(response.body).to.have.property("rating");
        expect(response.body).to.have.property("title");
        expect(response.body).to.have.property("comment");
      });
    });
  });
});
