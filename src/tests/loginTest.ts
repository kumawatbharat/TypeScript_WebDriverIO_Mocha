import loginPage from "../pages/loginpage";
import staticData from "../helpers/consts/staticData.json";
import { expect } from "chai";

describe("Login tests", () => {
	it("Successful login and logout", () => {
		loginPage.openSite();
		loginPage.login(staticData.userId, staticData.password);
		expect(loginPage.logout()).to.be.true;
	});
});
