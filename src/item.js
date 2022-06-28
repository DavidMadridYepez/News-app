import React from 'react'

function Item({ byline, web_url, lead_paragraph, multimedia, headline, pub_date }) {
  let url = multimedia[0].url
  const getDateFrom = date => new Date(date).toDateString()

  return (
    <div className='p-5'>
      <h1 className='text-2xl'>{headline.main}</h1>
      <img src={'https://www.nytimes.com/' + url} alt="" />
      <p>{lead_paragraph}</p>
      <p><span>{getDateFrom(pub_date)}</span><span>{byline.original}</span></p>
    </div>
  )
}

export default Item