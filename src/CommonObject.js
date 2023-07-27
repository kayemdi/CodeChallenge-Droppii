
const CREATE_BTN = '//button[contains(text(),"Create")]';
const SAVE_BTN = '//button[contains(text(),"Save")]';
const APP_ICON = '//a[@title="Home menu"]';

class CommonObject {

    waitForCreateBtnDisplayed() {
        $(CREATE_BTN).waitForDislayed(15000);
    }

    async clickOnCreateBtn() {
        this.waitForCreateBtnDisplayed();
        await $(CREATE_BTN).click();
    }

    async clickOnSaveBtn() {
        await $(SAVE_BTN).click();
    }

    async clickOnApplicationIcon() {
        await $(APP_ICON).click();
    }

}
module.exports = new CommonObject();