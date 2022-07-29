export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState= {
    isInitialized: false,
    error: null as null | string,
    status: 'succeeded' as RequestStatusType
}


type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case IS_INITIALIZED:
            return {...state, isInitialized: action.isInitialized}
        case SET_APP_ERROR:
            return {...state, error: action.error}
        case SET_APP_STATUS:
            return {...state, status: action.status}
        default:
            return {...state}
    }
}


const IS_INITIALIZED = 'IS_INITIALIZED'
const SET_APP_ERROR = 'app/SET_APP_ERROR'
const SET_APP_STATUS = 'app/SET_APP_STATUS'




export const initialAC = (isInitialized: boolean) => {
    return {
        type: IS_INITIALIZED,
        isInitialized
    } as const

}
export const setAppErrorAC= (error: null | string) => {
    return {
        type: SET_APP_ERROR,
        error
    } as const
}
export const setAppStatusAC= (status: RequestStatusType) => {
    return {
        type: SET_APP_STATUS,
        status
    } as const
}

export type AppActionsType = ReturnType<typeof initialAC> | ReturnType<typeof setAppErrorAC> | ReturnType<typeof setAppStatusAC>