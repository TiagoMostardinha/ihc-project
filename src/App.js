import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar.js';
import Home from './Home.js';
import Footer from './Footer.js';
import Wallet from './Wallet.js';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/wallet' element={<Wallet />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
