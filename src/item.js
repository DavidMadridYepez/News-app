import React from 'react'

function Item({ byline, web_url, lead_paragraph, multimedia, headline, pub_date }) {
  return (
    <div className='p-5'>
      <h1 className='text-2xl'>{headline.main}</h1>
      <p>{lead_paragraph}</p>
      <p>{pub_date}</p>
    </div>
  )
}

export default Item