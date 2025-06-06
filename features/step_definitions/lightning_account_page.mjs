import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  textbox_account_name: {
    locators: [
      { css: 'internal:label="*Account Name"i', priority: 1 },
      { css: 'internal:label="*Account Name"s', priority: 1 },
      { css: 'internal:role=textbox[name="*Account Name"i]', priority: 1 },
      { css: 'internal:role=textbox[name="*Account Name"s]', priority: 1 },
    ],
    element_name: "*Account Name textbox",
  },
  textbox_phone: {
    locators: [
      { css: 'internal:role=textbox[name="Phone"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Phone"s]', priority: 1 },
      { css: 'input.slds-input[name="Phone"]', priority: 3 },
    ],
    element_name: "Phone textbox",
  },
  button_save: { locators: [{ css: 'internal:role=button[name="Save"s]', priority: 1 }], element_name: "Save button" },
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
 * The user fills the form with account name "<account_name>" and phone number "<phone_number>" and saves it
 * @param {string} _account_name  account name
 * @param {string} _phone_number  phone number
 * @recorder
 * @path=/lightning/o/Account/new
 */
async function the_user_fills_the_form_with_account_name_account_name_and_phone_number_phone_number_and_saves_it(
  _account_name,
  _phone_number
) {
  // source: recorder
  // implemented_at: 2025-06-05T09:22:12.703Z
  const _params = { _account_name, _phone_number };
  // Fill *Account Name textbox with "_account_name"
  await context.web.clickType(elements["textbox_account_name"], _account_name, false, _params, null, this);
  // Fill Phone textbox with "_phone_number"
  await context.web.clickType(elements["textbox_phone"], _phone_number, false, _params, null, this);
  // Click on Save button
  await context.web.click(elements["button_save"], _params, null, this);
}

When(
  "The user fills the form with account name {string} and phone number {string} and saves it",
  { timeout: 180000 },
  the_user_fills_the_form_with_account_name_account_name_and_phone_number_phone_number_and_saves_it
);
