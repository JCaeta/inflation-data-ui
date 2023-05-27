exports.id = 133;
exports.ids = [133];
exports.modules = {

/***/ 4270:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 3750:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ BarChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(955);
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(723);
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([chart_js_auto__WEBPACK_IMPORTED_MODULE_3__]);
chart_js_auto__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





chart_js_auto__WEBPACK_IMPORTED_MODULE_3__["default"].register((chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4___default()));
/**
Dependencies
npm i chartjs-plugin-datalabels
 */ const BarChart = (props)=>{
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    var chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.data === null || props.labels === null) {
            setData(null);
        }
        if (props.data !== null && props.labels !== null) {
            setVisible(false);
            setData({
                labels: props.labels,
                data: props.labels
            });
        }
    }, [
        props.data,
        props.labels
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data !== null) {
            setVisible(true);
        }
    }, [
        data
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (visible) {
            const myChartRef = chartRef.current.getContext("2d");
            new chart_js_auto__WEBPACK_IMPORTED_MODULE_3__["default"](myChartRef, {
                type: "bar",
                data: {
                    labels: props.labels,
                    datasets: [
                        {
                            label: props.title,
                            data: props.data,
                            backgroundColor: props.backgroundColor
                        }
                    ]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: props.xTitle,
                                font: {
                                    size: props.xFontSize
                                }
                            }
                        },
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: props.yTitle,
                                font: {
                                    size: props.yFontSize
                                }
                            }
                        }
                    },
                    plugins: {
                        datalabels: {
                            color: "white",
                            font: {
                                weight: "bold",
                                size: 20
                            }
                        }
                    }
                }
            });
        }
    }, [
        visible
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: visible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
            ref: chartRef
        }) : null
    });
};
BarChart.defaultProps = {
    title: "Title",
    data: [],
    labels: [],
    backgroundColor: "rgba(75,192,192,1)",
    xTitle: "X axis",
    yTitle: "Y axis",
    xFontSize: 20,
    yFontSize: 20
};
BarChart.propTypes = {
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    data: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)),
    labels: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)),
    backgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    xTitle: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    xFontSize: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    yTitle: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    yFontSize: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
}; /**
console.log("")
console.log(": ", )
console.log("  ")
*/ 

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9134:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ LineChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LineChart_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4270);
/* harmony import */ var _LineChart_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_LineChart_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3294);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lightweight_charts__WEBPACK_IMPORTED_MODULE_3__]);
lightweight_charts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const LineChart = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var created = false;
    const [areaSeries, setAreaSeries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [chart, setChart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loadingData, setLoadingData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const setupData = (data)=>{
        areaSeries.setData(data);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.data !== null) {
            setLoadingData(true);
            setChartData(null);
        }
        console.log("  ");
    }, [
        props.data
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (chartData === null) {
            setChartData(props.data);
        } else {
            createLineChart();
        }
    }, [
        chartData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (areaSeries !== null && loadingData && chart !== null && chartData !== null) {
            setLoadingData(false);
            setupData(chartData);
        }
    }, [
        areaSeries,
        loadingData,
        chart
    ]);
    function createLineChart() {
        if (!created) {
            // Access the chart element using document.getElementById()
            const chartElement = chartRef.current;
            if (!chartElement) return;
            const c = (0,lightweight_charts__WEBPACK_IMPORTED_MODULE_3__.createChart)(chartElement, {
                autoSize: true,
                height: props.height,
                timeScale: {
                    timeVisible: true,
                    secondsVisible: false
                }
            });
            c.applyOptions({
                crosshair: {
                    // Change mode from default 'magnet' to 'normal'.
                    // Allows the crosshair to move freely without snapping to datapoints
                    mode: lightweight_charts__WEBPACK_IMPORTED_MODULE_3__.CrosshairMode.Normal,
                    // Vertical crosshair line (showing Date in Label)
                    vertLine: {
                        width: 4,
                        color: "#C3BCDB44",
                        style: lightweight_charts__WEBPACK_IMPORTED_MODULE_3__.LineStyle.Solid,
                        labelBackgroundColor: "#9B7DFF"
                    },
                    // Horizontal crosshair line (showing Price in Label)
                    horzLine: {
                        color: "#9B7DFF",
                        labelBackgroundColor: "#9B7DFF"
                    }
                }
            });
            const area = c.addAreaSeries({
                lineColor: "#A80F07",
                topColor: "#C02115",
                bottomColor: "#F6F6F6"
            });
            setChart(c);
            setAreaSeries(area);
            // Example data
            // const data = [
            //     { time: '2022-01-01', value: 50},
            //     { time: '2022-01-02', value: 55},
            //     { time: '2022-01-03', value: 60},
            //     // ...
            // ];
            created = true;
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: chartData !== null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: chartRef,
            id: "chart",
            className: (_LineChart_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container)
        }) : null
    });
});
LineChart.defaultProps = {
    width: 1200,
    height: 800,
    data: null
};
LineChart.propTypes = {
    width: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    data: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any)
} /**

const onAction = () => {

}

console.log("")
console.log(": ", )

 */ ;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ DataInput1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);






