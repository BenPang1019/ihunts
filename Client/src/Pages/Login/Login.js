import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarLogin from "../../Components/Navigation/navbarlogin";
import { AuthContext } from "../../context/AuthContext";
import UserIcon from '../../SVG/user account icon.svg';
import { useForm } from "react-hook-form";
import "../Login/login.css";
 
export const Login = () => {
  // const axiosInstance = axios.create({
  //   baseURL:process.env.REACT_APP_API_URL,
  // });
  const [inputs, setInputs] = useState({
    username: "",
    password: "", 
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(inputs.username==0){
      alert('Username are required!')
    }
    else if (inputs.password==0){
      alert('Password are required!')
    }else{
    try {
      await login(inputs)
      const res = await axios.post("/auth/login", inputs);
      console.log(res)
      navigate("/");
    } catch (err) {
      setError(err.response.data);
      console.log(err)
    }}
  };

  return (
    <div className="loginpage">
    <NavbarLogin/>
      <div class="webLogin formdiv" style={{backgroundColor: '#2a2a2a', paddingBottom: '6.5rem' }}>
        <div
          class="content-2-3  "
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
              <label for="exampleInputEmail1" class="label">Username</label>
              <input 
                onChange={handleChange} 
                type="text" 
                class="form-control" 
                name="username"
                aria-describedby="emailHelp" 
                placeholder="Enter Username" />
            </div>
            <div class="form-group mx-auto">
              <label for="exampleInputPassword1" class="label">Password</label>
              <input 
                onChange={handleChange} 
                type="password" 
                class="form-control" 
                name="password"
                placeholder="Password" /> 
            </div>
            <div class="form-group mx-auto">
              <input type="checkbox" class="form-check-input" id="check" />
              <label class="text-forgot-info" for="exampleCheck1" style={{ marginLeft: '0.5rem' }}>Remember Me</label>
              <Link class="form-check-label forgot" for="exampleCheck1" to='/resetpassword' style={{ fontSize: '1rem', cursor: 'pointer',marginLeft:'7rem' }}>Forgot Password ?</Link>
            </div>
            <div class="text-center mb-5">
              <button
                class="submit-btn btn mb-0 btn-join border-0"
                onClick={handleSubmit}
              >
                Log In
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


      <div class="mobileLogin formdiv " style={{ paddingBottom: '6.5rem' }}>
        <div
          class="content-2-3  loginContainer"
        >
          <div class="text-center mb-4">
            <img
              className="user-icon h-auto"
              style={{ width: '8.2rem',marginTop:'10rem' }}
              src={UserIcon}
              alt="island"
            />
          </div>
          <form class="form-login mx-auto">
            <div class="form-group mx-auto">
              <label for="exampleInputEmail1" class="label">Username</label>
              <input 
                onChange={handleChange} 
                type="text" 
                class="form-control" 
                name="username"
                aria-describedby="emailHelp" 
                placeholder="Enter Username" />
            </div>
            <div class="form-group mx-auto">
              <label for="exampleInputPassword1" class="label">Password</label>
              <input 
                onChange={handleChange} 
                type="password" 
                class="form-control" 
                name="password"
                placeholder="Password" /> 
            </div>
            <div class="form-group mx-auto">
              <input type="checkbox" class="form-check-input" id="check" />
              <label class="remember" for="exampleCheck1" style={{ marginLeft: '0.5rem' }}>Remember Me</label>
              <Link class="forgot" for="exampleCheck1" to='/resetpassword' >Forgot Password ?</Link>
            </div>
            <div class="text-center mb-5">
              <button
                class="submit-btn btn mb-0 btn-join border-0"
                onClick={handleSubmit}
              >
                Log In
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
