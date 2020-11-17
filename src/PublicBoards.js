import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';

import BoardCard from './BoardCard';

import BoardService from './services/BoardService';


const PublicBoards = ({ userID, refreshBoards }) => {

    const [boards, setBoards] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const FetchData = async (userID) => {
            console.log(userID);
            if (userID) {
                const boardList = await BoardService.getBoards(userID);
                if (boardList) {
                    setBoards(boardList);
                    setIsLoading(false);
                }
            }
        };
        FetchData(userID);
        console.log('Call effect');
    }, []);

    const listView = [];
    if (boards && boards.length !== 0) {
        for (let i = 0; i < boards.length; i++) {
            listView.push(
                <Grid item key={i} sx={4}>
                    <BoardCard
                        name={boards[i].name}
                        modifiedDate={boards[i].modifiedDate}
                        cardCount={boards[i].cardCount}
                        deleteAction={async () => {
                            await BoardService.deleteBoard(boards[i]._id);
                            await refreshBoards();
                        }}
                    />
                </Grid>
            );
        }
    }

    return (isLoading ?
        <Typography>Loading...</Typography> :
        <Grid container spacing={3} >{listView}</Grid>
    );
};

export default PublicBoards;