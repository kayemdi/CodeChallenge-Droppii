
const PRODUCT_NAME_TXTBX = '//input[@name="name"]';
const UPDATE_QUANTITY_BTN = '//button[@name="action_update_quantity_on_hand"]';
const COUNTED_QUANTITY_TXTBX = '//input[@name="inventory_quantity"]';

class ProductsPage {


    waitForProductNameDisplayed() {
        $(PRODUCT_NAME_TXTBX).waitForDislayed(15000);
    }

    waitForUpdateQuantityDisplayed() {
        $(UPDATE_QUANTITY_BTN).waitForDislayed(15000);
    }

    waitForCountedQuantityDisplayed() {
        $(COUNTED_QUANTITY_TXTBX).waitForDislayed(15000);
    }

    async inputProductName(productname) {
        this.waitForProductNameDisplayed();
        await $(PRODUCT_NAME_TXTBX).setValue(productname);
    }

    async clickOnUpdateQuantityBtn() {
        this.waitForUpdateQuantityDisplayed();
        await $(UPDATE_QUANTITY_BTN).click();
    }

    async inputCountedQuantity(countedQuantity) {
        this.waitForCountedQuantityDisplayed();
        await $(COUNTED_QUANTITY_TXTBX).setValue(countedQuantity);
    }

}
module.exports = new ProductsPage();