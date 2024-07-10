import React from 'react'

const Background = () => {
    return (
        <div className='fixed z-[2] w-full h-screen '>
            <div className=' absolute w-full py-10 flex justify-center text-zinc-600 font-semiibold text-2xl '>Documents</div>
            <h1 className='absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] text-zinc-900 font-semibold text-[13vw]'>Docs.</h1>
        </div>
    )
}

export default Background