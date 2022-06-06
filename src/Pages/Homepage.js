import React from 'react'
import Categories from './../Components/Categories';
import Slide from './../Components/Slide';
import ProductList from './../Components/ProductList';
import Footer from './../Components/Footer';
export default function Homepage() {
  return (
      <React.Fragment>
               <div className="grird">
     <Categories/>
    <div className="main">
      <Slide/>
      <div className="main__head">
        <div className="main__head-left">
          <div className="main__head-left-text">Tất cả sản phẩm</div>
        </div>
        <div className="main__head-right">
          <div className="main__head-right-text">Sắp xếp theo:</div>
          <div className="main__head-right-input">
            <div className="main__head-right-input-text">Mới đến cũ</div>
            <i className="fa fa-caret-down main__head-right-input-icon" />
          </div>
          <img src="images/sort.png" alt="" className="main__head-right-img" />
        </div>
        {/* </div>  end main__head */}
      </div>
      <ProductList/>
    </div> {/*  end main */}
  </div>  
  <div className="grird">
    <div className="breadcumbs">
      <button className="breadcumbs-btn">
        <i className="fa fa-angle-left breadcumbs-btn-icon-left" />
        <i className="fa fa-angle-left breadcumbs-btn-icon-left" />
      </button>
      <button className="breadcumbs-btn breadcumbs-btn--active">1</button>
      <button className="breadcumbs-btn">2</button>
      <button className="breadcumbs-btn">3</button>
      <button className="breadcumbs-btn">
        <i className="fa fa-angle-right breadcumbs-btn-icon-right" />
        <i className="fa fa-angle-right breadcumbs-btn-icon-right" />
      </button>
    </div>
  </div>
  <Footer/>
      </React.Fragment>
   
  )
}
