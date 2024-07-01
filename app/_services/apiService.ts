import { axiosInstance} from "./axiosInstance";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "sonner";

type UrlParams = {
    url:string,
    data?:[]
    claim:string
}
// Get request
export const GET = async ({url, claim}:UrlParams) => {
    return await axiosInstance
        .get(url, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                accessToken: localStorage.getItem("access"),
                idToken: localStorage.getItem("idToken"),
                clientClaim: claim,
            },
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            if (error.response?.status === 401) {
                toast.error(`Access Denied`);
            } else if (error.response) {
            } else if (error.request) {
                toast.error("Error: No response received from the server");
            } else {
                toast.error("Error: " + error.message);
            }
        });
};

// Post request
export const POST = async ({url, data, claim}:UrlParams) => {
    return await axiosInstance
        .post(url, data, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                accessToken: localStorage.getItem("access"),
                idToken: localStorage.getItem("idToken"),
                clientClaim: claim,
            },
        })
        .then((response) => {
            toast.success("Created successfully");
            return response?.data;
        })
        .catch((error) => {
            if (error.response?.status === 401) {
                toast.error(`Access Denied`);
            } else if (error.response) {
                toast.error(`Error: ${error?.response?.data?.errors[0]}`);
            } else if (error.request) {
                toast.error("Error: No response received from the server");
            } else {
                toast.error("Error: " + error.message);
            }
        });
};

// Put request
export const PUT = async ({url, data, claim}:UrlParams) => {
    return await axiosInstance
        .put(url, data, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                accessToken: localStorage.getItem("access"),
                idToken: localStorage.getItem("idToken"),
                clientClaim: claim,
            },
        })
        .then((response) => {
            toast.success("Updated successfully");
            return response?.data;
        })
        .catch((error) => {
            if (error.response?.status === 401) {
                toast.error(`Access Denied`);
            } else if (error.response) {
                toast.error(`Error: ${error?.response?.data?.errors[0]}`);
            } else if (error.request) {
                toast.error("Error: No response received from the server");
            } else {
                toast.error("Error: " + error.message);
            }
            return false;
        });
};

// Delete request
export const DELETE = async ({url, claim}:UrlParams) => {
    return await axiosInstance
        .delete(url, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                accessToken: localStorage.getItem("access"),
                idToken: localStorage.getItem("idToken"),
                clientClaim: claim,
            },
        })
        .then((response) => {
            toast.success("Deleted successfully");
            return response?.data;
        })
        .catch((error) => {
            if (error.response?.status === 401) {
                toast.error(`Access Denied`);
            } else if (error.response) {
                toast.error(`Error: ${error?.response?.data?.errors[0]}`);
            } else if (error.request) {
                toast.error("Error: No response received from the server");
            } else {
                toast.error("Error: " + error.message);
            }
        });
};


