import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

let Header = () => {

  return (
    <div>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography variant="h4" color="inherit" align="center">
           The Big Mac Exchange
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;