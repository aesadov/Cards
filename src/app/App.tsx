import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import '../App.css';
import {Login} from "../features/auth/components/Login";
import {Registration} from "../features/auth/components/Registration";
import {Error404} from "../common/Error-404";
import {NewPassword} from "../features/auth/components/NewPassword";
import {Profile} from "../features/profile/Profile";
import {ForgotPassword} from "../features/auth/components/ForgotPassword";
import {Navlinks} from "../features/navlink/Navlinks";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../common/hooks/hooks";
import {meThunkAC} from "../features/auth/auth-reducer";
import {ErrorSnackbar} from "../common/UniversalComponents/ErrorSnackbar/ErrorSnackbar";
import {Header} from "../features/header/Header";
import {Packs} from "../features/packs/Packs";

function App() {

    const dispatch = useAppDispatch();

    const initial = useAppSelector(state => state.app.isInitialized)
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    useEffect(() =>{

        !isLoggedIn && dispatch(meThunkAC())

    },[])

    if(initial) {
        return <h1 style={{textAlign: 'center', marginTop: '150px'}}>Loading...</h1>
    }

    return (
        <div className="App" style={{position: 'relative', height: '100vh'}}>
            <Header/>
            <ErrorSnackbar/>
            <Navlinks/>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/login'}/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'registration'} element={<Registration/>}/>
                <Route path={'forgot'} element={<ForgotPassword/>}/>
                <Route path={'set-new-password/:token'} element={<NewPassword/>}/>
                <Route path={'profile'} element={<Profile/>}/>
                <Route path={'packs-list'} element={<Packs/>}/>
                <Route path={'/*'} element={<Navigate to={'/404'}/>}/>
                <Route path={'/404'} element={<Error404/>}/>
            </Routes>
        </div>
    );
}

export default App;
