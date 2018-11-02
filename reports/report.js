$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "verify the user login using facebook",
  "description": "",
  "id": "verify-the-user-login-using-facebook",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "verify the user login in facebook",
  "description": "",
  "id": "verify-the-user-login-using-facebook;verify-the-user-login-in-facebook",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the username \"shalini\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter the password  \"13214\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user login the facebook page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_browser()"
});
formatter.result({
  "duration": 8857716561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shalini",
      "offset": 25
    }
  ],
  "location": "StepDefinition.user_enter_the_username(String)"
});
formatter.result({
  "duration": 1160279051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13214",
      "offset": 26
    }
  ],
  "location": "StepDefinition.user_enter_the_password(String)"
});
formatter.result({
  "duration": 1124953039,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_login_the_facebook_page()"
});
formatter.result({
  "duration": 29368,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_close_the_browser()"
});
formatter.result({
  "duration": 84502,
  "status": "passed"
});
});