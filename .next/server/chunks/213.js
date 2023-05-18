"use strict";
exports.id = 213;
exports.ids = [213];
exports.modules = {

/***/ 3750:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([chart_js_auto__WEBPACK_IMPORTED_MODULE_3__]);
chart_js_auto__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const BarChart = (props)=>{
    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
                }
            }
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
        ref: chartRef
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
    yFontSize: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 9360:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _Common_DataInput1_DataInput1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2853);
/* harmony import */ var _Common_Charts_BarChart_BarChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3750);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Common_Charts_BarChart_BarChart__WEBPACK_IMPORTED_MODULE_5__]);
_Common_Charts_BarChart_BarChart__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ChartSectionDesktop = (props)=>{
    const createCharts = (data)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_Charts_BarChart_BarChart__WEBPACK_IMPORTED_MODULE_5__/* .BarChart */ .v, {
                data: data
            })
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: props.title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_DataInput1_DataInput1__WEBPACK_IMPORTED_MODULE_4__/* .DataInput1 */ .r, {}),
                props.data != null ? createCharts(props.data) : null
            ]
        })
    });
};
ChartSectionDesktop.defaultProps = {
    title: "Charts",
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
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ DataSectionDesktop)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/components/Common/DataInput0/DataInput0.tsx






const DataInput0 = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const [inputNumber, setInputNumber] = (0,external_react_.useState)(props.inputNumberValue);
    const [inputDate, setInputDate] = (0,external_react_.useState)(props.inputDateValue);
    // Set value of inputNumber and inputDate
    (0,external_react_.useEffect)(()=>{
        if (props.inputDateValue instanceof Date) {
            setInputDate(props.inputDateValue.toISOString().split("T")[0]); // ''yyyy-MM-dd'
        } else {
            setInputDate("");
        }
        if (typeof props.inputNumberValue === "number") {
            setInputNumber(props.inputNumberValue);
        } else {
            setInputNumber("");
        }
    }, [
        props.inputNumberValue,
        props.inputDateValue
    ]);
    // Functions
    const onNumberChange = (event)=>{
        // Accepts only integer or decimal input
        const regex = /^[0-9]*\.?[0-9]*$/;
        if (regex.test(event.target.value)) {
            setInputNumber(event.target.value);
        }
    };
    (0,external_react_.useImperativeHandle)(ref, ()=>({
            clear () {
                setInputDate("");
                setInputNumber("");
            }
        }));
    const onDateChange = (event)=>{
        setInputDate(event.target.value);
    };
    const onSubmit = ()=>{
        const date = new Date(inputDate);
        const timeZoneOffset = date.getTimezoneOffset();
        date.setMinutes(date.getMinutes() + timeZoneOffset);
        props.onSubmit(parseFloat(inputNumber), date);
    // Here you can perform any necessary actions with the input data, such as sending it to a backend server
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: props.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                container: true,
                spacing: 2,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 5,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                            label: props.inputNumberText,
                            variant: "outlined",
                            type: "text",
                            value: inputNumber,
                            onChange: onNumberChange,
                            fullWidth: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 5,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                            label: "Date Input",
                            variant: "outlined",
                            type: "date",
                            value: inputDate,
                            onChange: onDateChange,
                            fullWidth: true,
                            InputLabelProps: {
                                shrink: true
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 2,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
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
DataInput0.defaultProps = {
    inputNumberText: "Number Input",
    onSubmit: null,
    buttonText: "Submit",
    title: "Title",
    inputNumberValue: "",
    inputDateValue: ""
};
DataInput0.propTypes = {
    inputNumberText: (external_prop_types_default()).string,
    onSubmit: (external_prop_types_default()).func,
    buttonText: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string,
    inputNumberValue: (external_prop_types_default()).any,
    inputDateValue: (external_prop_types_default()).any
} /**
console.log("")
 */ ;

// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__(7915);
;// CONCATENATED MODULE: ./src/components/Common/Table0/Table0.tsx






const Table0 = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.TableContainer, {
        component: material_.Paper,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Table, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableHead, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                        children: [
                            props.headers.map((header, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                    children: header
                                }, index)),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {})
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableBody, {
                    children: props.rows.map((row, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                            children: [
                                row.map((cell, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                        children: cell
                                    }, index)),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableCell, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                            "aria-label": "edit",
                                            onClick: ()=>props.onEdit({
                                                    index,
                                                    row
                                                }),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.Edit, {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                            "aria-label": "delete",
                                            onClick: ()=>props.onRemove({
                                                    index,
                                                    row
                                                }),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.Delete, {})
                                        })
                                    ]
                                })
                            ]
                        }, index))
                })
            ]
        })
    });
};
Table0.defaultProps = {
    // headers: ['Name', 'Age', 'Gender'],
    // rows: [
    //     ['John Doe', 30, 'Male'],
    //     ['Jane Doe', 25, 'Female'],
    //     ['Bob Smith', 40, 'Male'],
    // ]
    headers: null,
    rows: null
};
Table0.propTypes = {
    headers: external_prop_types_default().arrayOf((external_prop_types_default()).string).isRequired,
    rows: external_prop_types_default().arrayOf(external_prop_types_default().arrayOf((external_prop_types_default()).node)).isRequired,
    onEdit: (external_prop_types_default()).func,
    onRemove: (external_prop_types_default()).func
};

