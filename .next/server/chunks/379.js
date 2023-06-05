"use strict";
exports.id = 379;
exports.ids = [379];
exports.modules = {

/***/ 8788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ AdminProfile)
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
;// CONCATENATED MODULE: ./src/components/Common/ChangePasswordForm/ChangePasswordForm.tsx




const ChangePasswordForm = (props)=>{
    const [oldPassword, setOldPassword] = (0,external_react_.useState)("");
    const [newPassword, setNewPassword] = (0,external_react_.useState)("");
    const [errorRepeatedPasswordMessage, setErrorRepeatedPasswordMessage] = (0,external_react_.useState)("");
    const [errorRepeatedPasswordState, setErrorRepeatedPasswordState] = (0,external_react_.useState)(false);
    const [repeatedPassword, setRepeatedPassword] = (0,external_react_.useState)("");
    const [errorOldPasswordMessage, setErrorOldPasswordMessage] = (0,external_react_.useState)("");
    const [errorOldPasswordState, setErrorOldPasswordState] = (0,external_react_.useState)(false);
    const [errorRequest, setErrorRequest] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setErrorRepeatedPassword(props.errorPasswordMismatch);
    }, [
        props.errorPasswordMismatch
    ]);
    (0,external_react_.useEffect)(()=>{
        setErrorOldPassword(props.errorOldPasswordWrong);
    }, [
        props.errorOldPasswordWrong
    ]);
    (0,external_react_.useEffect)(()=>{
        setErrorRequest(props.errorRequest);
    }, [
        props.errorRequest
    ]);
    const setErrorRepeatedPassword = (state)=>{
        if (state) {
            setErrorRepeatedPasswordState(state);
            setErrorRepeatedPasswordMessage("Password mismatch");
        } else {
            setErrorRepeatedPasswordState(state);
            setErrorRepeatedPasswordMessage("");
        }
    };
    const setErrorOldPassword = (state)=>{
        if (state) {
            setErrorOldPasswordState(state);
            setErrorOldPasswordMessage("Old password wrong");
        } else {
            setErrorOldPasswordState(state);
            setErrorOldPasswordMessage("");
        }
    };
    const handleOldPasswordChange = (event)=>{
        setOldPassword(event.target.value);
    };
    const handleNewPasswordChange = (event)=>{
        setNewPassword(event.target.value);
    };
    const handleRepeatNewPasswordChange = (event)=>{
        setRepeatedPassword(event.target.value);
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        if (newPassword === repeatedPassword) {
            setErrorRepeatedPassword(false);
            props.onSubmit(oldPassword, newPassword);
        } else {
            setErrorRepeatedPassword(true);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                variant: "h5",
                gutterBottom: true,
                children: "Change Password"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                    type: "password",
                    label: "Old Password",
                    value: oldPassword,
                    onChange: handleOldPasswordChange,
                    required: true,
                    margin: "normal",
                    error: errorOldPasswordState,
                    helperText: errorOldPasswordMessage
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                    type: "password",
                    label: "New Password",
                    value: newPassword,
                    onChange: handleNewPasswordChange,
                    required: true,
                    margin: "normal"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                    type: "password",
                    label: "Repeat new Password",
                    value: repeatedPassword,
                    onChange: handleRepeatNewPasswordChange,
                    required: true,
                    margin: "normal",
                    error: errorRepeatedPasswordState,
                    helperText: errorRepeatedPasswordMessage
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                type: "submit",
                variant: "contained",
                color: "primary",
                style: {
                    marginRight: "10px"
                },
                children: "Change Password"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                variant: "contained",
                color: "primary",
                style: {
                    marginLeft: "10px"
                },
                onClick: props.onCancel,
                children: "Cancel"
            }),
            errorRequest && /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                variant: "body1",
                color: "error",
                gutterBottom: true,
                children: "Request failed. Please try again later."
            })
        ]
    });
};
ChangePasswordForm.defaultProps = {
    onCancel: function() {},
    onSubmit: function() {},
    errorPasswordMismatch: false,
    errorOldPasswordWrong: false,
    errorRequest: false
};
ChangePasswordForm.propTypes = {
    onCancel: (external_prop_types_default()).func,
    onSubmit: (external_prop_types_default()).func,
    errorPasswordMismatch: (external_prop_types_default()).bool,
    errorOldPasswordWrong: (external_prop_types_default()).bool,
    errorRequest: (external_prop_types_default()).bool
};

