import styles from './MessageBox.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {Dialog, DialogContent, DialogTitle} from '@mui/material';
import {Grid, Button} from '@mui/material';

export const MessageBox = (props: any) => {
    return (<>
        <Dialog open={props.open} onClose={() => props.setOpen(false)}>
            <DialogTitle>Warning</DialogTitle>
            <DialogContent>
                <Grid 
                    container 
                    direction={'column'} 
                    sx={{my: 2}} >
                    <Grid item sx={{my: 2}}>
                        {props.text}
                    </Grid>
                    <Grid 
                        item 
                        sx={{my: 2}}
                        display={'flex'}
                        flexDirection={ 'row-reverse'}>
                        <Button 
                            variant="contained" 
                            onClick={props.onYes}
                            sx={{mr: 1}}>
                            Yes
                        </Button>
                        <Button 
                            variant="contained" 
                            onClick={props.onNo}
                            sx={{mr: 1}}>
                            No
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>    
    </>);
}

MessageBox.defaultProps =
{
    open: true,
    setOpen: null,
    onYes: null,
    onNo: null,
    text: "Message"
}

MessageBox.propTypes = 
{
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    onYes: PropTypes.func,
    onNo: PropTypes.func,
    text: PropTypes.string
}


