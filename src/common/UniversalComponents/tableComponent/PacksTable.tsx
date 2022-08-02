import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export type CardPackType = {
    cardsCount: number
    created: string
    deckCover: null
    grade: number
    more_id: string
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}

type PacksTablePropsType = {
    data: CardPackType[]
}

/*function createData(
    name: string,
    cardsCount: number,
    lastUpdated: string,
    createdBy: string,
    actions: boolean
) {
    return { name, cardsCount, lastUpdated, createdBy, actions };
}

const rows = [
    createData('English words', 159, '01.02.2022', 'Ivan', true),
    createData('Java Script', 237, '11.03.2022', 'Stepan', false),
    createData('React', 237, '11.03.2022', 'Victor', false),
];*/

export const PacksTable = (props: PacksTablePropsType) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                    {props.data.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.cardsCount}</TableCell>
                            <TableCell align="right">{row.updated}</TableCell>
                            <TableCell align="right">{row.created}</TableCell>
                            <TableCell align="right">
                                {true && <span><button>dell</button><span> </span><button>edit </button><span> </span></span>} //if row.user_id === profile.id
                                <button>learn</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}