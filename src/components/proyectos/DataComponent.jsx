import React, { useState } from 'react'

function DataComponent({ title, desc, link, images, flowReverse, stack }) {
    const [mainImage, setMainImage] = useState(images[0])
    return (

        <>

            {/* <div className={`bg-amber-400 mx-12 flex justify-center items-center w-[80vw] p-4 gap-3  ${flowReverse} max-md:flex-col`} > */}
            <div className={` flex justify-center items-center w-[80vw] p-4 mt-5 gap-3  ${flowReverse} max-md:flex-col`} >
                {/* datos */}
                <div className=" flex justify-center items-start gap-y-3 flex-col lg:w-1/2">
                    <h4 className="p-2 text-3xl text-center ">{title}</h4>
                    <p className="text-base tracking-wide font-light">
                        {desc}
                    </p>
                    <div className='flex justify-start items-center w-full gap-2'>
                        {
                            stack.map((st, index) => (
                                <img
                                    key={index}
                                    src={`/img/tech/${st}.svg`}
                                    alt=""
                                    className='size-6' />

                            ))
                        }
                    </div>
                    <div className=' flex justify-start  gap-3 w-full'>

                        <a href={link} target='_blank' className=" block hover:scale-125 hover:rotate-360 transition-transform duration-300 ease-in-out ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" width={42} strokeWidth={1.25}> <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path> <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path> <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path> <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path> <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path> <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path> <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path> <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path> <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path> </svg>
                        </a>

                        <a href={link} target='_blank' className=" block hover:scale-125 hover:rotate-360 transition-transform duration-300 ease-in-out ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width={42} stroke-width="1.25">
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                            </svg>
                        </a>

                    </div>
                </div>
                {/* images */}
                <div
                    className="container flex justify-center items-center flex-col gap-y-2 my-8"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                >
                    <img
                        src={mainImage}
                        alt="Imagen principal"
                        className="main-image w-lg min-w-sm"
                    />
                    <div className="flex justify-center items-center gap-x-2 flex-wrap">

                        {
                            images.map((img, index) => (

                                <img
                                    key={index}
                                    src={img}
                                    alt="Miniatura 1"
                                    className="thumbnail h-[80px] w-[80px] cursor-pointer"
                                    onMouseOver={() => setMainImage(img)}
                                />
                            ))
                        }


                    </div>
                </div>
            </div>

        </>
    )
}

export default DataComponent