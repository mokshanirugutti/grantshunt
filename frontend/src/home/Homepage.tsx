import React from 'react'
import HeroSection from './HeroSection'
import AboutPage from './AboutPage'

const Homepage : React.FC = () => {
  return (
    <div className='pagePadding'>
      <HeroSection/>
      <AboutPage/>
    </div>
  )
}

export default Homepage