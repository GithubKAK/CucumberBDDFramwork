// This is without Examples keyword 

package StepDefinitions;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	WebDriver driver;

	@Given("^User is already in login page$")
	public void User_is_already_in_login_page(){
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Dolon\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.get("https://www.freecrm.com/");
	   
	}

	@When("^title of the login page is Free CRM$")
	public void title_of_the_login_page_is_Free_CRM(){
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);
	   
	}

	@Then("^user enter username and password$")
	public void user_enter_username_and_password(DataTable credentials){
		
		 for(Map<String,String> data: credentials.asMaps(String.class, String.class)) {
				 		 
		driver.findElement(By.name("username")).sendKeys(data.get("username"));
		driver.findElement(By.name("password")).sendKeys(data.get("password"));
		 }
	}

	@Then("^user cleck on login button$")
	public void user_cleck_on_login_button(){
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginBtn);
		
	}

	@Then("^user is in the home page$")
	public void user_is_in_the_home_page(){
		String title = driver.getTitle();
		System.out.println("Home page title is :"+ title);
		Assert.assertEquals("CRMPRO", title);
	    
	}
	
	
	@Then ("^user moves to the contact page$")
	public void user_moves_to_the_contact_page() {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[@title= 'Contacts']"))).build().perform();
		driver.findElement(By.xpath("//a[@title='New Contact']")).click();
		
	}
	 @Then ("^user enters firstname and lastname and position$")
	 public void user_enters_contact_details(DataTable personalData) throws InterruptedException {
		 
		  for(Map<String, String> pdata:personalData.asMaps(String.class, String.class)) {
		 
		 
		driver.findElement(By.id("first_name")).sendKeys(pdata.get("firstname"));
		driver.findElement(By.id("surname")).sendKeys(pdata.get("lastname"));
		driver.findElement(By.xpath("//input[@id='company_position']")).sendKeys(pdata.get("position"));
		 
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
		
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[@title= 'Contacts']"))).build().perform();
		driver.findElement(By.xpath("//a[@title='New Contact']")).click();
		
		Thread.sleep(2000);
		
		
		
		
	 }   
	 }
	
	 
	 
	 
	@Then("^user close the browser$")
	public void user_close_the_browser(){
	   driver.quit();
 	}
}
