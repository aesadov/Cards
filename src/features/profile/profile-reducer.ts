import {authAPI} from "../auth/authAPI";
import {AppThunk} from "../../app/store";
import {setIsLoggedInAC} from "../auth/auth-reducer";


let initialState = {
    value: '',
    status: false,


}

type InitialStateType = typeof initialState;
export type ProfileActionsType = ReturnType<typeof logoutAC>

const LOG_OUT_VALUE = "LOG_OUT_VALUE";

const EDIT_NAME_MODE = 'EDIT_NAME_MODE';
const CHANGE_AVATAR_MODE = 'CHANGE_AVATAR_MODE';


export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
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
    authAPI.logout()
        .then((res) => {
            dispatch(setIsLoggedInAC(false))

        }
    )
        .catch((e)=> {
            console.log('logoutThunkAC', e)
        })
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

