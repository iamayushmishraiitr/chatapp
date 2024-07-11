import axios from "axios"
import { useSelector } from "react-redux";
const baseUrl = "http://localhost:3000";

export const privateRequest= axios.create({
    baseURL:baseUrl ,
})

export const publicRequest= axios.create({
    baseURL:baseUrl ,
})