///<reference types="Cypress"/>

describe("here i write all my test cases", () => {
    it("first test", () => {
        // add the total of normal and sale product
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail');
        // now i will iterate through all the product price tag
        // cy.get('@productThumbnail').find('.oneprice').each(($el,index,$list)=>{
        //  cy.log($el.text());
        // })

        // now i add all the sold and normal product price 
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');
        var itemsTotal = 0;
        // here i resolve the promise
        cy.get('@itemPrice').then($linkText => {
            var itemPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemPriceTotal += Number(itemPrice[i]);
            }
            itemsTotal += itemPriceTotal;
            cy.log(itemsTotal);
        });


        // here i add the price of all the cost
        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPrice = 0;
            var saleItemPrice = $linkText.split('$');
            var i;
            for (i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i]);
                saleItemsPrice += Number(saleItemPrice[i]);
            }
            cy.log(saleItemsPrice);
            itemsTotal += saleItemsPrice;
        }).then(() => {
            cy.log("The total price of all products: " + itemsTotal);
            expect(itemsTotal).to.equal(660.5)
        })


    });
});