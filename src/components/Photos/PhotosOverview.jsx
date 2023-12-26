import ImgOne from './../../assets/photo-1.png'
import ImgTwo from './../../assets/photo-2.png'
import ImgThree from './../../assets/photo-3.png'
import ImgFour from './../../assets/photo-4.png'

const PhotosOverview = () => {
  return (
    <>
    <div className="flex gap-[6px] mb-[10px]">
        <div className="w-[175px] h-[127px] rounded-xl overflow-hidden">
            <img src={ImgOne} className='object-cover w-[175px] h-[127px] ' />
        </div>
        <div className="w-[175px] h-[127px] rounded-xl overflow-hidden">
            <img src={ImgTwo} className='object-cover w-[175px] h-[127px] ' />
        </div>
    </div>
    <div className="flex gap-[6px]">
        <div className="w-[175px] h-[127px] rounded-xl overflow-hidden">
            <img src={ImgThree} className='object-cover w-[175px] h-[127px] ' />
        </div>
        <div className="w-[175px] h-[127px] rounded-xl overflow-hidden">
            <img src={ImgFour} className='object-cover w-[175px] h-[127px] ' />
        </div>
    </div>
    </>
  )
}

export default PhotosOverview