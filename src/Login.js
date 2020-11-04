import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Typography, FormControl, InputLabel, Input, Box, Button, Link } from '@material-ui/core';


import CookieService from './services/CookieService';
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


export default function Login({ loginSuccessAction }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [haveAnAccount, setHaveAnAccount] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const classes = useStyles();


    const login = async (event) => {
        event.preventDefault();
        const userID = await AccountService.login(email, password);
        CookieService.write('userID', userID);
        loginSuccessAction();
    }

    const register = async (event) => {
        event.preventDefault();
        const userID = await AccountService.register(email, password, firstName, lastName);
        CookieService.write('userID', userID);
        loginSuccessAction();
    }


    if (!haveAnAccount) {
        return (
            <div className={classes.root}>
                <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <Typography className={classes.title} variant="h4" >
                            Register
                    </Typography>
                    </Grid>
                    <Grid item>
                        <form onSubmit={(e) => register(e)}>
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
                                        <Box width={350}>
                                            <InputLabel htmlFor="input-first-name">First Name</InputLabel>
                                            <Input
                                                id="input-first-name"
                                                type="text"
                                                fullWidth
                                                value={firstName}
                                                onInput={e => setFirstName(String(e.target.value))}
                                            />
                                        </Box>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <FormControl>
                                        <Box width={350}>
                                            <InputLabel htmlFor="input-last-name">Last Name</InputLabel>
                                            <Input
                                                id="input-last-name"
                                                type="text"
                                                fullWidth
                                                value={lastName}
                                                onInput={e => setLastName(String(e.target.value))}
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
                                    <Button type="submit">Submit</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Already have an account? <Link onClick={() => setHaveAnAccount(true)}>Login</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    } else {
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
                                    <Button type="submit">Submit</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Don't have an account? <Link onClick={() => setHaveAnAccount(false)}>Register</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}