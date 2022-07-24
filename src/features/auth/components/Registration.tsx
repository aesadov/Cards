import {useFormik} from 'formik';
import React from 'react';
import {Button, FormControl, FormGroup, FormLabel, Grid, TextField} from "@mui/material";
import {NavLink} from "react-router-dom";
import {createUser} from "../auth-reducer";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/hooks";
import {Navigate} from 'react-router-dom';

type FormikErrorType = {
    email?: string
    password?: string
    confirmPassword?: string

}

export const Registration = () => {

    const dispatch = useAppDispatch()
    const registerStatus = useAppSelector(state => state.auth.registerStatus)
    console.log(registerStatus)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 8) {
                errors.password = 'Should be more 7';
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Required';
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Not password';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(createUser({email: values.email, password: values.password}))
            formik.resetForm()
        },
    })
    if(registerStatus){
        return <Navigate to={'/login'}/>
    }

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
                <form onSubmit={formik.handleSubmit}>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ?
                            <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password ?
                            <div style={{color: 'red'}}>{formik.errors.password}</div> : null}

                        <TextField
                            type="password"
                            label="Confirm Password"
                            margin="normal"
                            {...formik.getFieldProps('confirmPassword')}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ?
                            <div style={{color: 'red'}}>{formik.errors.confirmPassword}</div> : null}

                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Login
                        </Button>
                        <h2>Do you have ad account?</h2>
                        <NavLink to={'/login'}>Sign In</NavLink>
                    </FormGroup>
                </form>
            </FormControl>

        </Grid>
    </Grid>

}