import React,{useState} from 'react'
import LogoCircle from '../../SVG/Towncircle.svg'
import Navbar from '../../Components/Navigation/navbar.js'
import Footer from '../../Components/Footer/Footer.js'
import { Link } from 'react-router-dom';
import '../TicketPage/TicketPage.css'
import Calendar from 'react-calendar';
import CalendarIcon from '../../SVG/calander.svg'
import PhoneIcon from '../../SVG/phoneTwo.svg'
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value,ticketQuantity,date}));
  };

  const onChange = date =>{
    setDate(date.toLocaleDateString())
  }

  const [ticketQuantity, setticketQuantity] = useState(0)

  const decrementCount = () => {
    setticketQuantity(ticketQuantity - 1)
  }

  const incrementCount = () => {
    setticketQuantity(ticketQuantity + 1)
  }


  const asd = () =>{
    if(ticketQuantity<=0){
      alert("Ticket Quantity Must Be 1 or Larger")
    }else{
      setActive("third")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/book/book", inputs);
      console.log(res)
      navigate("/thankyou");
    } catch (err) {
      setError(err.response.data);
      console.log(err.response)
    }
  };
 
  const [active,setActive] = useState('second');
  const [date, setDate] = useState(new Date());


  return (
    <div className='ticketpage'>
        <Navbar />
            <div class="webTicket container-xxl">
              <div class="col-md-4 mb-3 webTicket">
                <div class="card">
                  <div class="card-body">
                    <div class="container-fluid">
                      <p class="town-name">
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
                    <h4 class="card-title">WALK HUNT</h4>
                    <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                    <p class="card-textTwo">Price Worth RM68,000</p>
                    <p class="card-textThree">Sunday, Monday</p>
                    <p class="card-textFour">8.00am - 8.00pm</p>
                  </div>
                </div>
              </div>

              <div className='bookContainer'>
              <div className=''>
              {active === "second" &&
              <div style={{ color:'white',backgroundColor:"#2a2a2a",width:'50rem',float:'right',marginTop:"-33rem",position:"relative"}}>
              <img src={CalendarIcon} style={{ width:'4rem',marginBottom:'3rem',backgroundColor:'grey',borderRadius:'1rem' }}/>
              <img src={PhoneIcon} style={{ width:'4rem',marginBottom:'3rem',marginLeft:'2rem' }}/>
                  <h1 >Ticket Quantity</h1>
                  <label style={{ marginLeft:'0.5rem' }}>Number of participant</label>
                  <div className='ticketBtnContainer'>
                  <button className='decBtn' type='button' onClick={() => decrementCount()}> {"<"} </button>
                  <input className='ticketInput' type='text' value={ticketQuantity}/>
                  <button className='incBtn' type='button' onClick={() => incrementCount()}> {">"}  </button>
                  </div>
                  <br/>
                  <h1>Schedule Event</h1>
                  <Calendar 
                      onChange={onChange}
                      view='month'
                      maxDetail='month'
                      minDetail='month'
                      // maxDate={new Date()}
                      tileDisabled={({ date }) => date.getDay() === 1||date.getDay() === 2||date.getDay() === 3||date.getDay() === 4||date.getDay() === 5|| date< new Date()}
                      showFixedNumberOfWeeks
                  />
                  <br/>
                  <button  onClick={asd}>Next</button>
              </div>
              }
              </div>

              <div>
              {active === "third" &&
              <div style={{ color:'white',backgroundColor:"#2a2a2a",width:'50rem',float:'right',marginTop:"-33rem",position:"relative"}}>
              <img src={CalendarIcon} style={{ width:'4rem',marginBottom:'3rem' }}/>
              <img src={PhoneIcon} style={{ width:'4rem',marginBottom:'3rem',marginLeft:'2rem',backgroundColor:'grey',borderRadius:'1rem' }}/>
              <h1>Contact Information</h1>
              <div class="form-register mx-auto formdiv">
              <form style={{ marginLeft:'-3rem' }}>
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
            <div style={{ color:'white',backgroundColor:"#2a2a2a",width:'50rem',float:'right',marginTop:"-33rem",position:"relative"}}>
            <img src={CalendarIcon} style={{ width:'4rem',marginBottom:'3rem' }}/>
            <img src={PhoneIcon} style={{ width:'4rem',marginBottom:'3rem',marginLeft:'2rem',backgroundColor:'grey',borderRadius:'1rem' }}/>
            <h1>Contact Information</h1>
            <label>FirstName:</label><label>{inputs.firstName}</label>
            <br/>
            <label>LastName:</label><label>{inputs.lastName}</label>
            <br/>
            <label>Email:</label><label>{inputs.email}</label>
            <br/>
            <label>PhoneNumber:</label><label>{inputs.phone}</label>
            <br/>
            <label>Address:</label><label>{inputs.address}</label>
            <br/>
            <label>PostalCode:</label><label>{inputs.postal}</label>
            <br/>
            <label>State:</label><label>{inputs.state}</label>
            <br/>
            <button onClick={()=>setActive("five")}>Purchase</button>
            </div>
            }
          </div>

          <div>
            {active === "five" &&
            <div style={{ color:'white',backgroundColor:"#2a2a2a",width:'50rem',float:'right',marginTop:"-33rem",position:"relative"}}>
            <img src={CalendarIcon} style={{ width:'4rem',marginBottom:'3rem' }}/>
            <img src={PhoneIcon} style={{ width:'4rem',marginBottom:'3rem',marginLeft:'2rem',backgroundColor:'grey',borderRadius:'1rem' }}/>
            <h1>Contact Information</h1>
            <label>FirstName:</label><label>{inputs.firstName}</label>
            <br/>
            <label>LastName:</label><label>{inputs.lastName}</label>
            <br/>
            <label>Email:</label><label>{inputs.email}</label>
            <br/>
            <label>PhoneNumber:</label><label>{inputs.phone}</label>
            <br/>
            <label>Address:</label><label>{inputs.address}</label>
            <br/>
            <label>PostalCode:</label><label>{inputs.postal}</label>
            <br/>
            <label>State:</label><label>{inputs.state}</label>
            <br/>
            <label>Date:</label><label>{JSON.stringify(date)}</label>
            <br/>
            <label>Event Title:</label><label>Walk Hunt</label>
            <br/>
            <label>Member:</label><label>{ticketQuantity}</label>
            <br/>
            <a href='/thankyou' onClick={handleSubmit}>Confirm</a>
            </div>
            }
        </div>
        </div>
      </div>    


      <div class="mobileTicket container-xxl">
              <div class="col-lg-4 mb-3 mobileTicket cardContainer">
                <div class="card">
                  <div class="card-body">
                    <div class="container-fluid">
                      <p class="town-name">
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
                    <h4 class="card-title">WALK HUNT</h4>
                    <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                    <p class="card-textTwo">Price Worth RM68,000</p>
                    <p class="card-textThree">Sunday, Monday</p>
                    <p class="card-textFour">8.00am - 8.00pm</p>
                  </div>
                </div>
              </div>

              <div className='bookingContainer'>
              <div className='bookContainer'>
              {active === "second" &&
              <div style={{ color:'white',position:"relative"}}>
              <img src={CalendarIcon} style={{ width:'4rem',marginBottom:'3rem',backgroundColor:'grey',borderRadius:'1rem' }}/>
              <img src={PhoneIcon} style={{ width:'4rem',marginBottom:'3rem',marginLeft:'2rem' }}/>
                  <h1 >Ticket Quantity</h1>
                  <label style={{ marginLeft:'0.5rem' }}>Number of participant</label>
                  <div className='ticketBtnContainer'>
                  <button className='decBtn' type='button' onClick={() => decrementCount()}> {"<"} </button>
                  <input className='ticketInput' type='text' value={ticketQuantity}/>
                  <button className='incBtn' type='button' onClick={() => incrementCount()}> {">"}  </button>
                  </div>
                  <br/>
                  <h1>Schedule Event</h1>
                  <Calendar 
                      onChange={onChange}
                      view='month'
                      maxDetail='month'
                      minDetail='month'
                      // maxDate={new Date()}
                      tileDisabled={({ date }) => date.getDay() === 1||date.getDay() === 2||date.getDay() === 3||date.getDay() === 4||date.getDay() === 5|| date< new Date()}
                      showFixedNumberOfWeeks
                  />
                  <br/>
                  <button  onClick={asd}>Next</button>
              </div>
              }
              </div>

              <div className='bookContainer'>
              {active === "third" &&
              <div style={{ color:'white',position:"relative"}}>
              <img src={CalendarIcon} style={{ width:'4rem',marginBottom:'3rem' }}/>
              <img src={PhoneIcon} style={{ width:'4rem',marginBottom:'3rem',marginLeft:'2rem',backgroundColor:'grey',borderRadius:'1rem' }}/>
              <h1>Contact Information</h1>
              <div class="form-register mx-auto formdiv">
              <form style={{ marginLeft:'-3rem' }}>
              <div className="row justify-content-center">
                <div class="form-group col-lg-6 " style={{ marginLeft:'4rem' }}>
                  <label class="label">FirstName</label>
                  <input
                    style={{ width:'92%' }}
                    type="text"
                    placeholder="firstName"
                    name='firstName'
                    onChange={handleChange}
                    className="form-control"
                    required
                  /> 
                </div>
                <div class="form-group col-lg-6" style={{ marginLeft:'4rem' }}>
                  <label class="label">LastName</label>
                  <input
                    style={{ width:'92%' }}
                    type="text"
                    placeholder="lastName"
                    name='lastName'
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="row justify-content-center" style={{ marginLeft:'1.5rem' }}>
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
              <div className="row justify-content-center" style={{ marginLeft:'1.5rem' }}>
                <div class="form-group ">
                  <label class="label">Address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    name='address'
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="row justify-content-center" style={{ marginLeft:'1.5rem' }}>
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
                <div class="form-group col-lg-6" style={{ marginLeft:'0rem' }}>
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
                  style={{ marginRight:'9rem' }}
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
            <div className='bookContainer'>
            {active === "fourth" &&
            <div style={{ color:'white',position:"relative",marginBottom:'5rem'}}>
            <img src={CalendarIcon} style={{ width:'4rem',marginBottom:'3rem' }}/>
            <img src={PhoneIcon} style={{ width:'4rem',marginBottom:'3rem',marginLeft:'2rem',backgroundColor:'grey',borderRadius:'1rem' }}/>
            <h1>Contact Information</h1>
            <label>FirstName:</label><label>{inputs.firstName}</label>
            <br/>
            <label>LastName:</label><label>{inputs.lastName}</label>
            <br/>
            <label>Email:</label><label>{inputs.email}</label>
            <br/>
            <label>PhoneNumber:</label><label>{inputs.phone}</label>
            <br/>
            <label>Address:</label><label>{inputs.address}</label>
            <br/>
            <label>PostalCode:</label><label>{inputs.postal}</label>
            <br/>
            <label>State:</label><label>{inputs.state}</label>
            <br/>
            <button onClick={()=>setActive("five")}>Purchase</button>
            </div>
            }
          </div>

          <div className='bookContainer'>
            {active === "five" &&
            <div style={{ color:'white',position:"relative",marginBottom:'5rem'}}>
            <img src={CalendarIcon} style={{ width:'4rem',marginBottom:'3rem' }}/>
            <img src={PhoneIcon} style={{ width:'4rem',marginBottom:'3rem',marginLeft:'2rem',backgroundColor:'grey',borderRadius:'1rem' }}/>
            <h1>Contact Information</h1>
            <label>FirstName:</label><label>{inputs.firstName}</label>
            <br/>
            <label>LastName:</label><label>{inputs.lastName}</label>
            <br/>
            <label>Email:</label><label>{inputs.email}</label>
            <br/>
            <label>PhoneNumber:</label><label>{inputs.phone}</label>
            <br/>
            <label>Address:</label><label>{inputs.address}</label>
            <br/>
            <label>PostalCode:</label><label>{inputs.postal}</label>
            <br/>
            <label>State:</label><label>{inputs.state}</label>
            <br/>
            <label>Date:</label><label>{JSON.stringify(date)}</label>
            <br/>
            <label>Event Title:</label><label>Walk Hunt</label>
            <br/>
            <label>Member:</label><label>{ticketQuantity}</label>
            <br/>
            <a href='/thankyou' onClick={handleSubmit}>Confirm</a>
            </div>
            }
        </div>
        </div>
        </div>
      </div>                                                       
  )
}
