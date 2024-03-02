///<reference types="cypress" />

describe("here i write the text cases",()=>{
    it("log info all hair care product",()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get('.fixed_wrapper .prdocutname').each(($el,index,$list)=>{
            cy.log("Index: "+index+": "+$el.text())
        });
    });

    it("second text",()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get('.fixed_wrapper .prdocutname').each(($el,index,$list)=>{
            if($el.text().includes('Curls to straight Shampoo')){
                cy.wrap($el).click();
            }
        });
    })
});