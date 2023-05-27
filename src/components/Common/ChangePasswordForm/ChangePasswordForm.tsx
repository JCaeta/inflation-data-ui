import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Typography } from '@mui/material';

export const ChangePasswordForm = (props: any) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorRepeatedPasswordMessage, setErrorRepeatedPasswordMessage] = useState('')
    const [errorRepeatedPasswordState, setErrorRepeatedPasswordState] = useState(false)
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [errorOldPasswordMessage, setErrorOldPasswordMessage] = useState('');
    const [errorOldPasswordState, setErrorOldPasswordState] = useState(false);
    const [errorRequest, setErrorRequest] = useState(false)

    useEffect(() => {
        setErrorRepeatedPassword(props.errorPasswordMismatch)
    }, [props.errorPasswordMismatch])

    useEffect(() => {
        setErrorOldPassword(props.errorOldPasswordWrong)
    }, [props.errorOldPasswordWrong])

    useEffect(() => {
        setErrorRequest(props.errorRequest)
    }, [props.errorRequest])

    const setErrorRepeatedPassword = (state: boolean) => {
        if(state){
            setErrorRepeatedPasswordState(state)
            setErrorRepeatedPasswordMessage('Password mismatch')
        } else {
            setErrorRepeatedPasswordState(state)
            setErrorRepeatedPasswordMessage('')
        }
    }

    const setErrorOldPassword = (state: boolean) => {
        if(state){
            setErrorOldPasswordState(state)
            setErrorOldPasswordMessage('Old password wrong')
        } else {
            setErrorOldPasswordState(state)
            setErrorOldPasswordMessage('')
        }
    }

    const handleOldPasswordChange = (event) => {
        setOldPassword(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleRepeatNewPasswordChange = (event) => {
        setRepeatedPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(newPassword === repeatedPassword) {
            setErrorRepeatedPassword(false)
            props.onSubmit(oldPassword, newPassword)
        } else {
            setErrorRepeatedPassword(true)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h5" gutterBottom>
                Change Password
            </Typography>
            <div>
                <TextField
                type="password"
                label="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
                margin="normal"
                error={errorOldPasswordState}
                helperText={errorOldPasswordMessage}/>
            </div>
            <div>
                <TextField
                type="password"
                label="New Password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
                margin="normal"/>
            </div>
            <div>
                <TextField
                type="password"
                label="Repeat new Password"
                value={repeatedPassword}
                onChange={handleRepeatNewPasswordChange }
                required
                margin="normal"
                error={errorRepeatedPasswordState}
                helperText={errorRepeatedPasswordMessage}/>
            </div>

            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                style={{marginRight: "10px"}}>
                Change Password
            </Button>

            <Button 
                variant="contained" 
                color="primary"
                style={{marginLeft: "10px"}}
                onClick={props.onCancel}>
                Cancel
            </Button>

            {errorRequest && (
            <Typography variant="body1" color="error" gutterBottom>
                Request failed. Please try again later.
            </Typography>)}
        </form>
    );
};
ChangePasswordForm.defaultProps = {
    onCancel: function (){},
    onSubmit: function (){},
    errorPasswordMismatch: false,
    errorOldPasswordWrong: false,
    errorRequest: false
};

ChangePasswordForm.propTypes = {
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    errorPasswordMismatch: PropTypes.bool,
    errorOldPasswordWrong: PropTypes.bool,
    errorRequest: PropTypes.bool
};

