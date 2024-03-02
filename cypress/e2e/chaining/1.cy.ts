/// <reference types="cypress" />

describe("here i write test cases",()=>{
    it("here i write the test cases",()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
        cy.get('.productname').contains('Skinsheen Bronzer Stick').click();
    });

    it.only("second test case",()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
        
    });
    
})