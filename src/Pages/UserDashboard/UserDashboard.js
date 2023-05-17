import React, { useState,useContext,useEffect } from 'react'
import '../UserDashboard/UserDashboard.css'
import { Link,NavLink } from 'react-router-dom'
import Ipoh from '../../SVG/Profile.svg'
import { AuthContext } from "../../context/AuthContext";
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {motion} from "framer-motion"
import Team from '../../SVG/team.png'
import Point from '../../SVG/point.png'
import Hunt from '../../SVG/hunt.png'
import Ticket from '../../SVG/Ticket.png'

export const UserDashboard = ({backgroundColor}) => {
  const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
  });
  const navigate = useNavigate()
  const [user,setUser]=useState('')
  const [points,setPoints]=useState('')
  const [teamName,setTeamName]=useState('')
  const [ticket,setTicket]=useState([])
  const [team,setTeam]=useState([])
  const [ticketBook,setTicketBook]=useState([])
  const [teamMember,setTeamMember]=useState([])
  const [latestTicket, setLatestTicket] = useState(null);
  const { currentUser, logout } = useContext(AuthContext);


  const id = currentUser?currentUser.id:null
  const uid = currentUser?currentUser.id:null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/auth/getTeamId/${id}`); 
        setUser(res.data[0].teamId);
      } catch (err) {
       
      }
    };
    fetchData();
  }, []);
  
  const teamId= user

  useEffect(() => {
    const fetchData = async () => {
        try {
        const res = await axiosInstance.get(`/auth/userTicket/${uid}`); 
            setTicket(res.data);
        } catch (err) {
        }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (ticket.length > 0) {
      const sortedTickets = [...ticket].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setLatestTicket(sortedTickets[0]);
    }
  }, [ticket]);

  const displayTicket = latestTicket ? (
    <div className='' key={latestTicket.id}>
      <h4 className='text'>{latestTicket.eventTitle}</h4>
    </div>
  ) : (
    <div className=''>
      <h4 className='text'>No ticket available</h4>
    </div>
  );

  
  const displayTicketTwo = ticket
    .map(ticket => {
      return(
        <div className='' key={ticket.uid}>
          <li className='liTwo'>{ticket.eventTitle}</li>
        </div>
      )
  })


  useEffect(() => {
    const fetchData = async () => {
        try {
        const res = await axiosInstance.get(`/auth/totalTeamMember/${teamId}`); 
            setTeam(res.data);
        } catch (err) {

        }
    };
    fetchData();
  }, []);

  function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p className=''>{str.replaceAll(/\s/g,'').replaceAll(/[.,\/#!$%\^&\*;[\]:{}=\-_`~()""COUNT]/g,"")} Member</p>);
  }

  function NewlineTextTwo(props) {
    const text = props.text;
    return text.split('\n').map(str => <p className=''>{str.replaceAll(/\s/g,'').replaceAll(/[.,\/#!$%\^&\*;[\]:{}=\-_`~()""COUNT]/g,"")} Member With</p>);
  }

  useEffect(() => {
    const fetchData = async () => {
        try {
        const res = await axiosInstance.get(`/auth/userTeamMember/${teamId}`); 
            setTeamMember(res.data);
        } catch (err) {

        }
    };
    fetchData();
  }, []);

  const displayTeamMemberTwo = teamMember
    .map(teamMember => {
      return(
        <div>
          <li className='liTwo'>{teamMember.username}</li>
        </div>
      )
  })
  
  const [active,setActive] = useState('first');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/auth/getUserPersonalData/${id}`); 
        setPoints(res.data[0].points);
        setTeamName(res.data[0].teamId);
      } catch (err) {
       
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        try {
        const res = await axiosInstance.get(`/auth/totalBookTicket/${uid}`); 
            setTicketBook(res.data);
        } catch (err) {

        }
    };
    fetchData();
  }, []);

  function NewlineTextThree(props) {
    const text = props.text;
    return text.split('\n').map(str => <p className=''>{str.replaceAll(/\s/g,'').replaceAll(/[.,\/#!$%\^&\*;[\]:{}=\-_`~()""COUNT]/g,"")} Available</p>);
  }
  
  return (
    <motion.div className='userDashboard' initial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }} style={{ backgroundColor }}>
    {currentUser ? 
      (
        <span> 
        <div className='web' >
          <div className='sideBar inline'>
            <div className='containerHeight'>
              <img src={Ipoh} className='avatar inline'/>
              <h1 className='name inline'>{currentUser.username}</h1>
            </div>

            <ul className='ulContainer'>
              <li className={`li ${active === 'first' ? 'active' : ''}`} onClick={()=>{setActive('first')}}>My Hunts</li>
              <li className={`li ${active === 'second' ? 'active' : ''}`} onClick={()=>{setActive('second')}}>My Rewards Earned</li>
              <li className={`li ${active === 'third' ? 'active' : ''}`} onClick={()=>{setActive('third')}}>My IEC Ticket</li>
              <li className={`li ${active === 'fourth' ? 'active ' : ''}`} onClick={()=>{setActive('fourth')}}>My Team</li>
            </ul>

            <button className='logoutButton' onClick={logout}>LOGOUT</button>
          </div>

          <div className='containerOne inline'>
          {active == 'first' &&
            <>
              <h1 className='containerOneHOne'>My IEC</h1>
              <div className='contentContainer inline'>
                <div className='imageBackGround'>
                  <img src={Point} className='icon'/>
                </div>
                <h4 className='text'>{points?points:0} Points</h4>
                <h4 className='textTwo'>earned</h4>
                <h4 className='textThree' onClick={()=>{setActive('second')}} style={{ cursor:'pointer' }}>My Rewards Earned</h4>
              </div>

              <div className='contentContainer inline'>
                <div className='imageBackGround'>
                  <img src={Hunt} className='icon'/>
                </div>
                <div className='height'>
                {displayTicket}
                <h4 className='textTwo'><NewlineTextThree text={JSON.stringify(ticketBook)} /></h4>
                </div>
                <h4 className='textThree' onClick={()=>{setActive('third')}} style={{ cursor:'pointer' }}>My IEC Ticket</h4>
              </div>

              <div className='contentContainer inline'>
                <div className='imageBackGround'>
                  <img src={Team} className='icon'/>
                </div>
                <h4 className='text'>{teamName?teamName:'No Team'}</h4>
                <h4 className='textTwo'><NewlineText text={JSON.stringify(team)}/></h4>
                <h4 className='textThree' onClick={()=>{setActive('fourth')}} style={{ cursor:'pointer' }}>My Team</h4>
              </div>
            </>  
          }

          {active == 'second' &&
            <>
              <h1 className='containerOneHOne'>Rewards Earned</h1>
              <div className='contentContainerTwo'>
                <div className='imageBackGroundTwo inline'>
                  <img src={Point} className='iconTwo'/>
                </div>

                <div className='inline' >
                  <h1 className='textFour'>{points?points:0} Points</h1>
                  <h1 className='textFive'>earned</h1>
                </div>
              </div>

              <h1 className='containerOneHOne'>Popular Deals</h1>
              <div className='contentContainer inline' style={{ marginBottom:'5rem' }}>
                <div className='imageBackGround'>
                    <img src={Hunt} className='icon'/>
                  </div>
                  <h4 className='text'>RM10 off on Oxwhite</h4>
                  <h4 className='textTwo'>Oxwhite</h4>
                  <h4 className='textThree'>1200 Points</h4>
              </div>
              <div className='contentContainer inline'>
                <div className='imageBackGround'>
                    <img src={Hunt} className='icon'/>
                  </div>
                  <h4 className='text'>RM10 off on Oxwhite</h4>
                  <h4 className='textTwo'>Oxwhite</h4>
                  <h4 className='textThree'>1200 Points</h4>
              </div>
              <div className='contentContainer inline'>
                  <div className='imageBackGround'>
                    <img src={Hunt} className='icon'/>
                  </div>
                  <h4 className='text'>RM10 off on Oxwhite</h4>
                  <h4 className='textTwo'>Oxwhite</h4>
                  <h4 className='textThree'>1200 Points</h4>
              </div>
            </>
          }

          {active=='third'&&
          <>
            <h1 className='containerOneHOne'>My Ticket</h1>
            <div className='contentContainerTwo'>
              <div className='imageBackGroundTwo inline'>
                <img src={Ticket} className='iconTwo'/>
              </div>

              <div className='inline' style={{ verticalAlign:'middle' }}>
              <div className='heightTwo'>
                <h1 className='textFour'>Purchased Tickets</h1>
                <h1 className='textFive'><NewlineTextThree text={JSON.stringify(ticketBook)} /></h1>
              </div>
              <div className='gridContainer'>
                {displayTicketTwo}
              </div>
              </div>
            </div>

            <h1 className='containerOneHOne'>Join Others</h1>
            <div className='contentContainer inline' style={{ marginBottom:'5rem' }}>
              <div className='imageBackGround'>
                  <img src={Hunt} className='icon'/>
                </div>
                <h4 className='text'>Hunt in the Sky</h4>
                <h4 className='textTwo'>Genting Highland</h4>
            </div>
            <div className='contentContainer inline'>
              <div className='imageBackGround'>
                  <img src={Hunt} className='icon'/>
                </div>
                <h4 className='text'>Hunt in the Sky</h4>
                <h4 className='textTwo'>Genting Highland</h4>
            </div>
            <div className='contentContainer inline'>
                <div className='imageBackGround'>
                  <img src={Hunt} className='icon'/>
                </div>
                <h4 className='text'>Hunt in the Sky</h4>
                <h4 className='textTwo'>Genting Highland</h4>
            </div>
          </>
          }

          {active=='fourth'&&
          <>
            <h1 className='containerOneHOne'>My Team</h1>
            <div className='contentContainerTwo'>
              <div className='imageBackGroundTwo inline'>
                <img src={Team} className='iconTwo'/>
              </div>

              <div className='inline' style={{ verticalAlign:'middle' }}>
                <h1 className='textFour' style={{ marginTop:'3rem' }}>{teamName?teamName:'No Team'}</h1>
                <h1 className='textFive' style={{ opacity:'0.5' }}><NewlineTextTwo text={JSON.stringify(team)} /></h1>
                <div className='gridContainer'>
                  {displayTeamMemberTwo}
                </div>
              </div>
            </div>
          </>
          }
          </div>
        </div>

        <div className='mobile'>

        </div>

        </span>    
        ) 
        :  
        (
          setTimeout(() => {
            navigate('/login')
          }, 10)
        )
    }
    </motion.div>
  )
}

