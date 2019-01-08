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
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user cleck on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user is in the home page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user moves to the contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters firstname and lastname and position",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "position"
      ],
      "line": 16
    },
    {
      "cells": [
        "Tomi",
        "Hill",
        "Manager"
      ],
      "line": 17
    },
    {
      "cells": [
        "Amio",
        "See",
        "Superviser"
      ],
      "line": 18
    },
    {
      "cells": [
        "Orak",
        "Shab",
        "Worker"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.User_is_already_in_login_page()"
});
formatter.result({
  "duration": 8070116605,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 69354860,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Free CRM software in the cloud powers sales and customer] service\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and] service\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat StepDefinitions.LoginStepDefinition.title_of_the_login_page_is_Free_CRM(LoginStepDefinition.java:42)\r\n\tat ✽.When title of the login page is Free CRM(C:/Users/Dolon/eclipse-workspace/CucumberBDDFramwork/src/main/java/Features/contacts.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_cleck_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_the_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_contact_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});