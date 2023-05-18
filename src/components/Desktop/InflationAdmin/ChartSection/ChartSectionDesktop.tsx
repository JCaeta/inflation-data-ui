import styles from './ChartSectionDesktop.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {Container} from '@mui/material';
import { DataInput1 } from '../../../Common/DataInput1/DataInput1';
import { BarChart } from '../../../Common/Charts/BarChart/BarChart';

export const ChartSectionDesktop = (props: any) => {
    const createCharts = (data: any) => {
        return (<>
            <BarChart data={data}/>
        </>)
    }
    return (<>
        <Container>
            <h1>{props.title}</h1>
            <DataInput1 />
            {props.data != null? createCharts(props.data): null}
        </Container>
    </>);
}

ChartSectionDesktop.defaultProps =
{
    title: 'Charts',
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


