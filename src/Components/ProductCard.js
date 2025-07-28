const ProductCard = (props) => {
    const {productItem} = props;
    if (!productItem){
        return null
    }
    const {
      name,
      image_link,
      price,
      rating 
    } = productItem;
    return (
        <div className="text-center border p-4">

            <img className="m-auto" src= {`${productItem.image_link}`} alt="productimage"/>
            <h4>{name}</h4>
            <p>{price}</p>
            <p>{rating}</p>
            <button className="border 1px solid black p-2 ">Add to Cart</button>
        </div>
    )
}
export default ProductCard