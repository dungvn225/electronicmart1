import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import imgUser from './../Assets/images/user.png';
import imgLogo from './../Assets/images/logo.png';
export default function Header() {
            
   const dispatch=useDispatch();
   const products=useSelector(state=>state.Products);
   const cart=useSelector(state=>state.Cart);

   const showTotal=()=>{
  
        let total=0;
       cart.map((item)=>{
         total+=  item.quantity;
       });
       return total;
   }
   
  return (
    <div className="header">
    <div className="header__top">
      <div className="grird">
        <div className="header__top-content">
          <div className="header__top-home-on-mobile">
            <a   className="header__top-home-on-mobile-link">
              <i className="fa fa-bars header__top-home-on-mobile" />
            </a>
          </div>
          <div className="header__top-logo">
            <div   className="header__top-logo-link">
              <Link to='/electronicmart'>  <img src={imgLogo} alt="" className="header__top-logo-img " />    </Link>
            </div>	
          </div>
          <div className="header__top-search">
            <input type="text" className="header__top-search-input" />
            <button className="header__top-search-btn-input">
              <i className="fa fa-search header__top-search-btn-input-icon" />
            </button>
          </div>
          {(products.statusLoginSuccess==false && products.loginGoogle==false)  &&
                     <div className="header__top-account">
                     <img src={imgUser} alt="" className="header__top-account-user-img" />
                    <div className="header__top-account-auth">
                      <div className="header__top-account-auth-register"  onClick={()=>{dispatch({type:'REGISTER'})}}>Đăng ký</div>
                      <div className="header__top-account-auth-separate">/</div>
                      <div className="header__top-account-auth-login"  onClick={()=>{dispatch({type:'LOGIN'})}}>Đăng nhập</div>
                      </div>
                      </div>
                   }
                   {(products.statusLoginSuccess==true  )&&
                     
                    <div className="header__top-account  header__top-account--login">
                       
                    <img src={imgUser} alt="" className="header__top-account-user-img" />
                        <div className="header__top-account-auth"> {products.user.username} 
                            {/* {(this.props.products.User.LoginGoogle!='')&&
                               <div>{this.props.products.User.LoginGoogle}</div>
                            }
                             {(this.props.products.User.loginuser!='')&&
                               <div>{this.props.products.User.loginuser}</div>
                            } */}
                           </div>
                           <div className="header__top-account-info">
                        <ul className="header__top-account-info-list">
                           <li className="header__top-account-info-list-item">
                               Tài khoản của tôi
                           </li>
                           <li className="header__top-account-info-list-item">
                               Đơn hàng
                           </li>
                           <li className="header__top-account-info-list-item"  onClick={()=>{dispatch({type:'LOGOUT'})}}>
                                Đăng xuất
                           </li>
                        </ul>
                        </div>
                           </div>
                   }
                     {(products.loginGoogle==true  )&&
                     
                     <div className="header__top-account  header__top-account--login">
                        
                     <img src={imgUser} alt="" className="header__top-account-user-img" />
                         <div className="header__top-account-auth"> {products.usernameGoogle} 
                             {/* {(this.props.products.User.LoginGoogle!='')&&
                                <div>{this.props.products.User.LoginGoogle}</div>
                             }
                              {(this.props.products.User.loginuser!='')&&
                                <div>{this.props.products.User.loginuser}</div>
                             } */}
                            </div>
                            <div className="header__top-account-info">
                         <ul className="header__top-account-info-list">
                            <li className="header__top-account-info-list-item">
                                Tài khoản của tôi
                            </li>
                            <li className="header__top-account-info-list-item">
                                Đơn hàng
                            </li>
                            <li className="header__top-account-info-list-item"  onClick={()=>{dispatch({type:'LOGOUTGOOGLE'}) }}>
                                
                                 Đăng xuất
                            </li>
                         </ul>
                         </div>
                            </div>
                    }
          <div className="header__top-cart">
            <Link to='/electronicmart/cart'   className="header__top-cart-link"> 
               
              <i className="fa fa-shopping-cart header__top-cart-icon" /> 
              <div className="header__top-cart-text">Giỏ hàng</div>
              <div className="header__top-cart-quantity"> { showTotal()}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="header__nav">
      <div className="grird">
        <div className="header__nav-content">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a   className="header__nav-link">Trang chủ</a>
            </li>
            <li className="header__nav-item">
              <a   className="header__nav-link">Giới thiệu</a>
            </li>
            <li className="header__nav-item">
              <a   className="header__nav-link">Sản phẩm</a>
            </li>
            <li className="header__nav-item">
              <a   className="header__nav-link">Tin tức</a>
            </li>
            <li className="header__nav-item">
              <a   className="header__nav-link">Liên hệ</a>
            </li>
            <li className="header__nav-item">
              <img src="images/hotline.png" alt="" className="header__nav-item-img-phone" />
              <div className="header__nav-item-text-phone">Hotline: 0986584538</div>
            </li>
          </ul>
        </div>
        <div className="header__nav-search-on-mobile">
          <input type="text" className="header__nav-search-on-mobile-input" />
          <button className="header__nav-search-on-mobile-btn">
            <i className="fa fa-search header__nav-search-on-mobile-btn-icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
