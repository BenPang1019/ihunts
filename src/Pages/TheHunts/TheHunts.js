import React,{useContext, useState,useEffect} from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom';
import LogoCircle from '../../SVG/Towncircle.svg'
import nextArrow from '../../SVG/nextArrow.png'
import prevArrow from '../../SVG/prevArrow.png'
import ArrowRight from '../../SVG/Arrowright.svg'
import ArrowDown from '../../SVG/Arrowdown.svg'
import Island from '../../SVG/IslandHunt.svg'
import Logo from '../../SVG/HuntLogo.svg'
import axios from "axios"
import '../TheHunts/TheHunts.css'
import {motion} from "framer-motion"
import { AuthContext } from "../../context/AuthContext";
import { Navigation } from "swiper";
import SwiperCore from "swiper/core";
import ReactPaginate from "react-paginate";
SwiperCore.use([Navigation]);

export const TheHunts = () => {
    const axiosInstance = axios.create({
        baseURL:process.env.REACT_APP_API_URL,
      });

    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    const location = useLocation();
    const [pageEventNumber, setPageEventNumber] = useState(0)
    const [event,setEvent]=useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
            const res = await axiosInstance.get("/event/getEvents"); 
                console.log(res)
                setEvent(res.data);
            } catch (err) {
            console.log(err);
            }
        };
        fetchData();
    }, []);

    const eventPerPage = 3
    const pagesEventVisited = pageEventNumber * eventPerPage
    const pageEventCount = Math.ceil(event.length/ eventPerPage)

    const changePage = ({ selected }) => {
        setPageEventNumber(selected);
        const eventContainerWrapper = document.querySelector(".eventContainerWrapper");
        eventContainerWrapper.classList.add("page-enter");
        setTimeout(() => {
          eventContainerWrapper.classList.remove("page-enter");
        }, 500);
      };

    const displayEvent = event
        .slice(pagesEventVisited,pagesEventVisited + eventPerPage)
        .map(event => {
        return(
            <div key={event.id} className='eventContainer inline'>
              <img src={LogoCircle} className='logoCircle'/>
              <h1 className='eventContainerHOne'>{event.location}</h1>
              <img src={event.image} className='eventImage'/>
              <h1 className='eventTitle'>{event.eventTitle}</h1>
              <p className='eventDescription'>{event.description}</p>
              <h1 className='eventPrice'>RM{event.price}</h1>
              <Link state={{ event:event }} to='/ticket' onClick={()=>{window.scrollTo(0,0)}}><button className='eventJoinButton'>Join Hunt</button></Link>
              <Link state={{ event:event }} to='/eventDetails' onClick={()=>{window.scrollTo(0,0)}}><button className='eventLearnButton'>Learn More</button></Link>
          </div>   
        )
    })

    return (
        <motion.div className='thehunts' initial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
            <div className='web'>
                <div className='containerOne'>
                    <h1 className='containerOneHOne'>Malaysia First<br/>Treasure Hunt Event</h1>

                    <div className='inline'>
                        <img src={Island} className='island'/>
                    </div>

                    <div className='inline' style={{ verticalAlign:'top' }}>
                        <img src={Logo} className='huntLogo'/>
                        <h1 className='containerOneHTwo'>NO.1 LARGEST <br/> <span className='span'>TREASURE HUNT</span> <br/>IN MALAYSIA</h1>
                        <button className='joinButton'>Join The Hunt Today!</button>
                    </div>

                    <div className='arrowContainer'>
                        <img src={ArrowDown} className='arrow'/>
                    </div>
                </div>

                <div className='containerTwo'>
                    <div className='containerText'>
                        <h1 className='containerTwoHOne'>Welcome to IEC Treasure Hunt</h1>
                        <h1 className='containerTwoHTwo'>See more details about our hunt by clicking below!</h1>
                        <h1 className='containerTwoHThree'>See more available hunt</h1>
                    </div>

                    <div className="eventContainerWrapper">
                    {displayEvent}
                    </div>
                    
                    {event.length >= 4 ? (
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

                <div className='containerThree'>
                    <h1 className='containerThreeHOne'>How IEC Hunt Work?</h1>

                    <div className='step inline' style={{ marginLeft:'5rem' }}>
                        <h1 className='stepButton'>Step 1</h1>
                        <h1 className='stepHOne'>Register/Team Up</h1>
                        <p className='stepPOne'>There is up to 500 Players. You can come in teaming up with your friends and family or by yourself individually.</p>
                    </div>
                    <img src={ArrowRight} className='arrowRight'/>
                    <div className='step inline'>
                        <h1 className='stepButton'>Step 2</h1>
                        <h1 className='stepHOne'>Solve The Quests</h1>
                        <p className='stepPOne'>Find Clues & Solve Puzzles within time given as fast as you can. Collect points and rewards together with your team.</p>
                    </div>
                    <img src={ArrowRight} className='arrowRight'/>
                    <div className='step inline'>
                        <h1 className='stepButton'>Step 3</h1>
                        <h1 className='stepHOne'>Earn The Rewards</h1>
                        <p className='stepPOne'>Hunt for hidden treasure along the way. Enjoy your hunting journey. Be the first to solve everything and win!</p>
                    </div>
                </div>

                <div className='containerFour'>
                    <div className='containerTextTwo'>
                        <h1 className='containerFourHOne'>An <br/><span className='spanTwo'>IMMERSIVE</span><br/><span className='spanTwo'>INNOVATIVE</span><br/><span className='spanTwo'>IMPRESSIVE</span><br/>Treasure Hunt Experience by IEC.</h1>
                    </div>

                    <div className='containerTextThree'>
                        <p className='containerFourPOne'>Memorable treasure hunting experiences in various forms, hunt exciting treasure & prices along the way and bring home with it!</p>
                    </div>
                </div>
            </div>

            <div className='mobile'>
                <div className='containerOne'>
                    <img src={Island} className='island'/>

                    <img src={Logo} className='huntLogo'/>
                    <h1 className='containerOneHTwo'>NO.1 LARGEST <br/> <span className='span'>TREASURE HUNT</span> <br/>IN MALAYSIA</h1>
                    <button className='joinButton'>Join The Hunt Today!</button>

                    <div className='arrowContainer'>
                        <img src={ArrowDown} className='arrow'/>
                    </div>
                </div>

                <div className='containerTwo'>
                    <div className='containerText'>
                        <h1 className='containerTwoHOne'>Welcome to IEC Treasure Hunt</h1>
                        <h1 className='containerTwoHTwo'>See more details about our hunt by clicking below!</h1>
                        <h1 className='containerTwoHThree'>See more available hunt</h1>
                    </div>

                    <div className="eventContainerWrapper">
                        {displayEvent}
                    </div>
                    
                    {event.length >= 4 ? (
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

                <div className='containerThree'>
                    <h1 className='containerThreeHOne'>How IEC Hunt Work?</h1>

                    <div className='step inline' >
                        <h1 className='stepButton'>Step 1</h1>
                        <h1 className='stepHOne'>Register/Team Up</h1>
                        <p className='stepPOne'>There is up to 500 Players. You can come in teaming up with your friends and family or by yourself individually.</p>
                    </div>
                    <img src={ArrowRight} className='arrowRight'/>
                    <div className='step inline'>
                        <h1 className='stepButton'>Step 2</h1>
                        <h1 className='stepHOne'>Solve The Quests</h1>
                        <p className='stepPOne'>Find Clues & Solve Puzzles within time given as fast as you can. Collect points and rewards together with your team.</p>
                    </div>
                    <img src={ArrowRight} className='arrowRight'/>
                    <div className='step inline'>
                        <h1 className='stepButton'>Step 3</h1>
                        <h1 className='stepHOne'>Earn The Rewards</h1>
                        <p className='stepPOne'>Hunt for hidden treasure along the way. Enjoy your hunting journey. Be the first to solve everything and win!</p>
                    </div>
                </div>

                <div className='containerFour'>
                    <div className='containerTextTwo'>
                        <h1 className='containerFourHOne'>An <br/><span className='spanTwo'>IMMERSIVE</span><br/><span className='spanTwo'>INNOVATIVE</span><br/><span className='spanTwo'>IMPRESSIVE</span><br/>Treasure Hunt Experience by IEC.</h1>
                    </div>

                    <div className='containerTextThree'>
                        <p className='containerFourPOne'>Memorable treasure hunting experiences in various forms, hunt exciting treasure & prices along the way and bring home with it!</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}