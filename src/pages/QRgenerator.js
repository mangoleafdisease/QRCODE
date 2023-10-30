import React, { useState } from 'react';
import { Fab, TextField, TextareaAutosize, Grid, makeStyles } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import QRcode from 'qrcode.react';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  textArea: {
    fontSize: '18px',
    width: '100%',
    height: '100px',
    marginBottom: theme.spacing(2),
  },
  downloadButton: {
    marginLeft: theme.spacing(2),
  },
}));

function QRgenerator() {
  const classes = useStyles();

  // State to hold the user input
  const [qrContent, setQrContent] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [unit, setUnit] = useState('');
  const [years, setYears] = useState('');
  const [status, setStatus] = useState('');
  const [serialNumber, setSerialNumber] = useState('');

  // Function to handle user input change
  const handleQrContentChange = (event) => {
    setQrContent(event.target.value);
  };

  const handleAdditionalInfoChange = (event) => {
    setAdditionalInfo(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleYearsChange = (event) => {
    setYears(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSerialNumberChange = (event) => {
    setSerialNumber(event.target.value);
  };

  const downloadQR = () => {
    const canvas = document.getElementById('myqr');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'myqr.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <span>QR Generator</span>

      <TextField
        onChange={handleQrContentChange}
        className={classes.textField}
        value={qrContent}
        label="QR content"
        size="large"
        variant="outlined"
        color="primary"
      />

      <TextField
        onChange={handleAdditionalInfoChange}
        className={classes.textField}
        value={additionalInfo}
        label="Additional Information"
        size="large"
        variant="outlined"
        color="primary"
      />

      <TextField
        onChange={handleUnitChange}
        className={classes.textField}
        value={unit}
        label="Unit"
        size="large"
        variant="outlined"
        color="primary"
      />

      <TextField
        onChange={handleYearsChange}
        className={classes.textField}
        value={years}
        label="Years"
        size="large"
        variant="outlined"
        color="primary"
      />

      <TextField
        onChange={handleStatusChange}
        className={classes.textField}
        value={status}
        label="Status"
        size="large"
        variant="outlined"
        color="primary"
      />

      <TextField
        onChange={handleSerialNumberChange}
        className={classes.textField}
        value={serialNumber}
        label="Serial Number"
        size="large"
        variant="outlined"
        color="primary"
      />

      {qrContent ? (
        <QRcode
          id="myqr"
          value={`${qrContent}||${additionalInfo}||Unit: ${unit}||Years: ${years}||Status: ${status}||Serial Number: ${serialNumber}`}
          size={320}
          includeMargin={true}
        />
      ) : (
        <p>No QR code preview</p>
      )}

      <Grid container>
        <Grid item xs={10}>
          <TextareaAutosize
            className={classes.textArea}
            rowsMax={4}
            defaultValue={qrContent}
            value={qrContent}
          />
        </Grid>
        <Grid item xs={2}>
          <Fab onClick={downloadQR} className={classes.downloadButton} color="primary">
            <GetApp />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}

export default QRgenerator;
