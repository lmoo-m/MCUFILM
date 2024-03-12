import axios from "axios";

export const axiosMcu = axios.create({
    baseURL: "https://www.whenisthenextmcufilm.com",
});
