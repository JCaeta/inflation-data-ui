import styles from './UpdateInflationDesktop.module.scss';
import React, {useState, useEffect, forwardRef, useImperativeHandle, useRef} from 'react';
import PropTypes from 'prop-types';
import {Button, Grid} from '@mui/material';
import { MessageBox } from '../../../Common/MessageBox/MessageBox';
import { DataInput0 } from '../../../Common/Inputs/DataInput0/DataInput0';

export const UpdateInflationDesktop  = forwardRef((props: any, ref: any) => {
    const [open, setOpen] = useState(false);
    const dataInputRef = useRef(null)
    const [inflation, setInflationIntern] = useState(null)
    const [confirmation, setConfirmation] = useState(false);

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
        const date = dataInputRef.current.getDateValue()
        const num = dataInputRef.current.getNumberValue()
        setInflationIntern({
            id: inflation.id,
            date: date,
            value: num
        })
        setConfirmation(true)
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
        if(confirmation){
            props.onUpdate(inflation);
        }
        setConfirmation(false);

    }, [inflation, confirmation])

    useImperativeHandle(ref, () => ({
        setInflation(inflation: any){
            setInflationIntern(inflation)
        }
    }))

    return (<>
        <Grid 
            container 
            direction={'column'} 
            sx={{my: 2}} >
            <Grid item sx={{my: 2}}>
                <DataInput0
                    ref={dataInputRef}
                    inputNumberText='Inflation %'
                    title=''
                    buttonSubmitVisible={false}
                    inputNumberValue={inflation?.value || null}
                    inputDateValue={inflation?.date || ''}
                />
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