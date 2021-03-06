import React,{useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import imgUser from './../Assets/images/user.png';
import imgLogo from './../Assets/images/logo.png';
import { actProductRequest ,actSearchProductRequest} from '../Actions/index';
export default function Header() {
            
   const dispatch=useDispatch();
   const products=useSelector(state=>state.Products);
   const cart=useSelector(state=>state.Cart);
   const inputEl = useRef('');
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
              <Link to='/electronicmart' onClick={()=>{ dispatch(actProductRequest())}}>  <img src={imgLogo} alt="" className="header__top-logo-img " />    </Link>
            </div>	
          </div>
          <div className="header__top-search">
            <input type="text" className="header__top-search-input"    onChange={(e)=>{inputEl.current= e.target.value}} />
            <button className="header__top-search-btn-input"  onClick={()=>{dispatch(actSearchProductRequest(inputEl.current.toUpperCase()))}}>
              <i className="fa fa-search header__top-search-btn-input-icon" />
            </button>
          </div>
          {(products.statusLoginSuccess==false && products.loginGoogle==false)  &&
                     <div className="header__top-account">
                     <img src={imgUser} alt="" className="header__top-account-user-img" />
                    <div className="header__top-account-auth">
                      <div className="header__top-account-auth-register"  onClick={()=>{dispatch({type:'REGISTER'})}}>????ng k??</div>
                      <div className="header__top-account-auth-separate">/</div>
                      <div className="header__top-account-auth-login"  onClick={()=>{dispatch({type:'LOGIN'})}}>????ng nh???p</div>
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
                               T??i kho???n c???a t??i
                           </li>
                           <li className="header__top-account-info-list-item">
                               ????n h??ng
                           </li>
                           <li className="header__top-account-info-list-item"  onClick={()=>{dispatch({type:'LOGOUT'})}}>
                                ????ng xu???t
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
                                T??i kho???n c???a t??i
                            </li>
                            <li className="header__top-account-info-list-item">
                                ????n h??ng
                            </li>
                            <li className="header__top-account-info-list-item"  onClick={()=>{dispatch({type:'LOGOUTGOOGLE'}) }}>
                                
                                 ????ng xu???t
                            </li>
                         </ul>
                         </div>
                            </div>
                    }
          <div className="header__top-cart">
            <Link to='/electronicmart/cart'   className="header__top-cart-link"> 
               
              <i className="fa fa-shopping-cart header__top-cart-icon" /> 
              <div className="header__top-cart-text">Gi??? h??ng</div>
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
              <a   className="header__nav-link" onClick={()=>{dispatch(actProductRequest())}}>Trang ch???</a>
            </li>
            <li className="header__nav-item">
              <a   className="header__nav-link">Gi???i thi???u</a>
            </li>
            <li className="header__nav-item">
              <a   className="header__nav-link">S???n ph???m</a>
            </li>
            <li className="header__nav-item">
              <a   className="header__nav-link">Tin t???c</a>
            </li>
            <li className="header__nav-item">
              <a   className="header__nav-link">Li??n h???</a>
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
