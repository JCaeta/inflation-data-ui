"use strict";
(() => {
var exports = {};
exports.id = 734;
exports.ids = [734];
exports.modules = {

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 8297:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInflationRequest": () => (/* binding */ createInflationRequest),
/* harmony export */   "deleteInflationRequest": () => (/* binding */ deleteInflationRequest),
/* harmony export */   "readInflationRequest": () => (/* binding */ readInflationRequest),
/* harmony export */   "updateInflationRequest": () => (/* binding */ updateInflationRequest)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const url = "https://localhost:7173";
/**
    id: message
    1: Succeeded
    -1: Request failed to complete
    -2: Communication with server failed
 */ function buildResponse(result) {
    if (result?.data?.message) {
        if (Array.isArray(result?.data?.inflationList)) {
            // Convert date strings to Date objects
            const inflationList = result.data.inflationList.map((item)=>({
                    id: item.id,
                    date: moment__WEBPACK_IMPORTED_MODULE_1___default()(item.date).toDate(),
                    value: item.value
                }));
            const response = {
                message: result.data.message,
                inflationList: inflationList
            };
            return response;
        } else {
            const response = {
                message: result.data.message,
                inflationList: []
            };
            return response;
        }
    } else {
        const response = {
            message: {
                id: -2,
                message: "Communication with server failed"
            },
            inflationList: []
        };
        return response;
    }
}
async function createInflationRequest(request) {
    const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url + "/Inflation/create", request);
    //The option { httpsAgent: new https.Agent({ rejectUnauthorized: false }) } used only for testing purposes. It disables the SSL certificate security
    return buildResponse(result);
}
async function readInflationRequest(request) {
    console.log("readInflation");
    const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url + "/Inflation/read", request);
    return buildResponse(result);
}
async function updateInflationRequest(request) {
    const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url + "/Inflation/update", request);
    return buildResponse(result);
}
async function deleteInflationRequest(request) {
    console.log("Request postInflation");
    const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](url + "/Inflation/delete/", {
        data: request
    });
    return buildResponse(result);
// const response = await axios.post<any>(url + '/inflation/post', inflation, { httpsAgent: new https.Agent({ rejectUnauthorized: false }) });
// The option { httpsAgent: new https.Agent({ rejectUnauthorized: false }) } used only for testing purposes. It disables the SSL certificate security
// console.log("response: ", response)
// return response;
} /**
const onAction = () => {

}

console.log(": ", )
console.log("")
 */ 

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8297));
module.exports = __webpack_exports__;

})();