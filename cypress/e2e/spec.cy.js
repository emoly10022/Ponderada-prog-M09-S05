// wikipedia-fail-test.cy.js
describe('Wikipedia function example - Emily Dickinson', () => {
    it('Deve falhar porque a função getWikipediaTitle não está implementada', () => {
        // Aqui estamos esperando que a função exista e retorne o título "Emily Dickinson"
        cy.visit('https://pt.wikipedia.org/wiki/Emily_Dickinson');
        const title = getWikipediaTitle(); // Função não implementada
        expect(title).to.equal('Emily Dickinson');
    });
});

// wikipedia-success-test.cy.js
function getWikipediaTitle() {
    return 'Emily Dickinson'; // Função básica para passar o teste
}

describe('Wikipedia function example - Emily Dickinson', () => {
    it('Deve passar ao validar o título usando a função getWikipediaTitle', () => {
        cy.visit('https://pt.wikipedia.org/wiki/Emily_Dickinson');
        const title = getWikipediaTitle();
        expect(title).to.equal('Emily Dickinson');
    });
});

