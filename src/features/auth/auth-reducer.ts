import {authAPI, LoginParamsType, UserType, RegisterType, UpdatePasswordType} from './authAPI'
import {AppThunk} from '../../app/store';
import {initialAC} from "../../app/app-reducer";



const SET_REGISTER_STATUS = 'AUTH/SET_REGISTER_STATUS'
const SET_ERROR_STATUS = 'AUTH/SET_ERROR_STATUS'
const REQUEST_FOR_NEW_PASSWORD = 'AUTH/REQUEST_FOR_NEW_PASSWORD'
const SET_IS_LOGGED_IN = 'auth/SET-IS-LOGGED-IN'
const SET_CHANGE_PASS_STATUS = 'auth/SET-CHANGE-PASS-STATUS'
const SET_USER = 'auth/SET-USER'
const SET_LOGIN_ERROR_STATUS = 'auth/SET_LOGIN_ERROR_STATUS'

const initialState = {
    isLoggedIn: false,
    user: {} as UserType,
    loginError: null as string | null,
    isRegister: false,
    isChange: false,
    email: null as null | string,
    changePassStatus: false   // при изменении пароля (NewPassword.tsx) при 'true' редирект на '/login'
}
export type StatusType = null | string

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.value}
        case SET_USER:
            return {...state, user: action.user}
        case SET_LOGIN_ERROR_STATUS:
            return {...state, loginError: action.error}
        case SET_REGISTER_STATUS:
            return {...state, isRegister: action.status}
        case REQUEST_FOR_NEW_PASSWORD:
            return {...state, isChange: action.payload.status, email: action.payload.email}
        case SET_CHANGE_PASS_STATUS:
            return {...state, changePassStatus: action.status}
        default:
            return {...state}
    }
}

export const loginTC = (data: LoginParamsType): AppThunk => (dispatch) => {

    authAPI.login(data)

        .then(res => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setUserAC(res.data))
        })
        .catch(response => {
            dispatch(setLoginErrorStatusAC(response.response.data.error))
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

export const setChangePassStatusAC = (status: boolean) =>
    ({type: SET_CHANGE_PASS_STATUS, status} as const)

export const setIsLoggedInAC = (value: boolean) =>
    ({type: SET_IS_LOGGED_IN, value} as const)

export const setUserAC = (user: UserType) =>
    ({type: SET_USER, user} as const)

export const setLoginErrorStatusAC = (error: string) =>
    ({type: SET_LOGIN_ERROR_STATUS, error} as const)


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

export const setNewPassTC = (password: string, resetPasswordToken: string): AppThunk => (dispatch) => {
    authAPI.setNewPass({password, resetPasswordToken})
        .then(res => {
            dispatch(setChangePassStatusAC(true))
        })
        .catch(res => {console.log(res)})
}

export const editNameThunkAC = (name: string ): AppThunk => (dispatch) => {
    authAPI.updateUserName(name)
        .then((res) => {
                dispatch(setUserAC(res.data.updatedUser))
            }
        ).catch((e) => {
        console.log(e)
    })


}

export type AuthActionsType =
    ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setLoginErrorStatusAC>
    | ReturnType<typeof setRegisterStatus>
    | ReturnType<typeof setRequestNewPassword>
    | ReturnType<typeof setChangePassStatusAC>
