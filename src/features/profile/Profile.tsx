import React, {useEffect, useState} from 'react';
import style from './profile.module.css';
import Avatar from '../../assets/Male-Avatar.png'
import {useDispatch} from "react-redux";
import {instance} from "../auth/authAPI";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {editNameThunkAC, logoutThunkAC, meThunkAC} from "./profile-reducer";
import {Navigate} from "react-router-dom";
import {EditableSpan} from "./EditableProfileSpan";



export const Profile = () => {

    // useEffect(() =>{
    //        dispatch(meThunkAC())
    // },[])



    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    const userName = useAppSelector(state => state.auth.user.name)
    const userAvatar = useAppSelector(state => state.auth.user.avatar)

    const dispatch = useAppDispatch();


    const logoutHandler = () => {
        dispatch(logoutThunkAC())
    }

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    // if (!userName) {
    //     return <Navigate to={'/login'}/>
    // }



    // if (isLoggedIn ) {
    //     return <Profile/>
    // }

    const changeNameHandler = (name: string) => {
        dispatch(editNameThunkAC({name, avatar: userAvatar}))
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
                 src={Avatar}
                 alt="Bro"
            />


            {/*<div><input value={name} className={style.nameInput} type="Text"/></div>*/}
            {/*<div><input value={userEmail} className={style.emailInput} type="Text"/></div>*/}



            <li>
                <EditableSpan name={userName} callback={changeNameHandler}/>
                {/*<EditableSpan avatar={}/>*/}
                {/*<div className={style.nameInput} onDoubleClick={changeNameHandler}>Name</div>*/}
                {/*<div className={style.emailInput} onDoubleClick={changeAvatarHandler}>Email</div>*/}
            </li>
            <div>
                <button onClick={logoutHandler} className={style.button}>LOG OUT</button>
            </div>


        </div>
    );
};

