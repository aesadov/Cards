import {AppRootStateType, AppThunk} from "../../app/store";
import {setAppStatusAC} from "../../app/app-reducer";
import {CardPostType, cardsAPI, CardsParamsType, CardType, ResponseCardsType} from "./cardsAPI";

const initialState = {
    cards: [] as CardType[],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    packUserId: '',
    page: 1,
    pageCount: 4,
    token: '',
    tokenDeathTime: 0,
    params: {
        cardAnswer: undefined,
        cardQuestion: undefined,
        cardsPack_id: '',
        min: undefined,
        max: undefined,
        sortCards: undefined,
        page: undefined,
        pageCount: undefined,
    } as CardsParamsType
}


type InitialStateType = typeof initialState

export const cardsReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "cards/SET_CARDS":
            return {...state, ...action.data}
        case "cards/SET_PARAMS":
            return {...state, params: {...state.params, ...action.params}}
        case "cards/SET_CARDS_ID":
            return {...state, params: {...state.params, cardsPack_id: action.id}}
        default:
            return state
    }
}

export const changeParamsCards = (params: CardsParamsType) => ({type: "cards/SET_PARAMS", params}) as const
export const setResponseCards = (data: ResponseCardsType) => ({type: "cards/SET_CARDS", data}) as const
export const setCardsId = (id: string) => ({type: "cards/SET_CARDS_ID", id}) as const

export const setCards = (): AppThunk => async (dispatch, getState: () => AppRootStateType) => {
    const params = getState().cards.params

    dispatch(setAppStatusAC('loading'))
    try {
        const res = await cardsAPI.getCards(params)
        dispatch(setResponseCards(res.data))
        dispatch(setAppStatusAC('succeeded'))
    } catch (e) {
        console.log(e)
    }
}

export const addNewCard = (data: CardPostType): AppThunk => async dispatch => {

    dispatch(setAppStatusAC('loading'))
    try {
        await cardsAPI.createCard(data)
        dispatch(setCards())
        dispatch(setAppStatusAC('succeeded'))
    } catch (e) {
        console.log(e)
    }
}

export const removeCard = (_id: string): AppThunk => async dispatch => {

    dispatch(setAppStatusAC('loading'))
    try {
        await cardsAPI.deleteCard(_id)
        dispatch(setCards())
        dispatch(setAppStatusAC('succeeded'))
    } catch (e) {
        console.log(e)
    }
}

export const changeCard = (_id: string): AppThunk => async dispatch => {

    dispatch(setAppStatusAC('loading'))
    try {
        await cardsAPI.updateCard({_id, question: 'New ?'})
        dispatch(setCards())
        dispatch(setAppStatusAC('succeeded'))
    } catch (e) {
        console.log(e)
    }
}

type AppActionsType = ReturnType<typeof changeParamsCards> | ReturnType<typeof setResponseCards> | ReturnType<typeof setCardsId>