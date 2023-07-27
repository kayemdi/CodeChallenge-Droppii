
const INVENTORY_BTN = '#result_app_1';
const MANUFACTURING_BTN = '#result_app_2';

class MenuPage {

    waitForInventoryDisplayed() {
        $(INVENTORY_BTN).waitForDislayed(15000);
    }

    waitForManufacturingDisplayed() {
        $(MANUFACTURING_BTN).waitForDislayed(15000);
    }

    async clickOnInventoryBtn() {
        this.waitForInventoryDisplayed();
        await $(INVENTORY_BTN).click();
    }

    async clickOnManufacturingBtn() {
        this.waitForInventoryDisplayed();
        await $(MANUFACTURING_BTN).click();
    }
}
module.exports = new MenuPage();