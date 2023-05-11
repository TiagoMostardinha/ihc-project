import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar.js';
import Home from './Home.js';
import Footer from './Footer.js';
import Wallet from './Wallet.js';
import ProfileT1 from './ProfileT1.js'
import ProfileT2 from './ProfileT2.js';
import Search from './Search.js';
import SearchSol from './SearchSol.js';
import SignIn from './SignIn.js';
import AboutUs from './AboutUs.js';
import LogIn from './LogIn.js';
import Search_Tiago from './Search_Tiago.js';


function App() {
  let fuser = {
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

  let user = null;
  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  


  return (
    <Router>
      <div className="App">
        <NavBar user={user} />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/profile1' element={<ProfileT1 />} />
            <Route exact path='/profile2' element={<ProfileT2 />} />
            {/* <Route exact path='/search' element={<Search />} />
            <Route exact path='/searchsol' element={<SearchSol />} /> */}
            <Route exact path='/signin' element={<SignIn />} />
            <Route exact path='/aboutus' element={<AboutUs />} />
            <Route exact path='/login' element={<LogIn />} />
            <Route exact path='/wallet' element={<Wallet fuser={fuser}/>} />

            <Route exact path='/search' element={<Search_Tiago />} />


          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
