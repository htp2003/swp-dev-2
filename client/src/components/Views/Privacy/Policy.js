import React from 'react';
import './Policy.css';

const Policy = () => {
    return (
        <div className="policy-container">
            <h1 className="policy-title">Chính sách và Bảo mật</h1>

            <div className="policy-section">
                <h2 className="policy-section-title">Yêu cầu đối với dự án đầu tư xây dựng nhà ở mới nhất</h2>
                <p className="policy-section-content">
                    - Các dự án đầu tư xây dựng nhà ở phải tuân thủ Điều 19 Luật Nhà ở 2014, bao gồm các quy định về phê duyệt, triển khai, và tuân thủ quy hoạch chi tiết đã được phê duyệt.
                </p>
                <p className="policy-section-content">
                    - Tên dự án và các khu vực bên trong phải được đặt bằng tiếng Việt, và có thể được viết bằng tiếng nước ngoài sau.
                </p>
            </div>

            <div className="policy-section">
                <h2 className="policy-section-title">Các trường hợp phát triển nhà ở và trường hợp xây dựng nhà ở theo dự án</h2>
                <p className="policy-section-content">
                    - Các trường hợp phát triển nhà ở bao gồm nhà ở thương mại, nhà ở xã hội, nhà ở công vụ, nhà ở tái định cư và nhà ở cá nhân.
                </p>
                <p className="policy-section-content">
                    - Các trường hợp phát triển nhà ở theo dự án bao gồm phát triển nhà ở cho thuê, cải tạo nhà cũ, và phát triển nhà ở do nhà nước sở hữu.
                </p>
            </div>

            <div className="policy-section">
                <h2 className="policy-section-title">Yêu cầu đối với phát triển nhà ở</h2>
                <p className="policy-section-content">
                    - Phát triển nhà ở phải tuân thủ quy định của pháp luật về nhà ở, đảm bảo tiêu chuẩn, chất lượng xây dựng, an toàn và môi trường.
                </p>
                <p className="policy-section-content">
                    - Đối với khu vực đô thị, việc phát triển nhà ở phải tuân thủ quy hoạch chi tiết và được thực hiện theo dự án.
                </p>
            </div>
        </div>
    );
};

export default Policy;
