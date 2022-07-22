

const initialState= {}


type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return {...state}
    }
}

export type ProfileActionsType = any