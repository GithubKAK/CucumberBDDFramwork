Feature: CucumberBDD Create Contacts 
  
Scenario: CucumberBDD Create a contacts scenario
 
 Given User is already in login page 
 When title of the login page is Free CRM
 Then user enter username and password
 |username | password |
 | naveenk  | test@123 |
 
 And user cleck on login button
 And user is in the home page 
 Then user moves to the contact page
 Then user enters firstname and lastname and position
 
 |firstname  |lastname|position  |
 |Tomi			 |Hill    | Manager  |
 |Amio       |See	    |Superviser|
 |Orak 	     |Shab		|Worker		 |
 
 Then user close the browser
 
 
 			
