import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Item from './item'
import { ThemeContext } from '../utils/context'
import { useQuery } from 'react-query'
import FetchError from './errors/fetchError'

function Main() {

  const theme = useContext(ThemeContext)
  const { idcategory = 'world' } = useParams()
  const { data, error, isSuccess, isError } = useQuery(idcategory, () => fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${idcategory}&api-key=jj9i4vs1CmT5ytkvn8y3c46QWvonsd8U`).then(res => res.json()))

  if (isError) return <div> <FetchError error={error} /> </div>

  if (isSuccess && data.response) {
    return (
      <div className={`xl:px-60 md:px-40 ${theme ? 'bg-black text-white' : 'bg-white text-black'}`}>
        {data.response.docs.map((article, i) => {
          return (
            <a key={i} href={article.web_url} target='_blank' rel='noreferrer'>
              <Item {...article} />
            </a>
          )
        })}
      </div>
    )
  }

  return (
    <div className='flex border border-black justify-center h-96 text-4xl items-center'>
      <h1>Almost there!...</h1>
    </div>
  )
}

export default Main 