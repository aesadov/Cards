import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PaginationType = {
    callback: (page: number) => void
    page: number
    pageCount: number
}

export const PaginationComponent = ({callback, page, pageCount}: PaginationType) => {

    const onChangeHandler = (event: React.ChangeEvent<unknown>, page: number) => {
        callback(page)
    }

    return (
        <Stack spacing={2}>
            <Pagination page={page} count={pageCount} showFirstButton showLastButton onChange={onChangeHandler}/>
        </Stack>
    );

};

