Feature: Account management flow

  Scenario Outline: Account creation and verification
	# fill Username with <username_email>, fill Password with <user_password>, click on Log In
    Given The user logs in with username email "<username_email>" and user password "<user_password>"
	# click on Verification Code, fill Verification Code with {{u}}, click on Verify
    Given The user verifies identity by entering verification code "<verification_code>" and submits it
	# click on Accounts
    When The user navigates to Accounts page
	# click on New
    When The user clicks on New button to create a new account
	# fill *Account Name with <account_name>, fill Phone with <phone_number>, click on Save
    When The user fills the form with account name "<account_name>" and phone number "<phone_number>" and saves it
    Then Identify the text "Account", climb "3" levels in the page, validate text "<account_name>" can be found in the context

    Examples:
      | username_email | user_password | verification_code | account_name | phone_number |
      | dev@blinq.io   | Rohan@12345   | {{u}}             | rohan        |        12345 |

  Scenario: Login with username and password
	# click on Username, click on Password
    Given The user navigates to the Salesforce login page and clicks on the Username and Password textboxes