import React,{useState} from 'react'
import LogoCircle from '../../SVG/Towncircle.svg'
import Navbar from '../../Components/Navigation/navbar.js'
import Footer from '../../Components/Footer/Footer.js'
import { Link } from 'react-router-dom';
import '../TicketPage/TicketPage.css'
import DatePicker from "react-datepicker";
import Calendar from 'react-calendar';
import CalendarIcon from '../../SVG/calander.png'
import PhoneIcon from '../../SVG/phone.png'
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import 'react-calendar/dist/Calendar.css';


export const TicketPage = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    postal: "",
    ticketQuantity:"",
    date: "",
  });
  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/Book", inputs);
      console.log(res)
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    console.log(err.response)
    }
  };

  const [active,setActive] = useState('second');
  const [date, setDate] = useState(new Date());
  const tileDisabled = ({ activeStartDate, date, view }) => {
      return date < new Date()
    }

  const onChange = date =>{
    setDate(date)
  }

  return (
    <div className='ticketpage'>
            <Navbar />
            {/* carousel */}
            <div class="h-100 w-100" style={{ backgroundColor: '#2a2a2a',paddingTop:'5rem',marginBottom:'15rem' }}>
                <div
                    class="content-2-2 container-xxl mx-auto p-0 position-relative "
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    <div class="snippet-body">
                        <div class=" pb-2">
                            <div class="">
                                <div class="">
                                    <div class="">
                                            {/* Mobile Carousel Card */}
                                            <section className='mobile'>
                                            <div class="carousel-inner ">
                                                <div class="carousel-item active">
                                                    <div class="row">
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <div class="container-fluid">
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            />
                                                                            Penang
                                                                        </p>
                                                                    </div>

                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        WALK HUNT
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        Treasure Hunt in Penang Heritage Area
                                                                    </p>
                                                                    <p class="card-text">
                                                                        RM48
                                                                    </p>
                                                                    <div class="text-center button-cta">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-outline-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px' }}
                                                                        >
                                                                            Learn More
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className='emptycontainer '></div>
                                            </section>

                                            {/* Carousel Card */}
                                            <section className='web'>
                                            <div>
                                                        <div class="col-md-4 mb-3"  >
                                                            <div class="card" >
                                                                <div class="card-body">
                                                                    <div class="container-fluid">
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            />
                                                                            Penang
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        WALK HUNT
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        Treasure Hunt in Penang Heritage Area
                                                                    </p>
                                                                    <p class="card-text" style={{ fontSize:'1.2rem' }}>
                                                                        Price Worth RM68,000
                                                                    </p>
                                                                    <p class="card-text" style={{ fontSize:'1.2rem' }}>
                                                                        Sunday, Monday <br/>
                                                                        8.00am - 8.00pm
                                                                 </p>    
                                                            </div> 
                                                    </div>
                                                </div> 
                                                </div>                                                     
                                        </section>        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
            {active === "second" &&
            <div style={{ color:'white',width:'50%',backgroundColor:"#2a2a2a",marginTop:'-70rem',marginLeft:'50rem',position:'relative'}}>
            <img src={CalendarIcon} style={{ width:'4rem',marginBottom:'3rem',backgroundColor:'grey' }}/>
            <img src={PhoneIcon} style={{ width:'4rem',marginBottom:'3rem',marginLeft:'2rem' }}/>
                <h1>Ticket Quantity</h1>
                <label>Number of participant</label>
                <input type='number' name='ticketQuantity' onChange={handleChange}/>
                <h1>Schedule Event</h1>
                <Calendar 
                    onChange={onChange}
                    // onClick={handleChange}
                    // value={date}
                    tileDisabled={tileDisabled}
                />
                {/* {console.log(date)} */}
                <br/>
                <button onClick={()=>{setActive("third")
                console.log(date)}}>Next</button>
            </div>
            }
            </div>
            
            <div>
            {active === "third" &&
            <div style={{ color:'white',width:'50%',backgroundColor:"#2a2a2a",marginTop:'-70rem',marginLeft:'50rem',position:'relative'}}>
            <img src={CalendarIcon} style={{ width:'4rem',marginBottom:'3rem' }}/>
            <img src={PhoneIcon} style={{ width:'4rem',marginBottom:'3rem',marginLeft:'2rem',backgroundColor:'grey' }}/>
            <h1>Contact Information</h1>
            <div class="form-register mx-auto formdiv">
            <form style={{ marginLeft:'-13rem' }}>
            <div className="row justify-content-center">
              <div class="form-group col-lg-6 ">
                <label class="label">FirstName</label>
                <input
                  type="text"
                  placeholder="firstName"
                  name='firstName'
                  onChange={handleChange}
                  className="form-control"
                  required
                /> 
              </div>
              <div class="form-group col-lg-6">
                <label class="label">LastName</label>
                <input
                  type="text"
                  placeholder="lastName"
                  name='lastName'
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div class="form-group col-lg-6">
                <label class="label">ContactNumber</label>
                <input
                  type="text"
                  placeholder="PhoneNumber"
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
                  placeholder="Email"
                  name='email'
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div class="form-group ">
                <label class="label" style={{ marginLeft:'-12rem' }}>Address</label>
                <input
                  style={{ width:'205%',marginLeft:'-12rem' }}
                  type="text"
                  placeholder="Address"
                  name='address'
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div class="form-group col-lg-6 ">
                <label class="label">State</label>
                <input
                  type="text"
                  placeholder="State"
                  name='state'
                  onChange={handleChange}
                  className="form-control"
                  required
                /> 
              </div>
              <div class="form-group col-lg-6">
                <label class="label">Postal Code</label>
                <input
                  type="text"
                  placeholder="postal"
                  name='postal'
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div class="text-center mb-5">
              <button
                onClick={()=>setActive("fourth")}
                type="submit"
                class="submit-btn btn mb-0 btn-join border-0"
              >
                Purchase
              </button>
            </div>
            </form>
          </div>
            </div>
            }
          </div>

          <div>
            {active === "fourth" &&
            <div style={{ color:'white',width:'50%',backgroundColor:"#2a2a2a",marginTop:'-70rem',marginLeft:'50rem',position:'relative'}}>
            <img src={CalendarIcon} style={{ width:'4rem',marginBottom:'3rem' }}/>
            <img src={PhoneIcon} style={{ width:'4rem',marginBottom:'3rem',marginLeft:'2rem',backgroundColor:'grey' }}/>
            <h1>Contact Information</h1>
            <label>FirstName</label><label>{inputs.firstName}</label>
            <br/>
            <label>LastName</label><label>{inputs.lastName}</label>
            <br/>
            <label>Email</label><label>{inputs.email}</label>
            <br/>
            <label>PhoneNumber</label><label>{inputs.phone}</label>
            <br/>
            <label>Address</label><label>{inputs.address}</label>
            <br/>
            <label>PostalCode</label><label>{inputs.postal}</label>
            <br/>
            <label>State</label><label>{inputs.state}</label>
            <br/>
            <button onClick={()=>setActive("five")}>Purchase</button>
            </div>
            }
          </div>

          <div>
            {active === "five" &&
            <div style={{ color:'white',width:'50%',backgroundColor:"#2a2a2a",marginTop:'-70rem',marginLeft:'50rem',position:'relative'}}>
            <img src={CalendarIcon} style={{ width:'4rem',marginBottom:'3rem' }}/>
            <img src={PhoneIcon} style={{ width:'4rem',marginBottom:'3rem',marginLeft:'2rem',backgroundColor:'grey' }}/>
            <h1>Contact Information</h1>
            <label>FirstName</label><label>{inputs.firstName}</label>
            <br/>
            <label>LastName</label><label>{inputs.lastName}</label>
            <br/>
            <label>Email</label><label>{inputs.email}</label>
            <br/>
            <label>PhoneNumber</label><label>{inputs.phone}</label>
            <br/>
            <label>Address</label><label>{inputs.address}</label>
            <br/>
            <label>PostalCode</label><label>{inputs.postal}</label>
            <br/>
            <label>State</label><label>{inputs.state}</label>
            <br/>
            <label>Date</label><label>{JSON.stringify(date+1)}</label>
            <br/>
            <label>Event Title</label><label>Walk Hunt</label>
            <br/>
            <label>Member</label><label>{inputs.ticketQuantity}</label>
            <br/>
            <a href='/thankyou' onClick={handleSubmit}>Confirm</a>
            </div>
            }
          </div>
        </div>         
  )
}
