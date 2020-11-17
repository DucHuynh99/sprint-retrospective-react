import React, { useEffect } from 'react';
import { Grid, Typography, Box, makeStyles } from '@material-ui/core';

import Header from './Header';
import PublicBoards from './PublicBoards';

const useStyles = makeStyles(() => ({
    titleStyles: {
        marginBlockStart: 25,
        color: '#283593',
        fontWeight: 'bold'
    }
}));

export default function HomePage({ userID }) {
    const classes = useStyles();

    return (
        <Grid container direction="column">
            <Grid item>
                <Header
                    userID={userID}
                    onAvatarClick={() => {
                        console.log("avatar clicked");
                    }}
                />
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
                    <PublicBoards userID={userID} />
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </Grid>
    );
}