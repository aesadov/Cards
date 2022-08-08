import React from 'react';
import {ShowPacksButton} from "../../UniversalComponents/tableComponent/ShowPacksButton";
import {RangeTable} from "../../UniversalComponents/tableComponent/RangeTable";
import {InputTable} from "../../UniversalComponents/tableComponent/InputTable";
import {Button} from "../../UniversalComponents/Button";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {changeParamsPacks, createPack} from "../../../features/packs/packs-reducer";

export const PacksHeader = () => {
    const dispatch = useAppDispatch()

    const min = useAppSelector(state => state.packs.minCardsCount)
    const max = useAppSelector(state => state.packs.maxCardsCount)
    const userId = useAppSelector(state => state.auth.user._id)
    const paramsUserId = useAppSelector(state => state.packs.params.user_id)
    const newMin = useAppSelector(state => state.packs.params.min)
    const newMax = useAppSelector(state => state.packs.params.max)

    const minMaxHandler = (value: number[]) => {
        dispatch(changeParamsPacks({min: value[0], max: value[1]}))
    }

    const showPacksButtonHandler = (user_id: undefined | string) => {
        dispatch(changeParamsPacks({user_id}))
    }

    const addPack = () => {
        dispatch(createPack())
    }

    return (
        <div style={{display: 'flex', gap: '40px', marginBottom: '25px', alignItems: "center"}}>
            <ShowPacksButton paramsId={paramsUserId} callback={showPacksButtonHandler} userId={userId}/>
            <RangeTable
                newMin={newMin}
                newMax={newMax}
                min={min}
                max={max}
                width={250}
                minDistance={5}
                callback={minMaxHandler}
            />
            <InputTable page={'packs'}/>
            <Button name={'Add Pack'} callback={addPack}/>
        </div>
    );
};

