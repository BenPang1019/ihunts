import React, { useEffect}  from 'react'
import { useNavigate } from 'react-router-dom'

export const ThankYouPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }, [])
  return (
    <div>
    ThankYou<br/>
    <a href='/'> Auto Redirecting to HomePage, If Not, Click Me</a>
    </div>
  )
}
