import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Avatar, Button, Dialog, DialogTitle, DialogContent, DialogActions, Grid, TextField, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AccountService from './services/AccountService';
import TokenService from './services/token-service';

const useStyles = makeStyles(() => ({
    appbarstyle: { backgroundColor: '#2196F3' },
    typographyStyle: { flex: 1 }
}));


export default function Header({ userID, onAvatarClick }) {
    const [user, setUser] = useState(null);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const history = useHistory();
    const classes = useStyles();

    const FetchData = async (userID) => {
        if (userID) {
            const userData = await AccountService.getUser(userID);
            if (userData) {
                setUser(userData);
            }
        }
    };

    useEffect(() => { FetchData(userID); }, []);

    //Dialog
    const handleClose = () => { setDialogIsOpen(false); };
    const handleTextChange1 = (e) => { setNewFirstName(e.target.value) };
    const handleTextChange2 = (e) => { setNewLastName(e.target.value) };
    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        const firstName = newFirstName === "" ? user.firstName : newFirstName;
        const lastName = newLastName === "" ? user.lastName : newLastName;
        if (await AccountService.updateProfile(userID, firstName, lastName)) {
            FetchData(userID);
            handleClose();
        }
    }

    return (
        <div>
            <AppBar position="static" className={classes.appbarstyle} >
                <Toolbar>
                    <Typography onClick={() => { history.push("/"); }} variant="h5" className={classes.typographyStyle} > Sprint Retrospective</Typography>
                    <Avatar src={user ? user.avatar : ""} />
                    <Button onClick={() => { user ? setDialogIsOpen(true) : history.push('/login') }}>
                        {user ? `Hi ${user.firstName}` : "Login now"}
                    </Button>
                    <Box display={user ? "block" : "none"}>
                        <Button onClick={() => { TokenService.deleteToken(); window.location.reload(true); }}>Logout</Button>
                    </Box>
                </Toolbar>
            </AppBar >
            {
                user ?
                    <Dialog open={dialogIsOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Change content</DialogTitle>
                        <DialogContent>
                            <Grid container direction="column">
                                <Grid item>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="first-name"
                                        label="First name"
                                        type="text"
                                        defaultValue={user.firstName}
                                        fullWidth
                                        variant="outlined"
                                        onChange={handleTextChange1}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="last-name"
                                        label="Last name"
                                        type="text"
                                        defaultValue={user.lastName}
                                        fullWidth
                                        variant="outlined"
                                        onChange={handleTextChange2}
                                    />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">Cancel</Button>
                            <Button onClick={handleProfileUpdate} color="primary">Save</Button>
                        </DialogActions>
                    </Dialog> : ""
            }
        </div >
    );
};