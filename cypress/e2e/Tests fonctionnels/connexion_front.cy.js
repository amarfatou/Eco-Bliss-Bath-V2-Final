describe("Test fonctionnel - Connexion utilisateur", () => {
  it("L'utilisateur peut se connecter et voir le bouton Panier", () => {
    // Aller sur la page d'accueil
    cy.visit("http://localhost:4200/#/");

    // Cliquer sur le bouton Connexion
    cy.get('[data-cy="nav-link-login"]').should("be.visible").click();

    // Vérifier que le formulaire s'affiche
    cy.url().should("include", "/login");

    // Renseigner l'email
    cy.get('[data-cy="login-input-username"]')
      .should("be.visible")
      .type("test2@test.fr");

    // Renseigner le mot de passe
    cy.get('[data-cy="login-input-password"]')
      .should("be.visible")
      .type("testtest");

    // Cliquer sur le bouton "Se connecter"
    cy.get('[data-cy="login-submit"]').click();

    // Vérifier que l'on est connecté (présence du bouton Panier)
    cy.get('[data-cy="nav-link-cart"]').should("be.visible");
  });
});
