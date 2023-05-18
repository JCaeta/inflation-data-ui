import styles from './DataInput2.module.scss';
import React, {useState, forwardRef, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';

export const DataInput2 = forwardRef((props: any, ref: any) => {
    const [numberValue, setNumberValue] = useState('')
    const [dateValue, setDateValue] = useState('')

    const onNumberChange = (event: any) => {
        // Accepts only integer or decimal input
        const regex = /^[0-9]*\.?[0-9]*$/;
        if (regex.test(event.target.value)) {
            props.onNumberChange(parseFloat(event.target.value))
            setNumberValue(event.target.value)
        }
    };

    const onDateChange = (event: any) => {
        if(event.target.value != '')
        {
            const date = new Date(event.target.value);
            const timeZoneOffset = date.getTimezoneOffset();
            date.setMinutes(date.getMinutes() + timeZoneOffset);
            setDateValue(date.toISOString().split('T')[0])
            props.onDateChange(date);
        } else
        {
            setDateValue('')
        }
    };
  
    useImperativeHandle(ref, () => ({
        setNumber(value: any){
            setNumberValue(value)
        },

        setDate(date: Date) {
            setDateValue(date.toISOString().split('T')[0])
        },
        
        clear(){
            setNumberValue('')
            setDateValue('')
        }
    }))

    return (<>
        <h2>{props.title}</h2>
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
                <TextField
                    label={props.inputNumberText}
                    variant="outlined"
                    type="text"
                    value={numberValue}
                    onChange={onNumberChange}
                    fullWidth/>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Date Input"
                    variant="outlined"
                    type="date"
                    value={dateValue}
                    onChange={onDateChange}
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}/>
            </Grid>
        </Grid>
    </>);
})

DataInput2.defaultProps =
{
    inputNumberText: 'Number Input',
    title: 'Title',
    onNumberChange: null,
    onDateChange: null,
}

DataInput2.propTypes = 
{
    inputNumberText: PropTypes.string,
    title: PropTypes.string,
    onNumberChange: PropTypes.func,
    onDateChange: PropTypes.func,
}


/**
const onAction = () => {

}
console.log("")
console.log(": ", )

 */