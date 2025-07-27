# Eco Bliss Bath - Campagne de tests automatisés

Ce projet contient une campagne de tests automatisés (Cypress) pour le site e-commerce _Eco Bliss Bath_, spécialisé dans la vente de produits de beauté éco-responsables.

# Prérequis

Avant de lancer les tests, assurez-vous d’avoir :

- Node.js (v18 recommandé)
- npm installé
- Le projet cloné localement
- Le backend de l’application lancé en local (ex: http://localhost:8081)

# Objectif

L’objectif est d'automatiser les fonctionnalités critiques du site avant sa mise en production, notamment :

- La connexion utilisateur
- L’affichage des produits
- Les tests API
- La sécurité (faille XSS)

# Structure du projet

- cypress/e2e/: Contient les scénarios de tests (API, smoke tests, fonctionnels, sécurité XSS)
- cypress/support/: Commandes personnalisées
- cypress.config.js: Configuration globale de Cypress

# Tests effectués

- Connexion utilisateur
  - Affichage des produits
  - Somke tests (présence des champs et boutons de connexion)
  - Tests API : GET, POST (login, panier, ajout produit disponible, ajout produit en rupture, avis..)
  - Test de faille XSS

## Lancer les tests

# Installation dépendances

npm install

# Lancement de l’interface graphique Cypress

npx cypress open

# Lancement des tests en mode headless (Electron)

npx cypress run --browser electron

# Générer un rapport de tests

Les résultats sont visibles directement dans la console ou via l’interface Cypress
