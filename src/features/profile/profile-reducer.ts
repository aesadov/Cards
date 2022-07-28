import {useAppDispatch} from "../../common/hooks/hooks";
import {authAPI, instance, UpdateUserType} from "../auth/authAPI";
import {AppThunk} from "../../app/store";
import {setIsLoggedInAC, setUserAC} from "../auth/auth-reducer";



let initialState = {
    value: '',
    status: false,


}

type InitialStateType = typeof initialState;
export type ProfileActionsType = ReturnType<typeof logoutAC>

const LOG_OUT_VALUE = "LOG_OUT_VALUE";

const EDIT_NAME_MODE = 'EDIT_NAME_MODE';



export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case 'LOG_OUT_VALUE':
            return {...state,}

        default:
            return {...state}
    }
}

export const logoutAC = () => {
    return {
        type: "LOG_OUT_VALUE"
    } as const
}


export const logoutThunkAC = (): AppThunk => (dispatch) => {
    authAPI.logout().then((res) => {
            dispatch(setIsLoggedInAC(false))

        }
    )
}

export const editNameThunkAC = (data: UpdateUserType): AppThunk => (dispatch) => {
    authAPI.updateUser(data).then((res) => {
            dispatch(setUserAC(res.data))
        }
    )


}


const editNameAC = (data: UpdateUserType) => {
    return {
        type: 'EDIT_NAME_MODE',
        data
    } as const
}


export const meThunkAC = (): AppThunk => (dispatch) => {

    // dispatch(initialAC(true))
    authAPI.me().then((res) => {
            // @ts-ignore
        dispatch(setUserAC(res.data))
            // dispatch(initialAC(false))
        dispatch(setIsLoggedInAC(true))
        }
    )
}


// export const editAvatarAC = (data: UpdateUserType) => {
//     return {
//         type: 'CHANGE_AVATAR_MODE',
//         data
//     } as const
// }




// export const editAvatarThunkAC = (data: UpdateUserType): AppThunk => (dispatch) => {
//     authAPI.updateUser(data).then((res) => {
//
//             dispatch(setUserAC(res.data))
//         }
//     )
//
//
// }

