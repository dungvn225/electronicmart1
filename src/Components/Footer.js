import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
    <div className="grird">
      <div className="footer_wrap">
        <div className="footer__head">Thông tin công ty</div>
        <ul className="footer__list">
          <li className="footer__item">
            <a   className="footer__item-link">Thông tin công ty</a>	
          </li>
          <li className="footer__item">
            <a   className="footer__item-link">Giới thiệu công ty</a>	
          </li>
          <li className="footer__item">
            <a   className="footer__item-link">Hệ thống siêu thị </a>
          </li>
          <li className="footer__item">
            <a   className="footer__item-link">	Tuyển dụng </a>
          </li>
        </ul>
      </div> {/* end col 3 */}
      <div className="footer_wrap">
        <div className="footer__head">Hỗ trợ khách hàng</div>
        <ul className="footer__list">
          <li className="footer__item">
            <a   className="footer__item-link">Liên hệ góp ý</a>
          </li>
          <li className="footer__item">
            <a   className="footer__item-link">Hướng dẫn mua hàng</a>
          </li>
          <li className="footer__item">
            <a   className="footer__item-link">Hướng dẫn mua trả góp </a>
          </li>
          <li className="footer__item">
            <a   className="footer__item-link">Quy chế hoạt động </a>
          </li>
        </ul>
      </div> {/* end col 3 */}
      <div className="footer_wrap">
        <div className="footer__head">Chính sách mua hàng</div>
        <ul className="footer__list">
          <li className="footer__item">
            <a   className="footer__item-link">Quy chế chính sách</a>
          </li>
          <li className="footer__item">
            <a   className="footer__item-link">Chính sách bảo mật đổi trả</a>
          </li>
          <li className="footer__item">
            <a   className="footer__item-link">Chính sách hội viên</a>
          </li>
          <li className="footer__item">
            <a   className="footer__item-link">Giao hàng và lắp đặt</a>
          </li>
        </ul>
      </div> {/* end col 3 */}
      <div className="footer_wrap">
        <div className="footer__head">Liên hệ với chúng tôi</div>
        <ul className="footer__list">
          <li className="footer__item">
            <img src="images/diachi.png" alt="address" className="footer__item-address-img" />
            <div className="footer__item-address-text"> Địa chỉ: 336,Đội Cấn-Ba Đình-Hà Nội</div>
          </li>
          <li className="footer__item">
            <img src={`images/dienthoai.png`} alt="hotline" className="footer__item-hotline-img" />
            <div className="ooter__item-hotline-text">Hotline: 0986.584.538</div>
          </li>
        </ul>
      </div> {/* end col 3 */}
    </div>
  </div>
  )
}
