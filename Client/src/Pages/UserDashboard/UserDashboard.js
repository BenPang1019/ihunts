import React, { useState } from 'react'
import Sidebar from '../../Components/Navigation/sidebar'
import './UserDashboard.css'
import Ipoh from '../../SVG/Ipoh.png'

import Avatar from '@mui/material/Avatar';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import dashIcon1 from '../../SVG/dashIcon1.svg'
// import dashIcon2 from '../../SVG/dashIcon2.svg'
// import dashIcon3 from '../../SVG/dashIcon3.svg'
// import dashIcon4 from '../../SVG/dashIcon4.svg'
// import dashIcon5 from '../../SVG/dashIcon5.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SwiperCore from "swiper/core";


export const UserDashboard = () => {
  const [active,setActive] = useState('first');

  return (
    <body className='userdashboard'>
      <nav className='nav-menu active'>
          <ul className='nav-menu-items' style={{listStyleType:'none'}}>
            <li className='navbar-toggle'>
            <Avatar  src={Ipoh} sx={{ width: 56, height: 56 }}/>
            &nbsp;&nbsp;&nbsp;Jimmy<br/>
            &nbsp;&nbsp;&nbsp;Bronze Hunter
            </li>
            <br/>
            <li className="nav-item">
                <a className="nav-link" onClick={()=>setActive("first")} style={{paddingTop:'1rem'}}>Home</a>
            </li>
            <br/>
            <li className="nav-item">
                <a className="nav-link" onClick={()=>setActive("second")} style={{paddingTop:'1rem'}}>My IEC Progress</a>
            </li>
            <br/>
            <li className="nav-item">
                <a className="nav-link" onClick={()=>setActive("third")} style={{paddingTop:'1rem'}}>My Rewards Earned</a>
            </li>
            <br/>
            <li className="nav-item">
                <a className="nav-link" onClick={()=>setActive("fourth")} style={{paddingTop:'1rem'}}>My IEC Ticket</a>
            </li>
            <br/>
            <br/>
            <br/>
            <li>
                <a className="nav-link" onClick={()=>setActive("five")} style={{paddingTop:'1rem'}}>My Team</a>
            </li>
            <li className='navbar-toggle'>
            <Avatar  src={Ipoh} />
            &nbsp;&nbsp;&nbsp;Jimmy<br/>
            </li>
            <li className='navbar-toggle'>
            <Avatar  src={Ipoh} />
            &nbsp;&nbsp;&nbsp;Woo<br/>
            </li>
            <li className='navbar-toggle'>
            <Avatar  src={Ipoh} />
            &nbsp;&nbsp;&nbsp;Elwen<br/>
            </li>
          </ul>
        </nav>

      {active === "first" &&
      <div>
      <div class="text-caption" style={{marginLeft:'25rem',marginTop:'4rem'}}>
        <p>Continue hunting</p>
      </div>
      <div style={{backgroundColor:'#ffffff',width:'65.6rem',height:'12.5rem',marginLeft:'25rem',borderRadius:'5%'}}>
        {/* <img src={dashIcon1} style={{width:'15%',borderTopLeftRadius:"5%",borderBottomLeftRadius:"5%",backgroundColor:'yellow'}}/> */}
        <img src={Ipoh} style={{width:'29%',borderTopLeftRadius:"5%",borderBottomLeftRadius:"5%"}}/>
      <div style={{color:'black',backgroundColor:'',marginLeft:'22rem',marginTop:'-12rem'}}>
        <b>Heritage Hunt - Quest # 0342</b><br/>
        <p style={{opacity:'0.5'}}>My IEC Progress</p><br/><br/><br/>
        <ProgressBar variant="warning" now={30} style={{width:'40rem'}} />
        <p style={{opacity:'0.8'}}>10 Days 3 hours 11 minutes left</p>
      </div>
      </div>

      <div class="text-caption" style={{marginLeft:'25rem'}}>
        <p>My IEC</p>
      </div>
      <div style={{backgroundColor:'white',width:'18rem',height:'19rem',marginLeft:'25rem',borderRadius:'5%',border:'none'}}>
        <img src={Ipoh} style={{width:'100%',borderTopLeftRadius:"5%",borderTopRightRadius:"5%"}}/>
      <div style={{marginLeft:'1rem'}}>
        <b>5458 points</b><br/>
        earned  <br/><br/>
        <p style={{opacity:'0.8'}}>My Rewards Earned</p>
      </div>
      </div>
      <div style={{backgroundColor:'white',width:'18rem',height:'19rem',marginLeft:'49rem',marginTop:'-19rem',borderRadius:'5%',border:'none',position:"static"}}>
        <img src={Ipoh} style={{width:'100%',borderTopLeftRadius:"5%",borderTopRightRadius:"5%"}}/>
      <div style={{marginLeft:'1rem'}}>
        <b>Heritage Hunt</b><br/>
        1 available  <br/><br/>
        <p style={{opacity:'0.8'}}>My IEC Ticket</p>
      </div>
      </div>
      <div style={{backgroundColor:'white',width:'18rem',height:'19rem',marginLeft:'73rem',marginTop:'-19rem',borderRadius:'5%',border:'none'}}>
        <div style={{backgroundColor:'$ffcc4d', width:'100%'}}/>
        <img src={Ipoh} style={{width:'100%',borderTopLeftRadius:"5%",borderTopRightRadius:"5%"}}/>
      <div style={{marginLeft:'1rem'}}>
        <b>MoNash Hunter</b><br/>
        4 members  <br/><br/>
        <p style={{opacity:'0.8'}}>My Team</p>
      </div>
      </div>
      </div>
      }
    


      {active === "second" &&
      <div>
        <div class="text-caption" style={{marginLeft:'25rem',marginTop:'4rem'}}>
          <p>My IEC Progress</p>
        </div>
        <div style={{backgroundColor:'#ffffff',width:'65.6rem',height:'12.5rem',marginLeft:'25rem',borderRadius:'5%'}}>
          <img src={Ipoh} style={{width:'29%',borderTopLeftRadius:"5%",borderBottomLeftRadius:"5%"}}/>
        <div style={{color:'black',backgroundColor:'',marginLeft:'22rem',marginTop:'-12rem'}}>
          <b>Heritage Hunt - Quest # 0342</b><br/>
          <p style={{opacity:'0.5'}}>My IEC Progress</p><br/><br/><br/>
          <ProgressBar variant="warning" now={30} style={{width:'40rem'}} />
          <p style={{opacity:'0.8'}}>10 Days 3 hours 11 minutes left</p>
        </div>
        </div>
        <div class="text-caption" style={{marginLeft:'25rem'}}>
          <p>Treasure Quests </p>
        </div>
        <div style={{width:'1050px',height:'200px',marginLeft:'25rem'}}>
          <li className='navbar-toggle'>
            <Avatar  src={Ipoh} />
            <p style={{color:'white',display:'inline',marginLeft:'3rem'}}><b>Quest # 3042</b></p>
            <p style={{color:'#ffcc4d',display:'inline',marginLeft:'3rem'}}>Solving</p>
          </li>
          <li className='navbar-toggle'>
            <Avatar  src={Ipoh} />
            <p style={{color:'white',display:'inline',marginLeft:'3rem'}}><b>Quest # 3042</b></p>
            <p style={{color:'#ffcc4d',display:'inline',marginLeft:'3rem'}}>Solving</p>
          </li>
          <li className='navbar-toggle'>
            <Avatar  src={Ipoh} />
            <p style={{color:'white',display:'inline',marginLeft:'3rem'}}><b>Quest # 3042</b></p>
            <p style={{color:'#ffcc4d',display:'inline',marginLeft:'3rem'}}>Solving</p>
          </li>
        </div>
      </div>
      }

      {active === "third" &&
      <div>
        <div class="text-caption" style={{marginLeft:'25rem',marginTop:'4rem'}}>
          <p>Rewards Earned</p>
        </div>
        <div style={{backgroundColor:'#ffffff',width:'65.6rem',height:'12.5rem',marginLeft:'25rem',borderRadius:'5%'}}>
          <img src={Ipoh} style={{width:'29%',borderTopLeftRadius:"5%",borderBottomLeftRadius:"5%"}}/>
        <div style={{color:'black',backgroundColor:'',marginLeft:'22rem',marginTop:'-12rem'}}>
          <b>5458 points</b><br/>
          <p style={{opacity:'0.5'}}>earned</p><br/><br/><br/>
          <ProgressBar variant="warning" now={30} style={{width:'40rem'}} />
          <p style={{opacity:'0.8'}}>4542 to become silver hunter</p>
        </div>
        </div>
        <div class="text-caption" style={{marginLeft:'25rem'}}>
            <p>Popular Deals</p>
          </div>
          <div style={{backgroundColor:'white',width:'18rem',height:'19rem',marginLeft:'25rem',borderRadius:'5%',border:'none'}}>
            <img src={Ipoh} style={{width:'100%',borderTopLeftRadius:"5%",borderTopRightRadius:"5%"}}/>
          <div style={{marginLeft:'1rem'}}>
            <b>RM10 off on Oxwhite</b><br/>
            Oxwhite  <br/><br/>
            <p style={{opacity:'0.8'}}>1200 points</p>
          </div>
          </div>
          <div style={{backgroundColor:'white',width:'18rem',height:'19rem',marginLeft:'49rem',marginTop:'-19rem',borderRadius:'5%',border:'none',position:"static"}}>
            <img src={Ipoh} style={{width:'100%',borderTopLeftRadius:"5%",borderTopRightRadius:"5%"}}/>
          <div style={{marginLeft:'1rem'}}>
            <b>Voucher worth RM20</b><br/>
            Cake Rush  <br/><br/>
            <p style={{opacity:'0.8'}}>1200 points</p>
          </div>
          </div>
          <div style={{backgroundColor:'white',width:'18rem',height:'19rem',marginLeft:'73rem',marginTop:'-19rem',borderRadius:'5%',border:'none'}}>
            <img src={Ipoh} style={{width:'100%',borderTopLeftRadius:"5%",borderTopRightRadius:"5%"}}/>
          <div style={{marginLeft:'1rem'}}>
            <b>TGV Movie Ticket</b><br/>
            TGV Cinemas  <br/><br/>
            <p style={{opacity:'0.8'}}>1200 Points</p>
          </div>
          </div>
        </div>
      }

      {active === "fourth" &&
      <div>
      <div class="text-caption" style={{marginLeft:'25rem',marginTop:'4rem'}}>
        <p>My Ticket</p>
      </div>
      <div style={{backgroundColor:'#ffffff',width:'65.6rem',height:'12.5rem',marginLeft:'25rem',borderRadius:'5%'}}>
        <img src={Ipoh} style={{width:'29%',borderTopLeftRadius:"5%",borderBottomLeftRadius:"5%"}}/>
      <div style={{color:'black',backgroundColor:'',marginLeft:'22rem',marginTop:'-12rem'}}>
        <b>Purchased Ticket</b><br/>
        <p style={{opacity:'0.5'}}>1 available</p>
        <li style={{opacity:'0.8'}}>Heritage Hunt</li>
      </div>
      </div>
      <div class="text-caption" style={{marginLeft:'25rem'}}>
          <p>Join Others</p>
        </div>
        <div style={{backgroundColor:'white',width:'18rem',height:'19rem',marginLeft:'25rem',borderRadius:'5%',border:'none'}}>
          <img src={Ipoh} style={{width:'100%',borderTopLeftRadius:"5%",borderTopRightRadius:"5%"}}/>
        <div style={{marginLeft:'1rem'}}>
          <b>Hunt in the Sky</b><br/>
          Genting Highland  <br/><br/>
          <p style={{opacity:'0.8'}}>12 December 2022</p>
        </div>
        </div>
        <div style={{backgroundColor:'white',width:'18rem',height:'19rem',marginLeft:'49rem',marginTop:'-19rem',borderRadius:'5%',border:'none',position:"static"}}>
          <img src={Ipoh} style={{width:'100%',borderTopLeftRadius:"5%",borderTopRightRadius:"5%"}}/>
        <div style={{marginLeft:'1rem'}}>
          <b>Hunt by the Coast</b><br/>
          Kuantan <br/><br/>
          <p style={{opacity:'0.8'}}>12 December 2022</p>
        </div>
        </div>
        <div style={{backgroundColor:'white',width:'18rem',height:'19rem',marginLeft:'73rem',marginTop:'-19rem',borderRadius:'5%',border:'none'}}>
          <img src={Ipoh} style={{width:'100%',borderTopLeftRadius:"5%",borderTopRightRadius:"5%"}}/>
        <div style={{marginLeft:'1rem'}}>
          <b>Heritage Hunt 2.0</b><br/>
          Melaka  <br/><br/>
          <p style={{opacity:'0.8'}}>To be Confirmed</p>
        </div>
        </div>
      </div>
      }

      {active === "five" &&
      <div>
        <div class="text-caption" style={{marginLeft:'25rem',marginTop:'4rem'}}>
          <p>My Team</p>
        </div>
        <div style={{backgroundColor:'#ffffff',width:'65.6rem',height:'12.5rem',marginLeft:'25rem',borderRadius:'5%'}}>
          <img src={Ipoh} style={{width:'29%',borderTopLeftRadius:"5%",borderBottomLeftRadius:"5%"}}/>
        <div style={{color:'black',backgroundColor:'',marginLeft:'22rem',marginTop:'-12rem'}}>
          <b>MoNash Hunters</b><br/>
          <p style={{opacity:'0.5'}}>4 members with</p>
        <li style={{opacity:'0.5'}}>Elwen Chong</li>
        <li style={{opacity:'0.5'}}>Woon Lico</li>
        <li style={{opacity:'0.5'}}>Pang Zheng</li>
        </div>
        </div>
        <div class="text-caption" style={{marginLeft:'25rem', marginTop:'3rem'}}>
          <p>Manage Team </p>
        </div>
        <div style={{width:'1050px',height:'200px',marginLeft:'25rem'}}>
          <li className='navbar-toggle'>
            <Avatar  src={Ipoh} />
            <p style={{color:'white',display:'inline',marginLeft:'3rem'}}><b>Elwen Chong</b></p>
            <p style={{color:'#ffcc4d',display:'inline',marginLeft:'3rem'}}>Silver Hunter</p>
          </li>
          <li className='navbar-toggle'>
            <Avatar  src={Ipoh} />
            <p style={{color:'white',display:'inline',marginLeft:'3rem'}}><b>Woon Lico</b></p>
            <p style={{color:'#ffcc4d',display:'inline',marginLeft:'3rem'}}>Platinum Hunter</p>
          </li>
          <li className='navbar-toggle'>
            <Avatar  src={Ipoh} />
            <p style={{color:'white',display:'inline',marginLeft:'3rem'}}><b>Pang Zheng</b></p>
            <p style={{color:'#ffcc4d',display:'inline',marginLeft:'3rem'}}>Gold Hunter</p>
          </li>
        </div>
      </div>
      } 
    </body> 
  )
}

