"use strict";
exports.id = 723;
exports.ids = [723];
exports.modules = {

/***/ 8723:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Public": () => (/* binding */ Public),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Desktop_ChartSection_ChartSectionDesktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(685);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_http_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3742);
/* harmony import */ var _components_Common_ClosedPage_ClosedPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8060);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Desktop_ChartSection_ChartSectionDesktop__WEBPACK_IMPORTED_MODULE_2__, _api_http_requests__WEBPACK_IMPORTED_MODULE_4__]);
([_components_Desktop_ChartSection_ChartSectionDesktop__WEBPACK_IMPORTED_MODULE_2__, _api_http_requests__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Public = ()=>{
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [start, setStart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [closeSite, setCloseSite] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const verifyResponseMessage = (message)=>{
        if (message.id === 1) {
            return true;
        } else if (message.id === -2) {
            setCloseSite(true);
            return false;
        }
    };
    const onStart = async ()=>{
        getChartsData(null, null);
    };
    const getChartsData = async (startDate, endDate)=>{
        const requestCharts = {
            startDate: startDate,
            endDate: endDate
        };
        const responseCharts = await (0,_api_http_requests__WEBPACK_IMPORTED_MODULE_4__/* .getChartsDataRequest */ .Rv)(requestCharts);
        if (verifyResponseMessage(responseCharts.message)) {
            setData({
                barChartData: responseCharts.barChartData,
                lineChartData: responseCharts.lineChartData
            });
        }
    };
    // const refreshData = async () => {
    //     console.log("refreshData")
    //     const dates = inflationAdminRef.current.getFilterData()
    //     console.log("dates: ", dates)
    //     await readInflation(dates.date1, dates.date2)
    // }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (start == false) {
            onStart();
            setStart(true);
        }
    });
    const onFilter = async (startDate, endDate)=>{
        getChartsData(startDate, endDate);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: closeSite ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_ClosedPage_ClosedPage__WEBPACK_IMPORTED_MODULE_5__/* .ClosedPage */ .e, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
            maxWidth: false,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Desktop_ChartSection_ChartSectionDesktop__WEBPACK_IMPORTED_MODULE_2__/* .ChartSectionDesktop */ .t, {
                data: data,
                onFilter: onFilter
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Public);
Public.defaultProps = {};
Public.propTypes = {} /**
const onAction = () => {

}
console.log("")
console.log(": ", )

 */ ;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;