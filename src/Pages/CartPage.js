
import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import CartItem from './../Components/CartItem';
export default function CartPage(props) {
 
   const cart =useSelector(state=>state.Cart);
   const showTotal=()=>{
  
    let total=0;
   cart.map((item)=>{
     total+=  item.quantity * item.product.price_current;
   });
   return total;
}

   
  return (
    <div>
        
      <div className='grid'>
         <ul className="pagination">
            <li className="pagination-list">
              <a href="" className="pagination-link">Trang chủ</a>
            </li>
            <li className="pagination-list"> 
              
            </li>
            <li className="pagination-list">
              <a href="" className="pagination-link pagination-link--cart">Giỏ hàng</a>
            </li>
         </ul>
         </div>
         <div className="cart-main">
         <div className="grid">
              
            
                    <div className="car-main-group">
                    <div className="cart-main__product">Sản phẩm</div>
                    <div className="cart-main__quantity">Số lượng</div>
                    <div className="cart-main__price">Đơn giá</div>
                    <div className="cart-main__money">Thành tiền</div>
                    </div>
              
            
        
            </div>
         
                 <div className="grid">
                   <div className="cartContent">
                  
                 {
                 cart.map((item,index)=>{
                   
                   return <CartItem
                     item={item}
                     key={index}
                     cart={cart}
                   >
                      
                   </CartItem>
                 })
                } 
               
                </div>
                </div>
               
               
         </div>

         {(cart.length>0)&&
     <div className="grid">
     <div className="cart-main__total">
     <div className="cart-main__total-text">Tổng tiền:</div>
     <div className="cart-main__total-value">{showTotal().toLocaleString()}</div>
     <div className="cart-main__buy"  >Mua hàng</div>
     </div>
    </div>
    }
               
             
              
    
      
      </div>
  )

  
}

