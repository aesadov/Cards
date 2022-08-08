import React from 'react';
import {PacksTableBody} from "./PacksTableBody";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import {HeaderTable} from "../../UniversalComponents/tableComponent/HeaderTable";
import TableContainer from "@mui/material/TableContainer";
import {NameCellType} from "../../TypeForSort";
import {PaginationComponent} from "../../UniversalComponents/tableComponent/Pagination";
import {PageCount} from "../../UniversalComponents/tableComponent/PageCount";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {changeParamsPacks, createPack} from "../../../features/packs/packs-reducer";
import {Button} from "../../UniversalComponents/Button";

const nameColumn: Array<{ name: string, isDone: boolean, sortNane: NameCellType }> = [
    {name: 'Pack Name', isDone: true, sortNane: 'packName'},
    {name: 'Cards', isDone: true, sortNane: 'cards'},
    {name: 'Last Updated', isDone: true, sortNane: 'update'},
    {name: 'Created by', isDone: true, sortNane: 'created'},
    {name: 'Action', isDone: false, sortNane: 'action'},
]

export const PacksTable = () => {

    const dispatch = useAppDispatch()

    const packs = useAppSelector(state => state.packs.cardPacks)
    const defaultPage = useAppSelector(state => state.packs.page)
    const pageCount = useAppSelector(state => state.packs.pageCount)
    const cardPacksTotalCount = useAppSelector(state => state.packs.cardPacksTotalCount)
    const paramsPage = useAppSelector(state => state.packs.params.page)
    const paramsPageCount = useAppSelector(state => state.packs.params.pageCount)

    const changePageNumberHandler = (page: number) => {
        dispatch(changeParamsPacks({page}))
    }
    const changePageSizeHandler = (pageCount: number) => {
        dispatch(changeParamsPacks({pageCount}))
    }

    const addPack = () => {
        dispatch(createPack())
    }

    const page = paramsPage ? paramsPage : defaultPage
    const pageTotalCount = cardPacksTotalCount ? Math.ceil(cardPacksTotalCount / pageCount) : 0
    const pageSize = paramsPageCount ? paramsPageCount : pageCount

    return (
        <>
            {packs.length > 0
                ?
                <div>
                    < TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <HeaderTable data={nameColumn}/>
                            <PacksTableBody/>
                        </Table>
                    </TableContainer>
                    <div style={{display: "flex", marginTop: " 20px", alignItems: "center", gap: "20px"}}>
                        <PaginationComponent pageCount={pageTotalCount} page={page} callback={changePageNumberHandler}/>
                        <PageCount callback={changePageSizeHandler} pageCount={pageSize}/>
                    </div>
                </div>
                :
                <div>
                    <h1 style={{marginTop: '50px'}}>You don't have pack. Click add new pack</h1>
                    <Button name={'Add Pack'} callback={addPack}/>
                </div>
            }
        </>

    );
};
