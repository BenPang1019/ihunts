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
         <div className="h-100 w-100 pb-3" style={{ boxsizing: 'border-box', backgroundColor: '#2a2a2a', }}>
            <div className=" mx-auto p-0 position-relative header-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link className='navbar-brand' to='/'>
                        <img
                            style={{ marginRight: '0.75rem', width: '8.5rem' }}
                            src={Logo}
                            alt="logo-iec"
                        />
                    </Link>
                    <p className="mobilenavtext">Login</p>

                    <div
                        className="modal-item modal fade"
                        id="targetModal-item"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="targetModalLabel"
                        aria-hidden="true"
                        data-backdrop=""
                    >
                        <div className="modal-dialog" role="document">
                            <div
                                className="modal-content border-0"
                                style={{ backgroundcolor: '#2a2a2a' }}
                            >
                                <div
                                    className="modal-header border-0"
                                    style={{ padding: '2rem', paddingBottom: '0' }}
                                >
                                    <Link className="modal-title" id="targetModalLabel" to="/">
                                        <img
                                            style={{ marginTop: '0.5rem', width: '50%' }}
                                            src="IECLogo.png"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div
                                    className="modal-body"
                                    style={{ padding: '2rem', paddingTop: 0, paddingBottom: 0 }}
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div >
        </div > 
    )
}