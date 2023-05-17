import React, { useState } from 'react'
import {useLocation} from 'react-router-dom';
import moment from 'moment'
import '../NewsDetails/NewsDetails.css'
import {motion} from "framer-motion"

export const NewsDetails = () => {
    const location = useLocation();

    return(
        <motion.div className='newsDetails' initial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
            <div className='web'>
                <div className='containerOne'>
                    <img src={location.state.news.newsImage} className='newsImage'/>
                    <div className='containerContent'>
                        <h1 className='containerOneHOne'>{location.state.news.postBy}</h1>
                        <h1 className='containerOneHTwo'>{location.state.news.title}</h1>
                        <h1 className='containerOneHThree'>{moment(location.state.news.created_at).format('DD MMMM YYYY')}</h1>
                        <p className='containerOnePOne'>{location.state.news.description}</p>
                    </div>
                </div>
            </div>

            <div className='mobile'>
                <div className='containerOne'>
                    <img src={location.state.news.newsImage} className='newsImage'/>
                    <div className='containerContent'>
                        <h1 className='containerOneHOne'>{location.state.news.postBy}</h1>
                        <h1 className='containerOneHTwo'>{location.state.news.title}</h1>
                        <h1 className='containerOneHThree'>{moment(location.state.news.created_at).format('DD MMMM YYYY')}</h1>
                        <p className='containerOnePOne'>{location.state.news.description}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}