import React from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {Link} from 'react-router-dom';
import {PackType} from "../../../features/packs/packsApi";

type PacksTablePropsType = {
    data?: PackType[]
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
            {data && data.map((row) => (
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