const constants = require('../config/constants');

const cartPage = {
    validateShoppingCart: product => {
        cy.get(pageFactor.productNameLbl, 
              {timeout: constants.properties.timeout.genericElement})
              .first()
              .contains(product);
    }
};

const pageFactor = {
    productNameLbl: ".product-name"
};

module.exports = cartPage;