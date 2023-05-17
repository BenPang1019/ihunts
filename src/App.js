import { BrowserRouter as Router, useLocation } from "react-router-dom";
import './App.css';
import { useEffect,useState } from "react";
import axios from 'axios'
import {Navbar} from '../src/Components/Navigation/navbar.js'
import Footer from '../src/Components/Footer/Footer.js'
import AniamtedRoutes from "../src/Components/AnimationRoute/AnimationRoutes.js";
import { animateScroll as scroll } from "react-scroll";


function App() {
  return (
    <div className="App" style={{ minHeight: '100vh' }} >
    <Router>
      <Main />
    </Router>
    </div>
  );
}

function Main() {
  const location = useLocation();

  useEffect(() => {
    if (window.devicePixelRatio > 1) {
      document.body.style.zoom = 0.8;
    }
  }, []);

  const [message, setMessage] = useState('');
  
  useEffect(() => {
    const token = window.location.pathname.split('/')[2];
    
    axios.get(`/verify/${token}`)
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const verificationToken = window.location.pathname.split('/')[2];
  return (
    <>
      {!['/login', '/register','/userdashboard',`/login/${verificationToken}`].includes(location.pathname) && <Navbar />}
      <AniamtedRoutes />
      {!['/enquiry', '/login', '/register', '/thankyou','/userdashboard',`/login/${verificationToken}`].includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
