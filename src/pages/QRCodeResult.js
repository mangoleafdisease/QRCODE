import React from 'react';
import { Typography, Paper } from '@material-ui/core';

function QRCodeResult({ scannedData }) {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        QR Code Scan Result
      </Typography>
      <Paper elevation={3} style={{ padding: '16px' }}>
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
