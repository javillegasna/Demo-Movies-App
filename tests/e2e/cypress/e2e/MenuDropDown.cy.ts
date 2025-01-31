describe('Theme testing', () => {
    beforeEach(() => {
        cy.viewport(700, 800)
      cy.visit('http://localhost:3000')
    })
    it('Rendering Movies Menu', () => {
        cy.get('.justify-end').find('button').last().click()
        cy.get('h3').should('contain.text', 'Movies')
    })
    it('Swap Movies menu visibility', () => {
        const menuButton = cy.get('.justify-end').find('button').last()
        menuButton.last().click()
        cy.get('h3').should('contain.text', 'Movies')
        cy.get('body').click({force: true})
        cy.get('h3').should('not.exist')
    })
    it('Expand Movies Menu', () => {
        cy.get('.justify-end').find('button').last().click()
        cy.get('h3').first().click()
        cy.get('a').should('contain.text', 'Popular')
    })
    
})