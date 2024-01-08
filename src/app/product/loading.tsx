const Loading = () => {

    // loading UI 
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 place-items-center'>
                <div className="w-full  max-w-sm bg-white gray-200 rounded-lg shadow dark:bg-gray-800 dark:gray-700 my-4 h-96">
                    <a href="" className="flex h-72 justify-center items-center">
                        <div className="p-8 rounded-lg object-contain h-60 w-10/12 bg-gray-300 " ></div>
                    </a>
                    <div className="px-5 pb-5 ">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate"></h5>
                        </a>

                        {/* <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white mt-3"></span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading