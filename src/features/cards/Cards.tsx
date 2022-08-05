import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {addNewCard, changeParamsCards, setCards} from "./cards-reducer";
import {InputTable} from "../../common/UniversalComponents/tableComponent/InputTable";
import {HeaderTable} from "../../common/UniversalComponents/tableComponent/HeaderTable";
import {TableWrapper} from '../../common/UniversalComponents/tableComponent/TableWrapper';
import style from "./Cards.module.css"
import {CardsTable} from "../../common/UniversalComponents/tableComponent/CardsTable";
import {Button} from "../../common/UniversalComponents/Button";
import {useDebounce} from "../../common/hooks/useDebounce";
import {PaginationComponent} from "../../common/UniversalComponents/tableComponent/Pagination";
import {PageCount} from "../../common/UniversalComponents/tableComponent/PageCount";
import {NameCellType} from "../../common/TypeForSort";

const nameColumn: Array<{name: string, isDone: boolean, sortNane: NameCellType}> = [
    {name: 'Question', isDone: false, sortNane: 'update'},
    {name: 'Answer', isDone: false, sortNane: 'update'},
    {name: 'Last Updated', isDone: true, sortNane: 'update'},
    {name: 'Grade', isDone: false, sortNane: 'update'},
    {name: 'Action', isDone: false, sortNane: 'update'},
]

export const Cards = () => {

    const dispatch = useAppDispatch()
    const cards = useAppSelector(state => state.cards.cards)
    const userId = useAppSelector(state => state.auth.user._id)
    const packId = useAppSelector(state => state.cards.params.cardsPack_id)
    const packUserId = useAppSelector(state => state.cards.packUserId)
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

    const changePageNumber = (page: number) => {
        dispatch(changeParamsCards({page, cardsPack_id: packId}))
    }
    const changePageCount = () => {
    }
    const pageTotalCount = Math.ceil(cardsTotalCount / pageCount)

    if (status === 'loading') {
        return <h1 style={{textAlign: 'center', marginTop: '150px'}}>Loading...</h1>
    }

    return (
        <div className={style.bodyPage}>
            <div className={style.searchBnt}>
                <InputTable callback={() => {
                }}/>
                {userId === packUserId && <Button callback={addCard} name={'Add new card'}/>}
            </div>
            {cards.length !== 0
                ? <TableWrapper className={style.bodyTable}>
                    <HeaderTable packId={packId} userId={userId} data={nameColumn}/>
                    <CardsTable userId={userId} data={cards}/>
                    <PaginationComponent pageCount={pageTotalCount} page={page} callback={changePageNumber}/>
                    <PageCount pageCount={pageCount} callback={changePageCount}/>
                </TableWrapper>
                : <h2>ups</h2>}
        </div>
    );
};


