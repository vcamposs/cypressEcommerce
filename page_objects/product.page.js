const constants = require('../config/constants');

const productPage = {
    startPurchaseProcess: () => {
        cy.get(pageFactor.productBuyBtn, 
              {timeout: constants.properties.timeout.genericElement})
              .click();
        cy.get(pageFactor.goToCartBtn, 
              {timeout: constants.properties.timeout.genericElement})
              .first()
              .click();
    }
};

const pageFactor = {
    productBuyBtn: "#product-buy-button",
    goToCartBtn: ".keepbuying-goToCart"
};

module.exports = productPage;