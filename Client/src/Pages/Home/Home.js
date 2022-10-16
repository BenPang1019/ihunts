import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "../Home/Home.css";
import { Navigation } from "swiper";
import SwiperCore from "swiper/core";

import Footer from '../../Components/Footer/Footer.js'
import Navbar from '../../Components/Navigation/navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from '../../Components/Cards/ProductCard';
import NewsPromotionCard from '../../Components/Cards/NewsPromotionCard';
import Malaysiamap from '../../SVG/west malaysia.svg'


import Ipoh from '../../SVG/Ipoh.png';
import GoldElement from '../../SVG/GoldElement.png';
import HuntLogo from '../../SVG/HuntLogo.svg';
import AppDemo from '../../SVG/AppDemo.png';
import One from '../../SVG/1.png';
import Two from '../../SVG/2.png';
import Three from '../../SVG/3.png';
import GooglePlay from '../../Components/Button/GooglePlay';
import { Link } from 'react-router-dom';
import AppStore from '../../Components/Button/AppStore';

SwiperCore.use([Navigation]);

export const Home = () => {
  return (
    <body className='homebody'>
      <Navbar />
      <section className='firstsection'>
        <div className='firstsectioncontainerone'>
        <div className='text'>
            <p className=''>Malaysia First</p>
            <p className=''>Treasure Hunt Event</p>
        </div>
          {/* <h3 className='firstsectioncontaineroneHeader'>Malaysia First <br />Treasure Hunt Event</h3> */}
          <br />

          <h3 className='firstsectioncontainertwoHeader'>Existing Rewards Worth <br /></h3>
          <h3 className='firstsectioncontainerthreeHeader'>$123,456,789</h3>
          <img className='firstsectioncontainerfourImgOne' src={GoldElement} alt={'goldelement'} />
          <br />
          <img className='firstsectioncontainerfourImgTwo' src={HuntLogo} alt={'goldelement'} />
        </div>
        <div className='firstsectioncontainerfive'>
        <Swiper
            slidesPerView={1}
            spaceBetween={2}
            slidesPerGroup={1}
            loop={true}
            navigation={true}                               
            modules={[Navigation]} 
            allowTouchMove={false}
          >
            <SwiperSlide><ProductCard data={{ location: 'Ipoh ', sublocation: 'Perak1', imgSrc: Ipoh, title: 'Cave Hunt', description: 'Ipoh is a city in northwestern Malaysia, known as a gateway to the Cameron Highlands hill station. In the former Hakka Miners’ Club, Han Chin Pet Soo is a museum about the tin-mining industry and Hakka community.' }} /></SwiperSlide>
            <SwiperSlide><ProductCard data={{ location: 'Ipoh ', sublocation: 'Perak2', imgSrc: Ipoh, title: 'Cave Hunt', description: 'Ipoh is a city in northwestern Malaysia, known as a gateway to the Cameron Highlands hill station. In the former Hakka Miners’ Club, Han Chin Pet Soo is a museum about the tin-mining industry and Hakka community.' }} /></SwiperSlide>
            <SwiperSlide><ProductCard data={{ location: 'Ipoh ', sublocation: 'Perak3', imgSrc: Ipoh, title: 'Cave Hunt', description: 'Ipoh is a city in northwestern Malaysia, known as a gateway to the Cameron Highlands hill station. In the former Hakka Miners’ Club, Han Chin Pet Soo is a museum about the tin-mining industry and Hakka community.' }} /></SwiperSlide>
          </Swiper>
          </div>
      </section>

      {/* mobile version */}
      <section
        className="h-100 w-100 mobile-first-section"
        style={{ boxSizing: 'border-box', backgroundColor: '#2a2a2a' }}
      >

        <div
          className=" container-xxl mx-auto p-0 position-relative header-2-3"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <div>
            <div className="mx-auto d-flex flex-lg-row flex-column hero">
              <div
                className="left-column text-center d-flex justify-content-center pe-0 "
              >
                <img
                  id="leftcolumn-image"
                  className="island-image-hunt h-auto"
                  src={Malaysiamap}
                  style={{ width: '95%' }}
                  alt="island"
                />
              </div>

              <div
                className="right-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center"
              >
                <div className='firstsectioncontainerfive'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={2}
                    slidesPerGroup={1}
                    loop={true}
                    navigation={true}                               
                    modules={[Navigation]} 
                    allowTouchMove={false}
                    className='mySwiper'
                  >
                    <SwiperSlide><ProductCard data={{ location: 'Ipoh ', sublocation: 'Perak1', imgSrc: Ipoh, title: 'Cave Hunt', description: 'Ipoh is a city in northwestern Malaysia, known as a gateway to the Cameron Highlands hill station. In the former Hakka Miners’ Club, Han Chin Pet Soo is a museum about the tin-mining industry and Hakka community.' }} /></SwiperSlide>
                    <SwiperSlide><ProductCard data={{ location: 'Ipoh ', sublocation: 'Perak2', imgSrc: Ipoh, title: 'Cave Hunt', description: 'Ipoh is a city in northwestern Malaysia, known as a gateway to the Cameron Highlands hill station. In the former Hakka Miners’ Club, Han Chin Pet Soo is a museum about the tin-mining industry and Hakka community.' }} /></SwiperSlide>
                    <SwiperSlide><ProductCard data={{ location: 'Ipoh ', sublocation: 'Perak3', imgSrc: Ipoh, title: 'Cave Hunt', description: 'Ipoh is a city in northwestern Malaysia, known as a gateway to the Cameron Highlands hill station. In the former Hakka Miners’ Club, Han Chin Pet Soo is a museum about the tin-mining industry and Hakka community.' }} /></SwiperSlide>
                  </Swiper>
                </div>

                <div className='container-sm mx-auto p-0'>
                  <h3 className='firstsectioncontainertwoHeader'>Existing Rewards Worth <br /></h3>
                  <h3 className='firstsectioncontainerthreeHeader'>$123,456,789</h3>
                  <img className='firstsectioncontainerfourImgOne' src={GoldElement} alt='logo' />
                  <br />
                  <img className='firstsectioncontainerfourImgTwo' src={HuntLogo} alt='HuntLogo' />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
 
      {/* Carousel Mobile */}
      <section className="h-100 w-100 carousel-mobile" style={{ boxSizing: 'border-box', backgroundColor: '#2a2a2a' }}>
        <div className="carousel-card container-xxl mx-auto p-0 position-relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={100}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            allowTouchMove={false}
          >
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: One, by: 'Post by:Admin', date: '20 August 2022', title: 'Do treasure hunters still exist? How to be a Treasure Hunter?', description: 'Buried and hidden treasure may be the stuff of legend and film, but treasure hunters exist.' }} /></SwiperSlide>
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: Two, by: 'Post by:Admin', date: '20 August 2022', title: 'Treasure Hunt Promotion! Enjoy the cheapest tickets in one place! ', description: 'Take your time and read our latest news to improve your account.' }} /></SwiperSlide>
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: Three, by: 'Post by:Admin', date: '20 August 2022', title: 'What is a treasure hunt and how does it work?', description: 'You set up a treasure hunt by hiding clues and the treasure. The clues can be simple drawings.' }} /></SwiperSlide>
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: One, by: 'Post by:Admin', date: '20 August 2022', title: 'Do treasure hunters still exist?How to be a Treasure Hunter?', description: 'Buried and hidden treasure may be the stuff of legend and film, but treasure hunters exist.' }} /></SwiperSlide>
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: Two, by: 'Post by:Admin', date: '20 August 2022', title: 'Treasure Hunt Promotion! Enjoy the cheapest tickets in one place! ', description: 'Take your time and read our latest news to improve your account.' }} /></SwiperSlide>
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: Three, by: 'Post by:Admin', date: '20 August 2022', title: 'What is a treasure hunt and how does it work?', description: 'You set up a treasure hunt by hiding clues and the treasure. The clues can be simple drawings.' }} /></SwiperSlide>
          </Swiper>
        </div>
        <div className="text-center p-3 pt-2">
          {/* <Link
            onClick={scrollToTop}
            to='/news'
            className="btn btn-outline-light"
            style={{ fontWeight: 500, fontSize: '24px', padding: '0.5rem 2.5rem' }}
          >
            See All
          </Link> */}
        </div>
      </section>

      {/* Carousel */}
      <section className="h-100 w-100 carousel" style={{ boxSizing: 'border-box', backgroundColor: '#2a2a2a', paddingTop: '6rem' }}>
        <div className=" container-xxl testcontainer" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <Swiper
            slidesPerView={3}
            spaceBetween={2}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            allowTouchMove={false}
          >
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: One, by: 'Post by:Admin', date: '20 August 2022', title: 'Do treasure hunters still exist?How to be a Treasure Hunter?', description: 'Buried and hidden treasure may be the stuff of legend and film, but treasure hunters exist.' }} /></SwiperSlide>
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: Two, by: 'Post by:Admin', date: '20 August 2022', title: 'Treasure Hunt Promotion! Enjoy the cheapest tickets in one place! ', description: 'Take your time and read our latest news to improve your account.' }} /></SwiperSlide>
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: Three, by: 'Post by:Admin', date: '20 August 2022', title: 'What is a treasure hunt and how does it work?', description: 'You set up a treasure hunt by hiding clues and the treasure. The clues can be simple drawings.' }} /></SwiperSlide>
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: One, by: 'Post by:Admin', date: '20 August 2022', title: 'Do treasure hunters still exist?How to be a Treasure Hunter?', description: 'Buried and hidden treasure may be the stuff of legend and film, but treasure hunters exist.' }} /></SwiperSlide>
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: Two, by: 'Post by:Admin', date: '20 August 2022', title: 'Treasure Hunt Promotion! Enjoy the cheapest tickets in one place! ', description: 'Take your time and read our latest news to improve your account.' }} /></SwiperSlide>
            <SwiperSlide><NewsPromotionCard data1={{ imgSrc: Three, by: 'Post by:Admin', date: '20 August 2022', title: 'What is a treasure hunt and how does it work?', description: 'You set up a treasure hunt by hiding clues and the treasure. The clues can be simple drawings.' }} /></SwiperSlide>
            <div className='emptycontainer '>123</div>
          </Swiper>
        </div>
        <div className="text-center p-3 pt-5">
          {/* <Link
            onClick={scrollToTop}
            to='/news'
            className="btn btn-outline-light"
            style={{ fontWeight: 500, fontSize: '24px', padding: '0.5rem 2.5rem' }}
          >
            See All
          </Link> */}
        </div>
      </section>

      {/* thirdsection */}
      <section
        className="h-100 w-100"
        style={{ boxSizing: 'border-box', backgroundColor: '#2a2a2a', paddingTop: '3rem' }}
      >

        <div
          className="container-xxl mx-auto p-0 position-relative header-2-3"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <div>
            <div className="mx-auto d-flex flex-lg-row flex-column hero">
              <div
                className="left-column text-center d-flex justify-content-center pe-0 "
              >
                <img
                  id="leftcolumn-image"
                  className="island-image-hunt h-auto"
                  src={AppDemo}
                  style={{ width: '95%' }}
                  alt="island"
                />
              </div>

              <div
                className="right-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center"
              >
                <div className='thirdsection-description'>
                  <img className='thirdsection-HuntLogo' src={HuntLogo} alt='logo' />
                  <h3 className='thirdsection-h'>Download it Now! <br /> Start Your Hunt!</h3>
                  <p className='thirdsection-p'>Shopping spress are now so much easier, with the world's top brands at your fingertips. Simply click and go to discover the best finds in fashion, electronics, homeware, and more! </p>
                  <Link to={'#'}><GooglePlay /></Link>
                  <Link to={'#'}><AppStore /></Link>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </body>
  );
};