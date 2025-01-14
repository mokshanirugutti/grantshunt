import React from 'react'
import { Link } from 'react-router'

const HeroSection : React.FC = () => {
  return (
    
    <div className='flex flex-col justify-center items-center h-[calc(100vh-64px)]'>
        <h1 className='text-3xl font-medium'>Search for Grants</h1>
        <p className='w-72 text-center my-2'>Find your grants with our easy tool.</p>
        <div className='flex gap-5 mt-5'>
          <Link
          to='/search'
          >
          <button className='px-5 py-3 bg-foreground text-background rounded-md  hover:bg-background hover:text-foreground transition-all duration-300 ease-in-out border  border-foreground font-medium'>
            Start Search
          </button>
          </Link>
          <button className='px-5 py-3 border  border-foreground rounded-md '>
            Explore more
          </button>

        </div>
    </div>
  )
}

export default HeroSection