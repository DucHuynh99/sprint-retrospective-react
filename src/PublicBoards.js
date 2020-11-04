import React from 'react';
import { Grid } from '@material-ui/core';

import BoardCard from './BoardCard';

import BoardService from './services/BoardService';


const PublicBoards = ({ boardList, refreshBoards }) => {
    const boards = Array.from(boardList);
    const listView = [];
    if (boards.length !== 0) {
        for (let i = 0; i < boards.length; i++) {
            listView.push(
                <Grid item
                    key={i}
                    sx={4}>
                    <BoardCard
                        name={boards[i].name}
                        modifiedDate={boards[i].modifiedDate}
                        cardCount={boards[i].cardCount}
                        deleteAction={() => {
                            BoardService.deleteBoard(boards[i]._id);
                            refreshBoards();
                        }}
                    />
                </Grid>
            );
        }
    }
    return (<Grid container spacing={3} >{listView}</Grid>);
};


export default PublicBoards;