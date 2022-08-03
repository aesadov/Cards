import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {CardPackType} from "../../../features/packs/packsApi";

type PacksTablePropsType = {
    data: CardPackType[]
    userId: string
    callback: (id: string) => void
    callbackUpdate: (id: string) => void
}

export const PacksTable = ({userId, data, callback, callbackUpdate}: PacksTablePropsType) => {

    const deletePack = (id: string) => {
        callback(id)
    }
    const updatePack = (id: string) => {
        callbackUpdate(id)
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Pack Name {<button>sort</button>}</TableCell>
                        <TableCell align="right">Cards {<button>sort</button>}</TableCell>
                        <TableCell align="right">Last Updated {<button>sort</button>}</TableCell>
                        <TableCell align="right">Created by {<button>sort</button>}</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.cardsCount}</TableCell>
                            <TableCell align="right">{row.updated}</TableCell>
                            <TableCell align="right">{row.created}</TableCell>
                            <TableCell align="right">
                                {userId === row.user_id && <span><button
                                    onClick={() => deletePack(row._id)}>dell</button><span> </span><button
                                    onClick={() => updatePack(row._id)}>edit </button><span> </span></span>}
                                <button>learn</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}