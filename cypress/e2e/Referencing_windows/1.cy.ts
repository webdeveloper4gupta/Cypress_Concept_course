///<reference types="cypress"/>

describe("here i write test case",()=>{
    it("first test case",()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        // here i explain the concept of the document
        cy.document().should('have.property','charset').and('eq','UTF-8');
    })
})