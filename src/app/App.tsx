import React from 'react';

import '../App.css';
import {Navlinks} from "../common/components/navlink/Navlinks";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../common/hooks/hooks";
import {meThunkAC} from "../features/auth/auth-reducer";
import {ErrorSnackbar} from "../common/UniversalComponents/ErrorSnackbar/ErrorSnackbar";
import {Header} from "../common/components/header/Header";
import {RoutesForProject} from "../common/components/routes/RoutesForProject";

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
            <RoutesForProject/>
        </div>
    );
}

export default App;
