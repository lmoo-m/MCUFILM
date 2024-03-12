import { axiosMcu } from "../axiosSetup";

export const getFilm = async (params: string) => {
    const data = await axiosMcu.get(
        params === "" ? "/api" : `/api?date=${params}`
    );
    return data;
};
