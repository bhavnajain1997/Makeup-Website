import Footer from "./Footer"
import Header from "./Header"
import MainBackground from "./MainBackground"
import ProductList from "./ProductList"
import LipsSec from "./LipsSec"
import Trending from "./Trending"
import AboutSkin from "./AboutSkin"
import useLipstick from "../hooks/useLipstick"
import useEyes from "../hooks/useEyes"
import useFace from "../hooks/useFace"
  const Home = () => {
            useLipstick("maybelline");
    useEyes("maybelline");
    useFace("maybelline");

    return(
        <div>
            <Header/>
            <MainBackground/>
            <ProductList/>
            <LipsSec/>
            <Trending/>
            <AboutSkin/>
            <Footer/>
        </div>
    )
  }
  export default Home