import { CustomSearchComponent } from '@/components/CustomSearch'
import React from 'react'

const SearchPage : React.FC = () => {
  return (
    <div className='pagePadding ' >
      <div>
        <CustomSearchComponent/>
      </div>
    </div>
  )
}

export default SearchPage