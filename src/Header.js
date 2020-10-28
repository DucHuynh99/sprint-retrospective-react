import React from 'react';
import { AppBar, Toolbar, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    appbarstyle: { backgroundColor: '#2196F3' },
    typographyStyle: { flex: 1 }
}));


const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appbarstyle}>
            <Toolbar>
                <Typography variant="h5" className={classes.typographyStyle}>Sprint Retrospective</Typography>
                <Avatar src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
            </Toolbar>
        </AppBar>
    );
};


export default Header;