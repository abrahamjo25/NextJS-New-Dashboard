import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;
const authURL = process.env.REACT_APP_AUTH_URL;
const clientCredential = {
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
};

export const clientLogin = () => {
        let accessToken = localStorage.getItem("access");
        if (accessToken === null || accessToken === "") {
            axios
                .post(`${authURL}/api/v1/Client/Login`, clientCredential)
                .then((res) => {
                    if (res) {
                        localStorage.setItem("access", res.data.accessToken);
                        localStorage.setItem("refresh", res.data.refreshToken);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
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

