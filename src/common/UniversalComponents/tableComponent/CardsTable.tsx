import React from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {CardPackType} from "../../../features/packs/packsApi";
import {Link} from 'react-router-dom';
import {CardType} from "../../../features/cards/cardsAPI";
import {useAppDispatch} from "../../hooks/hooks";
import {changeCard, removeCard} from "../../../features/cards/cards-reducer";
import {Rating} from '@mui/material';

type PacksTablePropsType = {
    data: CardType[]
    userId?: string
    callback?: (id: string) => void
    callbackUpdate?: (id: string) => void
    callbackPage?: (id: string) => void
}


export const CardsTable = ({userId, data, callback, callbackUpdate, callbackPage}: PacksTablePropsType) => {
    const dispatch = useAppDispatch()

    const deleteCard = (id: string) => {
        dispatch(removeCard(id))
    }
    const updateCard = (id: string) => {
        dispatch(changeCard(id))
    }
    const cardsPageHandler = (id: string) => {
        callbackPage && callbackPage(id)
    }

    return (
        <TableBody>
            {data && data.map((row) => (
                <TableRow
                    key={row._id}
                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                    <TableCell component="th" scope="row">{row.question}</TableCell>
                    <TableCell align="right">{row.answer}</TableCell>
                    <TableCell align="right">{row.updated}</TableCell>

                    <TableCell align="right">
                        <Rating name="card-grade" value={row.grade} readOnly/>
                    </TableCell>
                    {userId === row.user_id && <TableCell align="right">
                        {userId === row.user_id && <span><button
                            onClick={() => deleteCard(row._id)}>dell</button><span> </span><button
                            onClick={() => updateCard(row._id)}>edit </button><span> </span></span>}
                    </TableCell>}
                </TableRow>
            ))}
        </TableBody>

    );
}