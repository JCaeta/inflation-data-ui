exports.id = 302;
exports.ids = [302];
exports.modules = {

/***/ 4270:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 8802:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "ClosedPage_image__t9b8u",
	"container": "ClosedPage_container__ot_Oz",
	"message": "ClosedPage_message__hOlxy"
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

/***/ 8060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* binding */ ClosedPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Common/ClosedPage/ClosedPage.module.scss
var ClosedPage_module = __webpack_require__(8802);
var ClosedPage_module_default = /*#__PURE__*/__webpack_require__.n(ClosedPage_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/Closed.png
/* harmony default export */ const Closed = ({"src":"/_next/static/media/Closed.0c0f2b86.png","height":1216,"width":1392,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAyUlEQVR42k3MsU7CUBSH8f/pvbe0UUnkGgcdjIOTxodwcDLxIZnFB9CXYOkCCQ2EwEIPoSWl9N57KBu/b/9w6Xf0/zj6+XvABRIRy0Aajm5gY71Bh1tvY6OKK6Cm2XC4bpargdrvnUBEgkdwnloT6/T5iTVn2Z2MM0X31jT5HD5fIHp9QeAtyvc3q8t+/5h8fqRVnkvy/QVEEXzwgAjVzK0unDexBDQ319SkCVSvB1dVOKsBrflQF1LubkkpL5MppIu6i4SgyBg+AYNoYEsxZmd6AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":7});
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/components/Common/ClosedPage/ClosedPage.tsx




// import img1 from './images/Closed.png';


/**
 To use the Image component you may change your next.config.js

const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
};
module.exports = nextConfig;

*/ const ClosedPage = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
            style: {
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                flexDirection: "column"
            },
            className: (ClosedPage_module_default()).container,
            maxWidth: false,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: (ClosedPage_module_default()).message,
                    children: "We apologize for the inconvenience, but due to limited hosting capacity, this page is only available during certain hours."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                    className: (ClosedPage_module_default()).message,
                    children: [
                        "Please visit us again during our regular hours of operation: ",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        "Monday - Friday: 9am - 5pm EST"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: Closed,
                    className: (ClosedPage_module_default()).image,
                    alt: "My image"
                })
            ]
        })
    });
};
ClosedPage.defaultProps = {};
ClosedPage.propTypes = {};


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
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(298);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5753);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1856);
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);









const DataInput1 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const [date1, setDate1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [date2, setDate2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({
            clear () {
                setDate1("");
                setDate2("");
            },
            setDate1 (date1) {
                const timeZoneOffset = date1.getTimezoneOffset();
                date1.setMinutes(date1.getMinutes() + timeZoneOffset);
                setDate1(dayjs__WEBPACK_IMPORTED_MODULE_7___default()(date1));
            },
            setDate2 (date2) {
                const timeZoneOffset = date2.getTimezoneOffset();
                date2.setMinutes(date2.getMinutes() + timeZoneOffset);
                setDate2(dayjs__WEBPACK_IMPORTED_MODULE_7___default()(date2));
            },
            getDates () {
                return buildDates();
            }
        }));
    const handleDate1 = (date)=>{
        if (date) {
            setDate1(date);
        } else {
            setDate1("");
        }
    };
    const handleDate2 = (date)=>{
        if (date) {
            setDate2(date);
        } else {
            setDate2("");
        }
    };
    const onSubmit = ()=>{
        const dates = buildDates();
        props.onSubmit(dates.date1, dates.date2);
    };
    const buildDates = ()=>{
        let d1 = null;
        let d2 = null;
        if (date1 != "") {
            d1 = date1.toDate();
        }
        if (date2 != "") {
            d2 = date2.toDate();
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
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_5__.LocalizationProvider, {
                            dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_4__.AdapterDayjs,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_6__.DatePicker, {
                                sx: {
                                    width: "100%"
                                },
                                slotProps: {
                                    textField: {
                                        error: false
                                    },
                                    actionBar: {
                                        actions: [
                                            "clear"
                                        ]
                                    }
                                },
                                onChange: handleDate1,
                                value: date1,
                                format: "DD-MM-YYYY"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 5,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_5__.LocalizationProvider, {
                            dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_4__.AdapterDayjs,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_6__.DatePicker, {
                                sx: {
                                    width: "100%"
                                },
                                slotProps: {
                                    textField: {
                                        error: false
                                    },
                                    actionBar: {
                                        actions: [
                                            "clear"
                                        ]
                                    }
                                },
                                value: date2,
                                onChange: handleDate2,
                                format: "DD-MM-YYYY"
                            })
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