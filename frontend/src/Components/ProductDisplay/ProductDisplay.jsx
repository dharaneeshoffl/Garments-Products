import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext';


export default function ProductDisplay(props) {
    let { product } = props;
    let {addToCart} = useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="product_img" />
          <img src={product.image} alt="product_img" />
          <img src={product.image} alt="product_img" />
          <img src={product.image} alt="product_img" />
        </div>

        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="product_img"
          />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_dull_icon} alt="star_dull_icon" />
          <p>(122)</p>
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
          A lightweight, usually knitted,pulllover shirt, close-fitting and
          winter season cloths and round neckline and short sleeves,
          worn as an undershirt or outer shirt the garments.
        </div>

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

        <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
        <p className="productdisplay-right-category">
          <span>Category:</span>Men,T-shirt,Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span>Modern,Latest
        </p>
      </div>
    </div>
  );
}
