import axios from "axios";


export const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const authAPI = {

}

    // `https://neko-back.herokuapp.com/2.0/`