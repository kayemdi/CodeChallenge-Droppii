const { expect } = require("chai");
const CommonObject = require("./CommonObject");
const LoginPage = require("./LoginPage");
const ManufacturingPage = require("./ManufacturingPage");
const MenuPage = require("./MenuPage");
const OverviewPage = require("./OverviewPage");
const ProductsPage = require("./ProductsPage");
const TestData = require("./TestData");

describe('Login Function', () => {
    
    const userDT = TestData.UserData;
    const productDT = TestData.ProductData;

    it('Step 1: Login to the web application', async () => {
        
        // open page
        await LoginPage.openWeb();

        // login
        await LoginPage.inputUsername(userDT.username);
        await LoginPage.inputPassword(userDT.password);
        await LoginPage.clickOnLoginBtn();
        
    });

    it('Step 2: Navigate to the `Inventory` feature', async () => {
        
        await MenuPage.clickOnInventoryBtn();

    });

    it('Step 3: From the top menu bar, select the `Products -> Products` item, then click on the `Create` button', async () => {
        
        await OverviewPage.clickOnProductsBtn();
        await OverviewPage.clickOnProductsOpt();
        await CommonObject.clickOnCreateBtn();

    });

    it('Step 4: Fill in the required information, then click on the `Save` button', async () => {
    
        await ProductsPage.inputProductName(productDT.productname);
        await CommonObject.clickOnSaveBtn();
        await browser.pause(2000);

    });

    it('Step 5: Click on the `Update the quantity` link, then update the Counted Quantity is 10', async () => {
        
        await ProductsPage.clickOnUpdateQuantityBtn();
        await browser.pause(2000);
        await CommonObject.clickOnCreateBtn();
        await ProductsPage.inputCountedQuantity(productDT.countedQuantity);
        await CommonObject.clickOnSaveBtn();

    });

    it('Step 6: From the top-left page, click on the `Application` icon', async () => {
        
        await CommonObject.clickOnApplicationIcon();

    });

    it('Step 7: Navigate to the `Manufacturing` feature, then create a new Manufacturing Order', async () => {
        
        await MenuPage.clickOnManufacturingBtn();
        await CommonObject.clickOnCreateBtn();
        await ManufacturingPage.inputProductName(productDT.productname);
        await ManufacturingPage.selectProductName(productDT.productname);
        await CommonObject.clickOnSaveBtn();

    });

    it('Step 8: Update the status of new Orders to “Done” successfully', async () => {
        
        await browser.pause(2000);
        await ManufacturingPage.clickOnConfirmBtn();
        await browser.pause(2000);
        await ManufacturingPage.clickOnMarkAsDoneBtn();
        await browser.pause(2000);
        await ManufacturingPage.clickOnOKBtn();
        await browser.pause(2000);
        await ManufacturingPage.clickOnApplyBtn();
        await browser.pause(2000);

    });

    it('Step 9: Validate the new Manufacturing Order is created with corrected information.', async () => {
        
        await browser.pause(2000);
        let productNameText = await ManufacturingPage.getProductNameText();
        let currentStatusText = await ManufacturingPage.getCurrentStatus();
        expect(productNameText).to.equal(productDT.productname);
        expect(currentStatusText).equal('DONE');

    });

});