import React, {useEffect} from 'react';
import {RangeTable} from "../../common/UniversalComponents/tableComponent/RangeTable";
import {ShowPacksButton} from "../../common/UniversalComponents/tableComponent/ShowPacksButton";

export const Packs = () => {

    useEffect(() => {

    }, [])//  в зависимости идут фильтрации, пагинации, и т.д.

    return (
        <div style={{maxWidth: '1250px', padding: '50px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ShowPacksButton/>
            <RangeTable min={0} max={100} width={250} minDistance={5}/>
        </div>
    );
};

