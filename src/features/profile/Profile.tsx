import React, {useCallback, useEffect, useState} from 'react';
import style from './profile.module.css';
import Avatar from '../../assets/Male-Avatar.png'
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {logoutThunkAC} from "./profile-reducer";
import {Navigate} from "react-router-dom";
import {EditableSpan} from "./EditableProfileSpan";
import {editNameThunkAC, meThunkAC} from "../auth/auth-reducer";



export const Profile = React.memo(() => {
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const {name, avatar, email, publicCardPacksCount} = useAppSelector(state => state.auth.user)

    const dispatch = useAppDispatch();


    const logoutHandler = useCallback(() => {
        dispatch(logoutThunkAC())
    },[dispatch])

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }


    const changeNameHandler = (name: string) => {
        dispatch(editNameThunkAC(name))
    }


    return (
        <div>
            <div className={style.header}>
                IT-Developers
            </div>

            <div className={style.personal}>
                <h1>Personal information</h1>
            </div>

            <img className={style.avatar}
                 src={avatar ? avatar :Avatar}
                 alt="Bro"
            />

            <li>
                <h2>User name: <EditableSpan name={name} callback={changeNameHandler}/></h2>
                <h2>email: {email}</h2>
                <h2> Packs: {publicCardPacksCount}</h2>
            </li>
            <div>
                <button onClick={logoutHandler} className={style.button}>LOG OUT</button>
            </div>


        </div>
    );
});

