const basePage = {
    openUrl: page => {
        cy.visit(page);
    },
    verifyUrl: url => {
        cy.url().should('include', url);
    },
    view: device => {
        if(device == "celular"){
            cy.viewport(1440, 900);
        } else {
            cy.viewport(550, 1400);
        }
    }
};

module.exports = basePage;