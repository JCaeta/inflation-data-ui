import styles from './DataInput0.module.scss';
import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

export const DataInput0 = forwardRef((props: any, ref: any) => {
    const [inputNumber, setInputNumber] = useState('');
    const [numberShrink, setNumberShrink] = useState(false);
    const [inputDate, setInputDate] = useState(null);
    const [spacingInputs, setSpacingInputs] = useState(5)
    
    // Set value of inputNumber and inputDate
    useEffect(() => {
        if (props.inputDateValue instanceof Date) {
            const timeZoneOffset = props.inputDateValue.getTimezoneOffset();
            props.inputDateValue.setMinutes(props.inputDateValue.getMinutes() + timeZoneOffset);
            setInputDate(dayjs(props.inputDateValue))
          } else {
            setInputDate('');
          }

        if (typeof props.inputNumberValue === "number") {
            setInputNumber(props.inputNumberValue)
            setNumberShrink(true)
        } else {
            setInputNumber('')
            setNumberShrink(false)
        }
    }, [props.inputNumberValue, props.inputDateValue])

    useEffect(() => {
        if(props.buttonSubmitVisible){
            setSpacingInputs(5)
        } else {
            setSpacingInputs(6)
        }

    }, [props.buttonSubmitVisible])


    // Functions
    const onNumberChange = (event: any) => {
        // Accepts only integer or decimal input
        const regex = /^[0-9]*\.?[0-9]*$/;
        if (regex.test(event.target.value)) {
            setInputNumber(event.target.value);
        }
    };

    useEffect(() => {
        if(inputNumber != ''){
            setNumberShrink(true)
        } else {
            setNumberShrink(false)
        }
    }, [inputNumber])

    useImperativeHandle(ref, () => ({
        clear(){
            setInputDate('')
            setInputNumber('')
        },
        getDateValue(){
            const date = new Date(inputDate);
            const timeZoneOffset = date.getTimezoneOffset();
            date.setMinutes(date.getMinutes() + timeZoneOffset);
            return date
        },

        getNumberValue(){
            return parseFloat(inputNumber);
        }
    }))

    const onDateChange = (date: any) => {
        if (date) {
          setInputDate(date.toDate());
        } else {
          setInputDate('');
        }
      };
  
    const onSubmit = () => {
        const date = new Date(inputDate);
        const timeZoneOffset = date.getTimezoneOffset();
        date.setMinutes(date.getMinutes() + timeZoneOffset);
        props.onSubmit(parseFloat(inputNumber), date);
    };
  
    return (<>
        <h2>{props.title}</h2>
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={spacingInputs}>
                <TextField
                    label={props.inputNumberText}
                    variant="outlined"
                    type="text"
                    InputLabelProps={{ shrink: numberShrink }}
                    value={inputNumber ? inputNumber : ''}
                    onChange={onNumberChange}
                    fullWidth/>
            </Grid>
            <Grid item xs={spacingInputs}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        sx={{ width: '100%' }}
                        onChange={onDateChange}
                        slotProps={{
                            textField: {
                              error: false,
                              
                            },
                            actionBar: {
                                actions: ['clear'],
                            }
                        }}

                        value={inputDate}
                        format="DD-MM-YYYY"/>
                </LocalizationProvider>
            </Grid>
            {props.buttonSubmitVisible?
                <Grid item xs={2}>
                    <Button variant="contained" onClick={onSubmit}>
                        {props.buttonText}
                    </Button>
                </Grid>:
                null
            }
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
    inputDateValue: '',
    buttonSubmitVisible: true

}

DataInput0.propTypes = 
{
    inputNumberText: PropTypes.string,
    onSubmit: PropTypes.func,
    buttonText: PropTypes.string,
    title: PropTypes.string,
    inputNumberValue: PropTypes.any,
    inputDateValue: PropTypes.any,
    buttonSubmitVisible: PropTypes.bool
}


/**
const onAction = () => {

}
console.log("")
console.log(": ", )

 */