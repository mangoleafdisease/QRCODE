import React, { useState } from 'react';
import { TextareaAutosize, Typography } from '@material-ui/core';
import QrScan from 'react-qr-reader';

function QRscanner() {
  const [qrscan, setQrscan] = useState('ExampleText | | Example Description | Unit: 1234 | Year: 2023 |');
  
  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
    }
  }

  const handleError = (err) => {
    console.error(err);
  }

  return (
    <div>
      <span>QR Scanner</span>

      <center>
        <div style={{ marginTop: 30 }}>
          <QrScan
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ height: 240, width: 320 }}
          />
        </div>
      </center>

      <div>
        <Typography variant="h6">Scanned Content:</Typography>
        <p><strong>Name:</strong> {qrscan.split('|')[0].trim()}</p>
        <p><strong>Description:</strong> {qrscan.split('|')[1].trim()}</p>
        <p><strong>Unit:</strong> {qrscan.split('|')[2].trim()}</p>
        <p><strong>Years:</strong> {qrscan.split('|')[3].trim()}</p>
        <p><strong>Status:</strong> {qrscan.split('|')[4].trim()}</p>
        <p><strong>Serial Number:</strong> {qrscan.split('|')[5].trim()}</p>
      </div>

      <TextareaAutosize
        style={{ fontSize: 18, width: 320, height: 100, marginTop: 100 }}
        rowsMax={4}
        defaultValue={qrscan}
        value={qrscan}
      />
    </div>
  );
}

export default QRscanner;
