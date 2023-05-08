import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar.js';
import Home from './Home.js';


function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
