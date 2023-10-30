import React, { useState } from 'react';
import { TextareaAutosize } from '@material-ui/core';
import QrScan from 'react-qr-reader';

function QRscanner() {
  const [qrscan, setQrscan] = useState('No result');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setQrscan('Scanning...');
      const reader = new FileReader();
      reader.onload = (event) => {
        // Use the imageDataUrl for displaying the selected image or for further processing.
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <span>QR Scanner</span>

      <input type="file" accept="image/*" onChange={handleFileUpload} />
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}

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
