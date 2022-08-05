import {AppThunk} from "../../app/store";
import {setAppStatusAC} from "../../app/app-reducer";
import {NameCellType, SortType} from "../../common/TypeForSort";
import {PackParamsType, packsAPI, PackType, ResponsePacksType} from "./packsApi";

const initialState = {
    cardPacks: [] as PackType[],
    cardPacksTotalCount: null as null | number,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 5,
    token: null as null | number,
    tokenDeathTime: null as null | number,
    statusSort: '' as NameCellType,
    regulator: 'decr' as SortType,
    params: {
        packName: undefined,
        min: undefined,
        max: undefined,
        sortPacks: undefined,
        page: undefined,
        pageCount: undefined,
        user_id: undefined,
    } as PackParamsType
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
        case 'packs/CHANGE_STATUS_SORT':
            return {
                ...state,
                statusSort: action.statusSort,
                regulator: action.regulator
            }
        default:
            return state
    }
}

export const initialCards = (data: ResponsePacksType) => ({type: 'packs/INITIAL_PACKS', data}) as const
export const changeMinMaxCards = (data: number[]) => ({type: 'packs/CHANGE_MIN_MAX_PACKS', data}) as const
export const changeParamsPacks = (params: PackParamsType) => ({type: 'packs/CHANGE_PARAMS', params}) as const
export const changeStatusSortPacks = (statusSort: NameCellType, regulator: SortType) => ({type: 'packs/CHANGE_STATUS_SORT', statusSort, regulator}) as const


export const setPacks = (): AppThunk => async (dispatch, getState) => {
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

export const createPack = (): AppThunk => async (dispatch) => {

    dispatch(setAppStatusAC('loading'))
    try {
        await packsAPI.createPack({name: 'Test Add Pack'})
        dispatch(setPacks())
        dispatch(setAppStatusAC('succeeded'))
    } catch (e){
        console.log(e)
        dispatch(setAppStatusAC('succeeded'))
    }
}

export const removePack = (id: string): AppThunk => async (dispatch) => {

    dispatch(setAppStatusAC('loading'))
    try {
        await packsAPI.deletePack(id)
        dispatch(setPacks())
        dispatch(setAppStatusAC('succeeded'))
    } catch (e){
        console.log(e)
        dispatch(setAppStatusAC('succeeded'))
    }
}

export const updateUserPack = (id: string): AppThunk => async (dispatch) => {

    dispatch(setAppStatusAC('loading'))
    try {
        await packsAPI.updatePack({_id: id, name: 'Change name Pack'})
        dispatch(setPacks())
        dispatch(setAppStatusAC('succeeded'))
    } catch (e){
        console.log(e)
        dispatch(setAppStatusAC('succeeded'))
    }
}

type AppActionsType =
    ReturnType<typeof initialCards>
    | ReturnType<typeof changeMinMaxCards>
    | ReturnType<typeof changeParamsPacks>
    | ReturnType<typeof changeStatusSortPacks>
