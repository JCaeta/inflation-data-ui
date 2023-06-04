import styles from './Public.module.scss';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { ChartSectionDesktop } from '@/components/Desktop/ChartSection/ChartSectionDesktop';
import { Container } from '@mui/material';
import { ChartsRequest } from '../api/http_requests';
import {ChartsResponse} from '../api/http_requests';
import { getChartsDataRequest } from '../api/http_requests';
import { ClosedPage } from '@/components/Common/ClosedPage/ClosedPage';

export const Public = () => {
    const [data, setData] = useState(null)
    const [start, setStart] = useState(false);
    const [closeSite, setCloseSite] = useState(false);

    const verifyResponseMessage = (message: {id: number, message: string}) => {
        if(message.id === 1){
            return true
        } else if (message.id === -2){
            setCloseSite(true)
            return false
        }
    }

    const onStart = async () => {
        getChartsData(null, null)
    }

    const getChartsData = async (startDate: Date, endDate: Date) => {
        const requestCharts: ChartsRequest = {startDate: startDate, endDate: endDate}
        const responseCharts: ChartsResponse = await getChartsDataRequest(requestCharts)
        if(verifyResponseMessage(responseCharts.message)){
            setData({
                barChartData: responseCharts.barChartData,
                lineChartData: responseCharts.lineChartData
            })
        }
    }

    // const refreshData = async () => {
    //     console.log("refreshData")
    //     const dates = inflationAdminRef.current.getFilterData()
    //     console.log("dates: ", dates)
    //     await readInflation(dates.date1, dates.date2)
    // }

    useEffect(() => {
        if(start == false){
            onStart()
            setStart(true)
        }
    })

    const onFilter = async (startDate: Date, endDate: Date) => {
        getChartsData(startDate, endDate);

    }

    return (<>
        {closeSite? <ClosedPage/>:
        <Container maxWidth={false}>
            <ChartSectionDesktop
                data={data}
                onFilter={onFilter}/>
        </Container>}
    </>);
}

export default Public;

Public.defaultProps =
{

}

Public.propTypes = 
{

}

/**
const onAction = () => {

}
console.log("")
console.log(": ", )

 */