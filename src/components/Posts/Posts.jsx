import Post from "./Post"
import PostAdd from "./PostAdd"
import ImgFive from './../../assets/photo-5.png'
import ImgSix from './../../assets/photo-6.png'
import ImgSeven from './../../assets/photo-7.png'
import { Divider } from 'antd'
const Posts = () => {
    const posts = [
        {
            text: "Peace On Earth A Wonderful Wish But No Way"
        },
        {
            text: "One of the perks of working in an international company is sharing knowledge with your colleagues. ",
            images: [ImgFive, ImgSix, ImgSeven]
        },
    ]
  return (
    <div>
        <PostAdd />
        {posts.map((item, i) => {
             return <Post key={i} text={item.text} images={item.images} />
        })}
        <div className="flex gap-4 items-center">                     
            <span className="text-[#9D9DAF] text-sm">Contact Us</span>
            <span className="text-[#9D9DAF] text-sm">Terms of use</span>
            <span className="text-[#9D9DAF] text-sm">Cookies Policy</span>
            <span className="text-[#9D9DAF] text-sm">Help & Support </span>
        </div>
        <Divider className="my-4" />
        <div className="flex gap-4 items-center">                     
            <span className="text-[#9D9DAF] text-sm">Facebook</span>
            <span className="text-[#9D9DAF] text-sm">Linkedin</span>
            <span className="text-[#9D9DAF] text-sm">Instagram</span>
            <span className="text-[#9D9DAF] text-sm">Youtube</span>
        </div>
        <Divider className="my-4" />
        <div className="flex justify-between items-center">
            <span className="text-[#9D9DAF] text-sm">Halal Networks © 2023. All rights reserved</span>
            <div className="flex items-center gap-4 ">
                <span className="text-[#9D9DAF] text-sm">User Agreement</span>
                <span className="text-[#9D9DAF] text-sm">Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Posts