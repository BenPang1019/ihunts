import React from 'react'
import Footer from '../../Components/Footer/Footer.js'
import Navbar from '../../Components/Navigation/navbar.js'
import "../ReturnPolicy/ReturnPolicy.css";

export const ReturnPolicy = () => {
  return (
    <div className='rp'>
    <Navbar />
    <div style={{ paddingLeft:'1rem',paddingRight:'1rem',paddingBottom:'1rem' }}>
      <h1 style={{ textAlign:'center',color:'yellow',paddingTop:'1rem' }}>Refund Policy</h1>
      <p> 
      1.1 Once the booking is confirmed; refunds, cancellations or reschedules are not accepted. 
      </p>
      <p>
      1.2 IEC International Sdn Bhd does not have a refund policy for personal reasons such as giving up halfway or dropping the events. Refunds will only be applicable when the events and/or games are cancelled.
      </p>
      </div>
      <Footer />
    </div>
  )
}
