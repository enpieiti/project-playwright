import { test as baseTest } from "../fixtures/pom-fixture";
import CommonApiUtils from "../utils/CommonApiUtils";
import CommonUtils from "../utils/CommonUtil";

type CommonFixtureType = {
  commonUtils: CommonUtils;
  commonApiUtils: CommonApiUtils;
};

export const test = baseTest.extend<CommonFixtureType>({
  commonUtils: async ({}, use) => {
    await use(new CommonUtils());
  },

  commonApiUtils: async ({ request }, use) => {
    await use(new CommonApiUtils(request));
  },
});
