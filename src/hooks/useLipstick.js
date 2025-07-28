import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLipstick } from "../utilis/makeupSlice";

const useLipstick = (brandName) => {
    const dispatch = useDispatch();
    const getLipstick = async() => {
        const data = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick");
        const json = await data.json();
        const filtered = json.filter((item) => item.brand && item.brand.toLowerCase() === brandName.toLowerCase());
        dispatch(addLipstick(filtered))
        
    }
    useEffect(()=>{
        if(brandName){
            getLipstick();  
        }
    },[])
}
export default useLipstick;