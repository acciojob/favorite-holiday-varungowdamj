//your JS code here. If required.
// Example Cypress test

describe('Favorite Holiday Destination Page', () => {
    before(() => {
        cy.visit('/path-to-your-page.html'); // Adjust the path as needed
    });

    it('should contain emphasized text in lists', () => {
        cy.contains('List of medias');
        cy.get('ol li:first strong').should('be.visible'); // for <strong> tag
        cy.get('ol li:nth-child(2) em').should('be.visible'); // for <em> tag
        cy.get('ul li:first strong').should('be.visible'); // for <strong> tag
        cy.get('ul li:nth-child(2) em').should('be.visible'); // for <em> tag
    });
});