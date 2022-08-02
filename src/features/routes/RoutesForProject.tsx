import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../auth/components/Login";
import {Registration} from "../auth/components/Registration";
import {ForgotPassword} from "../auth/components/ForgotPassword";
import {NewPassword} from "../auth/components/NewPassword";
import {Profile} from "../profile/Profile";
import {Error404} from "../../common/Error-404";
import {Packs} from "../packs/Packs";

export const RoutesForProject = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/login'}/>}/>
            <Route path={'login'} element={<Login/>}/>
            <Route path={'registration'} element={<Registration/>}/>
            <Route path={'forgot'} element={<ForgotPassword/>}/>
            <Route path={'set-new-password/:token'} element={<NewPassword/>}/>
            <Route path={'profile'} element={<Profile/>}/>
            <Route path={'packs'} element={<Packs/>}/>
            <Route path={'/*'} element={<Navigate to={'/404'}/>}/>
            <Route path={'/404'} element={<Error404/>}/>
        </Routes>
    );
};
