import { Page } from '@playwright/test';
import { ENV } from '../config/env';

export class BasePage {
    constructor(protected page: Page) {
        this.page = page;
    }

    async navigateToBaseUrl(): Promise<void> {
        await this.page.goto(ENV.baseUrl);
    }
}
