import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import "../Home/Home.css";
import GoldElement from '../../SVG/GoldElement.png';
import HuntLogo from '../../SVG/HuntLogo.svg';
import LogoCircle from '../../SVG/Towncircle.svg'
import nextArrow from '../../SVG/nextArrow.png'
import prevArrow from '../../SVG/prevArrow.png'
import AppDemo from '../../SVG/AppDemo.png';
import PlayStore from '../../SVG/playStore.png'
import AppStore from '../../SVG/appStore.png'
import MalaysiaMap from '../../SVG/Malaysia.svg'
import MalaysiaMapMobile from '../../SVG/MalaysiaMobile.svg'
import {useLocation} from 'react-router-dom';
import axios from 'axios'
import ReactPaginate from "react-paginate";
import moment from 'moment'
import {motion} from "framer-motion"


export const Home = () => {
  const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
  });
  
  const [pageEventNumber, setPageEventNumber] = useState(0)
  const [pageNewsNumber, setPageNewsNumber] = useState(0)

  const [event,setEvent] = useState([])
  const [news,setNews] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        try {
        const res = await axiosInstance.get(`/event/getEvents`); 
            console.log(res)
            setEvent(res.data);
        } catch (err) {
        console.log(err);
        }
    };
    fetchData();
    }, []);

  useEffect(() => {
    const fetchData = async () => {
        try {
        const res = await axiosInstance.get(`/news/getNews`); 
            console.log(res)
            setNews(res.data);
        } catch (err) {
        console.log(err);
        }
    };
    fetchData();
    }, []);

  const location = useLocation();

  const eventPerPage = 1
  const pagesEventVisited = pageEventNumber * eventPerPage
  const pageEventCount = Math.ceil(event.length/ eventPerPage)

  const changePage = ({ selected }) => {
    setPageEventNumber(selected);
  
    const eventContainerWrapper = document.getElementById("eventContainerWrapper");
    eventContainerWrapper.className += " page-enter";
    setTimeout(() => {
      eventContainerWrapper.className = eventContainerWrapper.className.replace(" page-enter", "");
    }, 500);
  };

  const displayEvent = event
    .slice(pagesEventVisited,pagesEventVisited + eventPerPage)
    .map(event => {
        return(
          <div key={event.id} className='eventContainer '>
              <img src={LogoCircle} className='logoCircle'/>
              <h1 className='eventContainerHOne'>{event.location}</h1>
              <img src={event.image} className='eventImage'/>
              <h1 className='eventTitle'>{event.eventTitle}</h1>
              <p className='eventDescription'>{event.description}</p>
              <div className='buttonContainer'>
              <Link state={{ event:event }} to='/ticket'  ><button className='eventJoinButton'>Buy Ticket</button></Link>
              <Link state={{ event:event }} to='/eventDetails' ><button className='eventLearnButton'>Learn More</button></Link>
              </div>
          </div>
        )
    })

  const newsPerPage = 3
  const pagesNewsVisited = pageNewsNumber * newsPerPage
  const pageNewsCount = Math.ceil(news.length/ newsPerPage)

  const changeNews = ({selected}) =>{
      setPageNewsNumber(selected)
      const eventContainerWrapper = document.querySelector(".newsContainerWrapper");
      eventContainerWrapper.classList.add("page-enter");
      setTimeout(() => {
        eventContainerWrapper.classList.remove("page-enter");
      }, 500);
  }
  const displayNews = news
    .slice(pagesNewsVisited,pagesNewsVisited + newsPerPage)
    .map(news => {
        return(
          <div className='inline' key={news.id}>
            <img src={news.newsImage} className='newsImage'/><br/>
            <h1 className='containerTwoHOne'>Post By: {news.postBy}</h1>
            <h1 className='containerTwoHTwo'>{moment(news.created_at).format('D MMMM YYYY')}</h1>
            <h1 className='containerTwoHThree'>Do treasure hunters still exist? How to be a Treasure Hunter?</h1>
            <p className='containerTwoPOne'>Do treasure hunters still exist? How to be a Treasure Hunter?</p>
            <Link to="/newsDetails" state={{ news:news }}> <button className='readMoreButton'>Read More {'>'}</button></Link>
          </div>
        )
    })

  

  return (
    <motion.div className='home' initial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
      <div className='web'>
        <div className='containerOne'>
          <div className='malaysiaMap'>
            <img src={MalaysiaMap} className='malaysiaMapImage'/>
          </div>
          <h1 className='containerOneHOne'>Malaysia First<br/>Treasure Hunt Event</h1>
          <h1 className='containerOneHTwo'>Existing Rewards Worth</h1>
          <h1 className='containerOneHThree'>$116, 952, 402</h1>
          <img src={GoldElement} className='goldElement'/><br/>
          <img src={HuntLogo} className='huntLogo'/>

          <div className="eventContainerWrapper" id="eventContainerWrapper">
              {displayEvent}
          </div>

          {event.length >= 2 ? (
          <ReactPaginate
            previousLabel={<img src={prevArrow} alt="Previous" className='prevArrow'/>}
            nextLabel={<img src={nextArrow} alt="Next" className='nextArrow'/>}
            pageCount={pageEventCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            breakClassName={"break"}
            pageClassName={"pageItem"} //li
            pageLinkClassName={"pageLink"} //a
            activeLinkClassName={"pageLinkActive"}
            previousLinkClassName={"prevArrow"}
            nextLinkClassName={"nextArrow"}
            />  
            ) : null}
        </div>

        <div className="newsContainerWrapper">
        <div className='containerTwo'>
            {displayNews}

            {news.length >= 4 ? (
            <ReactPaginate
              previousLabel={<img src={prevArrow} alt="Previous" className='prevArrowTwo'/>}
              nextLabel={<img src={nextArrow} alt="Next" className='nextArrowTwo'/>}
              pageCount={pageNewsCount}
              onPageChange={changeNews}
              containerClassName={"paginationTwo"}
              breakClassName={"break"}
              pageClassName={"pageItem"} //li
              pageLinkClassName={"pageLink"} //a
              activeLinkClassName={"pageLinkActive"}
              previousLinkClassName={"prevArrow"}
              nextLinkClassName={"nextArrow"}
            /> 
            ) : null}
        </div>
        </div>
        

          <div className='containerThree'>
            <div className='inline' style={{ verticalAlign:'top' }}>
              <img src={AppDemo} className='appDemoImage' />
            </div>

            <div className='inline'>
              <img src={HuntLogo} className='huntLogoTwo'/>
              <h1 className='containerThreeHOne'>Download it Now!</h1>
              <h1 className='containerThreeHOne'>Start Your Hunt!</h1>
              <p className='containerThreePOne'>Shopping sprees are now so much easier, with the world's top brands at your fingertips. Simply click and go to discover the best finds in fashion, electronics, homeware, and more!</p>
              <button  className='downloadButton'>
              <a href="https://play.google.com/store/apps/details?id=com.iecproject&hl=en" target='_blank' style={{ color:'black' }}> 
                <img src={PlayStore} className='icon'/>
                <h1 className='downloadH'>Get it on <br/> <b>Google Play</b></h1>
              </a>
              </button>
              <button href="" className='downloadButton'>
                <img src={AppStore} className='icon'/>
                <h1 className='downloadH'>Get it on <br/> <b>App Store</b></h1>
              </button>
            </div>
          </div>
      </div>

      <div className='mobile'>
        <div className='containerOne'>
          <div className='malaysiaMap'>
            <img src={MalaysiaMapMobile} className='malaysiaMapImage'/>
          </div>

          <div className="eventContainerWrapper" id="eventContainerWrapperTwo">
              {displayEvent}
          </div>

          {event.length >= 2 ? (
          <ReactPaginate
            previousLabel={<img src={prevArrow} alt="Previous" className='prevArrow'/>}
            nextLabel={<img src={nextArrow} alt="Next" className='nextArrow'/>}
            pageCount={pageEventCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            breakClassName={"break"}
            pageClassName={"pageItem"} //li
            pageLinkClassName={"pageLink"} //a
            activeLinkClassName={"pageLinkActive"}
            previousLinkClassName={"prevArrow"}
            nextLinkClassName={"nextArrow"}
            />  
            ) : null}

          <h1 className='containerOneHTwo'>Existing Rewards Worth</h1>
          <h1 className='containerOneHThree'>$116, 952, 402</h1>
          <img src={GoldElement} className='goldElement'/><br/>
          <img src={HuntLogo} className='huntLogo'/>

        </div>

        <div className="newsContainerWrapper">
        <div className='containerTwo'>
            {displayNews}

            {news.length >= 4 ? (
            <ReactPaginate
              previousLabel={<img src={prevArrow} alt="Previous" className='prevArrowTwo'/>}
              nextLabel={<img src={nextArrow} alt="Next" className='nextArrowTwo'/>}
              pageCount={pageNewsCount}
              onPageChange={changeNews}
              containerClassName={"paginationTwo"}
              breakClassName={"break"}
              pageClassName={"pageItem"} //li
              pageLinkClassName={"pageLink"} //a
              activeLinkClassName={"pageLinkActive"}
              previousLinkClassName={"prevArrow"}
              nextLinkClassName={"nextArrow"}
            /> 
            ) : null}
        </div>
        </div>
        
        <div className='containerThree'>
          <img src={AppDemo} className='appDemoImage' />

          <img src={HuntLogo} className='huntLogoTwo'/>
          <h1 className='containerThreeHOne'>Download it Now!</h1>
          <h1 className='containerThreeHOne'>Start Your Hunt!</h1>
          <p className='containerThreePOne'>Shopping sprees are now so much easier, with the world's top brands at your fingertips. Simply click and go to discover the best finds in fashion, electronics, homeware, and more!</p>

          <a href="https://play.google.com/store/apps/details?id=com.iecproject&hl=en" target='_blank' className='downloadButton'> 
            <img src={PlayStore} className='icon'/>
            <h1 className='downloadH'>Get it on <br/> <b>Google Play</b></h1>
          </a>
          
          <a className='downloadButton'>
            <img src={AppStore} className='icon'/>
            <h1 className='downloadH'>Get it on <br/> <b>App Store</b></h1>
          </a>

        </div>
      </div>
    </motion.div>
  );
};