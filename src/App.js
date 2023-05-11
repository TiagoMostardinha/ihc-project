import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar.js';
import Home from './Home.js';
import Footer from './Footer.js';
import Wallet from './Wallet.js';
import ProfileT1 from './ProfileT1.js'
import ProfileT2 from './ProfileT2.js';
import Search from './Search.js';
import SearchSol from './SearchSol.js';


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
            <Route exact path='/profile1' element={<ProfileT1 />} />
            <Route exact path='/profile2' element={<ProfileT2 />} />
            <Route exact path='/search' element={<Search />} />
            <Route exact path='/searchsol' element={<SearchSol />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
