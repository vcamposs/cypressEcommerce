const constants = require('../config/constants');

const homePage = {
    searchProduct: product => {
        cy.get(pageFactor.searchField, 
              {timeout: constants.properties.timeout.genericElement})
              .first()
              .focus()
              .type(product)
              .type("{enter}");
    }
};

const pageFactor = {
    searchField: "#q"
};

module.exports = homePage;