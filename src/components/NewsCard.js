import React from 'react'
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ data }) => {
    const navigate = useNavigate()
    const { author, title, urlToImage } = data;
    const handleNews = () => {
        // console.log("news");
        navigate("/news")
    }

    return (
        <div onClick={handleNews} className='w-96 py-2 px-2 mx-24 my-10 border border-red-800 cursor-pointer'>
            <h2 className='text-xl font-medium'>{title}</h2>
            <img
                className='rounded-lg'
                src={urlToImage}
                alt={title}
            />
            <h3 className='text-center mt-2 text-lg italic'>Author : {author}</h3>
        </div>
    )
}

export default NewsCard