import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import QRgenerator from './pages/QRgenerator';
import Logo from './admin.png';

function AdminDashboard() {
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);
  const [loggedInUser] = useState("Administrator");
  const [status, setStatus] = useState("Online");
  const history = useHistory();

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  const handleLogout = () => {
    history.push('/');
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <img src={Logo} alt="Logo" width="40" height="40" />
          </IconButton>

          <Typography variant="h6" style={{ flexGrow: 1 }}>
          </Typography>

          <Button color="inherit" onClick={handleUserMenuOpen}>
            {loggedInUser}
          </Button>
          <Menu
            anchorEl={userMenuAnchorEl}
            keepMounted
            open={Boolean(userMenuAnchorEl)}
            onClose={handleUserMenuClose}
          >
            <MenuItem onClick={handleUserMenuClose}>Inventory</MenuItem>
            <MenuItem onClick={handleUserMenuClose}>Logs</MenuItem>
            <MenuItem onClick={handleLogout}>Log Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <div style={{ padding: '16px' }}>
        <Typography variant="h6">Status: {status}</Typography>
        <Button variant="outlined" onClick={() => handleStatusChange("Online")}>Online</Button>
        <Button variant="outlined" onClick={() => handleStatusChange("Away")}>Away</Button>
        <Button variant="outlined" onClick={() => handleStatusChange("Offline")}>Offline</Button>
      </div>

      {/* Use Grid to arrange content */}
      <Grid container>
        <Grid item xs={12}>
          <QRgenerator /> {/* Place your content here */}
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminDashboard;
