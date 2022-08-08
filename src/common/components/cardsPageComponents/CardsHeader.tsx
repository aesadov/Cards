import React from 'react';
import style from "../../../features/cards/Cards.module.css";
import {InputTable} from "../../UniversalComponents/tableComponent/InputTable";
import {Button} from "../../UniversalComponents/Button";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {addNewCard} from "../../../features/cards/cards-reducer";

export const CardsHeader = () => {

    const dispatch = useAppDispatch()

    const userId = useAppSelector(state => state.auth.user._id)
    const packUserId = useAppSelector(state => state.cards.packUserId)

    const addCard = () => {
        dispatch(addNewCard())
    }

    return (
        <div className={style.searchBnt}>
            <InputTable page={'cards'}/>
            {userId === packUserId && <Button callback={addCard} name={'Add new card'}/>}
        </div>
    );
};