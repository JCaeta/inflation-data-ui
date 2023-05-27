import React, {useState, forwardRef, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Box } from '@mui/material';
import { ChangePasswordForm } from '../ChangePasswordForm/ChangePasswordForm';
import { ChangeUsernameForm } from '../ChangeUsernameForm/ChangeUsernameForm';

export const AdminProfile = forwardRef((props: any, ref: any) => {
    const [changePassword, setChangePassword] = useState(false)
    const [changeUsername, setChangeUsername] = useState(false)

    const handlePasswordChange = () => {
        setChangePassword(true)
    };

    const handleUsernameChange = () => {
        setChangeUsername(true)
    };

    const onCancelChangePassword = () => {
        setChangePassword(false)
    }

    const onCancelChangeUsername = () => {
        setChangeUsername(false)
    }

    useImperativeHandle(ref, () => ({
        goBackToMain(){
            setChangePassword(false);
            setChangeUsername(false);
        },
    }))

    return (<>
        {changePassword === false && changeUsername === false?
            <Box my={2}>
                <Typography variant="h5" gutterBottom>
                    Admin Profile
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Username: {props.username}
                </Typography>
                <Button variant="contained" color="primary" onClick={handlePasswordChange} sx={{ mr: 2 }}>
                    Change Password
                </Button>
                <Button variant="contained" color="primary" onClick={handleUsernameChange}>
                    Change Username
                </Button>
            </Box>
        : null}

        {changePassword?
            <ChangePasswordForm 
                onCancel={onCancelChangePassword}
                onSubmit={props.onSubmitChangePassword}
                errorOldPasswordWrong={props.errorOldPasswordWrong}
                errorRequest={props.errorChangePasswordFailed}/>
        : null}

        {changeUsername?
            <ChangeUsernameForm 
                onCancel={onCancelChangeUsername}
                onSubmit={props.onSubmitChangeUsername}
                errorRequest={props.errorChangeUsernameFailed}
                errorBadPassword={props.errorChangeUsernameBadPassword}/>
        : null}
    </>);
});

AdminProfile.defaultProps = {
    username: 'Admin',
    onSubmitChangePassword: function(){},
    onSubmitChangeUsername: function(){},
    errorPasswordMismatch: false,
    errorOldPasswordWrong: false,
    errorChangeUsernameBadPassword: false,
    errorChangePasswordFailed: false,
    errorChangeUsernameFailed: false,
};

AdminProfile.propTypes = {
    username: PropTypes.string.isRequired,
    onSubmitChangeUsername: PropTypes.func,
    onSubmitChangePassword : PropTypes.func,
    errorOldPasswordWrong: PropTypes.bool,
    errorPasswordMismatch: PropTypes.bool,
    errorChangePasswordFailed: PropTypes.bool,
    errorChangeUsernameFailed: PropTypes.bool,
    errorChangeUsernameBadPassword: PropTypes.bool,
};

/**
console.log("")
console.log(":", )
console.log("  ")
*/