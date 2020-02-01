import React from "react";
import {makeStyles} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      // fontFamily: 'Spectral'
    },
    body: {
        width:"100%",
        height: "100vh",
        overflowX: 'hidden',
        color: "white",
        overflow: "hidden"
    },
}));


export default function Gallery() {
    const classes = useStyles();
    return(
        <div id="Gallery" className={classes.body}>
            <h1 style={{marginTop: "100px"}}>Coming soon!</h1>
        </div>
    )
}