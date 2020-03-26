import React from "react";
import {makeStyles, IconButton} from '@material-ui/core/';
import AboutImg from './img/About.png';
import Pencils from './img/pencilpattern.png';
import LighthouseImg from './img/lighthouse.PNG';
import PlaceholderImg from './img/placeholder.png';
import PhotonImg from './img/photon.jpg';
import LinkIcon from '@material-ui/icons/Link';
import { Scrollbars } from 'react-custom-scrollbars';

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
        backgroundImage:`url(${Pencils})`,
        backgroundRepeat: "repeat",
        overflow: "hidden"
    },
    main: {
      backgroundColor: "#222222",
      width: "80%",
      height:"100%",
      margin: "auto",
      overflowY: "auto"
    },
    button: {
      // flexGrow: 1,
      width: 100,
      marginRight: 25,
      '&:hover': {
        backgroundColor: "#333333"
      },
    },
    project: {
      backgroundColor: '#282828',
      borderRadius: '5px',
      border: '1.5px solid #181818',
      paddingTop: "15px",
      textAlign: "left",
      padding: "15px",
      width: "80%",
      margin: "auto",
      marginBottom: "20px",
    },
    link: {
      color: "white",
    },
    proImg: {
      float: "left",
      marginRight: "10px",
      clear:"both"
    },
    p: {
      marginLeft: "50px",
      overflow:"auto",
      fontSize: "16px",
      display:"block"
    }
   
  }));
  

export default function About() {
    const classes = useStyles();
    return(
        <div id="aboutPage" className={classes.body}>
          <div className={classes.main}>
          <Scrollbars style={{ width: "100%", height: "100%" }}>
              <img src={AboutImg} width="150px" style={{marginTop: "100px"}}></img>
              <p>Here is a list of some of my current and previous projects! </p>
              <h1 style={{textAlign: "left", marginLeft: "75px"}}>Projects</h1>
              <div className={classes.project}>
                <span>
                  <h2 style={{display: "inline"}}>LucidVN</h2>
                  <IconButton aria-label="Link" href="">
                    <LinkIcon fontSize="large" className={classes.link}  />
                  </IconButton>
                </span><hr/><br/>
                <img src={PlaceholderImg} alt="placerholder image" width="200px" className={classes.proImg}/>
                <p className={classes.p}>
                  A horror RPG/VN game developed using Gamemaker Studio 2. Still a work in progress, this is more of a hobby project. 
                  The ultimate end goal is to create a fully fledged video game! Utilizes gml, see: <a href="https://docs.yoyogames.com/source/dadiospice/002_reference/001_gml%20language%20overview/">link</a> <br/><br/>
                  <i> What do you mean the train is haunted???</i> 
                </p>
                <div style={{clear: "both"}}></div>
              </div>

              <div className={classes.project}>
                <span>
                  <h2 style={{display: "inline"}}>Lighthouse</h2>
                  <IconButton aria-label="Link" href="https://devpost.com/software/lighthouse-asxtwd">
                    <LinkIcon fontSize="large" className={classes.link}  />
                  </IconButton>
                </span><hr/><br/>
                  <img src={LighthouseImg} alt="lighthouse app" width="200px" className={classes.proImg}/>
                  <p className={classes.p}>An mobile app developed on Android Studio aimed at providing a fast-paced check-in service for hospitals and 
                    patients alike through the use of IoT Estimote beacons. Developed during ArchHacks at Washington University in St. Louis.</p>
                    <div style={{clear: "both"}}></div>
              </div>

              <div className={classes.project}>
                <span>
                  <h2 style={{display: "inline"}}>IoTGaragedoor App</h2>
                  <IconButton aria-label="Link" href="https://github.com/xuyumi/IoTGaragedoor">
                    <LinkIcon fontSize="large" className={classes.link}  />
                  </IconButton>
                </span><hr/><br/>
                  <img src={PhotonImg} alt="garagedoor app" width="200px" className={classes.proImg}/>
                  <p className={classes.p}>Another hybrid mobile app developed using Phonegap, Apache Cordova, and a Particle Photon. 
                    Included a mini laser cut garagedoor demo prototype with a working motor and sensors! Control the state of your 
                    garagedoor from the comfort of your phone. Additionally detects obstructions underneath the door.
                  </p>
                  
                    <div style={{clear: "both"}}></div>
              </div>
            </Scrollbars>
          </div>
        </div>

    );
}