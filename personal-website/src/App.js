import React from 'react';
import {AppBar, Toolbar, Typography, Button, makeStyles} from '@material-ui/core/'
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 0,
  },
  button: {
    flexGrow: 1,
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Cardboard Boxes
          </Typography>
          <Button color="inherit" className={classes.button}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