;// CONCATENATED MODULE: ./src/components/Common/ChangeUsernameForm/ChangeUsernameForm.tsx




const ChangeUsernameForm = (props)=>{
    const [username, setUsername] = (0,external_react_.useState)("");
    const [password, setPassword] = (0,external_react_.useState)("");
    const [usernameError, setUsernameError] = (0,external_react_.useState)("");
    const [passwordError, setPasswordError] = (0,external_react_.useState)("");
    const [errorRequest, setErrorRequest] = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        if (props.errorBadPassword) {
            setPasswordError("Incorrect password");
        } else {
            setPasswordError("");
        }
    }, [
        props.errorBadPassword
    ]);
    (0,external_react_.useEffect)(()=>{
        if (props.errorEmptyUser) {
            setUsernameError("This field cannot be empty");
        } else {
            setUsernameError("");
        }
    }, [
        props.errorEmptyUser
    ]);
    (0,external_react_.useEffect)(()=>{
        setErrorRequest(props.errorRequest);
    }, [
        props.errorRequest
    ]);
    const handleUsernameChange = (event)=>{
        setUsername(event.target.value);
    // setUsernameError('');
    };
    const handlePasswordChange = (event)=>{
        setPassword(event.target.value);
    // setPasswordError('');
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        // Perform validation
        let isValid = true;
        if (username.trim() === "") {
            setUsernameError("Username is required.");
            isValid = false;
        }
        if (password.trim() === "") {
            setPasswordError("Password is required.");
            isValid = false;
        }
        if (!isValid) {
            return; // Don't submit the form if there are errors
        }
        props.onSubmit(username, password);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                variant: "h6",
                children: [
                    "Current Username: ",
                    props.currentUsername
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                mb: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                    label: "New Username",
                    value: username,
                    onChange: handleUsernameChange,
                    required: true,
                    error: usernameError !== "" ? true : false,
                    helperText: usernameError
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                mb: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                    label: "Password",
                    type: "password",
                    value: password,
                    onChange: handlePasswordChange,
                    required: true,
                    error: passwordError !== "" ? true : false,
                    helperText: passwordError
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                display: "flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                        type: "submit",
                        variant: "contained",
                        color: "primary",
                        children: "Change Username"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                        variant: "contained",
                        color: "primary",
                        style: {
                            marginLeft: "10px"
                        },
                        onClick: props.onCancel,
                        children: "Cancel"
                    })
                ]
            }),
            errorRequest && /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                variant: "body1",
                color: "error",
                gutterBottom: true,
                children: "Request failed. Please try again later."
            })
        ]
    });
};
ChangeUsernameForm.defaultProps = {
    onCancel: function() {},
    onSubmit: function() {},
    currentUsername: "admin",
    errorBadPassword: false,
    errorEmptyUser: false,
    errorRequest: false
};
ChangeUsernameForm.propTypes = {
    currentUsername: (external_prop_types_default()).string.isRequired,
    onCancel: (external_prop_types_default()).func,
    onSubmit: (external_prop_types_default()).func,
    errorBadPassword: (external_prop_types_default()).bool,
    errorEmptyUser: (external_prop_types_default()).bool,
    errorRequest: (external_prop_types_default()).bool
};

;// CONCATENATED MODULE: ./src/components/Common/AdminProfile/AdminProfile.tsx






