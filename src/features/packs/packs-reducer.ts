
const initialState= {

}


type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

type AppActionsType = any