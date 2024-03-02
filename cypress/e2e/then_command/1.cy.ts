/// <reference types="cypress" />

describe("here i write the test cases",()=>{
    it("first test",()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            console.log(itemHeaderText.text())
        })
    })
})