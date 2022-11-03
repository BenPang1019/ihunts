import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer.js'
import Navbar from '../../Components/Navigation/navbar.js'
import Hero from '../../Components/Hero/Hero.js'
import LogoCircle from '../../SVG/Towncircle.svg'
import ArrowRight from '../../SVG/Arrowright.svg'
import '../TheHunts/TheHunts.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SwiperCore from "swiper/core";

SwiperCore.use([Navigation]);

export const TheHunts = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
      }

    return (
        <div className='thehunts'>
            <Navbar />
            <Hero />
            <div class="webHunts container-xxl ">
                <div class="title-text">
                    <h1 class="text-title">Welcome to IEC Treasure Hunt</h1>
                    <p class="text-caption">See more details about our hunt by clicking below!</p>
                    <h6 class="text-caption2">See more available hunt</h6>
                </div>
                
                <div class="carousel-inner ">
                    {/* <Swiper
                        slidesPerView={1}
                        spaceBetween={2}
                        slidesPerGroup={1}
                        loop={true}
                        navigation={true}                                          
                        modules={[Navigation]} 
                        allowTouchMove={false}      
                    >
                    <SwiperSlide> */}
                        {/* <div class="carousel-item active">
                            <div class="row"> */}
                                <div class="col-md-4 mb-3 webHunts cardContainer">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name navbar-brand align-middle">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name navbar-brand align-middle">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide> */}
                        {/* <SwiperSlide>
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name navbar-brand align-middle">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name navbar-brand align-middle">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name navbar-brand align-middle">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name navbar-brand align-middle">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name navbar-brand align-middle">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name navbar-brand align-middle">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide> */}
                        <div className='emptycontainer '></div>
                    {/* </Swiper> */}
                </div>
            </div>                

            {/* information card */}
            <div class="webHunts container-xxl ">
                <div class="text-center title-text">
                    <h1 class="text-title">How IEC Hunt Work?</h1>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-20 d-flex justify-content-center text-center">
                            <div class="row d-flex justify-content-center text-center">
                                <div class="col-md-3 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="text-center">
                                                <div class="step-text d-inline-flex bg-white">
                                                    <p class="me-3 mb-2 mt-2 ms-3">Step 1</p>
                                                </div>
                                            </div>
                                            <h4 class="card-title">Register/Team Up</h4>
                                            <p class="card-text mx-2">
                                                There is up to 500 Players. You can come in teaming
                                                up with your friends and family or by yourself
                                                individually.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-1 mb-3" style={{ width: '2.6rem' }}>
                                    <div class="">
                                        <img
                                            className='arrow-card-right'
                                            src={ArrowRight}
                                            alt="arrow"
                                        />
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="text-center">
                                                <div class="step-text d-inline-flex bg-white">
                                                    <p class="me-3 mb-2 mt-2 ms-3">Step 2</p>
                                                </div>
                                            </div>
                                            <h4 class="card-title">Solve the Quest</h4>
                                            <p class="card-text mx-2">
                                                Find Clues & Solve Puzzles within time given as fast as you can. 
                                                Collect points and rewards together with your team.
                                             </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-1 mb-3" style={{ width: '2.6rem' }}>
                                    <div class="">
                                        <img
                                            className='arrow-card-right'
                                            src={ArrowRight}
                                            alt="arrow"
                                        />
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="text-center">
                                                <div class="step-text d-inline-flex bg-white">
                                                    <p class="me-3 mb-2 mt-2 ms-3">Step 3</p>
                                                </div>
                                            </div>
                                            <h4 class="card-title">Earn The Rewards</h4>
                                            <p class="card-text mx-2">
                                                Hunt for hidden treasure along the way. 
                                                Enjoy your hunting journey. 
                                                Be the first to solve everything and win!
                                            </p>
                                        </div>
                                    </div>
                                </div>               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* innovative */}
            <div className='webHunts'>
                <div class="background-innovative">
                    <div class="container-xxl">
                        <div className='title-text-big-container'>
                            <h1 class="title-text-big">An<br />
                                <span style={{ color: '#ffcc4d', textTransform: 'uppercase' }}
                                >Immersive<br />
                                Innovative <br />
                                Impressive</span
                                ><br />
                                Treasure Hunt Experience by IEC.
                            </h1>
                        </div>
                        <div class="title-text-small-container">
                            <h1 class="title-text-small">
                                Memorable treasure hunting experiences in various forms, hunt
                                exciting treasure & prices along the way and bring home with it!
                            </h1>
                        </div>
                    </div>
                </div>
            </div>


            <div class="mobileHunts container-xxl ">
                <div class="title-text">
                    <h1 class="text-title">Welcome to IEC Treasure Hunt</h1>
                    <p class="text-caption">See more details about our hunt by clicking below!</p>
                    <h6 class="text-caption2">See more available hunt</h6>
                </div>
                
                <div class="carousel-inner ">
                    {/* <Swiper
                        slidesPerView={1}
                        spaceBetween={2}
                        slidesPerGroup={1}
                        loop={true}
                        navigation={true}                                          
                        modules={[Navigation]} 
                        allowTouchMove={false}      
                    >
                    <SwiperSlide> */}
                        {/* <div class="carousel-item active">
                            <div class="row"> */}
                                <div class="col-md-4 mb-3 mobileHunts cardContainer">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name navbar-brand align-middle">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name navbar-brand align-middle">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide> */}
                        {/* <SwiperSlide>
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name navbar-brand align-middle">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name navbar-brand align-middle">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name navbar-brand align-middle">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name navbar-brand align-middle">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name navbar-brand align-middle">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="container-fluid">
                                                <p class="town-name navbar-brand align-middle">
                                                    <img
                                                        style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                        src={LogoCircle}
                                                        alt="circle"
                                                />
                                                    Penang
                                                </p>
                                            </div>
                                            <img
                                                class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                alt="100%x280"
                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                            />
                                            <h4 class="card-title">WALK HUNT</h4>
                                            <p class="card-textOne">Treasure Hunt in Penang Heritage Area</p>
                                            <p class="card-textTwo">RM48</p>
                                            <div class="text-center button-cta">
                                                <Link
                                                    to='/ticket'
                                                    type="button"
                                                    class="btn btn-light"
                                                    style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                    onClick={scrollToTop}
                                                >
                                                    Join Hunt
                                                </Link>
                                            <button
                                                type="button"
                                                class="btn btn-outline-light"
                                                style={{ fontWeight: 500, fontSize: '18px' }}
                                            >
                                                Learn More
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide> */}
                        <div className='emptycontainer '></div>
                    {/* </Swiper> */}
                </div>
            </div>                

            {/* information card */}
            <div class="mobileHunts informationContainer">
            <div className='informationContainer'>
                <div class="text-center title-text">
                    <h1 class="text-title">How IEC Hunt Work?</h1>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-20 d-flex justify-content-center text-center">
                            <div class="row d-flex justify-content-center text-center">
                                <div class="col-lg-3 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="text-center">
                                                <div class="step-text d-inline-flex bg-white">
                                                    <p class="me-2 mb-2 mt-2 ms-3">Step 1</p>
                                                </div>
                                            </div>
                                            <h4 class="card-title">Register/Team Up</h4>
                                            <p class="card-text mx-2">
                                                There is up to 500 Players. You can come in teaming
                                                up with your friends and family or by yourself
                                                individually.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-1 mb-3" style={{ width: '2.6rem' }}>
                                    <div class="">
                                        <img
                                            className='arrow-card-right'
                                            src={ArrowRight}
                                            alt="arrow"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-3 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="text-center">
                                                <div class="step-text d-inline-flex bg-white">
                                                    <p class="me-3 mb-2 mt-2 ms-3">Step 2</p>
                                                </div>
                                            </div>
                                            <h4 class="card-title">Solve the Quest</h4>
                                            <p class="card-text mx-2">
                                                Find Clues & Solve Puzzles within time given as fast as you can. 
                                                Collect points and rewards together with your team.
                                             </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-1 mb-3" style={{ width: '2.6rem' }}>
                                    <div class="">
                                        <img
                                            className='arrow-card-right'
                                            src={ArrowRight}
                                            alt="arrow"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-3 mb-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="text-center">
                                                <div class="step-text d-inline-flex bg-white">
                                                    <p class="me-3 mb-2 mt-2 ms-3">Step 3</p>
                                                </div>
                                            </div>
                                            <h4 class="card-title">Earn The Rewards</h4>
                                            <p class="card-text mx-2">
                                                Hunt for hidden treasure along the way. 
                                                Enjoy your hunting journey. 
                                                Be the first to solve everything and win!
                                            </p>
                                        </div>
                                    </div>
                                </div>               
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            {/* innovative */}
            <div className='mobileHunts'>
                <div class="background-innovative">
                    <div class="container-xxl">
                        <div className='title-text-big-container'>
                            <h1 class="title-text-big">An<br />
                                <span style={{ color: '#ffcc4d', textTransform: 'uppercase',fontSize:'2rem' }}
                                >Immersive<br />
                                Innovative <br />
                                Impressive</span
                                ><br />
                                Treasure Hunt Experience by IEC.
                            </h1>
                        </div>
                        <div class="title-text-small-container">
                            <h1 class="title-text-small">
                                Memorable treasure hunting experiences in various forms, hunt
                                exciting treasure & prices along the way and bring home with it!
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}