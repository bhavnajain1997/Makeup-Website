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

        <div className="grid  grid-cols-4 max-w-[1200px] gap-4 m-auto py-12">
            {faceList && faceList.map((item)=> <ProductCard key = {item.id} productItem = {item}/>)}
        </div>
        </div>
    )
}
export default Face; 