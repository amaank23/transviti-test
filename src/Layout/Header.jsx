import ContainerLayout from "../components/Containers/ContainerLayout";
import CompanyLogo from "../components/Topbar/CompanyLogo";
import MainActions from "../components/Topbar/MainActions";
import SearchByLocation from "../components/Topbar/SearchByLocation";

const Header = () => {
  return (
    <div className="bg-white">
      <ContainerLayout>
        <div className="flex justify-between items-center flex-col gap-5 lg:gap-0 lg:flex-row mt-2 pt-1 pb-2">
          <CompanyLogo />
          <SearchByLocation />
          <MainActions />
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Header;
