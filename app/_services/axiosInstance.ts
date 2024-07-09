import axios, { AxiosResponse } from "axios";
import { auth } from "../_lib/actions/auth";
import { clientId, clientSecret } from "./apiService";

const clientCredential = {
    clientId,
    clientSecret
};

export async function clientLogin () : Promise<AxiosResponse> {

        try {
            const response : AxiosResponse = await axios.post(`${auth}/api/v1/Client/Login`, clientCredential);
            return response;
        } catch (error : any) {
            return error;
        }
    };


