import React from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {Rating} from '@mui/material';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {changeCard, removeCard} from "../../../features/cards/cards-reducer";
import IconButton from "@mui/material/IconButton/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type CardsTableBodyType = {
    callbackUpdate?: (id: string) => void
    callbackDelete?: (id: string) => void
}

export const CardsTableBody = ({callbackUpdate, callbackDelete}: CardsTableBodyType) => {

    const cards = useAppSelector((state) => state.cards.cards)
    const userId = useAppSelector((state) => state.auth.user._id)


    const deleteCard = (id: string) => {
        // dispatch(removeCard(id))
        callbackDelete &&  callbackDelete(id)
    }
    const updateCard = (id: string) => {
        // dispatch(changeCard(id))
        callbackUpdate && callbackUpdate(id)
    }

    return <TableBody>
                {cards.map((card) => (
                    <TableRow
                        key={card._id}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell component="th" scope="row">{card.question}</TableCell>
                        <TableCell align="right">{card.answer}</TableCell>
                        <TableCell align="right">{card.updated}</TableCell>
                        <TableCell align="right">
                            <Rating name="card-grade" value={card.grade} readOnly/>
                        </TableCell>
                        <TableCell align="right">
                            {userId === card.user_id && <> <IconButton aria-label="edit" onClick={() => updateCard(card._id)}><EditIcon color='info'/></IconButton>
                                <IconButton aria-label="delete" onClick={() => deleteCard(card._id)}><DeleteForeverIcon color='error'/></IconButton>
                            </>}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>

}