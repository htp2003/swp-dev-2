import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import './auth.css';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        fullname: '',
        email: '',
        password: '',
        address: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/register', formData);
            // Notification
            toast.success('Registration successful!', { autoClose: 2000 }); // Auto close after 2 seconds

            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            console.error('Error registering user:', error);
            toast.error('Registration failed. Please try again.');
        }
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <h2 className="title-register">Đăng Ký</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">

                        <input type="text" name="username" placeholder='Tên đăng nhập' onChange={handleChange} required />
                    </div>
                    <div className="input-field">

                        <input type="text" name="fullname" placeholder='Họ và tên' onChange={handleChange} required />
                    </div>
                    <div className="input-field">

                        <input type="email" name="email" placeholder='Email' onChange={handleChange} required />
                    </div>
                    <div className="input-field">

                        <input type="password" name="password" placeholder='Mật khẩu' onChange={handleChange} required />
                    </div>
                    <div className="input-field">

                        <input type="text" name="address" placeholder='Địa chỉ' onChange={handleChange} required />
                    </div>
                    <div className="input-field">

                        <input type="text" name="phone" placeholder='Số điện thoại' onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn register-btn">
                        Đăng Ký
                    </button>
                </form>

                <p>
                    Bạn đã có tài khoản? <br></br>
                    <Link to="/login" style={{ textDecoration: 'none' }}>Đăng Nhập</Link>
                </p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;