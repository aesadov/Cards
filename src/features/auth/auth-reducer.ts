import {authAPI, LoginParamsType, UserType} from './authAPI'
import {AppThunk} from '../../app/store';

const initialState = {
    isLoggedIn: false,
    user: {} as UserType,
    error: null as string | null
}

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case 'auth/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        case 'auth/SET-USER':
            return {...state, user: action.user}
        case 'auth/SET_ERROR_STATUS':
            return {...state, error: action.error}
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
            dispatch(setErrorStatusAC(response.response.data.error))
            console.log(response.response.data.error)
        })
}

export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'auth/SET-IS-LOGGED-IN', value} as const)

export const setUserAC = (user: UserType) =>
    ({type: 'auth/SET-USER', user} as const)

export const setErrorStatusAC = (error: string) =>
    ({type: 'auth/SET_ERROR_STATUS', error} as const)

export type AuthActionsType = ReturnType<typeof setIsLoggedInAC> | ReturnType<typeof setUserAC> | ReturnType<typeof setErrorStatusAC>