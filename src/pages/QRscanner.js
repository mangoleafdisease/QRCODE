import React, { useState } from 'react';
import QrScan from 'react-qr-reader';

function QRscanner() {
  const [qrscan, setQrscan] = useState(null); // Use null to represent no result
  const [selectedFile, setSelectedFile] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
      setSelectedFile(null); // Reset the selected file when a QR code is scanned
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

  return (
    <div>
      <span>QR Scanner</span>

      {qrscan === null ? ( // Only show QR scanner when qrscan is null
        <input type="file" accept="image/*" onChange={handleFileUpload} />
      ) : null}
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}

      <center>
        <div style={{ marginTop: 30 }}>
          {qrscan === null ? ( // Only show QR scanner when qrscan is null
            <QrScan
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ height: 240, width: 320 }}
            />
          ) : null}
        </div>
      </center>
    </div>
  );
}

export default QRscanner;
