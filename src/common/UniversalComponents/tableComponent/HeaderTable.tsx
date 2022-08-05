import React from 'react';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import {SortButton} from "../SortButton";
import {NameCellType} from "../../TypeForSort";

type HeaderType = {
    data: Array<{name: string, isDone: boolean, sortNane: NameCellType}>
    packId?: string
    userId?: string
}

export const HeaderTable = (props: HeaderType) => {

    const headerRow = props.data.map((a, i) => {
        return (
            <TableCell align={i !== 0 ? 'right' : 'left'}
                       key={i}>
                {a.name} {a.isDone && <span><SortButton nameHeaderCell={a.sortNane}/></span>}
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