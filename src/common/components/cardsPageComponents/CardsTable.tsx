import React from 'react';
import {HeaderTable} from "../../UniversalComponents/tableComponent/HeaderTable";
import {NameCellType} from "../../TypeForSort";
import {CardsTableBody} from "./CardsTableBody";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import {PageCount} from "../../UniversalComponents/tableComponent/PageCount";
import {PaginationComponent} from "../../UniversalComponents/tableComponent/Pagination";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {changeParamsCards} from "../../../features/cards/cards-reducer";


const nameColumn: Array<{ name: string, isDone: boolean, sortName: NameCellType }> = [
    {name: 'Question', isDone: false, sortName: 'update'},
    {name: 'Answer', isDone: false, sortName: 'update'},
    {name: 'Last Updated', isDone: true, sortName: 'update'},
    {name: 'Grade', isDone: false, sortName: 'update'},
    {name: 'Action', isDone: false, sortName: 'update'},
]

export const CardsTable = () => {

    const dispatch = useAppDispatch()

    const pageCount = useAppSelector(state => state.cards.pageCount)
    const page = useAppSelector(state => state.cards.page)
    const cardsPack_id = useAppSelector(state => state.cards.params.cardsPack_id)
    const cardsTotalCount = useAppSelector(state => state.cards.cardsTotalCount)
    const cards = useAppSelector((state) => state.cards.cards)

    const changePageNumberHandler = (page: number) => {
        dispatch(changeParamsCards({page, cardsPack_id}))
    }

    const changePageSizeHandler = (pageCount: number) => {
        dispatch(changeParamsCards({pageCount, cardsPack_id}))
    }

    const pageTotalCount = Math.ceil(cardsTotalCount / pageCount)


    return (
        <>{cards.length > 0
            ? < div>
                < TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <HeaderTable data={nameColumn}/>
                        <CardsTableBody/>
                    </Table>
                </TableContainer>

                <div style={{display: "flex", marginTop: " 20px", alignItems: "center", gap: "20px"}}>
                    <PaginationComponent pageCount={pageTotalCount} page={page} callback={changePageNumberHandler}/>
                    <PageCount callback={changePageSizeHandler} pageCount={pageCount}/>
                </div>
            </div>
            : <h1 style={{marginTop: '50px'}}>This pack is empty</h1>
        }
        </>
    );
};
