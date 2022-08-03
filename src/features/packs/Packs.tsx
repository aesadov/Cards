import React, {useEffect} from 'react';
import {RangeTable} from "../../common/UniversalComponents/tableComponent/RangeTable";
import {ShowPacksButton} from "../../common/UniversalComponents/tableComponent/ShowPacksButton";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {changeParamsCards, createPack, removePack, setPacks, updateUserPack} from "./packs-reducer";
import {useDebounce} from "../../common/hooks/useDebounce";
import {PacksTable} from "../../common/UniversalComponents/tableComponent/PacksTable";
import {InputTable} from "../../common/UniversalComponents/tableComponent/InputTable";
import {Button} from '../../common/UniversalComponents/Button';
import {CardParamsType} from "./packsApi";
import {PaginationComponent} from "../../common/UniversalComponents/tableComponent/Pagination";
import {PageCount} from "../../common/UniversalComponents/tableComponent/PageCount";
import {Navigate} from "react-router-dom";


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

    const minMaxHandler = (value: number[]) => {dispatch(changeParamsCards({min: value[0], max: value[1]}))}
    const showPacksButtonHandler = (user_id: undefined | string) => {dispatch(changeParamsCards({user_id}))}
    const addPack = () => {dispatch(createPack())}
    const deletePack = (id: string) => {dispatch(removePack(id))}
    const updatePack = (id: string) => {dispatch(updateUserPack(id))}
    const filteredPacks = (params: CardParamsType) => {dispatch(changeParamsCards(params))}
    const changePageNumber = (page: number) => {dispatch(changeParamsCards({page}))}
    const changePageCount = (pageCount: number) => {dispatch(changeParamsCards({pageCount}))}

    const page = params.page ? params.page : defaultPage
    const pageTotalCount = cardPacksTotalCount ? Math.ceil(cardPacksTotalCount / pageCount) : 10
    const pageSize = params.pageCount ? params.pageCount : pageCount

    if (status === 'loading') {
        return <h1 style={{textAlign: 'center', marginTop: '150px'}}>Loading...</h1>
    }
    if(!isLoggedIn){
        return <Navigate to={'/login'}/>
    }

    return (
        <div style={{maxWidth: '1250px', padding: '50px 20px', display: 'flex', flexDirection: 'column', margin: '0 auto'}}>
            <div style={{display: 'flex', gap: '40px', marginBottom: '25px', alignItems: "center"}}>
                <ShowPacksButton paramsId={params.user_id} callback={showPacksButtonHandler} userId={userId}/>
                <RangeTable newMin={params.min} newMax={params.max} min={min} max={max} width={250} minDistance={5}
                            callback={minMaxHandler}/>
                <InputTable callback={filteredPacks}/>
                <Button name={'Add Pack'} callback={addPack}/>
            </div>
            {packs && <PacksTable callbackUpdate={updatePack} callback={deletePack} userId={userId} data={packs}/>}
            <div style={{marginTop: "35px", display: 'flex',gap: '40px'}}>

                {packs && packs.length > 0
                    ? <PaginationComponent pageCount={pageTotalCount} page={page} callback={changePageNumber}/>
                    : <h2>ups</h2>
                }
                <PageCount pageCount={pageSize} callback={changePageCount}/>
            </div>
        </div>
    );
};

