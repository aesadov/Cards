import React from 'react';
import {NavLink} from 'react-router-dom'
import s from './Navlihks.module.css'

export const Navlinks = () => {
    return (
        <nav style={{position: 'absolute', bottom: '0', left: '20px'}}>
            <ul className={s.body}>
                <li><NavLink to='/login' className={navData => navData.isActive ? s.active : s.item}>
                    Login
                </NavLink>
                </li>
                <li><NavLink to='/registration' className={navData => navData.isActive ? s.active : s.item}>
                    Registration
                </NavLink>
                </li>
                <li><NavLink to='/set-new-password' className={navData => navData.isActive ? s.active : s.item}>
                    New Password
                </NavLink>
                </li>
                <li><NavLink to='/forgot' className={navData => navData.isActive ? s.active : s.item}>
                    Forgot Password
                </NavLink>
                </li>
                <li><NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>
                    Profile
                </NavLink>
                </li>
            </ul>

        </nav>
    );
};
