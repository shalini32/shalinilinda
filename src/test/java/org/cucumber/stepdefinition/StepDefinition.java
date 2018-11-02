package org.cucumber.stepdefinition;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition extends BaseClass {
	
	static WebDriver driver;
	static Login log;
	
	@Given("^user launch the browser$")
	public void user_launch_the_browser() throws Throwable {
	 driver = browserLaunch("chrome");
	geturl("https://www.facebook.com/");
	}
	@When("^user enter the username \"([^\"]*)\"$")
	public void user_enter_the_username(String arg1) throws Throwable {
		log=new Login(driver);
		Thread.sleep(1000);
		settext(log.getUsername(),arg1);

	}

	@When("^user enter the password  \"([^\"]*)\"$")
	public void user_enter_the_password(String arg1) throws Throwable {
	   log=new Login(driver);
	   Thread.sleep(1000);
	   settext(log.getPassword(),arg1);
	}

	@Then("^user login the facebook page$")
	public void user_login_the_facebook_page() throws Throwable {
	   
	}

	@Then("^user close the browser$")
	public void user_close_the_browser() throws Throwable {
	    System.out.println("close the browser");
	}
	
	
	}


