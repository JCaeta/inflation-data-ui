import { InflationAdminDesktop } from '@/components/Desktop/InflationAdmin/InflationAdminDesktop';
import React, {useEffect, useRef, useState} from 'react';
import { createInflationRequest } from '../api/http_requests';
import { readInflationRequest } from '../api/http_requests';
import { deleteInflationRequest } from '../api/http_requests';
import { updateInflationRequest } from '../api/http_requests';
import { InflationResponse, InflationRequest  } from '../api/http_requests';
import { ChartsRequest, ChartsResponse, getChartsDataRequest} from '../api/http_requests';
import { Login1 } from '@/components/Common/Login1/Login1';
import { AdminRequest, AdminResponse, signInAdminRequest, changeAdminPasswordRequest, changeAdminUsernameRequest } from '../api/http_requests';
import { useRouter } from 'next/router'
import { ClosedPage } from '@/components/Common/ClosedPage/ClosedPage';

const Admin: React.FC = () => {
    const inflationAdminRef = useRef(null);
    const [start, setStart] = useState(false);
    const [logged, setLogged] = useState(false);
    const [token, setToken] = useState(null);
    const [oldPasswordError, setOldPasswordError] = useState(false);
    const [errorChangePassword, setErrorChangePassword] = useState(false);
    const [errorChangeUsername, setErrorChangeUsername] = useState(false);
    const [errorChangeUsernameBadPassword, setErrorChangeUsernameBadPassword] = useState(false);
    const [signInError, setSignInError] = useState(false);
    const [username, setUsername] = useState('');
    const [tableData, setTableData] = useState(null);
    const router = useRouter();
    const [closeSite, setCloseSite] = useState(false);

    const verifyClosedSite = (message: {id: number, message: string}) => {
        if(message.id !== -2){
            return true
        } else {
            setCloseSite(true)
            return false
        }
    }

    useEffect(() => {
        if(logged && start === false){
            onStart()
            setStart(true)
        }
    }, [logged])

    const onStart = async () => {
        console.log("onStart")
        
        // Get inflation data
        const requestInflation: InflationRequest = 
        {
            startDate: null,
            endDate: null, 
            inflation: null,
            token: null
        }
        const responseInflation: InflationResponse = await readInflationRequest(requestInflation)
        console.log("responseInflation: ", responseInflation)

        if(verifyClosedSite(responseInflation.message)){
            setTableData(responseInflation.inflationList)
            getChartsData(null, null)
        }
    }

    const getChartsData = async (startDate: Date, endDate: Date) => {
        const requestCharts: ChartsRequest = {startDate: startDate, endDate: endDate}
        const responseCharts: ChartsResponse = await getChartsDataRequest(requestCharts)
        if(verifyClosedSite(responseCharts.message)){
            inflationAdminRef.current.setChartsData({
                barChartData: responseCharts.barChartData,
                lineChartData: responseCharts.lineChartData
            })
        }
    }

    const createInflation = async (inflation: any) => {
        const request: InflationRequest = {
            inflation: {id: 0, date: inflation.date, value: inflation.value}, 
            startDate: null, 
            endDate: null,
            token: token
        }

        const response: InflationResponse = await createInflationRequest(request);

        if(verifyClosedSite(response.message)){
            if(response.message.id === 1) {
                inflationAdminRef.current.clearAddInputs()
                setToken(response.token)
                await refreshData()  
            } else {
                
            }
        }
    }

    const refreshData = async () => {
        const dates = inflationAdminRef.current.getFilterDataSection()
        await readInflation(dates.date1, dates.date2)
    }
    
    const readInflation = async (startDate: Date, endDate: Date) => {
        console.log("readInflation")
        const request: InflationRequest = {
            startDate: startDate,
            endDate: endDate,
            inflation: null,
            token: token
        }

        console.log("request: ", request)  
        const response: InflationResponse = await readInflationRequest(request);
        
        console.log("response: ", response)  
        
        if(verifyClosedSite(response.message)){
            setToken(response.token)
            setTableData(response.inflationList);
        }
    }

    const deleteInflation = async (inflation: any) => {
        const request: InflationRequest = {
            inflation: inflation,
            startDate: null,
            endDate: null,
            token: token
        }
        const response: InflationResponse = await deleteInflationRequest(request);
        if(verifyClosedSite(response.message)){
            if(response.message.id === 1) {
                inflationAdminRef.current.clearAddInputs()
                setToken(response.token)
                await refreshData()  
            }
        }
    }

    const updateInflation = async (inflation: any) => {
        const request: InflationRequest = {
            inflation: inflation, 
            startDate: null, 
            endDate: null,
            token: token
        }
        const response: InflationResponse = await updateInflationRequest(request);
        if(verifyClosedSite(response.message)){
            if(response.message.id === 1) {
                inflationAdminRef.current.clearAddInputs()
                setToken(response.token)
                await refreshData()  
            }
        }
    }

    const onFilterChartsSection = async (startDate: Date, endDate: Date) => {
        getChartsData(startDate, endDate);
    }

    const onSignInSubmit = async (data: {username: string, password: string}) => {
        if(logged === false){
            const request: AdminRequest = {username: data.username, oldPassword: '', password: data.password, token: ''}
            const response: AdminResponse = await signInAdminRequest(request);
            if(verifyClosedSite(response.message)){
                if(response.message.id === 1){
                    setLogged(true)
                    setSignInError(false)
                    setToken(response.token);
                    setUsername(data.username);
                } else {
                    setLogged(false)
                    setSignInError(true)
                }
            }
        }
    }

    const onSubmitChangePassword = async (oldPassword: string, newPassword: string) => {
        const request: AdminRequest = {username: '', oldPassword: oldPassword, password: newPassword, token: token}
        const response: AdminResponse = await changeAdminPasswordRequest(request);
        if(verifyClosedSite(response.message)){
            if(response.message.id === 1){
                inflationAdminRef.current.adminGoBack()
                setOldPasswordError(false)
                setToken(response.token);
                setErrorChangePassword(false)
            } else if (response.message.id === -7){
                setOldPasswordError(true)
                setErrorChangePassword(false)
            } else {
                setErrorChangePassword(true)
                setOldPasswordError(false)
            }
        }
    }

    const onSubmitChangeUsername = async (newUsername: string, password: string) => {
        const request: AdminRequest = {username: newUsername, oldPassword: '', password: password, token: token}
        const response: AdminResponse = await changeAdminUsernameRequest(request);
        if(verifyClosedSite(response.message)){
            if(response.message.id === 1){
                inflationAdminRef.current.adminGoBack()
                setUsername(newUsername);
                setToken(response.token);
                setErrorChangeUsernameBadPassword(false);
                setErrorChangeUsername(false)
            } else if (response.message.id === -7){
                setErrorChangeUsernameBadPassword(true);
                setErrorChangeUsername(false)
            } else {
                setErrorChangeUsername(true)
                setErrorChangeUsernameBadPassword(false);
            }
        }
    }

    const onLogout = () => {
        setToken('')
        setLogged(false);
        setStart(false)
        router.replace('/');
    }

    return(<>
        {closeSite?<ClosedPage/>:
            logged?
                <InflationAdminDesktop 
                    ref={inflationAdminRef}
                    onCreateInflation={createInflation}
                    onFilterDataSection={readInflation}
                    onDeleteInflation={deleteInflation}
                    onUpdateInflation={updateInflation}
                    onFilterChartSection={onFilterChartsSection}
                    onSubmitChangePassword={onSubmitChangePassword}
                    onSubmitChangeUsername={onSubmitChangeUsername}
                    errorOldPasswordWrong={oldPasswordError}
                    errorChangeUsername={errorChangeUsername}
                    errorChangePassword={errorChangePassword}
                    username={username}
                    tableData={tableData}
                    errorChangeUsernameBadPassword={errorChangeUsernameBadPassword}
                    onLogout={onLogout}/>
            : <Login1 
                onSignInSubmit={onSignInSubmit}
                error={signInError}/>
        }
    </>)
};

export default Admin;

/**
const onAction = () => {

}
console.log("")
console.log(": ", )

 */
