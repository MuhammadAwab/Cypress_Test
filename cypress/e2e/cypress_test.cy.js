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

    it('T2 : Click on Sign Up', () => {
        cy.get('.HeaderMenu-link--sign-up').click()
        cy.wait(7000)
        cy.get('#email', { timeout: 10000 }).should('be.visible').focus().type("dummy@gmail.com")//Enter Wrong Email
        if(cy.get('.mb-0').contains('Email is invalid or already taken')){
          cy.log("Validation of Email")
        }
        cy.get('#email', { timeout: 10000 }).should('be.visible').focus().clear().type("muhammadawab7862@gmail.com")//Enter New Email
        cy.get("#email-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button", { timeout: 10000 }).should('be.visible').click({force:true})
        
        cy.get('#password', { timeout: 10000 }).should('be.visible').focus().type("Qwerty@7862") //Password
        cy.get("#password-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button", { timeout: 10000 }).should('be.visible').click({force:true})
        
        cy.get('#login', { timeout: 10000 }).should('be.visible').focus().type("CypressTest7862");
        cy.get("#username-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button", { timeout: 10000 }).should('be.visible').click({force:true})

        cy.get('#opt_in', { timeout: 10000 }).should('be.visible').focus().type("y");
        cy.get("#opt-in-container > div.d-flex.flex-items-center.flex-column.flex-sm-row > button", { timeout: 10000 }).should('be.visible').click({force:true})
    
        cy.get('.js-octocaptcha-frame').click()
        //There is a tricky captcha enabled for this Sign Up form so automating it will be very tricky
        //Still do able but requires alot of time
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
    it('T8 : Click on Search and Perform Search Based on Keyword ("Cypress")', () => {
        cy.get('.header-search-wrapper > .form-control').type('Cypress{enter}')
        cy.get(':nth-child(1) > .mt-n1 > :nth-child(1) > .f4').click()
        cy.get('#issues-tab').click()
        cy.get('[aria-label="Page 110"]').click()
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