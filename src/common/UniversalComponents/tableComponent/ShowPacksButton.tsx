import React, {useState} from 'react';
import {Button, ButtonGroup} from '@mui/material';

type ShowPropsType = {
    paramsId: undefined | string
    userId: string
    className?: string
    callback: (value: undefined | string) => void
}

export const ShowPacksButton = ({callback, userId, className, paramsId}: ShowPropsType) => {
    const initialState =  paramsId === userId ? true : false
    const [filterPacks, setFilterPacks] = useState<boolean>(initialState)

    const onClickHandler = (value: undefined | string) => {
        callback(value)
        setFilterPacks(!filterPacks)
    }

    return (
        <div>
            <h2 style={{margin: '30px 0'}}>Show packs cards</h2>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button color={filterPacks ? "primary" :"inherit"} onClick={()=>onClickHandler(userId)}>My</Button>
                <Button color={!filterPacks ? "primary" :"inherit"}  onClick={()=>onClickHandler(undefined)}>All</Button>
            </ButtonGroup>
        </div>
    );
};

