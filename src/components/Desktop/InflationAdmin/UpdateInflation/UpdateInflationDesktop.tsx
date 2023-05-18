import styles from './UpdateInflationDesktop.module.scss';
import React, {useState, useEffect, forwardRef, useImperativeHandle, useRef} from 'react';
import PropTypes from 'prop-types';
import { DataInput2 } from '../../../Common/DataInput2/DataInput2';
import {Button, Grid} from '@mui/material';
import { MessageBox } from '../../../Common/MessageBox/MessageBox';

export const UpdateInflationDesktop  = forwardRef((props: any, ref: any) => {
    const [open, setOpen] = useState(false);
    const dataInputRef = useRef(null)
    const [inflation, setInflationIntern] = useState(null)

    const onUpdate = () => {
        openConfirmationMessage()
    }

    const openConfirmationMessage = () => {
        setOpen(true);
    }

    const onNoConfirmation = () => {
        setOpen(false)
    }

    const onYesConfirmation = () => {
        setOpen(false)
        props.onUpdate(inflation);
    }

    useEffect(() => {

        if(props.inflation != null){
            setInflationIntern({
                id: props.inflation.id,
                date: props.inflation.date,
                value: props.inflation.value
            })
        }
    }, [])

    useEffect(() => {
        if(inflation != null){
            dataInputRef.current.setDate(inflation.date)
            dataInputRef.current.setNumber(inflation.value)
        }
    }, [inflation])

    useImperativeHandle(ref, () => ({
        setInflation(inflation: any){
            console.log("setInflation")
            console.log("inflation: ", inflation)
            setInflationIntern(inflation)
            dataInputRef.current.setDate(inflation.date)
            dataInputRef.current.setNumber(inflation.value)
        }
    }))

    const onDateChange = (date: Date) => {
        setInflationIntern({
            id: inflation.id,
            date: date,
            value: inflation.value
        })
    }

    const onNumberChange = (number: number) => {
        setInflationIntern({
            id: inflation.id,
            date: inflation.date,
            value: number
        })
    }

    return (<>
        <Grid 
            container 
            direction={'column'} 
            sx={{my: 2}} >
            <Grid item sx={{my: 2}}>
                <DataInput2
                    ref={dataInputRef}
                    inputNumberText='Inflation %'
                    onDateChange={onDateChange}
                    onNumberChange={onNumberChange}
                    title=''/>
            </Grid>
            <Grid 
                item 
                sx={{my: 2}}
                display={'flex'}
                flexDirection={'row-reverse'}>
                <Button 
                    variant="contained" 
                    onClick={props.onCancel}
                    sx={{mr: 1}}>
                    Cancel
                </Button>
                <Button 
                    variant="contained" 
                    onClick={onUpdate}
                    sx={{mr: 1}}>
                    Update
                </Button>
            </Grid>
        </Grid>

        <MessageBox
            open={open}
            setOpen={setOpen}
            onYes={onYesConfirmation}
            onNo={onNoConfirmation}
            text={'Are you sure you want to update this record?'}/>
    </>);
})

UpdateInflationDesktop.defaultProps =
{
    inflation: null,
    onUpdate: null,
    onCancel: null
}

UpdateInflationDesktop.propTypes = 
{
    inflation: PropTypes.any,
    onUpdate: PropTypes.func,
    onCancel: PropTypes.func
}
/**
const onAction = () => {

}

console.log("")
console.log(": ", )

*/
