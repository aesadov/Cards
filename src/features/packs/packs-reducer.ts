import {AppThunk} from "../../app/store";
import {initialAC, setAppErrorAC, setAppStatusAC} from "../../app/app-reducer";
import {authAPI} from "../auth/authAPI";
import {setIsLoggedInAC, setUserAC} from "../auth/auth-reducer";
import {useDispatch} from "react-redux";
import {GetCardsType, packsAPI} from "./packsApi";
import {Dispatch} from "redux";
import {useAppDispatch} from "../../common/hooks/hooks";

const GET_PACKS_PACK = 'GET_PACKS_PACK';
const SEARCH_NAME = "SEARCH_NAME"


const initialState= {
    cardPacks: [
        {
            id: '',
            user_id: '',
            name: '',
            cardsCount: 0,
            created: '',
            updated: ''
        }
    ],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 0,
    // params: Data,
}

type InitialStateType = typeof initialState




export const packsReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case GET_PACKS_PACK:
            return action.data
        /*...state, ...action.data, cardPacks: action.data.cardPacks.map(pack => ({ ...pack }))*/

        case SEARCH_NAME: {
            return {...state, cardPacks: state.cardPacks.filter(card => card.name === action.name)}
        }

        default:
            return state
    }
}


export const getAllCardsPackAC = (data: InitialStateType) => ({ type: GET_PACKS_PACK, data }as const)
export const setSearchNameAC = (name: string) => ({type: SEARCH_NAME, name}as const)



export const getCardsPackTC = (): AppThunk => (dispatch ) => {
    dispatch(setAppStatusAC('loading'))
    packsAPI.getPacks().then(res => {
        console.log(res)
        // dispatch(getAllCardsPackAC(res.data))
        dispatch(setAppStatusAC('succeeded'))
    }).catch(e => {
        dispatch(setAppErrorAC(e.response.data.error))
    })
}


type AppActionsType = any




