import {NameCellType, sortPacks, SortType} from "../TypeForSort";
import {changeParamsPacks, changeStatusSortPacks} from "../../features/packs/packs-reducer";
import {Dispatch} from "redux";


export const sortHelperUtuils = (regulator: SortType, cell: NameCellType, dispatch: Dispatch ) => {


    if(cell === 'packName'){
        if(regulator === 'decr'){
            dispatch(changeParamsPacks({sortPacks: sortPacks.DESC_NAME}))
            dispatch(changeStatusSortPacks(cell, regulator))
        } else {
            dispatch(changeParamsPacks({sortPacks: sortPacks.INCR_NAME}))
            dispatch(changeStatusSortPacks(cell, regulator))
        }
    }

    if(cell === 'cards'){
        if(regulator === 'decr'){
            dispatch(changeParamsPacks({sortPacks: sortPacks.DESC_CARDS_COUNT}))
            dispatch(changeStatusSortPacks(cell, regulator))
        } else {
            dispatch(changeParamsPacks({sortPacks: sortPacks.INCR_CARDS_COUNT}))
            dispatch(changeStatusSortPacks(cell, regulator))
        }
    }

    if(cell === 'update'){
        if(regulator === 'decr'){
            dispatch(changeParamsPacks({sortPacks: sortPacks.DESC_UPDATE}))
            dispatch(changeStatusSortPacks(cell, regulator))
        } else {
            dispatch(changeParamsPacks({sortPacks: sortPacks.INCR_UPDATE}))
            dispatch(changeStatusSortPacks(cell, regulator))
        }
    }

    if(cell === 'created'){
        if(regulator === 'decr'){
            dispatch(changeParamsPacks({sortPacks: sortPacks.DESC_CREATED}))
            dispatch(changeStatusSortPacks(cell, regulator))
        } else {
            dispatch(changeParamsPacks({sortPacks: sortPacks.INCR_CREATED}))
            dispatch(changeStatusSortPacks(cell, regulator))
        }
    }
};

