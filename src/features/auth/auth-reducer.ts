import {authAPI, RegisterType, UpdatePasswordType} from "./authAPI";
import {AppThunk} from "../../app/store";

const SET_REGISTER_STATUS = 'AUTH/SET_REGISTER_STATUS'
const SET_ERROR_STATUS = 'AUTH/SET_ERROR_STATUS'
const REQUEST_FOR_NEW_PASSWORD = 'AUTH/REQUEST_FOR_NEW_PASSWORD'

export type StatusType = null | string

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    isRegister: false,
    error: null as null | string,
    isChange: false,
    email: null as null | string
}


type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case SET_REGISTER_STATUS:
            return {...state, isRegister: action.status}
        case SET_ERROR_STATUS:
            return {...state, error: action.status}
        case REQUEST_FOR_NEW_PASSWORD:
            return {...state, isChange: action.payload.status, email: action.payload.email}
        default:
            return {...state}
    }
}

export const setRegisterStatus = (status: boolean) => {
    return {
        type: SET_REGISTER_STATUS,
        status
    } as const
}
export const setErrorStatus = (status: string) => {
    return {
        type: SET_ERROR_STATUS,
        status
    } as const
}
export const setRequestNewPassword = (status: boolean, email: null | string) => {
    return {
        type: REQUEST_FOR_NEW_PASSWORD,
        payload: {
            status,
            email
        }
    } as const
}


export const createUser = (data: RegisterType): AppThunk => (dispatch) => {
    authAPI.registration(data)
        .then(response => {
            dispatch(setRegisterStatus(true))
        })
        .catch(response => {
            dispatch(setErrorStatus(response.response.data.error))
        })
}

export const createNewPassword = (data: UpdatePasswordType): AppThunk => (dispatch) => {

    let {email} = data

    authAPI.update(data)
        .then(response => {
            dispatch(setRequestNewPassword(true, email))
        })
        .catch(response => {
            console.log(response)
        })
}

export type AuthActionsType = SetRegisterStatus | SetErrorStatus | SetERequestNewPassword

export type SetRegisterStatus = ReturnType<typeof setRegisterStatus>
export type SetErrorStatus = ReturnType<typeof setErrorStatus>
export type SetERequestNewPassword = ReturnType<typeof setRequestNewPassword>