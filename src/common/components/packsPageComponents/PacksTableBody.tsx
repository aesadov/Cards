import React from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton/IconButton';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {setPackId} from "../../../features/packs/packs-reducer";
import {changeParamsCards} from "../../../features/cards/cards-reducer";
import {setLearnCardsId} from "../../../features/learn/learn-reducer";

type PropsType = {
    callbackUpdate?: () => void
    callbackDelete?: () => void
}

export const PacksTableBody = ({callbackUpdate, callbackDelete}: PropsType) => {

    const dispatch = useAppDispatch()

    const packs = useAppSelector((state) => state.packs.cardPacks)
    const userId = useAppSelector(state => state.auth.user._id)

    const deletePack = (id: string) => {
        dispatch(setPackId(id))
        callbackDelete && callbackDelete()
    }
    const updatePack = (id: string) => {
        dispatch(setPackId(id))
        callbackUpdate && callbackUpdate()
    }
    const cardsPageHandler = (id: string) => {
        dispatch(changeParamsCards({cardsPack_id: id}))
    }

    const formDate = (date: string) => {
        const newDate = new Date(date).getDate() < 10 ? '0' + new Date(date).getDate() : new Date(date).getDate()
        const newMonth = new Date(date).getMonth() < 10 ? '0' + new Date(date).getMonth() : new Date(date).getMonth()
        return `${newDate}-${newMonth}-${new Date(date).getFullYear()}`
    }

    return (
        <>
            <TableBody>
                {packs.map((pack) => (
                    <TableRow
                        key={pack._id}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell component="th" scope="row">
                            <Link onClick={() => cardsPageHandler(pack._id)} to={'/cards'}>{pack.name}</Link>
                        </TableCell>
                        <TableCell align="right">{pack.cardsCount}</TableCell>
                        <TableCell align="right">{formDate(pack.updated)}</TableCell>
                        <TableCell align="right">{pack.user_name}</TableCell>
                        <TableCell align="right">
                            <Link to={'/learn'}>
                                <IconButton onClick={() => dispatch(setLearnCardsId(pack._id))}
                                            aria-label="learn"><LocalLibraryIcon color='info'/></IconButton>
                            </Link>
                            {userId === pack.user_id && <span>
                            <IconButton aria-label="edit" onClick={() => updatePack(pack._id)}><EditIcon color='info'/></IconButton>
                            <span> </span>
                            <IconButton aria-label="delete" onClick={() => deletePack(pack._id)}><DeleteForeverIcon
                                color='error'/></IconButton>
                        </span>}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </>
    );
}