const AdminProfile = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const [changePassword, setChangePassword] = (0,external_react_.useState)(false);
    const [changeUsername, setChangeUsername] = (0,external_react_.useState)(false);
    const handlePasswordChange = ()=>{
        setChangePassword(true);
    };
    const handleUsernameChange = ()=>{
        setChangeUsername(true);
    };
    const onCancelChangePassword = ()=>{
        setChangePassword(false);
    };
    const onCancelChangeUsername = ()=>{
        setChangeUsername(false);
    };
    (0,external_react_.useImperativeHandle)(ref, ()=>({
            goBackToMain () {
                setChangePassword(false);
                setChangeUsername(false);
            }
        }));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            changePassword === false && changeUsername === false ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                my: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        variant: "h5",
                        gutterBottom: true,
                        children: "Admin Profile"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                        variant: "body1",
                        gutterBottom: true,
                        children: [
                            "Username: ",
                            props.username
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                        variant: "contained",
                        color: "primary",
                        onClick: handlePasswordChange,
                        sx: {
                            mr: 2
                        },
                        children: "Change Password"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                        variant: "contained",
                        color: "primary",
                        onClick: handleUsernameChange,
                        children: "Change Username"
                    })
                ]
            }) : null,
            changePassword ? /*#__PURE__*/ jsx_runtime_.jsx(ChangePasswordForm, {
                onCancel: onCancelChangePassword,
                onSubmit: props.onSubmitChangePassword,
                errorOldPasswordWrong: props.errorOldPasswordWrong,
                errorRequest: props.errorChangePasswordFailed
            }) : null,
            changeUsername ? /*#__PURE__*/ jsx_runtime_.jsx(ChangeUsernameForm, {
                onCancel: onCancelChangeUsername,
                onSubmit: props.onSubmitChangeUsername,
                errorRequest: props.errorChangeUsernameFailed,
                errorBadPassword: props.errorChangeUsernameBadPassword
            }) : null
        ]
    });
});
AdminProfile.defaultProps = {
    username: "Admin",
    onSubmitChangePassword: function() {},
    onSubmitChangeUsername: function() {},
    errorPasswordMismatch: false,
    errorOldPasswordWrong: false,
    errorChangeUsernameBadPassword: false,
    errorChangePasswordFailed: false,
    errorChangeUsernameFailed: false
};
AdminProfile.propTypes = {
    username: (external_prop_types_default()).string.isRequired,
    onSubmitChangeUsername: (external_prop_types_default()).func,
    onSubmitChangePassword: (external_prop_types_default()).func,
    errorOldPasswordWrong: (external_prop_types_default()).bool,
    errorPasswordMismatch: (external_prop_types_default()).bool,
    errorChangePasswordFailed: (external_prop_types_default()).bool,
    errorChangeUsernameFailed: (external_prop_types_default()).bool,
    errorChangeUsernameBadPassword: (external_prop_types_default()).bool
}; /**
console.log("")
console.log(":", )
console.log("  ")
*/ 


/***/ }),

/***/ 2436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ Login1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(399);
/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__);












const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__.createTheme)();
const Login1 = (props)=>{
    console.log("Login1");
    // console.log("inflation: ", inflation)
    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        props.onSignInSubmit({
            username: data.get("username"),
            password: data.get("password")
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_10___default()), {
            component: "main",
            maxWidth: "xs",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                    sx: {
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default()), {
                            sx: {
                                m: 1,
                                bgcolor: "secondary.main"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default()), {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
                            component: "h1",
                            variant: "h5",
                            children: props.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                            component: "form",
                            onSubmit: handleSubmit,
                            noValidate: true,
                            sx: {
                                mt: 1
                            },
                            children: [
                                props.usernameInputType === "email" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    margin: "normal",
                                    required: true,
                                    fullWidth: true,
                                    id: "username",
                                    label: props.usernameText,
                                    name: "username",
                                    autoComplete: "email",
                                    autoFocus: true
                                }) : null,
                                props.usernameInputType === "username" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    margin: "normal",
                                    required: true,
                                    fullWidth: true,
                                    id: "username",
                                    label: props.usernameText,
                                    name: "username",
                                    autoFocus: true
                                }) : null,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    margin: "normal",
                                    required: true,
                                    fullWidth: true,
                                    name: "password",
                                    label: "Password",
                                    type: "password",
                                    id: "password",
                                    autoComplete: "current-password"
                                }),
                                props.error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        color: "red"
                                    },
                                    children: "Error: Invalid username or password."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    type: "submit",
                                    fullWidth: true,
                                    variant: "contained",
                                    sx: {
                                        mt: 3,
                                        mb: 2
                                    },
                                    children: "Sign In"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
