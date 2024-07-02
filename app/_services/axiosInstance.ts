import axios, { AxiosResponse } from "axios";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const authURL = process.env.NEXT_PUBLIC_AUTH_URL;
const clientCredential = {
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
};

export async function clientLogin () : Promise<AxiosResponse> {

        try {
            const response : AxiosResponse = await axios.post(`${authURL}/api/v1/Client/Login`, clientCredential);
            return response;
        } catch (error : any) {
            return error;
        }
    };

export const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-control-Allow-Origin": "*",
        serviceKey: "",
    },
});

