import axios from "axios";
import api from "../../../Pages/Api";


export const myAxios = axios.create({
    baseURL: api,
    headers: {
        "Content-Type": "application/json"
    },
})


myAxios.interceptors.request.use(
    (data) =>  data ,
    (error) => {
        console.log(error);
        return Promise.reject(error)
    })

    myAxios.interceptors.response.use(
        (response) =>  response ,
        (error) => {
            console.log(error);
            return Promise.reject(error)
        }
    )