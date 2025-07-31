const Footer = () => {
    return (
        <div className="flex md:flex-row flex-col md:gap-0 gap-y-2.5 justify-evenly bg-black text-white p-8 footer">
            <div >
            <h4 className="text-[25px] pb-6">Shop</h4>
                <ul className="flex md:flex-col flex-row md:gap-0 gap-x-[20px] md:flex-nowrap flex-wrap">
                    <li><a href="" className="">All Products</a></li>
                    <li><a href="">New</a></li>
                    <li><a href="">Best Sellers</a></li>
                    <li><a href="">Lips</a></li>
                    <li><a href="">Eyes</a></li>
                    <li><a href="">Face</a></li> 
                </ul>
            </div>
            <div>
                <h4 className="text-[25px] pb-6">Our Store</h4>
                <p>
                500 Terry Francine Street
                San francisco, CA 94158
                </p>
                <p>
                    Monday-Friday : 11am-10pm
                    Saturday-Sunday: 11am-12pm
                </p>
                <p>
                    <a href="">Tel: 123-456-7890</a>
                    <a>Email: info@mysite.com </a>
                </p>
            </div>
            <div>
                <h4 className="text-[25px] pb-6">Policy</h4>
                <ul className="flex md:flex-col flex-row md:gap-0 gap-x-[20px] md:flex-nowrap flex-wrap">
                    <li><a href="">Shipping & Returns</a></li>
                    <li><a href="">Store Policy</a></li>
                    <li><a href="">Payment Methods</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
            <div>
                <h1 className="text-[25px] pb-6">Customer Service</h1>
                <p>
                                       <a href="">Tel: 123-456-7890</a>
                    <a>Email: info@mysite.com </a>
 
                </p>
                <p>
                    © 2035 by Noelle. Powered and secured by Wix

                </p>
            </div>
        </div>
    )
}
export default Footer