Login1.defaultProps = {
    onSignInSubmit: function() {},
    title: "Sign in",
    usernameText: "Username",
    usernameInputType: "email",
    error: false
};
Login1.propTypes = {
    onSignInSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
    usernameText: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
    usernameInputType: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf([
        "email",
        "username"
    ]),
    error: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
} /**
console.log("")
console.log(":", )
console.log("  ")
*/ ;


/***/ }),

/***/ 205:
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
// EXTERNAL MODULE: external "@mui/x-date-pickers/AdapterDayjs"
var AdapterDayjs_ = __webpack_require__(298);
// EXTERNAL MODULE: external "@mui/x-date-pickers/LocalizationProvider"
var LocalizationProvider_ = __webpack_require__(5753);
// EXTERNAL MODULE: external "@mui/x-date-pickers/DatePicker"
var DatePicker_ = __webpack_require__(1856);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
;// CONCATENATED MODULE: ./src/components/Common/Inputs/DataInput0/DataInput0.tsx










const DataInput0 = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const [inputNumber, setInputNumber] = (0,external_react_.useState)("");
    const [numberShrink, setNumberShrink] = (0,external_react_.useState)(false);
    const [inputDate, setInputDate] = (0,external_react_.useState)(null);
    const [spacingInputs, setSpacingInputs] = (0,external_react_.useState)(5);
    // Set value of inputNumber and inputDate
    (0,external_react_.useEffect)(()=>{
        if (props.inputDateValue instanceof Date) {
            const timeZoneOffset = props.inputDateValue.getTimezoneOffset();
            props.inputDateValue.setMinutes(props.inputDateValue.getMinutes() + timeZoneOffset);
            setInputDate(external_dayjs_default()(props.inputDateValue));
        } else {
            setInputDate("");
        }
        if (typeof props.inputNumberValue === "number") {
            setInputNumber(props.inputNumberValue);
            setNumberShrink(true);
        } else {
            setInputNumber("");
            setNumberShrink(false);
        }
    }, [
        props.inputNumberValue,
        props.inputDateValue
    ]);
    (0,external_react_.useEffect)(()=>{
        if (props.buttonSubmitVisible) {
            setSpacingInputs(5);
        } else {
            setSpacingInputs(6);
        }
    }, [
        props.buttonSubmitVisible
    ]);
    // Functions
    const onNumberChange = (event)=>{
        // Accepts only integer or decimal input
        const regex = /^[0-9]*\.?[0-9]*$/;
        if (regex.test(event.target.value)) {
            setInputNumber(event.target.value);
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (inputNumber != "") {
            setNumberShrink(true);
        } else {
            setNumberShrink(false);
        }
    }, [
        inputNumber
    ]);
    (0,external_react_.useImperativeHandle)(ref, ()=>({
            clear () {
                setInputDate("");
                setInputNumber("");
            },
            getDateValue () {
                const date = new Date(inputDate);
                const timeZoneOffset = date.getTimezoneOffset();
                date.setMinutes(date.getMinutes() + timeZoneOffset);
                return date;
            },
            getNumberValue () {
                return parseFloat(inputNumber);
            }
        }));
    const onDateChange = (date)=>{
        if (date) {
            setInputDate(date.toDate());
        } else {
            setInputDate("");
        }
    };
    const onSubmit = ()=>{
        const date = new Date(inputDate);
        const timeZoneOffset = date.getTimezoneOffset();
        date.setMinutes(date.getMinutes() + timeZoneOffset);
        props.onSubmit(parseFloat(inputNumber), date);
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
                        xs: spacingInputs,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                            label: props.inputNumberText,
                            variant: "outlined",
                            type: "text",
                            InputLabelProps: {
                                shrink: numberShrink
                            },
                            value: inputNumber ? inputNumber : "",
                            onChange: onNumberChange,
                            fullWidth: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: spacingInputs,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(LocalizationProvider_.LocalizationProvider, {
                            dateAdapter: AdapterDayjs_.AdapterDayjs,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(DatePicker_.DatePicker, {
                                sx: {
                                    width: "100%"
                                },
                                onChange: onDateChange,
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
                                value: inputDate,
                                format: "DD-MM-YYYY"
                            })
                        })
                    }),
                    props.buttonSubmitVisible ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 2,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                            variant: "contained",
                            onClick: onSubmit,
                            children: props.buttonText
                        })
                    }) : null
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
    inputDateValue: "",
    buttonSubmitVisible: true
};
DataInput0.propTypes = {
    inputNumberText: (external_prop_types_default()).string,
    onSubmit: (external_prop_types_default()).func,
    buttonText: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string,
    inputNumberValue: (external_prop_types_default()).any,
    inputDateValue: (external_prop_types_default()).any,
    buttonSubmitVisible: (external_prop_types_default()).bool
} /**
const onAction = () => {

}
console.log("")
console.log(": ", )

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

// EXTERNAL MODULE: ./src/components/Common/Inputs/DataInput1/DataInput1.tsx
var DataInput1 = __webpack_require__(6902);
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
    const [confirmation, setConfirmation] = (0,external_react_.useState)(false);
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
        const date = dataInputRef.current.getDateValue();
        const num = dataInputRef.current.getNumberValue();
        setInflationIntern({
            id: inflation.id,
            date: date,
            value: num
        });
        setConfirmation(true);
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
        if (confirmation) {
            props.onUpdate(inflation);
        }
        setConfirmation(false);
    }, [
        inflation,
        confirmation
    ]);
    (0,external_react_.useImperativeHandle)(ref, ()=>({
            setInflation (inflation) {
                setInflationIntern(inflation);
            }
        }));
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
                        children: /*#__PURE__*/ jsx_runtime_.jsx(DataInput0, {
                            ref: dataInputRef,
                            inputNumberText: "Inflation %",
                            title: "",
                            buttonSubmitVisible: false,
                            inputNumberValue: inflation?.value || null,
                            inputDateValue: inflation?.date || ""
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
            // setTableData(inflationList: any){
            //     /**
            //         rows: [
            //             [1, "2023-05-01", 8.5],
            //             [2, "2023-06-01", 7.5],
            //             [3, "2023-07-01", 4.5],
            //         ]
            //     */
            //     const headers =  ["Id", "Date", "Inflation %"]
            //     const rows = inflationList.map((item) => [
            //         item.id, item.date.toISOString().split('T')[0], item.value
            //     ]);
            //     setTableData({headers: headers, rows: rows})
            //     setTableVisible(true)
            // },
            getFilterData () {
                return filterInputsRef.current.getDates();
            }
        }));
    (0,external_react_.useEffect)(()=>{
        /**
            rows: [
                [1, "2023-05-01", 8.5],
                [2, "2023-06-01", 7.5],
                [3, "2023-07-01", 4.5],
            ]
        */ console.log("useEffect DataSectionDesktop");
        console.log("props.inflationList: ", props.inflationList);
        console.log("  ");
        if (props.inflationList != null) {
            const headers = [
                "Id",
                "Date",
                "Inflation %"
            ];
            const rows = props.inflationList.map((item)=>[
                    item.id,
                    item.date.toISOString().split("T")[0],
                    item.value
                ]);
            setTableData({
                headers: headers,
                rows: rows
            });
            setTableVisible(true);
        }
    }, [
        props.inflationList
    ]);
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
    onRemove: null,
    inflationList: null
};
DataSectionDesktop.propTypes = {
    title: (external_prop_types_default()).string,
    onFilter: (external_prop_types_default()).func,
    onAdd: (external_prop_types_default()).func,
    onUpdate: (external_prop_types_default()).func,
    onRemove: (external_prop_types_default()).func,
    inflationList: (external_prop_types_default()).any
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
/* harmony import */ var _DataSection_DataSectionDesktop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(205);
/* harmony import */ var _ChartSection_ChartSectionDesktop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(685);
/* harmony import */ var _Common_AdminProfile_AdminProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8788);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChartSection_ChartSectionDesktop__WEBPACK_IMPORTED_MODULE_5__]);
_ChartSection_ChartSectionDesktop__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const InflationAdminDesktop = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const dataSectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const chartSectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const adminSectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [chartsData, setChartsData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const onTabChange = (event, newValue)=>{
        setSelectedTab(newValue);
        props.onTabChange(newValue);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({
            clearAddInputs () {
                dataSectionRef.current.clearAdd();
            },
            clearFilterDataSection () {
                dataSectionRef.current.clearFilter();
            },
            getFilterDataSection () {
                if (selectedTab === 0) {
                    return dataSectionRef.current.getFilterData();
                } else {
                    return null;
                }
            },
            getFilterChartsSection () {
                if (selectedTab === 1) {
                    return chartSectionRef.current.getFilterData();
                } else {
                    return null;
                }
            },
            setChartsData (data) {
                setChartsData(data);
            },
            adminGoBack () {
                adminSectionRef.current.goBackToMain();
            }
        }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
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
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {
                                label: "Admin"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        variant: "contained",
                        color: "primary",
                        onClick: props.onLogout,
                        children: "Logout"
                    })
                ]
            }),
            selectedTab === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataSection_DataSectionDesktop__WEBPACK_IMPORTED_MODULE_4__/* .DataSectionDesktop */ .A, {
                ref: dataSectionRef,
                onAdd: props.onCreateInflation,
                onFilter: props.onFilterDataSection,
                onUpdate: props.onUpdateInflation,
                onRemove: props.onDeleteInflation,
                inflationList: props.tableData
            }),
            selectedTab === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChartSection_ChartSectionDesktop__WEBPACK_IMPORTED_MODULE_5__/* .ChartSectionDesktop */ .t, {
                ref: chartSectionRef,
                onFilter: props.onFilterChartSection,
                data: chartsData
            }),
            selectedTab === 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_AdminProfile_AdminProfile__WEBPACK_IMPORTED_MODULE_6__/* .AdminProfile */ .F, {
                ref: adminSectionRef,
                errorOldPasswordWrong: props.errorOldPasswordWrong,
                onSubmitChangePassword: props.onSubmitChangePassword,
                onSubmitChangeUsername: props.onSubmitChangeUsername,
                errorChangePasswordFailed: props.errorChangePassword,
                errorChangeUsernameFailed: props.errorChangeUsername,
                errorChangeUsernameBadPassword: props.errorChangeUsernameBadPassword,
                username: props.username
            })
        ]
    });
});
InflationAdminDesktop.defaultProps = {
    title: "Data",
    username: "admin",
    onFilterDataSection: null,
    onCreateInflation: null,
    onUpdateInflation: null,
    onDeleteInflation: null,
    onFilterChartSection: null,
    onAddChartSection: null,
    onTabChange: function(value) {},
    onSubmitChangeUsername: function(username, password) {},
    onSubmitChangePassword: function(oldPassword, newPassword) {},
    errorOldPasswordWrong: false,
    errorChangeUsername: false,
    errorChangePassword: false,
    errorChangeUsernameBadPassword: false,
    onLogout: function() {},
    tableData: null
};
InflationAdminDesktop.propTypes = {
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    username: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    onFilterDataSection: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    onCreateInflation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    onUpdateInflation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    onDeleteInflation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    onFilterChartSection: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    onAddChartSection: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    onTabChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    onSubmitChangeUsername: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    onSubmitChangePassword: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    errorOldPasswordWrong: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    errorChangeUsername: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    errorChangePassword: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    errorChangeUsernameBadPassword: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    onLogout: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    tableData: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any)
} /**
console.log("")
console.log(":", )
console.log("  ")
*/ ;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8379:
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
/* harmony import */ var _components_Common_Login1_Login1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2436);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Common_ClosedPage_ClosedPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8060);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Desktop_InflationAdmin_InflationAdminDesktop__WEBPACK_IMPORTED_MODULE_1__, _api_http_requests__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Desktop_InflationAdmin_InflationAdminDesktop__WEBPACK_IMPORTED_MODULE_1__, _api_http_requests__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Admin = ()=>{
    const inflationAdminRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [start, setStart] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [logged, setLogged] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [oldPasswordError, setOldPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [errorChangePassword, setErrorChangePassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [errorChangeUsername, setErrorChangeUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [errorChangeUsernameBadPassword, setErrorChangeUsernameBadPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [signInError, setSignInError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [tableData, setTableData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const [closeSite, setCloseSite] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const verifyClosedSite = (message)=>{
        if (message.id !== -2) {
            return true;
        } else {
            setCloseSite(true);
            return false;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (logged && start === false) {
            onStart();
            setStart(true);
        }
    }, [
        logged
    ]);
    const onStart = async ()=>{
        console.log("onStart");
        // Get inflation data
        const requestInflation = {
            startDate: null,
            endDate: null,
            inflation: null,
            token: null
        };
        const responseInflation = await (0,_api_http_requests__WEBPACK_IMPORTED_MODULE_3__/* .readInflationRequest */ .Qr)(requestInflation);
        console.log("responseInflation: ", responseInflation);
        if (verifyClosedSite(responseInflation.message)) {
            setTableData(responseInflation.inflationList);
            // inflationAdminRef.current.setTableData(responseInflation.inflationList);
            getChartsData(null, null);
        }
    };
    const getChartsData = async (startDate, endDate)=>{
        const requestCharts = {
            startDate: startDate,
            endDate: endDate
        };
        const responseCharts = await (0,_api_http_requests__WEBPACK_IMPORTED_MODULE_3__/* .getChartsDataRequest */ .Rv)(requestCharts);
        if (verifyClosedSite(responseCharts.message)) {
            inflationAdminRef.current.setChartsData({
                barChartData: responseCharts.barChartData,
                lineChartData: responseCharts.lineChartData
            });
        }
    };
    const createInflation = async (inflation)=>{
        const request = {
            inflation: {
                id: 0,
                date: inflation.date,
                value: inflation.value
            },
            startDate: null,
            endDate: null,
            token: token
        };
        const response = await (0,_api_http_requests__WEBPACK_IMPORTED_MODULE_3__/* .createInflationRequest */ .fo)(request);
        if (verifyClosedSite(response.message)) {
            if (response.message.id === 1) {
                inflationAdminRef.current.clearAddInputs();
                setToken(response.token);
                await refreshData();
            } else {}
        }
    };
    const refreshData = async ()=>{
        const dates = inflationAdminRef.current.getFilterDataSection();
        await readInflation(dates.date1, dates.date2);
    };
    const readInflation = async (startDate, endDate)=>{
        console.log("readInflation");
        const request = {
            startDate: startDate,
            endDate: endDate,
            inflation: null,
            token: token
        };
        console.log("request: ", request);
        const response = await (0,_api_http_requests__WEBPACK_IMPORTED_MODULE_3__/* .readInflationRequest */ .Qr)(request);
        console.log("response: ", response);
        if (verifyClosedSite(response.message)) {
            setToken(response.token);
            setTableData(response.inflationList);
        // inflationAdminRef.current.setTableData(response.inflationList);
        }
    };
    const deleteInflation = async (inflation)=>{
        const request = {
            inflation: inflation,
            startDate: null,
            endDate: null,
            token: token
        };
        const response = await (0,_api_http_requests__WEBPACK_IMPORTED_MODULE_3__/* .deleteInflationRequest */ .LM)(request);
        if (verifyClosedSite(response.message)) {
            if (response.message.id === 1) {
                inflationAdminRef.current.clearAddInputs();
                setToken(response.token);
                await refreshData();
            }
        }
    };
    const updateInflation = async (inflation)=>{
        const request = {
            inflation: inflation,
            startDate: null,
            endDate: null,
            token: token
        };
        const response = await (0,_api_http_requests__WEBPACK_IMPORTED_MODULE_3__/* .updateInflationRequest */ .Li)(request);
        if (verifyClosedSite(response.message)) {
            if (response.message.id === 1) {
                inflationAdminRef.current.clearAddInputs();
                setToken(response.token);
                await refreshData();
            }
        }
    };
    // useEffect(() => {
    //     if(logged){
    //         onStart()
    //         setStart(true)
    //     }
    // })
    const onFilterChartsSection = async (startDate, endDate)=>{
        getChartsData(startDate, endDate);
    };
    const onSignInSubmit = async (data)=>{
        if (logged === false) {
            const request = {
                username: data.username,
                oldPassword: "",
                password: data.password,
                token: ""
            };
            const response = await (0,_api_http_requests__WEBPACK_IMPORTED_MODULE_3__/* .signInAdminRequest */ .o9)(request);
            if (verifyClosedSite(response.message)) {
                if (response.message.id === 1) {
                    setLogged(true);
                    setSignInError(false);
                    setToken(response.token);
                    setUsername(data.username);
                } else {
                    setLogged(false);
                    setSignInError(true);
                }
            }
        }
    };
    const onSubmitChangePassword = async (oldPassword, newPassword)=>{
        const request = {
            username: "",
            oldPassword: oldPassword,
            password: newPassword,
            token: token
        };
        const response = await (0,_api_http_requests__WEBPACK_IMPORTED_MODULE_3__/* .changeAdminPasswordRequest */ .XK)(request);
        if (verifyClosedSite(response.message)) {
            if (response.message.id === 1) {
                inflationAdminRef.current.adminGoBack();
                setOldPasswordError(false);
                setToken(response.token);
                setErrorChangePassword(false);
            } else if (response.message.id === -7) {
                setOldPasswordError(true);
                setErrorChangePassword(false);
            } else {
                setErrorChangePassword(true);
                setOldPasswordError(false);
            }
        }
    };
    const onSubmitChangeUsername = async (newUsername, password)=>{
        const request = {
            username: newUsername,
            oldPassword: "",
            password: password,
            token: token
        };
        const response = await (0,_api_http_requests__WEBPACK_IMPORTED_MODULE_3__/* .changeAdminUsernameRequest */ .fu)(request);
        if (verifyClosedSite(response.message)) {
            if (response.message.id === 1) {
                inflationAdminRef.current.adminGoBack();
                setUsername(newUsername);
                setToken(response.token);
                setErrorChangeUsernameBadPassword(false);
                setErrorChangeUsername(false);
            } else if (response.message.id === -7) {
                setErrorChangeUsernameBadPassword(true);
                setErrorChangeUsername(false);
            } else {
                setErrorChangeUsername(true);
                setErrorChangeUsernameBadPassword(false);
            }
        }
    };
    const onLogout = ()=>{
        setToken("");
        setLogged(false);
        setStart(false);
        router.replace("/");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: closeSite ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_ClosedPage_ClosedPage__WEBPACK_IMPORTED_MODULE_6__/* .ClosedPage */ .e, {}) : logged ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Desktop_InflationAdmin_InflationAdminDesktop__WEBPACK_IMPORTED_MODULE_1__/* .InflationAdminDesktop */ .S, {
            ref: inflationAdminRef,
            onCreateInflation: createInflation,
            onFilterDataSection: readInflation,
            onDeleteInflation: deleteInflation,
            onUpdateInflation: updateInflation,
            onFilterChartSection: onFilterChartsSection,
            onSubmitChangePassword: onSubmitChangePassword,
            onSubmitChangeUsername: onSubmitChangeUsername,
            errorOldPasswordWrong: oldPasswordError,
            errorChangeUsername: errorChangeUsername,
            errorChangePassword: errorChangePassword,
            username: username,
            tableData: tableData,
            errorChangeUsernameBadPassword: errorChangeUsernameBadPassword,
            onLogout: onLogout
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_Login1_Login1__WEBPACK_IMPORTED_MODULE_4__/* .Login1 */ .O, {
            onSignInSubmit: onSignInSubmit,
            error: signInError
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