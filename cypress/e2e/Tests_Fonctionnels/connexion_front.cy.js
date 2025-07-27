describe("Test fonctionnel - Connexion utilisateur", () => {
  it("L'utilisateur peut se connecter et voir le bouton Panier", () => {
    cy.login(); // Utilise la commande définie dans commands.js

    // Vérifie que l'on est connecté (présence du bouton Panier)
    cy.get('[data-cy="nav-link-cart"]').should("be.visible");
  });
});
