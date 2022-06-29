import React from 'react'

function Item({ byline, lead_paragraph, headline, pub_date, multimedia }) {
  const getDateFrom = date => new Date(date).toDateString()
  const img = multimedia[0] ? (multimedia[0].url) : ('')

  return (
    <div className='p-5'>
      <h1 className='text-2xl'>{headline.main}</h1>
      {img ? (<img src={'https://www.nytimes.com/' + img} alt="No description" />) : (<div className='w-20 h-20 bg-blue-500'>Loading...</div>)}
      <p>{lead_paragraph}</p>
      <p><span>{getDateFrom(pub_date)}</span><span>{byline.original}</span></p>
    </div>
  )
}

export default Item