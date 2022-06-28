import React from 'react'

function Item({ byline, lead_paragraph, headline, pub_date, multimedia }) {
  const getDateFrom = date => new Date(date).toDateString()
  const url = multimedia[0].url
  return (
    <div className='p-5'>
      <h1 className='text-2xl'>{headline.main}</h1>
      <img src={'https://www.nytimes.com/' + url} alt="No description" />
      <p>{lead_paragraph}</p>
      <p><span>{getDateFrom(pub_date)}</span><span>{byline.original}</span></p>
    </div>
  )
}

export default Item