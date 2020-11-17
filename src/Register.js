import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Grid, Typography, FormControl, InputLabel, Input, Box, Button } from '@material-ui/core';

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

export default function Register({ onSuccess }) {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const register = async (event) => {
        event.preventDefault();
        const token = await AccountService.register(email, password, firstName, lastName);
        console.log("Register token received: ", token);
        if (token)
            onSuccess();
    }

    return (
        <div className={classes.root}>
            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                <Grid item>
                    <Typography className={classes.title} variant="h4" >
                        Register
                    </Typography>
                </Grid>
                <Grid item>
                    <form onSubmit={(e) => register(e)} >
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
                                <Button type="submit">Register</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item>
                    <Typography>
                        Already have an account? <Link to="/login">Login</Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}