// EXTERNAL MODULE: ./src/components/Common/DataInput1/DataInput1.tsx
var DataInput1 = __webpack_require__(2853);
;// CONCATENATED MODULE: ./src/components/Common/DataInput2/DataInput2.tsx





const DataInput2 = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const [numberValue, setNumberValue] = (0,external_react_.useState)("");
    const [dateValue, setDateValue] = (0,external_react_.useState)("");
    const onNumberChange = (event)=>{
        // Accepts only integer or decimal input
        const regex = /^[0-9]*\.?[0-9]*$/;
        if (regex.test(event.target.value)) {
            props.onNumberChange(parseFloat(event.target.value));
            setNumberValue(event.target.value);
        }
    };
    const onDateChange = (event)=>{
        if (event.target.value != "") {
            const date = new Date(event.target.value);
            const timeZoneOffset = date.getTimezoneOffset();
            date.setMinutes(date.getMinutes() + timeZoneOffset);
            setDateValue(date.toISOString().split("T")[0]);
            props.onDateChange(date);
        } else {
            setDateValue("");
        }
    };
    (0,external_react_.useImperativeHandle)(ref, ()=>({
            setNumber (value) {
                setNumberValue(value);
            },
            setDate (date) {
                setDateValue(date.toISOString().split("T")[0]);
            },
            clear () {
                setNumberValue("");
                setDateValue("");
            }
        }));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: props.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                container: true,
                spacing: 2,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                            label: props.inputNumberText,
                            variant: "outlined",
                            type: "text",
                            value: numberValue,
                            onChange: onNumberChange,
                            fullWidth: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                            label: "Date Input",
                            variant: "outlined",
                            type: "date",
                            value: dateValue,
                            onChange: onDateChange,
                            fullWidth: true,
                            InputLabelProps: {
                                shrink: true
                            }
                        })
                    })
                ]
            })
        ]
    });
});
DataInput2.defaultProps = {
    inputNumberText: "Number Input",
    title: "Title",
    onNumberChange: null,
    onDateChange: null
};
DataInput2.propTypes = {
    inputNumberText: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string,
    onNumberChange: (external_prop_types_default()).func,
    onDateChange: (external_prop_types_default()).func
} /**
const onAction = () => {

}
console.log("")
console.log(": ", )

 */ ;

;// CONCATENATED MODULE: ./src/components/Common/MessageBox/MessageBox.tsx





