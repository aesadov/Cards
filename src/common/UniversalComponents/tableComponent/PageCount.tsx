import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect'

type PageCountPropsType = {
    callback: (value: number) => void
    pageCount: number
}

export const PageCount = ({callback, pageCount}: PageCountPropsType) => {

    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        callback(+event.target.value)
    }

    return (
        <Box sx={{ maxWidth: 55 }}>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Show
                </InputLabel>
                <NativeSelect
                    onChange={onChangeHandler}
                    defaultValue={pageCount}
                >
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={16}>16</option>
                    <option value={32}>32</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
};

