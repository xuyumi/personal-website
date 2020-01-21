import React from 'react';
import {AppBar, Toolbar, Typography, Button, Fade,makeStyles} from '@material-ui/core/'
import './App.css';
import Logo from './Logo.png';
import Home from './Home.js';

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

const gotoHome = (event) => {
  console.log("Go to Home");
  gotoHome(true);
  gotoAbout(false);
};

const gotoAbout = (event) => {
  console.log("Go to Home");
  gotoHome(false);
  gotoAbout(true);
};


function App() {
  const classes = useStyles();
  const [home, gotoHome] = React.useState(true);
  const [About, gotoAbout] = React.useState(false);

  return (
    <div className="App" style={{backgroundColor: "#222222"}}>
      <AppBar position="fixed" style={{backgroundColor: "#121212"}}>
        <Toolbar>
          <img src={Logo} className={classes.logo}></img>
          <Button color="inherit" className={classes.button} onClick={gotoHome}>Home</Button>
          <Button color="inherit" className={classes.button}>About</Button>
          <Button color="inherit" className={classes.button}>Gallery</Button>
          <Button color="inherit" className={classes.button}>Games</Button>
        </Toolbar>
      </AppBar>

      {/* <-------------- ALL PAGES ----------------> */}
      { home ? <Fade><Home /></Fade> : null }
    </div>
  );
}

export default App;
