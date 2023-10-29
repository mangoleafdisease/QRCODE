import React, { useState } from 'react';
import { Fab, TextField, TextareaAutosize, Grid } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import QRcode from 'qrcode.react';

function QRgenerator() {
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

      <div style={{ marginTop: 30 }}>
        <TextField
          onChange={handleQrContentChange}
          style={{ width: 320 }}
          value={qrContent}
          label="QR content"
          size="large"
          variant="outlined"
          color="primary"
        />
      </div>

      <div style={{ marginTop: 30 }}>
        <TextField
          onChange={handleAdditionalInfoChange}
          style={{ width: 320 }}
          value={additionalInfo}
          label="Additional Information"
          size="large"
          variant="outlined"
          color="primary"
        />
      </div>

      <div style={{ marginTop: 30 }}>
        <TextField
          onChange={handleUnitChange}
          style={{ width: 320 }}
          value={unit}
          label="Unit"
          size="large"
          variant="outlined"
          color="primary"
        />
      </div>

      <div style={{ marginTop: 30 }}>
        <TextField
          onChange={handleYearsChange}
          style={{ width: 320 }}
          value={years}
          label="Years"
          size="large"
          variant="outlined"
          color="primary"
        />
      </div>

      <div style={{ marginTop: 30 }}>
        <TextField
          onChange={handleStatusChange}
          style={{ width: 320 }}
          value={status}
          label="Status"
          size="large"
          variant="outlined"
          color="primary"
        />
      </div>

      <div style={{ marginTop: 30 }}>
        <TextField
          onChange={handleSerialNumberChange}
          style={{ width: 320 }}
          value={serialNumber}
          label="Serial Number"
          size="large"
          variant="outlined"
          color="primary"
        />
      </div>

      {qrContent ? (
        <QRcode
          id="myqr"
          value={`${qrContent}||${additionalInfo}||Unit: ${unit}||Year: ${years}||Statu: ${status}||Serial Number: ${serialNumber}`}
          size={320}
          includeMargin={true}
        />
      ) : (
        <p>No QR code preview</p>
      )}

      <div>
        {qrContent ? (
          <Grid container>
            <Grid item xs={10}>
              <TextareaAutosize
                style={{ fontSize: 18, width: 250, height: 100 }}
                rowsMax={4}
                defaultValue={qrContent}
                value={qrContent}
              />
            </Grid>
            <Grid item xs={2}>
              <Fab onClick={downloadQR} style={{ marginLeft: 10 }} color="primary">
                <GetApp />
              </Fab>
            </Grid>
          </Grid>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default QRgenerator;
