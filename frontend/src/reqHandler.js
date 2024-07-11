import axios from "axios"
const baseUrl = "http://localhost:3000";

export const publicRequest= axios.create({
    baseURL:baseUrl ,
})