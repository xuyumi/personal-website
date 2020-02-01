import React from 'react';
import {makeStyles, Typography} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    root: {
        color: "white"
    },
    body: {
        marginTop: "30px",
        color: "white",
        fontSize: "14px"
    }
}));

export default function DetailBox(props) {
    const classes = useStyles();
    return (
        <div id="detail" className={classes.root}>
            <h1 style={{marginBottom: "10px"}}>{props.info.title}</h1>
            <Typography style={{color: "white", fontSize: "14px"}}>{props.info.date}</Typography>
            <hr style={{width: "90%"}}/>
            <p className= {classes.body}>{props.info.body}</p>
        </div>   
    );
}