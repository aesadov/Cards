import React from 'react';
import SuperInputText from "../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../common/c2-SuperButton/SuperButton";
import SuperEditableSpan from "../common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperCheckbox from "../common/c3-SuperCheckbox/SuperCheckbox";
import SuperSelect from "../common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../common/c6-SuperRadio/SuperRadio";
import SuperRange from "../common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "../common/c8-SuperDoubleRange/SuperDoubleRange";

export const Tests = () => {
    return (
        <div>
            <SuperInputText/>
            <SuperButton/>
            <SuperEditableSpan/>
            <SuperCheckbox/>
            <SuperSelect/>
            <SuperRadio/>
            <SuperRange/>
            <SuperDoubleRange/>

        </div>
    );
};
