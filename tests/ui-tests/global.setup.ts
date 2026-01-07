import { expect } from "@playwright/test";
import { test } from "../../fixtures/common-fixtures";

test("Global setup for auto login", async ({ page, commonUtils, loginPage, dashboardPage }) => {
  const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
  const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
  await loginPage.gotoOrangeHrm();
  await loginPage.loginOrangeHrm(decryptedUserName, decryptedPassword);
  console.log("daashboard:", `${process.env.BASE_URL}/web/index.php/dashboard/index`);
  // await page.waitForURL(`${process.env.BASE_URL}/web/index.php/dashboard/index`, {
  //   timeout: 60000,
  // });
  await page.waitForURL("/web/index.php/dashboard/index", {
    timeout: 60000,
  });
  await expect(dashboardPage.dashboardTitleText).toHaveText("Dashboard");
  await page.context().storageState({
    path: "./playwright/.auth/auth.json",
  });
});
