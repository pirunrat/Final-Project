import '../css/ProductMain.css'
const ProductMain = ({products})=>{

    return(
        <div className='main-content'>
            {products.map((product, index) => {
                return (  
                <div className='card-content' key = {index}>
                    <h2>{product.productName}</h2>
                        <img src={product.imgSrc} alt={product.productName}></img> 
                        <div className="product-info">
                            <div className='product-description'>
                                <h4>Product Description :</h4>
                                <p>{product.productDescription}</p>
                            </div>
                            <div className='product-price'>
                                <h4>Price :</h4> 
                                <p> {product.price} baht</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default ProductMain;