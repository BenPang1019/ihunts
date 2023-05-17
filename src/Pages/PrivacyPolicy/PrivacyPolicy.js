import React from 'react'
import {motion} from 'framer-motion'
import "../PrivacyPolicy/PrivacyPolicy.css";

export const PrivacyPolicy = () => {
  return (
    <motion.div className='privacy' initial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
      <div className='web'>
        <div className='containerOne'>
          <h1 className='HOne'>Privacy Policy</h1>
          <p>
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make booking with IEC International Sdn Bhd:
          </p>
          <h4>What Personal Information We Collect</h4>
          <p>
          When you visit the Platform, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
          </p>
          <p>
          Additionally, as you browse the Platform, we collect information about the individual web pages or events that you view, what websites or search terms referred you to the Platform, and information about how you interact with the Platform. We refer to this automatically collected information as Device Information.
          </p>
          <p>
          Also, when you make a booking or attempt to make a booking through the Platform, we collect certain information from you, including your name, address, telephone number, email address. This is called Order Information.
          </p>
          <p>
          By Personal Information in this Privacy Policy, we are talking both about Device Information and Order Information.
          </p>
          <h4>How Do We Use Your Personal Information</h4>
          <p>
          We use the Order Information that we collect generally to fulfil any orders placed through the Site (including processing your payment information).
          </p>
          <p>
          Additionally, we use this Order Information to: – Communicate with you. – Screen our orders for potential risk or fraud. – When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
          </p>
          <p>
          We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimise our Site.
          </p>
          <h4>Sharing Your Personal Information</h4>
          <p>
          We would not be sharing your Personal Information with any third parties unless it is to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful requests for information we receive, or to otherwise protect our rights.
          </p>
          <h4>Behavioural Advertising</h4>
          <p>
          We use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.
          </p>
          <h4>Data Retention</h4>
          <p>
          When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
          </p>
          <h4>Changes</h4>
          <p>
          We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
          </p>
          <h4>Contact Details</h4>
          <p>
          Any queries, comment, concerns or complaints in relation to this Privacy Policy, kindly contact us during office hours (Between 9:00am-5:00pm from Monday to Friday) contact detail:
          Email: info@ihunts.co
          H/P: 013-9272628
          </p>
        </div>
      </div>

      <div className='mobile'>

      </div>
    </motion.div>
  )
}
