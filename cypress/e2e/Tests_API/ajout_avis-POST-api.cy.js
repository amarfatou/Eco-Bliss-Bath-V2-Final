describe("API - Ajouter un avis", () => {
  before(() => {
    cy.storeAuthToken(); // Stocke le token dans l’environnement
  });

  it("Ajoute un avis et retourne 200 ou 201", () => {
    const token = Cypress.env("authToken"); // Récupère le token stocké

    cy.fixture("review").then((reviewData) => {
      cy.request({
        method: "POST",
        url: "http://localhost:8081/reviews",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: reviewData,
      }).then((response) => {
        expect([200, 201]).to.include(response.status);
        expect(response.body).to.have.property("rating");
        expect(response.body).to.have.property("title");
        expect(response.body).to.have.property("comment");
      });
    });
  });
});
