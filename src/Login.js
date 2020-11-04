import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Typography, FormControl, InputLabel, Input, Box, Button } from '@material-ui/core';
import axios from 'axios';

import CookieService from './services/CookieService';


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
    const classes = useStyles();


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post(`http://localhost:5000/users/`, { email, password });
            if (res.status === 200) {
                CookieService.write('userID', res.data);
                loginSuccessAction();
            }
        } catch (error) {
            console.log(error);
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
                    <form onSubmit={(e) => handleSubmit(e)}>
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
            </Grid>
        </div>
    )
}