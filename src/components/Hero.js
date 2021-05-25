import React from 'react'
import Card from '../UI/Card'
import Logo from './Logo'
import Navbar from './Navbar'

const Hero = (props) => {
  return (
    <div>
    <Card>
    <div style={{padding:'25px 0'}} >
      <Logo/>
    </div>
  
    <Navbar />
    </Card>
       
    </div>
  )
}

export default Hero