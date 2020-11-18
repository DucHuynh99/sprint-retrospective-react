import React, { useState, useEffect } from 'react';
import { Grid, Typography, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@material-ui/core';

import BoardCard from './BoardCard';
import AddBoard from './AddBoard';

import BoardService from './services/BoardService';


const PublicBoards = ({ userID }) => {

    const [boards, setBoards] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [addDiaIsOpen, setAddDiaIsOpen] = useState(false);
    const [newBoardName, setNewBoardName] = useState("");

    //Fetch Boards action
    const FetchBoard = async (userID) => {
        if (userID) {
            const boardList = await BoardService.getBoards(userID);
            if (boardList) {
                setBoards(boardList);
                setIsLoading(false);
            }
        }
    };

    useEffect(() => { FetchBoard(userID); }, []);

    //Add Dialog action
    const handleClose = () => {
        setAddDiaIsOpen(false);
    }

    const handleNewBoardNameChange = (e) => {
        setNewBoardName(e.target.value);
    }

    const handleAddNewBoard = async (e) => {
        e.preventDefault();
        await BoardService.addBoard(newBoardName, userID);
        FetchBoard(userID);
        handleClose();
    }


    //Render View
    const listView = [];
    listView.push(
        <Grid item key={(boards && boards.length) || 0} sx={4}>
            <AddBoard text="add"
                onClick={() => {
                    setAddDiaIsOpen(true);
                }}
            />
        </Grid>
    );
    if (boards && boards.length !== 0) {
        for (let i = 0; i < boards.length; i++) {
            listView.push(
                <Grid item key={i} sx={4}>
                    <BoardCard
                        boardID={boards[i]._id}
                        name={boards[i].name}
                        modifiedDate={boards[i].modifiedDate}
                        cardCount={boards[i].cardCount}
                        deleteAction={async () => {
                            await BoardService.deleteBoard(boards[i]._id);
                            await FetchBoard(userID);
                        }}
                    />
                </Grid>
            );
        }
    }
    return (isLoading ?
        <Typography>Loading...</Typography> :
        <div>
            <Grid container spacing={3} >{listView}</Grid>
            <Dialog open={addDiaIsOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add new Board</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Board name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={handleNewBoardNameChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleAddNewBoard} color="primary">Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default PublicBoards;