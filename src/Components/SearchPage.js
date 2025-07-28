import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Header from "./Header";
const SearchPage = () => {
    const eyes = useSelector((store) => store.makeup.eyes);
    const face = useSelector((store) => store.makeup.face);
    const lips = useSelector((store) => store.makeup.lipstick)
 
    const makeupPro = [...eyes, ...face, ...lips];
    return(
        <div >
                <div><Header/></div>

            <div className="text-center p-10 " style={{backgroundColor: "rgb(145,103,81)"}}>
                <input type="text" placeholder="Search " size={70} className="p-2 border border-white m-2.5"/>
                <button><i className="fa-solid fa-magnifying-glass text-white"></i></button>
            </div>
            <div className="grid  grid-cols-4 max-w-[1200px] gap-4 m-auto py-12">
                   {makeupPro.map((product)=><ProductCard key = {product.id} productItem = {product}/>)}
            </div>
            <div >

            </div>
        </div>
    )
}
export default SearchPage 