const { fixture, Selector } = require("testcafe");

fixture("Swag Labs").page('https://www.saucedemo.com/');

test('Add Product', async t => {

    await t
        .typeText('#user-name', 'standard_user')
        .typeText('#password','secret_sauce')
        .click('#login-button')
        .expect(Selector('//*[@id="item_4_title_link"]/div').innertext).contains('Sauce Labs Backpack');
//hello git
        
});