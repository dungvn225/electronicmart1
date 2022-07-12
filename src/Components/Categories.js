import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {actFetProductCatalogyRequest} from './../Actions/index';
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
  const dispatch=useDispatch();
  const [Categoies,setCategoies]=useState([
    {id:1,
     name:'Điện thoại',
    img:h1
    },
    {id:2,
      name:'Laptop',
     img:h2
     },
     {id:3,
      name:'Tablet',
     img:h3
     },
     {id:4,
      name:'Phụ kiện',
     img:h4
     },
     {id:5,
      name:'Điện gia dụng',
     img:h5
     },
     {id:6,
      name:'Điều hòa - máy lạnh',
     img:h6
     },
    
     {id:7,
      name:'Ti vi - âm thanh',
     img:h7
     }
    
  ]);
    
  return (
    <div className="categories">
      <div className="category">   {/* category */}
        <div className="category__head">Danh mục sản phẩm</div>
        <ul className="category__list">
        {Categoies.map((item,index)=>{
              return <li className="category__item" key={index}  onClick={()=>{dispatch(actFetProductCatalogyRequest(item))}} >
              <a   className="category__link">
                <img src={item.img} alt="" className="category__link-img" />
                <span className="category__link-text">{item.name}</span>
              </a>
            </li>
           })}
        
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
