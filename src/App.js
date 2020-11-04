import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, makeStyles } from '@material-ui/core';
import Header from './Header';
import PublicBoards from './PublicBoards';
import AddBoard from './AddBoard';
import Login from './Login';

import CookieService from './services/CookieService';
import AccountService from './services/AccountService';
import BoardService from './services/BoardService';


const useStyles = makeStyles(() => ({
    titleStyles: {
        marginBlockStart: 25,
        color: '#283593',
        fontWeight: 'bold'
    }
}));


export default function App() {
    const [boards, setBoards] = useState(null);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStyles();

    const FetchData = async () => {
        if (!user) {
            const userID = CookieService.read('userID');
            if (userID) {
                AccountService.getUser(userID).then(userData => {
                    if (userData) {
                        setUser(userData);
                    }
                });
                const boards = await BoardService.getBoards(userID);
                if (boards) {
                    setBoards(boards);
                    setIsLoading(false);
                }
            }
        }
    }


    useEffect(() => { FetchData(); });


    if (user) {
        return (
            <Grid container direction="column">
                <Grid item>
                    <Header userName={user.firstName} avatar={user.avatar} updateUserProfileAction={() => { }} />
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
                            < PublicBoards
                                boardList={boards}
                                refreshBoards={async () => { setBoards(await BoardService.getBoards(user._id)) }}
                            />
                        }
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Grid>
        );
    } else {
        return (
            <Login loginSuccessAction={() => FetchData()} />
        )
    }
};