const MessageBox = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Dialog, {
            open: props.open,
            onClose: ()=>props.setOpen(false),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogTitle, {
                    children: "Warning"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogContent, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        container: true,
                        direction: "column",
                        sx: {
                            my: 2
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                sx: {
                                    my: 2
                                },
                                children: props.text
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                item: true,
                                sx: {
                                    my: 2
                                },
                                display: "flex",
                                flexDirection: "row-reverse",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        variant: "contained",
                                        onClick: props.onYes,
                                        sx: {
                                            mr: 1
                                        },
                                        children: "Yes"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        variant: "contained",
                                        onClick: props.onNo,
                                        sx: {
                                            mr: 1
                                        },
                                        children: "No"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
MessageBox.defaultProps = {
    open: true,
    setOpen: null,
    onYes: null,
    onNo: null,
    text: "Message"
};
MessageBox.propTypes = {
    open: (external_prop_types_default()).bool,
    setOpen: (external_prop_types_default()).func,
    onYes: (external_prop_types_default()).func,
    onNo: (external_prop_types_default()).func,
    text: (external_prop_types_default()).string
};

;// CONCATENATED MODULE: ./src/components/Desktop/InflationAdmin/UpdateInflation/UpdateInflationDesktop.tsx






const UpdateInflationDesktop = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const [open, setOpen] = (0,external_react_.useState)(false);
    const dataInputRef = (0,external_react_.useRef)(null);
    const [inflation, setInflationIntern] = (0,external_react_.useState)(null);
    const onUpdate = ()=>{
        openConfirmationMessage();
    };
    const openConfirmationMessage = ()=>{
        setOpen(true);
    };
    const onNoConfirmation = ()=>{
        setOpen(false);
    };
    const onYesConfirmation = ()=>{
        setOpen(false);
        props.onUpdate(inflation);
    };
    (0,external_react_.useEffect)(()=>{
        if (props.inflation != null) {
            setInflationIntern({
                id: props.inflation.id,
                date: props.inflation.date,
                value: props.inflation.value
            });
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (inflation != null) {
            dataInputRef.current.setDate(inflation.date);
            dataInputRef.current.setNumber(inflation.value);
        }
    }, [
        inflation
    ]);
    (0,external_react_.useImperativeHandle)(ref, ()=>({
            setInflation (inflation) {
                console.log("setInflation");
                console.log("inflation: ", inflation);
                setInflationIntern(inflation);
                dataInputRef.current.setDate(inflation.date);
                dataInputRef.current.setNumber(inflation.value);
            }
        }));
    const onDateChange = (date)=>{
        setInflationIntern({
            id: inflation.id,
            date: date,
            value: inflation.value
        });
    };
    const onNumberChange = (number)=>{
        setInflationIntern({
            id: inflation.id,
            date: inflation.date,
            value: number
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                container: true,
                direction: "column",
                sx: {
                    my: 2
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        sx: {
                            my: 2
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(DataInput2, {
                            ref: dataInputRef,
                            inputNumberText: "Inflation %",
                            onDateChange: onDateChange,
                            onNumberChange: onNumberChange,
                            title: ""
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        item: true,
                        sx: {
                            my: 2
                        },
                        display: "flex",
                        flexDirection: "row-reverse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                variant: "contained",
                                onClick: props.onCancel,
                                sx: {
                                    mr: 1
                                },
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                variant: "contained",
                                onClick: onUpdate,
                                sx: {
                                    mr: 1
                                },
                                children: "Update"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MessageBox, {
                open: open,
                setOpen: setOpen,
                onYes: onYesConfirmation,
                onNo: onNoConfirmation,
                text: "Are you sure you want to update this record?"
            })
        ]
    });
});
UpdateInflationDesktop.defaultProps = {
    inflation: null,
    onUpdate: null,
    onCancel: null
};
UpdateInflationDesktop.propTypes = {
    inflation: (external_prop_types_default()).any,
    onUpdate: (external_prop_types_default()).func,
    onCancel: (external_prop_types_default()).func
} /**
const onAction = () => {

}

console.log("")
console.log(": ", )

*/ ;

;// CONCATENATED MODULE: ./src/components/Desktop/InflationAdmin/DataSection/DataSectionDesktop.tsx










const DataSectionDesktop = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const [openUpdate, setOpenUpdate] = (0,external_react_.useState)(false);
    const [openRemove, setOpenRemove] = (0,external_react_.useState)(false);
    const [inflation, setInflation] = (0,external_react_.useState)(null);
    const [tableData, setTableData] = (0,external_react_.useState)({
        headers: [
            "Id",
            "Date",
            "Inflation %"
        ],
        rows: []
    });
    const [tableVisible, setTableVisible] = (0,external_react_.useState)(false);
    const addInputsRef = (0,external_react_.useRef)(null);
    const filterInputsRef = (0,external_react_.useRef)(null);
    const updateInflationRef = (0,external_react_.useRef)(null);
    const onAdd = async (inputNumber, inputDate)=>{
        setInflation({
            id: null,
            date: inputDate,
            value: inputNumber
        });
        props.onAdd({
            id: null,
            date: inputDate,
            value: inputNumber
        });
    };
    const onOpenUpdate = (data)=>{
        const date = new Date(data.row[1]);
        const timeZoneOffset = date.getTimezoneOffset();
        date.setMinutes(date.getMinutes() + timeZoneOffset);
        var inf = {
            id: data.row[0],
            date: date,
            value: parseFloat(data.row[2])
        };
        setInflation(inf);
        setOpenUpdate(true);
    };
    const onCancel = ()=>{
        closeDialogUpdate();
    };
    const closeDialogUpdate = ()=>{
        setOpenUpdate(false);
    };
    const onUpdate = (inflation)=>{
        closeDialogUpdate();
        props.onUpdate(inflation);
    };
    const onOpenRemove = (data)=>{
        setInflation({
            id: data.row[0],
            date: data.row[1],
            value: parseFloat(data.row[2])
        });
        setOpenRemove(true);
    };
    const onRemove = ()=>{
        closeDialogRemove();
        props.onRemove(inflation);
    };
    const closeDialogRemove = ()=>{
        setOpenRemove(false);
    };
    const createTable = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                item: true,
                xs: 12,
                sm: 6,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Results"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Table0, {
                        headers: tableData.headers,
                        rows: tableData.rows,
                        onEdit: onOpenUpdate,
                        onRemove: onOpenRemove
                    })
                ]
            })
        });
    };
    (0,external_react_.useImperativeHandle)(ref, ()=>({
            clearAdd () {
                addInputsRef.current.clear();
            },
            clearFilter () {
                filterInputsRef.current.clear();
            },
            setTableData (inflationList) {
                /**
                rows: [
                    [1, "2023-05-01", 8.5],
                    [2, "2023-06-01", 7.5],
                    [3, "2023-07-01", 4.5],
                ]
            */ const headers = [
                    "Id",
                    "Date",
                    "Inflation %"
                ];
                const rows = inflationList.map((item)=>[
                        item.id,
                        item.date.toISOString().split("T")[0],
                        item.value
                    ]);
                setTableData({
                    headers: headers,
                    rows: rows
                });
                setTableVisible(true);
            },
            getFilterData () {
                return filterInputsRef.current.getDates();
            }
        }));
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    direction: "column",
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 12,
                            sm: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(DataInput0, {
                                ref: addInputsRef,
                                inputNumberText: "Inflation %",
                                buttonText: "Add",
                                onSubmit: onAdd,
                                title: "Add new inflation data"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 12,
                            sm: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(DataInput1/* DataInput1 */.r, {
                                ref: filterInputsRef,
                                onSubmit: props.onFilter
                            })
                        }),
                        tableVisible ? createTable() : null
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Dialog, {
                    open: openUpdate,
                    onClose: ()=>setOpenUpdate(false),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogTitle, {
                            children: "Update inflation"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogContent, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(UpdateInflationDesktop, {
                                ref: updateInflationRef,
                                inflation: inflation,
                                onUpdate: onUpdate,
                                onCancel: onCancel
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(MessageBox, {
                    open: openRemove,
                    setOpen: setOpenRemove,
                    onYes: onRemove,
                    onNo: closeDialogRemove,
                    text: "Are you sure you want to delete this record?"
                })
            ]
        })
    });
});
DataSectionDesktop.defaultProps = {
    title: "Data",
    onFilter: null,
    onAdd: null,
    onUpdate: null,
    onRemove: null
};
DataSectionDesktop.propTypes = {
    title: (external_prop_types_default()).string,
    onFilter: (external_prop_types_default()).func,
    onAdd: (external_prop_types_default()).func,
    onUpdate: (external_prop_types_default()).func,
    onRemove: (external_prop_types_default()).func
} /**
const onAdd = (inputNumber: number, inputDate: Date) =>{
    //...
}

const onFilter = (startDate: Date, endDate: Date) => {
    //...
}


const onAction = () => {

}

console.log("")
console.log(": ", )

*/ ;


