'use Client'
import { blog_data } from '@/Assets/assets';
import BlogItem from '@/components/BlogItem';
import { useState } from 'react';
const BlogList = () => {
    const [menu,setMenu] = useState('All');

  
  return (
    <div>
        <div className="flex justify-center items-center gap-6 my-10  md:flex">
            <button onClick={() => setMenu('All')} className={menu === 'All' ? "bg-black text-white py-1 px-4 rounded-2xl" : "bg-gray-300 text-black py-1 px-4 rounded-2xl"}>
                All
            </button>
            <button onClick={() => setMenu('Technology')} className={menu === 'Technology' ? "bg-black text-white py-1 px-4 rounded-2xl" : "bg-gray-300 text-black py-1 px-4 rounded-2xl"}>
                Technology
            </button>
            <button onClick={() => setMenu('Startup')} className={menu === 'Startup' ? "bg-black text-white py-1 px-4 rounded-2xl" : "bg-gray-300 text-black py-1 px-4 rounded-2xl"}>
                Startup
            </button>
            <button onClick={() => setMenu('Lifestyle')} className={menu === 'Lifestyle' ? "bg-black text-white py-1 px-4 rounded-2xl" : "bg-gray-300 text-black py-1 px-4 rounded-2xl"}>
                Lifestyle
            </button>
        </div>
        <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
            {blog_data.filter((blog) => menu === 'All' ? true : blog.category === menu).map((blog, index)=>{
                return <BlogItem title={blog.title} image={blog.image} description={blog.description} category={blog.category} key={index} />
            })}
        </div>
    </div>
  )
}

export default BlogList