import React from 'react'
import '../Navigation/navbarlogin.css'
import Logo from '../Navigation/IECLogo.svg'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default function NavbarLogin() {
$('.modal-backdrop').remove();
$('body').removeClass("modal-open");

    return (
         <div className="loginnav" >
            <div className="web" >
                    <Link className='logo' to='/'>
                        <img
                            style={{ width: '8.5rem',marginTop:'3.5rem' }}
                            src={Logo}
                            alt="logo-iec"
                        />
                    </Link>
                    <p className="text">LOG IN</p>
            </div >

            <div className="mobile" >
                    <Link className='logo' to='/'>
                        <img
                            style={{ width: '8.5rem',marginTop:'3.5rem' }}
                            src={Logo}
                            alt="logo-iec"
                        />
                    </Link>
                    <p className="mobiletext">LOG IN</p>
            </div >
        </div > 
    )
}

