import { expect } from "@playwright/test";
import { test } from "../fixtures/hooks-fixture";

// test.beforeEach("Before Each Hook", async ({ loginPage }) => {
//   await loginPage.gotoOrangeHrm();
// });

// test.afterEach("After Each Hook", async ({ userPage }) => {
//   await userPage.logout();
// });

test("Temp test 1", async ({ page, gotoUrl }) => {
  // console.log(process.env.BASE_URL);
  // console.log(process.env.USER_NAME);
  // console.log(process.env.PASSWORD);

  // const commonUtilsObj = new CommonUtils();
  // commonUtilsObj.encryptData("Admin");
  // commonUtilsObj.encryptData("admin123");

  // console.log(commonUtilsObj.decryptData(process.env.USER_NAME!));
  // console.log(commonUtilsObj.decryptData(process.env.PASSWORD!));

  console.log(await page.title());
});

test("Temp test 2", async ({ page, gotoUrl }) => {
  await expect(page).toHaveTitle("OrangeHRM");
});
test("Temp test 3", async ({ page, gotoUrl, logout }) => {
  await expect(page).toHaveTitle("OrangeHRM");
});

// SECRET_KEY=bupapabu npm run test_demo_cr_hl
