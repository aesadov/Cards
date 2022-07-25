import React from 'react';
import style from './profile.module.css';
import Avatar from '../../assets/Male-Avatar.png'
import {useDispatch} from "react-redux";
import {instance} from "../auth/authAPI";




export const Profile = () => {

    const dispatch = useDispatch();

    const LogoutThunk = (disptach: any) => {
        instance.delete('')
    }

    const logoutHandler = () => {

    }


    return (
        <div>
            <div className={style.header}>
                IT-Developers
            </div>

            <div className={style.personal}>
                <h3>Personal information</h3>
            </div>

            <img className={style.avatar}
                 src={Avatar}
                 alt=""
            />


            <div><input title={'Name'} className={style.nameInput} type="Text"/></div>
            <div><input title={'Email'} className={style.emailInput} type="Text"/></div>
            <div>
                <button onClick={logoutHandler} className={style.button}>LOG OUT</button>
            </div>


        </div>
    );
};

