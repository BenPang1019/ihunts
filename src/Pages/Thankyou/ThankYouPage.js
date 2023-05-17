import React, { useEffect}  from 'react'
import { useNavigate } from 'react-router-dom'
import "../Thankyou/ThankYouPage.css"
export const ThankYouPage = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }, [])
  
  return (
    <div className='thankyou'>
      <div className='web'>
        <div className='containerOne'>
          <h1 className='containerOneHOne'>THANKS HUNTER !</h1>
          <h1 className='containerOneHTwo'>YOU HAVE SUCCESSFULLY PURCHASED THE TICKETS</h1>
        </div>  
      </div>

      <div className='mobile'>

      </div>
    </div>
  )
}
