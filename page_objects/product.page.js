const productPage = {
    startPurchaseProcess: () => {
        cy.get(".search-cep-button").scrollIntoView().should('be.visible');
        cy.get(pageFactor.productBuyBtn, {timeout: 50000}).click();
        cy.get(pageFactor.goToCartBtn, {timeout: 50000}).first().click();
    }
};

const pageFactor = {
    searchField: "#q",
    productCard: ".product-image",
    productBuyBtn: "#product-buy-button",
    goToCartBtn: ".keepbuying-goToCart"
};

module.exports = productPage;