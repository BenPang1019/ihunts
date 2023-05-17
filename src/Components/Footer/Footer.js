import React,{useState} from 'react'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom'
import Instagram from '../../SVG/Instagram.png'
import Facebook from '../../SVG/Facebook.png'
import WhatsApp from '../../SVG/WhatsApp.png'
import Swal from 'sweetalert2'
import axios from 'axios'
 
export default function Footer() {
    const axiosInstance = axios.create({
        baseURL:process.env.REACT_APP_API_URL,
      });

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleRequest = async (e) => {
        e.preventDefault()
        const body = {
          firstName,
          lastName, 
          email, 
          phone,
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

    return (
        <div className='footerN'>
            <div className='web'>
                <div className='containerOneN'>
                <div className='inline'>
                    <h1 className='containerOneNHOne'>Make it memorable! Follow us and check out our latest event.</h1>
                    <a href='https://www.instagram.com/iec_hunts/' target="_blank"><img src={Instagram} className='socialIcon'/></a>
                    <a href='https://www.facebook.com/iechunts' target="_blank"><img src={Facebook} className='socialIcon'/></a>
                    <a href='https://wa.me/60139272628' target="_blank"><img src={WhatsApp} className='socialIcon'/></a>

                    <a href='mailto:info@ihunts.co' target="_blank"><h1 className='containerOneNHTwo'>info@ihunts.co</h1></a>
                    <a href='https://wa.me/60139272628' target="_blank"><h1 className='containerOneNHThree'>+6013 9272628</h1></a>

                    <a href='https://goo.gl/maps/6iZWP76EGhqvgaEn7' target="_blank"><p className='containerOneNPOne'>IEC International Sdn Bhd (1473596-A) <br/> OG Business Park 85-1B, <br/> Jalan Taman Tan Yew Lai, <br/> Off Jalan Puchong, <br/> 58200 Kuala Lumpur Malaysia.</p></a>
                </div>

                <div className='inline' style={{ verticalAlign:'top',marginLeft:'15rem' }}>
                    <h1 className='containerOneNHOne'>Get in touch with us! Leave your contact information below.</h1>
                    <p className='containerOneNPOne'>Fill up the form now, we promise not to spam you and will provide important information to improve your account.</p>
                    
                    <form className='submitForm' onSubmit={handleRequest}>
                        <div className="row">
                            <div className="col">
                            <label >First Name *</label><br/>
                            <input type="text" className='inputLine' value = {firstName} onChange = {(e) => setFirstName(e.target.value)} name="firstName" required/>
                            </div>
                            <div className="col">
                            <label >Last Name *</label><br/>
                            <input type="text"  className='inputLine' value = {lastName} onChange = {(e) => setLastName(e.target.value)} name="lastName" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label >Email *</label><br/>
                            <input type="text"  className='inputLine' value = {email} onChange = {(e) => setEmail(e.target.value)} name="email" required/>
                            </div>
                            <div className="col">
                            <label >Phone Number *</label><br/>
                            <input type="text"  className='inputLine' value = {phone} onChange = {(e) => setPhone(e.target.value)} name="phone" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label >Messages *</label><br/>
                            <textarea type="text"  className='textArea' value = {message} onChange = {(e) => setMessage(e.target.value)} name="message" required/>
                            </div>
                        </div>
                        <button type="submit" className='submitButton'>Submit</button>
                    </form>
                </div>

                <div className='lineContainer'><div className='line'></div></div>
                <div className='termsContainer'>
                <Link to='/terms&condition' className='terms' style={{ marginLeft:'10px' }}>Term & Conditions</Link>
                <Link to='/returnpolicy' className='terms'>Refund Policy</Link>
                <Link to='/privacypolicy' className='terms'>Privacy Policy</Link>
                </div>
                <div className='copyRightContainer'>
                <h1 className='inline copyRight'>Copyright © 2022 IEC International Sdn Bhd | All Right Reserved</h1>
                <a href='https://wdatechnology.com/'  target='_blank'><h1 className='inline copyRightTwo'>Build By WDA Technology</h1></a>
                </div>
                </div>
            </div>

            <div className='mobile'>
                <div className='containerOneN'>
                <div className='inline left'>
                    <h1 className='containerOneNHOne'>Make it memorable! Follow us and check out our latest event.</h1>
                    <a href='https://www.instagram.com/iec_hunts/' target="_blank"><img src={Instagram} className='socialIcon'/></a>
                    <a href='https://www.facebook.com/iechunts' target="_blank"><img src={Facebook} className='socialIcon'/></a>
                    <a href='https://wa.me/60139272628' target="_blank"><img src={WhatsApp} className='socialIcon'/></a>

                    <a href='mailto:info@ihunts.co' target="_blank"><h1 className='containerOneNHTwo'>info@ihunts.co</h1></a>
                    <a href='https://wa.me/60139272628' target="_blank"><h1 className='containerOneNHThree'>+6013 9272628</h1></a>

                    <a href='https://goo.gl/maps/6iZWP76EGhqvgaEn7' target="_blank"><p className='containerOneNPOne'>IEC International Sdn Bhd (1473596-A) <br/> OG Business Park 85-1B, <br/> Jalan Taman Tan Yew Lai, <br/> Off Jalan Puchong, <br/> 58200 Kuala Lumpur Malaysia.</p></a>
                </div>

                <div className='inline right'>
                    <h1 className='containerOneNHOne'>Get in touch with us! Leave your contact information below.</h1>
                    <p className='containerOneNPOne'>Fill up the form now, we promise not to spam you and will provide important information to improve your account.</p>
                    
                    <form className='submitForm'>
                        <div className="row">
                            <div className="col">
                            <label className='formLabel'>First Name *</label><br/>
                            <input type="text" className='inputLine' />
                            </div>
                            <div className="col">
                            <label className='formLabel'>Last Name *</label><br/>
                            <input type="text"  className='inputLine'/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label className='formLabel'>Email *</label><br/>
                            <input type="text"  className='inputLine'/>
                            </div>
                            <div className="col">
                            <label className='formLabel'>Phone Number *</label><br/>
                            <input type="text"  className='inputLine'/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label className='formLabel'>Messages *</label><br/>
                            <textarea type="text"  className='textArea'/>
                            </div>
                        </div>
                        <button type="submit" className='submitButton'>Submit</button>
                    </form>
                </div>

                <div className='lineContainer'><div className='line'></div></div>
                <div className='termsContainer'>
                <Link to='/terms&condition' className='terms'>Term & Conditions</Link>
                <Link to='/returnpolicy' className='terms'>Refund Policy</Link>
                <Link to='/privacypolicy' className='terms'>Privacy Policy</Link>
                </div>
                <div className='copyRightContainer'>
                <h1 className='inline copyRight'>Copyright © 2022 IEC International Sdn Bhd | All Right Reserved</h1>
                <a href='https://wdatechnology.com/' target='_blank'><h1 className='inline copyRightTwo'>Build By WDA Technology</h1></a>
                </div>
                </div>
            </div>
        </div>
    )
}
