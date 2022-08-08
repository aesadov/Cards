import React from 'react';
import {Button} from '@mui/material';

type PropsType = {
    name: string
    callback?: () => void
}

export const UniversalButton = React.memo(({name, callback}:PropsType) => {

    const onClickHandler = () => {
        callback && callback()
    }

    return (<Button variant='contained' size='small' onClick={onClickHandler}>{name}</Button>);
});
