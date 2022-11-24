describe('Github Test Cases for Desktop', () => {

    beforeEach('Visit GitHub',()=>{
        cy.viewport(1920, 1080)
        cy.visit("www.github.com")
    })

    it('T1 : Click on Sign In and Perform Sign In', () => {
        cy.get('.mr-lg-3 > .HeaderMenu-link').click()
        cy.get('#login_field').type('muhammadawab1996@gmail.com') //replace with your email
        cy.get('#password').type('password') //hidding password for privacy (replace with your password)
        cy.get('.btn').click()
    })

    it('T Best Case : Click on Search and Perform Search Based on Keyword ("Cypress")', () => {
        cy.get('.header-search-wrapper > .form-control').type('Cypress{enter}')
        cy.get(':nth-child(1) > .mt-n1 > :nth-child(1) > .f4').click()
        cy.get('#issues-tab').click()
        cy.get('[aria-label="Page 110"]').click()
    })

    it('T2 : Click on Sign Up', () => {
        cy.get('.HeaderMenu-link--sign-up').click()
        cy.get('#email-container > .flex-column').type("dummy@gmail.com{enter}")
        cy.wait(1000)
    })
    it('T3 : Click on Header Button (Products)', () => {
        cy.get(':nth-child(1) > .HeaderMenu-link').click()
        cy.wait(1000)
    })
    it('T4 : Click on Header Button (Solutions)', () => {
        cy.get('.d-lg-flex.list-style-none > :nth-child(2) > .HeaderMenu-link').click()
        cy.wait(1000)
    })
    it('T5 : Click on Header Button (Open Source)', () => {
        cy.get(':nth-child(3) > .HeaderMenu-link').click()
        cy.wait(1000)
    })
    it('T6 : Click on Header Button (Pricing)', () => {
        cy.get(':nth-child(4) > .HeaderMenu-link').click()
        cy.wait(1000)
    })
    it('T7 : Click on Github Icon', () => {
        cy.get('.mr-lg-3 > .octicon').click()
        cy.wait(1000)
    })
})

describe('Github Test Cases for Mobile', () => {

    beforeEach('Visit GitHub',()=>{
        cy.viewport(360, 378)
        cy.visit("www.github.com")
    })

    it('T1 : Click on Sign In', () => {
        cy.get('.js-details-target > .Button-content > .Button-label').click()
        cy.get('.mr-lg-3 > .HeaderMenu-link').click()
    })
    it('T2 : Click on Sign Up', () => {
        cy.get('div.width-full > :nth-child(2) > .d-inline-block').click()
        cy.wait(1000)
    })
    it('T3 : Click on Header Button (Products)', () => {
        cy.get('.js-details-target > .Button-content > .Button-label').click()
        cy.get(':nth-child(1) > .HeaderMenu-link').click()
        cy.wait(1000)
    })
    it('T4 : Click on Header Button (Solutions)', () => {
        cy.get('.js-details-target > .Button-content > .Button-label').click()
        cy.get('.d-lg-flex.list-style-none > :nth-child(2) > .HeaderMenu-link').click()
        cy.wait(1000)
    })
    it('T5 : Click on Header Button (Open Source)', () => {
        cy.get('.js-details-target > .Button-content > .Button-label').click()
        cy.get(':nth-child(3) > .HeaderMenu-link').click()
        cy.wait(1000)
    })
    it('T6 : Click on Header Button (Pricing)', () => {
        cy.get('.js-details-target > .Button-content > .Button-label').click()
        cy.get(':nth-child(4) > .HeaderMenu-link').click()
        cy.wait(1000)
    })
    it('T7 : Click on Github Icon', () => {
        cy.get('.mr-lg-3 > .octicon').click()
        cy.wait(1000)
    })

})