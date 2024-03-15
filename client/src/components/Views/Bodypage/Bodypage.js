import React, { useState } from 'react';
import Marquee from '../Marquee/Marquee';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import Introduction from '../Introduction/Intro';
import DetailPage from '../Introduction/DetailPage';
import Section from '../Section/Section';
import FindProjectForm from '../../Utilities/FindHouse/Find';
import News from '../News/News';
import Calculator from '../../Utilities/Calculator/Calculator';

const BodyPage = () => {
    // State để kiểm soát việc hiển thị trang chi tiết
    const [showDetailPage, setShowDetailPage] = useState(false);
    const [detailData, setDetailData] = useState({});

    // Hàm xử lý khi nhấp vào liên kết "Xem thêm"
    const handleShowDetailPage = (data) => {
        setDetailData(data);
        setShowDetailPage(true);
    };

    return (
        <div>
            <Marquee />
            <BannerCarousel />
            <FindProjectForm />
            <Section/>
            {/* Block 1: Giới thiệu */}
            {showDetailPage ? (
                <DetailPage data={detailData} />
            ) : (
                <Introduction onShowDetailPage={handleShowDetailPage} />
            )}
            <News />
            <Calculator />
        </div>
    );
};

export default BodyPage;
