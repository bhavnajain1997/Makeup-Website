import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Header from "./Header";
import { useState } from "react";
const SearchPage = () => {
    const [searchText, setSearchText] = useState("");
    const [filterListMakeup, setFilterListMakeup] = useState([]);
    const eyes = useSelector((store) => store.makeup.eyes);
    const face = useSelector((store) => store.makeup.face);
    const lips = useSelector((store) => store.makeup.lipstick)
 
    const makeupPro = [...eyes, ...face, ...lips];
        const handleChangeMakeup = (e) => {
     setSearchText(e.target.value)
     console.log(searchText);

     const filteredMakeup = makeupPro.filter((makeupItem) => makeupItem.name.toLowerCase().includes(searchText.toLowerCase()));
      setFilterListMakeup(filteredMakeup);
    }

    return(
        <div >
                <div><Header/></div>

            <div className="text-center p-10 " style={{backgroundColor: "rgb(145,103,81)"}}>
                <input type="text" placeholder="Search "   size={window.innerWidth < 640 ? 30 : 70}
 className="p-2 border border-white m-2.5" value={searchText} onChange={handleChangeMakeup}/>
            </div>
            <div className="grid  md:grid-cols-4 sm:grid-cols-2 max-w-[1200px] gap-4 m-auto p-10 my-10">
                   {(searchText ? filterListMakeup : makeupPro).map((product)=><ProductCard key = {product.id} productItem = {product}/>)}
            </div>
            <div >

            </div>
        </div>
    )
}
export default SearchPage 