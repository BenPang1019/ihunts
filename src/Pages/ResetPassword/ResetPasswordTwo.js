import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import UserIcon from '../../SVG/user account icon.svg';
import "../ResetPassword/ResetPassword.css";
 
export const ResetPasswordTwo = () => {
  // const axiosInstance = axios.create({
  //   baseURL:process.env.REACT_APP_API_URL,
  // });


  return (
    <div className="ResetPassword">
    
      <div class="webResetTwo formdiv" style={{ boxSizing: 'border-box', backgroundColor: '#2a2a2a', paddingBottom: '6.5rem' }}>
        <div
          class="content-2-3  mx-auto p-0 position-relative"
          style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div class="text-center mb-4">
            <img
              className="user-icon h-auto"
              style={{ width: '8.2rem' }}
              src={UserIcon}
              alt="island"
            />
            <div className="text-forgot-info">jimmy@hunt.com.mu</div>
          </div>

          <form class="form-ResetPassword mx-auto">
            <div class="form-group mx-auto mb-5">
                <label for="exampleInputpassword" class="label">Password</label>
                <input 
                  type="password" 
                  class="form-control" 
                  name="password"
                  aria-describedby="resetPassword" 
                  placeholder="Create your New Password here" />
              </div>

              <div class="form-group mx-auto mb-5">
                <label for="exampleInputpassword" class="label">Confirm Password</label>
                <input 
                  type="password" 
                  class="form-control" 
                  name="confirm password"
                  aria-describedby="resetPassword" 
                  placeholder="Re-enter your New Password here" />
              </div>
              
              <div class="text-center mb-5">
                <button
                  class="submit-btn btn mb-0 btn-join border-0"
                  style={{width:'24rem'}}
                >
                  Submit
                </button>
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

      <div class="mobileResetTwo formdiv" style={{ boxSizing: 'border-box', backgroundColor: '#2a2a2a', paddingBottom: '6.5rem' }}>
        <div
          class="content-2-3  resetTwoContainer"
          style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div class="text-center mb-4">
            <img
              className="user-icon h-auto"
              style={{ width: '8.2rem' }}
              src={UserIcon}
              alt="island"
            />
            <div className="text-forgot-info">jimmy@hunt.com.mu</div>
          </div>

          <form class="form-ResetPassword mx-auto">
            <div class="form-group mx-auto mb-5">
                <label for="exampleInputpassword" class="label">Password</label>
                <input 
                  type="password" 
                  class="form-control" 
                  name="password"
                  aria-describedby="resetPassword" 
                  placeholder="Create your New Password here" />
              </div>

              <div class="form-group mx-auto mb-5">
                <label for="exampleInputpassword" class="label">Confirm Password</label>
                <input 
                  type="password" 
                  class="form-control" 
                  name="confirm password"
                  aria-describedby="resetPassword" 
                  placeholder="Re-enter your New Password here" />
              </div>
              
              <div class="text-center mb-5">
                <button
                  class="submit-btn btn mb-0 btn-join border-0"
                  style={{width:'15rem'}}
                >
                  Submit
                </button>
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
