const productPage = {
    startPurchaseProcess: () => {
        cy.get(pageFactor.productBuyBtn, {timeout: 50000}).click();
        cy.get(pageFactor.goToCartBtn, {timeout: 50000}).first().click();
    }
};

const pageFactor = {
    productBuyBtn: "#product-buy-button",
    goToCartBtn: ".keepbuying-goToCart"
};

module.exports = productPage;