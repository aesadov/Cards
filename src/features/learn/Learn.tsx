import React, {useEffect} from 'react';
import {useAppDispatch} from "../../common/hooks/hooks";
import {fetchLearnCards} from "./learn-reducer";
import {Test} from "../../common/components/Test";

export const Learn = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchLearnCards())
    },[])



    return (
        <div>
            <Test/>
        </div>
    );
};