import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Grid, Typography, FormControl, InputLabel, Input, Box, Button } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


import AccountService from './services/AccountService';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 50,
    },
    title: {
        color: '#283593',
        fontWeight: "bold"
    }
}));


export default function Login({ onSuccess }) {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (event) => {
        event.preventDefault();
        const token = await AccountService.login(email, password);
        if (token) {
            console.log("[Login email-password] Nhan duoc Token: ", token);
            onSuccess();
        } else {
            console.log("[Login email-password] Khong nhan duoc token");
        }
    }

    const onGoogleSuccess = async (res) => {
        const token = await AccountService.loginWithGoogle(res.tokenId);
        if (token) {
            console.log("[Login Google] Nhan duoc Token: ", token);
            onSuccess();
        } else {
            console.log("[Login Google] Khong nhan duoc token");
        }
    }

    const onGoogleFailure = (res) => {
        console.log("[Login Google] Failure: ", res);
    }

    const onFacebookCallback = async (res) => {
        const token = await AccountService.loginWithFacebook(res.id, res.accessToken);
        if (token) {
            console.log("[Login Facebook] Nhan duoc Token: ", token);
            onSuccess();
        } else {
            console.log("[Login Facebook] Khong nhan duoc token");
        }
    }

    return (
        <div className={classes.root}>
            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                <Grid item>
                    <Typography className={classes.title} variant="h4" >
                        Login
                    </Typography>
                </Grid>
                <Grid item>
                    <form onSubmit={(e) => login(e)}>
                        <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                            <Grid item>
                                <FormControl>
                                    <Box width={350}>
                                        <InputLabel htmlFor="input-email">Email</InputLabel>
                                        <Input
                                            id="input-email"
                                            type="text"
                                            fullWidth
                                            value={email}
                                            onInput={e => setEmail(String(e.target.value))}
                                        />
                                    </Box>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl>
                                    <Box width={350} >
                                        <InputLabel htmlFor="input-password">Password</InputLabel>
                                        <Input
                                            id="input-password"
                                            type="password"
                                            fullWidth
                                            value={password}
                                            onInput={e => setPassword(String(e.target.value))}
                                        />
                                    </Box>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Button type="submit">Login</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item>
                    <Typography>
                        Don't have an account? <Link to="/register">Register</Link>
                    </Typography>
                </Grid>
                <Grid item>
                    <Box>
                        <GoogleLogin
                            clientId="656948797545-io59r3h73is40b8r755em4u5ghgntn21.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            onSuccess={onGoogleSuccess}
                            onFailure={onGoogleFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                    </Box>
                </Grid>
                <Grid item>
                    <Box>
                        <FacebookLogin
                            appId="384712686083034"
                            fields="name,email,picture"
                            callback={onFacebookCallback} />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}