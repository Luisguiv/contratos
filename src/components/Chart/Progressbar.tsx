import React from 'react'

export function Progressbar() {
    return (
        <div className="w-full lg:w-5/12">
            <div className="bg-blue-300 relative h-[10px] w-[468px] rounded-2xl">
                <div className="bg-blue-500 absolute top-0 left-0 h-full w-[85%] rounded-2xl"></div>
                <div className="bg-blue-700 absolute top-0 left-0 h-full w-[50%] rounded-2xl"></div>
            </div>
        </div>
    )
}

export default Progressbar
