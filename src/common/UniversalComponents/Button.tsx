import React from 'react';
import style from "../../features/profile/profile.module.css";

type PropsType = {
    name: string
    callback?: () => void
    className?: string
}

export const Button = React.memo(({name, callback, className}:PropsType) => {

    const onClickHandler = () => {
        callback && callback()
    }

    const styleBtn = `${style.button} ${className}`

    return (<button onClick={onClickHandler} className={styleBtn}>{name}</button>);
});

