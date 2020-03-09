const constants = require('../config/constants');

const searchResult = {
    validateAndClick: (product) => {
        cy.get(pageFactor.productCard, 
              {timeout: constants.properties.timeout.genericElement})
              .first()
              .contains(product)
              .click();
    }
};

const pageFactor = {
    productCard: ".nm-product-item"
};

module.exports = searchResult;