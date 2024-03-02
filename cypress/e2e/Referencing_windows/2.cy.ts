///<reference types="cypress" />
// here i explain the concept of the title 

describe("here i write the test case",()=>{
    it("first test",()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.title().should('eq','WebDriver | Contact Us');
        // or I can write 
        cy.title().should('include','WebDriver | Contact Us');
    })
})