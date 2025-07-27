describe("API - Fiche produit spécifique", () => {
  it("Retourne la fiche du produit avec l'id 4", () => {
    cy.request("GET", "http://localhost:8081/products/4").then((response) => {
      expect(response.status).to.eq(200);

      // Vérifie que le produit retourné contient les champs attendus
      expect(response.body).to.have.property("id", 4);
      expect(response.body).to.have.property("name");
      expect(response.body).to.have.property("description");
      expect(response.body).to.have.property("price");
      expect(response.body).to.have.property("picture");
    });
  });
});
