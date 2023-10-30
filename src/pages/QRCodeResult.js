import React from 'react';
import { Typography, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1), // Adjust padding for small screens
    },
  },
}));

function QRCodeResult({ scannedData }) {
  const classes = useStyles();

  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6" gutterBottom>
          QR Code Scan Result
        </Typography>
        <Typography variant="body1">
          Scanned Data:
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {scannedData}
        </Typography>
      </Paper>
    </div>
  );
}

export default QRCodeResult;
