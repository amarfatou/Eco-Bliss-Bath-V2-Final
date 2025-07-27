describe("Bouton Ajouter au panier après connexion", () => {
  it("L'utilisateur connecté peut voir le btn Ajouter au panier", () => {
    cy.login(); // commande personnalisée de login de commande.js

    cy.contains("button", "Voir les produits").should("be.visible").click(); // Vérifier que le btn "Voir les produits" est visible

    cy.get('[data-cy="product-link"]').should("have.length.at.least", 1); // Sélectionner les btn Consulter et Vérifier qu’au moins 1 produit est affiché

    // Pour chaque bouton "Consulter"
    cy.get('[data-cy="product-link"]').each(($btn, index, $list) => {
      cy.log(`Test du produit n°${index + 1}`);
      // Sélectionner dynamiquement le bouton au bon index ( test chaque bouton Consulter)
      cy.get('[data-cy="product-link"]').eq(index).click(); //eq(index):reprend la liste et clique sur le bouton n° index, cy get pour voir les autres btn

      cy.get('[data-cy="detail-product-add"]').should("be.visible"); // Vérifie la présence du bouton "Ajouter au panier"

      cy.go("back"); // Revenir à la page précédente, la liste des produits

      cy.get('[data-cy="product-link"]').should("have.length", $list.length); // S’assurer que tous les boutons "Consulter" sont réaffichés
    });
    cy.get('[data-cy="nav-link-logout"]').should("be.visible").click(); // Déconnexion à la fin du test
  });
});
