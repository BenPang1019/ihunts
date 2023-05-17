import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IECLogo from '../../Components/Navigation/IECLogo.svg'
import eyeOpen from '../../SVG/eyeOpen.png'
import eyeClose from '../../SVG/eyeClose.png'
import "../Register/register.css"
import ReCAPTCHA from "react-google-recaptcha";
import {motion} from "framer-motion"
import Swal from 'sweetalert2'

export const Register = () => {
  const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,});
  const [verified,setVerified] = useState(true);
  const [agree,setAgree] = useState(false);

  const onChangeRecapta = (value)=> {
    console.log("Captcha value:", value);
    setVerified(!verified);
  }

  const checkboxHandler = () => {
    setAgree(!agree)
  }

  const [inputs, setInputs] = useState({
    username: "",
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword:"",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const handleClick = async (e) => {
    e.preventDefault();
    if(inputs.username==0){
      Swal.fire({
        title:'Username are required!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(inputs.fullName==0)
    {
      Swal.fire({
        title:'Full Name are required!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(inputs.phone==0)
    {
      Swal.fire({
        title:'Contact Number are required!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(!/^\d+$/.test(inputs.phone)){
      Swal.fire({
        title: 'Phone number should only contain numbers!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(inputs.email==0)
    {
      Swal.fire({
        title:'Email are required!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(inputs.password==0)
    {
      Swal.fire({
        title:'Password are required!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(inputs.confirmPassword==0){
      Swal.fire({
        title:'Confirm Password are required!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(!/[A-Z]/.test(inputs.username)){
      Swal.fire({
        title:'Use atleast 1 Capital Letter for Username!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(!/[1234567890]/.test(inputs.username)){
      Swal.fire({
        title:'Use atleast 1 Number for Username!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(inputs.confirmPassword!=inputs.password){
      Swal.fire({
        title:'Password Does Not Match!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if (inputs.password.length<8){
      Swal.fire({
        title:'Minimum 8 characters required for password!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else 
    if (!((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(inputs.password))){
      Swal.fire({
        title:'Use atleast 1 special character in password!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else 
    if (((/[ ]/).test(inputs.password))){
      Swal.fire({
        title:'Dont include space in password!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }
    else{
    try {
      const res = await axiosInstance.post("/auth/register", inputs);
      navigate("/login");
      setAgree(!agree)
    } catch (err) {
      Swal.fire({
        title:`${err.response.data}`,
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

  const [passwordShownTwo, setPasswordShownTwo] = useState(false);

  const togglePasswordTwo = () => {
    setPasswordShownTwo(!passwordShownTwo);
  };

  return (
    <motion.div className="register" initial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
      <div className="web">
        <div className="containerOne" >
          <Link to='/'><img src={IECLogo} className="inline" style={{marginLeft:'2rem',verticalAlign:'top'}}/></Link>
          <h1 className="containerOneHOne inline">CREATE ACCOUNT</h1>
        </div>

        <div className="containerTwo">
          <form className='submitForm'>
            <div className="row">
                <div className="col">
                <label className="label">Username</label><br/>
                <input type="text" className='inputLine' placeholder="Insert Your Username Here" onChange={handleChange} name='username' required/>
                </div>
                <div className="col">
                <label className="label">Full Name</label><br/>
                <input type="text"  className='inputLine' placeholder="Insert Your Full Name Here" onChange={handleChange} name='fullName' required/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <label className="label">Contact Number</label><br/>
                <input type="text" className='inputLine' placeholder="Insert Your Contact Number Here" onChange={handleChange} name='phone' required/>
                </div>
                <div className="col">
                <label className="label">E-mail</label><br/>
                <input type="email"  className='inputLine' placeholder="Insert Your E-mail Here" onChange={handleChange} name='email' required/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <label className="label">Password</label><br/>
                <input type={passwordShown ? "text" : "password"}  className='inputLine' placeholder="Insert Your Password Here" onChange={handleChange} name='password' required/>
                  {passwordShown?
                  <img src={eyeOpen} onClick={togglePassword} className="passwordIcon"/>
                  :
                  <img src={eyeClose} onClick={togglePassword} className="passwordIcon"/>
                  }
                </div>
                <div className="col">
                <label className="label">Confirm Password</label><br/>
                <input type={passwordShownTwo ? "text" : "password"}  className='inputLine' placeholder="Insert Your Confirm Password Here" onChange={handleChange} name='confirmPassword' required/>
                  {passwordShownTwo?
                  <img src={eyeOpen} onClick={togglePasswordTwo} className="passwordIconTwo"/>
                  :
                  <img src={eyeClose} onClick={togglePasswordTwo} className="passwordIconTwo"/>
                  }
                </div>
            </div>

            <input type="checkbox" className="checkbox" id="agree" onChange={checkboxHandler}/>I agree to the<Link className="link">Terms and Conditions</Link><br/>
            <ReCAPTCHA
                sitekey="6LfWmtYiAAAAAPw9dQ6ML57lxyzyneh9mdmVQYrS"
                onChange={onChangeRecapta}
                className="recaptcha"
              />
            <button type="submit" className='submitButton' onClick={handleClick} disabled={!verified || !agree ? true : false}>Sign Up</button>

          </form>
        
          
        </div>
      </div>

      <div className="mobile">

      </div>
    </motion.div>
  );
};
