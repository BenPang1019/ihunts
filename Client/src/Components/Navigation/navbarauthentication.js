/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Navigation/navbarauthentication.css'
import Logo from '../Navigation/IECLogo.svg'
import { Link } from 'react-router-dom'
import usericon from '../../SVG/user account icon.svg'
import $ from 'jquery'

export default function NavbarAuthentication() {
    return (
        <div className="authennav" >
           <div className="web" >
                   <Link className='logo' to='/'>
                       <img
                           style={{ width: '8.5rem',marginTop:'3.5rem' }}
                           src={Logo}
                           alt="logo-iec"
                       />
                   </Link>
                   <p className="text">AUTHENTICATION</p>
           </div >

           <div className="mobile" >
                   <Link className='logo' to='/'>
                       <img
                           style={{ width: '8.5rem',marginTop:'3.5rem' }}
                           src={Logo}
                           alt="logo-iec"
                       />
                   </Link>
                   <p className="mobiletextAuthen">AUTHENTICATION</p>
           </div >
       </div > 
   )
}