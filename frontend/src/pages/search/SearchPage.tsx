import { CustomSearchComponent } from '@/components/CustomSearch'
import React from 'react'
import AllGrants from './AllGrants'

const SearchPage : React.FC = () => {


  return (
    <div className='pagePadding ' >
      <div>
        <CustomSearchComponent/>
      </div>
      <div className='p-10'>
        <AllGrants/>
      </div>
    </div>
  )
}

export default SearchPage