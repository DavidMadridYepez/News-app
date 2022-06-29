import React, { useContext } from 'react'
import { ThemeContext } from './context'

function Item({ byline, lead_paragraph, headline, pub_date, multimedia }) {
  const getDateFrom = date => new Date(date).toDateString()
  const img = multimedia[0] ? (multimedia[0].url) : ('')
  const theme = useContext(ThemeContext)

  return (
    <div className={`p-5 flex ${theme ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className='w-1/2'>
        {img ? (<img className='' src={'https://www.nytimes.com/' + img} alt="No description" />) : (<div className='w-20 h-20 bg-blue-500'>Loading...</div>)}
      </div>
      <div className='w-1/2'>
        <h1 className='text-2xl'>{headline.main}</h1>
        <p>{lead_paragraph}</p>
        <p><span>{getDateFrom(pub_date)}</span><span>{byline.original}</span></p>
      </div>
    </div>
  )
}

export default Item