package stepDefinations;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.Before;

public class HookStepDefination  {
	private static WebDriver driver;
	
	@Before("@Smoke")
	public void launchBrowser()
	{
		System.setProperty("webdriver.chrome.driver", "D://Selenium Jar Files//chromedriver.exe");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://ui.freecrm.com/");
	}
	
	
	public void tearDown()
	{
		driver.quit();
		
	}
	
	public static WebDriver getDriver() 
	{
		return driver;
	}
	
	
	
	
}