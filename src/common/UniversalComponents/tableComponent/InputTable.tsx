import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@mui/material";
import {CardParamsType} from "../../../features/packs/packsApi";

type InputPropsType = {
    callback: (data: CardParamsType) => void
}

export const InputTable = ({callback}: InputPropsType) => {

    const [value, setValue] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
        console.log(e.currentTarget.value)
        callback({packName: value})
    }

    return <TextField value={value} fullWidth id="fullWidth" placeholder={'Search...'} onChange={onChangeHandler}/>
};

