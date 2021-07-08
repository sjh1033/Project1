/// <reference types="cypress" />

it('siteportal test', function() {
  cy.visit('https://192.168.11.191/nypd_qa-unified')
  cy.get('#username').click().type('admin')
  cy.get('#password').click().type('eHagaz12')
  cy.get('.submit', {timeout: 20000}).click()
  cy.get('.tree > app-network-tree-footer > .div-position > .btn-group-hidebar > [title="Reporting"]').click()
  cy.get('#createReportButton_btn').click()
  cy.get('.ng-input > input').click().type('firm{enter}')
  cy.get('.title-input').click().type('NYPDFirmware')
  cy.get('.choose_node').click()
  cy.get(':nth-child(1) > app-network-select-node > .tree-node-container > .node-item > .value-item > .checkbox > .form-check-label').click()
  cy.get('#warning-save-button').click()
  cy.get('[type="checkbox"]').first().check()
  cy.get('.split-controls > .ng-star-inserted').click()
})
