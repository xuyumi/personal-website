import React from "react";
import {makeStyles, Grid, IconButton} from '@material-ui/core/';
import Facebox from './components/FaceBox';
import Qevi from './img/Qevi.png';
import Banner from './img/Banner.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import data from './csvjson.json';
import Pdf from './ResumeIXU.pdf';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    body: {
        width:"100%",
        height: "100%",
        overflowX: 'hidden',
    },
    intro: {
        backgroundColor: '#282828', 
        marginTop: 20,
        borderRadius: '5px',
        border: '1.5px solid #181818',
        maxWidth: "650px",
        width: "auto",
        minHeight: "200px",
        height:"auto",
        margin: "auto",
        color: "white"
    },
    margin: {
        marginRight: "20px",
        color: 'white',
        transition: '0.3s',
        '&:hover': {
            color: "#9f9f9f"
          },
    }
}));


export default function Home() {
    const classes = useStyles();

    return (
        <div id="Homepage" className={classes.body}>
            <img src={Banner} height="320px" style={{marginTop: "60px", maxWidth: "100%",height: "auto"}}></img>
            <Grid container spacing={2}  style={{marginTop: "20px",width: '100%', margin: 0}}>
             <Grid item xs={12}>
                <div id="introBox" className={classes.intro}>
                    <img src={Qevi} height="175px" style={{float: "left", margin: "20px"}}></img>
                    <p style={{fontSize: "16px", marginLeft: "20px", marginTop: "50px", textAlign: "left"}}> Hello! My name is Isabelle Xu and I'm currently a software engineer. 
                    Apart from programming, I love drawing webcomics, illustrations, and (*trying*) to make games. Welcome to my cardboard box!
                    </p>
                    <span>
                    <IconButton aria-label="LinkedIn" className={classes.margin} href="https://www.linkedin.com/in/isabelle-xu-18779274/">
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                    <IconButton aria-label="Twitter" className={classes.margin} href="https://twitter.com/the_mortal_coil">
                        <TwitterIcon fontSize="large" />
                    </IconButton>
                    <IconButton aria-label="Github" className={classes.margin} href="https://github.com/xuyumi">
                        <GitHubIcon fontSize="large" />
                    </IconButton>
                    <IconButton aria-label="Resume" className={classes.margin} href = {Pdf} target = "_blank">
                        <DescriptionIcon fontSize="large"/>
                    </IconButton>

                    </span>
                </div>
                </Grid>
                <Facebox newsData={data}/>
            </Grid>
        </div>
    );
}