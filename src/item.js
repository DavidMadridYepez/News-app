import React from 'react'

function Item({ title, author, description, source, url, urlToImage, publishedAt, }) {
  return (
    <div className='p-5'>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{author}+{publishedAt}</p>
    </div>
  )
}

export default Item