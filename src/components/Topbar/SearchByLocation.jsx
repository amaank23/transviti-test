import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchByLocation = () => {
  return (
    <div className="flex">
      <Input
        placeholder="Search"
        prefix={<SearchOutlined color="red" />}
        className="rounded-[40px] h-[38px] w-[171px]"
      />
      <div className="relative -left-5">
        <Select
          className="h-[38px] w-[151px] !rounded-[40px] country-select"
          placeholder="Select"
        />
      </div>
    </div>
  );
};

export default SearchByLocation;
