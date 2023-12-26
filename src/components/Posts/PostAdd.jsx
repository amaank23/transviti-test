import UserIcon from './../../assets/user-1.png'
import ImageUploadIcon from './../../assets/image-upload-icon.png'


const PostAdd = () => {
  return (
    <div className="bg-white p-4 rounded-xl mb-4">
        <div className="flex items-center gap-4">
            <div className="w-[36px] h-[36px] overflow-hidden rounded-full">
                <img src={UserIcon} className="w-[36px] h-[36px] object-cover" />
            </div>
            <input type='text' placeholder='Post something...' className='flex-grow focus-visible:outline-none' />
            <img src={ImageUploadIcon} className='cursor-pointer'  />
        </div>
    </div>
  )
}

export default PostAdd