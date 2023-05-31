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
/* harmony export */   "changeAdminPasswordRequest": () => (/* binding */ changeAdminPasswordRequest),
/* harmony export */   "changeAdminUsernameRequest": () => (/* binding */ changeAdminUsernameRequest),
/* harmony export */   "createInflationRequest": () => (/* binding */ createInflationRequest),
/* harmony export */   "deleteInflationRequest": () => (/* binding */ deleteInflationRequest),
/* harmony export */   "getChartsDataRequest": () => (/* binding */ getChartsDataRequest),
/* harmony export */   "readInflationRequest": () => (/* binding */ readInflationRequest),
/* harmony export */   "signInAdminRequest": () => (/* binding */ signInAdminRequest),
/* harmony export */   "updateInflationRequest": () => (/* binding */ updateInflationRequest)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const url = "https://inflation-data-server.up.railway.app";
function buildResponseInflation(result) {
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
                inflationList: inflationList,
                token: result.data.token
            };
            return response;
        } else {
            const response = {
                message: result.data.message,
                inflationList: [],
                token: result.data.token
            };
            return response;
        }
    } else {
        const response = {
            message: {
                id: -2,
                message: "Communication with server failed"
            },
            inflationList: [],
            token: result.data.token
        };
        return response;
    }
}
function buildResponseCharts(result) {
    if (result?.data?.message) {
        const response = {
            message: result.data.message,
            barChartData: result.data.data.barChartData,
            lineChartData: result.data.data.lineChartData.data
        };
        return response;
    } else {
        const response = {
            message: {
                id: -2,
                message: "Communication with server failed"
            },
            barChartData: null,
            lineChartData: null
        };
        return response;
    }
}
function buildResponseAdmin(result) {
    if (result?.data?.message) {
        const response = {
            message: result.data.message,
            token: result.data.token
        };
        return response;
    } else {
        const response = {
            message: {
                id: -2,
                message: "Communication with server failed"
            },
            token: null
        };
        return response;
    }
}
async function createInflationRequest(request) {
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url + "/Inflation/create", request);
        return buildResponseInflation(result);
    } catch  {
        return buildResponseInflation(null);
    }
}
async function readInflationRequest(request) {
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url + "/Inflation/read", request);
        return buildResponseInflation(result);
    } catch  {
        return buildResponseInflation(null);
    }
}
async function updateInflationRequest(request) {
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url + "/Inflation/update", request);
        return buildResponseInflation(result);
    } catch  {
        return buildResponseInflation(null);
    }
}
async function deleteInflationRequest(request) {
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](url + "/Inflation/delete/", {
            data: request
        });
        return buildResponseInflation(result);
    } catch  {
        return buildResponseInflation(null);
    }
}
async function getChartsDataRequest(request) {
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url + "/Charts/get-data", request);
        return buildResponseCharts(result);
    } catch  {
        return buildResponseCharts(null);
    }
}
async function signInAdminRequest(request) {
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url + "/Admin/sign-in", request);
        return buildResponseAdmin(result);
    } catch  {
        return buildResponseAdmin(null);
    }
}
async function changeAdminPasswordRequest(request) {
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url + "/Admin/change-password", request);
        return buildResponseAdmin(result);
    } catch  {
        return buildResponseAdmin(null);
    }
}
async function changeAdminUsernameRequest(request) {
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url + "/Admin/change-username", request);
        return buildResponseAdmin(result);
    } catch  {
        return buildResponseAdmin(null);
    }
} /**
const onAction = () => {

}
console.log("")
console.log(": ", )

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