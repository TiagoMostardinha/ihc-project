import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar.js';
import Home from './Home.js';
import Footer from './Footer.js';
import Wallet from './Wallet.js';
import SignIn from './SignIn.js';
import AboutUs from './AboutUs.js';
import Profile from './ProfileT1.js'



function App() {
  let user = {
    "name": "John",
    "user_meds": [
      {
        "id": 1,
        "hour": ""
      },
      2,
      3
    ],
    "history": [
      4
    ],
    "id": 1
  }

  // let user = null;

  return (
    <Router>
      <div className="App">
        <NavBar user={user} />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/wallet' element={<Wallet />} />

            <Route exact path='/profile' element={<Profile />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
