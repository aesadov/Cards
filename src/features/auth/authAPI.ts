import axios, {AxiosResponse} from "axios";


export const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const authAPI = {
    registration: (data: RegisterType) => {
        return instance.post<AxiosResponse<{ response: { data: { error: string } } }>>(`auth/register`, data)
    }
}
// `https://neko-back.herokuapp.com/2.0/`

export type RegisterType = {
    email: string
    password: string
}