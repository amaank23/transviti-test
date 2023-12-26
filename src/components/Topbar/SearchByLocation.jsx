import { Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import LocIcon from './../../assets/location-icon.png'

const SearchByLocation = () => {
  return (
    <div className="flex">
      <div className="bg-[#E2E2EA] rounded-l-[40px] flex gap-2 px-4 h-[38px] w-[179px]">
        <SearchOutlined />
        <input type="text" placeholder="Search" className="bg-transparent focus-visible:outline-none" />
      </div>
      <div className="relative -left-5 w-[151px] !rounded-[40px] flex bg-white border border-[#E2E2EA] px-3 items-center">
        <img src={LocIcon} className="w-[18px] h-[22px]" />
        <Select
          className="h-[38px] w-[151px] !rounded-[40px] country-select"
          placeholder="Select"
        />
      </div>
    </div>
  );
};

export default SearchByLocation;
