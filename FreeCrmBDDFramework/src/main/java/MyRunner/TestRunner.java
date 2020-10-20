package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions
(
		features = "D://Selenium Projects//FreeCrmBDDFramework//src//main//java//Features//contacts.feature",
		glue= {"stepDefinations"},
		//format= {"pretty","html:test-output", "junit:junit_xml"},
		plugin= {"pretty","html:target/cucumber", "json:target/cucumber.json"},
		monochrome = true,  //To display output in console in proper readable format
		strict= true,      // It will check if any step is not defined in step defination file
		dryRun = false, //To check mapping between 
		tags = {"@Smoke"}
)

public class TestRunner {
	
	
	
	

}
