'use client';
import Image  from 'next/image';
import { assets } from '../Assets/assets';

const Header = () => {
  return (
    <div className='py-4 px-4 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} alt="The Logo of website" width={180} className='w-[130px] h-10 sm:w-auto'/>
            <button className='flex items-center gap-2 font-medium py-1 px-3 
            sm:py-3 sm:px-6 border border-solid border-black rounded-2xl
             hover:shadow-xs shadow-[7px_7px_0px_#000000] transition-shadow'>
                Get Started <Image src={assets.arrow} alt='' className=''/>
            </button>
        </div>
        <div className='text-center my-8 '>
            <h1 className='text-3xl sm:text-5xl font-medium'>
                Latest Blogs
            </h1>
            <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
                Discover insightful articles, tips, and stories from our community. Stay updated with the latest trends and ideas that matter.
            </p>
            <form className='  max-w-[500px] scale-75 flex justify-between sm:scale-100 mx-auto mt-10 border hover:shadow-xs transition-shadow border-black shadow-[7px_7px_0px_#000000] rounded-2xl'>
                <input type="email" placeholder='Enter Your Email' className='pl-4 outline-none py-4' />
                <button type='submit'
                className='border-black px-4 active:bg-gray-600 rounded-2xl active:text-white font-semibold '>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Header