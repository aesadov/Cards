let initialState = {
    value: ''
}

type InitialStateType = typeof initialState;
export type ProfileActionsType = ReturnType<typeof logoutAC>

const LOG_OUT_VALUE = "LOG_OUT_VALUE";

const logoutReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case 'LOG_OUT_VALUE':
            return {...state, }

        default:
            return {...state}
    }
}

    const logoutAC = () => {
        return {
            type: "LOG_OUT_VALUE"
        } as const
    }






