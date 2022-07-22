import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";
import {Error404} from "./pages/Error-404";
import {NewPassword} from "./pages/NewPassword";
import {Profile} from "./pages/Profile";
import {RecoveryPassword} from "./pages/RecoveryPassword";
import {Tests} from "./pages/Tests";
import {Navlinks} from "./pages/navlink/Navlinks";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Navigate to={'/nav'}/>}/>

                <Route path={'login'} element={<Login/>}/>
                <Route path={'registration'} element={<Registration/>}/>
                <Route path={'newpassword'} element={<NewPassword/>}/>
                <Route path={'profile'} element={<Profile/>}/>

                <Route path={'recovery'} element={<RecoveryPassword/>}/>

                <Route path={'tests'} element={<Tests/>}/>
                <Route path={'nav'} element={<Navlinks/>}/>

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    );
}

export default App;
