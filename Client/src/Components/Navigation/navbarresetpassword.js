/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Navigation/navbar.css'
import Logo from '../Navigation/IECLogo.svg'
import { Link } from 'react-router-dom'
import '../Navigation/navbarresetpassword.css'
import $ from 'jquery'

export default function NavbarReset() {
    return (
        <div className="resetnav" >
           <div className="web" >
                   <Link className='logo' to='/'>
                       <img
                           style={{ width: '8.5rem',marginTop:'3.5rem' }}
                           src={Logo}
                           alt="logo-iec"
                       />
                   </Link>
                   <p className="text">RESET PASSWORD</p>
           </div >

           <div className="mobile" >
                   <Link className='logo' to='/'>
                       <img
                           style={{ width: '8.5rem',marginTop:'3.5rem' }}
                           src={Logo}
                           alt="logo-iec"
                       />
                   </Link>
                   <p className="mobiletext">RESET PASSWORD</p>
           </div >
       </div > 
   )
}