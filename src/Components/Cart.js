import { clearCartList } from "../utilis/cartSlice";
import ProductCard from "./ProductCard"
import { useDispatch, useSelector } from "react-redux"
const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.cartList);

    const handleClearBtn = () => {
        dispatch(clearCartList())
    }
    return (
        <div className="text-center mt-10">
            <div className="pb-4"><h1>Cart</h1></div>
            <div>
                <button className="mb-4 border-2 border-black px-4 py-2 btnCart" onClick={handleClearBtn}>Clear Cart</button>
                { cartItems.length === 0 &&
                    <h1>Cart is empty . Add Items to the Cart.</h1>
                }
                <div className="grid  md:grid-cols-4 sm:grid-cols-2 max-w-[1200px] gap-4 m-auto">
                               {cartItems && cartItems.map((item) => (
              <ProductCard key={item.id} productItem={item} />
            ))}

                </div>
            </div>
        </div>
    )
}
export default Cart