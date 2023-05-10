import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar.js';
import Home from './Home.js';
import Footer from './Footer.js';
import Wallet from './Wallet.js';
import SignIn from './SignIn.js';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/wallet' element={<Wallet />} />
            <Route exact path='/signin' element={<SignIn />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
