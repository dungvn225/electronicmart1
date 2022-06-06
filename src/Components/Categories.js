import React from 'react'
import h1 from './../Assets/images/h1.png';
import h2 from './../Assets/images/h2.png';
import h3 from './../Assets/images/h3.png';
import h4 from './../Assets/images/h4.png';
import h5 from './../Assets/images/h5.png';
import h6 from './../Assets/images/h6.png';
import h7 from './../Assets/images/h7.png';
import h8 from './../Assets/images/h8.png';
import h9 from './../Assets/images/h9.png';

export default function Categories() {
  return (
    <div className="categories">
      <div className="category">   {/* category */}
        <div className="category__head">Danh mục sản phẩm</div>
        <ul className="category__list">
          <li className="category__item">
            <a   className="category__link">
              <img src={h1} alt="" className="category__link-img" />
              <span className="category__link-text">Điện thoại</span>
            </a>
          </li>
          <li className="category__item">
            <a   className="category__link">
              <img src={h2} alt="" className="category__link-img" />
              <span className="category__link-text">Laptop</span>
            </a>
          </li>
          <li className="category__item">
            <a   className="category__link">
              <img src={h3} alt="" className="category__link-img" />
              <span className="category__link-text">Tablet</span>
            </a>
          </li>
          <li className="category__item">
            <a   className="category__link">
              <img src={h4} alt="" className="category__link-img" />
              <span className="category__link-text">Phụ kiện</span>
            </a>
          </li>
          <li className="category__item">
            <a   className="category__link">
              <img src={h5} alt="" className="category__link-img" />
              <span className="category__link-text">Điện gia dụng</span>
            </a>
          </li>
          <li className="category__item">
            <a   className="category__link">
              <img src={h6} alt="" className="category__link-img" />
              <span className="category__link-text">Điều hòa - máy lạnh</span>
            </a>
          </li>
          <li className="category__item">
            <a   className="category__link">
              <img src={h7} alt="" className="category__link-img" />
              <span className="category__link-text">Ti vi - âm thanh</span>
            </a>
          </li>
          <li className="category__item">
            <a   className="category__link">
              <img src={h8} alt="" className="category__link-img" />
              <span className="category__link-text">Xem thêm</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="category">
        <div className="category__head">Thương hiệu</div>
        <ul className="category__list">
          <li className="category__item">
            <a   className="category__link">
              <span className="category__link-text">Panasonic</span>
            </a>
          </li>
          <li className="category__item">
            <a   className="category__link">
              <span className="category__link-text">SamSung</span>
            </a>
          </li>
          <li className="category__item">
            <a   className="category__link">
              <span className="category__link-text">Sunhouse</span>
            </a>
          </li>
          <li className="category__item">
            <a   className="category__link">
              <span className="category__link-text">Kangaroo</span>
            </a>
          </li>
          <li className="category__item">
            <a   className="category__link">
              <span className="category__link-text">Nagakawa</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="category">
        <div className="category__head">Sản phẩm bán chạy</div>
        <div className="category-top">
          <a  ><i className="fa fa-angle-left category__icon-left" /></a>
          <img src={h9} alt="" className="category-img" />
          <a  >  <i className="fa fa-angle-right category__icon-right" /></a>
        </div>
        <div className="category__info">
          <div className="category__info-name">Quạt bàn Senko BD1012 Kem môn</div>
          <div className="category__info-price">299.000đ</div>
        </div>
      </div>   
    </div>
  )
}
