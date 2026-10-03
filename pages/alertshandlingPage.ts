import { Page ,Locator} from '@playwright/test';
export class AlertsHandlingPage {
    readonly dialogLink: Locator;
    constructor(private page: Page) {
        this.page = page;
        this.dialogLink = this.page.locator('span:has-text("Dialogs & Interactions")');
    }

    async clickDialogLink(): Promise<void> {
        await this.dialogLink.click();
    }
}