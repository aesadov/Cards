import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type PropsType = {
    min: number
    max: number
    width: number
    minDistance: number
    callback?: (value: number[]) => void
}

export const RangeTable = ({minDistance, min, max, callback, width}: PropsType) => {

    const [value, setValue] = React.useState<number[]>([min, max]);

    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
        callback && callback(value)
    };

    return (
        <div style={{maxWidth:'350px'}}>
            <h2 style={{margin: '30px 0'}}>Number of cards</h2>
            <Box sx={{width}}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    max={max}
                    min={min}
                    disableSwap
                />
            </Box>
        </div>

    );
};