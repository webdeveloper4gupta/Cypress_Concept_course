import AutoStore_HomePage from "../../support/pageObjects/automation-test-store/AutoStore_HomePage_po.po"
///<reference types="cypress" />

describe("here I write all the test cases",()=>{
    const autos=new AutoStore_HomePage();
    it("first test case",()=>{
        autos.accessHomePage();
        autos.clickOn_HairCare_Link();
    })
})