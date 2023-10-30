import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom'; // Import useHistory
import QRgenerator from './pages/QRgenerator';
import Logo from './admin.png'; // Import your logo image

function AdminDashboard() {
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);
  const [loggedInUser] = useState("Administrator"); // Replace with the actual user's name
  const [status, setStatus] = useState("Online"); // Define a status state variable
  const history = useHistory(); // Get the history object

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  const handleLogout = () => {
    // Implement your logout logic here (e.g., clear user session)
    
    // Navigate to the homepage
    history.push('/');
  };

  const handleStatusChange = (newStatus) => {
    // Update the status when needed
    setStatus(newStatus);
  };

  return (
    <div>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          {/* Logo */}
          <IconButton edge="start" color="inherit" aria-label="logo">
            <img src={Logo} alt="Logo" width="40" height="40" />
          </IconButton>
          
          {/* Title */}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
          </Typography>

          {/* User Dropdown Menu */}
          <Button color="inherit" onClick={handleUserMenuOpen}>
            {loggedInUser}
          </Button>
          <Menu
            anchorEl={userMenuAnchorEl}
            keepMounted
            open={Boolean(userMenuAnchorEl)}
            onClose={handleUserMenuClose}
          >
            <MenuItem onClick={handleUserMenuClose}>Invitory</MenuItem>
            <MenuItem onClick={handleUserMenuClose}>Logs</MenuItem>
            <MenuItem onClick={handleLogout}>Log Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Status Display */}
      <div style={{ padding: '16px' }}>
        <Typography variant="h6">Status: {status}</Typography>
        <Button variant="outlined" onClick={() => handleStatusChange("Online")}>Online</Button>
        <Button variant="outlined" onClick={() => handleStatusChange("Away")}>Away</Button>
        <Button variant="outlined" onClick={() => handleStatusChange("Offline")}>Offline</Button>
      </div>

      {/* Admin Dashboard Content */}
      <QRgenerator /> {/* Place your content here */}
    </div>
  );
}

export default AdminDashboard;