const DataInput1 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const [date1, setDate1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [date2, setDate2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({
            clear () {
                setDate1("");
                setDate2("");
            },
            setDate1 (date1) {
                setDate1(date1.toISOString().split("T")[0]);
            },
            setDate2 (date2) {
                setDate2(date2.toISOString().split("T")[0]);
            },
            getDates () {
                return buildDates();
            }
        }));
    const handleDate1 = (event)=>{
        setDate1(event.target.value);
    };
    const handleDate2 = (event)=>{
        setDate2(event.target.value);
    };
    const onSubmit = ()=>{
        const dates = buildDates();
        props.onSubmit(dates.date1, dates.date2);
    };
    const buildDates = ()=>{
        var d1 = null;
        var d2 = null;
        if (date1 != "") {
            d1 = new Date(date1);
            const timeZoneOffsetDate1 = d1.getTimezoneOffset();
            d1.setMinutes(d1.getMinutes() + timeZoneOffsetDate1);
        }
        if (date2 != "") {
            d2 = new Date(date2);
            const timeZoneOffsetDate2 = d2.getTimezoneOffset();
            d2.setMinutes(d2.getMinutes() + timeZoneOffsetDate2);
        }
        return {
            date1: d1,
            date2: d2
        };
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: props.title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                container: true,
                spacing: 2,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 5,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                            label: props.date1Text,
                            variant: "outlined",
                            type: "date",
                            value: date1,
                            onChange: handleDate1,
                            fullWidth: true,
                            InputLabelProps: {
                                shrink: true
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 5,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                            label: props.date2Text,
                            variant: "outlined",
                            type: "date",
                            value: date2,
                            onChange: handleDate2,
                            fullWidth: true,
                            InputLabelProps: {
                                shrink: true
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 2,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                            variant: "contained",
                            onClick: onSubmit,
                            children: props.buttonText
                        })
                    })
                ]
            })
        ]
    });
});
DataInput1.defaultProps = {
    date1Text: "Start date",
    date2Text: "End date",
    onSubmit: null,
    buttonText: "Filter",
    title: "Filter"
};
DataInput1.propTypes = {
    date1Text: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    date2Text: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    buttonText: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
} /**
const onAction = () => {

}
console.log("")
console.log(": ", )

 */ ;


/***/ }),

/***/ 685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ ChartSectionDesktop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Common_Inputs_DataInput1_DataInput1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6902);
/* harmony import */ var _Common_Charts_BarChart_BarChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3750);
/* harmony import */ var _Common_Charts_LineChart_LineChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Common_Charts_BarChart_BarChart__WEBPACK_IMPORTED_MODULE_5__, _Common_Charts_LineChart_LineChart__WEBPACK_IMPORTED_MODULE_6__]);
([_Common_Charts_BarChart_BarChart__WEBPACK_IMPORTED_MODULE_5__, _Common_Charts_LineChart_LineChart__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ChartSectionDesktop = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const lineChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const filterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({
            getFilterData () {
                return filterRef.current.getDates();
            }
        }));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setData(props.data);
    }, [
        props.data
    ]);
    const createCharts = (lineChartData, barChartData)=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "Monthly inflation"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_Charts_LineChart_LineChart__WEBPACK_IMPORTED_MODULE_6__/* .LineChart */ .w, {
                    ref: lineChartRef,
                    height: 700,
                    data: lineChartData
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "Cumulative inflation"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_Charts_BarChart_BarChart__WEBPACK_IMPORTED_MODULE_5__/* .BarChart */ .v, {
                    labels: barChartData.labels,
                    data: barChartData.data,
                    title: "Cumulative inflation",
                    xTitle: "Total %",
                    yTitle: "Period"
                })
            ]
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: props.title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_Inputs_DataInput1_DataInput1__WEBPACK_IMPORTED_MODULE_4__/* .DataInput1 */ .r, {
                    ref: filterRef,
                    onSubmit: props.onFilter
                }),
                data !== null ? createCharts(data.lineChartData, data.barChartData) : null
            ]
        })
    });
});
ChartSectionDesktop.defaultProps = {
    title: "Inflation in Argentina",
    onFilter: function(startDate, endDate) {
        console.log("startDate: ", startDate);
        console.log("endDate: ", endDate);
    },
    data: null
};
ChartSectionDesktop.propTypes = {
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    onFilter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    data: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any)
} /**
console.log("")
console.log(":", )
console.log("  ")
*/ ;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3742:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LM": () => (/* binding */ deleteInflationRequest),
/* harmony export */   "Li": () => (/* binding */ updateInflationRequest),
/* harmony export */   "Qr": () => (/* binding */ readInflationRequest),
/* harmony export */   "Rv": () => (/* binding */ getChartsDataRequest),
/* harmony export */   "XK": () => (/* binding */ changeAdminPasswordRequest),
/* harmony export */   "fo": () => (/* binding */ createInflationRequest),
/* harmony export */   "fu": () => (/* binding */ changeAdminUsernameRequest),
/* harmony export */   "o9": () => (/* binding */ signInAdminRequest)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const url = "https://localhost:7173";
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
    const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url + "/Inflation/create", request);
    return buildResponseInflation(result);
}
async function readInflationRequest(request) {
    const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url + "/Inflation/read", request);
    return buildResponseInflation(result);
}
async function updateInflationRequest(request) {
    const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url + "/Inflation/update", request);
    return buildResponseInflation(result);
}
async function deleteInflationRequest(request) {
    const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](url + "/Inflation/delete/", {
        data: request
    });
    return buildResponseInflation(result);
}
async function getChartsDataRequest(request) {
    const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url + "/Charts/get-data", request);
    return buildResponseCharts(result);
}
async function signInAdminRequest(request) {
    const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url + "/Admin/sign-in", request);
    return buildResponseAdmin(result);
}
async function changeAdminPasswordRequest(request) {
    const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url + "/Admin/change-password", request);
    return buildResponseAdmin(result);
}
async function changeAdminUsernameRequest(request) {
    const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url + "/Admin/change-username", request);
    return buildResponseAdmin(result);
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