const cartPage = {
    validateShoppingCart: product => {
        cy.get(pageFactor.productNameLbl, {timeout: 50000}).first().contains(product);
    }
};

const pageFactor = {
    productNameLbl: ".product-name"
};

module.exports = cartPage;