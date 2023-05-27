import axios from "axios";
import * as https from 'https';
import moment from "moment";

const url = "https://localhost:7173"

/**
    Standard messages
    id: message
    1: Succeeded
    -1: Request failed to complete
    -2: Communication with server failed
    -3: Inflation is null
    -4: Inflation updating failed
    -5: Inflation deletion failed
 */

export interface InflationRequest {
    startDate: Date,
    endDate: Date,
    token: string,
    inflation: {
        id: number,
        date: Date,
        value: number,
    }
}

export interface InflationResponse {
    message: {id: number, message: string},
    token: string,
    inflationList: Array<{
        id: number;
        date: Date;
        value: number;
      }>;
}

export interface ChartsRequest {
    startDate: Date,
    endDate: Date,
}

export interface ChartsResponse {
    message: {id: number, message: string},
    barChartData: any,
    lineChartData: any
}

export interface AdminRequest {
    username: string,
    token: string,
    oldPassword: string,
    password: string
}

export interface AdminResponse {
    message: {id: number, message: string},
    token: string
}

function buildResponseInflation (result: any): InflationResponse {
    if(result?.data?.message){
        if (Array.isArray(result?.data?.inflationList)) {
            // Convert date strings to Date objects
            const inflationList = result.data.inflationList.map((item: any) => ({
                id: item.id,
                date: moment(item.date).toDate(),
                value: item.value,
            }));

            const response: InflationResponse = {
                message: result.data.message,
                inflationList: inflationList,
                token: result.data.token
            };
            return response
        } else{
            const response: InflationResponse = {
                message: result.data.message,
                inflationList: [],
                token: result.data.token
            };
            return response
        }
    } else {
        const response: InflationResponse = {
            message: {id: -2, message: "Communication with server failed"},
            inflationList: [],
            token: result.data.token
        }
        return response
    }
}

function buildResponseCharts (result: any): ChartsResponse {
    if(result?.data?.message){
        const response: ChartsResponse = {
            message: result.data.message,
            barChartData: result.data.data.barChartData,
            lineChartData: result.data.data.lineChartData.data
        }
        return response
    } else {
        const response: ChartsResponse = {
            message: {id: -2, message: "Communication with server failed"},
            barChartData: null,
            lineChartData: null
        }
        return response
    }
}

function buildResponseAdmin (result: any): AdminResponse {
    if(result?.data?.message){
        const response: AdminResponse = {
            message: result.data.message,
            token: result.data.token
        }
        return response
    } else {
        const response: AdminResponse = {
            message: {id: -2, message: "Communication with server failed"},
            token: null
        }
        return response
    }
}

export async function createInflationRequest(request: InflationRequest): Promise<InflationResponse>{
    const result = await axios.post<any>(url + '/Inflation/create', request);
    return buildResponseInflation(result);
}

export async function readInflationRequest(request: InflationRequest): Promise<InflationResponse>{
    const result = await axios.post<any>(url + '/Inflation/read', request);
    return buildResponseInflation(result)
}

export async function updateInflationRequest(request: InflationRequest): Promise<InflationResponse>{
    const result = await axios.put<any>(url + '/Inflation/update', request);
    return buildResponseInflation(result)
}

export async function deleteInflationRequest(request: InflationRequest): Promise<InflationResponse>{
    const result = await axios.delete<any>(url + '/Inflation/delete/', {data: request});
    return buildResponseInflation(result)
}

export async function getChartsDataRequest(request: ChartsRequest): Promise<ChartsResponse>{
    const result = await axios.post<any>(url + '/Charts/get-data', request);
    return buildResponseCharts(result)
}

export async function signInAdminRequest(request: AdminRequest): Promise<AdminResponse>{
    const result = await axios.post<any>(url + '/Admin/sign-in', request);
    return buildResponseAdmin(result)
}

export async function changeAdminPasswordRequest(request: AdminRequest): Promise<AdminResponse>{
    const result = await axios.post<any>(url + '/Admin/change-password', request);
    return buildResponseAdmin(result)
}

export async function changeAdminUsernameRequest(request: AdminRequest): Promise<AdminResponse>{
    const result = await axios.post<any>(url + '/Admin/change-username', request);
    return buildResponseAdmin(result)
}

/**
const onAction = () => {

}
console.log("")
console.log(": ", )

 */

