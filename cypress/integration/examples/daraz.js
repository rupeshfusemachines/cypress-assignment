describe('daraz website', () => {

    it('visit daraz website', () => {
        cy.visit('https://www.daraz.com.np')
    });

    it('login using valid credentials', () => {
        cy.contains('login').click()

        cy.get('input[type="text"]')
            .type('rupesh@mailinator.com')
        cy.get('input[type="password"')
            .type('Hello123@')
        cy.contains('LOGIN').click()
        cy.wait(4000)


    });

    it('search mobile', () => {
        cy.get('.search-box__input--O34g').type('Mobile')
        cy.contains('SEARCH').click()
        cy.wait(4000)

    });

    it('apply filter', () => {
        //select Mobile Brand
        cy.get('.ant-checkbox-input').first().click()

        //input min price
        cy.get('[placeholder="Min"]').type(5000)

        //input max price
        cy.get('[placeholder="Max"]').type(50000)

        cy.wait(4000)
            // click submit button for price range
        cy.get('.c3R9mX').click()

        cy.wait(4000)

        //select rating
        cy.get(':nth-child(6) > .c2uiAC > :nth-child(1)').click()

    });

    it('Select product to add in cart', () => {
        //select and click product

        cy.get('[data-item-id="105292880"] > .c3e8SH')
            .click()
            // cy.wait(4000)
        cy.get('.pdp-button_theme_orange').click()
        cy.wait(4000)
        cy.go('back')

    });


    it('apply sort filter price high to low', () => {
        cy.get('.ant-select-selection-selected-value').click()
        cy.wait(4000)
        cy.contains('Price low to high').click()
    });

    it('Visit Oliz Store', () => {
        cy.visit('https://www.daraz.com.np/shop/oliz-store/')
    });
    it('Search Oliz Store', () => {
        cy.get('.search-box__input--O34g').type('Oliz Store')
        cy.contains('SEARCH').click()
        cy.wait(4000)
    });

    it('Verify Base URL', () => {
        cy.url().should('contain', 'https://www.daraz.com.np/shop/oliz-store/')
    });

    it('Click on Free Delivery', () => {
        cy.contains('Free Delivery').click()
        cy.go('back')

    });

    it('Verify Save More On App Click Action', () => {
        cy.contains('SAVE MORE ON APP').click()
    });

});