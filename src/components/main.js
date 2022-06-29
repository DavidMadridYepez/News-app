import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from './item'

function Main() {
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])

  const { idcategory = 'world' } = useParams()

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${idcategory}&api-key=jj9i4vs1CmT5ytkvn8y3c46QWvonsd8U`)
      const news = await response.json()
      setArticles(news.response.docs)
      setIsLoading(false)
    }
    getArticles()
  }, [idcategory])

  if (isLoading) {
    return (
      <div>
        Almost there!...
      </div>
    )
  }

  return (
    <div>
      <h1>These are the news</h1>
      {articles.map((a, i) => {
        return (
          <a key={i} href={a.web_url} target='_blank'>
            <Item {...a} />
          </a>
        )
      })}
    </div>
  )
}

export default Main

