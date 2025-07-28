import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEyes } from "../utilis/makeupSlice";

const useEyes = (brandName) => {
    const dispatch = useDispatch();
    
    const getEyes = async() => {
      try{
                 const data = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow");
         const json = await data.json();
         const filtered = json.filter((item) => item.brand && item.brand.toLowerCase() === brandName.toLowerCase());
           dispatch(addEyes(filtered))
    //  console.log(filtered);

      }catch(error){
                console.error("Error fetching eyes data:", error);

      }
    }
    useEffect(()=>{
        if(brandName){
             getEyes();
        }
    },[])
}
export default useEyes;