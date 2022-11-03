import React from 'react'
import Navbar from '../../Components/Navigation/navbar'
import Footer from '../../Components/Footer/Footer.js'
import '../NewsPromotion/News.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SwiperCore from "swiper/core";

SwiperCore.use([Navigation]);

 
export const News = () => {
    return (
        <body className='newspromo'>
            <Navbar />
            {/* Web */}
            <div class="webNews" style={{paddingBottom: '6.5rem' }}>
                <div className='text'>
                    <p className=''>Malaysia First</p>
                    <p className=''>Treasure Hunt Event</p>
                </div>
                <div class="container-xxl">
                    <div class="text-center">
                        <h1 class="text-title">Latest</h1>
                        <h1 class="title-text">News & Promotion</h1>
                        <p class="sub-title-text">
                            Do you want to keep up to date with the latest news and promotion from IEC? <br />
                            Enter your e-mail below to subscribe us to get the most recent information.
                        </p>
                    </div>
                    <div class="bbb-wrapper fl-wrap">
                        <div class="subcribe-form fl-wrap">
                            <form id="subscribe" novalidate="true">
                                <input class="enteremail" name="EMAIL" id="subscribe-email" placeholder="Enter your email" spellcheck="false" type="text" />
                                <button type="submit" id="subscribe-button" class="subscribe-button color-bg"><i class="fa fa-rss"></i> Subscribe</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* Latest News */}
            {/* Web */}
            <div class="webNews">
                <div class="webNews content-2-5 container-xxl">
                    <div class="header-2-2 ">
                        <nav class="navbar navbar-expand-lg navbar-dark justify-content-center">
                            <div class="navbar" id="navbarTogglerDemo">
                                <ul class="navbar-nav me-auto mt-2 mt-lg-0 justify-content-center">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#" style={{ color: '#e7e7e8' }}>All </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">News</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Promotion</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
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
                                                    <div class="carousel-inner">
                                                    <Swiper
                                                        slidesPerView={1}
                                                        spaceBetween={2}
                                                        slidesPerGroup={1}
                                                        loop={true}
                                                        navigation={true}                                          
                                                        modules={[Navigation]}       
                                                        allowTouchMove={false}
                                                    >
                                                    <SwiperSlide>
                                                        <div class="carousel-item active">
                                                            <div class="row">
                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 1
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 2
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 3
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div class="row">

                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 4
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 5
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 6
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                        <div class="carousel-item active">
                                                            <div class="row">
                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 7
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 8
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 9
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div class="row">

                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 10
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
 
                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 11
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 12
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </SwiperSlide>
                                                        <div className='emptycontainer '></div>
                                                        </Swiper>
                                                    </div>
                                                </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div >

            {/* Mobile */}
            <div class="mobileNews" style={{paddingBottom: '6.5rem' }}>
                <div class=" mobileNews container-xxl newsContainer">
                    <div class="text-center">
                        <h1 class="text-title">Latest</h1>
                        <h1 class="title-text">News & Promotion</h1>
                        <p class="sub-title-text">
                            Do you want to keep up to date with the latest news and promotion from IEC? <br />
                            Enter your e-mail below to subscribe us to get the most recent information.
                        </p>
                    </div>
                    <div class="bbb-wrapper">
                        <div class="subcribe-form ">
                            <form id="subscribe" novalidate="true">
                                <input class="enteremail" name="EMAIL" id="subscribe-email" placeholder="Enter your email" spellcheck="false" type="text" />
                                <button type="submit" id="subscribe-button" class="subscribe-button color-bg"><i class="fa fa-rss"></i> Subscribe</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* {Mobile} */}
            <div class=" mobileNews">
                <div class=" mobileNews container-xxl newsContainerTwo">
                    <div class=" ">
                        <nav class=" navbar-dark ">
                            <div class="navbar navcontainer " id="navbarTogglerDemo">
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <a class="nav-link allText"  >All </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link newsText" >News</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link promoText" >Promo</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                            <div class="container">
                                <div class="">
                                    <div class="col-lg-12">
                                        <div
                                            id="carouselExampleIndicators2"
                                            class="carousel slide"
                                            data-ride="carousel"
                                        >
                                                    <div class="carousel-inner">
                                                    <Swiper
                                                        slidesPerView={1}
                                                        spaceBetween={2}
                                                        slidesPerGroup={1}
                                                        loop={true}
                                                        navigation={true}                                          
                                                        modules={[Navigation]}       
                                                        allowTouchMove={false}
                                                    >
                                                    <SwiperSlide>
                                                        <div class="carousel-item active">
                                                            <div class="row">
                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 1
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 2
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 3
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                        <div class="carousel-item active">
                                                            <div class="row">
                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 4
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 5
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="np-read-more" href="#">
                                                                                Read More 11
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </SwiperSlide>
                                                        <div className='emptycontainer '></div>
                                                        </Swiper>
                                                    </div>
                                                </div>
                                        
                                        </div>
                                    </div>
                                </div>
                    </div>
            </div >
            <Footer />
        </body >
    )
}