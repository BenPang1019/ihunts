/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import '../Navigation/navbar.css'
import Logo from '../Navigation/IECLogo.png'
import { Link } from 'react-router-dom'
import usericon from '../../SVG/user account icon.svg'
import $ from 'jquery'
import { AuthContext } from "../../context/AuthContext";
 
export default function Navbar() {
    $('.modal-backdrop').remove();
    $('body').removeClass("modal-open");
    const { currentUser, logout } = useContext(AuthContext);

    return (
        <div className="" style={{backgroundColor: '#2a2a2a', }}>
            <div className=" p-0  header-2">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link className='navbar-brand' to='/'>
                        <img
                            style={{ width: '8.5rem' }}
                            src={Logo}
                            alt="logo-iec"
                        />
                    </Link>
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#targetModal-item"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

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
                                style={{ backgroundcolor: '#2a2a2a',marginTop:'8rem' }}
                            >
                             
                                <div
                                    className="modal-body"
                                    style={{ marginTop:'0rem' }}
                                >
                                    <ul className="navbar-nav responsive me-auto mt-2 mt-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about">Who is IEC</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/thehunts"
                                            >The Hunts</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/news"
                                            >News&Promo</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/enquiry"
                                            >Enquiry</Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <Link className="nav-link" to='/terms&condition'
                                            >Terms&Condition</Link>
                                        </li> */}
                                    </ul>
                                </div>
                                <div
                                    className="modal-footer border-0 gap-3"
                                    style={{ padding: '2rem', paddingTop: '0.75rem' }}
                                >
                                    <Link className="btn btn-default btn-no-fill" to='/login'>Log In</Link>
                                    <Link className="btn btn-fill border-0" to='/thehunts'>Join The Hunt</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse align-self-start" id="navbarTogglerDemo">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>Who is IEC</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/thehunts'
                                >The Hunts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/news'
                                >News&Promo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/enquiry'
                                >Enquiry</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to='/terms&condition'
                                >Terms&Condition</Link>
                            </li> */}
                        </ul>
                        <div className='container-fluid m-2 ' style={{ width: '19rem', }}>
                            <Link className="btn btn-fill border-0" to='/thehunts' style={{ marginRight: '2rem', }}>Join The Hunt</Link>
                            <span>{currentUser?.username}</span>
                            {currentUser ? (<span onClick={logout}>Logout</span>) : (
                            <Link className='login' to='/login'><img
                                src={usericon}
                                style={{ width: '3.3rem' }}
                                alt="usericon"
                            />
                            </Link>
                                )}
                        </div>
                    </div>
                </nav>
            </div >
        </div >



        
    )
}