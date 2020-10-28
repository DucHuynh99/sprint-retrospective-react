import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
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


const BoardCard = ({ name, cardCount, modifiedDate }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
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
            </CardContent>
        </Card>
    );
};

export default BoardCard;