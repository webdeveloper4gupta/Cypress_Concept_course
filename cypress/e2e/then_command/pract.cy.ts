///<reference types="cypress"/>

describe("here i write all my test cases",()=>{
    it("first test case",()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get('.info_links_footer > :nth-child(5) > a').click().then((item)=>{
            cy.log(item.text())
        })
    })
})