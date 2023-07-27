
const PRODUCT_NAME_TXTBX = '(//input[contains(@id, "o_field_input")])[1]';
let PRODUCT_OPT = '//a[text()="';
const CONFIRM_BTN = '//button[@name="action_confirm"]'; 
const MARK_AS_DONE_BTN = '//button[@name="button_mark_done" and @class="btn btn-primary"]';  
const OK_BTN = '//span[text()="Ok"]//parent::button';   
const APPLY_BTN = '//span[text()="Apply"]//parent::button';   
const PRODUCT_NAME_TXT = '//a[@name="product_id"]//span';
const CURRENT_STATE_TXT = '//button[@aria-checked="true"]';

class ManufacturingPage {


    waitForProductNameDisplayed() {
        $(PRODUCT_NAME_TXTBX).waitForDislayed(15000);
    }

    waitForProductOptDisplayed() {
        $(PRODUCT_OPT).waitForDislayed(15000);
    }

    async inputProductName(productname) {
        this.waitForProductNameDisplayed();
        await $(PRODUCT_NAME_TXTBX).setValue(productname);
    }    

    async selectProductName(productname) {
        PRODUCT_OPT += productname + '"]';
        this.waitForProductNameDisplayed();
        await $(PRODUCT_OPT).click();
    }   

    async clickOnConfirmBtn() {
        await $(CONFIRM_BTN).click();
    }

    async clickOnMarkAsDoneBtn() {
        await $(MARK_AS_DONE_BTN).click();
    }

    async clickOnOKBtn() {
        await $(OK_BTN).click();
    }

    async clickOnApplyBtn() {
        await $(APPLY_BTN).click();
    }

    async getProductNameText() {
        let productNameText = $(PRODUCT_NAME_TXT).getText();
        return productNameText;
    }

    async getCurrentStatus() {
        let currentStatusText = $(CURRENT_STATE_TXT).getText();
        return currentStatusText;
    }

}
module.exports = new ManufacturingPage();