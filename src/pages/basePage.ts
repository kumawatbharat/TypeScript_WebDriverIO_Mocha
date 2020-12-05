class BasePage {
	openSite(): void {
		browser.maximizeWindow();
		browser.url("/");
	}
}

export default BasePage;
