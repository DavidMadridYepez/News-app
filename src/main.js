import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Main() {
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])

  let params = useParams('world')

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${params}&sort&By=popularity&apiKey=a3bfb7c1c04e4f3095dbdedd443252d9`)
      const articles = await response.json()
      setArticles(articles.response)
      setIsLoading(false)
    }
    getArticles()
  }, [params])

  if (isLoading) {
    <div>
      Almost there!...
    </div>
  }

  return (
    <>
      {articles.map((article) => {
        <div>
          {article.title}
        </div>
      })}
    </>
  )
}

export default Main