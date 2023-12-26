import React from 'react'

const NewsCard = ({ data }) => {
    const { author, title, description, urlToImage, content } = data;
    return (
        <div className='w-96 py-2 px-2 mx-24 my-10 border border-red-800'>
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