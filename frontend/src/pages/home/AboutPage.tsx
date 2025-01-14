import React from 'react'
import { Link } from 'react-router'

const AboutPage  : React.FC = () => {
  return (
    <div className='  '>
        <div className='text-center my-10 pb-20'>
            <h1 className="text-2xl leading-8 md:text-3xl md:leading-9 lg:text-4xl lg:leading-snug w-96  tracking-tight font-semibold mx-auto ">
            Capture the Available <span className='text-violet-500'>Funding </span> in Your Sector
            </h1>
                <p className='w-1/2 mx-auto my-2'>
                    The Grant team is expert at optimally positioning your organization to secure government funding. We cut through the confusion, uncovering the financial resources you need to reach new frontiers in innovation and growth.
                </p>
        </div>
        
        <div className='my-10 py-20'>
            <h1 className='text-2xl my-3 font-semibold'>MEET OUR SOLUTION </h1>
            <div className='w-full md:w-1/3 leading-6'>
                We provide best personalized recommendations for funding opportunities based on your organization's needs and budget.We also provide a user-friendly interface that makes it easy to navigate and search for funding opportunities.
            </div>
        </div>

        <div className='my-10 py-20 text-center h-64'>
            <h1 className='text-xl  md:text-2xl lg:text-3xl font-semibold'>Ready for Funding</h1>
            <Link to='/search'>
                <button className='px-10 py-2 bg-foreground text-background rounded-md hover:rounded-xl transition-all duration-200 ease-in-out my-4 font-medium tracking-wide hover:scale-105' >Start Search</button>
            </Link>
        </div>
    </div>
  )
}

export default AboutPage