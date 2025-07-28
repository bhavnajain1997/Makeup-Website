import ProductCard from "./ProductCard"
import prodata from "../utilis/mockdata"

const Trending = () => {
    return(
        <div className="p-[20px] my-[30px] ">
            <div className="text-center p-[20px]">
                <p>Don't Miss Out</p>
                <h1 className="title text-[35px]">Now Trending</h1>
            </div>
            <div className="grid  grid-cols-4 max-w-[1200px] gap-4 m-auto">
                <ProductCard productItem = {prodata[6]}/>
                <ProductCard productItem = {prodata[7]}/>
                 <ProductCard productItem = {prodata[8]}/>
                  <ProductCard productItem = {prodata[9]}/>
                  <ProductCard productItem = {prodata[10]}/>

            </div>
        </div>
    )
}
export default Trending