/***/ }),

/***/ 4814:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ InflationAdminDesktop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DataSection_DataSectionDesktop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4047);
/* harmony import */ var _ChartSection_ChartSectionDesktop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9360);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChartSection_ChartSectionDesktop__WEBPACK_IMPORTED_MODULE_5__]);
_ChartSection_ChartSectionDesktop__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const InflationAdminDesktop = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const dataSectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const onTabChange = (event, newValue)=>{
        setSelectedTab(newValue);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({
            clearAddInputs () {
                dataSectionRef.current.clearAdd();
            },
            clearFilterInputs () {
                dataSectionRef.current.clearFilter();
            },
            setTableData (inflationList) {
                dataSectionRef.current.setTableData(inflationList);
            },
            getFilterData () {
                return dataSectionRef.current.getFilterData();
            }
        }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tabs, {
                value: selectedTab,
                onChange: onTabChange,
                "aria-label": "simple tabs example",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {
                        label: "Data"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {
                        label: "Charts"
                    })
                ]
            }),
            selectedTab === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataSection_DataSectionDesktop__WEBPACK_IMPORTED_MODULE_4__/* .DataSectionDesktop */ .A, {
                ref: dataSectionRef,
                onAdd: props.onCreateInflation,
                onFilter: props.onFilterDataSection,
                onUpdate: props.onUpdateInflation,
                onRemove: props.onDeleteInflation
            }),
            selectedTab === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChartSection_ChartSectionDesktop__WEBPACK_IMPORTED_MODULE_5__/* .ChartSectionDesktop */ .t, {
                onFilter: props.onFilterChartSection,
                data: props.chartSectionData
            })
        ]
    });
});
InflationAdminDesktop.defaultProps = {
    title: "Data",
    onFilterDataSection: null,
    onCreateInflation: null,
    onUpdateInflation: null,
    onDeleteInflation: null,
    chartSectionData: null,
    onFilterChartSection: null,
    onAddChartSection: null
};
InflationAdminDesktop.propTypes = {
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    onFilterDataSection: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    onCreateInflation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    onUpdateInflation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    onDeleteInflation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    onFilterChartSection: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    onAddChartSection: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    chartsData: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3742:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LM": () => (/* binding */ deleteInflationRequest),
/* harmony export */   "Li": () => (/* binding */ updateInflationRequest),
/* harmony export */   "Qr": () => (/* binding */ readInflationRequest),
/* harmony export */   "fo": () => (/* binding */ createInflationRequest)
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

/***/ }),

