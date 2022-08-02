import {instance} from "../auth/authAPI";
import {AxiosResponse} from "axios";

export const packsAPI = {
    getCards: (params: CardParamsType) => {

        return instance.get<ResponseType>(`cards/pack`, {params: {...params}})
    }
}

export type CardPackType = {
    cardsCount: number
    created: string
    deckCover: null
    grade: number
    more_id: string
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}

export type ResponseType = {
    cardPacks: CardPackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}

export type CardParamsType = {
    packName?: string;
    min?: number;
    max?: number;
    sortPacks?: any;
    page?: number;
    pageCount?: number;
    user_id?: string;
};