import React from 'react';
import {AppBar, Toolbar, Button, Fade,makeStyles} from '@material-ui/core/'
import './App.css';
import Logo from './Logo.png';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // fontFamily: 'Spectral'
  },
  button: {
    // flexGrow: 1,
    width: 100,
    marginRight: 25,
    '&:hover': {
      backgroundColor: "#333333"
    },
  },
  logo: {
    marginLeft: 30,
    marginRight: 75,
    flexGrow: 0,
    width:250
  }
 
}));




function App() {
  const classes = useStyles();
  const [home, setHome] = React.useState(true);
  const [about, setAbout] = React.useState(false);
  const [gallery, setGallery] = React.useState(false);

  const gotoHome = (event) => {
    console.log("Go to Home");
    setHome(true);
    setAbout(false);
    setGallery(false);
  };
  
  const gotoAbout = (event) => {
    console.log("Go to About");
    setHome(false);
    setAbout(true);
    setGallery(false);
  };

  const gotoGallery = (event) => {
    console.log("Go to About");
    setHome(false);
    setAbout(false);
    setGallery(true);
  };
  
  return (
    <div className="App" style={{backgroundColor: "#222222"}}>
      <AppBar position="fixed" style={{backgroundColor: "#121212"}}>
        <Toolbar>
          <img src={Logo} className={classes.logo} alt="logo"></img>
          <Button color="inherit" className={classes.button} onClick={gotoHome}>Home</Button>
          <Button color="inherit" className={classes.button} onClick={gotoAbout}>About</Button>
          <Button color="inherit" className={classes.button} onClick={gotoGallery}>Gallery</Button>
          {/*<Button color="inherit" className={classes.button}>Reverie</Button>*/}
          {/*<Button color="inherit" className={classes.button}>Games</Button>*/}
        </Toolbar>
      </AppBar>

      {/* <-------------- ALL PAGES ----------------> */}
      { home ? <Fade><Home /></Fade> : null }
      { about ? <Fade><About /></Fade> : null }
      { gallery ? <Fade><Gallery /></Fade> : null }
    </div>
  );
}

export default App;
