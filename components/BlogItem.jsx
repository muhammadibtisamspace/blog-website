import { assets } from '@/Assets/assets';
import Image  from 'next/image';
const BlogItem = ({category,title,image,description}) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[7px_7px_0px_#000000] transition-shadow rounded-2xl text-center items-center justify-center mt-6">
      <Image src={image} alt="blog image" className="border-b border-black rounded-t-2xl" width={400} height={400} />
      <p className='ml-5 mt-5 px-3 inline-block bg-black text-white text-sm rounded-2xl my-2'>
        {category}
      </p>
      <div>
        <h5 className='tracking-tight mb-2 text-lg font-medium text-gray-900'>
          {title}
        </h5>
        <p className='mb-3 pl-2 text-sm tracking-tight text-gray-700'>
          {description}
        </p>
        <div className='items-center py-2 font-semibold text-center justify-center items-center flex '>
          Read More  <Image src={assets.arrow} alt="arrow" className=' ml-2' width={12} height={20} />
        </div>
      </div>
    </div>
  )
}

export default BlogItem