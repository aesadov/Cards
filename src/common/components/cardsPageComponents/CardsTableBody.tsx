import React from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {changeCard, removeCard} from "../../../features/cards/cards-reducer";

export const CardsTableBody = () => {

    const cards = useAppSelector((state) => state.cards.cards)
    const userId = useAppSelector((state) => state.auth.user._id)

    const dispatch = useAppDispatch()

    const deleteCard = (id: string) => {
        dispatch(removeCard(id))
    }
    const updateCard = (id: string) => {
        dispatch(changeCard(id))
    }

    return <TableBody>
                {cards.map((row) => (
                    <TableRow
                        key={row._id}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell component="th" scope="row">{row.question}</TableCell>
                        <TableCell align="right">{row.answer}</TableCell>
                        <TableCell align="right">{row.updated}</TableCell>
                        <TableCell align="right">{row.grade}</TableCell>
                        {userId === row.user_id && <TableCell align="right">
                            {userId === row.user_id && <span><button
                                onClick={() => deleteCard(row._id)}>dell</button><span> </span><button
                                onClick={() => updateCard(row._id)}>edit </button><span> </span></span>}
                        </TableCell>}
                    </TableRow>
                ))}
            </TableBody>

}