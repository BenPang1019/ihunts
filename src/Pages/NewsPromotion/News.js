import React, { useEffect, useState } from 'react'
import '../NewsPromotion/News.css'
import axios from 'axios';
import { Navigation } from "swiper";
import { useLocation } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
import nextArrow from '../../SVG/nextArrow.png'
import prevArrow from '../../SVG/prevArrow.png'
export const News = () => {
    const axiosInstance = axios.create({
        baseURL:process.env.REACT_APP_API_URL,
      });
    
    const [pageNewsNumber, setPageNewsNumber] = useState(0)
    const [pageNewsMobileNumber, setPageNewsMobileNumber] = useState(0)
    const [news,setNews] = useState([])


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

    const newsPerPage = 6
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
            <div className='inline containerNews'>
                <img src={news.newsImage} className='newsImage'/>
                <h1 className='newsTitle'>{news.title}</h1>
                <Link to="/newsDetails" state={{ news:news }} style={{ textDecoration:'none' }}><button className='readMoreButton'>Read More {'>'}</button></Link>
            </div>
        )
    })

    const newsMobilePerPage = 3
    const pagesNewsMobileVisited = pageNewsMobileNumber * newsMobilePerPage
    const pageNewsMobileCount = Math.ceil(news.length/ newsMobilePerPage)

    const changeNewsMobile = ({selected}) =>{
        setPageNewsMobileNumber(selected)
        const eventContainerWrapper = document.querySelector(".newsContainerWrapper");
        eventContainerWrapper.classList.add("page-enter");
        setTimeout(() => {
            eventContainerWrapper.classList.remove("page-enter");
        }, 500);
    }
    const displayNewsMobile = news
    .slice(pagesNewsMobileVisited,pagesNewsMobileVisited + newsMobilePerPage)
    .map(news => {
        return(
            <div className='inline containerNews'>
                <img src={news.newsImage} className='newsImage'/>
                <h1 className='newsTitle'>{news.title}</h1>
                <Link to="/newsDetails" state={{ news:news }} style={{ textDecoration:'none' }}><button className='readMoreButton'>Read More {'>'}</button></Link>
            </div>
        )
    })

    return (
        <motion.div className='news' initial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
            <div className='web'>
                <div className='containerOne'>
                    <h1 className='containerOneHOne'>Malaysia First<br/>Treasure Hunt Event</h1>

                    <h1 className='containerOneHTwo'>Lastest</h1>
                    <h1 className='containerOneHThree'>News & Promotion</h1>
                    <p className='containerOnePOne'>Do you want to keep up to date with the latest news and promotion from IEC? Enter your e-mail below to subscribe us to get the most recent information.</p>

                    <div className='emailContainer'>
                    <input type='email' className='emailInput' placeholder='Enter Your Email'></input>
                    <button className='submitButton'>Subscribce</button>
                    </div>
                </div>

                <div className='containerTwo'>
                    <div className='categoryContainer'>
                        <h1 className='inline categoryH'>All</h1>
                        <h1 className='inline categoryH'>News</h1>
                        <h1 className='inline categoryH'>Promo</h1>
                    </div>

                    <div className="newsContainerWrapper">
                        {displayNews}
                    </div>

                    {news.length >= 7 ? (
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

            <div className='mobile'>
                <div className='containerOne'>
                    <h1 className='containerOneHTwo'>Lastest</h1>
                    <h1 className='containerOneHThree'>News & Promotion</h1>
                    <p className='containerOnePOne'>Do you want to keep up to date with the latest news and promotion from IEC? Enter your e-mail below to subscribe us to get the most recent information.</p>

                    <div className='emailContainer'>
                    <input type='email' className='emailInput' placeholder='Enter Your Email'></input>
                    <button className='submitButton'>Subscribce</button>
                    </div>
                </div>

                <div className='containerTwo'>
                    <div className='categoryContainer'>
                        <h1 className='inline categoryH'>All</h1>
                        <h1 className='inline categoryH'>News</h1>
                        <h1 className='inline categoryH'>Promo</h1>
                    </div>

                    <div className="newsContainerWrapper">
                        {displayNewsMobile}
                    </div>

                    {news.length >= 7 ? (
                    <ReactPaginate
                        previousLabel={<img src={prevArrow} alt="Previous" className='prevArrowTwo'/>}
                        nextLabel={<img src={nextArrow} alt="Next" className='nextArrowTwo'/>}
                        pageCount={pageNewsMobileCount}
                        onPageChange={changeNewsMobile}
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
        </motion.div>
    )
}