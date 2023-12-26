const AboutStats = () => {
  return (
    <div className="grid grid-cols-3 mb-4">
        <div className="flex flex-col gap-2">
            <h4 className="text-sm text-center text-[#9D9DAF]">Posts</h4>
            <span className="font-semibold text-[#2D3139] text-center">1.3K</span>
        </div>
        <div className="flex flex-col gap-2 border-l border-r border-[#E2E2E2]">
            <h4 className="text-sm text-center text-[#9D9DAF]">Following</h4>
            <span className="font-semibold text-[#2D3139] text-center">3,154</span>
        </div>
        <div className="flex flex-col gap-2">
            <h4 className="text-sm text-center text-[#9D9DAF]">Followers</h4>
            <span className="font-semibold text-[#2D3139] text-center">2,054</span>
        </div>
    </div>
  )
}

export default AboutStats