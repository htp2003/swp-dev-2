import React from 'react';
import './Section.css'; // Import CSS file


const ProfessionalSection = () => {
  // const handleClick = (id) => {
  //   const popupContent = document.getElementById(`popup-content-${id}`);
  //   if (popupContent.style.display === 'none') {
  //     popupContent.style.display = 'block';
  //   } else {
  //     popupContent.style.display = 'none';
  //   }
  // };

  return (
    <section className="professional-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-4 col-md-4 col-12">
            <div className="single-box-item">
              <div className="icon">
                <img
                  src="https://dv02.mediawz.com/wp-content/uploads/2023/05/home-version-three-revenue-traffiic-icon1.png"
                  alt=" "
                />
              </div>
              <h3>SÁNG TẠO VÀ TRÁCH NHIỆM</h3>
              <p>Đây chính là Slogan của công ty. Sáng tạo trong sản phẩm và trách nhiệm đối với khách hàng của mình.</p>
              {/* <button onClick={() => handleClick(1)} title="Xem thêm" id="xem-them-1" className="pro-more">Xem thêm</button>
              <div className="popup-content" id="popup-content-1" style={{ display: 'none' }}>
                Nội dung cho nút "Xem thêm" 1
              </div> */}
            </div>
          </div>

          <div className="col-lg-4 col-sm-4 col-md-4 col-12">
            <div className="single-box-item">
              <div className="icon">
                <img
                  src="https://dv02.mediawz.com/wp-content/uploads/2023/05/home-version-three-revenue-traffiic-icon2.png"
                  alt=" "
                />
              </div>
              <h3>BẢO MẬT THÔNG TIN</h3>
              <p>Điều kiện tiên quyết để chúng tôi hoạt động và nhận được sự tín nhiệm là bảo mật thông tin khách hàng.</p>
              {/* <button onClick={() => handleClick(2)} title="Xem thêm" id="xem-them-2" className="pro-more">Xem thêm</button>
              <div className="popup-content" id="popup-content-2" style={{ display: 'none' }}>
                Nội dung cho nút "Xem thêm" 2
              </div> */}
            </div>
          </div>

          <div className="col-lg-4 col-sm-4 col-md-4 col-12">
            <div className="single-box-item">
              <div className="icon">
                <img
                  src="https://dv02.mediawz.com/wp-content/uploads/2023/05/home-version-three-revenue-traffiic-icon4.png"
                  alt=" "
                />
              </div>
              <h3>THỜI GIAN NHANH CHÓNG</h3>
              <p>Thời gian giải quyết công việc của chúng tôi luôn nhanh nhất có thể để khách hàng hài lòng và tin tưởng.</p>
              {/* <button onClick={() => handleClick(3)} title="Xem thêm" id="xem-them-3" className="pro-more">Xem thêm</button>
              <div className="popup-content" id="popup-content-3" style={{ display: 'none' }}>
                Nội dung cho nút "Xem thêm" 3
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;