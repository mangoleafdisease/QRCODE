import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import QRgenerator from './pages/QRgenerator';
import QRscanner from './pages/QRscanner'; // Updated import for QRscanner
import AdminDashboard from './admin_dashboard';
import QRCodeResult from './pages/QRCodeResult'; // Import the QRCodeResult component

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/qr_generator">
                <QRgenerator />
              </Route>
              <Route path="/qr_scanner">
                <QRscanner /> {/* Route for QR scanner component */}
              </Route>
              <Route path="/admin_dashboard">
                <AdminDashboard />
              </Route>
              <Route path="/qr_code_result">
                <QRCodeResult /> {/* Route for displaying QR code scan result */}
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
