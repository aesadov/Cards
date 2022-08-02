import React, {useEffect} from 'react';
import {RangeTable} from "../../common/UniversalComponents/tableComponent/RangeTable";
import {ShowPacksButton} from "../../common/UniversalComponents/tableComponent/ShowPacksButton";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {changeParamsCards, setPacks} from "./packs-reducer";
import {useDebounce} from "../../common/hooks/useDebounce";

export const Packs = () => {

    const dispatch = useAppDispatch()

    const min = useAppSelector(state => state.packs.minCardsCount)
    const max = useAppSelector(state => state.packs.maxCardsCount)
    const status = useAppSelector(state => state.app.status)
    const params = useAppSelector(state => state.packs.params)
    const userId = useAppSelector(state => state.auth.user._id)

    useEffect(() => {
        dispatch(setPacks())
    }, [useDebounce(params, 1000)])//  в зависимости идут фильтрации, пагинации, и т.д.

    const minMaxHandler = (value: number[]) => {
        dispatch(changeParamsCards({min: value[0], max: value[1]}))
    }

    const showPacksButtonHandler = (user_id: undefined | string) => {
        dispatch(changeParamsCards({user_id}))
    }

    if (status === 'loading') {
        return <h1 style={{textAlign: 'center', marginTop: '150px'}}>Loading...</h1>
    }

    return (
        <div style={{
            maxWidth: '1250px',
            padding: '50px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <ShowPacksButton paramsId={params.user_id} callback={showPacksButtonHandler} userId={userId}/>
            <RangeTable newMin={params.min} newMax={params.max} min={min} max={max} width={250} minDistance={5}
                        callback={minMaxHandler}/>
        </div>
    );
};

