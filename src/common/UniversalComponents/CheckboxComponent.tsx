import React, {ChangeEvent, useState} from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";

type CheckboxComponentType = {
    callback: (value: boolean) => void
}

export const CheckboxComponent = ({callback}: CheckboxComponentType) => {

    const [status, setStatus] = useState<boolean>(false)

    const checkedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.checked)
        callback && callback(e.currentTarget.checked)
    }

    return (
        <FormControlLabel
            label='Private pack'
            control={<Checkbox onChange={checkedHandler} checked={status}/>}
        />
    );
};