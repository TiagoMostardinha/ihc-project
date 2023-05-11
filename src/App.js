import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar.js';
import Home from './Home.js';
import Footer from './Footer.js';
import Wallet from './Wallet.js';
import ProfileT2 from './ProfileT2.js'
import ProfileT1 from './ProfileT1.js';
import SignIn from './SignIn.js';
import AboutUs from './AboutUs.js';
import LogIn from './LogIn.js';


function App() {
  // let user = {
  //   "name": "John",
  //   "user_meds": [
  //     {
  //       "id": 1,
  //       "hour": ""
  //     },
  //     2,
  //     3
  //   ],
  //   "history": [
  //     4
  //   ],
  //   "id": 1
  // }

  let user = null;

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
            <Route exact path='/signin' element={<SignIn />} />
            <Route exact path='/aboutus' element={<AboutUs />} />
            <Route exact path='/login' element={<LogIn />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
