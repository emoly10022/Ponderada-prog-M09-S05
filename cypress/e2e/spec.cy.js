describe('Wikipedia text example - Emily Dickinson', () => {
    it('Deve validar o texto do h1', () => {
        cy.visit('https://pt.wikipedia.org/wiki/Emily_Dickinson');
        cy.get('h1 > span').should('have.text', 'Emily Dickinson');
    });
});
