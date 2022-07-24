import React from 'react';
import {NavLink} from "react-router-dom";
import {Button, FormControl, FormGroup, Grid, Paper} from "@mui/material";
import {MarkEmailRead} from '@mui/icons-material';
import {useAppSelector} from "../../../../common/hooks/hooks";


export const CheckEmail = () => {

    const email = useAppSelector(state => state.auth.email)

    return <Grid container justifyContent={'center'} style={{padding: '40px'}}>
        <Grid item justifyContent={'center'}>
            <Paper elevation={3} style={{padding: '20px', maxWidth: '250px'}}>
                <FormControl>
                    <FormGroup style={{paddingBottom: '20px'}}>
                        <MarkEmailRead color={'action'} style={{width: '70px', height: '70px', margin: '0 auto'}}/>
                        <p>We've sent an Email with instruction to {email}</p>
                        <Button type={'submit'} variant={'contained'} color={'primary'} style={{marginTop: '20px'}}>
                            <NavLink to={'/login'}>Back to login</NavLink>
                        </Button>
                    </FormGroup>
                </FormControl>
            </Paper>
        </Grid>
    </Grid>
};

