import { Then } from "cypress-cucumber-preprocessor/steps";
const  basePage         = require('../page_objects/base.page');
const  homePage         = require('../page_objects/home.page');
const  searchResultPage = require('../page_objects/searchResult.page');
const  productPage      = require('../page_objects/product.page');
const  cartPage         = require('../page_objects/cart.page');

Then('eu acesso o site da C&A pelo(a) {string}', (device) => {
	basePage.view(device);
	basePage.openUrl("/");
}); 

Then('eu procuro pelo produto {string}', product => {
	homePage.searchProduct(product);
});

Then('seleciono o produto {string} que foi retornado na lista', product => {
	searchResultPage.validateAndClick(product);
});

Then('e eu inicio o processo de compra', () => {
	productPage.startPurchaseProcess();
});

Then('o produto {string} está no carrinho', product => {
	basePage.verifyUrl("cart");
	cartPage.validateShoppingCart(product);
});