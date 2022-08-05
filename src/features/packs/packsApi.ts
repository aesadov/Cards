import {instance} from "../auth/authAPI";
import {sortPacks} from "../../common/TypeForSort";

export const packsAPI = {
    getCards: (params: PackParamsType) => {

        return instance.get<ResponseType>(`cards/pack`, {params: params})
    },
    createPack: (cardsPack: PackCreateType) => {
        return instance.post(`cards/pack`, {cardsPack})
    },
    deletePack: (id: string) => {
        return instance.delete(`cards/pack?id=${id}`)
    },
    updatePack: (cardsPack: PackUpdateType) => {
        return instance.put(`cards/pack`, {cardsPack})
    }
}

export type PackCreateType = {
    name?: string
    deckCover?: string
    private?: boolean
}
export type PackUpdateType = {
    _id: string
    name?: string
    deckCover?: string
    private?: boolean
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

export type PackParamsType = {
    packName?: string;
    min?: number;
    max?: number;
    sortPacks?: sortPacks;
    page?: number;
    pageCount?: number;
    user_id?: string;
};