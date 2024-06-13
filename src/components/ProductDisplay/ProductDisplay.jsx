import React from 'react'
import "./ProductDisplay.css"
import star_icon from "../assets/star_icon.png"
import star_dull_icon from "../assets/star_dull_icon.png"

const ProductDisplay = (props) => {
    const { product } = props
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-imagelist">
                    <img src={product.image} alt="product" />
                    <img src={product.image} alt="product" />
                    <img src={product.image} alt="product" />
                    <img src={product.image} alt="product" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-mainimg" src={product.image} alt="main" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_dull_icon} alt="star" />
                    <p>(120)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi quae reprehenderit quo culpa in officiis quis, pariatur dignissimos, ut nihil? Velit eaque cumque optio amet id natus illum, at minus eum.
                </div>
                <p className='productdisplay-right-category'>
                    <span>Category: </span> Women , Tshirt , Crop Top</p>
                <p className='productdisplay-right-category'>
                    <span>Tags: </span>  Modern , Latest</p>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                     </div>
                </div>
                <button> Add to Cart </button>
                
            </div>
        </div>
    )
}

export default ProductDisplay