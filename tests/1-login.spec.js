const {test,expect} = require('@playwright/test')

test('verify the Login credentials',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('[name="first_name"]').fill('Kartiki')
    await page.locator('[name="last_name"]').fill('Kode')
    await page.locator('[name="email"]').fill('kartiki@gmail.com')
    await page.locator('[name="message"]').fill('i m learning playwright')

    await page.locator('[type="submit"]').click()
})