
import AdminDashboard from '../components/adminDashboard/AdminDashboard'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import ContainerWrapper from '../components/ContainerWrapper'
import FeaturedVehicles from '../components/landingPage/FeaturedVehicles'
import LandingPage from '../components/landingPage/LandingPage'

function Home() {
  return (
    <ContainerWrapper className="bg-base-200 flex flex-col min-h-screen">
      <Navbar />
      <LandingPage />
      <FeaturedVehicles />
      <Footer />
      {/* <AdminDashboard /> */}
    </ContainerWrapper>
  )
}

export default Home