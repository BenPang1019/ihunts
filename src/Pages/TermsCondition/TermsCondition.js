import React from 'react'
import {motion} from 'framer-motion'
import "../TermsCondition/TermsCondition.css";

export const TermsCondition = () => {
  return (
    <motion.div className='tnc' initial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
      <div className='web'>
        <div className='containerOne'>
          <h1 className='HOne'>Terms and Conditions</h1>
          <p>
          Please read the terms and conditions (“Terms and Conditions”) set out below carefully before booking events listed on our website. (www.ihunts.co). By purchasing a ticket from our platform, you (“customer”) agree that you have read and understood the Terms and Conditions and that you have accepted and agreed to be bound by them. Their agents or employees shall not be liable for any personal injury, loss, damage or death caused or occurring while in the venue, location or place related.
          We reserve the right to modify or update our Terms and Conditions at any time without prior notice. Updated versions of the Terms and Conditions will appear on this Platform and are effective immediately. You are responsible for reviewing the Terms and Conditions regularly. If you do not agree to be bound by these Terms and Conditions, please refrain from using our services.
          </p>
          <h4>Regulations</h4>
          <p>
          1.1 All ages are welcome to take part, however players aged 18 years and under were strongly advised to be accompanied by at least one adult, aged 18 or over, to remain on the premises for the full duration of the events. Different events might have different restrictions, kindly revise selected event’s terms and conditions before proceeding to payment.
          </p>
          <p>
          1.2 IEC International Sdn Bhd expects their participants not to disclose any details of the event directly or indirectly to the public.
          </p>
          <h5>Account</h5>
          <p><u>Registration of Account</u></p>
          <p>
          2.1 By registering an account on our Platform, you represent and warrant that:
          a) all the information provided to us are accurate, correct and complete; and
          b) you are eighteen (18) years old and above; and
          c) the credit or debit card details that you provide for the payment of any orders are your own credit or debit card(s), or you are duly authorised to use the credit or debit card and there is sufficient fund and/or credit limit for the payment.
          </p>
          <p>
          2.2 In the event the information given to us shall differ at any time after registration of your account, you shall immediately inform us of the changes and/or update the details in your account.
          </p>
          <p>
          2.3 You shall at all times be responsible to keep your details including password safe and secure. You shall not share any of your personal information to a third party.
          </p>
          <p>
          2.4 Only one (1) account may be registered for one (1) email address and one (1) phone number at a time. Additional accounts may be allowed at our discretion. Furthermore, the number of devices you may use to log into your account may also be subject to limitations.
          Suspension / Termination of Account.
          </p>
          <p><u>Suspension / Termination of Account</u></p>
          <p>
          2.5 We have the absolute discretion and right to refuse registration of any account and to terminate the registration of any account without assigning any reason whatsoever.
          </p>
          <p>
          2.6 We consider the following actions as wrongful use of an account on our Platform, including but not limited to:
          a) Usage of account for any illegal activities under the laws of Malaysia; and/or
          b) Usage of multiple accounts for purchases related to any promotions on the Platform; and/or;
          c) Creation of account on behalf of another person or entity without their authorization.
          </p>
          <p>
          2.7 In the event that: (i) we detect multiple accounts are being linked to one (1) phone number without our approval; (ii) wrongful use of accounts as detailed in Clause 2.6; (iii) payment methods that we deem suspicious; (iv) multiple instances of payment failure; or (v) any of the information given is incomplete, invalid, false or wrongful, (vi) any breach of the Terms and Conditions herein contained, then in any of the cases mentioned above, without prejudice to any other rights and remedies available to us under law, we shall reserve the right to:
          a) Cancel any of your current or future events ticket;
          b) Immediately terminate your access to our Platform without further reference to you;
          c) Suspend your account and/or payment accounts indefinitely; and
          d) Immediately cease all further communication with you.
          </p>
          <h4>Events Booking</h4>
          <p>
          3.1 Events tickets may not be transferred or resold for commercial purposes or at a premium. If a game and/or event is transferred or resold in breach of this condition, the bearer of the ticket or the person claiming the right to attend the games and/or events will be refused admission to the games and/or events.
          </p>
          <p>
          3.2 It is your responsibility to check that all event details issued to you are accurate and to contact directly if there are details you wish to change.
          </p>
          <p>
          3.3 The games and/or events are designed for a minimum and maximum number of players, depending on the games and/or events chosen. This information can be found in the details of each game and/or event.  
          </p>
          <p>
          3.4 In the games and/or events that less people attend the game than it was originally booked for, the price difference will not be reimbursed.  
          </p>
          <p>
          3.5 In the games and/or events that more people attend the game than it was originally booked for, the price difference can be settled upon arrival.   
          </p>
          <p>
          3.6 Full payment is required at the time of booking. 
          </p>
          <p>
          3.7 All purchases are transacted in Ringgit Malaysia (RM) and applicable taxes are included when indicated.
          </p>
          <p>
          3.8 You will receive a confirmation of your booking via email only
          </p>
          <h4>
          Personal Data
          </h4>
          <p>
          4.1 When we have requested information (such as your name, telephone number, address, email address and other information as required) from you for the registration of your account, you agree that the information provided is accurate and complete.
          </p>
          <p>
          4.2 You agree and authorise us to collect, use, store or otherwise process your personal information for the purpose stated herein, verifying your credit or debit card, investigate complaints and suspected suspicious transactions, and/or improve service usage and for marketing and credit control purposes (the “Purpose”). The Purpose may include the disclosure of your personal information to receive offers and promotions from us or selected third parties or our affiliates from time to time where we believe that the services offered by us or such third parties may be of interest to you or where this is required by law or in order to provide the delivery of goods or Service to you. More information can be found in our Privacy Policy.
          </p>
          <p>
          4.3 You agree to keep your password confidential and use only your User ID and password when logging in, ensure that you log out from your account at the end of each session on the Site, immediately notify us of any unauthorised use of your Account, User ID and/or password, and ensure that your Account information is accurate and up-to-date. You are fully responsible for all activities that occur under your User ID and Account even if such activities or uses were not done by you. We will not be liable for any loss or damage arising from unauthorised use of your password or your failure to comply with this Section.
          </p>
          <h4>
          Limitation of Liability
          </h4>
          <p><u>Disclaimer of Certain Damages</u></p>
          <p>
          5.1 Participants must not carry or bring any dangerous, harmful or hazardous object on/into the site including, but not limited to, sharp objects, explosive items, weapons or items deemed to be dangerous or harmful to other visitors in the sites. In the event that such an item or object is found, IEC International Sdn Bhd, their employee or staff shall have the power, authority and consent expressly granted by you to decline or refuse your entry to the site or event.
          </p>
          <p>
          5.2 Participants must behave, conduct, perform, carry out, execute, achieve and complete the event in accordance with the instruction, command and rules specified by IEC International Sdn Bhd, failing which the company, their employees, or staff shall have the right and power to decline or refuse your entry to the site.
          </p>
          <p>
          5.3 All items including, but not limited to, the personal belongings, luggage, baggage, watches, telephones, wallets, items and/or property, shall be kept at the own risk. In any event, the company, their employees, or staff shall not be held liable or responsible for any loss of your personal belongings within the site or outside of the site. The risk of loss for your personal belongings shall be borne by you upon entrance on the site.
          </p>
          <p>
          5.4 IEC International Sdn Bhd, the employees or staff shall not be responsible for any risk, hazard, danger, security, threat, safety and/or protection for the games and/or events. You shall be solely responsible, answerable and accountable for your personal safety, security, body condition, disease transmission, pregnancy or health condition, while you participate, join, enter, use, play and/or access the site/games. The company hereby expressly warn, caution, advise, inform and/or notify that the game may be dangerous, hazardous, risky, and unsafe, insecure to you and you shall be duly informed, notified and understand the underlying danger, risk or hazard of the game and shall further confirmed, ensure and guard against your body condition and personal safety for the game.
          </p>
          <h4>Complaints</h4>
          <p>
          6.1 We take all complaints very seriously and aim at responding to your complaints as soon as possible. All complaints should be addressed to customercare @ihunts.co or you may call 013-9272628.
          </p>
        </div>
      </div>

        <div className='mobile'>

        </div>
      </motion.div>
  )
}
