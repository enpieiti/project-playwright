import { test, expect } from "../../fixtures/hooks-fixture";
import apiPathData from "../../data/api-data/api-path-data.json";
import restfulApiData from "../../data/api-data/restful-booker-api-module-data.json";
// test("API Testing", async ({ request }) => {
//   const bookingIds = await request.get("https://restful-booker.herokuapp.com/booking");
//   console.log(await bookingIds.json());
// });

// test("API test 2", async ({ request }) => {
//   const bookingDetails = await request.get("booking/1");
//   console.log(await bookingDetails.json());
// });

test(
  "Id - 8 [Restful-Booker > Booking] Verify that the user is able to fetch all the booking IDs using GET API and receive valid response.",
  {
    tag: ["@API", "@UAT"],
    annotation: {
      type: "Test Case Link",
      description: "https://linktestcase.com/8",
    },
  },
  async ({ request }) => {
    const bookingIdResp = await request.get(apiPathData.booking_path);
    const bookingIdsJsonResp = await bookingIdResp.json();
    console.log(bookingIdsJsonResp);
    expect(bookingIdResp.status()).toBe(200);
    expect(bookingIdResp.statusText()).toBe("OK");
    // expect(bookingIdResp.ok()).toBeTruthy();
    expect(bookingIdsJsonResp).not.toBeNull();
    expect(bookingIdResp.headers()["content-type"]).toBe(restfulApiData.content_type);
  }
);
// Verify the response status code
// Verify the response status text
// Verify the received response
// Verify content-type value in response header
test(
  "Id - 9 [Restful-Booker > Booking] Verify that the user is able to fetch booking details for a booking id using GET API and receive valid response.",
  {
    tag: ["@API", "@UAT"],
    annotation: {
      type: "Test Case Link",
      description: "https://linktestcase.com/9",
    },
  },
  async ({ request }) => {
    const bookingResp = await request.get(`${apiPathData.booking_path}/${restfulApiData.booking_id}`);
    const bookingJsonResp = await bookingResp.json();
    console.log(bookingJsonResp);
    expect(bookingResp.status()).toBe(200);
    expect(bookingResp.statusText()).toBe("OK");
    // expect(bookingIdResp.ok()).toBeTruthy();
    expect(bookingResp).not.toBeNull();
    expect(bookingJsonResp.firstname).toEqual(restfulApiData.firstname);
  }
);

test(
  "Id - 10 [Restful-Booker > Booking] Verify that the user is able to create new booking using POST API and receive valid response.",
  {
    tag: ["@API", "@UAT"],
    annotation: {
      type: "Test Case Link",
      description: "https://linktestcase.com/10",
    },
  },
  async ({ request }) => {
    const createBookingRest = await request.post(apiPathData.booking_path, { data: restfulApiData.create_booking });
    const createBookingJsonResp = await createBookingRest.json();
    console.log(createBookingJsonResp);
    expect(createBookingRest.status()).toBe(200);
    expect(createBookingJsonResp.booking).toMatchObject(restfulApiData.create_booking);
  }
);

test(
  "Id - 11 [Restful-Booker > Booking] Verify that the user is able to update existing booking using PUT API and receive valid response.",
  {
    tag: ["@API", "@UAT"],
    annotation: {
      type: "Test Case Link",
      description: "https://linktestcase.com/11",
    },
  },
  async ({ request, commonApiUtils }) => {
    const tokenValue = await commonApiUtils.createToken();
    const updateBookingResp = await request.put(`${apiPathData.booking_path}/${restfulApiData.booking_id2}`, {
      headers: {
        Cookies: `token=${tokenValue}`,
      },
      data: restfulApiData.update_booking,
    });
    const updateBookingJsonResp = await updateBookingResp.json();
    console.log(updateBookingJsonResp);
    expect(updateBookingResp.status()).toBe(200);
    expect(updateBookingJsonResp).toMatchObject(restfulApiData.update_booking);
  }
);

test(
  "Id - 12 [Restful-Booker > Booking] Verify that the user is able to partially update existing booking using PATCH API and receive valid response.",
  {
    tag: ["@API", "@UAT"],
    annotation: {
      type: "Test Case Link",
      description: "https://linktestcase.com/12",
    },
  },
  async ({ request, commonApiUtils }) => {
    const apiToken = await commonApiUtils.createToken();
    const partialUpdateBookingResp = await request.patch(`${apiPathData.booking_path}/${restfulApiData.booking_id2}`, {
      headers: {
        Cookies: `token=${apiToken}`,
      },
      data: restfulApiData.upadate_partial_booking,
    });
    const partialUpdateBookingJsonResp = await partialUpdateBookingResp.json();
    console.log(partialUpdateBookingJsonResp);
    expect(partialUpdateBookingResp.status()).toBe(200);
    expect(partialUpdateBookingJsonResp.firstname).toMatch(restfulApiData.upadate_partial_booking.firstname);
    expect(partialUpdateBookingJsonResp.lastname).toMatch(restfulApiData.upadate_partial_booking.lastname);
  }
);

test(
  "Id - 13 [Restful-Booker > Booking] Verify that the user is able to delete existing booking using DELETE API and receive valid response.",
  {
    tag: ["@API", "@UAT"],
    annotation: {
      type: "Test Case Link",
      description: "https://linktestcase.com/13",
    },
  },
  async ({ request, commonApiUtils }) => {
    const apiToken = await commonApiUtils.createToken();
    const deleteBookingResp = await request.delete(`${apiPathData.booking_path}/${restfulApiData.booking_id3}`, {
      headers: {
        Cookies: `token=${apiToken}`,
      },
    });
    expect(deleteBookingResp.status()).toBe(201);
    expect(deleteBookingResp.statusText()).toBe("Created");

    const getBookingResp = await request.get(`${apiPathData.booking_path}/${restfulApiData.booking_id3}`);
    expect(getBookingResp.status()).toBe(404);
    expect(getBookingResp.statusText()).toBe("Not Found");
  }
);

// npm run test_demo_api
// SECRET_KEY=bupapabu npm run test_demo_api
