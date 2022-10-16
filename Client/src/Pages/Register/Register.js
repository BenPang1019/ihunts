import axios from "axios";
import { useState } from "react";
// import { RegisterContext } from "../../context/RegisterContext";
import { Link, useNavigate } from "react-router-dom";
import NavbarRegister from "../../Components/Navigation/navbarregister";
import "../Register/register.css"

export const Register = () => {
  const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL})
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
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/register", inputs);
      console.log(res)
      navigate("/login");
    } catch (err) {
      setErr(err.response.data);
    console.log(err)
    }
  };

  return (
    <body className="register">
      <NavbarRegister/>      
      <div class="h-100 w-100" style={{ boxSizing: 'border-box', backgroundColor: '#2a2a2a', paddingBottom: '6.5rem' }}>
        <div
          class="content-2-3 container-xxl mx-auto p-0 position-relative"
          style={{ fontFamily: 'Poppins, sans-serif' }}
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
                  type="text"
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
                  type="text"
                  placeholder="Enter Password"
                  name='password'
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
              {err && <p>{err}</p>}
            </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};
