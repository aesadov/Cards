import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {addNewCard, changeParamsCards, setCards} from "./cards-reducer";
import {InputTable} from "../../common/UniversalComponents/tableComponent/InputTable";
import {HeaderTable} from "../../common/UniversalComponents/tableComponent/HeaderTable";
import {TableWrapper} from '../../common/UniversalComponents/tableComponent/TableWrapper';
import style from "./Cards.module.css"
import {CardsTable} from "../../common/UniversalComponents/tableComponent/CardsTable";
import {UniversalButton} from "../../common/UniversalComponents/UniversalButton";
import {useDebounce} from "../../common/hooks/useDebounce";
import {PaginationComponent} from "../../common/UniversalComponents/tableComponent/Pagination";
import {PageCount} from "../../common/UniversalComponents/tableComponent/PageCount";

const nameColumn = [
    {name: 'Question', isDone: false},
    {name: 'Answer', isDone: false},
    {name: 'Last Updated', isDone: true},
    {name: 'Grade', isDone: false},
]

export const Cards = () => {

    const dispatch = useAppDispatch()
    const cards = useAppSelector(state => state.cards.cards)
    const userId = useAppSelector(state => state.auth.user._id)
    const packId = useAppSelector(state => state.cards.params.cardsPack_id)
    const params = useAppSelector(state => state.cards.params)
    const page = useAppSelector(state => state.cards.page)
    const pageCount = useAppSelector(state => state.cards.pageCount)
    const cardsTotalCount = useAppSelector(state => state.cards.cardsTotalCount)
    const status = useAppSelector(state => state.app.status)


    useEffect(() => {
        dispatch(setCards())
    }, [useDebounce(params, 1000)])

    const addCard = () => {
      dispatch(addNewCard())
    }

    const changePageNumber = (page:number) => {dispatch(changeParamsCards({page,cardsPack_id: packId }))}
    const changePageCount = () => {}
    const pageTotalCount = Math.ceil(cardsTotalCount/pageCount)
    console.log(packId)
    if (status === 'loading') {
        return <h1 style={{textAlign: 'center', marginTop: '150px'}}>Loading...</h1>
    }
    
    return (
        <div className={style.bodyPage}>
            <div className={style.searchBnt}>
                <InputTable callback={() => {
                }}/>
                {userId === packId && <UniversalButton callback={addCard} name={'Add new card'}/>}
            </div>
            <TableWrapper className={style.bodyTable}>
                <HeaderTable data={nameColumn}/>
                <CardsTable userId={userId} data={cards}/>
                <PaginationComponent pageCount={pageTotalCount} page={page} callback={changePageNumber}/>
                <PageCount pageCount={pageCount} callback={changePageCount}/>
            </TableWrapper>
            {cards.length === 0 && <h2>ups</h2>}
        </div>
    );
};


