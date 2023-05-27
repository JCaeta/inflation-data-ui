import styles from './ChartSectionDesktop.module.scss';
import React, {useRef, forwardRef, useImperativeHandle, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Container} from '@mui/material';
import { DataInput1 } from '../../Common/Inputs/DataInput1/DataInput1';
import { BarChart } from '../../Common/Charts/BarChart/BarChart';
import { LineChart } from '../../Common/Charts/LineChart/LineChart';

export const ChartSectionDesktop = forwardRef((props: any, ref: any) => {
    const lineChartRef = useRef(null)
    const filterRef = useRef(null)
    const [data, setData] = useState(null)
    useImperativeHandle(ref, () => ({
        getFilterData(){
            return filterRef.current.getDates()
        }
    }))

    useEffect(() => {
        setData(props.data)
    }, [props.data])

    const createCharts = (lineChartData: any, barChartData: any) => {
        return (<>
            <h2>Monthly inflation</h2>
            <LineChart
                ref={lineChartRef}
                height = {700}
                data={lineChartData}/>
            
            <h2>Cumulative inflation</h2>
            <BarChart 
                labels={barChartData.labels}
                data = {barChartData.data}
                title='Cumulative inflation'
                xTitle='Total %'
                yTitle='Period'/>
        </>)
    }
    return (<>
        <Container>
            <h1>{props.title}</h1>
            <DataInput1 
                ref={filterRef}
                onSubmit={props.onFilter}/>
            {data !==null? createCharts(data.lineChartData, data.barChartData): null}
        </Container>
    </>);
})

ChartSectionDesktop.defaultProps =
{
    title: 'Inflation in Argentina',
    onFilter: function (startDate: Date, endDate: Date){
        console.log("startDate: ", startDate);
        console.log("endDate: ", endDate);
    },
    data: null
}

ChartSectionDesktop.propTypes = 
{
    title: PropTypes.string,
    onFilter: PropTypes.func,
    data: PropTypes.any
}
/**
console.log("")
console.log(":", )
console.log("  ")
*/

