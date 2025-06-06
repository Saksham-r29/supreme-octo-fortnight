import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  textbox_username: {
    locators: [
      { css: 'internal:label="Username"i', priority: 1 },
      { css: 'internal:label="Username"s', priority: 1 },
      { css: 'internal:role=textbox[name="Username"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Username"s]', priority: 1 },
    ],
    element_name: "Username textbox",
  },
  textbox_password: {
    locators: [
      { css: 'internal:label="Password"i', priority: 1 },
      { css: 'internal:label="Password"s', priority: 1 },
      { css: 'internal:role=textbox[name="Password"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Password"s]', priority: 1 },
    ],
    element_name: "Password textbox",
  },
  button_log_in: {
    locators: [
      { css: 'internal:role=button[name="Log In"i]', priority: 1 },
      { css: 'internal:role=button[name="Log In"s]', priority: 1 },
      { css: 'internal:text="Log In"s', priority: 1 },
      { css: 'input >> internal:has-text="Log In"i', priority: 1 },
      { css: "input >> internal:has-text=/^Log In$/", priority: 1 },
    ],
    element_name: "Log In button",
  },
  textbox_username_1: {
    locators: [
      { css: 'internal:label="Username"i', priority: 1 },
      { css: 'internal:label="Username"s', priority: 1 },
      { css: 'internal:role=textbox[name="Username"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Username"s]', priority: 1 },
    ],
    element_name: "Username textbox",
  },
  textbox_password_1: {
    locators: [
      { css: 'internal:label="Password"i', priority: 1 },
      { css: 'internal:label="Password"s', priority: 1 },
      { css: 'internal:role=textbox[name="Password"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Password"s]', priority: 1 },
    ],
    element_name: "Password textbox",
  },
};

let context = null;
Before(async function () {
  if (!context) {
    context = await initContext(path, false, false, this);
  }
  await navigate(path);
});
After(async function () {
  await closeContext();
  context = null;
});
/**
 * The user logs in with username email "<username_email>" and user password "<user_password>"
 * @param {string} _username_email  username email
 * @param {string} _user_password  user password
 * @recorder
 * @path=/
 */
async function the_user_logs_in_with_username_email_username_email_and_user_password_user_password(
  _username_email,
  _user_password
) {
  // source: recorder
  // implemented_at: 2025-06-05T09:22:12.448Z
  const _params = { _username_email, _user_password };
  // Fill Username textbox with "_username_email"
  await context.web.clickType(elements["textbox_username"], _username_email, false, _params, null, this);
  // Fill Password textbox with "_user_password"
  await context.web.clickType(elements["textbox_password"], _user_password, false, _params, null, this);
  // Click on Log In button
  await context.web.click(elements["button_log_in"], _params, null, this);
}

Given(
  "The user logs in with username email {string} and user password {string}",
  { timeout: 180000 },
  the_user_logs_in_with_username_email_username_email_and_user_password_user_password
);

/**
 * The user navigates to the Salesforce login page and clicks on the Username and Password textboxes
 * @recorder
 * @path=/
 */
async function the_user_navigates_to_the_salesforce_login_page_and_clicks_on_the_username_and_password_textboxes() {
  // source: recorder
  // implemented_at: 2025-06-06T05:30:01.081Z
  const _params = {};
  // Click on Username textbox
  await context.web.click(elements["textbox_username_1"], _params, null, this);
  // Click on Password textbox
  await context.web.click(elements["textbox_password_1"], _params, null, this);
}

Given(
  "The user navigates to the Salesforce login page and clicks on the Username and Password textboxes",
  { timeout: 120000 },
  the_user_navigates_to_the_salesforce_login_page_and_clicks_on_the_username_and_password_textboxes
);
