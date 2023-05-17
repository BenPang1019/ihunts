import axios from "axios";
import { useContext, useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import UserIcon from '../../SVG/user account icon.svg';
import IECLogo from '../../Components/Navigation/IECLogo.svg'
import eyeOpen from '../../SVG/eyeOpen.png'
import eyeClose from '../../SVG/eyeClose.png'
import "../Login/login.css";
import ReCAPTCHA from "react-google-recaptcha";
import {motion} from "framer-motion"
import Swal from 'sweetalert2'

export const Login = () => {
  const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
  });
  const [verified,setVerified] = useState(true)

  const [inputs, setInputs] = useState({
    username: "",
    password: "", 
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  function onChangeRecapta(value) {
    setVerified(true)
  }

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(inputs.username==0){
      Swal.fire({
        title:'Username are required!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }
    else if (inputs.password==0){
      Swal.fire({
        title:'Password are required!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else{
    try {
      await login(inputs)
      const res = await axiosInstance.post("/auth/login", inputs);
      console.log(res)
      navigate("/");
    } catch (err) {
      Swal.fire({
        title:`${JSON.stringify(err.response.data)}`,
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }}
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  

  return (
    <motion.div className="login" initial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
      <div className="web">
        <div className="containerOne">
          <Link to='/'><img src={IECLogo} className="inline" style={{marginLeft:'2rem',verticalAlign:'top'}}/></Link>
          <h1 className="containerOneHOne inline">LOG IN</h1>
        </div>

        <div className="containerTwo">
          <img src={UserIcon} className="userIcon"/><br/>

          <div className="loginForm">
            <label className="label">Username</label><br/>
            <input className="input" type="text" placeholder="Insert Your Username Here" onChange={handleChange} name="username"/>
            <br/>
            {passwordShown?
            <img src={eyeOpen} onClick={togglePassword} className="passwordIcon"/>
            :
            <img src={eyeClose} onClick={togglePassword} className="passwordIcon"/>
            }
            <label className="label">Password</label><br/>
            <input className="input" type={passwordShown ? "text" : "password"} placeholder="Insert Your Password Here" onChange={handleChange} name="password"/>
          </div>

          <Link><h1 className="fgtPassword">Forget Password?</h1></Link>

          <div className="recaptcha">
          <ReCAPTCHA
              sitekey="6LfWmtYiAAAAAPw9dQ6ML57lxyzyneh9mdmVQYrS"
              onChange={onChangeRecapta}
          />
          </div>

          <button className="loginButton" onClick={handleSubmit} disabled={!verified}>Join The Hunt</button>

          <div className="registerContainer">
            <h1 className="registerHOne">- Or -</h1>

            <h1 className="registerHTwo">Don't Have An Account?</h1>
            <Link to='/register'><h1 className="registerHThree">Create Account</h1></Link>
          </div>
        </div>
      </div>

      <div className="mobile">

      </div>
    </motion.div>
  );
};
