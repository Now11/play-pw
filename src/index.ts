import type { Page } from '@playwright/test';

function openPage(page: Page, url: string) {
	return page.goto(url);
}

export { openPage };
