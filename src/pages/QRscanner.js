import React, { useState } from 'react';
import QrScan from 'react-qr-reader';
import { Grid, Typography, Button } from '@material-ui/core';
import QRCodeResult from './QRCodeResult'; // Import QRCodeResult

function QRscanner() {
  const [qrscan, setQrscan] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
      setSelectedFile(null);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setQrscan('');
      const reader = new FileReader();
      reader.onload = (event) => {
        // Use the imageDataUrl for displaying the selected image or for further processing.
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSomeAction = () => {
    // Define the functionality for the Button click event here
    // For example, you can add logic to perform a specific action.
  };

  return (
    <div>
      <Typography variant="h6">QR Scanner</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {qrscan === null && (
            <div>
              <input type="file" accept="image/*" onChange={handleFileUpload} />
              {selectedFile && <p>Selected File: {selectedFile.name}</p>}
            </div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ textAlign: 'center' }}>
            {qrscan === null && (
              <QrScan
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%', height: 'auto' }}
              />
            )}
            {qrscan && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSomeAction}
              >
                Some Action
              </Button>
            )}
          </div>
        </Grid>
      </Grid>

      {/* Pass the 'qrscan' data to QRCodeResult component */}
      {qrscan && <QRCodeResult scannedData={qrscan} />}
    </div>
  );
}

export default QRscanner;
