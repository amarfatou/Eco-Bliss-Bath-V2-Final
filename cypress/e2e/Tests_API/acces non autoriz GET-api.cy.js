describe("API - Accès non authentifié au panier", () => {
  it("Doit retourner 401 si l'utilisateur n'est pas connecté", () => {
    cy.getCartWithoutAuth().then((response) => {
      expect(response.status).to.eq(401);
    });
  });
});
