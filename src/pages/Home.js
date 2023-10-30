import React, { useState } from 'react';
import { Button, Typography, Modal, TextField, AppBar, Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import QRscanner from './QRscanner';

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      history.push('/admin_dashboard');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Your App Title
          </Typography>
          <Button color="inherit" onClick={handleLoginClick}>
            Log In
          </Button>
        </Toolbar>
      </AppBar>

      <Typography style={{ margin: 30 }} variant="h2">
        Scan QR Code
      </Typography>

      <QRscanner />

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
