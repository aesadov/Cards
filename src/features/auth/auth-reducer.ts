
const initialState= {}


type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return {...state}
    }
}

export type AuthActionsType = any