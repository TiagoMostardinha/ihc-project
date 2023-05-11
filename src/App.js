import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar.js';
import Home from './Home.js';
import Footer from './Footer.js';
import Wallet from './Wallet.js';


function App() {
  let user = {
    "name": "John",
    "user_meds": [
      {
        "id": 1,
        "hours": 5,
        "minutes": 55,
      }
    ],
    "history": [
      2
    ]
  }

  // let user = null;

  return (
    <Router>
      <div className="App">
        <NavBar user={user} />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/wallet' element={<Wallet user={user}/>} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
