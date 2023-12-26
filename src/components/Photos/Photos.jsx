import PhotosOverview from "./PhotosOverview"

const Photos = () => {
  return (
    <div className="bg-white rounded-xl p-4">
        <div className="flex justify-between items-center">
            <h3 className="text-base font-medium mb-[9px]">Photos</h3>
            <button className="text-[#FE5D31]">View all</button>
        </div>
        <PhotosOverview />
    </div>
  )
}

export default Photos