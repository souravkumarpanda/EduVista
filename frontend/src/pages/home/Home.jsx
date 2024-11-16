import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css';
import Testimonials from '../../components/testimonials.js/Testimonials';
const Home = () => {
  const navigate=useNavigate()
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to EduVista</h1>
          <p>Aim, Act, Achieve</p>
          
          <button  onClick={()=>navigate("/courses")} className='common-btn'>Get Started</button>
        </div>
      </div>
      <Testimonials/>
    </div>
  )
}

export default Home