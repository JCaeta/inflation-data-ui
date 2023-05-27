import styles from './DataSectionDesktop.module.scss';
import React, {useState, forwardRef, useImperativeHandle, useRef} from 'react';
import PropTypes from 'prop-types';
import { DataInput0 } from '../../../Common/Inputs/DataInput0/DataInput0';
import { Table0 } from '../../../Common/Table0/Table0';
import { DataInput1 } from '../../../Common/Inputs/DataInput1/DataInput1';
import {Container, Grid} from '@mui/material';
import {Dialog, DialogContent, DialogTitle} from '@mui/material';
import { UpdateInflationDesktop } from '../UpdateInflation/UpdateInflationDesktop';
import { MessageBox } from '../../../Common/MessageBox/MessageBox';

export const DataSectionDesktop = forwardRef((props: any, ref: any) => {
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openRemove, setOpenRemove] = useState(false);
    const [inflation, setInflation] = useState(null); 
    const [tableData, setTableData] = useState({headers: ["Id", "Date", "Inflation %"], rows: []})
    const [tableVisible, setTableVisible] = useState(false);
    const addInputsRef = useRef(null);
    const filterInputsRef = useRef(null)
    const updateInflationRef = useRef(null);

    const  onAdd = async (inputNumber: number, inputDate: Date) => {
        setInflation({id: null, date: inputDate, value: inputNumber})
        props.onAdd({id: null, date: inputDate, value: inputNumber});
    }

    const onOpenUpdate = (data: {index: number, row: any}) => {
        const date = new Date(data.row[1]);
        const timeZoneOffset = date.getTimezoneOffset();
        date.setMinutes(date.getMinutes() + timeZoneOffset);
        var inf = {
            id: data.row[0], 
            date: date, 
            value: parseFloat(data.row[2])
        }
        setInflation(inf);
        setOpenUpdate(true);
    }

    const onCancel = () => {
        closeDialogUpdate()
    }

    const closeDialogUpdate= () => {
        setOpenUpdate(false);
    }

    const onUpdate = (inflation: any) => {
        closeDialogUpdate()
        props.onUpdate(inflation);
    }

    const onOpenRemove = (data: {index, row}) => {
        setInflation({
            id: data.row[0], 
            date: data.row[1], 
            value: parseFloat(data.row[2])
        });
        setOpenRemove(true)
    }

    const onRemove = () => {
        closeDialogRemove();
        props.onRemove(inflation);
    }

    const closeDialogRemove = () => {
        setOpenRemove(false)
    }

    const createTable = () => {
        return(<>
            <Grid item xs={12} sm={6}>
                <h2>Results</h2>
                <Table0 
                    headers={tableData.headers} 
                    rows={tableData.rows}
                    onEdit={onOpenUpdate}
                    onRemove={onOpenRemove}/>
            </Grid>
        </>);
    }

    useImperativeHandle(ref, () => ({
        clearAdd(){
            addInputsRef.current.clear()
        },

        clearFilter(){
            filterInputsRef.current.clear()
        },

        setTableData(inflationList: any){
            /**
                rows: [
                    [1, "2023-05-01", 8.5],
                    [2, "2023-06-01", 7.5],
                    [3, "2023-07-01", 4.5],
                ]
            */

            const headers =  ["Id", "Date", "Inflation %"]
            const rows = inflationList.map((item) => [
                item.id, item.date.toISOString().split('T')[0], item.value
            ]);

            setTableData({headers: headers, rows: rows})
            setTableVisible(true)
        },

        getFilterData(){
            return filterInputsRef.current.getDates()
        }
    }))

    return (<>
        <Container>
            <Grid container direction="column" spacing={2}>
                <Grid item xs={12} sm={6}>
                    <DataInput0 
                        ref={addInputsRef}
                        inputNumberText={'Inflation %'}
                        buttonText='Add'
                        onSubmit={onAdd}
                        title={'Add new inflation data'}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DataInput1 
                        ref={filterInputsRef}
                        onSubmit={props.onFilter}/>
                </Grid>
                {tableVisible?createTable(): null}
            </Grid>
            <Dialog open={openUpdate} onClose={() => setOpenUpdate(false)}>
                <DialogTitle>Update inflation</DialogTitle>
                <DialogContent>
                    <UpdateInflationDesktop 
                        ref={updateInflationRef}
                        inflation={inflation}
                        onUpdate={onUpdate}
                        onCancel={onCancel}/>
                </DialogContent>
            </Dialog> 

            <MessageBox
                open={openRemove}
                setOpen={setOpenRemove}
                onYes={onRemove}
                onNo={closeDialogRemove}
                text={'Are you sure you want to delete this record?'}/>
        </Container>
    </>);
})

DataSectionDesktop.defaultProps =
{
    title: "Data",
    onFilter: null,
    onAdd: null,
    onUpdate: null,
    onRemove: null
}

DataSectionDesktop.propTypes = 
{
    title: PropTypes.string,
    onFilter: PropTypes.func,
    onAdd: PropTypes.func,
    onUpdate: PropTypes.func,
    onRemove: PropTypes.func
}

/**
const onAdd = (inputNumber: number, inputDate: Date) =>{
    //...
}

const onFilter = (startDate: Date, endDate: Date) => {
    //...
}


const onAction = () => {

}

console.log("")
console.log(": ", )

*/

