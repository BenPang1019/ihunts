import React from 'react'
import WestMalay from '../../SVG/west malaysia.svg'
import ArrowEnquiry from '../../SVG/Arrowenquiry.svg'
import GoldElement from '../About/gold element 1000px.png'
import Instagram from '../../SVG/Instagram.png'
import Facebook from '../../SVG/Facebook.png'
import WhatsApp from '../../SVG/WhatsApp.png'
import ImageOne from '../About/Collage/1.png'
import ImageTwo from '../About/Collage/2.png'
import ImageThree from '../About/Collage/3.png'
import ImageFour from '../About/Collage/4.png'
import '../About/About.css'
import {motion} from "framer-motion"
import {Link} from 'react-router-dom'

export const About = () => {
    return (
       <motion.div className='about' initial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
            <div className='web'>
                <div className='containerOne'>
                    <h1 className='containerOneHOne'>Malaysia First<br/>Treasure Hunt Event</h1>

                    <div className='containerContent'>
                        <img src={GoldElement} className='goldElementOne'/>
                        <h1 className='containerContentHOne'>IEC International Sdn Bhd</h1>
                        <h1 className='containerContentHTwo'><span className='span'>I</span>mpressive <span className='span'>E</span>vents <span className='span'>C</span>orporation</h1>
                        <p className='containerContentPOne'>IEC is equal to Infinite Excitement & Cheers, we will be the immaculate organizer for all kind of Treasure Hunt Events and Team Building activities open to public besides corporate. In future, IEC would be the leading brand in the region for total event management, as well as social sports and leisure & entertainment affairs.</p>
                        <div className='socialContainer'>
                            <a href='https://www.facebook.com/iechunts' target="_blank"><img src={Facebook} className='socialIcon'/></a>
                            <a href='https://www.instagram.com/iec_hunts/' target="_blank"><img src={Instagram} className='socialIcon' style={{marginRight:'25px'}}/></a>
                            <a href='https://wa.me/60139272628' target="_blank"><img src={WhatsApp} className='socialIcon'/></a>
                        </div>
                        <img src={GoldElement} className='goldElementTwo'/>
                    </div>
                </div>

                <div className='containerTwo'>
                    <div className='inline'>
                        <img src={WestMalay} className='westMalaysia'/>
                    </div>

                    <div className='inline' style={{ verticalAlign:'top' }}>
                        <h1 className='containerTwoHOne'>WHAT WE DO</h1>
                        <p className='containerTwoPOne'>IEC aims to provide memorable treasure hunting experiences in various forms, for example in the following categories: Each treasure hunt will have the prizes and souvenirs along the given route!</p>
                        <ul className='ulContainer'>
                            <li>Containerized PASS-THRU Mission (Penang)</li>
                            <li>Unesco Heritage Walk Around Hunt (Penang, Melaka)</li>
                            <li>City Tour-Bus Hip-Hop Hunt (Kuala Lumpur)</li>
                            <li>Interior Mall Hunt (Genting Highland, Kuala Lumpur)</li>
                            <li>MRT Hunt (Kuala Lumpur)</li>
                            <li>Hidden Fortune Beach Hunting (Port Dickson)</li>
                            <li>Cycle Hunt (Pulau PangKor)</li>
                            <li>Amazing Car Hunt (Langkawi, KL-Kuantan)</li>
                        </ul>
                    </div>
                </div>

                <div className='containerThree'>
                    <div className='inline' style={{ verticalAlign:'top' }}>
                        <h1 className='containerThreeHOne'>Last but not least, IEC has the expertise and resources for effective planning, management and implementation of all kinds of creative yet challenging events that are suited to the needs of a particular organization. Any enquiry or tailored made <br/><span className='spanTwo'>“Treasure Hunt Team Building Activities”</span><br/> are most welcomed.</h1>
                        <div className='containerBorder'>
                            <h1 className='containerBorderHOne'>Custom questions set perhaps incorporated with your technical training, along with easier and funny one, your company get away or team bonding trips will be taken care of. Please do not hesitate to contact us for your best quotation for corporate packages!</h1>
                        </div>
                        <div className='arrowContainer'>
                            <img src={ArrowEnquiry} className='arrow'/>
                        </div>
                        <div className='buttonContainer'>
                            <Link to='/enquiry'><button className='enquiryButton'>Make an Enquiry</button></Link>
                        </div>
                    </div>

                    <div className='inline'>
                        <div className='imageContainer'>
                            <img src={ImageFour} className='imageOne grow'/>
                            <img src={ImageOne} className='imageTwo grow'/>
                            <img src={ImageTwo} className='imageThree grow'/>
                            <img src={ImageThree} className='imageFour grow'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mobile'>
                <div className='containerOne'>
                    <div className='containerContent'>
                        <img src={GoldElement} className='goldElementOne'/>
                        <h1 className='containerContentHOne'>IEC International Sdn Bhd</h1>
                        <h1 className='containerContentHTwo'><span className='span'>I</span>mpressive <span className='span'>E</span>vents <span className='span'>C</span>orporation</h1>
                        <p className='containerContentPOne'>IEC is equal to Infinite Excitement & Cheers, we will be the immaculate organizer for all kind of Treasure Hunt Events and Team Building activities open to public besides corporate. In future, IEC would be the leading brand in the region for total event management, as well as social sports and leisure & entertainment affairs.</p>
                        <div className='socialContainer'>
                            <a href='https://www.facebook.com/iechunts' target="_blank"><img src={Facebook} className='socialIcon'/></a>
                            <a href='https://www.instagram.com/iec_hunts/' target="_blank"><img src={Instagram} className='socialIcon' style={{marginRight:'25px'}}/></a>
                            <a href='https://wa.me/60139272628' target="_blank"><img src={WhatsApp} className='socialIcon'/></a>
                        </div>
                        <img src={GoldElement} className='goldElementTwo'/>
                    </div>
                </div>

                <div className='containerTwo'>
                    <img src={WestMalay} className='westMalaysia'/>

                    <h1 className='containerTwoHOne'>WHAT WE DO</h1>
                    <p className='containerTwoPOne'>IEC aims to provide memorable treasure hunting experiences in various forms, for example in the following categories: Each treasure hunt will have the prizes and souvenirs along the given route!</p>
                    <ul className='ulContainer'>
                        <li>Containerized PASS-THRU Mission (Penang)</li>
                        <li>Unesco Heritage Walk Around Hunt (Penang, Melaka)</li>
                        <li>City Tour-Bus Hip-Hop Hunt (Kuala Lumpur)</li>
                        <li>Interior Mall Hunt (Genting Highland, Kuala Lumpur)</li>
                        <li>MRT Hunt (Kuala Lumpur)</li>
                        <li>Hidden Fortune Beach Hunting (Port Dickson)</li>
                        <li>Cycle Hunt (Pulau PangKor)</li>
                        <li>Amazing Car Hunt (Langkawi, KL-Kuantan)</li>
                    </ul>
                </div>

                <div className='containerThree'>
                    <div className='imageContainer'>
                        <img src={ImageFour} className='imageOne grow'/>
                        <img src={ImageOne} className='imageTwo grow'/><br/>
                        <img src={ImageThree} className='imageFour grow'/>
                        <img src={ImageTwo} className='imageThree grow'/>
                    </div>

                    <h1 className='containerThreeHOne'>Last but not least, IEC has the expertise and resources for effective planning, management and implementation of all kinds of creative yet challenging events that are suited to the needs of a particular organization. Any enquiry or tailored made <br/><span className='spanTwo'>“Treasure Hunt Team Building Activities”</span><br/> are most welcomed.</h1>
                    <div className='containerBorder'>
                        <h1 className='containerBorderHOne'>Custom questions set perhaps incorporated with your technical training, along with easier and funny one, your company get away or team bonding trips will be taken care of. Please do not hesitate to contact us for your best quotation for corporate packages!</h1>
                    </div>
                    <div className='arrowContainer'>
                        <img src={ArrowEnquiry} className='arrow'/>
                    </div>
                    <div className='buttonContainer'>
                        <Link to='/enquiry'><button className='enquiryButton'>Make an Enquiry</button></Link>
                    </div>
                </div>
            </div>
       </motion.div>
    )
}