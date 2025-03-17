import React from 'react'

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-[70vh]">
            {/* <div className="animate-spin rounded-full h-20 w-20 border-4 border-t-green-300 border-gray-200"></div> */}
            <div className="w-5 h-5 bg-green-300 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
            <div className="w-5 h-5 bg-green-500 rounded-full animate-bounce"></div>
            <div className="w-5 h-5 bg-green-700 rounded-full animate-bounce [animation-delay:0.2s]"></div>
        </div>
    )
}

export default Loading