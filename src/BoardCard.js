import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


const BoardCard = ({ name, cardCount, modifiedDate }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <AccessTimeIcon />
                <Typography>{modifiedDate}</Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {cardCount} card
                </Typography>
            </CardContent>
        </Card>
    );
};

export default BoardCard;