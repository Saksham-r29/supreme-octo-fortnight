import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  textbox_verification_code: {
    locators: [
      { css: 'internal:label="Verification Code"i', priority: 1 },
      { css: 'internal:label="Verification Code"s', priority: 1 },
      { css: 'internal:role=textbox[name="Verification Code"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Verification Code"s]', priority: 1 },
    ],
    element_name: "Verification Code textbox",
  },
  button_verify: {
    locators: [
      { css: 'internal:role=button[name="Verify"i]', priority: 1 },
      { css: 'internal:role=button[name="Verify"s]', priority: 1 },
      { css: 'internal:text="Verify"s', priority: 1 },
      { css: 'input >> internal:has-text="Verify"i', priority: 1 },
      { css: "input >> internal:has-text=/^Verify$/", priority: 1 },
    ],
    element_name: "Verify button",
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
 * The user verifies identity by entering verification code "<verification_code>" and submits it
 * @param {string} _verification_code  verification code
 * @recorder
 * @path=/_ui/identity/verification/method/TotpVerificationUi/e
 */
async function the_user_verifies_identity_by_entering_verification_code_verification_code_and_submits_it(
  _verification_code
) {
  // source: recorder
  // implemented_at: 2025-06-05T09:22:12.529Z
  const _params = { _verification_code };
  // Click on Verification Code textbox
  await context.web.click(elements["textbox_verification_code"], _params, null, this);
  // Fill Verification Code textbox with ""{{u}}""
  await context.web.clickType(elements["textbox_verification_code"], "{{u}}", false, _params, null, this);
  // Click on Verify button
  await context.web.click(elements["button_verify"], _params, null, this);
}

Given(
  "The user verifies identity by entering verification code {string} and submits it",
  { timeout: 180000 },
  the_user_verifies_identity_by_entering_verification_code_verification_code_and_submits_it
);
