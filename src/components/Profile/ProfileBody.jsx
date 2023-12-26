import Posts from "../Posts/Posts"
import About from "../About/About"
import Photos from "../Photos/Photos"

const ProfileBody = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-[40%]">
        <About />
        <Photos />
      </div>
      <div className="w-full lg:w-[60%]">
        <Posts />
      </div>
    </div>
  )
}

export default ProfileBody