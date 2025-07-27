describe("Tests API - Login", () => {
  it("Doit retourner 200 pour un utilisateur connu", () => {
    cy.loginByAPI().then((response) => {
      expect(response.status).to.eq(200); // Statut OK
      expect(response.body).to.have.property("token");
    });
  });

  it("Doit retourner 401 pour un utilisateur inconnu", () => {
    cy.loginByAPI("faux@test.fr", "mdpfaux").then((response) => {
      expect(response.status).to.eq(401);
    });
  });
});
