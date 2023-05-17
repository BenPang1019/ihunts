import React,{useContext,useState,useEffect} from 'react'
import { Link,NavLink } from 'react-router-dom'
import '../Navigation/navbar.css'
import IECLogo from '../Navigation/IECLogo.svg'
import userIcon from '../../SVG/user account icon.svg'
import { AuthContext } from "../../context/AuthContext";
import MenuIcon from '../../SVG/Menu.svg'
import CloseIcon from '../../SVG/Close.svg'

export const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const [showMenu,setShowMenu] = useState(true)
  const [showContainer,setShowContainer] = useState('first')

  useEffect(() => {
    function handleScroll(event) {
      if (showMenu === false) {
        const container = document.getElementById("scrollContainer");
        if (container && container.contains(event.target)) {
          // The scroll event originated from inside the container
          return;
        }
        event.preventDefault();
      }
    }
  
    // Add event listener for mouse scroll
    document.addEventListener("wheel", handleScroll, { passive: false });
  
    // Add event listener for touch scroll
    document.addEventListener("touchmove", handleScroll, { passive: false });
  
    // Remove event listeners when component unmounts
    return () => {
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener("touchmove", handleScroll);
    };
  }, [showMenu]);

  return (
    <div className='navbarN'>
    <div className='web'>
        <Link to='/'><img src={IECLogo} className='IECLogo inlineN' /></Link>

        <ul className='ulContainer inlineN'>
          <li className='inlineN'>
            <Link className='navLink ' to='/' >Home</Link>
          </li>
          <li className='inlineN'>
            <Link className='navLink ' to='/about' >Who Is IEC</Link>
          </li>
          <li className='inlineN'>
            <Link className='navLink ' to='/thehunts' >The Hunts</Link>
          </li>
          <li className='inlineN'>
            <Link className='navLink ' to='/news' >News & Promo</Link>
          </li>
          <li className='inlineN'>
            <Link className='navLink ' to='/enquiry' >Enquiry</Link>
          </li>
        </ul>

        <div className='navbarButtonContainer inlineN'>
          <Link to='/thehunts'><button className='joinHuntButton'>Join The Hunt</button></Link>
          {currentUser ? (
          <Link to='/userdashboard'><img src={userIcon} className='userIconButton'/></Link>
          ):(
          <Link to='/login'><img src={userIcon} className='userIconButton'/></Link>    
          )}
        </div>
    </div>

    <div className='mobile'>
      <Link to='/'><img src={IECLogo} className='IECLogo' /></Link>
      {showMenu ?
        <img src={MenuIcon } className='iconMenuTwo' onClick={ ()=>{setShowMenu(!showMenu);setShowContainer('second')}}/>
        :
        <img src={CloseIcon} className='iconMenuTwo' onClick={ ()=>{setShowMenu(!showMenu);setShowContainer('third')}}/>
      }

      <div className={`navbarContainer ${showContainer=='second' ? 'navbarContainerShow' : ''} ${showContainer=='third' ? 'navbarContainerHide' : ''}`} style={showContainer=='first'?{display:'none'}:null}>
        <img src={IECLogo} className='IECLogoTwo' />
        <div className='scrollContainer' id="scrollContainer">  
        <ul className='ulContainer inlineN'>
          <li className='' style={{ marginTop:'4rem' }}>
            <Link className='navLink ' to='/' onClick={ ()=>{setShowMenu(!showMenu);setShowContainer('first');window.scrollTo(0,0)}}>Home</Link>
          </li>
          <li className=''>
            <Link className='navLink ' to='/about' onClick={ ()=>{setShowMenu(!showMenu);setShowContainer('first');window.scrollTo(0,0)}}>Who Is IEC</Link>
          </li>
          <li className=''>
            <Link className='navLink ' to='/thehunts' onClick={ ()=>{setShowMenu(!showMenu);setShowContainer('first');window.scrollTo(0,0)}}>The Hunts</Link>
          </li>
          <li className=''>
            <Link className='navLink ' to='/news' onClick={ ()=>{setShowMenu(!showMenu);setShowContainer('first');window.scrollTo(0,0)}}>News & Promo</Link>
          </li>
          <li className=''>
            <Link className='navLink ' to='/enquiry' onClick={ ()=>{setShowMenu(!showMenu);setShowContainer('first');window.scrollTo(0,0)}}>Enquiry</Link>
          </li>
        </ul>

        <div className='navbarButtonContainer '>
          <Link to='/thehunts' onClick={ ()=>{setShowMenu(!showMenu);setShowContainer('first');window.scrollTo(0,0)}}><button className='joinHuntButton'>Join The Hunt</button></Link>
          {currentUser ? (
          <Link to='/userdashboard' onClick={ ()=>{setShowMenu(!showMenu);setShowContainer('first');window.scrollTo(0,0)}}><img src={userIcon} className='userIconButton'/></Link>
          ):(
          <Link to='/login' onClick={ ()=>{setShowMenu(!showMenu);setShowContainer('first');window.scrollTo(0,0)}}><img src={userIcon} className='userIconButton'/></Link>    
          )}
        </div> 

      </div>
      </div>
    </div>
    </div>
  )
}
