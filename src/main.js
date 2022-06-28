import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from './item'

function Main() {
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])

  const { idcategory = 'world' } = useParams()

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${idcategory}&sortBy=popularity&apiKey=a3bfb7c1c04e4f3095dbdedd443252d9`)
      const news = await response.json()
      setArticles(news.articles)
      setIsLoading(false)
    }
    getArticles()
  }, [idcategory])

  if (isLoading) {
    <div>
      Almost there!...
    </div>
  }

  return (
    <div>
      <h1>This is the news</h1>
      {articles && articles.map((a) => {
        return (
          <div key={a.title}>
            <Item {...a} />
          </div>
        )
      })}
    </div>
  )
}

export default Main

