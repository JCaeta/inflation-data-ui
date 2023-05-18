import { InflationAdminDesktop } from '@/components/Desktop/InflationAdmin/InflationAdminDesktop';
import React, {useEffect, useRef, useState} from 'react';
import { createInflationRequest } from '../api/http_requests';
import { readInflationRequest } from '../api/http_requests';
import { deleteInflationRequest } from '../api/http_requests';
import { updateInflationRequest } from '../api/http_requests';
import { InflationResponse } from '../api/http_requests';
import { InflationRequest } from '../api/http_requests';

const Admin: React.FC = () => {
    const inflationAdminRef = useRef(null);
    const [start, setStart] = useState(false);

    const onStart = async () => {
        const request: InflationRequest = {startDate: null, endDate: null, inflation: null}
        const response: InflationResponse = await readInflationRequest(request)
        inflationAdminRef.current.setTableData(response.inflationList);
    }

    const createInflation = async (inflation: any) => {
        const request: InflationRequest = {
            inflation: {id: 0, date: inflation.date, value: inflation.value}, 
            startDate: null, 
            endDate: null
        }

        const response: InflationResponse = await createInflationRequest(request);
        if(response.message.id === 1) {
            inflationAdminRef.current.clearAddInputs()
            await refreshData()  
        }
    }

    const refreshData = async () => {
        console.log("refreshData")
        const dates = inflationAdminRef.current.getFilterData()
        console.log("dates: ", dates)
        await readInflation(dates.date1, dates.date2)
    }
    
    const readInflation = async (startDate: Date, endDate: Date) => {
        const request: InflationRequest = {
            startDate: startDate,
            endDate: endDate,
            inflation: null
        }
        const response: InflationResponse = await readInflationRequest(request);
        inflationAdminRef.current.setTableData(response.inflationList);
    }

    const deleteInflation = async (inflation: any) => {
        console.log("deleteInflation")
        console.log("inflation: ", inflation)
        const request: InflationRequest = {
            inflation: inflation,
            startDate: null,
            endDate: null
        }
        const response: InflationResponse = await deleteInflationRequest(request);
        if(response.message.id === 1) {
            inflationAdminRef.current.clearAddInputs()
            await refreshData()  
        }
    }

    const updateInflation = async (inflation: any) => {
        const request: InflationRequest = {
            inflation: inflation, 
            startDate: null, 
            endDate: null
        }
        const response: InflationResponse = await updateInflationRequest(request);
        if(response.message.id === 1) {
            inflationAdminRef.current.clearAddInputs()
            await refreshData()  
        }
    }
    useEffect(() => {
        if(start == false){
            onStart()
            setStart(true)
        }
    })
    
    return(<>
        <InflationAdminDesktop 
            ref={inflationAdminRef}
            onCreateInflation={createInflation}
            onFilterDataSection={readInflation}
            onDeleteInflation={deleteInflation}
            onUpdateInflation={updateInflation}/>
    </>)
};

export default Admin;

/**
const onAction = () => {

}
console.log("")
console.log(": ", )

 */
