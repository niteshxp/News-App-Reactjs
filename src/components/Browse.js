import React, { useEffect, useState } from 'react'
import Header from './Header'
import { NEWS_API_KEY, NEWS_API_URL } from '../utils/constants'
import NewsCard from './NewsCard'

const Browse = () => {

  const [allNews, setAllNews] = useState(null);

  const fetchNewsData = async () => {
    const data = await fetch(NEWS_API_URL + NEWS_API_KEY);
    const json = await data.json();
    setAllNews(json.articles)
    // console.log(allNews);
    // console.log(json.articles);
    // const { author, title, description, urlToImage, content, url } = json.articles[0];
    // console.log(title, author);
  }

  useEffect(() => {
    fetchNewsData()
  }, [])

  //early return
  if (!allNews) return null

  return (
    <div className='border border-black'>
      <div className='border border-blue-700'>
        <Header />
      </div>
      <div className='flex flex-wrap justify-center border border-yellow-700'>
        {allNews.map((news) => <NewsCard key={news.source.id} data={news} />)}
      </div>
    </div >
  )
}

export default Browse