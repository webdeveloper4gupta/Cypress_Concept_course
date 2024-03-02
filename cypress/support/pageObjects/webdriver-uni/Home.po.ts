class Home{
    visitHomePage(){
        cy.visit(Cypress.env("url"));
    }

    clickOn_ContactUs_Button(){
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true});
    }

}
export default Home;