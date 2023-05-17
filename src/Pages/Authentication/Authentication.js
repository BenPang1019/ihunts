import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import UserIcon from '../../SVG/user account icon.svg';
import { useForm } from "react-hook-form";
import "../Authentication/Authentication.css";
 
export const Authentication = () => {
  // const axiosInstance = axios.create({
  //   baseURL:process.env.REACT_APP_API_URL,
  // });

  return (
    <div className="Authentication">
    
      <div class="webAuthen formdiv" style={{backgroundColor: '#2a2a2a', paddingBottom: '6.5rem' }}>
        <div
          class="content-2-3 "
        >
          <div class="text-center mb-4">
            <img
              className="user-icon h-auto"
              style={{ width: '8.2rem',marginTop:'2rem' }}
              src={UserIcon}
              alt="island"
            />
          </div>
          <form class="form-Authentication mx-auto">
            <div class="form-group mx-auto">
              <div class="text-center">
                <div className="text-Protect-info"style={{ color: '#ffffff'}}>Protect your account in just few minutes by</div>
                <div className="text-Protect-info"style={{ color: '#ffffff'}}>reviewing your security settings and activity.</div>
                <br/>
                <div className="text-remain-info"style={{ color: '#ffcc4d', fontSize:'13px'}}>Please check your e-mail to confirm the verification code.<br/></div>
              </div>
              <div className="text-Verification"style={{ color: '#ffffff', fontSize:'15px'}}><br/>Verification Code<br/></div>
                    
                <div class="userinput">    
                    <input
                        className="Resetinput"
                        type="text" 
                        maxLength={"1"}/> 
                    <input 
                        className="Resetinput"
                        type="text" 
                        maxLength={"1"}/>
                    <input 
                        className="Resetinput"
                        type="text" 
                        maxLength={"1"}/>
                    <input 
                        className="Resetinput"
                        type="text" 
                        maxLength={"1"}/>
                </div>
              </div> 
            {/* </div> */}

            <div class="form-group mx-auto">
               <div className="text-remain-info"style={{ color: '#ffcc4d', fontSize:'13px'}}>Send Verification Code again</div>
            </div>
            
            
            <div class="text-center mb-5">
              <a
                href='/resetpassword/:authentication/:newpassword'
                class="submit-btn btn mb-0 btn-join border-0"
                style={{width:'24rem'}}
              >
                Submit
              </a>
            </div>
            <div class="text-center mb-5">
              <div className="text-forgot-info"> — &nbsp;&nbsp;&nbsp;&nbsp;Or&nbsp;&nbsp;&nbsp;&nbsp; — </div>
            </div>
            <div class="text-center">
              <div className="text-forgot-info">Don't have an account?</div>
              <Link className="text-forgot-info" style={{ color: '#ffcc4d', textDecoration: 'underline' }} to='/register'>Create Account</Link>
            </div>
          </form>
        </div>
      </div>

      <div class="mobileAuthen formdiv authenticationContainer" style={{ paddingBottom: '6.5rem' }}>
        <div
          class="content-2-3 "
        >
          <div class="text-center mb-4 ">
            <img
              className="user-icon h-auto"
              style={{ width: '8.2rem',marginTop:'2rem' }}
              src={UserIcon}
              alt="island"
            />
          </div>
          <form class="form-Authentication mx-auto">
            <div class="form-group mx-auto">
              <div class="text-center">
                <div className="text-Protect-info"style={{ color: '#ffffff'}}>Protect your account in just few minutes by</div>
                <div className="text-Protect-info"style={{ color: '#ffffff'}}>reviewing your security settings and activity.</div>
                <br/>
                <div className="text-remain-info"style={{ color: '#ffcc4d', fontSize:'13px'}}>Please check your e-mail to confirm the verification code.<br/></div>
              </div>
              <div className="text-Verification"style={{ color: '#ffffff', fontSize:'15px'}}><br/>Verification Code<br/></div>
                    
                <div class="userinput">    
                    <input
                        className="Resetinput"
                        type="text" 
                        maxLength={"1"}/> 
                    <input 
                        className="Resetinput"
                        type="text" 
                        maxLength={"1"}/>
                    <input 
                        className="Resetinput"
                        type="text" 
                        maxLength={"1"}/>
                    <input 
                        className="Resetinput"
                        type="text" 
                        maxLength={"1"}/>
                </div>
              </div> 
            <div class="form-group mx-auto">
               <div className="text-remain-info"style={{ color: '#ffcc4d', fontSize:'13px'}}>Send Verification Code again</div>
            </div>  
            
            <div class="text-center mb-5">
              <a
                href='/resetpassword/:authentication/:newpassword'
                class="submit-btn btn mb-0 btn-join border-0"
                style={{width:'15rem'}}
              >
                Submit
              </a>
            </div>
            <div class="text-center mb-5">
              <div className="text-forgot-info"> — &nbsp;&nbsp;&nbsp;&nbsp;Or&nbsp;&nbsp;&nbsp;&nbsp; — </div>
            </div>
            <div class="text-center">
              <div className="text-forgot-info">Don't have an account?</div>
              <Link className="text-forgot-info" style={{ color: '#ffcc4d', textDecoration: 'underline' }} to='/register'>Create Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
