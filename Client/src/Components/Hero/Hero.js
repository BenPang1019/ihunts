import React from 'react'
import ArrowDown from '../../SVG/Arrowdown.svg'
import Island from '../../SVG/IslandHunt.svg'
import Logo from '../../SVG/HuntLogo.svg'
import '../Hero/Hero.css'


export default function Hero() {
    return (
        <section
            className="h-100 w-100 hero"
            style={{ boxSizing: 'border-box', backgroundColor: '#2a2a2a' }}
        >
        <div className='text'>
                <p className=''>Malaysia First</p>
                <p className=''>Treasure Hunt Event</p>
            </div>

            <div
                className="container-xxl mx-auto p-0 position-relative header-2-3"
                // style={{ fontFamily: 'Poppins, sans-serif' }}
            >
        
                <div>
                    <div className="mx-auto d-flex flex-lg-row flex-column hero">
                        <div
                            className="left-column text-center d-flex justify-content-center pe-0 "
                        >
                            <img
                                id="leftcolumn-image"
                                className="island-image-hunt h-auto"
                                style={{ width: '95%' }}
                                src={Island}
                                alt="island"
                            />
                        </div>

                        <div
                            className="right-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center"
                        >
                            <img
                                id="img-fluid"
                                className="h-auto w-75"
                                src={Logo}
                                alt=""
                            />
                            <h1 className="title-text-big2" style={{ lineHeight: 1.5 }}>
                                NO.1 LARGEST <span style={{ color: '#ffffff' }}>TREASURE HUNT</span><br />
                                IN MALAYSIA
                            </h1>

                            <div
                                className="d-flex flex-sm-row flex-column align-items-center mx-lg-0 mx-auto justify-content-center gap-3"
                            >
                                <button className="btn d-inline-flex mb-md-0 btn-join border-0">
                                    Join the Hunt Today!
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="px-4 py-5 text-center">
                        <img
                            id="leftcolumn-image"
                            className="arrow-down"
                            style={{
                                width: '2.5rem',
                                alignItems: 'center',
                                cursor: 'pointer',
                            }}
                            src={ArrowDown}
                            alt="arrow"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
