/// <reference types="cypress" />

it('google test', function() {
  cy.visit('https://www.google.com')
  cy.get('.gLFyf', {timeout: 6000}).type('Automation Step by Step{enter}')
//  cy.get('.MUFPAc > :nth-child(3) > a').click()
//  cy.wait(4000)
  cy.contains('Videos').click()
})
