import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, makeStyles } from '@material-ui/core';
import Header from './Header';
import PublicBoards from './PublicBoards';
import AddBoard from './AddBoard';
import Login from './Login';
import CookieService from './services/CookieService';
import axios from 'axios';


const useStyles = makeStyles(() => ({
    titleStyles: {
        marginBlockStart: 25,
        color: '#283593',
        fontWeight: 'bold'
    }
}));


export default function App() {
    const [boards, setBoards] = useState([]);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStyles();


    const fetchData = async (userID) => {
        try {
            const respone = await axios.get(`https://sprint-retrospective-api.herokuapp.com/boards/${userID}`);
            setBoards(respone.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => { fetchData(user) }, [user]);


    if (!user) {
        const uID = CookieService.read('userID');
        if (uID)
            setUser(String(uID));
    }


    if (user) {
        return (
            <Grid container direction="column">
                <Grid item>
                    <Header userName="Đức" avatar="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
                </Grid>
                <Grid item>
                    <Box m={3}>
                        <Typography display="block" variant="h5" className={classes.titleStyles}>
                            My boards
                    </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Box ml={3}>
                        <Typography display="block" variant="h6" className={classes.titleStyles}>
                            Public boards
                    </Typography>
                    </Box>
                </Grid>
                <Grid item container>
                    <Grid item xs={1} />
                    <Grid item>
                        {isLoading ?
                            <Typography>Loading...</Typography> :
                            < PublicBoards boardList={boards} />
                        }
                    </Grid>
                    <AddBoard />
                    <Grid item xs={1} />
                </Grid>
            </Grid>
        );
    } else {
        return (
            <Login
                loginSuccessAction={() => {
                    const userID = CookieService.read(`userID`);
                    setUser(String(userID));
                }}
            />
        )
    }
};