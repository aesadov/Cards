import axios, { AxiosResponse } from "axios";


export const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/', // `https://neko-back.herokuapp.com/2.0/`
    withCredentials: true,
})

export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<UserType>>('auth/login', data)
    },
    registration: (data: RegisterType) => {
        return instance.post<AxiosResponse<{ response: { data: { error: string } } }>>(`auth/register`, data)
    },
    update: (data: UpdatePasswordType) => {
        return axios.post(`https://neko-back.herokuapp.com/2.0/auth/forgot`, data, {withCredentials: true})
    }

}

export type RegisterType = {
    email: string
    password: string
}

export type UpdatePasswordType = {
    email: string
    from: string
    message: string
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

export type UserType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number // количество колод

    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean // подтвердил ли почту
    rememberMe: boolean

    error?: string
}