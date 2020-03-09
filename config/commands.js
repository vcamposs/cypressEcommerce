import addContext from 'mochawesome/addContext';

Cypress.Commands.add("setResolution", (size) => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
    } else {
        cy.viewport(size);
    }
});

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});

Cypress.on('test:after:run', (test, runnable) => {
	if (test.state == 'failed') {
		cy.wait(500);
		addContext({ test }, `./screenshots/${runnable.parent.title} -- ${test.title} (failed).png`);
	}
});