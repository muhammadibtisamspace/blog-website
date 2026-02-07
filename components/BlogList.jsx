import { blog_data } from '@/Assets/assets';
import BlogItem from '@/components/BlogItem';
const BlogList = () => {
  return (
    <div>
        <div className="flex justify-center items-center gap-6 my-10">
            <button className="bg-black text-white py-1 px-4 rounded-2xl">
                All
            </button>
            <button className="bg-black text-white py-1 px-4 rounded-2xl">
                Technology
            </button>
            <button className="bg-black text-white py-1 px-4 rounded-2xl">
                Startup
            </button>
            <button className="bg-black text-white py-1 px-4 rounded-2xl">
                Lifestyle
            </button>
        </div>
        <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
            {blog_data.map((blog, index)=>{
                return <BlogItem title={blog.title} image={blog.image} description={blog.description} category={blog.category} key={index} />
            })}
        </div>
    </div>
  )
}

export default BlogList