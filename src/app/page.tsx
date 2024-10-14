import Navbar from "@/components/shared/navbar"
import AllProducts from "@/components/ui/AllProducts"
import Banner from "@/components/ui/banner_slider"

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <AllProducts></AllProducts>
    </>
  )
}

export default Home