import React from 'react';
import {NavLink} from "react-router-dom";
import {Button, FormControl, FormGroup, Grid, Paper} from "@mui/material";
import {MarkEmailRead} from '@mui/icons-material';
import {useAppSelector} from "../../../../common/hooks/hooks";
import {Wrapper} from "../../../../common/UniversalComponents/Wrapper";


export const CheckEmail = () => {

    const email = useAppSelector(state => state.auth.email)

    return <Wrapper>
        <FormControl>
            <FormGroup style={{paddingBottom: '20px'}}>
                <MarkEmailRead color={'action'} style={{width: '70px', height: '70px', margin: '0 auto'}}/>
                <p style={{opacity: '.7'}}>We've sent an Email with instruction to <span
                    style={{fontWeight: 'bold'}}>{email}</span></p>
                <Button type={'submit'} variant={'contained'} color={'primary'} style={{marginTop: '20px'}}>
                    <NavLink to={'/login'}>Back to login</NavLink>
                </Button>
            </FormGroup>
        </FormControl>
    </Wrapper>
};

