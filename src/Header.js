import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    appbarstyle: { backgroundColor: '#2196F3' },
    typographyStyle: { flex: 1 }
}));


const Header = ({ userName, avatar, updateUserProfileAction }) => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appbarstyle}>
            <Toolbar>
                <Typography variant="h5" className={classes.typographyStyle}>Sprint Retrospective</Typography>
                <Avatar src={avatar} />
                <Button onClick={() => { updateUserProfileAction() }}>
                    Hi {userName}
                </Button>
            </Toolbar>
        </AppBar>
    );
};


export default Header;