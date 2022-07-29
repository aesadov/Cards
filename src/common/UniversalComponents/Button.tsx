import React from 'react';
import style from "../../features/profile/profile.module.css";

type PropsType = {
    name: string
    callback?: () => void
}

export const Button = React.memo(({name, callback}:PropsType) => {

    const onClickHandler = () => {
        callback && callback()
    }

    return (<button onClick={onClickHandler} className={style.button}>{name}</button>);
});

