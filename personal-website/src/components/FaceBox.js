import React from 'react';
import {makeStyles} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    body: {
        backgroundColor: '#282828', 
        width:'30vw',
        height: '80vh',
        margin:50,
        marginTop: 75,
        borderRadius: '5px',
        border: '1.5px solid #181818'
    }
}));

export default function Facebox() {
    const classes = useStyles();
    return (
        <div id="Facebox" className={classes.body}>

        </div>
    );
}