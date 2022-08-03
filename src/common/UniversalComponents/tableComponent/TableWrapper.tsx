import React from 'react';
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";

type WrapperType={
    children: React.ReactNode
    className?: string
}

export const TableWrapper = ({children, className}: WrapperType) => {
    return (
        <TableContainer component={Paper} className={className}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                {children}
            </Table>
        </TableContainer>
    )
};
