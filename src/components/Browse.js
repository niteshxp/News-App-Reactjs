import React, { useEffect, useState } from 'react'
import Header from './Header'
import { NEWS_API_KEY, NEWS_API_URL } from '../utils/constants'
import NewsCard from './NewsCard'
import { useSelector } from 'react-redux'
import gridSlice from '../store/gridSlice'
// import { Link } from 'react-router-dom'

const Browse = () => {
  const gridView = useSelector((state) => state.grid.isGridView);
  const [allNews, setAllNews] = useState(null);

  const fetchNewsData = async () => {
    const data = await fetch(NEWS_API_URL + NEWS_API_KEY);
    const json = await data.json();
    setAllNews(json.articles)
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
      <div className={`${gridView && "grid"} flex flex-wrap justify-center border border-yellow-700`}>
        {/* <Link to=''> */}
        {allNews.map((news) => <NewsCard key={news.source.id} data={news} />)}
        {/* </Link> */}
      </div>
    </div >
  )
}

export default Browse