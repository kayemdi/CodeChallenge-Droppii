
const PRODUCTS_BTN = '[title="Products"]';
const PRODUCTS_OPT = '//a[text()="Products"]';

class OverviewPage {

    waitForProductsBtnDisplayed() {
        $(PRODUCTS_BTN).waitForDislayed(15000);
    }

    waitForProductsOptDisplayed() {
        $(PRODUCTS_OPT).waitForDislayed(15000);
    }


    async clickOnProductsBtn() {
        this.waitForProductsBtnDisplayed();
        await $(PRODUCTS_BTN).click();
    }

    async clickOnProductsOpt() {
        this.waitForProductsOptDisplayed();
        await $(PRODUCTS_OPT).click();
    }

}
module.exports = new OverviewPage();