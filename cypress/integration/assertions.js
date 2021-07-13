/// <reference types="cypress" />

it('assertion test', function() {
  cy.visit('https://example.cypress.io')
  cy.contains('get').click()

  cy.get('#query-btn').should('contain', 'Button')
  cy.screenshot()
})
