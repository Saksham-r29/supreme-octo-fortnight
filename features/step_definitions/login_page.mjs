import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate, TestContext as context } from "automation_model";

const elements = {
  paragraph_blinq_user: {
    locators: [
      { css: 'internal:text="blinq_user"s', priority: 1 },
      { css: 'internal:text="blinq_user"i', priority: 1 },
      { css: 'p >> internal:has-text="blinq_user"i', priority: 1 },
      { css: "p >> internal:has-text=/^blinq_user$/", priority: 1 },
      { css: 'internal:role=paragraph >> internal:has-text="blinq_user"i', priority: 1 },
    ],
    element_name: "blinq_user paragraph",
    element_key: "paragraph_blinq_user",
  },
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
