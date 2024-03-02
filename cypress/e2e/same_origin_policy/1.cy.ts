///<reference types="cypress" />

describe("here i write all test case",()=>{
//     it("Validate visiting two different domains",()=>{
//         // case where we discuss what will happened if the we give the two url in the same case
//         // if we give two superdomains then it gives error
//         // but if i give the subdomains then it works fine
//         cy.visit("http://www.webdriveruniversity.com/");
//         cy.visit("https://automationteststore.com/");
//     })
//  it("validate visiting ",()=>{
//         cy.visit("http://www.webdriveruniversity.com/");
//         cy.get('#automation-test-store').invoke('removeAttr','target').click()
//  });


 it.only("Orgin Command",()=>{
    cy.origin('webdriveruniversity.com',()=>{
        cy.visit("/");
    });
    cy.origin('automationteststore.com',()=>{
        cy.visit("/");
    });
    cy.visit("https://www.webdriveruniversity.com");
 })
});