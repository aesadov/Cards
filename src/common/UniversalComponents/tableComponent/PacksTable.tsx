import React from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {CardPackType} from "../../../features/packs/packsApi";
import {Link} from 'react-router-dom';
import IconButton from '@mui/material/IconButton/IconButton';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type PacksTablePropsType = {
    data?: CardPackType[]
    userId?: string
    callback?: (id: string) => void
    callbackUpdate?: (id: string) => void
    callbackPage?: (id: string) => void
}


export const PacksTable = ({userId, data, callback, callbackUpdate, callbackPage}: PacksTablePropsType) => {

    const deletePack = (id: string) => {
        callback && callback(id)
    }
    const updatePack = (id: string) => {
        callbackUpdate && callbackUpdate(id)
    }
    const cardsPageHandler = (id: string) => {
        callbackPage && callbackPage(id)
    }

    return (
        <TableBody>
            {data && data.map((pack) => (
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
                            <IconButton aria-label="delete" onClick={() => deletePack(pack._id)}><DeleteForeverIcon color='error'/></IconButton>
                        </span>}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>

    );
}