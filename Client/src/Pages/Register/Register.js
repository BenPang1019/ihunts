import axios from "axios";
import { useState } from "react";
// import { RegisterContext } from "../../context/RegisterContext";
import { Link, useNavigate } from "react-router-dom";
import NavbarRegister from "../../Components/Navigation/navbarregister";
import "../Register/register.css"


export const Register = () => {
  // const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,});
  const [agree,setAgree] = useState(false);
  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }

  const [inputs, setInputs] = useState({
    username: "",
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword:"",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const handleClick = async (e) => {
    e.preventDefault();
    if(inputs.username==0){
      alert('Username are required!')
    }else
    if(inputs.fullName==0)
    {
      alert('FullName are required!')
    }else
    if(inputs.phone==0)
    {
      alert('PhoneNumber are required!')
    }else
    if(inputs.email==0)
    {
      alert('Email are required!')
    }else
    if(inputs.password==0)
    {
      alert('Password are required!')
    }else
    if(inputs.confirmPassword==0){
      alert('Confirm Password are required!')
    }else
    if(inputs.confirmPassword!=inputs.password){
      alert('Password Does Not Match!')
    }
    if (inputs.password.length<8){
      alert("Minimum 8 characters required for password!");
    }else 
    if (!((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(inputs.password))){
      alert("Use atleast 01 special character!!!");
    }else 
    if (((/[ ]/).test(inputs.password))){
      alert("Don't include space in password!!!");
    }
    else{
    try {
      const res = await axios.post("/auth/register", inputs);
      console.log(res)
      navigate("/login");
    } catch (err) {
      alert(err.response.data);
    }}
  };

  return (
    <body className="register">
      <NavbarRegister/>      
      <div class="h-100 w-100" style={{ backgroundColor: '#2a2a2a', paddingBottom: '6.5rem' }}>
        <div
          class="content-2-3 container-xxl mx-auto p-0 position-relative"
        >
          <div class="form-register mx-auto formdiv">
            <form>
            <div className="row justify-content-center">
              <div class="form-group col-lg-6 ">
                <label class="label">Username</label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name='username'
                  onChange={handleChange}
                  className="form-control"
                  required
                /> 
              </div>
              <div class="form-group col-lg-6">
                <label class="label">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter FullName"
                  name='fullName'
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div class="form-group col-lg-6">
                <label class="label">Phone Number</label>
                <input
                  type="number"
                  placeholder="Enter PhoneNumber"
                  name='phone'
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div class="form-group col-lg-6">
                <label class="label">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name='email'
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div class="form-group col-lg-6">
                <label class="label">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name='password'
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div class="form-group col-lg-6">
                <label class="label">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Enter Password Again"
                  name='confirmPassword'
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div class="form-group mx-auto col-lg-12 text-center">
              <input type="checkbox" class="form-check-input" id="agree" onChange={checkboxHandler} />
              <label class="text-forgot-info" htmlFor="agree" style={{ marginLeft: '0.5rem' }}>I agree to <Link to='/terms&condition' style={{ color: '#ffcc4d' }}>Terms and Conditions</Link></label>
            </div>
            <div class="text-center mb-5">
              <button
                type="submit"
                disabled={!agree}
                class="submit-btn btn mb-0 btn-join border-0"
                onClick={handleClick}
              >
                Register
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};
