import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Envelope from '../../SVG/envelope.svg';
import Phone from '../../SVG/phone.svg';
import Location from '../../SVG/location.svg';
import Website from '../../SVG/website.svg';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "../Enquiry/Enquiry.css";
import {motion} from "framer-motion"
import Swal from 'sweetalert2'

export const Enquiry = () => {
  const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
  });

  const handleChange = event => {
    setSelected(event.target.value);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const [selected, setSelected] = useState('');
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate();

  const handleRequest = async (e) => {
    e.preventDefault()
    const body = {
      firstName,
      lastName, 
      email, 
      phone,
      selected,
      message
    }
    try {
      const res = await axiosInstance.post("/mail", body);
      console.log(res)
      Swal.fire({
        title:`${res.data}`,
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    } catch (err) {
    }
  }

  const handleAlert = async (e) => {
    if(firstName==0){
      Swal.fire({
        title:'First Name Are Required',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(lastName==0){
      Swal.fire({
        title:'Last Name Are Required',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(email==0){
      Swal.fire({
        title:'E-mail Are Required',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(phone==0){
      Swal.fire({
        title:'Contact Number Are Required',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(selected==0){
      Swal.fire({
        title:'Please Select One Option',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(message==0){
      Swal.fire({
        title:'Message Are Required',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    Swal.fire({
      title:'Submit Successfully',
      customClass: {
        confirmButton: 'alertButton',
      }
    })
  }


  return (
    <motion.div className='enquiry' initial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
      <div className='web'>
          <div className='containerOne'>
              <div className='inline containerLeft'>
                  <h1 className='leftHOne'>Get in touch.</h1>
                  <p className='leftPOne'>We’re here to help and answer any questions you might have. We will answer your inquiries in a maximum of 48 hours.</p>

                  <img src={Envelope} className='icon'/><a href='mailto:info@ihunts.co' target="_blank"><span className='info'>info@ihunts.co</span></a><br/><br/><br/>
                  <img src={Phone} className='icon'/><a href='https://wa.me/60139272628' target="_blank"><span className='info'>+6013 9272628</span></a><br/><br/><br/>
                  <img src={Website} className='icon'/><a href='https://www.ihunts.co/' target="_blank"><span className='info'>www.ihunts.co</span></a><br/><br/><br/>
                  <img src={Location} className='icon'/><a href='https://goo.gl/maps/6iZWP76EGhqvgaEn7' target="_blank"><span className='info'>IEC International Sdn Bhd (1473596-A) OG Business Park 85-1B, Jalan Taman Tan Yew Lai, Off Jalan Puchong, 58200 Kuala Lumpur Malaysia.ST 12345</span></a>
              </div>

              <div className='inline containerRight'>
                  <div className='submitForm' >
                      <div className="row">
                          <div className="col">
                          <label className='formLabel'>First Name</label><br/>
                          <input type="text" className='inputLine' value = {firstName} onChange = {(e) => setFirstName(e.target.value)} name="firstName" required/>
                          </div>
                          <div className="col">
                          <label className='formLabel'>Last Name</label><br/>
                          <input type="text"  className='inputLine' value = {lastName} onChange = {(e) => setLastName(e.target.value)} name="lastName" required/>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col">
                          <label className='formLabel'>Email</label><br/>
                          <input type="text"  className='inputLine' value = {email} onChange = {(e) => setEmail(e.target.value)} name="email" required/>
                          </div>
                          <div className="col">
                          <label className='formLabel'>Contact Number</label><br/>
                          <input type="text"  className='inputLine' value = {phone} onChange = {(e) => setPhone(e.target.value)} name="phone" required/>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col">
                          <label className="formLabel" for="dropdown">How did you find us?</label><br/>
                          <select
                            value={selected} onChange={handleChange}
                            id="dropdown"
                            className="inputLineSelect"
                            type="text"
                            placeholder='choose one'
                            required
                          >
                            <option disabled={true} value="">Choose 1</option>
                            <option value="Linkedin">Linkedin</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Twitter">Twitter</option>
                          </select>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col">
                          <label className='formLabel'>Messages *</label><br/>
                          <textarea  className='textArea'  value = {message} onChange = {(e) => setMessage(e.target.value)} name="message" required/>
                          </div>
                      </div>
                      <button type="submit" className='submitButton' onClick={handleRequest}>Submit</button>
                  </div>
              </div>
          </div>
          
          <div className='lineContainer'><div className='line'></div></div>
          <div className='termsContainer'>
              <Link to='/terms&condition' className='terms' style={{ marginLeft:'10px' }}>Term & Conditions</Link>
              <Link to='/returnpolicy' className='terms'>Refund Policy</Link>
              <Link to='/privacypolicy' className='terms'>Privacy Policy</Link>
          </div>
          <div className='copyRightContainer'>
              <h1 className='inline copyRight'>Copyright © 2022 IEC International Sdn Bhd | All Right Reserved</h1>
              <h1 className='inline copyRightTwo'>Build By WDA Technology</h1>
          </div>
      </div>

      <div className='mobile'>
        <div className='containerOne'>
          <div className=' containerLeft inline'>
              <h1 className='leftHOne'>Get in touch.</h1>
              <p className='leftPOne'>We’re here to help and answer any questions you might have. We will answer your inquiries in a maximum of 48 hours.</p>

              <img src={Envelope} className='icon'/><a href='mailto:info@ihunts.co' target="_blank"><span className='info'>info@ihunts.co</span></a><br/><br/><br/>
              <img src={Phone} className='icon'/><a href='https://wa.me/60139272628' target="_blank"><span className='info'>+6013 9272628</span></a><br/><br/><br/>
              <img src={Website} className='icon'/><a href='https://www.ihunts.co/' target="_blank"><span className='info'>www.ihunts.co</span></a><br/><br/><br/>
              <img src={Location} className='icon'/><a href='https://goo.gl/maps/6iZWP76EGhqvgaEn7' target="_blank"><span className='info'>IEC International Sdn Bhd (1473596-A) OG Business Park 85-1B, Jalan Taman Tan Yew Lai, Off Jalan Puchong, 58200 Kuala Lumpur Malaysia.ST 12345</span></a>
          </div>

          <div className=' containerRight inline'>
              <form className='submitForm' onSubmit={handleRequest}>
                  <div className="row">
                      <div className="col">
                      <label className='formLabel'>First Name</label><br/>
                      <input type="text" className='inputLine' value = {firstName} onChange = {(e) => setFirstName(e.target.value)} name="firstName"/>
                      </div>
                      <div className="col">
                      <label className='formLabel'>Last Name</label><br/>
                      <input type="text"  className='inputLine' value = {lastName} onChange = {(e) => setLastName(e.target.value)} name="lastName"/>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col">
                      <label className='formLabel'>Email</label><br/>
                      <input type="text"  className='inputLine' value = {email} onChange = {(e) => setEmail(e.target.value)} name="email"/>
                      </div>
                      <div className="col">
                      <label className='formLabel'>Contact Number</label><br/>
                      <input type="text"  className='inputLine' value = {phone} onChange = {(e) => setPhone(e.target.value)} name="phone"/>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col">
                      <label className="formLabel" for="dropdown">How did you find us?</label><br/>
                      <select
                        value={selected} onChange={handleChange}
                        id="dropdown"
                        className="inputLineSelect"
                        type="text"
                        placeholder='choose one'
                        required
                      >
                        <option disabled={true} value="">Choose 1</option>
                        <option value="Linkedin">Linkedin</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Twitter">Twitter</option>
                      </select>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col">
                      <label className='formLabel'>Messages *</label><br/>
                      <textarea  className='textArea'  value = {message} onChange = {(e) => setMessage(e.target.value)} name="message"/>
                      </div>
                  </div>
                  <button type="submit" className='submitButton'>Submit</button>
              </form>
          </div>
        </div>
          
        <div className='lineContainer'><div className='line'></div></div>
        <div className='termsContainer'>
            <Link to='/terms&condition' className='terms'>Term & Conditions</Link>
            <Link to='/returnpolicy' className='terms'>Refund Policy</Link>
            <Link to='/privacypolicy' className='terms'>Privacy Policy</Link>
        </div>
        <div className='copyRightContainer'>
            <h1 className=' copyRight'>Copyright © 2022 IEC International Sdn Bhd | All Right Reserved</h1>
            <h1 className=' copyRightTwo'>Build By WDA Technology</h1>
        </div>
      </div>
    </motion.div>
  )
}

export default Enquiry



