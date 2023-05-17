import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import UserIcon from '../../SVG/user account icon.svg';
import { useForm } from "react-hook-form";
import "../ResetPassword/ResetPassword.css";
 
export const ResetPasswordOne = () => {
  // const axiosInstance = axios.create({
  //   baseURL:process.env.REACT_APP_API_URL,
  // })

  return (
    <div className="ResetPassword">
    
    <div class="webLogin formdiv" style={{}}>
        <div
          class="content-2-3  "
        >
          <div class="text-center mb-4">
            <img
              className="user-icon h-auto"
              style={{ width: '8.2rem',marginTop:'1.5rem' }}
              src={UserIcon}
              alt="island"
            />
          </div>
          <form class="form-login mx-auto">
            <div class="form-group mx-auto">
              <label for="exampleInputEmail1" class="label" style={{ marginTop:'3rem' }}>Please insert your e-mail here</label>
              <input 
                type="text" 
                class="form-control" 
                name="username"
                aria-describedby="emailHelp" 
                placeholder="Insert your e-mail here" />
            </div>
            <div class="text-center mb-5">
              <a
                href="/resetpassword/:authentication"
                class="submit-btn btn mb-0 btn-join border-0"
                style={{ width:'24rem',marginTop:'5rem' }}
              >
                Next
              </a>
            </div>
          </form>
        </div>
      </div>


      <div class="mobileLogin formdiv " style={{ paddingBottom: '6.5rem' }}>
        <div
          class="content-2-3  loginContainer"
        >
          <div class="text-center mb-4">
            <img
              className="user-icon h-auto"
              style={{ width: '8.2rem',marginTop:'5rem' }}
              src={UserIcon}
              alt="island"
            />
          </div>
          <form class="form-login mx-auto">
            <div class="form-group mx-auto">
              <label for="exampleInputEmail1" class="label" style={{ marginTop:'3rem' }}>Please insert your e-mail here</label>
              <input 
                type="text" 
                class="form-control" 
                name="username"
                aria-describedby="emailHelp" 
                placeholder="Insert your e-mail here" />
            </div>
            <div class="text-center mb-5">
              <a
                href="/resetpassword/:authentication"
                class="submit-btn btn mb-0 btn-join border-0"
                style={{ width:'20rem',marginTop:'1rem' }}
              >
                Next
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
