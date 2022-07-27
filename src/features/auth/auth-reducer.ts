import {authAPI, LoginParamsType, UserType, RegisterType, UpdatePasswordType} from './authAPI'
import {AppThunk} from '../../app/store';
import {initialAC} from "../../app/app-reducer";


const SET_REGISTER_STATUS = 'AUTH/SET_REGISTER_STATUS'
const SET_ERROR_STATUS = 'AUTH/SET_ERROR_STATUS'
const REQUEST_FOR_NEW_PASSWORD = 'AUTH/REQUEST_FOR_NEW_PASSWORD'

const initialState = {
    isLoggedIn: false,
    user: {} as UserType,
    error: null as string | null,
    isRegister: false,
    isChange: false,
    email: null as null | string
}

export type StatusType = null | string

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case 'auth/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        case 'auth/SET-USER':
            return {...state, user: {...state.user,...action.user}}
        case 'auth/SET_ERROR_STATUS':
            return {...state, error: action.error}
        case SET_REGISTER_STATUS:
            return {...state, isRegister: action.status}
        case REQUEST_FOR_NEW_PASSWORD:
            return {...state, isChange: action.payload.status, email: action.payload.email}

        default:
            return {...state}
    }
}

export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'auth/SET-IS-LOGGED-IN', value} as const)

export const setUserAC = (user: UserType) =>
    ({type: 'auth/SET-USER', user} as const)

export const setErrorStatusAC = (error: string) =>
    ({type: 'auth/SET_ERROR_STATUS', error} as const)


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

export const loginTC = (data: LoginParamsType): AppThunk => (dispatch) => {

    authAPI.login(data)

        .then(res => {
            console.log(res.data)
            dispatch(setIsLoggedInAC(true))
            dispatch(setUserAC(res.data))
        })
        .catch(response => {
            dispatch(setErrorStatusAC(response.response.data.error))
            console.log(response.response.data.error)
        })
}

export const meThunkAC = (): AppThunk => (dispatch) => {

    dispatch(initialAC(true))
    authAPI.me().then((res) => {
        console.log('meThunk', res)
            dispatch(setUserAC(res.data))
            dispatch(initialAC(false))
            dispatch(setIsLoggedInAC(true))
        }
    )

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

export const editNameThunkAC = (name: string ): AppThunk => (dispatch) => {
    authAPI.updateUserName(name)
        .then((res) => {
                dispatch(setUserAC(res.data))
            }
        ).catch((e) => {
        console.log(e)
    })


}

export type AuthActionsType =
    ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setErrorStatusAC>
    | ReturnType<typeof setRegisterStatus>
    | ReturnType<typeof setRequestNewPassword>
