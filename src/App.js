import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar.js';


function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />

        <div className="content">

          ola

        </div>
      </div>
    </Router>
  );
}

export default App;
