import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addFace } from "../utilis/makeupSlice";

const useFace = (brandName) => {
    const dispatch = useDispatch();
    const getFace = async() => {
        const data = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation");
        const json = await data.json();
        const filtered = json.filter((item) => item.brand && item.brand.toLowerCase() === brandName.toLowerCase());
        dispatch(addFace(filtered));
        //  console.log(filtered)
    }
    useEffect(()=>{
        if(brandName){
                  getFace();

        }
    },[])
}
export default useFace;