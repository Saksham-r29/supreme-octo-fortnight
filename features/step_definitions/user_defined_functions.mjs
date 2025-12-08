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
//TODO: Implement the step

}

Given("generate a random uuid", { timeout: 120000 }, generate_a_random_uuid);
