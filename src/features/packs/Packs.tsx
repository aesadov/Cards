import React, {useEffect} from 'react';
import {RangeTable} from "../../common/UniversalComponents/tableComponent/RangeTable";
import {ShowPacksButton} from "../../common/UniversalComponents/tableComponent/ShowPacksButton";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {changeParamsPacks, createPack, removePack, setPacks, updateUserPack} from "./packs-reducer";
import {useDebounce} from "../../common/hooks/useDebounce";
import {PacksTable} from "../../common/UniversalComponents/tableComponent/PacksTable";
import {InputTable} from "../../common/UniversalComponents/tableComponent/InputTable";
import {Button} from '../../common/UniversalComponents/Button';
import {PackParamsType} from "./packsApi";
import {PaginationComponent} from "../../common/UniversalComponents/tableComponent/Pagination";
import {PageCount} from "../../common/UniversalComponents/tableComponent/PageCount";
import {Navigate} from "react-router-dom";
import {changeParamsCards} from "../cards/cards-reducer";
import {TableWrapper} from "../../common/UniversalComponents/tableComponent/TableWrapper";
import {HeaderTable} from "../../common/UniversalComponents/tableComponent/HeaderTable";
import {NameCellType} from "../../common/TypeForSort";


const nameColumn: Array<{name: string, isDone: boolean, sortNane: NameCellType}> = [
    {name: 'Pack Name', isDone: true, sortNane: 'packName'},
    {name: 'Cards', isDone: true, sortNane: 'cards'},
    {name: 'Last Updated', isDone: true, sortNane: 'update'},
    {name: 'Created by', isDone: true, sortNane: 'created'},
    {name: 'Action', isDone: false, sortNane: 'action'},
]


export const Packs = () => {

    const dispatch = useAppDispatch()

    const min = useAppSelector(state => state.packs.minCardsCount)
    const max = useAppSelector(state => state.packs.maxCardsCount)
    const status = useAppSelector(state => state.app.status)
    const params = useAppSelector(state => state.packs.params)
    const userId = useAppSelector(state => state.auth.user._id)
    const packs = useAppSelector(state => state.packs.cardPacks)
    const defaultPage = useAppSelector(state => state.packs.page)
    const pageCount = useAppSelector(state => state.packs.pageCount)
    const cardPacksTotalCount = useAppSelector(state => state.packs.cardPacksTotalCount)
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    useEffect(() => {
        dispatch(setPacks())
    }, [useDebounce(params, 1000)])//  в зависимости идут фильтрации, пагинации, и т.д.

    const minMaxHandler = (value: number[]) => {
        dispatch(changeParamsPacks({min: value[0], max: value[1]}))
    }
    const showPacksButtonHandler = (user_id: undefined | string) => {
        dispatch(changeParamsPacks({user_id}))
    }
    const addPack = () => {
        dispatch(createPack())
    }
    const deletePack = (id: string) => {
        dispatch(removePack(id))
    }
    const updatePack = (id: string) => {
        dispatch(updateUserPack(id))
    }
    const filteredPacks = (params: PackParamsType) => {
        dispatch(changeParamsPacks(params))
    }
    const changePageNumber = (page: number) => {
        dispatch(changeParamsPacks({page}))
    }
    const changePageCount = (pageCount: number) => {
        dispatch(changeParamsPacks({pageCount}))
    }
    const redirectPageCards = (id: string) => {
        dispatch(changeParamsCards({cardsPack_id: id}))
    }

    const page = params.page ? params.page : defaultPage
    const pageTotalCount = cardPacksTotalCount ? Math.ceil(cardPacksTotalCount / pageCount) : 10
    const pageSize = params.pageCount ? params.pageCount : pageCount

    if (status === 'loading') {
        return <h1 style={{textAlign: 'center', marginTop: '150px'}}>Loading...</h1>
    }
    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div style={{
            maxWidth: '1250px',
            padding: '50px 20px',
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto'
        }}>
            <div style={{display: 'flex', gap: '40px', marginBottom: '25px', alignItems: "center"}}>
                <ShowPacksButton paramsId={params.user_id} callback={showPacksButtonHandler} userId={userId}/>
                <RangeTable
                    newMin={params.min}
                    newMax={params.max}
                    min={min}
                    max={max}
                    width={250}
                    minDistance={5}
                    callback={minMaxHandler}
                />
                <InputTable callback={filteredPacks}/>
                <Button name={'Add Pack'} callback={addPack}/>
            </div>
            <TableWrapper>
                <HeaderTable data={nameColumn}/>
                <PacksTable
                    callbackPage={redirectPageCards}
                    callbackUpdate={updatePack}
                    callback={deletePack}
                    userId={userId}
                    data={packs}
                />
                <PaginationComponent pageCount={pageTotalCount} page={page} callback={changePageNumber}/>
                <PageCount pageCount={pageSize} callback={changePageCount}/>
            </TableWrapper>
            {packs.length === 0 && <h2>ups</h2>}
        </div>
    );
};

