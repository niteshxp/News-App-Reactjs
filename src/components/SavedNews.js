import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAll } from "../store/savedNewsSlice";

const SavedNews = () => {
    const dispatch = useDispatch();
    const gridView = useSelector((state) => state.grid.isGridView);
    const savedData = useSelector((store) => store.saveNews.news)

    const handleClearAll = () => {
        dispatch(clearAll())
    }

    return (
        <div>
            <div className='flex justify-center'>
                <button onClick={handleClearAll} className=' bg-black text-white py-2 px-2 rounded-lg' >{(savedData.length) ? "Clear All News" : "No News Added to Favorite"}</button>
            </div>
            <div className={`${gridView && "grid"} flex flex-wrap justify-center`}>
                {savedData.map(({ data }, idx) => (
                    <div className='w-96 py-2 px-2 mx-24 my-10 border border-red-800 cursor-pointer'>
                        <h2 className='text-xl font-medium'>{data.title}</h2>
                        <img
                            className='rounded-lg h-40 w-full'
                            src={data.urlToImage}
                            alt={data.title}
                        />
                        <h3 className='text-center mt-2 text-lg italic'>Author : {data.author}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SavedNews