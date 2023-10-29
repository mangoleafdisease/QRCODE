import React, { useState } from 'react';
import { TextareaAutosize } from '@material-ui/core';
import QrScan from 'react-qr-reader';

function QRscanner() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [unit, setUnit] = useState('');
  const [years, setYears] = useState('');
  const [status, setStatus] = useState('');
  const [serialNumber, setSerialNumber] = useState('');

  const handleScan = (data) => {
    if (data) {
      const scannedData = data.split('||');
      if (scannedData.length === 6) { // Ensure there are six fields
        setName(scannedData[0]);
        setDescription(scannedData[1]);
        setUnit(scannedData[2]);
        setYears(scannedData[3]);
        setStatus(scannedData[4]);
        setSerialNumber(scannedData[5]);
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

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

      <TextareaAutosize
        style={{ fontSize: 18, width: 320, height: 100, marginTop: 100 }}
        rowsMax={7}
        value={`Name: ${name}\nDescription: ${description}\nUnit: ${unit}\nYears: ${years}\nStatus: ${status}\nSerial Number: ${serialNumber}`}
      />
    </div>
  );
}

export default QRscanner;
