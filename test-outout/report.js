$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Dolon/eclipse-workspace/CucumberBDDFramwork/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "CucumberBDD Create Contacts",
  "description": "",
  "id": "cucumberbdd-create-contacts",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "CucumberBDD Create a contacts scenario",
  "description": "",
  "id": "cucumberbdd-create-contacts;cucumberbdd-create-a-contacts-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter username and password",
  "rows": [
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user cleck on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is in the home page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user moves to the contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters firstname and lastname and position",
  "rows": [
    {
      "cells": [
        "Tomi",
        "Hill",
        "Manager"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.User_is_already_in_login_page()"
});
formatter.result({
  "duration": 6174735488,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 83569920,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 444794540,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_cleck_on_login_button()"
});
formatter.result({
  "duration": 1651758956,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 13877153,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_the_contact_page()"
});
formatter.result({
  "duration": 533576753,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_contact_details(DataTable)"
});
formatter.result({
  "duration": 2049806945,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_close_the_browser()"
});
formatter.result({
  "duration": 690490740,
  "status": "passed"
});
});