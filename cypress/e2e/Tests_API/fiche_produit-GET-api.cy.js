describe("API - Fiche produit spécifique", () => {
  it("Retourne la fiche du produit avec l'id 4", () => {
    cy.getProductById(4).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(4);
      expect(response.body).to.include.all.keys(
        "name",
        "description",
        "price",
        "picture"
      );
    });
  });
});
