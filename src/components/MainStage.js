import React from "react";
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3),
        width: 345,
    },
    media: {
        height: 140,
    },
    title: {
        color: theme.palette.primary.main
    }
}));

const MainStage = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2>Main Stage</h2>
        </div>
    )
}

export default MainStage;