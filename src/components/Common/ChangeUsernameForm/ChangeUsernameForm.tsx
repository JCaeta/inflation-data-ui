import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography, TextField, Button, Box } from '@mui/material';

export const ChangeUsernameForm = (props: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [errorRequest, setErrorRequest] = useState('');

    useEffect(() => {
        if(props.errorBadPassword){
            setPasswordError('Incorrect password')
        }else {
            setPasswordError('')
        }

    }, [props.errorBadPassword])

    useEffect(() => {
        if(props.errorEmptyUser){
            setUsernameError('This field cannot be empty')
        }else {
            setUsernameError('')
        }

    }, [props.errorEmptyUser])

    useEffect(() => {
        setErrorRequest(props.errorRequest)
    }, [props.errorRequest])



    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        // setUsernameError('');
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        // setPasswordError('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform validation
        let isValid = true;

        if (username.trim() === '') {
        setUsernameError('Username is required.');
        isValid = false;
        }

        if (password.trim() === '') {
        setPasswordError('Password is required.');
        isValid = false;
        }

        if (!isValid) {
        return; // Don't submit the form if there are errors
        }

        props.onSubmit(username, password)
  };

  return (
    <form onSubmit={handleSubmit}>
        <Typography variant="h6">Current Username: {props.currentUsername}</Typography>

        <Box mb={2}>
            <TextField
            label="New Username"
            value={username}
            onChange={handleUsernameChange}
            required
            error={usernameError !== ''? true:false}
            helperText={usernameError}
            />
        </Box>

        <Box mb={2}>
            <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            error={passwordError !== ''? true:false}
            helperText={passwordError}
            />
        </Box>

        <Box display="flex">
            <Button type="submit" variant="contained" color="primary">
            Change Username
            </Button>

            <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: '10px' }}
            onClick={props.onCancel}
            >
            Cancel
            </Button>
        </Box>

        {errorRequest && (
        <Typography variant="body1" color="error" gutterBottom>
            Request failed. Please try again later.
        </Typography>)}
    </form>
  );
};

ChangeUsernameForm.defaultProps = {
    onCancel: function () {},
    onSubmit: function () {},
    currentUsername: 'admin',
    errorBadPassword: false,
    errorEmptyUser: false,
    errorRequest: false
};

ChangeUsernameForm.propTypes = {
    currentUsername: PropTypes.string.isRequired,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    errorBadPassword: PropTypes.bool,
    errorEmptyUser: PropTypes.bool,
    errorRequest: PropTypes.bool
};