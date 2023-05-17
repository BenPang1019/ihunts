import React from 'react'
import {motion} from 'framer-motion'
import "../ReturnPolicy/ReturnPolicy.css";

export const ReturnPolicy = () => {
  return (
    <motion.div className='rp' initial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
      <div className='web'>
        <div className='containerOne'>
          <h1 className='HOne'>Refund Policy</h1>
          <p> 
          1.1 Once the booking is confirmed; refunds, cancellations or reschedules are not accepted. 
          </p>
          <p>
          1.2 IEC International Sdn Bhd does not have a refund policy for personal reasons such as giving up halfway or dropping the events. Refunds will only be applicable when the events and/or games are cancelled.
          </p>
        </div>
      </div>

      <div className='mobile'>

      </div>
    </motion.div>
  )
}
