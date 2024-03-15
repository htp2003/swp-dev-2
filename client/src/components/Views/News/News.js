/* global Swiper */
import React, { Component } from 'react';
import './News.css';

class BlogSection extends Component {
    render() {
        return (
            <div className="section_blog-1">
                <div className="container-1">
                    <div className="block-title-1">
                        <p>Tin tức &amp; cập nhật</p>
                        <h2><a  title="Bài viết mới nhất">Bài viết mới nhất</a></h2>
                    </div>
                    <div className="block-content">
                        <div className="margin-am">
                            <div className="swiper-container swiper-blog swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events" style={{ cursor: "grab" }}>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide swiper-slide-prev" style={{ width: "270px", marginRight: "30px" }}>
                                        <div className="item-blog">
                                            <div className="block-thumb">
                                                <a className="thumb" href="https://example.com" title="Qui định mới về đất xây đựng không có giấy tờ">
                                                    <img className="img-responsive lazyload loaded" src="https://media.istockphoto.com/id/1456699734/vi/anh/k%E1%BB%B9-s%C6%B0-trao-%C4%91%E1%BB%95i-v%E1%BB%9Bi-nh%C3%A0-th%E1%BA%A7u-%C4%91%E1%BB%83-gi%C3%A1m-s%C3%A1t-v%C3%A0-l%C3%AAn-k%E1%BA%BF-ho%E1%BA%A1ch-cho-c%C3%B4ng-vi%E1%BB%87c.jpg?s=612x612&w=0&k=20&c=evg_rR5foq8HDcVxtr7OeiUXMDUDUDD-y8idYQ3NIr4=" 
                                                    alt="Qui định mới về đất xây đựng không có giấy tờ" data-was-processed="true" />
                                                </a>
                                            </div>
                                            <div className="block-info">
                                                <div className="post">
                                                    <div className="time-post f">
                                                        <b>Thứ hai, 11/3/2024</b>
                                                    </div>
                                                    -
                                                    <div className="time-post">
                                                        <span>admin</span>
                                                    </div>
                                                </div>
                                                <h3>
                                                    <a href="https://laodong.vn/bat-dong-san/quy-dinh-moi-ve-dat-khong-co-giay-to-1313750.ldo" title="Qui định mới về đất xây đựng không có giấy tờ">Qui định mới về đất xây đựng không có giấy tờ</a>
                                                </h3>
                                                <p>Đất không có giấy tờ là đất mà người dân đang sử dụng không có một trong những loại giấy tờ về quyền sử dụng đất.Tuy nhiên, với những nỗ lực bình ổn, tháo gỡ khó khăn cho thị trường bất động sản của Chính phủ, các Bộ, ngành, cùng với sự quyết liệt, chỉ đạo kịp thời.</p>
                                                <p className="link-more"><a href="https://laodong.vn/bat-dong-san/quy-dinh-moi-ve-dat-khong-co-giay-to-1313750.ldo" className="more-link">Xem thêm<span className="screen-reader-text"> “Qui định mới về đất xây đựng không có giấy tờ”</span></a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-active" style={{ width: "270px", marginRight: "30px" }}>
                                        <div className="item-blog">
                                            <div className="block-thumb">
                                                <a className="thumb" href="https://example.com" title="Bộ Xây dựng công bố danh mục thủ tục hành chính">
                                                    <img className="img-responsive lazyload loaded" src="https://media.istockphoto.com/id/1334261969/vi/anh/c%C3%A1c-k%E1%BB%B9-s%C6%B0-x%C3%A2y-d%E1%BB%B1ng-th%E1%BA%A3o-lu%E1%BA%ADn-v%E1%BB%9Bi-nh%C3%A0-thi%E1%BA%BFt-k%E1%BA%BF-t%E1%BA%A1i-c%C3%B4ng-tr%C6%B0%E1%BB%9Dng-x%C3%A2y-d%E1%BB%B1ng-ho%E1%BA%B7c-c%C3%B4ng-tr%C6%B0%E1%BB%9Dng-x%C3%A2y.jpg?s=612x612&w=0&k=20&c=PEa7agsKdWVtz56YrfvI5vFo3InhxwFcDgLu3XikcnI=" 
                                                    alt="Bộ Xây dựng công bố danh mục thủ tục hành chính" data-was-processed="true" />
                                                </a>
                                            </div>
                                            <div className="block-info">
                                                <div className="post">
                                                    <div className="time-post f">
                                                        <b>Thứ hai, 11/3/2024</b>
                                                    </div>
                                                    -
                                                    <div className="time-post">
                                                        <span>admin</span>
                                                    </div>
                                                </div>
                                                <h3>
                                                    <a href="https://www.tinnhanhchungkhoan.vn/bo-xay-dung-cong-bo-danh-muc-thu-tuc-hanh-chinh-thuc-hien-dich-vu-cong-truc-tuyen-toan-trinh-post341098.html" title="Bộ Xây dựng công bố danh mục thủ tục hành chính">Bộ Xây dựng công bố danh mục thủ tục hành chính</a>
                                                </h3>
                                                <p>Bộ Xây dựng đã ban hành Quyết định 157/QĐ-BXD công bố Danh mục thủ tục hành chính thuộc phạm vi quản lý.Tuy nhiên, với những nỗ lực bình ổn, tháo gỡ khó khăn cho thị trường bất động sản.</p>
                                                <p className="link-more"><a href="https://www.tinnhanhchungkhoan.vn/bo-xay-dung-cong-bo-danh-muc-thu-tuc-hanh-chinh-thuc-hien-dich-vu-cong-truc-tuyen-toan-trinh-post341098.html" className="more-link">Xem thêm<span className="screen-reader-text"> “Bộ Xây dựng công bố danh mục thủ tục hành chính”</span></a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-active" style={{ width: "270px", marginRight: "30px" }}>
                                        <div className="item-blog">
                                            <div className="block-thumb">
                                                <a className="thumb" href="https://example.com" title="Quyết định 161/QĐ-BXD 2024 Kế hoạch kiểm tra VBQPPL lĩnh vực quản lý Nhà nước">
                                                    <img className="img-responsive lazyload loaded" src="https://media.istockphoto.com/id/1334261969/vi/anh/c%C3%A1c-k%E1%BB%B9-s%C6%B0-x%C3%A2y-d%E1%BB%B1ng-th%E1%BA%A3o-lu%E1%BA%ADn-v%E1%BB%9Bi-nh%C3%A0-thi%E1%BA%BFt-k%E1%BA%BF-t%E1%BA%A1i-c%C3%B4ng-tr%C6%B0%E1%BB%9Dng-x%C3%A2y-d%E1%BB%B1ng-ho%E1%BA%B7c-c%C3%B4ng-tr%C6%B0%E1%BB%9Dng-x%C3%A2y.jpg?s=612x612&w=0&k=20&c=PEa7agsKdWVtz56YrfvI5vFo3InhxwFcDgLu3XikcnI=" 
                                                    alt="Quyết định 161/QĐ-BXD 2024 Kế hoạch kiểm tra VBQPPL lĩnh vực quản lý Nhà nước" data-was-processed="true" />
                                                </a>
                                            </div>
                                            <div className="block-info">
                                                <div className="post">
                                                    <div className="time-post f">
                                                        <b>Thứ hai, 11/3/2024</b>
                                                    </div>
                                                    -
                                                    <div className="time-post">
                                                        <span>admin</span>
                                                    </div>
                                                </div>
                                                <h3>
                                                    <a href="https://luatvietnam.vn/xay-dung/quyet-dinh-161-qd-bxd-2024-ke-hoach-kiem-tra-vbqppl-linh-vuc-quan-ly-nha-nuoc-303610-d1.html" title="Quyết định 161/QĐ-BXD 2024 Kế hoạch kiểm tra VBQPPL lĩnh vực quản lý Nhà nước">Quyết định 161/QĐ-BXD 2024 Kế hoạch kiểm tra VBQPPL lĩnh vực quản lý Nhà nước</a>
                                                </h3>
                                                <p>Chiều nay (12/3), Đoàn Đại biểu Quốc hội tỉnh tổ chức Hội nghị giám sát chuyên đề: “việc thực hiện chính sách, pháp luật về quan lý bất động sản (BĐS).</p>
                                                <p className="link-more"><a href="https://luatvietnam.vn/xay-dung/quyet-dinh-161-qd-bxd-2024-ke-hoach-kiem-tra-vbqppl-linh-vuc-quan-ly-nha-nuoc-303610-d1.html" className="more-link">Xem thêm<span className="screen-reader-text"> “Quyết định 161/QĐ-BXD 2024 Kế hoạch kiểm tra VBQPPL lĩnh vực quản lý Nhà nước”</span></a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-active" style={{ width: "270px", marginRight: "30px" }}>
                                        <div className="item-blog">
                                            <div className="block-thumb">
                                                <a className="thumb" href="https://example.com" title="Giải bài toán nhà ở cho người dân đô thị lớn">
                                                    <img className="img-responsive lazyload loaded" src="https://media.istockphoto.com/id/1334261969/vi/anh/c%C3%A1c-k%E1%BB%B9-s%C6%B0-x%C3%A2y-d%E1%BB%B1ng-th%E1%BA%A3o-lu%E1%BA%ADn-v%E1%BB%9Bi-nh%C3%A0-thi%E1%BA%BFt-k%E1%BA%BF-t%E1%BA%A1i-c%C3%B4ng-tr%C6%B0%E1%BB%9Dng-x%C3%A2y-d%E1%BB%B1ng-ho%E1%BA%B7c-c%C3%B4ng-tr%C6%B0%E1%BB%9Dng-x%C3%A2y.jpg?s=612x612&w=0&k=20&c=PEa7agsKdWVtz56YrfvI5vFo3InhxwFcDgLu3XikcnI=" 
                                                    alt="Giải bài toán nhà ở cho người dân đô thị lớn" data-was-processed="true" />
                                                </a>
                                            </div>
                                            <div className="block-info">
                                                <div className="post">
                                                    <div className="time-post f">
                                                        <b>Thứ hai, 11/3/2024</b>
                                                    </div>
                                                    -
                                                    <div className="time-post">
                                                        <span>admin</span>
                                                    </div>
                                                </div>
                                                <h3>
                                                    <a href="https://kinhte.congthuong.vn/giai-bai-toan-nha-o-cho-nguoi-dan-do-thi-lon-308262.html" title="Giải bài toán nhà ở cho người dân đô thị lớn">Giải bài toán nhà ở cho người dân đô thị lớn</a>
                                                </h3>
                                                <p>Trong vòng 5 năm (2019 – 2023), chỉ số chênh lệch giữa giá nhà và thu nhập hộ gia đình (house price-to-income ratio) tại Việt Nam tăng 19,5%. Tuy nhiên, với những nỗ lực bình ổn, tháo gỡ khó khăn cho thị trường bất động sản của Chính phủ, các Bộ, ngành.</p>
                                                <p className="link-more"><a href="https://kinhte.congthuong.vn/giai-bai-toan-nha-o-cho-nguoi-dan-do-thi-lon-308262.html" className="more-link">Xem thêm<span className="screen-reader-text"> “Giải bài toán nhà ở cho người dân đô thị lớn”</span></a></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Add more blog posts as needed */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogSection;
