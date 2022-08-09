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
import {removePack, setPackId} from "../../../features/packs/packs-reducer";
import {changeParamsCards} from "../../../features/cards/cards-reducer";

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
                        <TableCell align="right">{pack.updated}</TableCell>
                        <TableCell align="right">{pack.created}</TableCell>
                        <TableCell align="right">
                            <Link onClick={() => cardsPageHandler(pack._id)} to={'/cards'}>
                                <IconButton aria-label="learn"><LocalLibraryIcon color='info'/></IconButton>
                            </Link><span> </span>
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