///<reference types="cypress" />

describe("Here I write test cases",()=>{
    it("first test case",()=>{
        cy.visit("https://www.automationteststore.com/");


        const makeupLink=cy.get("a[href*='product/category&path=']").contains("Makeup");
        const skincareLink=cy.get("a[href*='product/category&path=']").contains("Skincare");
        makeupLink.click();
        skincareLink.click()
    })
    it("second test case",()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
// following code will not work to print the text
        // const header=cy.get("h1 .maintext");
        // cy.log((header.toString()))

        // this is correct way 
        cy.get("h1 .maintext").then(($headerText)=>{ //$headerText is the object that the previous command yielded us
            const headerText=$headerText.text(); 
            cy.log(headerText);
            expect(headerText).is.eq('Makeup');
        });
    });


    it.only("validate properties of Contact us page",()=>{
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");

        // Uses cypress commands and chaining 
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')

        // jquery commands 
        cy.contains('#ContactUsFrm','Contact Us Form').then(text=>{
            const firstNameText=text.find('#field_11').text();
            expect(firstNameText).to.contain('First name')


            // Embedded commands
            cy.get('#field_11').then(f=>{
                cy.log(f.text());
                cy.log(f.toString())
            });
        })

    })
})