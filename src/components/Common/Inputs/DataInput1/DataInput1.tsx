import styles from './DataInput1.module.scss';
import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';

export const DataInput1 = forwardRef((props: any, ref: any) => {
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');

    useImperativeHandle(ref, () => ({
        clear(){
            setDate1('')
            setDate2('')
        },

        setDate1(date1: Date){
            setDate1(date1.toISOString().split('T')[0])
        },

        setDate2(date2: Date){
            setDate2(date2.toISOString().split('T')[0])
        },

        getDates(){
            return buildDates()
        }
    }))

    const handleDate1 = (event: any) => {
        setDate1(event.target.value);
    };
  
    const handleDate2 = (event: any) => {
        setDate2(event.target.value);
    };
  
    const onSubmit = () => {
        const dates = buildDates()
        props.onSubmit(dates.date1, dates.date2)
    };

    const buildDates = () => {
        var d1 = null
        var d2 = null
        if(date1 != ''){
            d1 = new Date(date1);
            const timeZoneOffsetDate1 = d1.getTimezoneOffset();
            d1.setMinutes(d1.getMinutes() + timeZoneOffsetDate1);
        }

        if(date2 != ''){
            d2 = new Date(date2);
            const timeZoneOffsetDate2 = d2.getTimezoneOffset();
            d2.setMinutes(d2.getMinutes() + timeZoneOffsetDate2);
        }
        return {date1: d1, date2: d2}
    }
  
    return (<>
        <h2>{props.title}</h2>
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={5}>
                <TextField
                    label={props.date1Text}
                    variant="outlined"
                    type="date"
                    value={date1} 
                    onChange={handleDate1}
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}/>
            </Grid>
            <Grid item xs={5}>
                <TextField
                    label={props.date2Text}
                    variant="outlined"
                    type="date"
                    value={date2} 
                    onChange={handleDate2}
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
})

DataInput1.defaultProps =
{
    date1Text: "Start date",
    date2Text: "End date",
    onSubmit: null,
    buttonText: "Filter",
    title: "Filter",
}

DataInput1.propTypes = 
{
    date1Text: PropTypes.string,
    date2Text: PropTypes.string,
    onSubmit: PropTypes.func,
    buttonText: PropTypes.string,
    title: PropTypes.string,
}

/**
const onAction = () => {

}
console.log("")
console.log(": ", )

 */


