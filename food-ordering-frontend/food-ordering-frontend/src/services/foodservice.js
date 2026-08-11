import api from "./api";

export const getFoods = async()
=>{
    const response = await
    api.get("./foods");
    return response.date;
};