// import { AdminRequest, AdminResponse } from "../../../src/pages/api/http_requests";
// import { signInAdminRequest } from "../../../src/pages/api/http_requests";
// import assert from "assert";

// describe("Sign in request", () => {
//     it("should return response data on success", async () => {
//         const request: AdminRequest = {username: 'admin', password: 'admin', token: null, oldPassword: null}
//         // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
//         console.log(request);
//         const response: AdminResponse = await signInAdminRequest(request);

//         assert.strictEqual(response.message.id, 1, response.message.message);
//     });
// });