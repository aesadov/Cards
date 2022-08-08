import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";

type InputModalType = {
    label: string
    text?: string
    callback: (value: string) => void
}

export const InputModal = ({label, text, callback}: InputModalType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        callback(e.currentTarget.value)
    }

    return (
        <TextField
            style={{width: '100%', marginTop: '20px'}}
            label={label}
            variant="standard"
            value={text}
            onChange={onChangeHandler}
        />
    );
};
