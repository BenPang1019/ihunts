import React,{useState} from 'react'
import LogoCircle from '../../SVG/Towncircle.svg'
import Navbar from '../../Components/Navigation/navbar.js'
import Footer from '../../Components/Footer/Footer.js'
import { Link } from 'react-router-dom';
import '../TicketPage/TicketPage.css'
import Calendar from 'react-calendar'
import CalendarIcon from '../../SVG/calander.png'
import PhoneIcon from '../../SVG/phone.png'
// import 'react-calendar/dist/Calendar.css';


export const TicketPage = () => {
    const [active,setActive] = useState('second');
    const [value, onChange] = useState(new Date());
    const tileDisabled = ({ activeStartDate, date, view }) => {
        return date < new Date()
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
                <input type='number'/>
                <h1>Schedule Event</h1>
                <Calendar 
                    onChange={onChange} 
                    value={value} 
                    tileDisabled={tileDisabled}
                />
                <br/>
                <button onClick={()=>setActive("third")}>Next</button>
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
                  placeholder="Enter Username"
                  name='username'
                //   onChange={handleChange}
                  className="form-control"
                  required
                /> 
              </div>
              <div class="form-group col-lg-6">
                <label class="label">LastName</label>
                <input
                  type="text"
                  placeholder="Enter FullName"
                  name='fullName'
                //   onChange={handleChange}
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
                  placeholder="Enter PhoneNumber"
                  name='phone'
                //   onChange={handleChange}
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
                //   onChange={handleChange}
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
                  placeholder="Enter Password"
                  name='password'
                //   onChange={handleChange}
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
                  placeholder="Enter Username"
                  name='username'
                //   onChange={handleChange}
                  className="form-control"
                  required
                /> 
              </div>
              <div class="form-group col-lg-6">
                <label class="label">Postal Code</label>
                <input
                  type="text"
                  placeholder="Enter FullName"
                  name='fullName'
                //   onChange={handleChange}
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
            <label>FirstName</label><label>FirstName</label>
            <br/>
            <label>LastName</label><label>LastName</label>
            <br/>
            <label>Email</label><label>Email</label>
            <br/>
            <label>PhoneNumber</label><label>PhoneNumber</label>
            <br/>
            <label>Address</label><label>Address</label>
            <br/>
            <label>PostalCode</label><label>PostalCode</label>
            <br/>
            <label>State</label><label>State</label>
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
            <label>FirstName</label><label>FirstName</label>
            <br/>
            <label>LastName</label><label>LastName</label>
            <br/>
            <label>Email</label><label>Email</label>
            <br/>
            <label>PhoneNumber</label><label>PhoneNumber</label>
            <br/>
            <label>Address</label><label>Address</label>
            <br/>
            <label>PostalCode</label><label>PostalCode</label>
            <br/>
            <label>State</label><label>State</label>
            <br/>
            <label>Date</label><label>Date</label>
            <br/>
            <label>Event Title</label><label>EventTitle</label>
            <br/>
            <label>Member</label><label>Member</label>
            <br/>
            <a href='/thankyou'>Confirm</a>
            </div>
            }
          </div>
        </div>         
  )
}
