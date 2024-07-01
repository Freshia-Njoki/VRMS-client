
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import ContainerWrapper from '../components/ContainerWrapper'
import LandingPage from '../components/landingPage/LandingPage'

function Home() {
  return (
    <ContainerWrapper className="bg-base-200 flex flex-col gap-6 min-h-screen">
      <Navbar />
      <LandingPage />
      <Footer />
    </ContainerWrapper>
  )
}

export default Home