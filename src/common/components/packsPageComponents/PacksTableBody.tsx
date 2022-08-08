import React from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {removePack, updateUserPack} from "../../../features/packs/packs-reducer";
import {changeParamsCards} from "../../../features/cards/cards-reducer";



export const PacksTableBody = () => {

    const dispatch = useAppDispatch()

    const packs = useAppSelector((state) => state.packs.cardPacks)
    const userId = useAppSelector(state => state.auth.user._id)

    const deletePack = (id: string) => {
        dispatch(removePack(id))
    }
    const updatePack = (id: string) => {
        dispatch(updateUserPack(id))
    }
    const cardsPageHandler = (id: string) => {
        dispatch(changeParamsCards({cardsPack_id: id}))
    }

    return (
        <TableBody>
            {packs.map((row) => (
                <TableRow
                    key={row._id}
                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                    <TableCell component="th" scope="row">
                        <Link onClick={() => cardsPageHandler(row._id)} to={'/cards'}>{row.name}</Link>
                    </TableCell>
                    <TableCell align="right">{row.cardsCount}</TableCell>
                    <TableCell align="right">{row.updated}</TableCell>
                    <TableCell align="right">{row.created}</TableCell>
                    <TableCell align="right">
                        {userId === row.user_id && <span><button
                            onClick={() => deletePack(row._id)}>dell</button><span> </span><button
                            onClick={() => updatePack(row._id)}>edit </button><span> </span></span>}
                        <Link onClick={() => cardsPageHandler(row._id)} to={'/cards'}>
                            <button>learn</button>
                        </Link>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>

    );
}