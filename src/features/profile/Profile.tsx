import React from 'react';

import {useAppSelector} from "../../common/hooks/hooks";
import {Navigate} from "react-router-dom";
import {ProfileCard} from "../../common/components/profilePageComponents/ProfileCard";
import {Wrapper} from "../../common/UniversalComponents/Wrapper";


export const Profile = React.memo(() => {

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return <Wrapper>
        <ProfileCard/>
    </Wrapper>
});

