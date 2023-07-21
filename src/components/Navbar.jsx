'use client'
import React,{useState,useEffect} from 'react'
import {BsChatDotsFill , BsApple} from 'react-icons/bs'
import {BiLogoPlayStore , BiMenuAltLeft} from 'react-icons/bi'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [width,setWidth]=useState(null)
  
  const [toggle,setToggle]=useState(false)
  const router=useRouter()
  useEffect(()=>{
    setWidth(window.innerWidth)
        window.addEventListener('resize',(e)=>{
              setWidth(e.target.innerWidth)
        })
  },[router])
  return (
    <div className='relative  '>
<nav className={` pt-5  relative overflow-x-hidden`}>
  <div className=" flex  items-center justify-between">
  <a href="https://flowbite.com/" className="flex items-center">
      <BsChatDotsFill  className='text-xl  text-white mr-1'/>
      <span className="self-center text-lg font-semibold whitespace-nowrap text-white">Chatbox</span>
  </a>
  <div className={` ${width > 768 ? 'flex  ':'hidden' }   items-center justify-between   `}>
    <ul className="flex  font-medium space-x-16  gap-y-5">
      <li>
        <a href="#" className="block   text-white  text-sm font-semibold  rounded md:bg-transparent  " aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block  text-white  text-sm font-semibold rounded md:bg-transparent  " aria-current="page">Features</a>
      </li>
      <li>
        <a href="#" className="block   text-white  text-sm font-semibold rounded md:bg-transparent  " aria-current="page">About Us</a>
      </li>
      <li>
        <a href="#" className="block   text-white  text-sm font-semibold rounded md:bg-transparent  " aria-current="page">Download</a>
      </li>
    </ul>
  </div>
  <div className='flex justify-center items-center'>
  <button type="button" className="text-blue-700 bg-white  border-none focus:outline-none  font-bold rounded-full  text-xs px-5 py-3.5  ">Try For Free</button>
  <button onClick={()=>setToggle(!toggle)} className={` ${ width > 768 ? ' hidden':'flex '} ml-4 w-8 h-8  justify-center items-center rounded-full bg-white text-blue-700 text-lg border-none focus:outline-none`}>
      <BiMenuAltLeft/>
  </button>
  </div>
  </div>
       
</nav>
  <div className={`py-5 absolute right-[-56px] mt-5  transistion ease-in	duration-75	shadow-lg w-[10rem] h-fit bg-white ${toggle && width < 768 ? 'translate-x-0':'translate-x-[136%]'}  `}>
               <ul className='flex flex-col items-center justify-between gap-y-10'>
               <li>
        <a href="#" className="block   text-blue-600  text-sm font-semibold  rounded md:bg-transparent  " aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block  text-blue-600  text-sm font-semibold rounded md:bg-transparent  " aria-current="page">Features</a>
      </li>
      <li>
        <a href="#" className="block   text-blue-600  text-sm font-semibold rounded md:bg-transparent  " aria-current="page">About Us</a>
      </li>
      <li>
        <a href="#" className="block   text-blue-600  text-sm font-semibold rounded md:bg-transparent  " aria-current="page">Download</a>
      </li>
               </ul>
             </div>
</div>
  )
}

export default Navbar
