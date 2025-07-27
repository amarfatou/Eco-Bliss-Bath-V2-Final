// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Commande personnalisée pour se connecter avec un utilisateur existant
// Utilise les identifiants "test2@test.fr" / "testtest"

Cypress.Commands.add("login", () => {
<<<<<<< HEAD
  cy.visit("http://localhost:4200/#/");
=======
  const baseUrl = Cypress.config("baseUrl");
  cy.visit(`${baseUrl}/#/`);
>>>>>>> 0682c79 (Mise à jour : corrections des tests automatisés-Ajout Panier)
  cy.get('[data-cy="nav-link-login"]').click();
  cy.get('[data-cy="login-input-username"]').type("test2@test.fr");
  cy.get('[data-cy="login-input-password"]').type("testtest");
  cy.get('[data-cy="login-submit"]').click();
<<<<<<< HEAD
  cy.get('[data-cy="nav-link-logout"]').should("exist"); // vérifie la connexion
=======
  cy.get('[data-cy="nav-link-logout"]').should("exist");
});

Cypress.Commands.add("visitProduct", (id) => {
  const baseUrl = Cypress.config("baseUrl");
  cy.visit(`${baseUrl}/#/products/${id}`);
});

Cypress.Commands.add("goToHome", () => {
  const baseUrl = Cypress.config("baseUrl");
  cy.visit(`${baseUrl}/#/`);
});

Cypress.Commands.add("goToProducts", () => {
  cy.goToHome();
  cy.contains("Voir les produits").click();
});

// Effectue une requête POST pour se connecter
Cypress.Commands.add(
  "loginByAPI",
  (username = "test2@test.fr", password = "testtest") => {
    return cy.request({
      method: "POST",
      url: "http://localhost:8081/login",
      body: { username, password },
      failOnStatusCode: false,
    });
  }
);

// Stocke le token dans Cypress.env pour l'utiliser dans les tests suivants
Cypress.Commands.add("storeAuthToken", () => {
  cy.loginByAPI().then((response) => {
    expect(response.status).to.eq(200);
    Cypress.env("authToken", response.body.token);
  });
});

Cypress.Commands.add("addToCartAPI", (token, productId, quantity = 1) => {
  return cy.request({
    method: "PUT",
    url: "http://localhost:8081/orders/add",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: {
      product: productId, //  Clé attendue par le backend
      quantity,
    },
  });
});

Cypress.Commands.add("getCartWithoutAuth", () => {
  return cy.request({
    method: "GET",
    url: "http://localhost:8081/orders",
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("getProductById", (id) => {
  return cy.request(`http://localhost:8081/products/${id}`);
});

Cypress.Commands.add("getCartAPI", (token) => {
  return cy.request({
    method: "GET",
    url: "http://localhost:8081/orders",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
});

Cypress.Commands.add("getAvailableProduct", () => {
  return cy.request("http://localhost:8081/products").then((response) => {
    expect(response.status).to.eq(200);
    const produitsDisponibles = response.body.filter(
      (p) => p.availableStock > 1
    );
    expect(produitsDisponibles.length).to.be.greaterThan(0);
    return produitsDisponibles[0]; // retourne le premier produit avec stock > 1
  });
>>>>>>> 0682c79 (Mise à jour : corrections des tests automatisés-Ajout Panier)
});
