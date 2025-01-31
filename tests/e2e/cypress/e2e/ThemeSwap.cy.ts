describe('Theme testing', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    
    })
    it('Rendering Config modal', () => {
        const cfg_button = cy.get('.shrink-0')
        cfg_button.should('exist')
        cfg_button.first().click()
        cy.get('.mt-4 > .flex > .bg-primary').should('exist').should('contain.text', 'dark')
    })
    it('Swap Theme', () => {
        cy.get('.shrink-0').first().click()
        cy.get('.mt-4 > .flex > :nth-child(1)').click()
        cy.get('.mt-4 > .flex > .bg-primary').should('contain.text', 'light')
    })
})