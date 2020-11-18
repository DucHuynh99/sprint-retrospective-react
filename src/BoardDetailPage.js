import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, makeStyles } from '@material-ui/core';
import BoardService from './services/BoardService';

import Header from './Header';
import BoardDetail from './BoardDetail';

const useStyles = makeStyles(() => ({
    titleStyles: {
        marginBlockStart: 25,
        color: '#283593',
        fontWeight: 'bold'
    }
}));


export default function BoardDetailPage({ userID }) {
    const { boardID } = useParams();
    const [board, setBoard] = useState(null);
    const [boardName, setBoardName] = useState("");
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const classes = useStyles();

    const FetchBoardInfo = async (boardID) => {
        const res = await BoardService.getByID(boardID);
        if (res)
            setBoard(res);
    }

    useEffect(() => { FetchBoardInfo(boardID) }, []);

    //Dialog
    const handleClose = () => { setDialogIsOpen(false) };
    const handleTextChange = (e) => { setBoardName(e.target.value) };
    const handleChangeBoardName = async (e) => {
        e.preventDefault();
        if (await BoardService.updateBoardName(boardID, boardName))
            FetchBoardInfo(boardID);
        handleClose();
    };

    return (
        <div>
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
                    <Grid container alignItems="baseline">
                        <Grid item>
                            <Box m={3}>
                                <Typography display="block" variant="h5" className={classes.titleStyles}>
                                    {
                                        board ?
                                            board.name :
                                            "Loading..."
                                    }
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Button onClick={() => { setDialogIsOpen(true) }}>Edit</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <BoardDetail boardID={boardID} />
                </Grid>
            </Grid>
            <Dialog open={dialogIsOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Change Board's name</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Board name"
                        type="text"
                        defaultValue={board ? board.name : ""}
                        fullWidth
                        variant="outlined"
                        onChange={handleTextChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleChangeBoardName} color="primary">Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}