import React, { useState, useEffect } from 'react';
import BoardService from './services/BoardService';
import { Grid, Typography, TextField, Button, makeStyles, Box } from '@material-ui/core';

import BoardItem from './BoardItem';

export default function BoardDetail({ boardID }) {
    const [wentWell, setWentWell] = useState(null);
    const [toImprove, setToImprove] = useState(null);
    const [actionItems, setActionItems] = useState(null);

    const [newWentWell, setNewWentWell] = useState("");
    const [newToImprove, setNewToImprove] = useState("");
    const [newActionItem, setNewActionItem] = useState("");

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));
    const classes = useStyles();

    //Fetch Board Details
    const FetchBoardDetail = async (boardID) => {
        const res = await BoardService.getBoardDetail(boardID);
        if (res) {
            setWentWell(res.wentWell);
            setToImprove(res.toImprove);
            setActionItems(res.actionItems);
        } else
            console.log("Not have board details");
    }
    useEffect(() => { FetchBoardDetail(boardID); }, []);

    //Add new
    const handleWentWellChange = (e) => {
        setNewWentWell(e.target.value);
    };
    const handleToImproveChange = (e) => {
        setNewToImprove(e.target.value);
    };
    const handleActionItemChange = (e) => {
        setNewActionItem(e.target.value);
    }
    const handleAddWentWell = async (e) => {
        e.preventDefault();
        if (await BoardService.addWentWell(boardID, newWentWell)) {
            FetchBoardDetail(boardID);
        }
    }
    const handleAddToImprove = async (e) => {
        e.preventDefault();
        if (await BoardService.addToImprove(boardID, newToImprove)) {
            FetchBoardDetail(boardID);
        }
    }
    const handleAddActionItem = async (e) => {
        e.preventDefault();
        if (await BoardService.addActionItem(boardID, newActionItem)) {
            FetchBoardDetail(boardID);
        }
    }

    //Render
    const wentWellListView = [];
    if (wentWell && wentWell.length !== 0) {
        for (let i = 0; i < wentWell.length; i++) {
            wentWellListView.push(
                <Grid item key={i}>
                    <BoardItem
                        boardID={boardID}
                        columnName="WentWell"
                        info={wentWell[i]}
                        onActionSucess={async () => { await FetchBoardDetail(boardID) }}
                    />
                </Grid>
            );
        }
    }
    const toImproveListView = [];
    if (toImprove && toImprove.length !== 0) {
        for (let i = 0; i < toImprove.length; i++) {
            toImproveListView.push(
                <Grid item key={i}>
                    <BoardItem
                        boardID={boardID}
                        columnName="ToImprove"
                        info={toImprove[i]}
                        onActionSucess={async () => { await FetchBoardDetail(boardID) }}
                    />
                </Grid>
            );
        }
    }
    const actionItemsListView = [];
    if (actionItems && actionItems.length !== 0) {
        for (let i = 0; i < actionItems.length; i++) {
            actionItemsListView.push(
                <Grid item key={i}>
                    <BoardItem
                        boardID={boardID}
                        columnName="actionItems"
                        info={actionItems[i]}
                        onActionSucess={async () => { await FetchBoardDetail(boardID) }}
                    />
                </Grid>
            );
        }
    }

    return (
        <div className={classes.root}>
            <Grid container justify="space-evenly" alignItems="flex-start" spacing={3}>
                <Grid item xs={4}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h6">Went well</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item xs={10}>
                                    <TextField type="text" variant="filled" label="Info" onChange={handleWentWellChange} />
                                </Grid>
                                <Grid item xs={2}>
                                    <Box>
                                        <Button onClick={handleAddWentWell}>Add</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container justify="space-between" alignItems="center" direction="column-reverse">
                                {wentWellListView}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h6">To Improve</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item xs={10}>
                                    <TextField type="text" variant="filled" label="Info" onChange={handleToImproveChange} />
                                </Grid>
                                <Grid item xs={2}>
                                    <Box>
                                        <Button onClick={handleAddToImprove}>Add</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container justify="space-between" alignItems="center" direction="column-reverse">
                                {toImproveListView}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h6">Action Items</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item xs={10}>
                                    <TextField type="text" variant="filled" label="Info" onChange={handleActionItemChange} />
                                </Grid>
                                <Grid item xs={2}>
                                    <Box>
                                        <Button onClick={handleAddActionItem}>Add</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container justify="space-between" alignItems="center" direction="column-reverse">
                                {actionItemsListView}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}