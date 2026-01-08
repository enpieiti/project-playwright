import { test, expect } from "../../fixtures/hooks-fixture";
import loginModuleData from "../../data/ui-data/login-module-data.json";

test.use({
  storageState: {
    cookies: [],
    origins: [],
  },
});

test.describe(
  "Invalid login Test",
  { tag: "@InvalidLogin", annotation: { type: "Story Link", description: "Link of Story" } },
  () => {
    test(
      "[Login] Verify that the user cannot log in with an invalid password",
      {
        tag: ["@UI", "@UAT"],
        annotation: {
          type: "Test Case Link",
          description: "https://[Login]Verifythattheusercannotloginwithaninvalidpassword.com",
        },
      },
      async ({ gotoUrl, loginPage, commonUtils }) => {
        const username = commonUtils.decryptData(process.env.USER_NAME!);
        await loginPage.loginOrangeHrm(username, loginModuleData.wrong_password);
        await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.userNameInput).toBeVisible();
      }
    );
    test(
      "[Login] Verify that the user cannot log in with an invalid username",
      {
        tag: ["@UI", "@UAT"],
        annotation: {
          type: "Test Case Link",
          description: "https://[Login]Verifythattheusercannotloginwithaninvalidusername.com",
        },
      },
      async ({ gotoUrl, loginPage, commonUtils }) => {
        const password = commonUtils.decryptData(process.env.PASSWORD!);
        await loginPage.loginOrangeHrm(loginModuleData.wrong_username, password);
        await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.userNameInput).toBeVisible();
      }
    );

    test(
      "[Login] Verify that the user cannot log in with an invalid username and password",
      {
        tag: ["@UI", "@DEV"],
        annotation: {
          type: "Test Case Link",
          description: "https://[Login]Verifythattheusercannotloginwithaninvalidusernameandpassword.com",
        },
      },
      async ({ gotoUrl, loginPage, commonUtils }) => {
        await loginPage.loginOrangeHrm(loginModuleData.wrong_username, loginModuleData.wrong_password);
        await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.userNameInput).toBeVisible();
      }
    );
  }
);

test(
  "[Login] Verify that the user can log in with valid username and password",
  {
    tag: ["@VISUAL", "@UAT"],
    annotation: {
      type: "Test Case Link",
      description: "http://Verifythattheusercanloginwithvalidusernameandpassword.com",
    },
  },
  async ({ gotoUrl, loginPage, leftNavigationPage, commonUtils }) => {
    const username = commonUtils.decryptData(process.env.USER_NAME!);
    const password = commonUtils.decryptData(process.env.PASSWORD!);
    await loginPage.loginOrangeHrm(username, password);
    // await expect(leftNavigationPage.orangeHrmLogo).toHaveScreenshot("orangeHrmBrandandLogo.png");
    await expect(leftNavigationPage.leftNavigationPanel).toHaveScreenshot("LeftNavPanel.png");
  }
);

/*
test(
  "[Login] Verify that the user cannot log in with an invalid username",
  {
    tag: ["@UI", "@UAT"],
    annotation: {
      type: "Test Case Link",
      description: "https://[Login]Verifythattheusercannotloginwithaninvalidusername.com",
    },
  },
  async ({ gotoUrl, loginPage, commonUtils }) => {
    const password = commonUtils.decryptData(process.env.PASSWORD!);
    await loginPage.loginOrangeHrm(loginModuleData.wrong_username, password);
    await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
    await expect(loginPage.userNameInput).toBeVisible();
  }
);

test(
  "[Login] Verify that the user cannot log in with an invalid username and password",
  {
    tag: ["@UI", "@DEV"],
    annotation: {
      type: "Test Case Link",
      description: "https://[Login]Verifythattheusercannotloginwithaninvalidusernameandpassword.com",
    },
  },
  async ({ gotoUrl, loginPage, commonUtils }) => {
    await loginPage.loginOrangeHrm(loginModuleData.wrong_username, loginModuleData.wrong_password);
    await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
    await expect(loginPage.userNameInput).toBeVisible();
  }
);
*/
// SECRET_KEY=bupapabu npm run test_demo_cr_hd
// SECRET_KEY=bupapabu npm run test_demo_cr_ui
// SECRET_KEY=bupapabu npm run test_demo_ui
