
const ShimmerCard = () => {
    return (
        <div className='w-96 h-64 py-2 px-2 mx-24 my-10 bg-gray-200 rounded-lg'>
            <img className='rounded-lg h-40 w-full' />
            <h3 className='text-center mt-2 text-lg italic'></h3>
            <h5 className='text-center cursor-pointer bg-gray-300 rounded-lg my-2'></h5>
            <button
                className='bg-gray-400 text-white w-full py-2 px-2 rounded-lg text-center text-xs'>
            </button>
        </div>
    )
}


const Shimmer = () => {
    return (
        <div className='flex flex-wrap justify-center mt-10'>
            {
                Array(10).fill().map((val, index) => {
                    return <ShimmerCard key={index} />
                })
            }
        </div>
    )
}

export default Shimmer;