describe('Theme testing', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    
    })
    it('Rendering Config modal', () => {
        const searchBox = cy.get('.justify-end > .relative > .flex')
        searchBox.type('The Dark Knight')
        cy.get('.text-xl').should('contain.text', 'The Dark Knight')
    })
})