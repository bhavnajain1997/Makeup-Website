import ProductCard from "./ProductCard"
import prodata from "../utilis/mockdata"

const Trending = () => {
    return(
        <div className="md:p-[20px] px-[15px] py-[20px] py- md:my-[30px] my-[10px] ">
            <div className="text-center p-[20px]">
                <p>Don't Miss Out</p>
                <h1 className="title md:text-[35px] text-[25px]">Now Trending</h1>
            </div>
            <div className="grid  md:grid-cols-4 sm:grid-cols-2 max-w-[1200px] gap-4 m-auto">
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