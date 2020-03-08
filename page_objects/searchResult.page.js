const searchResult = {
    validateAndClick: (product) => {
        cy.get(pageFactor.productCard, {timeout: 50000}).first().contains(product).click();
    }
};

const pageFactor = {
    productCard: ".nm-product-item"
};

module.exports = searchResult;