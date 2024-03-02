/// <reference types="cypress" />

describe("here i write all my test cases",()=>{
    it("first test case",()=>{
        // cy.visit("http://www.webdriveruniversity.com/");
        // cy.get('#contact-us').click({force:true});
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("blogs");
        cy.get('[name="email"]').type("joe_blogs123@gmail.com")
        cy.get('textarea.feedback-input').type("How can I learn Cypress?");
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!');
    });
    
    it.only("second test case",()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("blogs");
        // cy.get('[name="email"]').type("joe_blogs123@gmail.com")
        cy.get('textarea.feedback-input').type("How can I learn Cypress?");
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    })
})