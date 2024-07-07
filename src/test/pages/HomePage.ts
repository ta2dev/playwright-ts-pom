import { BrowserContext, Locator, Page, expect } from "@playwright/test";



export class HomePage {

    readonly page: Page
    readonly context: BrowserContext
    logo: Locator
    searchBar: Locator
    allHeading: Locator;


    constructor(page: Page, context: BrowserContext) {
        this.page = page
        this.context = context
        this.logo = page.locator('//*[@class="logo"]')
        this.searchBar = page.locator('//*[@id="search"]')
        this.allHeading = page.locator('//*[@id="ui-id-2"]')
    }

    async verifyHeadingLogo() {
        await expect(this.logo).toBeVisible()
    }

    async verifySearchBar(){
        await expect(this.searchBar).toBeVisible()
    }

    async verifyAllHeading(){
        await expect(this.allHeading).toBeVisible()
    }
}
