import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CreateContainer from './pages/CreateContainer'
import CreateMovimentation from './pages/CreateMovimentation'
import UpdateContainer from './pages/UpdateContainer'
import UpdateMovimentation from './pages/UpdateMovimentation'
import Home from './pages/Home'


function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-container">Create Container</Link>
        </li>
        <li>
          <Link to="/create-movimentation">Create Movimentation</Link>
        </li>
        <li>
          <Link to="/update-container">Update Container</Link>
        </li>
        <li>
          <Link to="/update-movimentation">Update Movimentation</Link>
        </li>
      </ul>

      <hr />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/create-container" element={<CreateContainer />}/>
        <Route path="/create-movimentation" element={<CreateMovimentation />}/>
        <Route path="/update-movimentation" element={<UpdateMovimentation />}/>
        <Route path="/update-container" element={<UpdateContainer />}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
