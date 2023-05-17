import React, { useState } from 'react'
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom'
import moment from 'moment'
import LogoCircle from '../../SVG/Towncircle.svg'
import '../EventDetails/EventDetails.css'
import {motion} from "framer-motion"

export const EventDetails = () => {
    const location = useLocation();

    return(
        <motion.div className='eventDetails' initial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
            <div className='web'>
                <div className='containerOne'>
                    <div className='inline'>
                        <img src={LogoCircle} className='logoCircle inline'/>
                        <h1 className='containerOneHOne inline'>{location.state.event.location}</h1><br/>
                        <img src={location.state.event.image} className='eventImage' />
                    </div>

                    <div className='inline' style={{ verticalAlign:'top' }}> 
                        <h1 className='containerOneHTwo'>{location.state.event.eventTitle}</h1>
                        <p className='containerOnePOne'>{location.state.event.description}</p>

                        <h1 className='containerOneHThree inline'>Price Worth</h1><span className='span inline'>RM{location.state.event.priceWorth}</span><br/>
                        <h1 className='containerOneHThree inline' style={{ verticalAlign:'top' }}>Time</h1>
                        <span className='span inline' style={{ verticalAlign:'bottom' }}>
                            {location.state.event.availableMonday?<p className='inline'>Monday,</p>:null}
                            {location.state.event.availableTuesday?<p className='inline'>Tuesday,</p>:null}
                            {location.state.event.availableWednesday?<p className='inline'>Wednesday,</p>:null}
                            {location.state.event.availableThursday?<p className='inline'>Thursday,</p>:null}
                            {location.state.event.availableFriday?<p className='inline'>Friday,</p>:null}
                            {location.state.event.availableSaturday?<p className='inline'>Saturday,</p>:null}
                            {location.state.event.availableSunday?<p className='inline'>Sunday,</p>:null}<br/>
                            {location.state.event.eventStartTime} until {location.state.event.eventEndTime}
                        </span>
                        <br/>
                        <Link state={{ event:location.state.event }} to='/ticket'  ><button className='joinButton'>Join Hunt</button></Link>
                    </div>
                </div>
            </div>

            <div className='mobile'>
                <div className='containerOne'>
                    <img src={LogoCircle} className='logoCircle inline'/>
                    <h1 className='containerOneHOne inline'>{location.state.event.location}</h1><br/>
                    <img src={location.state.event.image} className='eventImage' />

                    <h1 className='containerOneHTwo'>{location.state.event.eventTitle}</h1>
                    <p className='containerOnePOne'>{location.state.event.description}</p>

                    <h1 className='containerOneHThree inline'>Price Worth</h1><span className='span inline'>RM{location.state.event.priceWorth}</span><br/>
                    <h1 className='containerOneHThree inline' style={{ verticalAlign:'top' }}>Time</h1>
                    <span className='span inline' style={{ verticalAlign:'bottom' }}>
                        {location.state.event.availableMonday?<p className='inline'>Monday,</p>:null}
                        {location.state.event.availableTuesday?<p className='inline'>Tuesday,</p>:null}
                        {location.state.event.availableWednesday?<p className='inline'>Wednesday,</p>:null}
                        {location.state.event.availableThursday?<p className='inline'>Thursday,</p>:null}
                        {location.state.event.availableFriday?<p className='inline'>Friday,</p>:null}
                        {location.state.event.availableSaturday?<p className='inline'>Saturday,</p>:null}
                        {location.state.event.availableSunday?<p className='inline'>Sunday,</p>:null}<br/>
                        {location.state.event.eventStartTime} until {location.state.event.eventEndTime}
                    </span>
                    <br/>
                    <Link state={{ event:location.state.event }} to='/ticket'  ><button className='joinButton'>Join Hunt</button></Link>
                </div>
            </div>
        </motion.div>
    )
}