/***/ 1213:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Desktop_InflationAdmin_InflationAdminDesktop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4814);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_http_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3742);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Desktop_InflationAdmin_InflationAdminDesktop__WEBPACK_IMPORTED_MODULE_1__, _api_http_requests__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Desktop_InflationAdmin_InflationAdminDesktop__WEBPACK_IMPORTED_MODULE_1__, _api_http_requests__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Admin = ()=>{
    const inflationAdminRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [start, setStart] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const onStart = async ()=>{
        const request = {
            startDate: null,
            endDate: null,
            inflation: null
        };
        const response = await (0,_api_http_requests__WEBPACK_IMPORTED_MODULE_3__/* .readInflationRequest */ .Qr)(request);
        inflationAdminRef.current.setTableData(response.inflationList);
    };
    const createInflation = async (inflation)=>{
        const request = {
            inflation: {
                id: 0,
                date: inflation.date,
                value: inflation.value
            },
            startDate: null,
            endDate: null
        };
        const response = await (0,_api_http_requests__WEBPACK_IMPORTED_MODULE_3__/* .createInflationRequest */ .fo)(request);
        if (response.message.id === 1) {
            inflationAdminRef.current.clearAddInputs();
            await refreshData();
        }
    };
    const refreshData = async ()=>{
        console.log("refreshData");
        const dates = inflationAdminRef.current.getFilterData();
        console.log("dates: ", dates);
        await readInflation(dates.date1, dates.date2);
    };
    const readInflation = async (startDate, endDate)=>{
        const request = {
            startDate: startDate,
            endDate: endDate,
            inflation: null
        };
        const response = await (0,_api_http_requests__WEBPACK_IMPORTED_MODULE_3__/* .readInflationRequest */ .Qr)(request);
        inflationAdminRef.current.setTableData(response.inflationList);
    };
    const deleteInflation = async (inflation)=>{
        console.log("deleteInflation");
        console.log("inflation: ", inflation);
        const request = {
            inflation: inflation,
            startDate: null,
            endDate: null
        };
        const response = await (0,_api_http_requests__WEBPACK_IMPORTED_MODULE_3__/* .deleteInflationRequest */ .LM)(request);
        if (response.message.id === 1) {
            inflationAdminRef.current.clearAddInputs();
            await refreshData();
        }
    };
    const updateInflation = async (inflation)=>{
        const request = {
            inflation: inflation,
            startDate: null,
            endDate: null
        };
        const response = await (0,_api_http_requests__WEBPACK_IMPORTED_MODULE_3__/* .updateInflationRequest */ .Li)(request);
        if (response.message.id === 1) {
            inflationAdminRef.current.clearAddInputs();
            await refreshData();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (start == false) {
            onStart();
            setStart(true);
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Desktop_InflationAdmin_InflationAdminDesktop__WEBPACK_IMPORTED_MODULE_1__/* .InflationAdminDesktop */ .S, {
            ref: inflationAdminRef,
            onCreateInflation: createInflation,
            onFilterDataSection: readInflation,
            onDeleteInflation: deleteInflation,
            onUpdateInflation: updateInflation
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin); /**
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