package org.cucumber.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src\\test\\java\\org\\cucumber\\feature\\"},glue= {"org.cucumber.stepdefinition"},plugin= {"pretty","html:reports","junit:reports/cucumber.xml","json:reports/cucumber.json"})
public class TestRunner {

}
