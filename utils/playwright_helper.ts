import { Page } from '@playwright/test';

// Handle alert dialog by accepting or dismissing it based on the accept parameter
export async function handleAlert(page: Page, accept: boolean = true): Promise<void> {
    page.once('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        if (accept) {
            await dialog.accept();
        } else {
            await dialog.dismiss();
        }
    });
}
// Capture the message from an alert dialog and return it as a string
export async function captureAlertMessage(page: Page): Promise<string> {
    return new Promise<string>((resolve) => {
        console.log('Waiting for alert dialog...');
        page.once('dialog', async dialog => {
            const message = dialog.message();
            await dialog.dismiss(); // Dismiss the alert after capturing the message
            resolve(message);
        });
    });
}
// Handle prompt dialog by accepting it with input text or dismissing it
export async function handlePrompt(page: Page, inputText: string | null = null): Promise<void> {
    page.once('dialog', async dialog => {
        console.log(`Prompt message: ${dialog.message()}`);
        if (inputText !== null) {
            await dialog.accept(inputText);
        } else {
            await dialog.dismiss();
        }
    });
}
