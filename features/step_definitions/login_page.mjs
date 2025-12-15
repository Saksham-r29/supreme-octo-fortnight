import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate, TestContext as context } from "automation_model";

const elements = {
  paragraph_blinq_user:{"locators":[{"css":"internal:text=\"blinq_user\"s","priority":1},{"css":"internal:text=\"blinq_user\"i","priority":1},{"css":"p >> internal:has-text=\"blinq_user\"i","priority":1},{"css":"p >> internal:has-text=/^blinq_user$/","priority":1},{"css":"internal:role=paragraph >> internal:has-text=\"blinq_user\"i","priority":1}],"element_name":"blinq_user paragraph","element_key":"paragraph_blinq_user"},
  textbox_password:{"locators":[{"css":"internal:role=textbox[name=\"Password\"i]","priority":1},{"css":"internal:role=textbox[name=\"Password\"s]","priority":1}],"element_name":"Password textbox","element_key":"textbox_password"},
  textbox_username:{"locators":[{"css":"internal:role=textbox[name=\"Username\"i]","priority":1},{"css":"internal:role=textbox[name=\"Username\"s]","priority":1}],"element_name":"Username textbox","element_key":"textbox_username"},
  text_username_password_login:{"locators":[{"css":"internal:text=\"Username *Password *Login\"i","priority":1},{"css":"internal:text=\"Username *Password *Login\"s","priority":1},{"css":"form >> internal:has-text=\"Username *Password *Login\"i","priority":1}],"element_name":"Username *Password *Login Text","element_key":"text_username_password_login"}
};

/**
 * The user clicks on blinq_user paragraph
 * @recorder
 * @path=/login
 */
async function the_user_clicks_on_blinq_user_paragraph() {
  // source: recorder
  // implemented_at: 2025-11-24T10:02:42.884Z
  const _params = {};
  // Click on blinq_user paragraph
  await context.web.click(elements["paragraph_blinq_user"], _params, null, this);
}

Given("The user clicks on blinq_user paragraph", { timeout: 60000 }, the_user_clicks_on_blinq_user_paragraph);

/**
 * The user navigates to the login page and clicks on the Password textbox
 * @recorder
 * @path=/login
 */
async function the_user_navigates_to_the_login_page_and_clicks_on_the_password_textbox (){
// source: recorder
// implemented_at: 2025-12-09T09:49:24.939Z
  const _params = {  };
  // Click on Password textbox
  await context.web.click(elements["textbox_password"], _params, null, this);
}

Given("The user navigates to the login page and clicks on the Password textbox", { timeout: 60000}, the_user_navigates_to_the_login_page_and_clicks_on_the_password_textbox);

/**
 * The user navigates to the login page and interacts with the Username and Password fields
 * @recorder
 * @path=/login
 */
async function the_user_navigates_to_the_login_page_and_interacts_with_the_username_and_password_fields (){
// source: recorder
// implemented_at: 2025-12-15T05:21:19.900Z
  const _params = {  };
  // Click on Username textbox
  await context.web.click(elements["textbox_username"], _params, null, this);
  // Click on Username *Password *Login Text
  await context.web.click(elements["text_username_password_login"], _params, null, this);
}

Given("The user navigates to the login page and interacts with the Username and Password fields", { timeout: 120000}, the_user_navigates_to_the_login_page_and_interacts_with_the_username_and_password_fields);
