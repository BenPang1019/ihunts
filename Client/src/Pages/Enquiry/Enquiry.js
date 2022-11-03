import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer.js';
import Envelope from '../../SVG/envelope.svg';
import Phone from '../../SVG/phone.svg';
import Location from '../../SVG/location.svg';
import Website from '../../SVG/website.svg';
import Navbar from '../../Components/Navigation/navbar'


import "../Enquiry/Enquiry.css";

export const Enquiry = () => {
  const [selected, setSelected] = useState('');

  const handleChange = event => {
    console.log(event.target.selectedOptions[0].label);
    console.log(event.target.value);

    setSelected(event.target.value);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className='enquiry-page'>
      <Navbar />
        <div className="webEnquiry container-xxl " >
          <div className="  list-footer">
            <div className="row gap-md-0 gap-3">
              <div className="col-lg-6 col-md-6">
                <div className="">
                  <div className="list-space">
                    <p className="footer-memorable">
                      Get In Touch
                    </p>
                    <p className='footer-text-title'>
                      We’re here to help and answer any questions you might have. We will answer your inquiries in a maximum of 48 hours.
                    </p>
                  </div>
                  <nav className="list-unstyled rrcontainer">
                    <li className="list-group">
                      <Link class="navbar-brand" to='/'>
                        <img src={Envelope} alt='email' style={{ width: '5%', display: 'inline-block', marginRight: '1rem' }} /><span className='menu-caption'>info@ihunts.co</span>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link class="navbar-brand" to='/'>
                        <img src={Phone} alt='phone' style={{ width: '5%', display: 'inline-block', marginRight: '1rem' }} /><span className='menu-caption'>+6013 9272628</span>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link class="navbar-brand" to='/'>
                        <img src={Website} alt='website' style={{ width: '5%', display: 'inline-block', marginRight: '1rem' }} /><span className='menu-caption'>www.ihunts.co</span>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link class="navbar-brand" to='/'>
                        <img src={Location} alt='location' style={{ width: '5%', display: 'inline-block', marginRight: '1rem' }} />
                        <span className='menu-caption'>
                        EC International Sdn Bhd (1473596-A)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OG Business Park 85-1B,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jalan Taman Tan Yew Lai,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Off Jalan Puchong,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;58200 Kuala Lumpur Malaysia.ST 12345
                        </span>
                      </Link>
                    </li>
                  </nav>
                </div>
              </div>            

              <div className="col-lg-6 col-md-6">
                <form className="contact-form row">
                  <div className="form-field col-lg-6">
                    <label className="label" for="name">First Name</label>
                    <input
                      id="name"
                      className="input-text js-input"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-field col-lg-6">
                    <label className="label" for="email">Last Name</label>
                    <input
                      id="email"
                      className="input-text js-input"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-field col-lg-6">
                    <label className="label" for="company">Email</label>
                    <input
                      id="company"
                      className="input-text js-input"
                      type="email"
                      required
                    />
                  </div>
                  <div className="form-field col-lg-6">
                    <label className="label" for="phone">Contact Number</label>
                    <input
                      id="phone"
                      className="input-text js-input"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-field col-lg-12">
                    <label className="label" for="dropdown">How did you find us?</label>
                    <select
                      value={selected} onChange={handleChange}
                      id="dropdown"
                      className="input-text js-input"
                      type="text"
                      placeholder='choose one'
                      required
                    >
                      <option disabled={true} value="">Choose 1</option>
                      <option value="linkedin">Linkedin</option>
                      <option value="ig">Instagram</option>
                      <option value="fb">Facebook</option>
                      <option value="tw">Twitter</option>
                    </select>
                  </div>
                  <div className="form-field col-lg-12">
                    <label className="label" for="message">Message</label>
                    <textarea
                      id="message"
                      className="form-control js-input"
                      type="text"
                      required
                    ></textarea>
                  </div>
                  <div className="form-field col-lg-12">
                    <button
                      className="submit-btn btn d-inline-flex mb-md-0 btn-join border-0"
                      type="submit"
                      value="Submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        
          <div className="web border-color info-footer">
                    <div className="">
                        <hr className="hr" />
                    </div>
                    <div style={{textAlign:'center' }}>
                    <Link 
                    to='/terms&condition' 
                    style={{ color:'white' }}
                    onClick={scrollToTop}
                    >
                    Term&Conditions
                    </Link>
                    {' '}
                    <Link 
                    to='/returnpolicy' 
                    style={{ color:'white',paddingLeft:'23rem' }}
                    onClick={scrollToTop}
                    >
                    RefundPolicy
                    </Link>
                    {' '}
                    <Link 
                    to='/privacypolicy' 
                    style={{ color:'white',paddingLeft:'25rem' }}
                    onClick={scrollToTop}
                    >
                    PrivacyPolicy
                    </Link>
                    </div>
                    <div
                        className="mx-auto d-flex flex-column flex-lg-row align-items-center footer-info-space gap-4"
                        style={{ marginTop:'-2rem',width:'120rem' }}
                    >
                        <nav
                            className="d-flex flex-lg-row flex-column align-items-center justify-content-center"
                        >
                            <p>
                                Copyright © 2022 IEC International Sdn Bhd | All Right Reserved
                            </p>
                            <p style={{ marginLeft:'35rem' }}>
                                Build By WDA Technology
                            </p>
                        </nav>
                    </div>
                </div>
            </div>
                

            <div className="mobileEnquiry container-xxl  " >
          <div className="enquiryContainer  list-footer">
            <div className="row gap-lg-0 gap-3">
              <div className="col-lg-6 col-lg-6">
                <div className="">
                  <div className="list-space">
                    <p className="footer-memorable">
                      Get In Touch
                    </p>
                    <p className='footer-text-title'>
                      We’re here to help and answer any questions you might have. We will answer your inquiries in a maximum of 48 hours.
                    </p>
                  </div>
                  <nav className="list-unstyled rrcontainer">
                    <li className="list-group">
                      <Link class="navbar-brand" to='/'>
                        <img src={Envelope} alt='email' style={{ width: '5%', display: 'inline-block', marginRight: '1rem' }} /><span className='menu-caption'>info@ihunts.co</span>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link class="navbar-brand" to='/'>
                        <img src={Phone} alt='phone' style={{ width: '5%', display: 'inline-block', marginRight: '1rem' }} /><span className='menu-caption'>+6013 9272628</span>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link class="navbar-brand" to='/'>
                        <img src={Website} alt='website' style={{ width: '5%', display: 'inline-block', marginRight: '1rem' }} /><span className='menu-caption'>www.ihunts.co</span>
                      </Link>
                    </li>
                    <li className="list-group">
                      <Link class="navbar-brand" to='/'>
                        <img src={Location} alt='location' style={{ width: '5%', display: 'inline-block', marginRight: '1rem' }} />
                        <span className='menu-caption'>
                        EC International Sdn Bhd (1473596-A)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OG Business Park 85-1B,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jalan Taman Tan Yew Lai,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Off Jalan Puchong,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;58200 Kuala Lumpur Malaysia.ST 12345
                        </span>
                      </Link>
                    </li>
                  </nav>
                </div>
              </div>            

              <div className="col-lg-6 col-lg-6">
                <form className="contact-form row">
                  <div className="form-field col-lg-6">
                    <label className="label" for="name">First Name</label>
                    <input
                      id="name"
                      className="input-text js-input"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-field col-lg-6">
                    <label className="label" for="email">Last Name</label>
                    <input
                      id="email"
                      className="input-text js-input"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-field col-lg-6">
                    <label className="label" for="company">Email</label>
                    <input
                      id="company"
                      className="input-text js-input"
                      type="email"
                      required
                    />
                  </div>
                  <div className="form-field col-lg-6">
                    <label className="label" for="phone">Contact Number</label>
                    <input
                      id="phone"
                      className="input-text js-input"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-field col-lg-12">
                    <label className="label" for="dropdown">How did you find us?</label>
                    <select
                      value={selected} onChange={handleChange}
                      id="dropdown"
                      className="input-text js-input"
                      type="text"
                      placeholder='choose one'
                      required
                    >
                      <option disabled={true} value="">Choose 1</option>
                      <option value="linkedin">Linkedin</option>
                      <option value="ig">Instagram</option>
                      <option value="fb">Facebook</option>
                      <option value="tw">Twitter</option>
                    </select>
                  </div>
                  <div className="form-field col-lg-12">
                    <label className="label" for="message">Message</label>
                    <textarea
                      id="message"
                      className="form-control js-input"
                      type="text"
                      required
                    ></textarea>
                  </div>
                  <div className="form-field col-lg-12">
                    <button
                      className="submit-btn btn d-inline-flex mb-lg-0 btn-join border-0"
                      type="submit"
                      value="Submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

                <div className="mobileEnquiry border-color info-footer enquiryContainer">
                    <div className="">
                        <hr className="hr" />
                    </div>
                    <div style={{textAlign:'center' }}>
                    <Link 
                    to='/terms&condition' 
                    className='terms'
                    style={{ color:'white' }}
                    onClick={scrollToTop}
                    >
                    Term&Conditions
                    </Link>
                    <br/>
                    <Link 
                    to='/returnpolicy' 
                    className='returns'
                    style={{ color:'white' }}
                    onClick={scrollToTop}
                    >
                    ReturnPolicy
                    </Link>
                    <br/>
                    <Link 
                    to='/privacypolicy' 
                    className='privacy'
                    style={{ color:'white' }}
                    onClick={scrollToTop}
                    >
                    PrivacyPolicy
                    </Link>
                    </div>
                    <div
                        className="mx-auto d-flex flex-column flex-lg-row align-items-center footer-info-space gap-4"
                    >
                        <nav
                            className="d-flex flex-lg-row flex-column align-items-center justify-content-center"
                        >
                            <p>
                                Copyright © 2022 IEC International Sdn Bhd | All Right Reserved <br/><br/>
                                Build By WDA Technology
                            </p>
                        </nav>
                    </div>
                </div>
      </div>
    </div>
  )
}

export default Enquiry
