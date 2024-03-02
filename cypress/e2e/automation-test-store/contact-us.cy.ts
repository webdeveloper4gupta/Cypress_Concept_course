///<reference types="cypress" />
// /<reference types="cypress-xpath" />
describe("Test Contact us from via Automation Test Store",()=>{
    it("first test case",()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        // its x-path selectors is
        // cy.xpath("//a[contains(@href,'contact')]")
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
        cy.get("textarea[id='ContactUsFrm_enquiry']").type("Do you provide additional discount on bulk orders? ");
// chai jquery assertion
        cy.get('#ContactUsFrm_email').should('have.attr','name','email');
        cy.get("button[title='Submit']").click();

        // now here i apply the assertions 
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
        
        
    })
});
