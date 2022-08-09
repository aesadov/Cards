import React from 'react';
import style from "../../../features/cards/Cards.module.css";
import {InputTable} from "../../UniversalComponents/tableComponent/InputTable";
import {useAppSelector} from "../../hooks/hooks";
import {ModalCard} from "../modals/cards/ModalCard";

export const CardsHeader = () => {

    const userId = useAppSelector(state => state.auth.user._id)
    const packUserId = useAppSelector(state => state.cards.packUserId)

    return (
        <div className={style.searchBnt}>
            <InputTable page={'cards'}/>
            {userId === packUserId && <ModalCard/>}
        </div>
    );
};