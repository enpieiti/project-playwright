import { test as baseTest } from "./common-fixtures";

type HooksFixtureType = {
  //   gotoUrl: any;  TypeScript bỏ kiểm tra type. gọi sao cũng được.
  //   logout: any;
  //   gotoUrl: () => Promise<void>;  fixture trả về function -> use(fn) -> use() lỗi
  //   logout: () => Promise<void>;   fixture trả về function -> use(fn) -> use() lỗi
  gotoUrl: void; // fixture chạy logic, không trả gì -> use() -> Test nhận undefined
  logout: void;
};
export const test = baseTest.extend<HooksFixtureType>({
  gotoUrl: async ({ loginPage }, use) => {
    await loginPage.gotoOrangeHrm();
    await use();
  },

  logout: async ({ userPage }, use) => {
    await use();
    await userPage.logout();
  },
});

export { expect } from "@playwright/test";
