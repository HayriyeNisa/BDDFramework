package stepdefinition;

import Utils.BasePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import runnerTest.webPage.LoginPage;

public class LoginSD {

    private LoginPage loginPage = new LoginPage();

    @Given("^I am on Facebook home page$")

    public void iAmOnHomePage() {

        Assert.assertEquals(BasePage.get().getCurrentUrl(), "https://www.facebook.com");

    }

    @When("^I enter (.+) into (username|password) field on the login page$")
    public void enterDataandPass(String userText, String userPass) {
        switch (userText) {
            case "username":
                loginPage.enterEmail(userText);
                break;
            case "password":
                loginPage.enterPassword(userPass);
                break;

        }

    }

    @And("^I click on (login button|create account) on home screen$")
    public void clickOnButton(String button) {

        switch (button) {
            case "login button":
                loginPage.clickOnLogin();
                break;
            case "create account":
                //implement create account
                break;
        }
    }

    @Then("^I verify invalid credentials$")
    public void verifyInvalidLogin() {
        //Assert.assertEquals(loginPage.getTextElement(), "Log Into Facebook");
        loginPage.createAccount();
    }
}