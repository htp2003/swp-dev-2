import React, { useState } from 'react';
import "./Quotation.css";

const Quotation = () => {
    // Danh sách báo giá của người dùng
    const [quotations, setQuotations] = useState([]);

    // Hàm xử lý khi người dùng nhấn vào nút "Nhận báo giá chuẩn"
    const handleStandardQuote = (index) => {
        // Thêm báo giá chuẩn vào danh sách
        setQuotations(prevQuotations => {
            const updatedQuotations = [...prevQuotations];
            updatedQuotations[index] += " - Yêu cầu đang được xử lý bởi staff ";
            return updatedQuotations;
        });
    };

    // Hàm xử lý khi người dùng nhấn vào nút "Yêu cầu tạo hợp đồng"
    const handleContractRequest = (index) => {
        // Thêm yêu cầu tạo hợp đồng vào danh sách
        setQuotations(prevQuotations => {
            const updatedQuotations = [...prevQuotations];
            updatedQuotations[index] += " - Hợp đồng đang trong quá trình xử lý bởi admin";
            return updatedQuotations;
        });
    };

    // Hàm xử lý khi người dùng thêm một mục báo giá mới
    const handleAddQuotation = () => {
        setQuotations([...quotations, "Quotation " + (quotations.length + 1)]);
    };

    return (
        <div>
            <h2>Danh sách kết quả tính</h2>
            {/* Hiển thị danh sách báo giá của người dùng */}
            <ul>
                {quotations.map((quote, index) => (
                    <li key={index}>
                        {quote}
                        {/* Nút nhận báo giá chuẩn */}
                        <button onClick={() => handleStandardQuote(index)}>Nhận báo giá chuẩn</button>
                        {/* Nút yêu cầu tạo hợp đồng */}
                        <button onClick={() => handleContractRequest(index)}>Yêu cầu tạo hợp đồng</button>
                    </li>
                ))}
            </ul>
            {/* Nút thêm một mục báo giá mới */}
            <button onClick={handleAddQuotation}>Thêm một mục báo giá mới</button>
        </div>
    );
};

export default Quotation;