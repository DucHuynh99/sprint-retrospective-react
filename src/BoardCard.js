import React from 'react';
import { makeStyles, Card, CardContent, Typography, IconButton, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

const useStyles = makeStyles({
    root: {
        minWidth: 200,
    },
    title: {
        color: '#8E24AA'
    },
    pos: {
        marginBottom: 12,
    },
    modifiedDate: {
        fontSize: 15
    },
    icon: {
        fontSize: 15,
        color: '#283593',
        fontWeight: 'bolder'
    }
});


const BoardCard = ({ boardID, name, cardCount, modifiedDate, deleteAction }) => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Card variant='outlined' className={classes.root}>
            <CardContent>
                <Typography variant="h6" className={classes.title}>
                    {name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {cardCount} {cardCount > 1 ? "cards" : "card"}
                </Typography>
                <Typography align="right" className={classes.modifiedDate}>
                    <AccessTimeIcon className={classes.icon} />
                    {moment(modifiedDate).format("DD/MM/YYYY")}
                </Typography>
                <IconButton align="right" aria-label="delete" onClick={() => deleteAction()}>
                    <DeleteIcon />
                </IconButton>
                <Button onClick={() => { history.push(`/board-detail/${boardID}`) }}>Details</Button>
            </CardContent>
        </Card>
    );
};

export default BoardCard;