describe('Homage testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  
  })
  it('Rendering Home page', () => {
    cy.get('.container > :nth-child(1) > .overlay > .mx-auto > .flex > .inline-flex').should('contain.text', 'Details')
  })
  it('Check navigation details to home', () => {
    cy.get('.container > :nth-child(1) > .overlay > .mx-auto > .flex > .inline-flex').click()
    cy.url().should('include', '/movie')
    cy.get('.grid > :nth-child(2) > .justify-center').should('contain.text', 'Trailer')
    cy.get('a > img').click()
    cy.url().should("not.include", '/movie')
    cy.get('.container > :nth-child(1) > .overlay > .mx-auto > .flex > .inline-flex').should('contain.text', 'Details')
  })
})