import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import useEyes from "../hooks/useEyes";
import Header from "./Header";
const Eyes = () => {
            useEyes("maybelline")

    const eyesList = useSelector((store) => store.makeup.eyes);
          // console.log(eyesList)

    

    // console.log(eyesList)
    return(
        <div>
        <div><Header/></div>

      <div className="grid  md:grid-cols-4 sm:grid-cols-2 max-w-[1200px] gap-4 m-auto">
         {eyesList && eyesList.map((item) => <ProductCard key = {item.id} productItem = {item}/>)}
      </div>
      </div>
    )
}
export default Eyes;