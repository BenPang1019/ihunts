import React from 'react'
import '../Navigation/navbarregister.css'
import Logo from '../Navigation/IECLogo.svg'
import { Link } from 'react-router-dom'


export default function NavbarLogin() {


    return (
         <div className="registernav" >
            <div className="web" >
                    <Link className='logo' to='/'>
                        <img
                            style={{ width: '8.5rem',marginTop:'3.5rem' }}
                            src={Logo}
                            alt="logo-iec"
                        />
                    </Link>
                    <p className="text">CREATE ACCOUNT</p>
            </div >

            <div className="mobile" >
                    <Link className='logo' to='/'>
                        <img
                            style={{ width: '8.5rem',marginTop:'3.5rem' }}
                            src={Logo}
                            alt="logo-iec"
                        />
                    </Link>
                    <p className="mobiletext">CREATE ACCOUNT</p>
            </div >
        </div > 
    )
}