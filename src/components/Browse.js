import React, { useEffect, useState } from 'react'
import Header from './Header'
import { NEWS_API_KEY, NEWS_API_URL } from '../utils/constants'
import NewsCard from './NewsCard'
import { useSelector } from 'react-redux'
import SavedNews from "./SavedNews";

const Browse = () => {
  const gridView = useSelector((state) => state.grid.isGridView);
  const toggleSavedNews = useSelector((state) => state.saveNews.showSavedNews);
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
    <div>

      <div>
        <Header />
      </div>

      {toggleSavedNews ? <SavedNews /> :
        <div className={`${gridView && "grid"} flex flex-wrap justify-center `}>
          {allNews.map((news, idx) =>
            < NewsCard key={idx} data={news} />
          )}
        </div>}


    </div >
  )
}

export default Browse