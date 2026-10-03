import {test,expect} from '@playwright/test';
import { BasePage } from '../../pages/basePage';
import { AlertsHandlingPage } from '../../pages/alertshandlingPage';
import { handleAlert, captureAlertMessage, handlePrompt } from '../../utils/playwright_helper'; 
test('Verify Simple Alert',async({page})=>
{

    await page.setViewportSize({width:1620,height:720});
    const basePage = new BasePage(page);
    await basePage.navigateToBaseUrl();
    const alertsHandlingPage = new AlertsHandlingPage(page);
    await alertsHandlingPage.clickDialogLink();
    await handleAlert(page, true);
    
    
});
