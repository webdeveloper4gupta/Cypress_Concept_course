// it is a design pattern that enable to abstract between automation framework:
import Home from '../../support/pageObjects/webdriver-uni/Home.po';
import contactus from '../../support/pageObjects/webdriver-uni/Contact_us.po';
///<reference types="cypress" />
describe("test case for ui",()=>{
     it("first test case",()=>{
        const homepage=new Home();
        homepage.visitHomePage();
        homepage.clickOn_ContactUs_Button();
        const contact=new contactus();
        contact.contactform_Submission("Sukritan ","Gupta","20051871@kiit.ac.in","wonderful experience","h1","Thank You for your Message!");
     });

     
})