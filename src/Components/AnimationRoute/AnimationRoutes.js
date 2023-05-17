import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import '../../App.css';
import {About} from '../../Pages/About/About';
import {Enquiry} from "../../Pages/Enquiry/Enquiry";
import { Home}  from "../../Pages/Home/Home";
import  {Login}  from "../../Pages/Login/Login";
import {News} from '../../Pages/NewsPromotion/News';
import  {Register}  from "../../Pages/Register/Register";
import {TheHunts} from '../../Pages/TheHunts/TheHunts';

import { TermsCondition } from "../../Pages/TermsCondition/TermsCondition";
import { ReturnPolicy } from "../../Pages/ReturnPolicy/ReturnPolicy";
import { PrivacyPolicy } from "../../Pages/PrivacyPolicy/PrivacyPolicy";
import { TicketPage } from "../../Pages/TicketPage/TicketPage";
import { ThankYouPage } from "../../Pages/Thankyou/ThankYouPage";

import { NewsDetails } from "../../Pages/NewsDetails/NewsDetails";
import { EventDetails } from "../../Pages/EventDetails/EventDetails";
import { UserDashboard } from "../../Pages/UserDashboard/UserDashboard";

function AniamtedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/"  element={<Home />} />
        <Route path="/thehunts" element={<TheHunts />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/:verificationToken"  element={<Login />} />
        <Route path="/register"  element={<Register />} />
        <Route path="/about" element={<About />} />


        <Route path="/terms&condition" element={<TermsCondition />} />
        <Route path="/returnpolicy" element={<ReturnPolicy />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/newsDetails" element={<NewsDetails />} />
        <Route path="/eventDetails" element={<EventDetails />} />

        <Route path="/userDashboard" element={<UserDashboard />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AniamtedRoutes