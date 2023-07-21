import React from 'react'
import { BsChatDotsFill, BsApple } from 'react-icons/bs'
import { BiLogoPlayStore } from 'react-icons/bi'
const Footer = () => {
    return (
        <footer className=' w-full px-14 pt-14 pb-5 bg-black'>
            <div className='flex md:flex-row flex-col justify-between md:items-center border-b border-gray-500 pb-10 '>
                <p className='font-bold text-4xl text-white'>Want to stay Connected?</p>
                <div className='flex gap-x-5 items-center md:mt-0 mt-5'>
                    <button type="button" className="w-fit text-white bg-blue-700  border-none focus:outline-none  font-bold rounded-full  text-xs xxs:px-5 px-3 py-3.5 flex items-center  space-x-1 "><BsApple className='text-white text-lg' /> <span>Download now</span> </button>
                    <button type="button" className="w-fit text-white bg-transparent  border-2 focus:outline-none  font-bold rounded-full  text-xs xxs:px-5 px-3 py-3.5 flex  items-center space-x-1 "> <BiLogoPlayStore className='text-white text-lg' /> <span>Download now</span></button>
                </div>
            </div>
            <div className='pt-10 flex md:flex-row flex-col  justify-between gap-y-10'>
                <div className='space-y-8 w-full'>
                    <a href="https://flowbite.com/" className="flex items-center">
                        <BsChatDotsFill className='text-xl  text-white mr-1' />
                        <span className="self-center text-lg font-semibold whitespace-nowrap text-white">Chatbox</span>
                    </a>
                    <p className='text-sm  text-gray-600 font-medium leading-6 '>
                        Platform used to send messages <br /> with a myriad of features. by <br /> prioritizing the iuser exprience
                    </p>
                    <p className='text-gray-400 text-sm  font-medium'>mail@chatbox.com</p>

                </div>
                <div className='flex justify-between w-full  '>
                   <div className='flex flex-col justify-start '>
                     <h1 className='text-white text-sm font-semibold'>Home</h1>
                     <ul className='mt-10 space-y-5 text-gray-400 text-xs font-medium'>
                        <li>About us </li>
                        <li>Download </li>
                        <li>Community</li>
                     </ul>
                   </div>
                   <div className='flex flex-col justify-start '>
                     <h1 className='text-white text-sm font-semibold'>Features</h1>
                     <ul className='mt-10 space-y-5 text-gray-400 text-xs font-medium'>
                        <li>Get started </li>
                        <li>Privacy policy </li>
                     </ul>
                   </div>
                   <div className='flex flex-col justify-start '>
                     <h1 className='text-white text-sm font-semibold'>Social media</h1>
                     <ul className='mt-10 space-y-5 text-gray-400 text-xs font-medium'>
                        <li>Instagram </li>
                        <li>Linkdin </li>
                     </ul>
                   </div>
                   
                </div>
            </div>
            <p className=' text-center text-xs text-white font-medium tracking-wide	mt-8'>All right reserved by chatbox</p>
        </footer>
    )
}

export default Footer
