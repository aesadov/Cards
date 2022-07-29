import React from 'react';
import style from "../profile/profile.module.css";
import {useAppSelector} from "../../common/hooks/hooks";
import { Link } from 'react-router-dom';

export const Header = () => {

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    return (

        <div>
            <div className={style.header}>
                <h1>IT-Developers</h1>
                <div >
                    {
                        isLoggedIn
                            ?
                            <Link to={'/profile'}>
                                <span>Profile</span>
                            </Link>
                            :
                            <Link to={'/login'}>
                                <span style={{display:'inline-block', border:'1px solid', padding: '5px 10px'}}>Sign in</span>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};
