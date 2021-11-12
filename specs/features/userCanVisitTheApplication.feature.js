describe('user visit the application url', () => {
    it('is expected to display a header', () => {
        cy.visit('/');
        cy.get("h1").should("contain.text", "Address Book");
       // cy.get('#name').type('Shagufta')
		//cy.get('#email').type('shagufta@craft.se')
		//cy.get('#phone').type('0700 101010')
		//cy.get('#job').type('self employed')
		//cy.get('#notes').type('Beginner coder')
        //cy.get('#submit').click()
    });

       
    
});