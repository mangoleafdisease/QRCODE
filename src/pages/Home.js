import React, { useState } from 'react';
import {  Button, Typography, Modal, TextField } from '@material-ui/core';
import {  useHistory } from 'react-router-dom';
import QRscanner from './QRscanner';

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Access the router's history object

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const handleLogin = () => {
    // Implement your login logic here
    // You can check the username and password
    // and perform authentication
    if (username === 'admin' && password === '1234') {
      // Redirect to the admin dashboard after successful login
      history.push('/admin_dashboard');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <Typography style={{ margin: 30 }} variant="h2">
        Scan QR Code
      </Typography>

      {/* Add the QRscanner component here */}
      <QRscanner />

      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleLoginClick}
          style={{ marginTop: 20 }}
        >
          Log In
        </Button>
      </div>

      <Modal open={showLogin} onClose={handleLoginClose}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: 20 }}>
          <Typography variant="h4">Log In</Typography>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            style={{ marginTop: 20 }}
          >
            Log In Admin
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
