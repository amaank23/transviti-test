import ContainerLayout from "../components/Containers/ContainerLayout"
import CompanyLogo from "../components/Topbar/CompanyLogo"
import MainActions from "../components/Topbar/MainActions"
import SearchByLocation from "../components/Topbar/SearchByLocation"

const Header = () => {
  return (
    <ContainerLayout>
      <div className="flex justify-between items-center">
        <CompanyLogo />
        <SearchByLocation />
        <MainActions />
      </div>
    </ContainerLayout>
  )
}

export default Header