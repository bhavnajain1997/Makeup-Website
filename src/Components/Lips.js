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
        <div className="grid  grid-cols-4 max-w-[1200px] gap-4 m-auto py-12">

            {lipsList && lipsList.map((item) => <ProductCard key={item.id} productItem= {item}/>)}
        </div>
        </div>
    )
}
export default Lips