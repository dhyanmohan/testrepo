const { fixture } = require("testcafe");

fixture("Swag Labs").page('https://www.saucedemo.com/');

test('Login', async t => {

    await t
        .typeText('#user-name', 'standard_user')
        .typeText('#password','secret_sauce')
        .click('#login-button');

});



