import styles from './DataInput0.module.scss';
import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';

export const DataInput0 = forwardRef((props: any, ref: any) => {
    const [inputNumber, setInputNumber] = useState(props.inputNumberValue);
    const [inputDate, setInputDate] = useState(props.inputDateValue);

    // Set value of inputNumber and inputDate
    useEffect(() => {
        if(props.inputDateValue instanceof Date){
            setInputDate(props.inputDateValue.toISOString().split('T')[0]); // ''yyyy-MM-dd'
        } else{
            setInputDate('')
        }

        if (typeof props.inputNumberValue === "number") {
            setInputNumber(props.inputNumberValue)
        } else {
            setInputNumber('')
        }
    }, [props.inputNumberValue, props.inputDateValue])

    // Functions
    const onNumberChange = (event: any) => {
        // Accepts only integer or decimal input
        const regex = /^[0-9]*\.?[0-9]*$/;
        if (regex.test(event.target.value)) {
            setInputNumber(event.target.value);
        }
    };

    useImperativeHandle(ref, () => ({
        clear(){
            setInputDate('')
            setInputNumber('')
        }
    }))

    const onDateChange = (event: any) => {
        setInputDate(event.target.value);
    };
  
    const onSubmit = () => {
        const date = new Date(inputDate);
        const timeZoneOffset = date.getTimezoneOffset();
        date.setMinutes(date.getMinutes() + timeZoneOffset);
        props.onSubmit(parseFloat(inputNumber), date);
        // Here you can perform any necessary actions with the input data, such as sending it to a backend server
    };
  
    return (<>
        <h2>{props.title}</h2>
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={5}>
                <TextField
                    label={props.inputNumberText}
                    variant="outlined"
                    type="text"
                    value={inputNumber}
                    onChange={onNumberChange}
                    fullWidth/>
            </Grid>
            <Grid item xs={5}>
                <TextField
                    label="Date Input"
                    variant="outlined"
                    type="date"
                    value={inputDate}
                    onChange={onDateChange}
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}/>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" onClick={onSubmit}>
                    {props.buttonText}
                </Button>
            </Grid>
        </Grid>
    </>);
});

DataInput0.defaultProps =
{
    inputNumberText: 'Number Input',
    onSubmit: null,
    buttonText: 'Submit',
    title: 'Title',
    inputNumberValue: '',
    inputDateValue: ''

}

DataInput0.propTypes = 
{
    inputNumberText: PropTypes.string,
    onSubmit: PropTypes.func,
    buttonText: PropTypes.string,
    title: PropTypes.string,
    inputNumberValue: PropTypes.any,
    inputDateValue: PropTypes.any
}

/**
console.log("")
 */
