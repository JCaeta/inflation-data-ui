import styles from './InflationAdminDesktop.module.scss';
import React, {useEffect, useState, useRef, forwardRef, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import {Tab, Tabs} from '@mui/material';
import { DataSectionDesktop } from './DataSection/DataSectionDesktop';
import { ChartSectionDesktop } from '../ChartSection/ChartSectionDesktop';
import { AdminProfile } from '../../Common/AdminProfile/AdminProfile';
import {Button, Box} from '@mui/material';

export const InflationAdminDesktop = forwardRef((props: any, ref: any) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const dataSectionRef = useRef(null);
    const chartSectionRef = useRef(null);
    const adminSectionRef = useRef(null);
    const [chartsData, setChartsData] = useState(null)
    
    const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
        props.onTabChange(newValue);
    }

    useImperativeHandle(ref, () => ({
        clearAddInputs(){
            dataSectionRef.current.clearAdd()
        },

        clearFilterDataSection() {
            dataSectionRef.current.clearFilter()
        },

        getFilterDataSection(){
            if(selectedTab === 0) {
                return dataSectionRef.current.getFilterData()
            } else {
                return null
            }
        },

        getFilterChartsSection(){
            if(selectedTab === 1) {
                return chartSectionRef.current.getFilterData()
            } else {
                return null
            }
        },

        setChartsData(data: {barChartData: any, lineChartData: Array<{time: string, value: number}>}){
            setChartsData(data)
        },

        adminGoBack(){
            adminSectionRef.current.goBackToMain()
        }
    }))

    return (<>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Tabs value={selectedTab} onChange={onTabChange} aria-label="simple tabs example">
                <Tab label="Data" />
                <Tab label="Charts" />
                <Tab label="Admin" />
            </Tabs>
            <Button variant="contained" color="primary" onClick={props.onLogout}>
                Logout
            </Button>
        </Box>
        {selectedTab === 0 && (
            <DataSectionDesktop
                ref={dataSectionRef}
                onAdd={props.onCreateInflation}
                onFilter={props.onFilterDataSection}
                onUpdate={props.onUpdateInflation}
                onRemove={props.onDeleteInflation}
                inflationList={props.tableData}/>
        )}
        {selectedTab === 1 && (
            <ChartSectionDesktop
                ref={chartSectionRef }
                onFilter={props.onFilterChartSection}
                data={chartsData}/>
        )}

        {selectedTab === 2 && (
            < AdminProfile 
                ref={adminSectionRef}
                errorOldPasswordWrong={props.errorOldPasswordWrong}
                onSubmitChangePassword={props.onSubmitChangePassword }
                onSubmitChangeUsername={props.onSubmitChangeUsername}
                errorChangePasswordFailed={props.errorChangePassword}
                errorChangeUsernameFailed={props.errorChangeUsername}
                errorChangeUsernameBadPassword={props.errorChangeUsernameBadPassword}
                username={props.username}/>)}
    </>);
})

InflationAdminDesktop.defaultProps =
{
    title: "Data",
    username: "admin",
    onFilterDataSection: null,
    onCreateInflation: null,
    onUpdateInflation: null,
    onDeleteInflation: null,
    onFilterChartSection: null,
    onAddChartSection: null,
    onTabChange: function(value){},
    onSubmitChangeUsername: function(username: string, password: string){},
    onSubmitChangePassword : function(oldPassword: string, newPassword: string){},
    errorOldPasswordWrong: false,
    errorChangeUsername: false,
    errorChangePassword: false,
    errorChangeUsernameBadPassword: false,
    onLogout: function(){},
    tableData: null
}

InflationAdminDesktop.propTypes = 
{
    title: PropTypes.string,
    username: PropTypes.string,
    onFilterDataSection: PropTypes.func,
    onCreateInflation: PropTypes.func,
    onUpdateInflation: PropTypes.func,
    onDeleteInflation: PropTypes.func,
    onFilterChartSection: PropTypes.func,
    onAddChartSection: PropTypes.func,
    onTabChange: PropTypes.func,
    onSubmitChangeUsername: PropTypes.func,
    onSubmitChangePassword : PropTypes.func,
    errorOldPasswordWrong: PropTypes.bool,
    errorChangeUsername: PropTypes.bool,
    errorChangePassword: PropTypes.bool,
    errorChangeUsernameBadPassword: PropTypes.bool,
    onLogout: PropTypes.func,
    tableData: PropTypes.any
}

/**
console.log("")
console.log(":", )
console.log("  ")
*/
