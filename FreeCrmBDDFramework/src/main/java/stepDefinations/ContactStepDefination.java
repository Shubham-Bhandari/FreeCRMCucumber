package stepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Then;

public class ContactStepDefination {
	
	private WebDriver driver;
	
	public ContactStepDefination()
	{
		this.driver=HookStepDefination.getDriver();
	}
	
	@Then("^user mouse click on contact link$")
	public void user_mouse_click_on_contact() throws Throwable {
		Thread.sleep(10000);
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Contacts']")));
		driver.findElement(By.xpath("//*[text()='Contacts']")).click();

	}

	@Then("^user clicks on new contact link$")
	public void user_clicks_on_new_contact_link() throws Throwable {
		Thread.sleep(10000);
		driver.findElement(By.xpath("//*[@id=\"dashboard-toolbar\"]/div[2]/div/a")).click();
	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String arg1, String arg2) throws Throwable {
		driver.findElement(By.name("first_name")).sendKeys(arg1);
		driver.findElement(By.name("last_name")).sendKeys(arg2);
	}

	@Then("^verify contact is saved or not$")
	public void verify_contact_is_saved_or_not() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
	}

}



