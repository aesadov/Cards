import React from 'react';
import {NavLink} from 'react-router-dom'
import s from './Navlihks.module.css'

export const Navlinks = () => {
    return (
        <nav >
            <ul className={s.body}>
                <li><NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>
                    Profile
                </NavLink>
                </li>
                <li><NavLink to='/login' className={navData => navData.isActive ? s.active : s.item}>
                    Login
                </NavLink>
                </li>
                <li><NavLink to='/registration' className={navData => navData.isActive ? s.active : s.item}>
                    Registration
                </NavLink>
                </li>
                <li><NavLink to='/newpassword' className={navData => navData.isActive ? s.active : s.item}>
                    New Password
                </NavLink>
                </li>
                <li><NavLink to='/recovery' className={navData => navData.isActive ? s.active : s.item}>
                    Recovery Password
                </NavLink>
                </li>
                <li><NavLink to="/Tests" className={navData => navData.isActive ? s.active : s.item}>Tests</NavLink></li>
            </ul>

        </nav>
    );
};
