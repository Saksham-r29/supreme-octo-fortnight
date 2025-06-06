import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  button_new: {
    locators: [
      { css: 'internal:role=button[name="New"i]', priority: 1 },
      { css: 'internal:role=button[name="New"s]', priority: 1 },
      { css: 'internal:text="New"i >> xpath=..', priority: 1 },
      { css: 'internal:text="New"s >> xpath=..', priority: 1 },
      { css: 'a >> internal:has-text="New"i', priority: 1 },
      { css: "a >> internal:has-text=/^New$/", priority: 1 },
    ],
    element_name: "New button",
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
 * The user clicks on New button to create a new account
 * @recorder
 * @path=/lightning/o/Account/list
 */
async function the_user_clicks_on_new_button_to_create_a_new_account() {
  // source: recorder
  // implemented_at: 2025-06-05T09:22:12.652Z
  const _params = {};
  // Click on New button
  await context.web.click(elements["button_new"], _params, null, this);
}

When(
  "The user clicks on New button to create a new account",
  { timeout: 60000 },
  the_user_clicks_on_new_button_to_create_a_new_account
);
