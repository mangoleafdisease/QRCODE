import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import QRgen from './pages/QRgenerator';
import QRscan from './pages/QRscanner';
import AdminDashboard from './admin_dashboard'; // Import the AdminDashboard component

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
                <QRgen />
              </Route>
              <Route path="/qr_scanner">
                <QRscan />
              </Route>
              <Route path="/admin_dashboard"> {/* Update the path to "/admin_dashboard" */}
                <AdminDashboard />
              </Route>
            </Switch>

          </div>
        </Router>

      </div>
    </div>
  );
}

export default App;
