import React from 'react'
import Image from 'next/image'
import { BsFillClockFill, BsFillEmojiSmileFill } from 'react-icons/bs'
import { MdLock } from 'react-icons/md'
const Featured = () => {
    return (
        <div className='sm:px-14 px-8 base:mt-28 mt-8'>
            <div className='flex justify-center'>
                <button type="button" className="text-blue-600 bg-gray-100  border-none focus:outline-none  font-bold rounded-full  text-xs px-3 py-2  shadow ">Featured</button>
            </div>
            <p className='sm:text-2xl text-lg text-center mt-4 font-medium'>Reason why you should choose a <span className='text-blue-600 font-bold'>Chatbox</span></p>
            <p className='text-center xxs:text-sm text-xs font-medium text-gray-300 mt-4 xxs:leading-8'>Chatbox has several features that make the reason <br /> why you choose chatbox</p>

            <div className='grid base:grid-cols-12 xs:grid-cols-8 grid-cols-4 mt-10 gap-10 	'>
                <div className='shadow col-span-4 px-10 py-8 bg-blue-600 flex justify-center items-center flex-col gap-y-2 rounded-xl'>
                    <div className='bg-white rounded-full w-10 h-10 flex justify-center items-center'>
                        <BsFillEmojiSmileFill className='text-2xl  text-blue-600' />
                    </div>
                    <p className='text-white font-medium'>Easy to use</p>
                    <p className='leading-5 text-center text-xs font-light text-gray-200'>Easy to use for anyone. <br />and simple.</p>
                    {/* <p className='text-center text-xs font-light text-gray-200'>and simple.</p> */}
                </div>
                <div className='shadow col-span-4 px-10 py-8 bg-gray-100 flex justify-center items-center flex-col gap-y-2 rounded-xl'>
                    <div className='bg-white rounded-full w-10 h-10 flex justify-center items-center'>
                        <BsFillClockFill className='text-2xl  text-blue-600' />
                    </div>
                    <p className='text-black font-medium'>Real time</p>
                    <p className='text-center text-xs leading-5  text-gray-500'>Connect with customers <br /> in real time</p>
                    {/* <p className='text-center text-xs  text-gray-500'>in real time</p> */}
                </div>
                <div className='shadow col-span-4 px-10 py-8 bg-gray-100 flex justify-center items-center flex-col gap-y-2 rounded-xl'>
                    <div className='bg-white rounded-full w-10 h-10 flex justify-center items-center'>
                        <MdLock className='text-2xl  text-blue-600' />
                    </div>
                    <p className='text-black font-medium'>Safety and Private</p>
                    <p className='text-center leading-5 text-xs  text-gray-500'>Enjy your comfort and safety <br />when communicate. </p>
                    {/* <p className='text-center text-xs  text-gray-500'>when communicate.</p> */}
                </div>
            </div>

            <div className='base:mt-28 mt-8 grid base:grid-cols-12 grid-cols-6 md_link:gap-20 gap-10 '>
                <div className="col-span-6 flex flex-col justify-center gap-y-5 base:py-16">
                    <p className='sm:text-2xl text-lg  mt-4 font-normal sm:leading-[3rem] text-justify'>Communicate more <br /> efficiently by using <br /> <span className='text-blue-600 font-semibold'>Chatbox</span></p>
                    <p className='break-words text-justify	 sm:leading-8 text-gray-400 font-medium text-sm'>Send messages easily using only mobile or desktop  applications. and with a myriad of features that can make your exprience different from other applications.</p>
                    <div className='flex xxs:gap-x-16 gap-x-8'>
                        <div>
                            <p className='font-semibold xxs:text-4xl text-xl '>1M + </p>
                            <p className='text-sm text-gray-400 font-medium mt-2'>Users</p>
                        </div>
                        <div>
                            <p className='font-semibold xxs:text-4xl text-xl '>2M +</p>
                            <p className='text-sm text-gray-400 font-medium mt-2'>Download</p>
                        </div>
                        <div>
                            <p className='font-semibold xxs:text-4xl text-xl '>2 +</p>
                            <p className='text-sm text-gray-400 font-medium mt-2'>Years</p>
                        </div>
                    </div>
                </div>
                <div className="pl-5 pt-5 col-span-6 bg-gray-100  overflow-hidden rounded-xl shadow base:h-auto sm:h-[30rem] h-60 ">
                    <div className='h-full w-full bg-cover bg-message bg-no-repeat'></div>
                </div>
            </div>
            <div className=' mt-8 grid base:grid-cols-12 grid-cols-6 md_link:gap-20 base:gap-10 gap-10 '>
                <div className="pl-5 pt-5 col-span-6 bg-gray-100  overflow-hidden rounded-xl shadow  base:h-auto sm:h-[30rem] base:row-start-2 h-60 ">

                    <div className='h-full w-full bg-cover bg-chatui_bg bg-no-repeat'></div>
                </div>
                <div className="col-span-6 flex flex-col justify-center gap-y-5 base:py-16 base:row-start-2	row-start-1	 ">
                    <p className='sm:text-2xl text-lg  mt-4 font-normal sm:leading-[3rem] text-justify'>Send messages in <br /> <span className='text-blue-600 font-semibold'>Real Time</span>&nbsp;without,<br />any delay between us</p>
                    <p className='break-words  sm:leading-8 text-gray-400 font-medium text-sm text-justify'>Send messages easily and also without any delay  between us. make the convince of sending messages better and fun</p>
                    <div className='flex xxs:gap-x-16 gap-x-8'>
                        <div>
                            <p className='font-semibold xxs:text-4xl text-xl 	'>1M + </p>
                            <p className='text-sm text-gray-400 font-medium mt-2'>Users</p>
                        </div>
                        <div>
                            <p className='font-semibold xxs:text-4xl text-xl 	'>2M +</p>
                            <p className='text-sm text-gray-400 font-medium mt-2'>Download</p>
                        </div>
                        <div>
                            <p className='font-semibold xxs:text-4xl text-xl 	'>2 +</p>
                            <p className='text-sm text-gray-400 font-medium mt-2'>Years</p>
                        </div>
                    </div>
                </div>

            </div>

          
          
        </div>
    )
}

export default Featured
