import {CardPackType, CardParamsType, packsAPI, ResponseType} from "./packsApi";
import {AppRootStateType, AppThunk} from "../../app/store";
import {setAppStatusAC} from "../../app/app-reducer";

const initialState = {
    cardPacks: null as null | CardPackType[],
    cardPacksTotalCount: null as null | number,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 5,
    token: null as null | number,
    tokenDeathTime: null as null | number,
    params: {
        packName: undefined,
        min: undefined,
        max: undefined,
        sortPacks: undefined,
        page: undefined,
        pageCount: undefined,
        user_id: undefined,
    } as CardParamsType
}


type InitialStateType = typeof initialState

export const packsReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'packs/INITIAL_PACKS':
            return {
                ...state,
                cardPacks: action.data.cardPacks,
                minCardsCount: action.data.minCardsCount,
                maxCardsCount: action.data.maxCardsCount,
                cardPacksTotalCount: action.data.cardPacksTotalCount,
            }
        case 'packs/CHANGE_PARAMS':
            return {
                ...state,
                params: {...state.params, ...action.params}
            }
        default:
            return state
    }
}

export const initialCards = (data: ResponseType) => ({type: 'packs/INITIAL_PACKS', data}) as const
export const changeMinMaxCards = (data: number[]) => ({type: 'packs/CHANGE_MIN_MAX_PACKS', data}) as const
export const changeParamsCards = (params: CardParamsType) => ({type: 'packs/CHANGE_PARAMS', params}) as const


export const setPacks = (): AppThunk => async (dispatch, getState: () => AppRootStateType) => {
    const params = getState().packs.params

    dispatch(setAppStatusAC('loading'))
    try {
        const res = await packsAPI.getCards(params)
        dispatch(initialCards(res.data))
        dispatch(setAppStatusAC('succeeded'))
    } catch (e){
        console.log(e)
    }
}

type AppActionsType = ReturnType<typeof initialCards> | ReturnType<typeof changeMinMaxCards> | ReturnType<typeof changeParamsCards>