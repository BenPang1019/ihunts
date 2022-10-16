import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import {About} from './Pages/About/About';
import {Enquiry} from "./Pages/Enquiry/Enquiry";
import { Home}  from "./Pages/Home/Home";
import  {Login}  from "./Pages/Login/Login";
import {News} from './Pages/NewsPromotion/News';
import  {Register}  from "./Pages/Register/Register";
import {TheHunts} from './Pages/TheHunts/TheHunts';
import { UserDashboard } from "./Pages/UserDashboard/UserDashboard";
import { TermsCondition } from "./Pages/TermsCondition/TermsCondition";
import { ReturnPolicy } from "./Pages/ReturnPolicy/ReturnPolicy";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy/PrivacyPolicy";
import { TicketPage } from "./Pages/TicketPage/TicketPage";
import { ThankYouPage } from "./Pages/Thankyou/ThankYouPage";



function App() {

  return (
    <Router >
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route path="/thehunts" element={<TheHunts />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register"  element={<Register />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/userdashboard" element={<UserDashboard />} /> */}
        <Route path="/terms&condition" element={<TermsCondition />} />
        <Route path="/returnpolicy" element={<ReturnPolicy />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
