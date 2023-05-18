import axios from "axios";
import * as https from 'https';
import moment from "moment";

const url = "https://localhost:7173"

export interface InflationRequest {
    startDate: Date,
    endDate: Date,
    inflation: {
        id: number,
        date: Date,
        value: number,
    }
}

export interface InflationResponse {
    message: {id: number, message: string},
    inflationList: Array<{
        id: number;
        date: Date;
        value: number;
      }>;
}

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

function buildResponse (result: any): InflationResponse {
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
            };
            return response
        } else{
            const response: InflationResponse = {
                message: result.data.message,
                inflationList: [],
            };
            return response
        }
    } else {
        const response: InflationResponse = {
            message: {id: -2, message: "Communication with server failed"},
            inflationList: []
        }
        return response
    }
}

export async function createInflationRequest(request: InflationRequest): Promise<InflationResponse>{
    const result = await axios.post<any>(url + '/Inflation/create', request);
    return buildResponse(result);
}

export async function readInflationRequest(request: InflationRequest): Promise<InflationResponse>{
    console.log("readInflation")
    const result = await axios.post<any>(url + '/Inflation/read', request);
    return buildResponse(result)
}

export async function updateInflationRequest(request: InflationRequest): Promise<InflationResponse>{
    const result = await axios.put<any>(url + '/Inflation/update', request);
    return buildResponse(result)
}

export async function deleteInflationRequest(request: InflationRequest){
    console.log("Request postInflation")
    const result = await axios.delete<any>(url + '/Inflation/delete/', {data: request});
    return buildResponse(result)
}


/**
const onAction = () => {

}

console.log(": ", )
console.log("")
 */

