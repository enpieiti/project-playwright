import { test, expect } from "../../fixtures/hooks-fixture";
import pimData from "../../data/ui-data/pim-module-data.json";
test(
  "[PIM] Verify that a new employee is successfully created under the PIM module",
  {
    tag: ["@UI", "@UAT"],
    annotation: {
      type: "Test Case Link",
      description: "https://[Login]VerifythatanewemployeeissuccessfullycreatedunderthePIMmodule",
    },
  },
  // async ({ gotoUrl, leftNavigationPage, pimPage }) => {
  //   await leftNavigationPage.openPimModule();
  //   await pimPage.addEmployee(pimData.first_name, pimData.middle_name, pimData.last_name);
  //   await expect(pimPage.newEmployeeNameHeading).toHaveText(`${pimData.first_name} ${pimData.last_name}`);
  // }

  async ({ gotoUrl, leftNavigationPage, pimPage }) => {
    await test.step("Open PIM Module", async () => {
      await leftNavigationPage.openPimModule();
    });
    await test.step("Add employee in PIM Module", async () => {
      await pimPage.addEmployee(
        pimData.first_name,
        pimData.middle_name,
        pimData.last_name,
        pimData.emplayee_id + Math.floor(Math.random() * 10000)
      );
      await expect(pimPage.newEmployeeNameHeading).toHaveText(`${pimData.first_name} ${pimData.last_name}`);
    });
  }
);

// SECRET_KEY=bupapabu npm run test_demo_cr_hd
// SECRET_KEY=bupapabu npm run test_demo_cr_ui
