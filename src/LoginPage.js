
const USER_NAME_TXTBX = '#login';
const PASSWORD_TXTBX = '#password';
const LOGIN_BTN = '[type="submit"]';

class LoginPage {

    async openWeb() {
        await browser.url('https://codechallenge.odoo.com');
    }

    waitForUsernameDisplayed() {
        $(USER_NAME_TXTBX).waitForDislayed(15000);
    }

    async inputUsername(username) {
        this.waitForUsernameDisplayed();
        await $(USER_NAME_TXTBX).setValue(username);
    }

    async inputPassword(password) {
        await $(PASSWORD_TXTBX).setValue(password);
    }

    async clickOnLoginBtn() {
        await $(LOGIN_BTN).click();
    }
}
module.exports = new LoginPage();