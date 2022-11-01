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
import map from '../../SVG/MalaysiaMap.svg'


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
      {/* Web Product*/}
      <section className='web-product containerFixed '>
        <div className='firstsectioncontainerone'>
        <div className='text'>
            <p className=''>Malaysia First</p>
            <p className=''>Treasure Hunt Event</p>
        </div>
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

      {/* Mobile Product */}
      <section className='mobile-product'>
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
          <div className='firstsectioncontainerone'>
            <br />
            <h3 className='firstsectioncontainertwoHeader'>Existing Rewards Worth <br /></h3>
            <h3 className='firstsectioncontainerthreeHeader'>$123,456,789</h3>
            <img className='firstsectioncontainerfourImgOne' src={GoldElement} alt={'goldelement'} />
            <br />
            <img className='firstsectioncontainerfourImgTwo' src={HuntLogo} alt={'goldelement'} />
        </div>
      </section>

      {/*Web Carousel */}
      <section className="web-carousel" style={{backgroundColor: '#2a2a2a',marginTop:'5rem'}}>
        <div className="container-xxl ">
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
            <div className='emptycontainer '></div>
          </Swiper>
        </div>
      </section>


      {/* Mobile Carousel */}
      <section className="mobile-carousel">
        <div className="carousel-container" >
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
      </section>

      
      {/*Web thirdsection */}
      <section className="web-thirdsection">
          <div className='container-xxl' style={{ marginTop:'10rem' }}>
                <img
                  className="island-image-hunt "
                  src={AppDemo}
                  alt="island"
                />
              <div className='thirdsection-description'>
                <img className='thirdsection-HuntLogo' src={HuntLogo} alt='logo' />
                <h3 className='thirdsection-h'>Download it Now! <br /> Start Your Hunt!</h3>
                <p className='thirdsection-p'>Shopping spress are now so much easier, with the world's top brands at your fingertips. Simply click and go to discover the best finds in fashion, electronics, homeware, and more! </p>
                <Link to={'#'}><GooglePlay /></Link>
                <Link to={'#'}><AppStore /></Link>
              </div>
          </div>
      </section>

      {/* Mobile thirdsection */}
      <section className="mobile-thirdsection">
          <div className='thirdsectioncontainer'>
                <img
                  className="island-image-hunt "
                  src={AppDemo}
                  alt="island"
                />
              <div className='thirdsection-description'>
                <img className='thirdsection-HuntLogo' src={HuntLogo} alt='logo' />
                <h3 className='thirdsection-h'>Download it Now! <br /> &nbsp;Start Your Hunt!</h3>
                <p className='thirdsection-p'>Shopping spress are now so much easier, with the &nbsp;&nbsp;world's top brands at your fingertips. Simply click <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and go to discover the best finds in fashion, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;electronics, homeware, and more! </p>
                <Link className='fortesting' to={'#'}><GooglePlay /></Link>
                <Link  to={'#'}><AppStore /></Link>
              </div>
          </div>
      </section>
      <Footer />
    </body>
  );
};