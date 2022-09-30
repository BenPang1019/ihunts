/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Navigation/navbar.css'
import Logo from '../Navigation/IECLogo.png'
import { Link } from 'react-router-dom'
import usericon from '../../SVG/user account icon.svg'
import $ from 'jquery'

export default function Navbar() {
    $('.modal-backdrop').remove();
    $('body').removeClass("modal-open");

    return (
        <div className="h-100 w-100 pb-3 register" style={{ boxsizing: 'border-box', backgroundColor: '#2a2a2a', }}>
        <div className=" mx-auto p-0 position-relative header-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className='navbar-brand' to='/'>
                    <img
                        style={{ marginRight: '0.75rem', width: '8.5rem' }}
                        src={Logo}
                        alt="logo-iec"
                    />
                </Link>
                <p className="mobilenavtext">Create Account</p>
            </nav>
        </div >
    </div >
    )
}