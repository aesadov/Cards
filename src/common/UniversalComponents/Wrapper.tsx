import React from 'react';
import {Grid, Paper} from "@mui/material";

type WrapperType = {
    children: React.ReactNode
}

export const Wrapper = ({children}: WrapperType) => {
    return (
        <Grid container justifyContent={'center'} style={{padding: '70px'}}>
            <Grid item justifyContent={'center'}>
                <Paper elevation={3} style={{padding: '20px'}}>
                    {children}
                </Paper>
            </Grid>
        </Grid>
    );
};
