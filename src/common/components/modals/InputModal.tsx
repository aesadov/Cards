import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@mui/material";

type InputModalType = {
    label: string
    text?: string
    callback: (value: string) => void
}

export const InputModal = ({label, text, callback}: InputModalType) => {

    const [value, setValue] = useState<string>(text ? text : '')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
        callback(e.currentTarget.value)
    }

    return (
        <TextField
            style={{width: '100%', marginTop: '20px'}}
            label={label}
            variant="standard"
            value={value}
            onChange={onChangeHandler}
        />
    );
};
