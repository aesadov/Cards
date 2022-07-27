

const initialState= {
    isInitialized: false
}


type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "IS_INITIALIZED":
            return {...state, isInitialized: action.isInitialized}
        default:
            return {...state}
    }
}


const IS_INITIALIZED = 'IS_INITIALIZED'




export const initialAC = (isInitialized: boolean) => {
    return {
        type: 'IS_INITIALIZED',
        isInitialized
    }

}

export type AppActionsType = ReturnType<typeof initialAC>