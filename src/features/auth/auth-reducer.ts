import {authAPI, LoginParamsType, UserType, RegisterType, UpdatePasswordType} from './authAPI'
import {AppThunk} from '../../app/store';
import {initialAC, setAppErrorAC, setAppStatusAC} from "../../app/app-reducer";

const initialState = {
    isLoggedIn: false,
    user: {} as UserType,
    loginError: null as string | null,
    isRegister: false,
    isChange: false,
    email: null as null | string,
    changePassStatus: false   // при изменении пароля (NewPassword.tsx) при 'true' редирект на '/login'
}

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case 'auth/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        case 'auth/SET-USER':
            return {...state, user: action.user}
        case 'auth/SET_LOGIN_ERROR_STATUS':
            return {...state, loginError: action.error}
        case 'auth/SET_REGISTER_STATUS':
            return {...state, isRegister: action.status}
        case 'auth/REQUEST_FOR_NEW_PASSWORD':
            return {...state, isChange: action.payload.status, email: action.payload.email}
        case 'auth/SET-CHANGE-PASS-STATUS':
            return {...state, changePassStatus: action.status}
        default:
            return state
    }
}

export const setChangePassStatusAC = (status: boolean) => ({type: 'auth/SET-CHANGE-PASS-STATUS', status} as const)
export const setIsLoggedInAC = (value: boolean) => ({type: 'auth/SET-IS-LOGGED-IN', value} as const)
export const setUserAC = (user: UserType) => ({type: 'auth/SET-USER', user} as const)
export const setLoginErrorStatusAC = (error: string) => ({type: 'auth/SET_LOGIN_ERROR_STATUS', error} as const)
export const setRegisterStatus = (status: boolean) => ({type: 'auth/SET_REGISTER_STATUS', status}) as const
export const setRequestNewPassword = (status: boolean, email: null | string) => ({type: 'auth/REQUEST_FOR_NEW_PASSWORD', payload: {status, email}}) as const


export const loginTC = (data: LoginParamsType): AppThunk => async dispatch => {
    dispatch(setAppStatusAC('loading'))
    try{
       const res = await authAPI.login(data)
        dispatch(setIsLoggedInAC(true))
        dispatch(setUserAC(res.data))
    } catch (e: any) {
        dispatch(setLoginErrorStatusAC(e.response.data.error))
        dispatch(setAppErrorAC(e.response.data.error))
        dispatch(setAppStatusAC('succeeded'))
    }
}

export const meThunkAC = (): AppThunk => async dispatch => {

    try{
        dispatch(setAppStatusAC('loading'))
        dispatch(initialAC(true))
        const res = await authAPI.me()
        dispatch(setUserAC(res.data))
        dispatch(setIsLoggedInAC(true))
    } catch (e: any) {
        dispatch(setLoginErrorStatusAC(e.response.data.error))
        dispatch(setAppStatusAC('succeeded'))
    } finally {
        dispatch(initialAC(false))
    }
}


export const createUser = (data: RegisterType): AppThunk => async dispatch => {

    try{
        dispatch(setAppStatusAC('loading'))
        await authAPI.registration(data)
        dispatch(setRegisterStatus(true))
        dispatch(setIsLoggedInAC(true))
        dispatch(setAppStatusAC('succeeded'))
    } catch (e: any) {
        dispatch(setAppErrorAC(e.response.data.error))
        dispatch(setAppStatusAC('succeeded'))
    } finally {
        dispatch(initialAC(false))
    }
}

export const createNewPassword = (data: UpdatePasswordType): AppThunk => (dispatch) => {

    let {email} = data
    dispatch(setAppStatusAC('loading'))
    authAPI.update(data)
        .then(response => {
            dispatch(setRequestNewPassword(true, email))
        })
        .catch(response => {
            dispatch(setAppErrorAC(response.response.data.error))
        })
        .finally(() => {
            dispatch(setAppStatusAC('succeeded'))
        })
}

export const setNewPassTC = (password: string, resetPasswordToken: string): AppThunk => (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.setNewPass({password, resetPasswordToken})
        .then(res => {
            dispatch(setChangePassStatusAC(true))
        })
        .catch(error => {
            dispatch(setAppErrorAC(error.response.data.error))
        })
        .finally(() => {
            dispatch(setAppStatusAC('succeeded'))
        })
}

export const editNameThunkAC = (name: string): AppThunk => (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.updateUserName(name)
        .then((res) => {
            dispatch(setUserAC(res.data.updatedUser))
        }).catch((error) => {
        dispatch(setAppErrorAC(error.response.data.error))
    })
        .finally(() => {
            dispatch(setAppStatusAC('succeeded'))
        })

}

export type AuthActionsType =
    ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setLoginErrorStatusAC>
    | ReturnType<typeof setRegisterStatus>
    | ReturnType<typeof setRequestNewPassword>
    | ReturnType<typeof setChangePassStatusAC>
