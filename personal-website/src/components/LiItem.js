import React from 'react';
import {makeStyles, Divider, ListItemText, ListItem, Typography} from '@material-ui/core/'; 

const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      transition: '0.3s',
      "&:hover": {
          backgroundColor: "#333333"
      },
      overlayY: "auto"
    },
    inline: {
        display: 'inline',
    },
    prim: {
        fontSize: "18px"
    }
    
}));


export default function LiItem(props) {
    const classes = useStyles();
    const str = props.info.body.substring(0,50);

    const handleClick = (info) => {
        console.log(info.title + " clicked");
        props.sel(info);
    }
    
    console.log(props);
    return(
        <div>
            <ListItem alignItems="flex-start" className={classes.root} onClick={() => handleClick(props.info)}>
                <ListItemText  classes={{primary: classes.prim}}
                    primary={props.title}
                    secondary={
                        <React.Fragment>
                            <Typography style={{color: "white", fontSize: "14px"}} component="span">
                                {" — " + str +"..."}
                            </Typography><br/>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                style={{color: "white", fontSize: "12px", float: "right"}}
                            >
                                {props.info.date}
                            </Typography>
                        </React.Fragment>
                    }
            />
                </ListItem>
            <Divider light component="li" style={{backgroundColor: "white", opacity: 0.2}}/>
        </div>
    );
}


