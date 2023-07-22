import Navbar from '@/components/Navbar'
import Featured from '@/components/Featured'
import {  BsApple} from 'react-icons/bs'
import {BiLogoPlayStore} from 'react-icons/bi'
export default function Home() {
  return (
    < >
     <main  className='sm:px-14 px-8 z-10 bg-gradient   w-full relative'>
     <Navbar/>
         <section className='mt-16 z-10'>
          <div className='grid grid-cols-12'>
             <div className="sm:col-span-7 col-span-12  xl:text-7xl lg:text-6xl md:text-4xl xxs:text-3xl text-xl  text-white  flex flex-col  gap-y-2 tracking-wide text-justify ">
                 <p className='font-light'>Get the best</p>
                 <p className='font-medium'>exprience when</p>
                 <p  className='font-light' >sending messages.</p>
             </div>
             <div className="sm:col-span-5 col-span-12 sm:justify-self-end 	 sm:mt-0 mt-8	">
                   <p className='text-gray-300 font-light text-sm	text-justify pr-12 leading-5 '>Platform used to send messages with a myriad of features. by prioritizing the iuser exprience</p>
                   <div className='mt-8 flex flex-col     w-full sm:items-end gap-y-2   '>
                   <button type="button" className="w-fit text-blue-700 bg-white  border-none focus:outline-none  font-bold rounded-full  text-xs sm:px-5 px-3 py-3.5 flex items-center  sm:space-x-1 "><BsApple className=' text-lg'/> <span>Download now</span> </button>
                   <button type="button" className="w-fit text-white bg-transparent  border-2 border-white focus:outline-none  font-bold rounded-full  text-xs sm:px-5 px-3 py-3.5 flex  items-center sm:space-x-1 "> <BiLogoPlayStore className=' text-lg'/> <span>Download now</span></button>
                   </div>
             </div>
          </div>
         </section>
         <div className='mt-10 w-full flex justify-center'>
         <div className=' bg-chat_bg bg-cover w-full 2xl:h-[50rem] md:h-[30rem] h-[20rem] rounded-xl shadow-xl'></div>
         </div>
     </main>
    <Featured/>     
     </>
  )
}
