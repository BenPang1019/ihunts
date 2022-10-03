import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { RegisterContext } from "../../context/RegisterContext";
import { Link } from "react-router-dom";
import NavbarRegister from "../../Components/Navigation/navbarregister";

import "../Register/register.css"

export const Register = () => {
  // const axiosInstance=axios.create({
  //   baseURL:process.env.REACT_APP_REGISTER_URL,
  // })

  const [register, setRegister] = useState({
    username: "",
    fullName: "",
    phone: "",
    email: "",
    password: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegister((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://179.61.188.38:9000/register", register);
      navigate("/login");
    } catch (err) {
      console.log(err);
      setError(true)
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
                  placeholder="username"
                  name='username'
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div class="form-group col-lg-6">
                <label class="label">Full Name</label>
                <input
                  type="text"
                  placeholder="fullname"
                  name='fullname'
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div class="form-group col-lg-6">
                <label class="label">Phone Number</label>
                <input
                  type="text"
                  placeholder="phone"
                  name='phone'
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div class="form-group col-lg-6">
                <label class="label">Email</label>
                <input
                  type="text"
                  placeholder="email"
                  name='email'
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div class="form-group col-lg-6">
                <label class="label">Password</label>
                <input
                  type="password"
                  placeholder="password"
                  name='password'
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div class="form-group mx-auto col-lg-12 text-center">
              <input type="checkbox" class="form-check-input" id="check" />
              <label class="text-forgot-info" for="exampleCheck1" style={{ marginLeft: '0.5rem' }}>I agree to <Link to='/terms&condition' style={{ color: '#ffcc4d' }}>Terms and Conditions</Link></label>
            </div>
            <div class="text-center mb-5">
              <button
                type="submit"
                class="submit-btn btn mb-0 btn-join border-0"
                onClick={handleClick}
              >
                Join the Hunt
              </button>
              {error && "Something went wrong!"}
            </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};
