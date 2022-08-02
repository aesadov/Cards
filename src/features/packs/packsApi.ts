import {instance} from "../auth/authAPI";

export type GetCardsType = {

    packName?: string
    min?: number
    max?: number
    sortPacks?: string
    page?: number
    pageCount?: number
    user_id?: string
}

export type CardsPackType = {

    id: string
    user_id: string
    name: string
    cardsCount: number
    created: string
    updated: string

}

export type GetCardsPackResponseType = {
    cardPacks: Array<CardsPackType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}



export const packsAPI = {
    getPacks: () => {
        return instance
            .get<GetCardsPackResponseType>('/cards/pack', )
            // .then((res) => res.data)
    }
}