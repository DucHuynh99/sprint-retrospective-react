import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, makeStyles } from '@material-ui/core';
import Header from './Header';
import PublicBoards from './PublicBoards';
const axios = require('axios').default;


const userID_test = '5f97c9e93f2cf8fef63f0777';


const useStyles = makeStyles(() => ({
    titleStyles: {
        marginBlockStart: 25,
        color: '#283593',
        fontWeight: 'bold'
    }
}));


export default function App() {
    const [boards, setBoards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchData = async (userID) => {
            try {
                const respone = await axios.get(`https://sprint-retrospective-api.herokuapp.com/boards/${userID}`);
                setBoards(respone.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData(userID_test);
    }, []);


    const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid item>
                <Header />
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
                        <PublicBoards boardList={boards} />
                    }
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </Grid>
    );
};