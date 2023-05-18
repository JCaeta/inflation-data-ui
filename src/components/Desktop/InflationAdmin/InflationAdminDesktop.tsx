import styles from './InflationAdminDesktop.module.scss';
import React, {useState, useRef, forwardRef, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import {Tab, Tabs} from '@mui/material';
import { DataSectionDesktop } from './DataSection/DataSectionDesktop';
import { ChartSectionDesktop } from './ChartSection/ChartSectionDesktop';

export const InflationAdminDesktop = forwardRef((props: any, ref: any) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const dataSectionRef = useRef(null);

    const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    }

    useImperativeHandle(ref, () => ({
        clearAddInputs(){
            dataSectionRef.current.clearAdd()
        },

        clearFilterInputs() {
            dataSectionRef.current.clearFilter()
        },

        setTableData(inflationList: any){
            dataSectionRef.current.setTableData(inflationList)
        },

        getFilterData(){
            return dataSectionRef.current.getFilterData()
        }
    }))
    
    return (<>
        <Tabs value={selectedTab} onChange={onTabChange} aria-label="simple tabs example">
            <Tab label="Data" />
            <Tab label="Charts" />
        </Tabs>
        {selectedTab === 0 && (
            <DataSectionDesktop
                ref={dataSectionRef}
                onAdd={props.onCreateInflation}
                onFilter={props.onFilterDataSection}
                onUpdate={props.onUpdateInflation}
                onRemove={props.onDeleteInflation}/>
        )}
        {selectedTab === 1 && (
            <ChartSectionDesktop
                onFilter={props.onFilterChartSection}
                data={props.chartSectionData}/>
        )}
    </>);
})

InflationAdminDesktop.defaultProps =
{
    title: "Data",
    onFilterDataSection: null,
    onCreateInflation: null,
    onUpdateInflation: null,
    onDeleteInflation: null,
    chartSectionData: null, 
    onFilterChartSection: null,
    onAddChartSection: null,
}

InflationAdminDesktop.propTypes = 
{
    title: PropTypes.string,
    onFilterDataSection: PropTypes.func,
    onCreateInflation: PropTypes.func,
    onUpdateInflation: PropTypes.func,
    onDeleteInflation: PropTypes.func,
    onFilterChartSection: PropTypes.func,
    onAddChartSection: PropTypes.func,
    chartsData: PropTypes.any
}


