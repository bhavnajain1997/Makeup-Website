import ProductCard from "./ProductCard"
import prodata from "../utilis/mockdata"
import { useSelector } from "react-redux"


const ProductList = () => {
    const lipstickData  = useSelector((store) => store.makeup.lipstick);
    // console.log(lipstickData);
    return (
        <div className="my-[40px]">
        <h1 className="text-center p-[20px] text-[35px]  title">Best Seller Products</h1>
        <div className="grid  grid-cols-4 max-w-[1200px] gap-4 m-auto">
           {prodata.map((item) => <ProductCard key = {item.id} productItem = {item}/>)}
            {/* <ProductCard  productItem = {prodata[0]}/>
            <ProductCard productItem = {prodata[1]}/>
            <ProductCard productItem = {prodata[2]}/>
            <ProductCard productItem = {prodata[3]}/>
            <ProductCard productItem = {prodata[4]}/>
            <ProductCard productItem = {prodata[5]}/> */}
        </div>
        </div>
    )
}
export default ProductList