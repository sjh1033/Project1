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
//declare namespace Cypress {
//  interface Chainable<Subject = any> {
//    login(username: string, password: string): typeof login;
//  }
//}
//
//function login(username: string, password: string): void {
//    cy.get('#username').clear();
//    cy.get('#username').type(username).should('have.value', username);
//    cy.get('#password').clear();
//    cy.get('#password').type(password);
//    cy.get('.submit').click();
//}
//
// NOTE: You can use it like so:
//Cypress.Commands.add('login', login);
