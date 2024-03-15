import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

        <footer class="footer">
            <div class="footer-section">
                <h4>Về chúng tôi</h4>
                <ul>
                    <li><a href="/about-us">Câu chuyện của QuotaX</a></li>
                    <li><a href="/contact">Liên Hệ</a></li>
                    <li><a href="/policy">Chính sách &amp; Bảo mật</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Chúng tôi cung cấp</h4>
                <ul>
                    <li><a href="/blog">Thông tin thị trường</a></li>
                    <li><a href="/calculation">Báo giá xây dựng</a></li>
                    <li><a href="/NhaCap4">Thiết kế</a></li>

                </ul>
            </div>
            <div class="footer-section">
                <h4>Mạng Xã Hội</h4>
                <ul>
                    <li><a href="#Facebook">Facebook</a></li>
                    <li><a href="#Zalo">Zalo</a></li>
                    <li><a href="#Instagram">Instagram</a></li>
                </ul>
            </div>

            <div class="footer-bottom">
                <p>© Bản quyền QuotaX</p>
                <p>QuotaX@gmail.com</p>
                <p>QuotaX: Báo giá thi công nhà dân dụng!</p>
                <p>NVHSV, Thủ Đức, TP.HCM</p>
                <p>+84 12 3456 789</p>
            </div>
        </footer>
    );
};

export default Footer;