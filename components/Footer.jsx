import { assets } from "@/Assets/assets"
import Image from "next/image"

const Footer = () => {
  return (
    <footer>
        <div className="flex flex-col justify-around gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
        <Image src={assets.logo_light} width={120} alt="footer app"/>
        <p className="text-white text-sm">
            All rights reserved © Blogger 2026 [Muhammad Ibtisam]
        </p>
        <div className="flex">
            <Image src={assets.twitter_icon} alt="social media icon" width={40}/>
            <Image src={assets.facebook_icon} alt="social media icon" width={40}/>
            <Image src={assets.googleplus_icon} alt="social media icon" width={40}/>
        </div>
        </div>
    </footer>
  )
}

export default Footer