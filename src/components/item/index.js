import React, { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import getDateFrom from '../../utils/dateFormat'

function Item({ byline, lead_paragraph, headline, pub_date, multimedia }) {

  const img = multimedia[0] ? (multimedia[0].url) : ('')
  const theme = useContext(ThemeContext)

  return (
    <div className={`py-8 px-3 md:p-5 md:space-x-5 md:flex ${theme ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className='md:w-1/2'>
        {img ? (<img className='h-full' src={'https://www.nytimes.com/' + img} alt="No description" />) : (<div className='flex items-center justify-center p-10 w-full h-full bg-blue-100'>Loading...</div>)}
      </div>
      <div className='md:w-1/2 flex flex-col space-y-5 justify-between'>
        <div className='space-y-5'>
          <h1 className='text-2xl'>{headline.main}</h1>
          <p className={`${theme ? 'text-gray-300' : 'text-gray-600'}`}>{lead_paragraph}</p>
        </div>
        <p className={`${theme ? 'text-gray-300' : 'text-gray-600'}`}><span>{getDateFrom(pub_date)}</span><span>{byline.original}</span></p>
      </div>
      <div className={`border mt-5 md:border-none ${theme ? 'border-gray-300' : 'border-gray-600'}`}></div>
    </div>
  )
}

export default Item