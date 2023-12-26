import Header from "../Layout/Header"
import ContainerBody from "../components/Containers/ContainerBody"
import ProfileBody from "../components/Profile/ProfileBody"
import ProfileTop from "../components/Profile/ProfileTop"

const ProfilePage = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Header />
      <ContainerBody>
        <ProfileTop />
        <ProfileBody />
      </ContainerBody>
    </div>
  )
}

export default ProfilePage