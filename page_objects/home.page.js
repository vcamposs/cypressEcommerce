const homePage = {
    searchProduct: product => {
        cy.get(pageFactor.searchField, {timeout: 50000}).first().focus().type(product).type("{enter}");
    }
};

const pageFactor = {
    searchField: "#q"
};

module.exports = homePage;