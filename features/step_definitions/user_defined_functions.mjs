import { Given, When, Then, After, setDefaultTimeout, Before} from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate, TestContext as context } from "automation_model";

/**
/* generate crypto id
*/
async function generate_crypto_id() {
  //source: user
  //implemented_at: 2025-12-08T09:49:41.223Z
  // Generate a random crypto id (hex string, 32 chars)
  const crypto = await import('crypto');
  const id = crypto.randomBytes(16).toString('hex');
  // Optionally, store or log the id for later use
  console.log("Generated crypto id:", id);
  // You can save it to test data if needed:
  if (typeof setTestData === "function") {
    setTestData({ crypto_id: id }, this);
  }
  // Also print the generated crypto id
  console.log(id);
}
When("generate crypto id", { timeout: 120000 }, generate_crypto_id);



/**
/* generate a random uuid
*/
async function generate_a_random_uuid() {
  //source: user
  //implemented_at: 2025-12-08T10:24:17.705Z
  // Generate a random UUID (v4)
  const uuid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
  // Store the uuid in test data for later use
  await context.web.setTestData({ random_uuid: uuid }, this);
}
Given("generate a random uuid", { timeout: 120000 }, generate_a_random_uuid);

