

describe('user can create a contact', () => {
    it('test', () => {
        cy.visit('http://localhost:3474')
        cy.get('#add-contact').click()
        cy.get('#name').type('Shagufta')
		cy.get('#email').type('shagufta@craft.se')
		cy.get('#phone').type('0700 101010')
		cy.get('#job').type('self employed')
		cy.get('#notes').type('Beginner coder')
    })
})