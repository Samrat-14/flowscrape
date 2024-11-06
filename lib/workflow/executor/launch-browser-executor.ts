import puppeteer from 'puppeteer';

import { waitFor } from '@/lib/helper/waitFor';
import { LaunchBrowserTask } from '@/lib/workflow/task/launch-browser';
import { ExecutionEnvironment } from '@/types/executor';

export async function LaunchBrowserExecutor(
  environment: ExecutionEnvironment<typeof LaunchBrowserTask>
): Promise<boolean> {
  try {
    const websiteUrl = environment.getInput('Website Url');
    const browser = await puppeteer.launch({
      headless: true, // for testing
    });
    environment.setBrowser(browser);

    const page = await browser.newPage();
    await page.goto(websiteUrl);
    environment.setPage(page);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
