import { Link, useNavigate } from "react-router-dom";
import { act, useRef, useState } from "react";
import { useSelector } from "react-redux";

 const Header = ({newRef,bestRef}) => {
   const cartItems = useSelector(store => store.cart.cartList)
  const [activeTab, setActiveTab] = useState("");


  const Navigate = useNavigate();

  const handleSearchBtn = () => {
         Navigate("/search")
  }
  const handleHomeBtn = () => {
     Navigate("/home")
  }
  const handleClickPro = (tab ) => {
    setActiveTab(tab)
     if(tab === "face" ){
        Navigate("/face")
        console.log("face")
        console.log("face")
     }
     else if(tab === "eyes"){
        Navigate("/eyes");
        console.log("eyes")
     }
     else if (tab === "lips"){
        Navigate("/lips")
     }
  }

  const handleScrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
      //   console.log(activeTab)

    return(
        <div className="" style={{backgroundColor: "#916751"}}>
        <div className=" text-white text-center text-4xl font-bold p-4 radient" style={{backgroundColor: "#916751"}}>Radient Beauty</div>
            <div className=" p-6 text-white shadow-xl" style={{backgroundColor: "rgb(99, 65, 65)", display: "flex", justifyContent: "space-between"}}>
                <div className="" >
                   <ul className="flex flex-row" style={{display: "flex", gap: "80px"}}>
                    <li ><Link onClick={handleHomeBtn}>Home</Link></li>
                    <li><Link onClick={() => handleScrollToSection(newRef)}>New</Link></li>
                    <li><Link onClick={() => handleScrollToSection(bestRef)}>Best Sellers</Link></li>
                    <li onClick={()=> handleClickPro("face")}>Face</li>
                    <li onClick={() => handleClickPro("lips")}>Lips</li>
                    <li onClick={() => handleClickPro("eyes")}>Eyes</li>
                   </ul>
                </div>
                <div>
                  <ul style={{display: "flex", flexDirection: "row", gap:"30px"}}>
                          <div className="search" onClick={handleSearchBtn}><i className="fa-solid fa-magnifying-glass text-white"></i></div>

                    {/* <li><a href=""><i className="fa-solid fa-circle-user"></i> Log In</a></li> */}
                    <li ><Link to="/cart"><i className="fa-solid fa-cart-shopping"> {cartItems?.length ?? 0}</i></Link></li>
                  </ul>
                </div>
            </div>
        </div>

     )
 } 
 export default Header