import axios, {AxiosResponse} from "axios";


export const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const authAPI = {
    registration: (data: RegisterType) => {
        return instance.post<AxiosResponse<{ response: { data: { error: string } } }>>(`auth/register`, data)
    },
    update: (data: UpdatePasswordType) => {
        return axios.post(`https://neko-back.herokuapp.com/2.0/auth/forgot`, data, {withCredentials: true})
    }
}
// `https://neko-back.herokuapp.com/2.0/`

export type RegisterType = {
    email: string
    password: string
}

export type UpdatePasswordType = {
    email: string
    from: string
    message: string
}