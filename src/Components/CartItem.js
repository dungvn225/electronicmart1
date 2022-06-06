
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {actDeleteProduct,actUpdateQuantity} from './../Actions/index';
function CartItem(props) {

    const dispatch=useDispatch();
    const item=props.item;
   
  
    const [quantity,setquantity]=useState(item.quantity);
    
   
    const handleQuantity=(quantity,id)=>{
      if(quantity>=1){
    
        dispatch(actUpdateQuantity(quantity,id));
        setquantity(quantity);
      }
}
    const onchangeQuantity=(e)=>{
        
        const quantity=Number(e.target.value,1);
        setquantity(quantity);
               
        
            dispatch(actUpdateQuantity(quantity,item.product.id));
    }

   
  return (
      

<div className="car-main-group" >
<div className="cart-main__product">
    <img src={item.product.image[0]} alt="" className="cart-main__product-img" />
     <div className="cart-main__product-info">
     <div className="cart-main__product-info-name"> {item.product.name}</div>
     <div className="cart-main__product-info-origin">{item.product.origin}</div>
     </div>
</div>
<div className="cart-main__quantity">
   <div className="cart-main__quantity-reduction" onClick={()=>handleQuantity(item.quantity-1,item.product.id)}>-</div>
   <div className="cart-main__quantity-show"><input type="number"   name="quantity"  value={quantity}  onChange={(e)=>onchangeQuantity(e)}/></div>
   <div className="cart-main__quantity-increase"  onClick={()=>handleQuantity(item.quantity+1,item.product.id)}>+</div>
</div>
<div className="cart-main__price">{item.product.price_current.toLocaleString()}</div>
<div className="cart-main__money">
    <div className="cart-main__money-content">{(item.product.price_current*item.quantity).toLocaleString()}</div>
    <i className="fa fa-trash-o cart-main__money-icon"  onClick={()=>{dispatch(actDeleteProduct(item.product.id))}}></i>
</div>


</div>
  )
}


export default  CartItem;