import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AccountService from './services/AccountService';

const useStyles = makeStyles(() => ({
    appbarstyle: { backgroundColor: '#2196F3' },
    typographyStyle: { flex: 1 }
}));


export default function Header({ userID, onAvatarClick }) {
    const [user, setUser] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        const FetchData = async (userID) => {
            if (userID) {
                const userData = await AccountService.getUser(userID);
                if (userData) {
                    setUser(userData);
                }
            }
        };
        FetchData(userID);
    }, []);

    return (
        user ? (
            <AppBar position="static" className={classes.appbarstyle} >
                <Toolbar>
                    <Typography variant="h5" className={classes.typographyStyle}>Sprint Retrospective</Typography>
                    <Avatar src={user.avatar} />
                    <Button onClick={() => { onAvatarClick() }}>
                        Hi {user.firstName}
                    </Button>
                </Toolbar>
            </AppBar >
        ) :
            <div>Loading</div>
    );
};