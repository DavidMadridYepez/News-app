import React, { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import getDateFrom from '../../utils/dateFormat'

function Item({ byline, lead_paragraph, headline, pub_date, multimedia }) {

  const img = multimedia[0] ? (multimedia[0].url) : ('')
  const theme = useContext(ThemeContext)

  return (
    <>
      <div className={`px-3 py-10 md:space-x-5 md:flex space-y-2 md:space-y-0${theme ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className='md:w-1/2'>
          {img ? (<img className='h-full' src={'https://www.nytimes.com/' + img} alt="No description" />) : (<div className='flex items-center justify-center p-10 w-full h-full bg-purple-100'><img src="./images/load.png" alt="" /></div>)}
        </div>
        <div className='md:w-1/2 flex flex-col space-y-5 justify-between'>
          <div className='space-y-5'>
            <h1 className='text-2xl'>{headline.main}</h1>
            <p className={`text-justify text-lg ${theme ? 'text-gray-300' : 'text-gray-600'}`}>{lead_paragraph}</p>
          </div>
          <p className={`${theme ? 'text-gray-300' : 'text-gray-600'}`}><span>{getDateFrom(pub_date)}</span><span>{byline.original}</span></p>
        </div>
      </div>
      <div className='border-b-2 border-gray-300 mx-3'></div>
    </>
  )
}

export default Item