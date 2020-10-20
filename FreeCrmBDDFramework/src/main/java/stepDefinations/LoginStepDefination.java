package stepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefination {

	private WebDriver driver;

	public LoginStepDefination() {
		this.driver = HookStepDefination.getDriver();
	}

	@Given("^user is already on homepage$")
	public void user_is_already_on_homepage() throws Throwable {
		Thread.sleep(2000);
		System.out.println("Current URL:" + driver.getCurrentUrl());
	}

	@When("^title of login page is Cogmento CRM$")
	public void title_of_loginpage_cogmentocrm() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Cogmento CRM", title);

	}

	@Then("^user enters username and password$")
	public void enter_username_and_password() {
		driver.findElement(By.name("email")).sendKeys("shubhambhandari003@gmail.com");
		driver.findElement(By.name("password")).sendKeys("shubham@123");
	}

	@Then("^user press on login$")
	public void user_press_on_login() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();

	}

	@Then("^user is on homepage$")
	public void user_is_on_homepage() {
		String title = driver.getTitle();
		System.out.println("Home page title:" + title);

	}
}

	