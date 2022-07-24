import {authAPI, RegisterType} from "./authAPI";
import {AppThunk} from "../../app/store";

const SET_REGISTER_STATUS = 'APP/SET_REGISTER_STATUS'
const SET_ERROR_STATUS = 'APP/SET_ERROR_STATUS'

export type StatusType = null | string

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    registerStatus: false,
    error: null as null | string
}


type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case SET_REGISTER_STATUS:
            return {...state, registerStatus: action.status}
        case SET_ERROR_STATUS:
            return {...state, error: action.status}
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


export const createUser = (data: RegisterType): AppThunk => (dispatch) => {
    authAPI.registration(data)
        .then(response => {
            dispatch(setRegisterStatus(true))
        })
        .catch(response => {
            dispatch(setErrorStatus(response.response.data.error))
        })
}

export type AuthActionsType = SetRegisterStatus | SetErrorStatus

export type SetRegisterStatus = ReturnType<typeof setRegisterStatus>
export type SetErrorStatus = ReturnType<typeof setErrorStatus>