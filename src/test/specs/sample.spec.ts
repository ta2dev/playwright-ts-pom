import { expect, test } from '@playwright/test'
import { HomePage } from '../pages/HomePage'

let homePage : HomePage

test.beforeEach('Executing all the needed before Execution',({page,context})=>{
    homePage = new HomePage(page,context)    
})

test('Verify LUMA Website Home Page', async ({ page }) => {

    await test.step('Navigating to the Home Page', async () => {
        await page.goto('https://magento.softwaretestingboard.com/')
    })

    await test.step('Verify the Logo is displayed', async () => {
      await homePage.verifyHeadingLogo()
    })

    await test.step('Verify the Search Bar is displayed', async () => {
       await homePage.verifySearchBar()
    })

    await test.step('Verify all the Headings', async () => {
        await homePage.verifyAllHeading()
    })
})