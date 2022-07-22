import React from 'react'
import s from './SuperRange.module.css'
import {Slider, Typography} from "@mui/material";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    values?: Array<number>
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, values,
        // min, max, step, disable, ...
    }
) => {

    const handleChange = (event: any, newValue: any) => {
            onChangeRange && onChangeRange(newValue)
    };

    return (
        <div className={s.container}>
            <Typography id="range-slider" gutterBottom>
            </Typography>
            <Slider
                value={values}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                className={s.range}
            />
        </div>
    )
}

export default SuperDoubleRange
