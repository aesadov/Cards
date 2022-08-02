import React, {useEffect} from 'react';
import {HeaderTable} from "../../common/UniversalComponents/tableComponent/HeaderTable";
import axios from "axios";
import {instance} from "../auth/authAPI";
import {useDispatch, useSelector} from "react-redux";
import {getCardsPackTC} from "./packs-reducer";
import {AppActionsType} from "../../app/app-reducer";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";

export const Packs = () => {

    const dispatch = useAppDispatch();
    const cardsFromState = useAppSelector(state => state.packs);

    useEffect(() => {

            dispatch(getCardsPackTC())


        }, [dispatch])//  в зависимости идут фильтрации, пагинации, и т.д.



    return (
        <div>
            <HeaderTable />
        </div>
    );
};

