import BasePage from "./basePage";
import loginLoc from "../locators/loginLoc.json";

class LoginPage extends BasePage {
	get userNameField(): WebdriverIO.Element {
		return $(loginLoc.userNameField);
	}

	get passwordField(): WebdriverIO.Element {
		return $(loginLoc.passwordField);
	}

	get loginBtn(): WebdriverIO.Element {
		return $(loginLoc.loginBtn);
	}

	get welcomePanelDropDown(): WebdriverIO.Element {
		return $(loginLoc.loggedUserWelcomePane);
	}

	get logoutBtn(): WebdriverIO.Element {
		return $(loginLoc.logoutBtn);
	}

	login(username: string, password: string): void {
		this.userNameField.waitForDisplayed();
		this.userNameField.setValue(username);
		this.passwordField.setValue(password);
		this.loginBtn.click();
	}

	logout(): boolean {
		this.welcomePanelDropDown.waitForDisplayed();
		this.welcomePanelDropDown.click();
		this.logoutBtn.waitForDisplayed();
		this.logoutBtn.waitForEnabled();
		this.logoutBtn.click();
		this.userNameField.waitForDisplayed();
		return this.userNameField.isDisplayed();
	}
}

export default new LoginPage();
