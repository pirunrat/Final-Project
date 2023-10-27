import '../css/Product.css'
import productImage from '../images/img1.jpg'

const Product = ()=>{

    return(
        <div className='main-product-content'>
            <div className='product-content'>
                <h1>Product Name</h1>
                <img src={productImage}></img>
                <div className="product-info">
                    <div className='product-description'>
                        <h4>Product Description :</h4>
                        <p>weqweqeqwqeqeaasdasdasdaasdadasdasdasdasdadasdasdasd
                            asdasdasdadasdasdasdasdsadasdsdasdasdasdasdadasddsd
                        </p>
                    </div>
                    <div className='product-price'>
                        <h4>Price :</h4>
                        <p> 150 baht</p>
                    </div>
                </div>    
            </div>
        </div>

    );
}
export default Product;