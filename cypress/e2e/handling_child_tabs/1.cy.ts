/// <reference types="cypress" />

describe("here i write test cases",()=>{
    it("first test case",()=>{
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true});
        
    })
})