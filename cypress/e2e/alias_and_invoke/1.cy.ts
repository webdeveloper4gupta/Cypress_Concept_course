/// <reference types="cypress" />

describe("here i write all the test cases",()=>{
    it("first test cases",()=>{
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        // here i explain the concept of the alias-invoke
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail');//invoke a function on  the previous yielded subject
        // cypress ---> here use the  greater then command
        cy.get('@productThumbnail').its('length').should('be.gt',5);
        cy.get('@productThumbnail').should('include','Seaweed Conditioner');
        // 
    })
})