import { useSelector } from "react-redux"
import ProductCard from "./ProductCard";
import useFace from "../hooks/useFace";
import Header from "./Header";
const Face = () => {
     useFace("maybelline")

    const faceList =  useSelector((store) => store?.makeup?.face);
    // console.log(faceList)

    return(
        <div>
        <div><Header/></div>

        <div className="grid  md:grid-cols-4 sm:grid-cols-2 max-w-[1200px] gap-4 m-auto p-10">
            {faceList && faceList.map((item)=> <ProductCard key = {item.id} productItem = {item}/>)}
        </div>
        </div>
    )
}
export default Face; 