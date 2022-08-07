import React, {useCallback} from 'react';
import style from "./ProfileCard.module.css";
import Avatar from "../../../assets/Male-Avatar.png";
import {EditableSpan} from "./EditableProfileSpan";
import {Button} from "../../UniversalComponents/Button";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {logoutThunkAC} from "../../../features/profile/profile-reducer";
import {editNameThunkAC} from "../../../features/auth/auth-reducer";

export const ProfileCard = () => {

    const name = useAppSelector(state => state.auth.user.name)
    const avatar = useAppSelector(state => state.auth.user.avatar)
    const email = useAppSelector(state => state.auth.user.email)
    const publicCardPacksCount = useAppSelector(state => state.auth.user.publicCardPacksCount)

    const dispatch = useAppDispatch();

    const logoutHandler = useCallback(() => {
        dispatch(logoutThunkAC())
    }, [dispatch])

    const changeNameHandler = useCallback((name: string) => {
        dispatch(editNameThunkAC(name))
    }, [dispatch])

    return (
        <>
            <div className={style.personal}>
                <h1>Personal information</h1>
            </div>

            <img className={style.avatar}
                 src={avatar ? avatar : Avatar}
                 alt="avatar"
            />

            <li>
                <EditableSpan name={name} callback={changeNameHandler}/>
                <h2>{email}</h2>
                <h2> Packs: {publicCardPacksCount}</h2>
            </li>
            <Button className={style.btn} name={'LOG OUT'} callback={logoutHandler}/>
        </>
    );
};
