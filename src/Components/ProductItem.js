import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
 import { actAddToCart, } from '../Actions/index';

export default function ProductItem(props) {
   
 const dispatch=useDispatch();
  return (
     <React.Fragment>
          <a   className="main__product">
      <img src={props.product.image[0]} alt="" className="main__product-img" />
      <div className="main__product-name">{props.product.name}</div>
      <div className="main__product-price">
        <div className="main__product-price-wrap">
          <div className="main__product-price-old">{props.product.price_old.toLocaleString()}đ</div>
          <div className="main__product-price-saleoff">{props.product.sale_off}</div>
        </div>
        <div className="main__product-price-current">{props.product.price_current.toLocaleString()}đ</div>
      </div>
      <div className="main_product-addtocart">
        <i className="fa fa-cart-plus" />
        <div className="main_product-addtocart-text"  onClick={()=>{dispatch(actAddToCart(props.product,1));  }}>Thêm vào giỏ hàng</div>
      </div>
    </a>
   
     </React.Fragment>
  )
}
