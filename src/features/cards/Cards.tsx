import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {addNewCard, changeParamsCards, setCards} from "./cards-reducer";
import {InputTable} from "../../common/UniversalComponents/tableComponent/InputTable";
import {HeaderTable} from "../../common/UniversalComponents/tableComponent/HeaderTable";
import {TableWrapper} from '../../common/UniversalComponents/tableComponent/TableWrapper';
import style from "./Cards.module.css"
import {CardsTable} from "../../common/components/cardsPageComponents/CardsTable";
import {CardsHeader} from "../../common/components/cardsPageComponents/CardsHeader";

export const Cards = () => {

    const dispatch = useAppDispatch()

    const params = useAppSelector(state => state.cards.params)
    const status = useAppSelector(state => state.app.status)

    useEffect(() => {
        dispatch(setCards())
    }, [params, dispatch])

    if (status === 'loading') {
        return <h1 style={{textAlign: 'center', marginTop: '150px'}}>Loading...</h1>
    }

    return (
        <div className={style.bodyPage}>
            <CardsHeader/>
            <CardsTable/>
            <UniversalButton callback={addCard} name={'Add new card'}/>
        </div>
    );
};


