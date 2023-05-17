import React,{useState,useContext,useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import LogoCircle from '../../SVG/Towncircle.svg'
import Navbar from '../../Components/Navigation/navbar.js'
import { AuthContext } from "../../context/AuthContext";
import { Link } from 'react-router-dom';
import '../TicketPage/TicketPage.css'
import Calendar from 'react-calendar';
import CalendarIcon from '../../SVG/calander.svg'
import PhoneIcon from '../../SVG/phoneTwo.svg'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StripeCard from '../../Components/Stripe/StripeCard'
import moment from 'moment'
import Swal from 'sweetalert2'
import {motion} from 'framer-motion'

export const TicketPage = () => {
  const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
  });
  const data = 'false';
  const [state, setState] = useState('');
  const [checkUsernameOne, setCheckUsernameOne] = useState('');
  const [checkUsernameTwo, setCheckUsernameTwo] = useState('');
  const [checkUsernameThree, setCheckUsernameThree] = useState('');
  const handleSelect = event => {
    setState(event.target.value);
  };

  const location = useLocation();

  const { currentUser } = useContext(AuthContext);
  const uid = currentUser?currentUser.id:null
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username:'',
    uid:'',
    usernameTwo:'',
    usernameThree:'',
    usernameFour:'',
    uidTwo:'',
    date:'',
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    address:'',
    state:'',
    postal:'',
    ticketQuantity:'',
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value,ticketQuantity,date,state,uid}));
  };

  const onChange = date =>{
    setDate(date.toLocaleDateString())
  }

  const [ticketQuantity, setticketQuantity] = useState(0)
  const [date, setDate] = useState(0);

  const decrementCount = () => {
    setticketQuantity(ticketQuantity - 1)
  }

  const incrementCount = () => {
    setticketQuantity(ticketQuantity + 1)
  }


  const buttonOne = () =>{
    if(ticketQuantity<location.state.event.minPax || ticketQuantity>4){
      Swal.fire({
        title:`Ticket Quantity Must Be At Least ${location.state.event.minPax} and Not More Than 4`,
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else if(date==0){
      Swal.fire({
        title:'Please Choose a Date',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }
    else
    {
      setActive("third")
    }
  }


  const checkTwo = () =>{
    if(inputs.firstName==0){
      Swal.fire({
        title:'First Name are Required!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(inputs.lastName==0){
      Swal.fire({
        title:'Last Name are Required!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(inputs.phone==0){
      Swal.fire({
        title:'Phone Number are Required!',
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
    if(inputs.email==0){
      Swal.fire({
        title:'Email are Required!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(inputs.address==0){
      Swal.fire({
        title:'Address are Required!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(inputs.state==0){
      Swal.fire({
        title:'State are Required!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else
    if(inputs.postal==0){
      Swal.fire({
        title:'Postal are Required!',
        customClass: {
          confirmButton: 'alertButton',
        }
      })
    }else{
      setActive("fourth")
    }
  }

  const [active,setActive] = useState('second');

  const [username,setUsername] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/auth/getAllUsername"); 
          console.log(res)
          setUsername(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);


  const check = () => {
    if(ticketQuantity==2){
      if(inputs.usernameTwo==0){
        Swal.fire({
          title:'Please Insert Second Username!',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }else
      if(checkUsernameOne==undefined){
        Swal.fire({
          title:'Username Two Does Not Exist!',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }else
      if(inputs.usernameTwo==currentUser.username){
        Swal.fire({
          title:'Username Repeated, Please Insert Another Username',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }
      else{
        setActive('seven')
      }
    }else
    if(ticketQuantity==3){
      if(inputs.usernameTwo==0){
        Swal.fire({
          title:'Please Insert Second Username!',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }else
      if(inputs.usernameThree==0){
        Swal.fire({
          title:'Please Insert Third Username!',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }else
      if(checkUsernameOne==undefined){
        Swal.fire({
          title:'Username Two Does Not Exist!',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }else
      if(checkUsernameTwo==undefined){
        Swal.fire({
          title:'Username Three Does Not Exist!',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }else
      if(inputs.usernameTwo==currentUser.username || inputs.usernameTwo==inputs.usernameThree){
        Swal.fire({
          title:'Username Repeated, Please Insert Another Username',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }
      else
      if(inputs.usernameThree==currentUser.username || inputs.usernameThree==inputs.usernameTwo){
        Swal.fire({
          title:'Username Repeated, Please Insert Another Username',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }
      else{
        setActive('seven')
      }
    }else
    if(ticketQuantity==4){
      if(inputs.usernameTwo==0){
        Swal.fire({
          title:'Please Insert Second Username!',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }else
      if(inputs.usernameThree==0){
        Swal.fire({
          title:'Please Insert Third Username!',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }else
      if(inputs.usernameFour==0){
        Swal.fire({
          title:'Please Insert Fourth Username!',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }else
      if(checkUsernameOne==undefined){
        Swal.fire({
          title:'Username Two Does Not Exist!',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }else
      if(checkUsernameTwo==undefined){
        Swal.fire({
          title:'Username Three Does Not Exist!',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }else
      if(checkUsernameThree==undefined){
        Swal.fire({
          title:'Username Four Does Not Exist!',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }else
      if(inputs.usernameFour==currentUser.username || inputs.usernameFour==inputs.usernameThree || inputs.usernameFour==inputs.usenameTwo){
        Swal.fire({
          title:'Username Repeated, Please Insert Another Username',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }else
      if(inputs.usernameThree==currentUser.username || inputs.usernameThree==inputs.usernameFour || inputs.usernameFour==inputs.usenameTwo){
        Swal.fire({
          title:'Username Repeated, Please Insert Another Username',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }else
      if(inputs.usernameTwo==currentUser.username || inputs.usernameTwo==inputs.usernameThree || inputs.usernameTwo==inputs.usernameFour){
        Swal.fire({
          title:'Username Repeated, Please Insert Another Username',
          customClass: {
            confirmButton: 'alertButton',
          }
        })
      }
      else{
        setActive('seven')
      }
    }
  }

  useEffect(()=>{
    const checkUser = (username) =>{
      return username.username===inputs.usernameTwo
    }
    const res = username.find(checkUser)
    setCheckUsernameOne(res)
  })

  useEffect(()=>{
    const checkUser = (username) =>{
      return username.username===inputs.usernameThree
    }
    const res = username.find(checkUser)
    setCheckUsernameTwo(res)
  })

  useEffect(()=>{
    const checkUser = (username) =>{
      return username.username===inputs.usernameFour
    }
    const res = username.find(checkUser)
    setCheckUsernameThree(res)
  })



  return (
    <motion.div className='purchaseTicket' initial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
    {currentUser ? 
      ( 
      <>
      <div className='web'>
        <div className='containerOne'>
          <div className='inline containerLeft'>
            <div className='containerTicket'>
              <img src={LogoCircle} className='logoCircle'/>
              <h1 className='eventLocation'>{location.state.event.location}</h1>
              <img src={location.state.event.image} className='eventImage'/>
              <h1 className='eventTitle'>{location.state.event.eventTitle}</h1>
              <p className='eventDescription'>{location.state.event.description}</p>
              <h1 className='containerOneHThree inline'>Price Worth</h1><span className='span inline'>RM{location.state.event.priceWorth}</span><br/>
              <h1 className='containerOneHThree inline' style={{ verticalAlign:'top' }}>Time</h1>
              <span className='span inline' style={{ verticalAlign:'bottom' }}>
                  {location.state.event.availableMonday?<p className='inline'>Monday,</p>:null}
                  {location.state.event.availableTuesday?<p className='inline'>Tuesday,</p>:null}
                  {location.state.event.availableWednesday?<p className='inline'>Wednesday,</p>:null}
                  {location.state.event.availableThursday?<p className='inline'>Thursday,</p>:null}
                  {location.state.event.availableFriday?<p className='inline'>Friday,</p>:null}
                  {location.state.event.availableSaturday?<p className='inline'>Saturday,</p>:null}
                  {location.state.event.availableSunday?<p className='inline'>Sunday,</p>:null}<br/>
                  {location.state.event.eventStartTime} until {location.state.event.eventEndTime}
              </span>
            </div>
          </div>

          <div className='inline containerRight'>
            <div className='containerInformation'>
            {active==='second'&&
            <>
              <img src={CalendarIcon} className='icon' style={{ background:'grey',borderRadius:'10px' }}/>
              <img src={PhoneIcon} className='icon'/>
              <h1 className='ticketQuantity'>Ticket Quantity</h1>
              <label className='ticketQuantityTwo'>Number of participant</label>
              <button className='decBtn' type='button' onClick={() => decrementCount()}> {"<"}</button>
              <input className='ticketInput' type='text' value={ticketQuantity}/>
              <button className='incBtn' type='button' onClick={() => incrementCount()}> {">"}</button>

              <h1 className='scheduleEvent'>Schedule Event</h1>
              <Calendar 
                  onChange={onChange}
                  view='month'
                  maxDetail='month'
                  minDetail='month'
                  tileDisabled={({ date }) => 
                  date.getDay()===(location.state.event.availableMonday?null:1)||
                  date.getDay()===(location.state.event.availableTuesday?null:2)||
                  date.getDay()===(location.state.event.availableWednesday?null:3)||
                  date.getDay()===(location.state.event.availableThursday?null:4)||
                  date.getDay()===(location.state.event.availableFriday?null:5)||
                  date.getDay()===(location.state.event.availableSaturday?null:6)||
                  date.getDay()===(location.state.event.availableSunday?null:0)||
                  date < new Date()
                  }
                  showFixedNumberOfWeeks
              />

              <button className='nextButton' onClick={buttonOne}>Next</button>
            </>
            }

            {active=='third'&&
              <>
                <img src={CalendarIcon} className='icon'/>
                <img src={PhoneIcon} className='icon' style={{ background:'grey',borderRadius:'10px' }}/>

                <h1 className='contactInformation'>Contact Information</h1>
                <h1 className='contactInformationTwo'>You are required to fill in every field in order to proceed.</h1>

                {ticketQuantity==2 &&
                  <>
                    <div className="row">
                      <div className="col">
                      <label className='formLabel'>Your Username</label><br/>
                      <input type="text" className='inputLine' defaultValue={currentUser.username} name='username' disabled/>
                      </div>
                      <div className="col">
                      <label className='formLabel'>Username Two</label><br/>
                      <input type="text"  className='inputLine' placeholder='Insert Second Username' name='usernameTwo' onChange={handleChange} required/>
                      </div>
                    </div>
                    <button onClick={check} type="submit" className='nextButton'>Next</button>
                  </>
                }
                {ticketQuantity==3 &&
                  <>
                    <div className="row">
                      <div className="col">
                      <label className='formLabel'>Your Username</label><br/>
                      <input type="text" className='inputLine' defaultValue={currentUser.username} name='username' disabled/>
                      </div>
                      <div className="col">
                      <label className='formLabel'>Username Two</label><br/>
                      <input type="text"  className='inputLine' placeholder='Insert Second Username' name='usernameTwo' onChange={handleChange} required/>
                      </div>
                      <div className="col">
                      <label className='formLabel'>Username Three</label><br/>
                      <input type="text"  className='inputLine' placeholder='Insert Third Username' name='usernameThree' onChange={handleChange} required/>
                      </div>
                    </div>
                    <button onClick={check} type="submit" className='nextButton'>Next</button>
                  </>
                }
                {ticketQuantity==4 &&
                  <>
                    <div className="row">
                      <div className="col">
                      <label className='formLabel'>Your Username</label><br/>
                      <input type="text" className='inputLine' defaultValue={currentUser.username} name='username' disabled/>
                      </div>
                      <div className="col">
                      <label className='formLabel'>Username Two</label><br/>
                      <input type="text"  className='inputLine' placeholder='Insert Second Username' name='usernameTwo' onChange={handleChange} required/>
                      </div>
                      <div className="col">
                      <label className='formLabel'>Username Three</label><br/>
                      <input type="text"  className='inputLine' placeholder='Insert Third Username' name='usernameThree' onChange={handleChange} required/>
                      </div>
                      <div className="col">
                      <label className='formLabel'>Username Four</label><br/>
                      <input type="text"  className='inputLine' placeholder='Insert Fourth Username' name='usernameFour' onChange={handleChange} required/>
                      </div>
                    </div>
                    <button onClick={check} type="submit" className='nextButton'>Next</button>
                  </>
                }
              </>
            }

            {active == 'seven' &&
              <>
                <img src={CalendarIcon} className='icon'/>
                <img src={PhoneIcon} className='icon' style={{ background:'grey',borderRadius:'10px' }}/>

                <h1 className='contactInformation'>Contact Information</h1>
                <h1 className='contactInformationTwo'>You are required to fill in every field in order to proceed.</h1>
                
                <div className="row">
                  <div className="col">
                  <label className='formLabel'>First Name</label><br/>
                  <input type="text" className='inputLine' placeholder='Insert Your First Name' name='firstName' onChange={handleChange}/>
                  </div>
                  <div className="col">
                  <label className='formLabel'>Last Name</label><br/>
                  <input type="text"  className='inputLine' placeholder='Insert Your Last Name' name='lastName' onChange={handleChange} required/>
                  </div>
                  <div className="col">
                  <label className='formLabel'>Contact Number</label><br/>
                  <input type="text"  className='inputLine' placeholder='Insert Your Contact Number' name='phone' onChange={handleChange} required/>
                  </div>
                  <div className="col">
                  <label className='formLabel'>E-mail</label><br/>
                  <input type="text"  className='inputLine' placeholder='Insert Your E-mail' name='email' onChange={handleChange} required/>
                  </div>
                  <div className="col">
                  <label className='formLabel'>Address</label><br/>
                  <textarea type="text"  className='textArea' placeholder='Insert Your Address' name='address' onChange={handleChange} required/>
                  </div>
                  <div className="col">
                  <label className='formLabel'>State</label><br/>
                  <select value={state} onChange={ handleSelect} className="inputLine" type="text" name='state' required>
                    <option disabled={true} value="">Please Choose One</option>
                    <option value="Johor">Johor</option>
                    <option value="Kedah">Kedah</option>
                    <option value="Kelantan">Kelantan</option>
                    <option value="Melaka">Melaka</option>
                    <option value="Negeri Sembilan">Negeri Sembilan</option>
                    <option value="Pahang">Pahang</option>
                    <option value="Perak">Perak</option>
                    <option value="Perlis">Perlis</option>
                    <option value="Pulau Pinang">Pulau Pinang</option>
                    <option value="Sabah">Sabah</option>
                    <option value="Sarawak">Sarawak</option>
                    <option value="Selangor">Selangor</option>
                    <option value="Terrengganu">Terrengganu</option>
                    <option value="Kuala Lumpur">Kuala Lumpur</option>
                    <option value="Labuan">Labuan</option>
                    <option value="Putrajaya">Putrajaya</option>
                  </select>
                  </div>
                  <div className="col">
                  <label className='formLabel'>Postal Code</label><br/>
                  <input type="text"  className='inputLine' placeholder='Insert Your Postal Code' name='postal' onChange={handleChange} required/>
                  </div>

                  <button onClick={checkTwo} type="submit" className='nextButton buttonMargin'>Next</button>
                </div>
              </>
            }

            {active == "fourth" &&
              <>
                <img src={CalendarIcon} className='icon'/>
                <img src={PhoneIcon} className='icon' style={{ background:'grey',borderRadius:'10px' }}/>

                <h1 className='contactInformation'>Contact Information</h1>

                <div className='row'>
                  <div className="col">
                  <label className='leftText'>First Name</label>
                  <label className='rightText'>{inputs.firstName}</label>
                  <br/>
                  <label className='leftText'>Last Name</label>
                  <label className='rightText'>{inputs.lastName}</label>
                  <br/>
                  <label className='leftText'>E-mail</label>
                  <label className='rightText'>{inputs.email}</label>
                  <br/>
                  <label className='leftText'>Contact Number</label>
                  <label className='rightText'>{inputs.phone}</label>
                  <br/>
                  <label className='leftText'>Address</label>
                  <label className='rightText'>{inputs.address}</label>
                  <br/>
                  <label className='leftText'>Postal Code</label>
                  <label className='rightText'>{inputs.postal}</label>
                  <br/>
                  <label className='leftText'>State</label>
                  <label className='rightText'>{inputs.state}</label>
                  <br/>
                  <label className='leftText'>Event</label>
                  <label className='rightText'>{location.state.event.eventTitle}</label>
                  <br/>
                  <label className='leftText'>Ticket Quantity</label>
                  <label className='rightText'>{inputs.ticketQuantity}</label>
                  <br/>
                  <label className='leftText'>Your Username</label>
                  <label className='rightText'>{currentUser.username}</label>
                  <br/>
                  <label className='leftText'>Username Two</label>
                  <label className='rightText'>{inputs.usernameTwo}</label>
                  <br/>
                  {inputs.usernameThree &&
                  <>
                  <label className='leftText'>Username Three</label>
                  <label className='rightText'>{inputs.usernameThree}</label>
                  </>
                  }
                  <br/>
                  {inputs.usernameFour &&
                  <>
                  <label className='leftText'>Username Four</label>
                  <label className='rightText'>{inputs.usernameFour}</label>
                  </>
                  }
                  </div>
                </div>
                <button className='nextButton' onClick={()=>{setActive("six")}}>Confirm</button>
                <button className='nextButton buttonMargin' onClick={()=>{setActive("seven")}}>Back</button>
              </>
            }

            {active == 'six' &&
              <StripeCard 
                price={location.state.event.price * 100} 
                firstName={inputs.firstName} 
                lastName={inputs.lastName} 
                phone={inputs.phone} 
                email={inputs.email} 
                address={inputs.address} 
                state={inputs.state} 
                postal={inputs.postal} 
                ticketQuantity={inputs.ticketQuantity} 
                date={moment(inputs.date).format('YYYY-MM-DD')}
                uid={currentUser.id} 
                uidTwo={checkUsernameOne.id}
                username={currentUser.username}
                usernameTwo={inputs.usernameTwo}
                eventId={location.state.event.id}
                eventTitle={location.state.event.eventTitle}
                eventStartTime={location.state.event.eventStartTime}
                eventEndTime={location.state.event.eventEndTime}
                active={data}
                image={location.state.event.image}
                location={location.state.event.location}
              />
            }
            </div>
          </div>
        </div>
      </div>

      <div className='mobile'>
        <div className='containerOne'>
          <div className='inline containerLeft'>
            <div className='containerTicket'>
              <img src={LogoCircle} className='logoCircle'/>
              <h1 className='eventLocation'>{location.state.event.location}</h1>
              <img src={location.state.event.image} className='eventImage'/>
              <h1 className='eventTitle'>{location.state.event.eventTitle}</h1>
              <p className='eventDescription'>{location.state.event.description}</p>
              <h1 className='containerOneHThree inline'>Price Worth</h1><span className='span inline'>RM{location.state.event.priceWorth}</span><br/>
              <h1 className='containerOneHThree inline' style={{ verticalAlign:'top' }}>Time</h1>
              <span className='span inline' style={{ verticalAlign:'bottom' }}>
                  {location.state.event.availableMonday?<p className='inline'>Monday,</p>:null}
                  {location.state.event.availableTuesday?<p className='inline'>Tuesday,</p>:null}
                  {location.state.event.availableWednesday?<p className='inline'>Wednesday,</p>:null}
                  {location.state.event.availableThursday?<p className='inline'>Thursday,</p>:null}
                  {location.state.event.availableFriday?<p className='inline'>Friday,</p>:null}
                  {location.state.event.availableSaturday?<p className='inline'>Saturday,</p>:null}
                  {location.state.event.availableSunday?<p className='inline'>Sunday,</p>:null}<br/>
                  {location.state.event.eventStartTime} until {location.state.event.eventEndTime}
              </span>
            </div>
          </div>

          <div className='inline containerRight'>
            <div className='containerInformation'>
            {active==='second'&&
            <>
              <img src={CalendarIcon} className='icon' style={{ background:'grey',borderRadius:'10px' }}/>
              <img src={PhoneIcon} className='icon'/>
              <h1 className='ticketQuantity'>Ticket Quantity</h1>
              <label className='ticketQuantityTwo'>Number of participant</label>
              <button className='decBtn' type='button' onClick={() => decrementCount()}> {"<"}</button>
              <input className='ticketInput' type='text' value={ticketQuantity}/>
              <button className='incBtn' type='button' onClick={() => incrementCount()}> {">"}</button>

              <h1 className='scheduleEvent'>Schedule Event</h1>
              <Calendar 
                  onChange={onChange}
                  view='month'
                  maxDetail='month'
                  minDetail='month'
                  tileDisabled={({ date }) => 
                  date.getDay()===(location.state.event.availableMonday?null:1)||
                  date.getDay()===(location.state.event.availableTuesday?null:2)||
                  date.getDay()===(location.state.event.availableWednesday?null:3)||
                  date.getDay()===(location.state.event.availableThursday?null:4)||
                  date.getDay()===(location.state.event.availableFriday?null:5)||
                  date.getDay()===(location.state.event.availableSaturday?null:6)||
                  date.getDay()===(location.state.event.availableSunday?null:0)||
                  date < new Date()
                  }
                  showFixedNumberOfWeeks
              />

              <button className='nextButton' onClick={buttonOne}>Next</button>
            </>
            }

            {active=='third'&&
              <>
                <img src={CalendarIcon} className='icon'/>
                <img src={PhoneIcon} className='icon' style={{ background:'grey',borderRadius:'10px' }}/>

                <h1 className='contactInformation'>Contact Information</h1>
                <h1 className='contactInformationTwo'>You are required to fill in every field in order to proceed.</h1>

                {ticketQuantity==2 &&
                  <>
                    <div className="row">
                      <div className="col">
                      <label className='formLabel'>Your Username</label><br/>
                      <input type="text" className='inputLine' defaultValue={currentUser.username} name='username' disabled/>
                      </div>
                      <div className="col">
                      <label className='formLabel'>Username Two</label><br/>
                      <input type="text"  className='inputLine' placeholder='Insert Second Username' name='usernameTwo' onChange={handleChange} required/>
                      </div>
                    </div>
                    <button onClick={check} type="submit" className='nextButton'>Next</button>
                  </>
                }
                {ticketQuantity==3 &&
                  <>
                    <div className="row">
                      <div className="col">
                      <label className='formLabel'>Your Username</label><br/>
                      <input type="text" className='inputLine' defaultValue={currentUser.username} name='username' disabled/>
                      </div>
                      <div className="col">
                      <label className='formLabel'>Username Two</label><br/>
                      <input type="text"  className='inputLine' placeholder='Insert Second Username' name='usernameTwo' onChange={handleChange} required/>
                      </div>
                      <div className="col">
                      <label className='formLabel'>Username Three</label><br/>
                      <input type="text"  className='inputLine' placeholder='Insert Third Username' name='usernameThree' onChange={handleChange} required/>
                      </div>
                    </div>
                    <button onClick={check} type="submit" className='nextButton'>Next</button>
                  </>
                }
                {ticketQuantity==4 &&
                  <>
                    <div className="row">
                      <div className="col">
                      <label className='formLabel'>Your Username</label><br/>
                      <input type="text" className='inputLine' defaultValue={currentUser.username} name='username' disabled/>
                      </div>
                      <div className="col">
                      <label className='formLabel'>Username Two</label><br/>
                      <input type="text"  className='inputLine' placeholder='Insert Second Username' name='usernameTwo' onChange={handleChange} required/>
                      </div>
                      <div className="col">
                      <label className='formLabel'>Username Three</label><br/>
                      <input type="text"  className='inputLine' placeholder='Insert Third Username' name='usernameThree' onChange={handleChange} required/>
                      </div>
                      <div className="col">
                      <label className='formLabel'>Username Four</label><br/>
                      <input type="text"  className='inputLine' placeholder='Insert Fourth Username' name='usernameFour' onChange={handleChange} required/>
                      </div>
                    </div>
                    <button onClick={check} type="submit" className='nextButton'>Next</button>
                  </>
                }
              </>
            }

            {active == 'seven' &&
              <>
                <img src={CalendarIcon} className='icon'/>
                <img src={PhoneIcon} className='icon' style={{ background:'grey',borderRadius:'10px' }}/>

                <h1 className='contactInformation'>Contact Information</h1>
                <h1 className='contactInformationTwo'>You are required to fill in every field in order to proceed.</h1>
                
                <div className="row">
                  <div className="col">
                  <label className='formLabel'>First Name</label><br/>
                  <input type="text" className='inputLine' placeholder='Insert Your First Name' name='firstName' onChange={handleChange}/>
                  </div>
                  <div className="col">
                  <label className='formLabel'>Last Name</label><br/>
                  <input type="text"  className='inputLine' placeholder='Insert Your Last Name' name='lastName' onChange={handleChange} required/>
                  </div>
                  <div className="col">
                  <label className='formLabel'>Contact Number</label><br/>
                  <input type="text"  className='inputLine' placeholder='Insert Your Contact Number' name='phone' onChange={handleChange} required/>
                  </div>
                  <div className="col">
                  <label className='formLabel'>E-mail</label><br/>
                  <input type="text"  className='inputLine' placeholder='Insert Your E-mail' name='email' onChange={handleChange} required/>
                  </div>
                  <div className="col">
                  <label className='formLabel'>Address</label><br/>
                  <textarea type="text"  className='textArea' placeholder='Insert Your Address' name='address' onChange={handleChange} required/>
                  </div>
                  <div className="col">
                  <label className='formLabel'>State</label><br/>
                  <select value={state} onChange={ handleSelect} className="inputLine" type="text" name='state' required>
                    <option disabled={true} value="">Please Choose One</option>
                    <option value="Johor">Johor</option>
                    <option value="Kedah">Kedah</option>
                    <option value="Kelantan">Kelantan</option>
                    <option value="Melaka">Melaka</option>
                    <option value="Negeri Sembilan">Negeri Sembilan</option>
                    <option value="Pahang">Pahang</option>
                    <option value="Perak">Perak</option>
                    <option value="Perlis">Perlis</option>
                    <option value="Pulau Pinang">Pulau Pinang</option>
                    <option value="Sabah">Sabah</option>
                    <option value="Sarawak">Sarawak</option>
                    <option value="Selangor">Selangor</option>
                    <option value="Terrengganu">Terrengganu</option>
                    <option value="Kuala Lumpur">Kuala Lumpur</option>
                    <option value="Labuan">Labuan</option>
                    <option value="Putrajaya">Putrajaya</option>
                  </select>
                  </div>
                  <div className="col">
                  <label className='formLabel'>Postal Code</label><br/>
                  <input type="text"  className='inputLine' placeholder='Insert Your Postal Code' name='postal' onChange={handleChange} required/>
                  </div>

                  <button onClick={checkTwo} type="submit" className='nextButton buttonMargin'>Next</button>
                </div>
              </>
            }

            {active == "fourth" &&
              <>
                <img src={CalendarIcon} className='icon'/>
                <img src={PhoneIcon} className='icon' style={{ background:'grey',borderRadius:'10px' }}/>

                <h1 className='contactInformation'>Contact Information</h1>

                <div className='row'>
                  <div className="col">
                  <label className='leftText'>First Name</label>
                  <label className='rightText'>{inputs.firstName}</label>
                  <br/>
                  <label className='leftText'>Last Name</label>
                  <label className='rightText'>{inputs.lastName}</label>
                  <br/>
                  <label className='leftText'>E-mail</label>
                  <label className='rightText'>{inputs.email}</label>
                  <br/>
                  <label className='leftText'>Contact Number</label>
                  <label className='rightText'>{inputs.phone}</label>
                  <br/>
                  <label className='leftText'>Address</label>
                  <label className='rightText'>{inputs.address}</label>
                  <br/>
                  <label className='leftText'>Postal Code</label>
                  <label className='rightText'>{inputs.postal}</label>
                  <br/>
                  <label className='leftText'>State</label>
                  <label className='rightText'>{inputs.state}</label>
                  <br/>
                  <label className='leftText'>Event</label>
                  <label className='rightText'>{location.state.event.eventTitle}</label>
                  <br/>
                  <label className='leftText'>Ticket Quantity</label>
                  <label className='rightText'>{inputs.ticketQuantity}</label>
                  <br/>
                  <label className='leftText'>Your Username</label>
                  <label className='rightText'>{currentUser.username}</label>
                  <br/>
                  <label className='leftText'>Username Two</label>
                  <label className='rightText'>{inputs.usernameTwo}</label>
                  <br/>
                  {inputs.usernameThree &&
                  <>
                  <label className='leftText'>Username Three</label>
                  <label className='rightText'>{inputs.usernameThree}</label>
                  </>
                  }
                  <br/>
                  {inputs.usernameFour &&
                  <>
                  <label className='leftText'>Username Four</label>
                  <label className='rightText'>{inputs.usernameFour}</label>
                  </>
                  }
                  </div>
                </div>
                <button className='nextButton' onClick={()=>{setActive("six")}}>Confirm</button>
                <button className='nextButton buttonMargin' onClick={()=>{setActive("seven")}}>Back</button>
              </>
            }

            {active == 'six' &&
              <StripeCard 
                price={location.state.event.price * 100} 
                firstName={inputs.firstName} 
                lastName={inputs.lastName} 
                phone={inputs.phone} 
                email={inputs.email} 
                address={inputs.address} 
                state={inputs.state} 
                postal={inputs.postal} 
                ticketQuantity={inputs.ticketQuantity} 
                date={moment(inputs.date).format('YYYY-MM-DD')}
                uid={currentUser.id} 
                uidTwo={checkUsernameOne.id}
                username={currentUser.username}
                usernameTwo={inputs.usernameTwo}
                eventId={location.state.event.id}
                eventTitle={location.state.event.eventTitle}
                eventStartTime={location.state.event.eventStartTime}
                eventEndTime={location.state.event.eventEndTime}
                active={data}
                image={location.state.event.image}
                location={location.state.event.location}
              />
            }
            </div>
          </div>
        </div>
      </div>
      </>
      ) 
      : 
      (
        setTimeout(() => {
          navigate('/login')
        }, 0)
      )
    }
    </motion.div>
                                                       
  )
}
