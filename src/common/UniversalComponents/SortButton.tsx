import React, {useState} from 'react'
import {NameCellType, SortType} from "../TypeForSort";
import {sortHelperUtuils} from "../utils/sortHelper-utuils";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";

type SortButtonType = {
    nameHeaderCell: NameCellType
}

export const SortButton = ({nameHeaderCell}: SortButtonType) => {
    const dispatch = useAppDispatch()
    const sortStatus = useAppSelector(state => state.packs.statusSort)
    const regulator = useAppSelector(state => state.packs.regulator)


const initial = nameHeaderCell === sortStatus ? regulator : 'decr'



    const [sort, setSort] = useState<SortType>(initial)

    const onClickHandler = (value: SortType) => {
        setSort(value)
        sortHelperUtuils(value, nameHeaderCell, dispatch)
    }

    return (
        <>
            {sort === 'decr'
                ? <button onClick={() => onClickHandler('incr')}> {'>'} </button>
                : <button onClick={() => onClickHandler('decr')}> {'<'} </button>
            }
        </>
    );
};
