import { useNavigate } from "react-router-dom";
import { act, useState } from "react";

 const Header = () => {
  const [activeTab, setActiveTab] = useState("");


  const Navigate = useNavigate();

  const handleSearchBtn = () => {
         Navigate("/search")
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

  
        console.log(activeTab)

    return(
        <div className="" style={{backgroundColor: "#916751"}}>
        <div className=" text-white text-center text-4xl font-bold p-4 radient" style={{backgroundColor: "#916751"}}>Radient Beauty</div>
            <div className=" p-6 text-white shadow-xl" style={{backgroundColor: "rgb(99, 65, 65)", display: "flex", justifyContent: "space-between"}}>
                <div className="" >
                   <ul className="flex flex-row" style={{display: "flex", gap: "80px"}}>
                    <li><a href="" className="text-white">Shop All</a></li>
                    <li><a href="">New</a></li>
                    <li><a href="">Best Sellers</a></li>
                    <li onClick={()=> handleClickPro("face")}><a href="" >Face</a></li>
                    <li onClick={() => handleClickPro("lips")}><a href="">Lips</a></li>
                    <li onClick={() => handleClickPro("eyes")}><a href="">Eyes</a></li>
                   </ul>
                </div>
                <div>
                  <ul style={{display: "flex", flexDirection: "row", gap:"30px"}}>
                          <div className="search" onClick={handleSearchBtn}><i className="fa-solid fa-magnifying-glass text-white"></i></div>

                    {/* <li><a href=""><i className="fa-solid fa-circle-user"></i> Log In</a></li> */}
                    <li><a href=""><i className="fa-solid fa-cart-shopping"></i></a></li>
                  </ul>
                </div>
            </div>
        </div>

     )
 } 
 export default Header