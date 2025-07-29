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
import { useRef } from "react"
  const Home = () => {
            useLipstick("maybelline");
    useEyes("maybelline");
    useFace("maybelline");
     const newRef = useRef();
  const bestRef = useRef();

    return(
        <div>
            <Header newRef={newRef} bestRef={bestRef}/>
            <MainBackground/>
            <div ref={newRef}><ProductList/></div>
            <LipsSec/>
            <div ref={bestRef}><Trending/></div>
          <AboutSkin/>
            <Footer/>
        </div>
    )
  }
  export default Home