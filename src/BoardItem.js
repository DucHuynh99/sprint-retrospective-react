import React, { useState } from 'react';
import { Grid, Typography, Box, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, makeStyles } from '@material-ui/core';
import BoardService from './services/BoardService';

export default function BoardItem({ boardID, columnName, info, onActionSucess }) {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [content, setContent] = useState("");

    //Dialod
    const handleTextChange = (e) => { setContent(e.target.value) };
    const handleClose = () => { setDialogIsOpen(false) };
    const handleContentUpdate = async (e) => {
        e.preventDefault();
        if (await BoardService.updateItemContent(boardID, columnName, info, content)) {
            onActionSucess();
        }
        handleClose();

    };

    return (
        <div>
            <Paper elevation={3} >
                <Grid container direction="row">
                    <Grid item>
                        {info}
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Button
                                onClick={async () => {
                                    if (await BoardService.deleteBoardDetail(boardID, columnName, info)) {
                                        onActionSucess();
                                    }
                                }}>Delete</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={() => {
                                setDialogIsOpen(true);
                            }}>Update</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Dialog open={dialogIsOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Change content</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Item's content"
                        type="text"
                        defaultValue={info}
                        fullWidth
                        variant="outlined"
                        onChange={handleTextChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleContentUpdate} color="primary">Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}