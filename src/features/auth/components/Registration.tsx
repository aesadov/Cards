import React from 'react';

import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField} from "@mui/material";

export const Registration = () => {

    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         password: '',
    //         rememberMe: false,
    //     },
    //     validate: (values) => {
    //         const errors: FormikErrorType = {};
    //         if (!values.email) {
    //             errors.email = 'Required';
    //         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //             errors.email = 'Invalid email address';
    //         }
    //
    //         if(!values.password) {
    //             errors.password = 'Required';
    //         }else if(values.password.length < 3){
    //             errors.password = 'Should be more 3';
    //         }
    //         return errors;
    //     },
    //     onSubmit: values => {
    //
    //         formik.resetForm()
    //     },
    // })


    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <FormControl>
                <FormLabel>
                    <p>
                        To log in get registered
                    </p>
                    <p>or use common test account credentials:</p>
                    <p>Email: nya-admin@nya.nya</p>
                    <p>Password: 1qazxcvBG</p>
                </FormLabel>
                <form onSubmit={()=>{}}>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"


                        />

                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                        />

                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox

                            />}
                        />


                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Login
                        </Button>
                    </FormGroup>
                </form>
            </FormControl>

        </Grid>
    </Grid>
}