import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import useLipstick from "../hooks/useLipstick";
import Header from "./Header";

const Lips = () => {
    useLipstick("maybelline")

    const lipsList = useSelector((store) => store.makeup.lipstick);

    return(
        <div>
        <div><Header/></div>
        <div className="grid  md:grid-cols-4 sm:grid-cols-2 max-w-[1200px] gap-4 m-auto p-10">

            {lipsList && lipsList.map((item) => <ProductCard key={item.id} productItem= {item}/>)}
        </div>
        </div>
    )
}
export default Lips