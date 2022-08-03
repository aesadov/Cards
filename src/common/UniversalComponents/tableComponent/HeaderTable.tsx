import React from 'react';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";

type HeaderType = {
    data: Array<{name: string, isDone: boolean}>
}

export const HeaderTable = (props: HeaderType) => {

    const headerRow = props.data.map((a, i) => {
        return (
            <TableCell align={i !== 0 ? 'right' : 'left'}
                       key={i}>
                {a.name} {a.isDone && <button>sort</button>}
            </TableCell>
        )
    })

    return (
        <TableHead>
            <TableRow>
                {headerRow}
            </TableRow>
        </TableHead>
    );
};