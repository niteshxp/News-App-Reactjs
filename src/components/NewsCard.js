import React from 'react'
import { useDispatch } from 'react-redux';
import { saveNews } from '../store/savedNewsSlice';

const NewsCard = ({ data }) => {
    const dispatch = useDispatch();
    const { author, title, urlToImage, url } = data;
    
    const handleSavedNews = (data) => {
        dispatch(saveNews(data));
    }


    return (
        <div className='w-96 py-2 px-2 mx-24 my-10'>
            <h2 className='text-xl font-medium'>{title}</h2>
            <img
                className='rounded-lg h-40 w-full'
                src={urlToImage}
                alt={title}
            />
            <h3 className='text-center mt-2 text-lg italic'>Author : {author}</h3>
            <h5 className='text-center cursor-pointer bg-gray-400 rounded-lg my-2'><a target='_blank' href={url}>Click to Read More...</a></h5>
            <button
                onClick={(e) => e.preventDefault() || handleSavedNews({ data })}
                className='bg-black text-white w-full py-2 px-2 rounded-lg text-center text-xs'>
                ADD TO FAVORITE
            </button>
        </div>
    )
}

export default NewsCard