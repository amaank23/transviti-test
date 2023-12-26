import CoverImg from './../../assets/cover.png'
import UserImg from './../../assets/user-2.png'
import EditIcon from './../../assets/edit-icon.png'
const ProfileTop = () => {
  return (
    <div className="mt-3 mb-6 relative">
      <div className='h-[206px] 2xl:h-[306px] rounded-t-xl overflow-hidden'>
        <img src={CoverImg} alt="" className='w-full h-[206px] 2xl:h-[306px] object-cover' />
      </div>
      <div className='flex justify-between items-end absolute bottom-[-30%] w-full'>
        <div className='flex gap-3 items-end ml-4'>
          <div className='rounded-full overflow-hidden w-[156px] h-[156px] border-[10px] border-white'>
            <img src={UserImg} alt='' className='object-cover' />
          </div>
          <div className='flex flex-col'>
            <h2 className='text-2xl text-[#2D3139 font-semibold'>Ahmad Nur Fawaid</h2>
            <p className='text-[#9D9DAF]'>@fawait</p>
          </div>
        </div>
        <div className=' mr-4'>
          <button className='text-white bg-[#F85F35] rounded-lg flex gap-1 py-[10px] px-4 items-center'><img src={EditIcon} /> Edit Profile</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileTop