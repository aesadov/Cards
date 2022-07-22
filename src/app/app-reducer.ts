

const initialState= {}


type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return {...state}
    }
}

export type AppActionsType = any