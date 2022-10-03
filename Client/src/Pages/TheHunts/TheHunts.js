import React from 'react'
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
    
    return (
        <div className='thehunts'>
            <Navbar />
            <Hero />
            {/* carousel */}
            <div class="h-100 w-100" style={{ boxSizing: 'border-box', backgroundColor: '#2a2a2a' }}>
                <div
                    class="content-2-2 container-xxl mx-auto p-0 position-relative"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    <div class="text-center title-text">
                        <h1 class="text-title">Welcome to IEC Treasure Hunt</h1>
                        <p
                            class="text-caption"
                            style={{ marginLeft: '3rem', marginRight: '3rem', fontSize: 18 }}
                        >
                            See more details about our hunt by clicking below!
                        </p>
                        <h6 class="text-caption2">See more available hunt</h6>
                    </div>

                    <div class="snippet-body">
                        <div class="snippet-body pt-1 pb-2">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div
                                            id="carouselExampleIndicators2"
                                            class="carousel slide"
                                            data-ride="carousel"
                                        >
                                            {/* Mobile Carousel Card */}
                                            <section className='mobile'>
                                            <div class="carousel-inner  ">
                                            {/* <Swiper
                                                slidesPerView={1}
                                                spaceBetween={2}
                                                slidesPerGroup={1}
                                                loop={true}
                                                navigation={true}                                          
                                                modules={[Navigation]} 
                                                allowTouchMove={false}      
                                            > */}
                                            <SwiperSlide>
                                                <div class="carousel-item active">
                                                    <div class="row">
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <div class="container-fluid">
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
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
                                                                    <h4 class="card-title">
                                                                        WALK HUNT
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        Treasure Hunt in Penang Heritage Area
                                                                    </p>
                                                                    <p class="card-text">
                                                                        RM48
                                                                    </p>
                                                                    <div class="text-center button-cta">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
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
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            /> 
                                                                            GeorgeTown 2
                                                                        </p>
                                                                    </div>

                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        Special title treatment
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        With supporting text below as a natural
                                                                        lead-in to additional content.
                                                                    </p>
                                                                    <div class="text-center">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
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
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            />
                                                                            GeorgeTown 3
                                                                        </p>
                                                                    </div>

                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        Special title treatment
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        With supporting text below as a natural
                                                                        lead-in to additional content.
                                                                    </p>
                                                                    <div class="text-center">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
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
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            />
                                                                            GeorgeTown 4
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        Special title treatment
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        With supporting text below as a natural
                                                                        lead-in to additional content.
                                                                    </p>
                                                                    <div class="text-center">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-outline-light"
                                                                            style={{ fontweight: 500, fontsize: '18px' }}
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
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            />
                                                                            GeorgeTown 5
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        Special title treatment
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        With supporting text below as a natural
                                                                        lead-in to additional content.
                                                                    </p>
                                                                    <div class="text-center">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-outline-light"
                                                                            style={{ fontweight: 500, fontsize: '18px' }}
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
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            />
                                                                            GeorgeTown 6
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        Special title treatment
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        With supporting text below as a natural
                                                                        lead-in to additional content.
                                                                    </p>
                                                                    <div class="text-center">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-outline-light"
                                                                            style={{ fontweight: 500, fontsize: '18px' }}
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
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            />
                                                                            GeorgeTown 7
                                                                        </p>
                                                                    </div>

                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        Special title treatment
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        With supporting text below as a natural
                                                                        lead-in to additional content.
                                                                    </p>
                                                                    <div class="text-center">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-outline-light"
                                                                            style={{ fontweight: 500, fontsize: '18px' }}
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
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            />
                                                                            GeorgeTown 8
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        Special title treatment
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        With supporting text below as a natural
                                                                        lead-in to additional content.
                                                                    </p>
                                                                    <div class="text-center">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-outline-light"
                                                                            style={{ fontweight: 500, fontsize: '18px' }}
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
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            />
                                                                            GeorgeTown 9
                                                                        </p>
                                                                    </div>

                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        Special title treatment
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        With supporting text below as a natural
                                                                        lead-in to additional content.
                                                                    </p>
                                                                    <div class="text-center">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-outline-light"
                                                                            style={{ fontweight: 500, fontsize: '18px' }}
                                                                        >
                                                                            Learn More
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                                </SwiperSlide>
                                                <div className='emptycontainer '></div>
                                                {/* </Swiper> */}
                                            </div>
                                            </section>

                                            {/* Carousel Card */}
                                            <section className='web'>
                                            <div class="carousel-inner  ">
                                            {/* <Swiper
                                                slidesPerView={1}
                                                spaceBetween={2}
                                                slidesPerGroup={1}
                                                loop={true}
                                                navigation={true}                                          
                                                modules={[Navigation]} 
                                                allowTouchMove={false}      

                                            > */}
                                            <SwiperSlide>
                                                <div class="carousel-item active">
                                                    <div class="row">
                                                        <div class="col-md-4 mb-3">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <div class="container-fluid">
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
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
                                                                    <h4 class="card-title">
                                                                        WALK HUNT
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        Treasure Hunt in Penang Heritage Area
                                                                    </p>
                                                                    <p class="card-text" style={{ fontSize:'2rem' }}>
                                                                        RM48
                                                                    </p>
                                                                    <div class="text-center button-cta">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
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
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            /> 
                                                                            GeorgeTown 2
                                                                        </p>
                                                                    </div>

                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        Special title treatment
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        With supporting text below as a natural
                                                                        lead-in to additional content.
                                                                    </p>
                                                                    <div class="text-center">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
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
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            />
                                                                            GeorgeTown 3
                                                                        </p>
                                                                    </div>

                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        Special title treatment
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        With supporting text below as a natural
                                                                        lead-in to additional content.
                                                                    </p>
                                                                    <div class="text-center">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
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
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            />
                                                                            GeorgeTown 4
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        Special title treatment
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        With supporting text below as a natural
                                                                        lead-in to additional content.
                                                                    </p>
                                                                    <div class="text-center">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-outline-light"
                                                                            style={{ fontweight: 500, fontsize: '18px' }}
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
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            />
                                                                            GeorgeTown 5
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        Special title treatment
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        With supporting text below as a natural
                                                                        lead-in to additional content.
                                                                    </p>
                                                                    <div class="text-center">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-outline-light"
                                                                            style={{ fontweight: 500, fontsize: '18px' }}
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
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            />
                                                                            GeorgeTown 6
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        Special title treatment
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        With supporting text below as a natural
                                                                        lead-in to additional content.
                                                                    </p>
                                                                    <div class="text-center">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-outline-light"
                                                                            style={{ fontweight: 500, fontsize: '18px' }}
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
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            />
                                                                            GeorgeTown 7
                                                                        </p>
                                                                    </div>

                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        Special title treatment
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        With supporting text below as a natural
                                                                        lead-in to additional content.
                                                                    </p>
                                                                    <div class="text-center">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-outline-light"
                                                                            style={{ fontweight: 500, fontsize: '18px' }}
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
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            />
                                                                            GeorgeTown 8
                                                                        </p>
                                                                    </div>
                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        Special title treatment
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        With supporting text below as a natural
                                                                        lead-in to additional content.
                                                                    </p>
                                                                    <div class="text-center">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-outline-light"
                                                                            style={{ fontweight: 500, fontsize: '18px' }}
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
                                                                        <p
                                                                            class="town-name navbar-brand align-middle"
                                                                        >
                                                                            <img
                                                                                style={{ width: '2.5rem', marginRight: '0.75rem' }}
                                                                                src={LogoCircle}
                                                                                alt="circle"
                                                                            />
                                                                            GeorgeTown 9
                                                                        </p>
                                                                    </div>

                                                                    <img
                                                                        class="rounded img-fluid px-3 mx-auto mb-lg-3"
                                                                        alt="100%x280"
                                                                        src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6"
                                                                    />
                                                                    <h4 class="card-title">
                                                                        Special title treatment
                                                                    </h4>
                                                                    <p class="card-text">
                                                                        With supporting text below as a natural
                                                                        lead-in to additional content.
                                                                    </p>
                                                                    <div class="text-center">
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-light"
                                                                            style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
                                                                        >
                                                                            Join Hunt
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-outline-light"
                                                                            style={{ fontweight: 500, fontsize: '18px' }}
                                                                        >
                                                                            Learn More
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                                </SwiperSlide>
                                                <div className='emptycontainer '></div>
                                                {/* </Swiper> */}
                                            </div>
                                            </section>                                                                  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* information card */}
            <div class="h-100 w-100" style={{ boxSizing: 'border-box', backgroundColor: '#2a2a2a', paddingBottom: '6.5rem' }}>

                <div
                    class="content-2-3 container-xxl mx-auto p-0 position-relative"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    <div class="text-center title-text">
                        <h1 class="text-title">How IEC Hunt Work?</h1>
                    </div>

                    <div class="snippet-body">
                        <div class="snippet-body pt-1 pb-2">
                            <div class="container">
                                <div class="row">
                                    <div class="col-20 d-flex justify-content-center text-center">
                                        {/* <!-- information cards --> */}
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
                                                        <h4 class="card-title">Solve The Quest</h4>
                                                        <p class="card-text mx-2">
                                                            Find Clues & Solve Puzzles within time given as fast
                                                            as you can. Collect points and rewards together with
                                                            your team.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-1 mb-3" style={{ width: '2.6rem' }}>
                                                <div class="arrow-card-right">
                                                    <img
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
                                                            Hunt for hidden treasure along the way. Enjoy your
                                                            hunting journey. Be the first to solve everything
                                                            and win!
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
                </div>
            </div>

            {/* innovative */}
            <div class="h-100 w-100 background-innovative">
                <div
                    class="container-xxl mx-auto p-0 position-relative header-2-4"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    <div>
                        <div class="mx-auto d-flex flex-lg-row flex-column innovative">
                            <div
                                class="left-column d-flex flex-column align-items-lg-start text-lg-start align-items-center text-center"
                            >
                                <h1
                                    class="title-text-big"
                                    style={{ lineHeight: 1.5 }}
                                >
                                    An <br />
                                    <span style={{ color: '#ffcc4d', textTransform: 'uppercase' }}
                                    >Immersive<br />
                                        Innovative <br />
                                        Impressive</span
                                    ><br />
                                    Treasure Hunt Experience by IEC.
                                </h1>
                            </div>

                            <div
                                class="right-column text-center d-flex justify-content-end pe-0"
                            >
                                <h1 class="title-text-small">
                                    Memorable treasure hunting experiences in various forms, hunt
                                    exciting treasure & prices along the way and bring home with it!
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}